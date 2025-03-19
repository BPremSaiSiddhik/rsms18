from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timedelta
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB connection
MONGO_URI = os.environ.get('MONGO_URI', 'mongodb://localhost:27017/')
client = MongoClient(MONGO_URI)

# Helper functions
def serialize_expense(expense):
    """Convert MongoDB document to JSON serializable format"""
    expense['_id'] = str(expense['_id'])
    return expense

def get_db(store_id):
    """Get database instance using storeId as database name"""
    return client[store_id]

@app.route('/api/expenses', methods=['POST'])
def add_expense():
    """Add a new expense to the database"""
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['storeId', 'userId', 'expenseId', 'category', 'description', 'amount', 'date']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({
                    'success': False,
                    'message': f'Missing required field: {field}'
                }), 400
        
        # Get database using storeId as the database name
        store_id = data['storeId']
        db = get_db(store_id)
        expenses_collection = db['expenses']
        
        # Prepare expense document
        expense = {
            'storeId': store_id,
            'userId': data['userId'],
            'expenseId': data['expenseId'],
            'category': data['category'],
            'description': data['description'],
            'amount': float(data['amount']),
            'date': data['date'],
            'status': data.get('status', 'pending'),
            'createdAt': datetime.utcnow(),
            'updatedAt': datetime.utcnow()
        }
        
        # Insert into database
        result = expenses_collection.insert_one(expense)
        
        return jsonify({
            'success': True,
            'message': 'Expense added successfully',
            'expenseId': data['expenseId']
        }), 201
        
    except Exception as e:
        app.logger.error(f"Error adding expense: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while adding the expense'
        }), 500

@app.route('/api/expenses', methods=['GET'])
def get_expenses():
    """Get expenses with optional filtering"""
    try:
        # Get storeId from query parameters - using it as database name
        store_id = request.args.get('storeId')
        
        if not store_id:
            return jsonify({
                'success': False,
                'message': 'Missing store ID'
            }), 400
        
        # Get database using storeId as the database name
        db = get_db(store_id)
        expenses_collection = db['expenses']
        
        # Get other filter parameters
        user_id = request.args.get('userId')
        category = request.args.get('category')
        start_date = request.args.get('startDate')
        end_date = request.args.get('endDate')
        limit = int(request.args.get('limit', 10))
        
        # Build query
        query = {}
        
        if user_id:
            query['userId'] = user_id
            
        if category:
            query['category'] = category
            
        if start_date and end_date:
            query['date'] = {'$gte': start_date, '$lte': end_date}
        elif start_date:
            query['date'] = {'$gte': start_date}
        elif end_date:
            query['date'] = {'$lte': end_date}
        
        # Execute query
        expenses = list(expenses_collection.find(query).sort('date', -1).limit(limit))
        
        # Serialize for JSON response
        serialized_expenses = [serialize_expense(expense) for expense in expenses]
        
        return jsonify({
            'success': True,
            'expenses': serialized_expenses,
            'count': len(serialized_expenses)
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error fetching expenses: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while fetching expenses'
        }), 500

@app.route('/api/expenses/<expense_id>', methods=['PUT'])
def update_expense(expense_id):
    """Update an existing expense"""
    try:
        data = request.json
        
        # Validate store ID
        store_id = data.get('storeId')
        if not store_id:
            return jsonify({
                'success': False,
                'message': 'Missing store ID'
            }), 400
            
        # Get database using storeId as the database name
        db = get_db(store_id)
        expenses_collection = db['expenses']
        
        # Find expense by ID
        existing_expense = expenses_collection.find_one({
            'expenseId': expense_id
        })
        
        if not existing_expense:
            return jsonify({
                'success': False,
                'message': 'Expense not found'
            }), 404
            
        # Update fields
        update_data = {
            'updatedAt': datetime.utcnow()
        }
        
        for field in ['category', 'description', 'amount', 'date', 'status']:
            if field in data:
                update_data[field] = data[field]
        
        # Convert amount to float if present
        if 'amount' in update_data:
            update_data['amount'] = float(update_data['amount'])
            
        # Update the document
        expenses_collection.update_one(
            {'expenseId': expense_id},
            {'$set': update_data}
        )
        
        return jsonify({
            'success': True,
            'message': 'Expense updated successfully'
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error updating expense: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while updating the expense'
        }), 500

@app.route('/api/expenses/<expense_id>', methods=['DELETE'])
def delete_expense(expense_id):
    """Delete an expense"""
    try:
        store_id = request.args.get('storeId')
        
        if not store_id:
            return jsonify({
                'success': False,
                'message': 'Missing store ID'
            }), 400
            
        # Get database using storeId as the database name
        db = get_db(store_id)
        expenses_collection = db['expenses']
        
        # Delete the expense
        result = expenses_collection.delete_one({
            'expenseId': expense_id
        })
        
        if result.deleted_count == 0:
            return jsonify({
                'success': False,
                'message': 'Expense not found'
            }), 404
            
        return jsonify({
            'success': True,
            'message': 'Expense deleted successfully'
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error deleting expense: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while deleting the expense'
        }), 500

@app.route('/api/expenses/summary', methods=['GET'])
def get_expense_summary():
    """Get expense summary statistics"""
    try:
        store_id = request.args.get('storeId')
        period = request.args.get('period', 'month')  # day, week, month, year
        
        if not store_id:
            return jsonify({
                'success': False,
                'message': 'Missing store ID'
            }), 400
            
        # Get database using storeId as the database name
        db = get_db(store_id)
        expenses_collection = db['expenses']
        
        # Calculate start date based on period
        today = datetime.now()
        
        if period == 'day':
            start_date = today.strftime('%Y-%m-%d')
        elif period == 'week':
            # Start from Sunday of the current week
            start_date = (today - timedelta(days=today.weekday()+1)).strftime('%Y-%m-%d')
        elif period == 'month':
            start_date = f"{today.year}-{today.month:02d}-01"
        elif period == 'year':
            start_date = f"{today.year}-01-01"
        else:
            start_date = f"{today.year}-{today.month:02d}-01"  # Default to month
            
        # Query expenses for the period
        expenses = list(expenses_collection.find({
            'date': {'$gte': start_date}
        }))
        
        # Calculate totals by category
        category_totals = {}
        total_amount = 0
        
        for expense in expenses:
            category = expense['category']
            amount = expense['amount']
            
            if category not in category_totals:
                category_totals[category] = 0
                
            category_totals[category] += amount
            total_amount += amount
            
        # Prepare summary response
        summary = {
            'period': period,
            'totalAmount': total_amount,
            'categoryBreakdown': category_totals,
            'expenseCount': len(expenses)
        }
        
        return jsonify({
            'success': True,
            'summary': summary
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error generating expense summary: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while generating the expense summary'
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5022, debug=True)