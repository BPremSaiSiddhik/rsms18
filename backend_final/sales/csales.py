from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from bson.errors import InvalidId
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# MongoDB Client
client = MongoClient('mongodb://localhost:27017/')

def get_store_db(store_id):
    """Retrieve the database for the specified store ID."""
    if not store_id:
        raise ValueError("Store ID is required.")
    return client[store_id]

@app.errorhandler(Exception)
def handle_exception(e):
    """Global error handler."""
    return jsonify({"error": str(e)}), 500

# Route to get all products for a specific store
@app.route('/products', methods=['GET'])
def get_products():
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        products = list(products_collection.find())
        for product in products:
            product['_id'] = str(product['_id'])  # Convert ObjectId to string
        return jsonify(products)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/products/category/<string:category>', methods=['GET'])
def get_products_by_category(category):
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        products = list(products_collection.find({"category": category}))
        for product in products:
            product['_id'] = str(product['_id'])  # Convert ObjectId to string
        return jsonify(products)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/products/top-selling', methods=['GET'])
def get_top_selling_products():
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']
        products_collection = store_db['products']

        # Aggregate sales data to find top-selling products
        pipeline = [
            {"$unwind": "$products"},
            {"$group": {"_id": "$products.productId", "total_sold": {"$sum": "$products.quantity"}}},
            {"$sort": {"total_sold": -1}},
            {"$limit": 10}
        ]
        top_selling = list(sales_collection.aggregate(pipeline))

        # Fetch product details for top-selling products
        top_products = []
        for item in top_selling:
            product_id = item['_id']
            product = products_collection.find_one({"_id": ObjectId(product_id)})
            if product:
                product['_id'] = str(product['_id'])
                product['total_sold'] = item['total_sold']
                top_products.append(product)

        return jsonify(top_products)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/products/<string:product_id>', methods=['GET'])
def get_product_details(product_id):
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        product_id_obj = ObjectId(product_id)
    except InvalidId:
        return jsonify({"error": "Invalid product ID"}), 400

    try:
        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        sales_collection = store_db['sales']

        # Fetch product details
        product = products_collection.find_one({"_id": product_id_obj})
        if not product:
            return jsonify({"error": "Product not found"}), 404

        # Fetch sales history for the product
        sales_history = list(sales_collection.find({"products.productId": product_id}))
        for sale in sales_history:
            sale['_id'] = str(sale['_id'])

        product['sales_history'] = sales_history
        product['_id'] = str(product['_id'])

        return jsonify(product)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/daily-sales', methods=['GET'])
def get_sales():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        # Get the date parameter from the query
        selected_date = request.args.get('date')  # Expecting 'YYYY-MM-DD' format
        if not selected_date:
            return jsonify({"error": "Date is required in the query parameters"}), 400

        # Set start and end times for the selected date
        start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
        end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

        # Query sales data for the selected date
        sales_cursor = sales_collection.find({
            "date": {
                "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
                "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
            }
        })

        sales_data = {
            selected_date: {"total_amount": 0, "sales": []}
        }
        for sale in sales_cursor:
            sales_data[selected_date]["sales"].append({
                "id": str(sale["_id"]),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "date": sale["date"]
            })
            sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

        if not sales_data[selected_date]["sales"]:
            return jsonify({"message": "No sales data found for the selected date."}), 404

        return jsonify(sales_data)

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5020)