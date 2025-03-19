from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from datetime import datetime
import logging

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/"
mongo = PyMongo(app)

# Helper function to calculate total salaries
def calculate_total_salaries(store_id):
    employees = mongo.db[store_id].employees.find()
    total_salaries = sum(float(emp.get("salary", 0)) for emp in employees)
    return total_salaries

# Helper function to calculate total product costs
def calculate_total_product_costs(store_id):
    products = mongo.db[store_id].products.find()
    total_costs = sum(float(prod.get("purchase_price", 0)) * float(prod.get("quantity", 0)) for prod in products)
    return total_costs

# Get Revenue vs. Expenses Data
@app.route('/financial/revenue-expenses', methods=['GET'])
def get_revenue_expenses():
    store_id = request.headers.get("storeId")
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        # Calculate total revenue from sales
        sales = mongo.db[store_id].sales.find()
        total_revenue = sum(float(sale.get("total_amount", 0)) for sale in sales)

        # Calculate total expenses (salaries + product costs + other expenses)
        total_salaries = calculate_total_salaries(store_id)
        total_product_costs = calculate_total_product_costs(store_id)
        other_expenses = mongo.db[store_id].expenses.find()
        total_other_expenses = sum(float(expense.get("amount", 0)) for expense in other_expenses)

        total_expenses = total_salaries + total_product_costs + total_other_expenses

        return jsonify({
            "revenue": total_revenue,
            "expenses": total_expenses,
            "profit": total_revenue - total_expenses,
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get Expense Breakdown
@app.route('/financial/expense-breakdown', methods=['GET'])
def get_expense_breakdown():
    store_id = request.headers.get("storeId")
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        # Salaries
        total_salaries = calculate_total_salaries(store_id)

        # Product Costs
        total_product_costs = calculate_total_product_costs(store_id)

        # Other Expenses
        other_expenses = mongo.db[store_id].expenses.find()
        other_expenses_list = [{"category": exp.get("category"), "amount": exp.get("amount")} for exp in other_expenses]

        expense_breakdown = [
            {"category": "Salaries", "amount": total_salaries},
            {"category": "Product Costs", "amount": total_product_costs},
            *other_expenses_list,
        ]

        return jsonify(expense_breakdown), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get Net Profit & Gross Margin
@app.route('/financial/net-profit', methods=['GET'])
def get_net_profit():
    store_id = request.headers.get("storeId")
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        # Calculate total revenue
        sales = mongo.db[store_id].sales.find()
        total_revenue = sum(float(sale.get("total_amount", 0)) for sale in sales)

        # Calculate COGS (Cost of Goods Sold)
        total_product_costs = calculate_total_product_costs(store_id)

        # Calculate gross profit
        gross_profit = total_revenue - total_product_costs
        gross_margin = (gross_profit / total_revenue) * 100 if total_revenue > 0 else 0

        # Calculate net profit
        total_expenses = sum(float(expense.get("amount", 0)) for expense in mongo.db[store_id].expenses.find())
        total_salaries = calculate_total_salaries(store_id)
        net_profit = gross_profit - total_expenses - total_salaries

        return jsonify({
            "net_profit": net_profit,
            "gross_margin": gross_margin,
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Get Cash Flow Analysis
@app.route('/financial/cash-flow', methods=['GET'])
def get_cash_flow():
    store_id = request.headers.get("storeId")
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        # Calculate daily revenue and expenses
        sales = mongo.db[store_id].sales.find()
        expenses = mongo.db[store_id].expenses.find()

        # Group by date
        cash_flow = {}
        for sale in sales:
            date = sale.get("date").split(" ")[0]  # Extract date only
            cash_flow[date] = cash_flow.get(date, {"revenue": 0, "expenses": 0})
            cash_flow[date]["revenue"] += float(sale.get("total_amount", 0))

        for expense in expenses:
            date = expense.get("date").split("T")[0]  # Extract date only
            cash_flow[date] = cash_flow.get(date, {"revenue": 0, "expenses": 0})
            cash_flow[date]["expenses"] += float(expense.get("amount", 0))

        return jsonify(cash_flow), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5023)