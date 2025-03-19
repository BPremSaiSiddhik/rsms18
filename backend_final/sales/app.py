
# # # # # # from flask import Flask, request, jsonify
# # # # # # from flask_cors import CORS
# # # # # # from pymongo import MongoClient
# # # # # # from bson import ObjectId
# # # # # # from datetime import datetime, timedelta
# # # # # # import calendar
# # # # # # from bson import ObjectId

# # # # # # app = Flask(__name__)
# # # # # # CORS(app)

# # # # # # # MongoDB Client
# # # # # # client = MongoClient('mongodb://localhost:27017/')

# # # # # # def get_store_db(store_id):
# # # # # #     """Retrieve the database for the specified store ID."""
# # # # # #     if not store_id:
# # # # # #         raise ValueError("Store ID is required.")
# # # # # #     return client[store_id]

# # # # # # @app.errorhandler(Exception)
# # # # # # def handle_exception(e):
# # # # # #     """Global error handler."""
# # # # # #     print(f"Error occurred: {str(e)}")  # Logging the error for easier debugging
# # # # # #     return jsonify({"error": str(e)}), 500

# # # # # # # Route to get all products for a specific store
# # # # # # @app.route('/products', methods=['GET'])
# # # # # # def get_products():
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']
# # # # # #         products = list(products_collection.find())
# # # # # #         for product in products:
# # # # # #             product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # #         return jsonify(products)
# # # # # #     except Exception as e:
# # # # # #         print(f"Error in /products: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to get daily sales data
# # # # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # # # def get_sales():
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         return jsonify({"error": "Store ID is required in headers"}), 400
    
# # # # # # #     try:
# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         sales_collection = store_db['sales']
# # # # # # #         timeframe = request.args.get('timeframe', 'day')
# # # # # # #         now = datetime.now()

# # # # # # #         # Define start_time and end_time based on the timeframe
# # # # # # #         if timeframe == 'hour':
# # # # # # #             start_time = now.replace(minute=0, second=0, microsecond=0)
# # # # # # #             end_time = now.replace(minute=59, second=59, microsecond=999999)
# # # # # # #         elif timeframe == 'day':
# # # # # # #             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # # #             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
# # # # # # #         elif timeframe == 'week':
# # # # # # #             start_time = now - timedelta(days=now.weekday())
# # # # # # #             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # # #             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
# # # # # # #         elif timeframe == 'month':
# # # # # # #             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
# # # # # # #             last_day = calendar.monthrange(now.year, now.month)[1]
# # # # # # #             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
# # # # # # #         else:
# # # # # # #             return jsonify({"error": "Invalid timeframe."}), 400

# # # # # # #         # Query sales data
# # # # # # #         sales_cursor = sales_collection.find({
# # # # # # #             "date": {
# # # # # # #                 "$gte": start_time,
# # # # # # #                 "$lte": end_time
# # # # # # #             }
# # # # # # #         })

# # # # # # #         sales_data = {}
# # # # # # #         for sale in sales_cursor:
# # # # # # #             date = sale["date"].split(" ")[0]  # Get the date part
# # # # # # #             if date not in sales_data:
# # # # # # #                 sales_data[date] = {"total_amount": 0, "sales": []}

# # # # # # #             sales_data[date]["sales"].append({
# # # # # # #                 "id": str(sale["_id"]),  # Convert ObjectId to string
# # # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # # #                 "products": sale.get("products", []),
# # # # # # #                 "date": sale["date"]
# # # # # # #             })

# # # # # # #             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

# # # # # # #         if not sales_data:
# # # # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # # # #         return jsonify(sales_data)
# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error in /api/daily-sales: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # @app.route('/api/daily-sale', methods=['GET'])
# # # # # # def ge_sales():
# # # # # #     try:
# # # # # #         store_id = request.headers.get("storeId")
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # # # # #         store_db = get_store_db(store_id)  # Corrected: Use get_store_db instead of set_store_database
# # # # # #         sales_collection = store_db['sales']

# # # # # #         timeframe = request.args.get('timeframe', 'day')
# # # # # #         now = datetime.now()

# # # # # #         # Define start_time and end_time based on the timeframe
# # # # # #         if timeframe == 'hour':
# # # # # #             start_time = now.replace(minute=0, second=0, microsecond=0)
# # # # # #             end_time = now.replace(minute=59, second=59, microsecond=999999)
# # # # # #         elif timeframe == 'day':
# # # # # #             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # #             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
# # # # # #         elif timeframe == 'week':
# # # # # #             start_time = now - timedelta(days=now.weekday())
# # # # # #             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # #             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
# # # # # #         elif timeframe == 'month':
# # # # # #             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
# # # # # #             last_day = calendar.monthrange(now.year, now.month)[1]
# # # # # #             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
# # # # # #         else:
# # # # # #             return jsonify({"error": "Invalid timeframe."}), 400

# # # # # #         # Query sales data
# # # # # #         sales_cursor = sales_collection.find({
# # # # # #             "date": {
# # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # #             }
# # # # # #         })

# # # # # #         sales_data = {}
# # # # # #         for sale in sales_cursor:
# # # # # #             date = sale["date"].split(" ")[0]  # Get the date part
# # # # # #             if date not in sales_data:
# # # # # #                 sales_data[date] = {"total_amount": 0, "sales": []}

# # # # # #             sales_data[date]["sales"].append({
# # # # # #                 "id": str(sale["_id"]),  # Convert ObjectId to string
# # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # #                 "products": sale.get("products", []),
# # # # # #                 "date": sale["date"]
# # # # # #             })

# # # # # #             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

# # # # # #         if not sales_data:
# # # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # # #         return jsonify(sales_data)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to get all users (employees)
# # # # # # # @app.route('/api/users', methods=['GET'])
# # # # # # # def get_users():
# # # # # # #     try:
# # # # # # #         store_id = request.args.get('storeId')  # Get storeId from query parameters
# # # # # # #         if not store_id:
# # # # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         users_collection = store_db['users']  # Assuming 'users' collection exists
# # # # # # #         users = list(users_collection.find())
# # # # # # #         for user in users:
# # # # # # #             user["_id"] = str(user["_id"])  # Convert ObjectId to string

# # # # # # #         if not users:
# # # # # # #             return jsonify({"message": "No users found."}), 404

# # # # # # #         return jsonify(users)

# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error in /api/users: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # # def get_sales():
# # # # # #     try:
# # # # # #         store_id = request.headers.get("storeId")
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Get the date parameter from the query
# # # # # #         selected_date = request.args.get('date')  # Expecting 'YYYY-MM-DD' format
# # # # # #         if not selected_date:
# # # # # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # # # # #         # Set start and end times for the selected date
# # # # # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # # # # #         # Query sales data for the selected date
# # # # # #         sales_cursor = sales_collection.find({
# # # # # #             "date": {
# # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # #             }
# # # # # #         })

# # # # # #         sales_data = {
# # # # # #             selected_date: {"total_amount": 0, "sales": []}
# # # # # #         }
# # # # # #         for sale in sales_cursor:
# # # # # #             sales_data[selected_date]["sales"].append({
# # # # # #                 "id": str(sale["_id"]),
# # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # #                 "products": sale.get("products", []),
# # # # # #                 "date": sale["date"]
# # # # # #             })
# # # # # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # # # # #         if not sales_data[selected_date]["sales"]:
# # # # # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # # # # #         return jsonify(sales_data)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # @app.route('/api/daily-sales-employee', methods=['GET'])
# # # # # # # def get_employee_sales():
# # # # # # #     try:
# # # # # # #         store_id = request.headers.get("storeId")
# # # # # # #         if not store_id:
# # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # #         # Get start and end dates from query parameters
# # # # # # #         start_date = request.args.get('startDate')
# # # # # # #         end_date = request.args.get('endDate')
# # # # # # #         if not start_date or not end_date:
# # # # # # #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# # # # # # #         # Convert dates to datetime objects
# # # # # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# # # # # # #         # Get the database for the store
# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         sales_collection = store_db['sales']

# # # # # # #         # Query sales data within the date range
# # # # # # #         sales_cursor = sales_collection.find({
# # # # # # #             "date": {
# # # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # # #             }
# # # # # # #         })

# # # # # # #         # Process sales data
# # # # # # #         sales_data = []
# # # # # # #         for sale in sales_cursor:
# # # # # # #             sales_data.append({
# # # # # # #                 "userId": sale.get("userId"),  # Ensure this field exists in your database
# # # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # # #                 "products": sale.get("products", []),
# # # # # # #                 "date": sale["date"]
# # # # # # #             })

# # # # # # #         if not sales_data:
# # # # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # # # #         return jsonify(sales_data)

# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # @app.route('/api/daily-sales-employee', methods=['GET'])
# # # # # # # def get_employee_sales():
# # # # # # #     try:
# # # # # # #         store_id = request.headers.get("storeId")
# # # # # # #         if not store_id:
# # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # #         # Get start and end dates from query parameters
# # # # # # #         start_date = request.args.get('startDate')
# # # # # # #         end_date = request.args.get('endDate')
# # # # # # #         if not start_date or not end_date:
# # # # # # #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# # # # # # #         # Convert dates to datetime objects
# # # # # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# # # # # # #         # Get the database for the store
# # # # # # #         store_db = mongo[store_id]
# # # # # # #         sales_collection = store_db['sales']

# # # # # # #         # Query sales data within the date range
# # # # # # #         sales_cursor = sales_collection.find({
# # # # # # #             "date": {
# # # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # # #             }
# # # # # # #         })

# # # # # # #         # Process sales data
# # # # # # #         sales_data = []
# # # # # # #         for sale in sales_cursor:
# # # # # # #             sales_data.append({
# # # # # # #                 "userId": sale.get("userId"),  # Ensure this field exists in your database
# # # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # # #                 "products": sale.get("products", []),
# # # # # # #                 "date": sale["date"]
# # # # # # #             })

# # # # # # #         if not sales_data:
# # # # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # # # #         return jsonify(sales_data)

# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # @app.route('/api/daily-sales-employee', methods=['GET'])
# # # # # # def get_employee_sales():
# # # # # #     try:
# # # # # #         store_id = request.headers.get("storeId")
# # # # # #         print("Received headers:", request.headers)  # Debugging line
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # #         # Get start and end dates from query parameters
# # # # # #         start_date = request.args.get('startDate')
# # # # # #         end_date = request.args.get('endDate')
# # # # # #         if not start_date or not end_date:
# # # # # #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# # # # # #         # Convert dates to datetime objects
# # # # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# # # # # #         # Get the database for the store
# # # # # #         store_db = mongo[store_id]
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Query sales data within the date range
# # # # # #         sales_cursor = sales_collection.find({
# # # # # #             "date": {
# # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # #             }
# # # # # #         })

# # # # # #         # Process sales data
# # # # # #         sales_data = []
# # # # # #         for sale in sales_cursor:
# # # # # #             sales_data.append({
# # # # # #                 "userId": sale.get("userId"),  # Ensure this field exists in your database
# # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # #                 "products": sale.get("products", []),
# # # # # #                 "date": sale["date"]
# # # # # #             })

# # # # # #         if not sales_data:
# # # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # # #         return jsonify(sales_data)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # @app.route('/api/product-sales', methods=['GET'])
# # # # # # def get_product_sales():
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     product_name = request.args.get('productName')  # Change to productName for the query
# # # # # #     if not store_id or not product_name:
# # # # # #         return jsonify({"error": "Store ID and Product Name are required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Fetch sales for the given product name
# # # # # #         product_sales = sales_collection.find({"products.name": product_name})

# # # # # #         product_sales_data = []
# # # # # #         for sale in product_sales:
# # # # # #             for product in sale["products"]:
# # # # # #                 if product["name"] == product_name:
# # # # # #                     product_sales_data.append({
# # # # # #                         "sale_id": str(sale["_id"]),
# # # # # #                         "total_amount": sale.get("total_amount", 0),
# # # # # #                         "quantity": product["quantity"],
# # # # # #                         "date": sale["date"]
# # # # # #                     })

# # # # # #         if not product_sales_data:
# # # # # #             return jsonify({"message": "No sales data found for the selected product."}), 404

# # # # # #         return jsonify({"sales_data": product_sales_data})

# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to get sales data for a specific product
# # # # # # # @app.route('/api/product-sales', methods=['GET'])
# # # # # # # def get_product_sales():
# # # # # # #     store_id = request.args.get('storeId')
# # # # # # #     product_id = request.args.get('productId')
# # # # # # #     if not store_id or not product_id:
# # # # # # #         return jsonify({"error": "Store ID and Product ID are required"}), 400

# # # # # # #     try:
# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         sales_collection = store_db['sales']
        
# # # # # # #         # Fetch sales for the given product
# # # # # # #         product_sales = sales_collection.find({"products.product_id": product_id})

# # # # # # #         product_sales_data = []
# # # # # # #         for sale in product_sales:
# # # # # # #             for product in sale["products"]:
# # # # # # #                 if product["product_id"] == product_id:
# # # # # # #                     product_sales_data.append({
# # # # # # #                         "sale_id": str(sale["_id"]),
# # # # # # #                         "total_amount": sale.get("total_amount", 0),
# # # # # # #                         "quantity": product["quantity"],
# # # # # # #                         "date": sale["date"]
# # # # # # #                     })

# # # # # # #         if not product_sales_data:
# # # # # # #             return jsonify({"message": "No sales data found for the selected product."}), 404

# # # # # # #         return jsonify({"sales_data": product_sales_data})
# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error in /api/product-sales: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # @app.route('/api/product-sales', methods=['GET'])
# # # # # # # def get_product_sales():
# # # # # # #     store_id = request.args.get('storeId')
# # # # # # #     product_id = request.args.get('productId')
# # # # # # #     if not store_id or not product_id:
# # # # # # #         return jsonify({"error": "Store ID and Product ID are required"}), 400

# # # # # # #     try:
# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         sales_collection = store_db['sales']
        
# # # # # # #         # Try converting productId to ObjectId if it's in string format
# # # # # # #         try:
# # # # # # #             product_id = ObjectId(product_id)
# # # # # # #         except Exception as e:
# # # # # # #             pass  # Keep product_id as string if it's already a valid ObjectId string

# # # # # # #         product_sales = sales_collection.find({"products.product_id": product_id})

# # # # # # #         product_sales_data = []
# # # # # # #         for sale in product_sales:
# # # # # # #             for product in sale["products"]:
# # # # # # #                 if product["product_id"] == product_id:
# # # # # # #                     product_sales_data.append({
# # # # # # #                         "sale_id": str(sale["_id"]),
# # # # # # #                         "total_amount": sale.get("total_amount", 0),
# # # # # # #                         "quantity": product["quantity"],
# # # # # # #                         "date": sale["date"]
# # # # # # #                     })

# # # # # # #         if not product_sales_data:
# # # # # # #             return jsonify({"message": "No sales data found for the selected product."}), 404

# # # # # # #         return jsonify({"sales_data": product_sales_data})
# # # # # # #     except Exception as e:
# # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to get the best-selling product
# # # # # # @app.route('/api/daily-sales1', methods=['GET'])
# # # # # # def get_daily_sales():
# # # # # #     try:
# # # # # #         store_id = request.args.get('storeId')  # Get storeId from query parameters
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Get the date parameter from the query (optional)
# # # # # #         selected_date = request.args.get('date')  # Expecting 'YYYY-MM-DD' format
# # # # # #         if selected_date:
# # # # # #             try:
# # # # # #                 start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # #                 end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
# # # # # #             except ValueError:
# # # # # #                 return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
# # # # # #         else:
# # # # # #             # If no date is provided, fetch all sales data
# # # # # #             start_time = None
# # # # # #             end_time = None

# # # # # #         # Query sales data
# # # # # #         query = {}
# # # # # #         if start_time and end_time:
# # # # # #             query["date"] = {
# # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # #             }

# # # # # #         sales_cursor = sales_collection.find(query)
# # # # # #         sales_data = []
# # # # # #         for sale in sales_cursor:
# # # # # #             sale["_id"] = str(sale["_id"])  # Convert ObjectId to string
# # # # # #             sales_data.append(sale)

# # # # # #         if not sales_data:
# # # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # # #         return jsonify(sales_data)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error in /api/daily-sales: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # @app.route('/api/daily-sales2', methods=['GET'])
# # # # # # def get_sales2():
# # # # # #     try:
# # # # # #         store_id = request.headers.get("storeId")
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         selected_date = request.args.get('date')  # Expecting 'YYYY-MM-DD' format
# # # # # #         if not selected_date:
# # # # # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # # # # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # # # # #         sales_cursor = sales_collection.find({
# # # # # #             "date": {
# # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # #             }
# # # # # #         })

# # # # # #         sales_data = { selected_date: {"total_amount": 0, "sales": []} }

# # # # # #         for sale in sales_cursor:
# # # # # #             sales_data[selected_date]["sales"].append({
# # # # # #                 "id": str(sale["_id"]),
# # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # #                 "products": sale.get("products", []),
# # # # # #                 "date": sale["date"]
# # # # # #             })
# # # # # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # # # # #         if not sales_data[selected_date]["sales"]:
# # # # # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # # # # #         return jsonify(sales_data)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # @app.route('/api/best-selling-product', methods=['GET'])
# # # # # # def get_best_selling_product():
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Aggregate sales data to get the best-selling product
# # # # # #         pipeline = [
# # # # # #             {"$unwind": "$products"},
# # # # # #             {"$group": {
# # # # # #                 "_id": "$products.name",  # Using the product name as identifier (name not product_id)
# # # # # #                 "total_quantity": {"$sum": "$products.quantity"},
# # # # # #                 "total_amount": {"$sum": "$products.total_price"}
# # # # # #             }},
# # # # # #             {"$sort": {"total_quantity": -1}},
# # # # # #             {"$limit": 1}
# # # # # #         ]
# # # # # #         best_selling_product = list(sales_collection.aggregate(pipeline))

# # # # # #         if not best_selling_product:
# # # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # # #         # The best-selling product details from the aggregation result
# # # # # #         best_selling = best_selling_product[0]
# # # # # #         product_name = best_selling["_id"]
# # # # # #         total_quantity = best_selling["total_quantity"]
# # # # # #         total_amount = best_selling["total_amount"]

# # # # # #         # Return best-selling product details
# # # # # #         return jsonify({
# # # # # #             "product_name": product_name,
# # # # # #             "total_quantity": total_quantity,
# # # # # #             "total_amount": total_amount
# # # # # #         })
# # # # # #     except Exception as e:
# # # # # #         print(f"Error in /api/best-selling-product: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # Route to get sales data by hour
# # # # # # @app.route('/api/hourly-sales', methods=['GET'])
# # # # # # def get_hourly_sales():
# # # # # #     try:
# # # # # #         store_id = request.headers.get("storeId")
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Query sales data for the given store
# # # # # #         sales_cursor = sales_collection.find({
# # # # # #             "date": {"$exists": True}  # Assuming 'date' is a datetime string
# # # # # #         })

# # # # # #         # Create a dictionary to store sales by hour
# # # # # #         hourly_sales = {str(hour): 0 for hour in range(24)}  # Initialize hourly sales for each hour of the day (0 to 23)

# # # # # #         for sale in sales_cursor:
# # # # # #             sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
# # # # # #             hour = sale_date.hour  # Get the hour part of the sale's timestamp
# # # # # #             hourly_sales[str(hour)] += sale.get("total_amount", 0)

# # # # # #         # Sort the sales by hour
# # # # # #         hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]

# # # # # #         if not hourly_sales_data:
# # # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # # #         return jsonify({"hourly_sales": hourly_sales_data})

# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # @app.route('/api/users', methods=['GET'])
# # # # # # # def get_users():
# # # # # # #     try:
# # # # # # #         store_id = request.args.get('storeId')  # Get storeId from query parameters
# # # # # # #         if not store_id:
# # # # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         users_collection = store_db['users']  # Assuming 'users' collection exists
# # # # # # #         users = list(users_collection.find({}, {"_id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))  # Fetch required fields
# # # # # # #         for user in users:
# # # # # # #             user["_id"] = str(user["_id"])  # Convert ObjectId to string

# # # # # # #         if not users:
# # # # # # #             return jsonify({"message": "No users found."}), 404

# # # # # # #         return jsonify(users)

# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error in /api/users: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # @app.route('/api/users', methods=['GET'])
# # # # # # # def get_users():
# # # # # # #     try:
# # # # # # #         store_id = request.args.get('storeId')  # Get storeId from query parameters
# # # # # # #         if not store_id:
# # # # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         users_collection = store_db['users']  # Assuming 'users' collection exists
# # # # # # #         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))  # Fetch required fields
# # # # # # #         for user in users:
# # # # # # #             user["_id"] = str(user["_id"])  # Convert ObjectId to string

# # # # # # #         if not users:
# # # # # # #             return jsonify({"message": "No users found."}), 404

# # # # # # #         return jsonify(users)

# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error in /api/users: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # @app.route('/api/users', methods=['GET'])
# # # # # # def get_users():
# # # # # #     try:
# # # # # #         store_id = request.args.get('storeId')  # Get storeId from query parameters
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         users_collection = store_db['users']  # Assuming 'users' collection exists
# # # # # #         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))  # Fetch required fields
# # # # # #         for user in users:
# # # # # #             user["_id"] = str(user["_id"])  # Convert ObjectId to string

# # # # # #         if not users:
# # # # # #             return jsonify({"message": "No users found."}), 404

# # # # # #         return jsonify(users)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error in /api/users: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True, port=5010)

# # # # # from flask import Flask, request, jsonify
# # # # # from flask_cors import CORS
# # # # # from pymongo import MongoClient
# # # # # from bson import ObjectId
# # # # # from datetime import datetime, timedelta
# # # # # import calendar
# # # # # import traceback

# # # # # app = Flask(__name__)
# # # # # CORS(app)

# # # # # # MongoDB Client
# # # # # client = MongoClient('mongodb://localhost:27017/')

# # # # # def get_store_db(store_id):
# # # # #     """Retrieve the database for the specified store ID."""
# # # # #     if not store_id:
# # # # #         raise ValueError("Store ID is required.")
# # # # #     return client[store_id]

# # # # # @app.errorhandler(Exception)
# # # # # def handle_exception(e):
# # # # #     """Global error handler."""
# # # # #     print(f"Error occurred: {str(e)}")
# # # # #     traceback.print_exc()  # Print stack trace for debugging
# # # # #     return jsonify({"error": str(e)}), 500

# # # # # # Route to get all products for a specific store
# # # # # @app.route('/products', methods=['GET'])
# # # # # def get_products():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         products = list(products_collection.find())
# # # # #         for product in products:
# # # # #             product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # #         return jsonify(products)
# # # # #     except Exception as e:
# # # # #         print(f"Error in /products: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get sales data by timeframe (hour, day, week, month)
# # # # # @app.route('/api/daily-sale', methods=['GET'])
# # # # # def get_sales():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         timeframe = request.args.get('timeframe', 'day')
# # # # #         now = datetime.now()

# # # # #         if timeframe == 'hour':
# # # # #             start_time = now.replace(minute=0, second=0, microsecond=0)
# # # # #             end_time = now.replace(minute=59, second=59, microsecond=999999)
# # # # #         elif timeframe == 'day':
# # # # #             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # # # #             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
# # # # #         elif timeframe == 'week':
# # # # #             start_time = now - timedelta(days=now.weekday())
# # # # #             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
# # # # #             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
# # # # #         elif timeframe == 'month':
# # # # #             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
# # # # #             last_day = calendar.monthrange(now.year, now.month)[1]
# # # # #             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
# # # # #         else:
# # # # #             return jsonify({"error": "Invalid timeframe."}), 400

# # # # #         sales_cursor = sales_collection.find({
# # # # #             "date": {
# # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # #             }
# # # # #         })

# # # # #         sales_data = {}
# # # # #         for sale in sales_cursor:
# # # # #             date = sale["date"].split(" ")[0]  # Get the date part
# # # # #             if date not in sales_data:
# # # # #                 sales_data[date] = {"total_amount": 0, "sales": []}

# # # # #             sales_data[date]["sales"].append({
# # # # #                 "id": str(sale["_id"]),
# # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # #                 "products": sale.get("products", []),
# # # # #                 "date": sale["date"]
# # # # #             })
# # # # #             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

# # # # #         if not sales_data:
# # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # #         return jsonify(sales_data)

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get sales for a specific date
# # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # def get_daily_sales_by_date():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         selected_date = request.args.get('date')
# # # # #         if not selected_date:
# # # # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # # # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # # # #         sales_cursor = sales_collection.find({
# # # # #             "date": {
# # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # #             }
# # # # #         })

# # # # #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# # # # #         for sale in sales_cursor:
# # # # #             sales_data[selected_date]["sales"].append({
# # # # #                 "id": str(sale["_id"]),
# # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # #                 "products": sale.get("products", []),
# # # # #                 "date": sale["date"]
# # # # #             })
# # # # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # # # #         if not sales_data[selected_date]["sales"]:
# # # # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # # # #         return jsonify(sales_data)

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get sales by employee within a date range (fixed endpoint)
# # # # # @app.route('/api/daily-sales-employee', methods=['GET'])
# # # # # def get_employee_sales():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         print("Received headers:", request.headers)  # Debugging line
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         start_date = request.args.get('startDate')
# # # # #         end_date = request.args.get('endDate')
# # # # #         if not start_date or not end_date:
# # # # #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# # # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         sales_cursor = sales_collection.find({
# # # # #             "date": {
# # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # #             }
# # # # #         })

# # # # #         sales_data = []
# # # # #         for sale in sales_cursor:
# # # # #             sales_data.append({
# # # # #                 "userId": sale.get("user_id"),
# # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # #                 "products": sale.get("products", []),
# # # # #                 "date": sale["date"]
# # # # #             })

# # # # #         if not sales_data:
# # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # #         return jsonify(sales_data)

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         traceback.print_exc()
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get sales for a specific product
# # # # # @app.route('/api/product-sales', methods=['GET'])
# # # # # def get_product_sales():
# # # # #     store_id = request.args.get('storeId')
# # # # #     product_name = request.args.get('productName')
# # # # #     if not store_id or not product_name:
# # # # #         return jsonify({"error": "Store ID and Product Name are required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         product_sales = sales_collection.find({"products.name": product_name})
# # # # #         product_sales_data = []
# # # # #         for sale in product_sales:
# # # # #             for product in sale["products"]:
# # # # #                 if product["name"] == product_name:
# # # # #                     product_sales_data.append({
# # # # #                         "sale_id": str(sale["_id"]),
# # # # #                         "total_amount": sale.get("total_amount", 0),
# # # # #                         "quantity": product["quantity"],
# # # # #                         "date": sale["date"]
# # # # #                     })

# # # # #         if not product_sales_data:
# # # # #             return jsonify({"message": "No sales data found for the selected product."}), 404

# # # # #         return jsonify({"sales_data": product_sales_data})

# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get daily sales (optional date filter)
# # # # # @app.route('/api/daily-sales1', methods=['GET'])
# # # # # def get_daily_sales():
# # # # #     try:
# # # # #         store_id = request.args.get('storeId')
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         selected_date = request.args.get('date')
# # # # #         if selected_date:
# # # # #             try:
# # # # #                 start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # #                 end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
# # # # #             except ValueError:
# # # # #                 return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
# # # # #         else:
# # # # #             start_time = None
# # # # #             end_time = None

# # # # #         query = {}
# # # # #         if start_time and end_time:
# # # # #             query["date"] = {
# # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # #             }

# # # # #         sales_cursor = sales_collection.find(query)
# # # # #         sales_data = []
# # # # #         for sale in sales_cursor:
# # # # #             sale["_id"] = str(sale["_id"])
# # # # #             sales_data.append(sale)

# # # # #         if not sales_data:
# # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # #         return jsonify(sales_data)

# # # # #     except Exception as e:
# # # # #         print(f"Error in /api/daily-sales1: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Another route to get sales for a specific date
# # # # # @app.route('/api/daily-sales2', methods=['GET'])
# # # # # def get_sales2():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         selected_date = request.args.get('date')
# # # # #         if not selected_date:
# # # # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # # # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # # # #         sales_cursor = sales_collection.find({
# # # # #             "date": {
# # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # #             }
# # # # #         })

# # # # #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# # # # #         for sale in sales_cursor:
# # # # #             sales_data[selected_date]["sales"].append({
# # # # #                 "id": str(sale["_id"]),
# # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # #                 "products": sale.get("products", []),
# # # # #                 "date": sale["date"]
# # # # #             })
# # # # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # # # #         if not sales_data[selected_date]["sales"]:
# # # # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # # # #         return jsonify(sales_data)

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get the best-selling product
# # # # # @app.route('/api/best-selling-product', methods=['GET'])
# # # # # def get_best_selling_product():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         pipeline = [
# # # # #             {"$unwind": "$products"},
# # # # #             {"$group": {
# # # # #                 "_id": "$products.name",
# # # # #                 "total_quantity": {"$sum": "$products.quantity"},
# # # # #                 "total_amount": {"$sum": "$products.total_price"}
# # # # #             }},
# # # # #             {"$sort": {"total_quantity": -1}},
# # # # #             {"$limit": 1}
# # # # #         ]
# # # # #         best_selling_product = list(sales_collection.aggregate(pipeline))

# # # # #         if not best_selling_product:
# # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # #         best_selling = best_selling_product[0]
# # # # #         return jsonify({
# # # # #             "product_name": best_selling["_id"],
# # # # #             "total_quantity": best_selling["total_quantity"],
# # # # #             "total_amount": best_selling["total_amount"]
# # # # #         })
# # # # #     except Exception as e:
# # # # #         print(f"Error in /api/best-selling-product: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get hourly sales
# # # # # @app.route('/api/hourly-sales', methods=['GET'])
# # # # # def get_hourly_sales():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         sales_cursor = sales_collection.find({"date": {"$exists": True}})

# # # # #         hourly_sales = {str(hour): 0 for hour in range(24)}
# # # # #         for sale in sales_cursor:
# # # # #             sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
# # # # #             hour = sale_date.hour
# # # # #             hourly_sales[str(hour)] += sale.get("total_amount", 0)

# # # # #         hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]
# # # # #         if not any(item["sales_amount"] for item in hourly_sales_data):
# # # # #             return jsonify({"message": "No sales data found."}), 404

# # # # #         return jsonify({"hourly_sales": hourly_sales_data})

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # # Route to get users
# # # # # @app.route('/api/users', methods=['GET'])
# # # # # def get_users():
# # # # #     try:
# # # # #         store_id = request.args.get('storeId')
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         users_collection = store_db['users']
# # # # #         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))
# # # # #         for user in users:
# # # # #             user["_id"] = str(user["_id"])

# # # # #         if not users:
# # # # #             return jsonify({"message": "No users found."}), 404

# # # # #         return jsonify(users)

# # # # #     except Exception as e:
# # # # #         print(f"Error in /api/users: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, port=5010)
# # # # from flask import Flask, request, jsonify
# # # # from flask_cors import CORS
# # # # from pymongo import MongoClient
# # # # from bson import ObjectId
# # # # from datetime import datetime, timedelta
# # # # import calendar
# # # # import traceback

# # # # app = Flask(__name__)
# # # # CORS(app)

# # # # # MongoDB Client
# # # # client = MongoClient('mongodb://localhost:27017/')

# # # # def get_store_db(store_id):
# # # #     """Retrieve the database for the specified store ID."""
# # # #     if not store_id:
# # # #         raise ValueError("Store ID is required.")
# # # #     return client[store_id]

# # # # @app.errorhandler(Exception)
# # # # def handle_exception(e):
# # # #     """Global error handler."""
# # # #     print(f"Error occurred: {str(e)}")
# # # #     traceback.print_exc()
# # # #     return jsonify({"error": str(e)}), 500

# # # # @app.route('/products', methods=['GET'])
# # # # def get_products():
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         products = list(products_collection.find())
# # # #         for product in products:
# # # #             product['_id'] = str(product['_id'])
# # # #         return jsonify(products)
# # # #     except Exception as e:
# # # #         print(f"Error in /products: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/daily-sale', methods=['GET'])
# # # # def get_sales():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         timeframe = request.args.get('timeframe', 'day')
# # # #         now = datetime.now()

# # # #         if timeframe == 'hour':
# # # #             start_time = now.replace(minute=0, second=0, microsecond=0)
# # # #             end_time = now.replace(minute=59, second=59, microsecond=999999)
# # # #         elif timeframe == 'day':
# # # #             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # # #             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
# # # #         elif timeframe == 'week':
# # # #             start_time = now - timedelta(days=now.weekday())
# # # #             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
# # # #             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
# # # #         elif timeframe == 'month':
# # # #             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
# # # #             last_day = calendar.monthrange(now.year, now.month)[1]
# # # #             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
# # # #         else:
# # # #             return jsonify({"error": "Invalid timeframe."}), 400

# # # #         sales_cursor = sales_collection.find({
# # # #             "date": {
# # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # #             }
# # # #         })

# # # #         sales_data = {}
# # # #         for sale in sales_cursor:
# # # #             date = sale["date"].split(" ")[0]
# # # #             if date not in sales_data:
# # # #                 sales_data[date] = {"total_amount": 0, "sales": []}

# # # #             sales_data[date]["sales"].append({
# # # #                 "id": str(sale["_id"]),
# # # #                 "total_amount": sale.get("total_amount", 0),
# # # #                 "products": sale.get("products", []),
# # # #                 "date": sale["date"],
# # # #                 "invoiceNumber": sale.get("invoiceNumber", ""),
# # # #                 "serialNumber": sale.get("serialNumber", 0)
# # # #             })
# # # #             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

# # # #         if not sales_data:
# # # #             return jsonify({"message": "No sales data found."}), 404

# # # #         return jsonify(sales_data)
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # def get_daily_sales_by_date():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         selected_date = request.args.get('date')
# # # #         if not selected_date:
# # # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # # #         sales_cursor = sales_collection.find({
# # # #             "date": {
# # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # #             }
# # # #         })

# # # #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# # # #         for sale in sales_cursor:
# # # #             sales_data[selected_date]["sales"].append({
# # # #                 "id": str(sale["_id"]),
# # # #                 "total_amount": sale.get("total_amount", 0),
# # # #                 "products": sale.get("products", []),
# # # #                 "date": sale["date"],
# # # #                 "invoiceNumber": sale.get("invoiceNumber", ""),
# # # #                 "serialNumber": sale.get("serialNumber", 0)
# # # #             })
# # # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # # #         if not sales_data[selected_date]["sales"]:
# # # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # # #         return jsonify(sales_data)
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/daily-sales-employee', methods=['GET'])
# # # # def get_employee_sales():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         start_date = request.args.get('startDate')
# # # #         end_date = request.args.get('endDate')
# # # #         if not start_date or not end_date:
# # # #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         sales_cursor = sales_collection.find({
# # # #             "date": {
# # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # #             }
# # # #         })

# # # #         sales_data = []
# # # #         for sale in sales_cursor:
# # # #             sales_data.append({
# # # #                 "userId": sale.get("user_id"),
# # # #                 "total_amount": sale.get("total_amount", 0),
# # # #                 "products": sale.get("products", []),
# # # #                 "date": sale["date"],
# # # #                 "invoiceNumber": sale.get("invoiceNumber", ""),
# # # #                 "serialNumber": sale.get("serialNumber", 0)
# # # #             })

# # # #         if not sales_data:
# # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # #         return jsonify(sales_data)
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         traceback.print_exc()
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/product-sales', methods=['GET'])
# # # # def get_product_sales():
# # # #     store_id = request.args.get('storeId')
# # # #     product_name = request.args.get('productName')
# # # #     if not store_id or not product_name:
# # # #         return jsonify({"error": "Store ID and Product Name are required"}), 400

# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         product_sales = sales_collection.find({"products.name": product_name})
# # # #         product_sales_data = []
# # # #         for sale in product_sales:
# # # #             for product in sale["products"]:
# # # #                 if product["name"] == product_name:
# # # #                     product_sales_data.append({
# # # #                         "sale_id": str(sale["_id"]),
# # # #                         "total_amount": sale.get("total_amount", 0),
# # # #                         "quantity": product["quantity"],
# # # #                         "date": sale["date"],
# # # #                         "invoiceNumber": sale.get("invoiceNumber", ""),
# # # #                         "serialNumber": sale.get("serialNumber", 0)
# # # #                     })

# # # #         if not product_sales_data:
# # # #             return jsonify({"message": "No sales data found for the selected product."}), 404

# # # #         return jsonify({"sales_data": product_sales_data})
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/daily-sales1', methods=['GET'])
# # # # def get_daily_sales():
# # # #     try:
# # # #         store_id = request.args.get('storeId')
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         selected_date = request.args.get('date')
# # # #         if selected_date:
# # # #             try:
# # # #                 start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # #                 end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
# # # #             except ValueError:
# # # #                 return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
# # # #         else:
# # # #             start_time = None
# # # #             end_time = None

# # # #         query = {}
# # # #         if start_time and end_time:
# # # #             query["date"] = {
# # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # #             }

# # # #         sales_cursor = sales_collection.find(query)
# # # #         sales_data = []
# # # #         for sale in sales_cursor:
# # # #             sale_data = {
# # # #                 "id": str(sale["_id"]),
# # # #                 "total_amount": sale.get("total_amount", 0),
# # # #                 "products": sale.get("products", []),
# # # #                 "date": sale["date"],
# # # #                 "invoiceNumber": sale.get("invoiceNumber", ""),
# # # #                 "serialNumber": sale.get("serialNumber", 0)
# # # #             }
# # # #             sales_data.append(sale_data)

# # # #         if not sales_data:
# # # #             return jsonify({"message": "No sales data found."}), 404

# # # #         return jsonify(sales_data)
# # # #     except Exception as e:
# # # #         print(f"Error in /api/daily-sales1: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/daily-sales2', methods=['GET'])
# # # # def get_sales2():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         selected_date = request.args.get('date')
# # # #         if not selected_date:
# # # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # # #         sales_cursor = sales_collection.find({
# # # #             "date": {
# # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # #             }
# # # #         })

# # # #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# # # #         for sale in sales_cursor:
# # # #             sales_data[selected_date]["sales"].append({
# # # #                 "id": str(sale["_id"]),
# # # #                 "total_amount": sale.get("total_amount", 0),
# # # #                 "products": sale.get("products", []),
# # # #                 "date": sale["date"],
# # # #                 "invoiceNumber": sale.get("invoiceNumber", ""),
# # # #                 "serialNumber": sale.get("serialNumber", 0)
# # # #             })
# # # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # # #         if not sales_data[selected_date]["sales"]:
# # # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # # #         return jsonify(sales_data)
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/best-selling-product', methods=['GET'])
# # # # def get_best_selling_product():
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         pipeline = [
# # # #             {"$unwind": "$products"},
# # # #             {"$group": {
# # # #                 "_id": "$products.name",
# # # #                 "total_quantity": {"$sum": "$products.quantity"},
# # # #                 "total_amount": {"$sum": "$products.total_price"}
# # # #             }},
# # # #             {"$sort": {"total_quantity": -1}},
# # # #             {"$limit": 1}
# # # #         ]
# # # #         best_selling_product = list(sales_collection.aggregate(pipeline))

# # # #         if not best_selling_product:
# # # #             return jsonify({"message": "No sales data found."}), 404

# # # #         best_selling = best_selling_product[0]
# # # #         return jsonify({
# # # #             "product_name": best_selling["_id"],
# # # #             "total_quantity": best_selling["total_quantity"],
# # # #             "total_amount": best_selling["total_amount"]
# # # #         })
# # # #     except Exception as e:
# # # #         print(f"Error in /api/best-selling-product: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/hourly-sales', methods=['GET'])
# # # # def get_hourly_sales():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         sales_cursor = sales_collection.find({"date": {"$exists": True}})

# # # #         hourly_sales = {str(hour): 0 for hour in range(24)}
# # # #         for sale in sales_cursor:
# # # #             sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
# # # #             hour = sale_date.hour
# # # #             hourly_sales[str(hour)] += sale.get("total_amount", 0)

# # # #         hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]
# # # #         if not any(item["sales_amount"] for item in hourly_sales_data):
# # # #             return jsonify({"message": "No sales data found."}), 404

# # # #         return jsonify({"hourly_sales": hourly_sales_data})
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/api/users', methods=['GET'])
# # # # def get_users():
# # # #     try:
# # # #         store_id = request.args.get('storeId')
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         users_collection = store_db['users']
# # # #         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))
# # # #         for user in users:
# # # #             user["_id"] = str(user["_id"])

# # # #         if not users:
# # # #             return jsonify({"message": "No users found."}), 404

# # # #         return jsonify(users)
# # # #     except Exception as e:
# # # #         print(f"Error in /api/users: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # if __name__ == "__main__":
# # # #     app.run(debug=True, port=5010)
# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # from pymongo import MongoClient
# # # from bson import ObjectId
# # # from datetime import datetime, timedelta
# # # import calendar
# # # import traceback

# # # app = Flask(__name__)
# # # CORS(app)

# # # # MongoDB Client
# # # client = MongoClient('mongodb://localhost:27017/')

# # # def get_store_db(store_id):
# # #     """Retrieve the database for the specified store ID."""
# # #     if not store_id:
# # #         raise ValueError("Store ID is required.")
# # #     return client[store_id]

# # # @app.errorhandler(Exception)
# # # def handle_exception(e):
# # #     """Global error handler."""
# # #     print(f"Error occurred: {str(e)}")
# # #     traceback.print_exc()
# # #     return jsonify({"error": str(e)}), 500

# # # @app.route('/products', methods=['GET'])
# # # def get_products():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         products_collection = store_db['products']
# # #         products = list(products_collection.find())
# # #         for product in products:
# # #             product['_id'] = str(product['_id'])
# # #         return jsonify(products)
# # #     except Exception as e:
# # #         print(f"Error in /products: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/daily-sale', methods=['GET'])
# # # def get_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         timeframe = request.args.get('timeframe', 'day')
# # #         now = datetime.now()

# # #         if timeframe == 'hour':
# # #             start_time = now.replace(minute=0, second=0, microsecond=0)
# # #             end_time = now.replace(minute=59, second=59, microsecond=999999)
# # #         elif timeframe == 'day':
# # #             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
# # #             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
# # #         elif timeframe == 'week':
# # #             start_time = now - timedelta(days=now.weekday())
# # #             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
# # #             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
# # #         elif timeframe == 'month':
# # #             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
# # #             last_day = calendar.monthrange(now.year, now.month)[1]
# # #             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
# # #         else:
# # #             return jsonify({"error": "Invalid timeframe."}), 400

# # #         sales_cursor = sales_collection.find({
# # #             "date": {
# # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # #             }
# # #         })

# # #         sales_data = {}
# # #         for sale in sales_cursor:
# # #             date = sale["date"].split(" ")[0]
# # #             if date not in sales_data:
# # #                 sales_data[date] = {"total_amount": 0, "sales": []}

# # #             sales_data[date]["sales"].append({
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "date": sale["date"],
# # #                 "serialNumber": sale.get("serialNumber", 0)
# # #             })
# # #             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

# # #         if not sales_data:
# # #             return jsonify({"message": "No sales data found."}), 404

# # #         return jsonify(sales_data)
# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/daily-sales', methods=['GET'])
# # # def get_daily_sales_by_date():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         selected_date = request.args.get('date')
# # #         if not selected_date:
# # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # #         sales_cursor = sales_collection.find({
# # #             "date": {
# # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # #             }
# # #         })

# # #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# # #         for sale in sales_cursor:
# # #             sales_data[selected_date]["sales"].append({
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "date": sale["date"],
# # #                 "serialNumber": sale.get("serialNumber", 0)
# # #             })
# # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # #         if not sales_data[selected_date]["sales"]:
# # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # #         return jsonify(sales_data)
# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/daily-sales-employee', methods=['GET'])
# # # def get_employee_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         start_date = request.args.get('startDate')
# # #         end_date = request.args.get('endDate')
# # #         if not start_date or not end_date:
# # #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         sales_cursor = sales_collection.find({
# # #             "date": {
# # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # #             }
# # #         })

# # #         sales_data = []
# # #         for sale in sales_cursor:
# # #             sales_data.append({
# # #                 "userId": sale.get("user_id"),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "date": sale["date"],
# # #                 "serialNumber": sale.get("serialNumber", 0)
# # #             })

# # #         if not sales_data:
# # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # #         return jsonify(sales_data)
# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         traceback.print_exc()
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/product-sales', methods=['GET'])
# # # def get_product_sales():
# # #     store_id = request.args.get('storeId')
# # #     product_name = request.args.get('productName')
# # #     if not store_id or not product_name:
# # #         return jsonify({"error": "Store ID and Product Name are required"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         product_sales = sales_collection.find({"products.name": product_name})
# # #         product_sales_data = []
# # #         for sale in product_sales:
# # #             for product in sale["products"]:
# # #                 if product["name"] == product_name:
# # #                     product_sales_data.append({
# # #                         "sale_id": str(sale["_id"]),
# # #                         "total_amount": sale.get("total_amount", 0),
# # #                         "quantity": product["quantity"],
# # #                         "date": sale["date"],
# # #                         "serialNumber": sale.get("serialNumber", 0)
# # #                     })

# # #         if not product_sales_data:
# # #             return jsonify({"message": "No sales data found for the selected product."}), 404

# # #         return jsonify({"sales_data": product_sales_data})
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/daily-sales1', methods=['GET'])
# # # def get_daily_sales():
# # #     try:
# # #         store_id = request.args.get('storeId')
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         selected_date = request.args.get('date')
# # #         if selected_date:
# # #             try:
# # #                 start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # #                 end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
# # #             except ValueError:
# # #                 return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
# # #         else:
# # #             start_time = None
# # #             end_time = None

# # #         query = {}
# # #         if start_time and end_time:
# # #             query["date"] = {
# # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # #             }

# # #         sales_cursor = sales_collection.find(query)
# # #         sales_data = []
# # #         for sale in sales_cursor:
# # #             sale_data = {
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "date": sale["date"],
# # #                 "serialNumber": sale.get("serialNumber", 0)
# # #             }
# # #             sales_data.append(sale_data)

# # #         if not sales_data:
# # #             return jsonify({"message": "No sales data found."}), 404

# # #         return jsonify(sales_data)
# # #     except Exception as e:
# # #         print(f"Error in /api/daily-sales1: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/daily-sales2', methods=['GET'])
# # # def get_sales2():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         selected_date = request.args.get('date')
# # #         if not selected_date:
# # #             return jsonify({"error": "Date is required in the query parameters"}), 400

# # #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# # #         sales_cursor = sales_collection.find({
# # #             "date": {
# # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # #             }
# # #         })

# # #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# # #         for sale in sales_cursor:
# # #             sales_data[selected_date]["sales"].append({
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "date": sale["date"],
# # #                 "serialNumber": sale.get("serialNumber", 0)
# # #             })
# # #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# # #         if not sales_data[selected_date]["sales"]:
# # #             return jsonify({"message": "No sales data found for the selected date."}), 404

# # #         return jsonify(sales_data)
# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/best-selling-product', methods=['GET'])
# # # def get_best_selling_product():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         pipeline = [
# # #             {"$unwind": "$products"},
# # #             {"$group": {
# # #                 "_id": "$products.name",
# # #                 "total_quantity": {"$sum": "$products.quantity"},
# # #                 "total_amount": {"$sum": "$products.total_price"}
# # #             }},
# # #             {"$sort": {"total_quantity": -1}},
# # #             {"$limit": 1}
# # #         ]
# # #         best_selling_product = list(sales_collection.aggregate(pipeline))

# # #         if not best_selling_product:
# # #             return jsonify({"message": "No sales data found."}), 404

# # #         best_selling = best_selling_product[0]
# # #         return jsonify({
# # #             "product_name": best_selling["_id"],
# # #             "total_quantity": best_selling["total_quantity"],
# # #             "total_amount": best_selling["total_amount"]
# # #         })
# # #     except Exception as e:
# # #         print(f"Error in /api/best-selling-product: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/hourly-sales', methods=['GET'])
# # # def get_hourly_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         sales_cursor = sales_collection.find({"date": {"$exists": True}})

# # #         hourly_sales = {str(hour): 0 for hour in range(24)}
# # #         for sale in sales_cursor:
# # #             sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
# # #             hour = sale_date.hour
# # #             hourly_sales[str(hour)] += sale.get("total_amount", 0)

# # #         hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]
# # #         if not any(item["sales_amount"] for item in hourly_sales_data):
# # #             return jsonify({"message": "No sales data found."}), 404

# # #         return jsonify({"hourly_sales": hourly_sales_data})
# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/api/users', methods=['GET'])
# # # def get_users():
# # #     try:
# # #         store_id = request.args.get('storeId')
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# # #         store_db = get_store_db(store_id)
# # #         users_collection = store_db['users']
# # #         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))
# # #         for user in users:
# # #             user["_id"] = str(user["_id"])

# # #         if not users:
# # #             return jsonify({"message": "No users found."}), 404

# # #         return jsonify(users)
# # #     except Exception as e:
# # #         print(f"Error in /api/users: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5010)

# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # from pymongo import MongoClient
# # from bson import ObjectId
# # from datetime import datetime, timedelta
# # import calendar
# # import traceback

# # app = Flask(__name__)
# # CORS(app)

# # # MongoDB Client
# # client = MongoClient('mongodb://localhost:27017/')

# # def get_store_db(store_id):
# #     """Retrieve the database for the specified store ID."""
# #     if not store_id:
# #         raise ValueError("Store ID is required.")
# #     return client[store_id]

# # @app.errorhandler(Exception)
# # def handle_exception(e):
# #     """Global error handler."""
# #     print(f"Error occurred: {str(e)}")
# #     traceback.print_exc()
# #     return jsonify({"error": str(e)}), 500

# # @app.route('/products', methods=['GET'])
# # def get_products():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         products_collection = store_db['products']
# #         products = list(products_collection.find())
# #         for product in products:
# #             product['_id'] = str(product['_id'])
# #         return jsonify(products)
# #     except Exception as e:
# #         print(f"Error in /products: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/daily-sale', methods=['GET'])
# # def get_sales():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         timeframe = request.args.get('timeframe', 'day')
# #         now = datetime.now()

# #         if timeframe == 'hour':
# #             start_time = now.replace(minute=0, second=0, microsecond=0)
# #             end_time = now.replace(minute=59, second=59, microsecond=999999)
# #         elif timeframe == 'day':
# #             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
# #             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
# #         elif timeframe == 'week':
# #             start_time = now - timedelta(days=now.weekday())
# #             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
# #             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
# #         elif timeframe == 'month':
# #             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
# #             last_day = calendar.monthrange(now.year, now.month)[1]
# #             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
# #         else:
# #             return jsonify({"error": "Invalid timeframe."}), 400

# #         sales_cursor = sales_collection.find({
# #             "date": {
# #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# #             }
# #         })

# #         sales_data = {}
# #         for sale in sales_cursor:
# #             date = sale["date"].split(" ")[0]
# #             if date not in sales_data:
# #                 sales_data[date] = {"total_amount": 0, "sales": []}

# #             sales_data[date]["sales"].append({
# #                 "id": str(sale["_id"]),
# #                 "total_amount": sale.get("total_amount", 0),
# #                 "products": sale.get("products", []),
# #                 "date": sale["date"],
# #                 "serialNumber": sale.get("serialNumber", 0),
# #                 "user_id": sale.get("user_id", None)  # Added for consistency
# #             })
# #             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

# #         if not sales_data:
# #             return jsonify({"message": "No sales data found."}), 404

# #         return jsonify(sales_data)
# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/daily-sales', methods=['GET'])
# # def get_daily_sales_by_date():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         selected_date = request.args.get('date')
# #         if not selected_date:
# #             return jsonify({"error": "Date is required in the query parameters"}), 400

# #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# #         sales_cursor = sales_collection.find({
# #             "date": {
# #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# #             }
# #         })

# #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# #         for sale in sales_cursor:
# #             sales_data[selected_date]["sales"].append({
# #                 "id": str(sale["_id"]),
# #                 "total_amount": sale.get("total_amount", 0),
# #                 "products": sale.get("products", []),
# #                 "date": sale["date"],
# #                 "serialNumber": sale.get("serialNumber", 0),
# #                 "user_id": sale.get("user_id", None)  # Added for consistency
# #             })
# #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# #         if not sales_data[selected_date]["sales"]:
# #             return jsonify({"message": "No sales data found for the selected date."}), 404

# #         return jsonify(sales_data)
# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/daily-sales-employee', methods=['GET'])
# # def get_employee_sales():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         start_date = request.args.get('startDate')
# #         end_date = request.args.get('endDate')
# #         if not start_date or not end_date:
# #             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

# #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         sales_cursor = sales_collection.find({
# #             "date": {
# #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# #             }
# #         })

# #         sales_data = []
# #         for sale in sales_cursor:
# #             sales_data.append({
# #                 "userId": sale.get("user_id"),
# #                 "total_amount": sale.get("total_amount", 0),
# #                 "products": sale.get("products", []),
# #                 "date": sale["date"],
# #                 "serialNumber": sale.get("serialNumber", 0)
# #             })

# #         if not sales_data:
# #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# #         return jsonify(sales_data)
# #     except Exception as e:
# #         print(f"Error: {e}")
# #         traceback.print_exc()
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/product-sales', methods=['GET'])
# # def get_product_sales():
# #     store_id = request.args.get('storeId')
# #     product_name = request.args.get('productName')
# #     if not store_id or not product_name:
# #         return jsonify({"error": "Store ID and Product Name are required"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         product_sales = sales_collection.find({"products.name": product_name})
# #         product_sales_data = []
# #         for sale in product_sales:
# #             for product in sale["products"]:
# #                 if product["name"] == product_name:
# #                     product_sales_data.append({
# #                         "sale_id": str(sale["_id"]),
# #                         "total_amount": sale.get("total_amount", 0),
# #                         "quantity": product["quantity"],
# #                         "date": sale["date"],
# #                         "serialNumber": sale.get("serialNumber", 0),
# #                         "user_id": sale.get("user_id", None)  # Added for consistency
# #                     })

# #         if not product_sales_data:
# #             return jsonify({"message": "No sales data found for the selected product."}), 404

# #         return jsonify({"sales_data": product_sales_data})
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/daily-sales1', methods=['GET'])
# # def get_daily_sales1():
# #     try:
# #         store_id = request.args.get('storeId')
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         # Filter parameters
# #         selected_date = request.args.get('date')
# #         min_amount = request.args.get('minAmount')
# #         user_role = request.args.get('userRole')

# #         query = {}
# #         if selected_date:
# #             try:
# #                 start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# #                 end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
# #                 query["date"] = {
# #                     "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# #                     "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# #                 }
# #             except ValueError:
# #                 return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
        
# #         if min_amount:
# #             try:
# #                 query["total_amount"] = {"$gte": float(min_amount)}
# #             except ValueError:
# #                 return jsonify({"error": "Invalid minAmount format. Must be a number."}), 400

# #         # Fetch sales data
# #         sales_cursor = sales_collection.find(query)
# #         sales_data = []
# #         for sale in sales_cursor:
# #             if "_id" not in sale:
# #                 print(f"Warning: Sale document missing '_id' field: {sale}")
# #                 continue
# #             sale_data = {
# #                 "id": str(sale["_id"]),
# #                 "total_amount": sale.get("total_amount", 0),
# #                 "products": sale.get("products", []),
# #                 "date": sale.get("date", ""),
# #                 "serialNumber": sale.get("serialNumber", 0),
# #                 "user_id": sale.get("user_id", None)  # Ensure user_id is included
# #             }
# #             sales_data.append(sale_data)

# #         if not sales_data:
# #             return jsonify({"message": "No sales data found."}), 404

# #         # If userRole filter is applied, fetch users and filter sales
# #         if user_role:
# #             users_collection = store_db['users']
# #             users = list(users_collection.find({"role": user_role}, {"_id": 1, "id": 1, "role": 1}))
# #             user_ids = [user.get("id") for user in users]
# #             sales_data = [sale for sale in sales_data if sale["user_id"] in user_ids]

# #         print(f"Sales data sent from /api/daily-sales1: {sales_data[:2]}")  # Debug: Log first two sales
# #         return jsonify(sales_data)
# #     except Exception as e:
# #         print(f"Error in /api/daily-sales1: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/daily-sales2', methods=['GET'])
# # def get_sales2():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         selected_date = request.args.get('date')
# #         if not selected_date:
# #             return jsonify({"error": "Date is required in the query parameters"}), 400

# #         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# #         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

# #         sales_cursor = sales_collection.find({
# #             "date": {
# #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# #             }
# #         })

# #         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
# #         for sale in sales_cursor:
# #             sales_data[selected_date]["sales"].append({
# #                 "id": str(sale["_id"]),
# #                 "total_amount": sale.get("total_amount", 0),
# #                 "products": sale.get("products", []),
# #                 "date": sale["date"],
# #                 "serialNumber": sale.get("serialNumber", 0),
# #                 "user_id": sale.get("user_id", None)  # Added for consistency
# #             })
# #             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

# #         if not sales_data[selected_date]["sales"]:
# #             return jsonify({"message": "No sales data found for the selected date."}), 404

# #         return jsonify(sales_data)
# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/best-selling-product', methods=['GET'])
# # def get_best_selling_product():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         pipeline = [
# #             {"$unwind": "$products"},
# #             {"$group": {
# #                 "_id": "$products.name",
# #                 "total_quantity": {"$sum": "$products.quantity"},
# #                 "total_amount": {"$sum": "$products.total_price"}
# #             }},
# #             {"$sort": {"total_quantity": -1}},
# #             {"$limit": 1}
# #         ]
# #         best_selling_product = list(sales_collection.aggregate(pipeline))

# #         if not best_selling_product:
# #             return jsonify({"message": "No sales data found."}), 404

# #         best_selling = best_selling_product[0]
# #         return jsonify({
# #             "product_name": best_selling["_id"],
# #             "total_quantity": best_selling["total_quantity"],
# #             "total_amount": best_selling["total_amount"]
# #         })
# #     except Exception as e:
# #         print(f"Error in /api/best-selling-product: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/hourly-sales', methods=['GET'])
# # def get_hourly_sales():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400
        
# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         sales_cursor = sales_collection.find({"date": {"$exists": True}})

# #         hourly_sales = {str(hour): 0 for hour in range(24)}
# #         for sale in sales_cursor:
# #             sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
# #             hour = sale_date.hour
# #             hourly_sales[str(hour)] += sale.get("total_amount", 0)

# #         hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]
# #         if not any(item["sales_amount"] for item in hourly_sales_data):
# #             return jsonify({"message": "No sales data found."}), 404

# #         return jsonify({"hourly_sales": hourly_sales_data})
# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/users', methods=['GET'])
# # def get_users():
# #     try:
# #         store_id = request.args.get('storeId')
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in query parameters"}), 400

# #         store_db = get_store_db(store_id)
# #         users_collection = store_db['users']
# #         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))
# #         for user in users:
# #             user["_id"] = str(user["_id"])
        
# #         if not users:
# #             return jsonify({"message": "No users found."}), 404

# #         print(f"Users data sent: {users[:2]}")  # Debug: Log first two users
# #         return jsonify(users)
# #     except Exception as e:
# #         print(f"Error in /api/users: {e}")
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5010)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# from bson import ObjectId
# from datetime import datetime, timedelta
# import calendar
# import traceback

# app = Flask(__name__)
# CORS(app)

# # MongoDB Client
# client = MongoClient('mongodb://localhost:27017/')

# def get_store_db(store_id):
#     """Retrieve the database for the specified store ID."""
#     if not store_id:
#         raise ValueError("Store ID is required.")
#     return client[store_id]

# @app.errorhandler(Exception)
# def handle_exception(e):
#     """Global error handler."""
#     print(f"Error occurred: {str(e)}")
#     traceback.print_exc()
#     return jsonify({"error": str(e)}), 500

# @app.route('/products', methods=['GET'])
# def get_products():
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         products_collection = store_db['products']
#         products = list(products_collection.find())
#         for product in products:
#             product['_id'] = str(product['_id'])
#         return jsonify(products)
#     except Exception as e:
#         print(f"Error in /products: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/daily-sale', methods=['GET'])
# def get_sales():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400
        
#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         timeframe = request.args.get('timeframe', 'day')
#         now = datetime.now()

#         if timeframe == 'hour':
#             start_time = now.replace(minute=0, second=0, microsecond=0)
#             end_time = now.replace(minute=59, second=59, microsecond=999999)
#         elif timeframe == 'day':
#             start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
#             end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
#         elif timeframe == 'week':
#             start_time = now - timedelta(days=now.weekday())
#             start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
#             end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
#         elif timeframe == 'month':
#             start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
#             last_day = calendar.monthrange(now.year, now.month)[1]
#             end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
#         else:
#             return jsonify({"error": "Invalid timeframe."}), 400

#         sales_cursor = sales_collection.find({
#             "date": {
#                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
#                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
#             }
#         })

#         sales_data = {}
#         for sale in sales_cursor:
#             date = sale["date"].split(" ")[0]
#             if date not in sales_data:
#                 sales_data[date] = {"total_amount": 0, "sales": []}

#             sales_data[date]["sales"].append({
#                 "id": str(sale["_id"]),
#                 "serialNumber": sale.get("serialNumber", "N/A"),
#                 "total_amount": sale.get("total_amount", 0),
#                 "products": sale.get("products", []),
#                 "date": sale["date"],
#                 "customer_phone": sale.get("customer_phone", None),
#                 "user_id": sale.get("user_id", None)
#             })
#             sales_data[date]["total_amount"] += sale.get("total_amount", 0)

#         if not sales_data:
#             return jsonify({"message": "No sales data found."}), 404

#         return jsonify(sales_data)
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/daily-sales', methods=['GET'])
# def get_daily_sales_by_date():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         selected_date = request.args.get('date')
#         if not selected_date:
#             return jsonify({"error": "Date is required in the query parameters"}), 400

#         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
#         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

#         sales_cursor = sales_collection.find({
#             "date": {
#                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
#                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
#             }
#         })

#         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
#         for sale in sales_cursor:
#             sales_data[selected_date]["sales"].append({
#                 "id": str(sale["_id"]),
#                 "serialNumber": sale.get("serialNumber", "N/A"),
#                 "total_amount": sale.get("total_amount", 0),
#                 "products": sale.get("products", []),
#                 "date": sale["date"],
#                 "customer_phone": sale.get("customer_phone", None),
#                 "user_id": sale.get("user_id", None)
#             })
#             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

#         if not sales_data[selected_date]["sales"]:
#             return jsonify({"message": "No sales data found for the selected date."}), 404

#         return jsonify(sales_data)
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/daily-sales-employee', methods=['GET'])
# def get_employee_sales():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         start_date = request.args.get('startDate')
#         end_date = request.args.get('endDate')
#         if not start_date or not end_date:
#             return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

#         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
#         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         sales_cursor = sales_collection.find({
#             "date": {
#                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
#                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
#             }
#         })

#         sales_data = []
#         for sale in sales_cursor:
#             sales_data.append({
#                 "userId": sale.get("user_id"),
#                 "total_amount": sale.get("total_amount", 0),
#                 "products": sale.get("products", []),
#                 "date": sale["date"],
#                 "serialNumber": sale.get("serialNumber", "N/A")
#             })

#         if not sales_data:
#             return jsonify({"message": "No sales data found for the selected date range."}), 404

#         return jsonify(sales_data)
#     except Exception as e:
#         print(f"Error: {e}")
#         traceback.print_exc()
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/product-sales', methods=['GET'])
# def get_product_sales():
#     store_id = request.args.get('storeId')
#     product_name = request.args.get('productName')
#     if not store_id or not product_name:
#         return jsonify({"error": "Store ID and Product Name are required"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         product_sales = sales_collection.find({"products.name": product_name})
#         product_sales_data = []
#         for sale in product_sales:
#             for product in sale["products"]:
#                 if product["name"] == product_name:
#                     product_sales_data.append({
#                         "sale_id": str(sale["_id"]),
#                         "serialNumber": sale.get("serialNumber", "N/A"),
#                         "total_amount": sale.get("total_amount", 0),
#                         "quantity": product["quantity"],
#                         "date": sale["date"],
#                         "user_id": sale.get("user_id", None)
#                     })

#         if not product_sales_data:
#             return jsonify({"message": "No sales data found for the selected product."}), 404

#         return jsonify({"sales_data": product_sales_data})
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/daily-sales1', methods=['GET'])
# def get_daily_sales1():
#     try:
#         store_id = request.args.get('storeId')
#         if not store_id:
#             return jsonify({"error": "Store ID is required in query parameters"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         # Filter parameters
#         selected_date = request.args.get('date')
#         min_amount = request.args.get('minAmount')
#         user_role = request.args.get('userRole')

#         query = {}
#         if selected_date:
#             try:
#                 start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
#                 end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
#                 query["date"] = {
#                     "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
#                     "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
#                 }
#             except ValueError:
#                 return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
        
#         if min_amount:
#             try:
#                 query["total_amount"] = {"$gte": float(min_amount)}
#             except ValueError:
#                 return jsonify({"error": "Invalid minAmount format. Must be a number."}), 400

#         # Fetch sales data
#         sales_cursor = sales_collection.find(query)
#         sales_data = []
#         for sale in sales_cursor:
#             if "_id" not in sale:
#                 print(f"Warning: Sale document missing '_id' field: {sale}")
#                 continue
#             sale_data = {
#                 "id": str(sale["_id"]),
#                 "serialNumber": sale.get("serialNumber", "N/A"),
#                 "total_amount": sale.get("total_amount", 0),
#                 "products": sale.get("products", []),
#                 "date": sale.get("date", ""),
#                 "customer_phone": sale.get("customer_phone", None),
#                 "user_id": sale.get("user_id", None)
#             }
#             sales_data.append(sale_data)

#         if not sales_data:
#             return jsonify({"message": "No sales data found."}), 404

#         # If userRole filter is applied, fetch users and filter sales
#         if user_role:
#             users_collection = store_db['users']
#             users = list(users_collection.find({"role": user_role}, {"_id": 1, "id": 1, "role": 1}))
#             user_ids = [user.get("id") for user in users]
#             sales_data = [sale for sale in sales_data if sale["user_id"] in user_ids]

#         print(f"Sales data sent from /api/daily-sales1: {sales_data[:2]}")
#         return jsonify(sales_data)
#     except Exception as e:
#         print(f"Error in /api/daily-sales1: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/daily-sales2', methods=['GET'])
# def get_sales2():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         selected_date = request.args.get('date')
#         if not selected_date:
#             return jsonify({"error": "Date is required in the query parameters"}), 400

#         start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
#         end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

#         sales_cursor = sales_collection.find({
#             "date": {
#                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
#                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
#             }
#         })

#         sales_data = {selected_date: {"total_amount": 0, "sales": []}}
#         for sale in sales_cursor:
#             sales_data[selected_date]["sales"].append({
#                 "id": str(sale["_id"]),
#                 "serialNumber": sale.get("serialNumber", "N/A"),
#                 "total_amount": sale.get("total_amount", 0),
#                 "products": sale.get("products", []),
#                 "date": sale["date"],
#                 "customer_phone": sale.get("customer_phone", None),
#                 "user_id": sale.get("user_id", None)
#             })
#             sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

#         if not sales_data[selected_date]["sales"]:
#             return jsonify({"message": "No sales data found for the selected date."}), 404

#         return jsonify(sales_data)
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500
# @app.route('/api/sale-by-serial', methods=['GET'])
# def get_sale_by_serial():
#     try:
#         store_id = request.args.get('storeId')
#         serial_number = request.args.get('serialNumber')
#         if not store_id or not serial_number:
#             return jsonify({"error": "Store ID and Serial Number are required"}), 400

#         try:
#             serial_number = int(serial_number)  # Convert to integer
#         except ValueError:
#             return jsonify({"error": "Serial Number must be a number"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         sale = sales_collection.find_one({"serialNumber": serial_number})
#         if not sale:
#             return jsonify({"message": "No sale found with this serial number"}), 404

#         sale_data = {
#             "id": str(sale["_id"]),
#             "serialNumber": sale.get("serialNumber"),
#             "total_amount": sale.get("total_amount", 0),
#             "products": sale.get("products", []),
#             "date": sale.get("date", ""),
#             "customer_phone": sale.get("customer_phone", None),
#             "user_id": sale.get("user_id", None)
#         }
#         return jsonify({"sale": sale_data}), 200
#     except Exception as e:
#         print(f"Error in /api/sale-by-serial: {e}")
#         return jsonify({"error": str(e)}), 500
# @app.route('/api/best-selling-product', methods=['GET'])
# def get_best_selling_product():
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         pipeline = [
#             {"$unwind": "$products"},
#             {"$group": {
#                 "_id": "$products.name",
#                 "total_quantity": {"$sum": "$products.quantity"},
#                 "total_amount": {"$sum": "$products.total_price"}
#             }},
#             {"$sort": {"total_quantity": -1}},
#             {"$limit": 1}
#         ]
#         best_selling_product = list(sales_collection.aggregate(pipeline))

#         if not best_selling_product:
#             return jsonify({"message": "No sales data found."}), 404

#         best_selling = best_selling_product[0]
#         return jsonify({
#             "product_name": best_selling["_id"],
#             "total_quantity": best_selling["total_quantity"],
#             "total_amount": best_selling["total_amount"]
#         })
#     except Exception as e:
#         print(f"Error in /api/best-selling-product: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/hourly-sales', methods=['GET'])
# def get_hourly_sales():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400
        
#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         sales_cursor = sales_collection.find({"date": {"$exists": True}})

#         hourly_sales = {str(hour): 0 for hour in range(24)}
#         for sale in sales_cursor:
#             sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
#             hour = sale_date.hour
#             hourly_sales[str(hour)] += sale.get("total_amount", 0)

#         hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]
#         if not any(item["sales_amount"] for item in hourly_sales_data):
#             return jsonify({"message": "No sales data found."}), 404

#         return jsonify({"hourly_sales": hourly_sales_data})
#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/users', methods=['GET'])
# def get_users():
#     try:
#         store_id = request.args.get('storeId')
#         if not store_id:
#             return jsonify({"error": "Store ID is required in query parameters"}), 400

#         store_db = get_store_db(store_id)
#         users_collection = store_db['users']
#         users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))
#         for user in users:
#             user["_id"] = str(user["_id"])
        
#         if not users:
#             return jsonify({"message": "No users found."}), 404

#         print(f"Users data sent: {users[:2]}")
#         return jsonify(users)
#     except Exception as e:
#         print(f"Error in /api/users: {e}")
#         return jsonify({"error": str(e)}), 500

# # New Returns Management Endpoints
# # @app.route('/api/returns', methods=['POST'])
# # def process_return():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         return_data = request.json
# #         required_fields = ["serialNumber", "items", "reason", "refundOption"]
# #         for field in required_fields:
# #             if field not in return_data or not return_data[field]:
# #                 return jsonify({"error": f"{field} is required"}), 400

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']
# #         returns_collection = store_db['returns']

# #         # Verify sale exists
# #         sale = sales_collection.find_one({"serialNumber": return_data["serialNumber"]})
# #         if not sale:
# #             return jsonify({"error": "Sale not found"}), 404

# #         # Validate return items against sale
# #         for item in return_data["items"]:
# #             product_in_sale = next((p for p in sale["products"] if p["_id"] == item["productId"]), None)
# #             if not product_in_sale or item["quantity"] > product_in_sale["quantity"]:
# #                 return jsonify({"error": f"Invalid return quantity for product {item['productId']}"}), 400

# #         # Generate unique return ID
# #         return_id = f"RET-{return_data['serialNumber']}-{datetime.now().strftime('%Y%m%d%H%M%S')}"
# #         return_entry = {
# #             "returnId": return_id,
# #             "serialNumber": return_data["serialNumber"],
# #             "items": return_data["items"],
# #             "reason": return_data["reason"],
# #             "notes": return_data.get("notes", ""),
# #             "refundOption": return_data["refundOption"],
# #             "status": "Approved",
# #             "date": return_data.get("date", datetime.now().isoformat()),
# #             "totalRefunded": sum(item["quantity"] * next(p["total_price"] / p["quantity"] for p in sale["products"] if p["_id"] == item["productId"]) for item in return_data["items"])
# #         }
# #         returns_collection.insert_one(return_entry)

# #         # Update sale record
# #         sales_collection.update_one(
# #             {"serialNumber": return_data["serialNumber"]},
# #             {"$set": {"returned": True, "returnId": return_id}}
# #         )

# #         return jsonify({"message": "Return processed successfully", "returnId": return_id}), 201
# #     except Exception as e:
# #         print(f"Error processing return: {e}")
# #         return jsonify({"error": str(e)}), 500
# @app.route('/api/returns', methods=['POST'])
# def process_return():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         return_data = request.json
#         print(f"Received return data: {return_data}")
#         required_fields = ["serialNumber", "items", "reason", "refundOption"]
#         for field in required_fields:
#             if field not in return_data or not return_data[field]:
#                 return jsonify({"error": f"{field} is required"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']
#         returns_collection = store_db['returns']

#         # Verify sale exists
#         sale = sales_collection.find_one({"serialNumber": return_data["serialNumber"]})
#         if not sale:
#             return jsonify({"error": "Sale not found"}), 404
#         print(f"Sale found: {sale}")

#         # Validate return items using barcode
#         for item in return_data["items"]:
#             if "barcode" not in item:
#                 return jsonify({"error": "Barcode is required for each item"}), 400
#             product_in_sale = next((p for p in sale["products"] if p.get("barcode") == item["barcode"]), None)
#             if not product_in_sale:
#                 return jsonify({"error": f"Product with barcode {item['barcode']} not found in sale"}), 400
#             if item["quantity"] > product_in_sale["quantity"]:
#                 return jsonify({"error": f"Invalid return quantity for barcode {item['barcode']}"}), 400

#         # Generate unique return ID
#         return_id = f"RET-{return_data['serialNumber']}-{datetime.now().strftime('%Y%m%d%H%M%S')}"
#         return_entry = {
#             "returnId": return_id,
#             "serialNumber": return_data["serialNumber"],
#             "items": return_data["items"],
#             "reason": return_data["reason"],
#             "notes": return_data.get("notes", ""),
#             "refundOption": return_data["refundOption"],
#             "status": "Approved",
#             "date": return_data.get("date", datetime.now().isoformat()),
#             "totalRefunded": sum(
#                 item["quantity"] * next(p["total_price"] / p["quantity"] for p in sale["products"] if p.get("barcode") == item["barcode"])
#                 for item in return_data["items"]
#             )
#         }
#         print(f"Inserting return entry: {return_entry}")
#         result = returns_collection.insert_one(return_entry)
#         print(f"Return inserted with ID: {str(result.inserted_id)}")

#         # Update sale record
#         sales_collection.update_one(
#             {"serialNumber": return_data["serialNumber"]},
#             {"$set": {"returned": True, "returnId": return_id}}
#         )

#         return jsonify({"message": "Return processed successfully", "returnId": return_id}), 201
#     except Exception as e:
#         print(f"Error processing return: {str(e)}")
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500
    
# @app.route('/api/sale-by-barcode', methods=['GET'])
# def get_sale_by_barcode():
#     try:
#         store_id = request.args.get('storeId')
#         barcode = request.args.get('barcode')
#         if not store_id or not barcode:
#             return jsonify({"error": "Store ID and Barcode are required"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         sale = sales_collection.find_one({"products.barcode": barcode})
#         if not sale:
#             return jsonify({"message": "No sale found with this barcode"}), 404

#         sale_data = {
#             "id": str(sale["_id"]),
#             "serialNumber": sale.get("serialNumber"),
#             "total_amount": sale.get("total_amount", 0),
#             "products": sale.get("products", []),
#             "date": sale.get("date", ""),
#             "customer_phone": sale.get("customer_phone", None),
#             "user_id": sale.get("user_id", None)
#         }
#         return jsonify({"sale": sale_data}), 200
#     except Exception as e:
#         print(f"Error in /api/sale-by-barcode: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/api/sale-by-phone', methods=['GET'])
# def get_sale_by_phone():
#     try:
#         store_id = request.args.get('storeId')
#         phone = request.args.get('phone')
#         if not store_id or not phone:
#             return jsonify({"error": "Store ID and Phone are required"}), 400

#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']

#         sale = sales_collection.find_one({"customer_phone": phone})
#         if not sale:
#             return jsonify({"message": "No sale found with this phone number"}), 404

#         sale_data = {
#             "id": str(sale["_id"]),
#             "serialNumber": sale.get("serialNumber"),
#             "total_amount": sale.get("total_amount", 0),
#             "products": sale.get("products", []),
#             "date": sale.get("date", ""),
#             "customer_phone": sale.get("customer_phone", None),
#             "user_id": sale.get("user_id", None)
#         }
#         return jsonify({"sale": sale_data}), 200
#     except Exception as e:
#         print(f"Error in /api/sale-by-phone: {e}")
#         return jsonify({"error": str(e)}), 500
# # @app.route('/api/sale-by-barcode', methods=['GET'])
# # def get_sale_by_barcode():
# #     try:
# #         store_id = request.args.get('storeId')
# #         barcode = request.args.get('barcode')
# #         if not store_id or not barcode:
# #             return jsonify({"error": "Store ID and Barcode are required"}), 400

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         sale = sales_collection.find_one({"products.barcode": barcode})
# #         if not sale:
# #             return jsonify({"message": "No sale found with this barcode"}), 404

# #         sale_data = {
# #             "id": str(sale["_id"]),
# #             "serialNumber": sale.get("serialNumber"),
# #             "total_amount": sale.get("total_amount", 0),
# #             "products": sale.get("products", []),
# #             "date": sale.get("date", ""),
# #             "customer_phone": sale.get("customer_phone", None),
# #             "user_id": sale.get("user_id", None)
# #         }
# #         return jsonify({"sale": sale_data}), 200
# #     except Exception as e:
# #         print(f"Error in /api/sale-by-barcode: {e}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/api/sale-by-phone', methods=['GET'])
# # def get_sale_by_phone():
# #     try:
# #         store_id = request.args.get('storeId')
# #         phone = request.args.get('phone')
# #         if not store_id or not phone:
# #             return jsonify({"error": "Store ID and Phone are required"}), 400

# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']

# #         sale = sales_collection.find_one({"customer_phone": phone})
# #         if not sale:
# #             return jsonify({"message": "No sale found with this phone number"}), 404

# #         sale_data = {
# #             "id": str(sale["_id"]),
# #             "serialNumber": sale.get("serialNumber"),
# #             "total_amount": sale.get("total_amount", 0),
# #             "products": sale.get("products", []),
# #             "date": sale.get("date", ""),
# #             "customer_phone": sale.get("customer_phone", None),
# #             "user_id": sale.get("user_id", None)
# #         }
# #         return jsonify({"sale": sale_data}), 200
# #     except Exception as e:
# #         print(f"Error in /api/sale-by-phone: {e}")
# #         return jsonify({"error": str(e)}), 500
# @app.route('/api/returns', methods=['GET'])
# def get_returns():
#     try:
#         store_id = request.args.get('storeId')
#         if not store_id:
#             return jsonify({"error": "Store ID is required"}), 400

#         store_db = get_store_db(store_id)
#         returns_collection = store_db['returns']
#         returns = list(returns_collection.find())
#         for r in returns:
#             r["_id"] = str(r["_id"])
#         return jsonify(returns), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True, port=5010)
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime, timedelta
import calendar
import traceback

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
    print(f"Error occurred: {str(e)}")
    traceback.print_exc()
    return jsonify({"error": str(e)}), 500

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
            product['_id'] = str(product['_id'])
        return jsonify(products)
    except Exception as e:
        print(f"Error in /products: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/daily-sale', methods=['GET'])
def get_sales():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400
        
        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        timeframe = request.args.get('timeframe', 'day')
        now = datetime.now()

        if timeframe == 'hour':
            start_time = now.replace(minute=0, second=0, microsecond=0)
            end_time = now.replace(minute=59, second=59, microsecond=999999)
        elif timeframe == 'day':
            start_time = now.replace(hour=0, minute=0, second=0, microsecond=0)
            end_time = now.replace(hour=23, minute=59, second=59, microsecond=999999)
        elif timeframe == 'week':
            start_time = now - timedelta(days=now.weekday())
            start_time = start_time.replace(hour=0, minute=0, second=0, microsecond=0)
            end_time = start_time + timedelta(days=6, hours=23, minutes=59, seconds=59, microseconds=999999)
        elif timeframe == 'month':
            start_time = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
            last_day = calendar.monthrange(now.year, now.month)[1]
            end_time = now.replace(day=last_day, hour=23, minute=59, second=59, microsecond=999999)
        else:
            return jsonify({"error": "Invalid timeframe."}), 400

        sales_cursor = sales_collection.find({
            "date": {
                "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
                "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
            }
        })

        sales_data = {}
        for sale in sales_cursor:
            date = sale["date"].split(" ")[0]
            if date not in sales_data:
                sales_data[date] = {"total_amount": 0, "sales": []}

            sales_data[date]["sales"].append({
                "_id": str(sale["_id"]),
                "serialNumber": sale.get("serialNumber", "N/A"),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "date": sale["date"],
                "customer_phone": sale.get("customer_phone", None),
                "user_id": sale.get("user_id", None)
            })
            sales_data[date]["total_amount"] += sale.get("total_amount", 0)

        if not sales_data:
            return jsonify({"message": "No sales data found."}), 404

        return jsonify(sales_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/daily-sales', methods=['GET'])
def get_daily_sales_by_date():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        selected_date = request.args.get('date')
        if not selected_date:
            return jsonify({"error": "Date is required in the query parameters"}), 400

        start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
        end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

        sales_cursor = sales_collection.find({
            "date": {
                "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
                "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
            }
        })

        sales_data = {selected_date: {"total_amount": 0, "sales": []}}
        for sale in sales_cursor:
            sales_data[selected_date]["sales"].append({
                "_id": str(sale["_id"]),
                "serialNumber": sale.get("serialNumber", "N/A"),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "date": sale["date"],
                "customer_phone": sale.get("customer_phone", None),
                "user_id": sale.get("user_id", None)
            })
            sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

        if not sales_data[selected_date]["sales"]:
            return jsonify({"message": "No sales data found for the selected date."}), 404

        return jsonify(sales_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/daily-sales-employee', methods=['GET'])
def get_employee_sales():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        start_date = request.args.get('startDate')
        end_date = request.args.get('endDate')
        if not start_date or not end_date:
            return jsonify({"error": "Both startDate and endDate are required in query parameters"}), 400

        start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
        end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        sales_cursor = sales_collection.find({
            "date": {
                "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
                "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
            }
        })

        sales_data = []
        for sale in sales_cursor:
            sales_data.append({
                "userId": sale.get("user_id"),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "date": sale["date"],
                "serialNumber": sale.get("serialNumber", "N/A")
            })

        if not sales_data:
            return jsonify({"message": "No sales data found for the selected date range."}), 404

        return jsonify(sales_data)
    except Exception as e:
        print(f"Error: {e}")
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500

@app.route('/api/product-sales', methods=['GET'])
def get_product_sales():
    store_id = request.args.get('storeId')
    product_name = request.args.get('productName')
    if not store_id or not product_name:
        return jsonify({"error": "Store ID and Product Name are required"}), 400

    try:
        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        product_sales = sales_collection.find({"products.name": product_name})
        product_sales_data = []
        for sale in product_sales:
            for product in sale["products"]:
                if product["name"] == product_name:
                    product_sales_data.append({
                        "sale_id": str(sale["_id"]),
                        "serialNumber": sale.get("serialNumber", "N/A"),
                        "total_amount": sale.get("total_amount", 0),
                        "quantity": product["quantity"],
                        "date": sale["date"],
                        "user_id": sale.get("user_id", None)
                    })

        if not product_sales_data:
            return jsonify({"message": "No sales data found for the selected product."}), 404

        return jsonify({"sales_data": product_sales_data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/daily-sales1', methods=['GET'])
def get_daily_sales1():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"error": "Store ID is required in query parameters"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        # Filter parameters
        selected_date = request.args.get('date')
        min_amount = request.args.get('minAmount')
        user_role = request.args.get('userRole')

        query = {}
        if selected_date:
            try:
                start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
                end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)
                query["date"] = {
                    "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
                    "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
                }
            except ValueError:
                return jsonify({"error": "Invalid date format. Use 'YYYY-MM-DD'."}), 400
        
        if min_amount:
            try:
                query["total_amount"] = {"$gte": float(min_amount)}
            except ValueError:
                return jsonify({"error": "Invalid minAmount format. Must be a number."}), 400

        # Fetch sales data
        sales_cursor = sales_collection.find(query)
        sales_data = []
        for sale in sales_cursor:
            if "_id" not in sale:
                print(f"Warning: Sale document missing '_id' field: {sale}")
                continue
            sale_data = {
                "_id": str(sale["_id"]),
                "serialNumber": sale.get("serialNumber", "N/A"),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "date": sale.get("date", ""),
                "customer_phone": sale.get("customer_phone", None),
                "user_id": sale.get("user_id", None)
            }
            sales_data.append(sale_data)

        if not sales_data:
            return jsonify({"message": "No sales data found."}), 404

        # If userRole filter is applied, fetch users and filter sales
        if user_role:
            users_collection = store_db['users']
            users = list(users_collection.find({"role": user_role}, {"_id": 1, "id": 1, "role": 1}))
            user_ids = [user.get("id") for user in users]
            sales_data = [sale for sale in sales_data if sale["user_id"] in user_ids]

        print(f"Sales data sent from /api/daily-sales1: {sales_data[:2]}")
        return jsonify(sales_data)
    except Exception as e:
        print(f"Error in /api/daily-sales1: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/daily-sales2', methods=['GET'])
def get_sales2():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        selected_date = request.args.get('date')
        if not selected_date:
            return jsonify({"error": "Date is required in the query parameters"}), 400

        start_time = datetime.strptime(selected_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
        end_time = start_time + timedelta(hours=23, minutes=59, seconds=59)

        sales_cursor = sales_collection.find({
            "date": {
                "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
                "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
            }
        })

        sales_data = {selected_date: {"total_amount": 0, "sales": []}}
        for sale in sales_cursor:
            sales_data[selected_date]["sales"].append({
                "_id": str(sale["_id"]),
                "serialNumber": sale.get("serialNumber", "N/A"),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "date": sale["date"],
                "customer_phone": sale.get("customer_phone", None),
                "user_id": sale.get("user_id", None)
            })
            sales_data[selected_date]["total_amount"] += sale.get("total_amount", 0)

        if not sales_data[selected_date]["sales"]:
            return jsonify({"message": "No sales data found for the selected date."}), 404

        return jsonify(sales_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/sale-by-serial', methods=['GET'])
def get_sale_by_serial():
    try:
        store_id = request.args.get('storeId')
        serial_number = request.args.get('serialNumber')
        if not store_id or not serial_number:
            return jsonify({"error": "Store ID and Serial Number are required"}), 400

        try:
            serial_number = int(serial_number)  # Convert to integer
        except ValueError:
            return jsonify({"error": "Serial Number must be a number"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        sale = sales_collection.find_one({"serialNumber": serial_number})
        if not sale:
            return jsonify({"message": "No sale found with this serial number"}), 404

        sale_data = {
            "_id": str(sale["_id"]),
            "serialNumber": sale.get("serialNumber"),
            "total_amount": sale.get("total_amount", 0),
            "products": sale.get("products", []),
            "date": sale.get("date", ""),
            "customer_phone": sale.get("customer_phone", None),
            "user_id": sale.get("user_id", None)
        }
        return jsonify({"sale": sale_data}), 200
    except Exception as e:
        print(f"Error in /api/sale-by-serial: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/best-selling-product', methods=['GET'])
def get_best_selling_product():
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        pipeline = [
            {"$unwind": "$products"},
            {"$group": {
                "_id": "$products.name",
                "total_quantity": {"$sum": "$products.quantity"},
                "total_amount": {"$sum": "$products.total_price"}
            }},
            {"$sort": {"total_quantity": -1}},
            {"$limit": 1}
        ]
        best_selling_product = list(sales_collection.aggregate(pipeline))

        if not best_selling_product:
            return jsonify({"message": "No sales data found."}), 404

        best_selling = best_selling_product[0]
        return jsonify({
            "product_name": best_selling["_id"],
            "total_quantity": best_selling["total_quantity"],
            "total_amount": best_selling["total_amount"]
        })
    except Exception as e:
        print(f"Error in /api/best-selling-product: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/hourly-sales', methods=['GET'])
def get_hourly_sales():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400
        
        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        sales_cursor = sales_collection.find({"date": {"$exists": True}})

        hourly_sales = {str(hour): 0 for hour in range(24)}
        for sale in sales_cursor:
            sale_date = datetime.strptime(sale["date"], "%Y-%m-%d %H:%M:%S")
            hour = sale_date.hour
            hourly_sales[str(hour)] += sale.get("total_amount", 0)

        hourly_sales_data = [{"hour": hour, "sales_amount": amount} for hour, amount in hourly_sales.items()]
        if not any(item["sales_amount"] for item in hourly_sales_data):
            return jsonify({"message": "No sales data found."}), 404

        return jsonify({"hourly_sales": hourly_sales_data})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"error": "Store ID is required in query parameters"}), 400

        store_db = get_store_db(store_id)
        users_collection = store_db['users']
        users = list(users_collection.find({}, {"_id": 1, "id": 1, "firstName": 1, "lastName": 1, "role": 1, "email": 1}))
        for user in users:
            user["_id"] = str(user["_id"])
        
        if not users:
            return jsonify({"message": "No users found."}), 404

        print(f"Users data sent: {users[:2]}")
        return jsonify(users)
    except Exception as e:
        print(f"Error in /api/users: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/returns', methods=['POST'])
def process_return():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        return_data = request.json
        print(f"Received return data: {return_data}")
        required_fields = ["serialNumber", "items", "reason", "refundOption"]
        for field in required_fields:
            if field not in return_data or not return_data[field]:
                return jsonify({"error": f"{field} is required"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']
        returns_collection = store_db['returns']

        # Verify sale exists
        sale = sales_collection.find_one({"serialNumber": return_data["serialNumber"]})
        if not sale:
            return jsonify({"error": "Sale not found"}), 404
        print(f"Sale found: {sale}")

        # Validate return items using barcode
        for item in return_data["items"]:
            if "barcode" not in item:
                return jsonify({"error": "Barcode is required for each item"}), 400
            product_in_sale = next((p for p in sale["products"] if p.get("barcode") == item["barcode"]), None)
            if not product_in_sale:
                return jsonify({"error": f"Product with barcode {item['barcode']} not found in sale"}), 400
            if item["quantity"] > product_in_sale["quantity"]:
                return jsonify({"error": f"Invalid return quantity for barcode {item['barcode']}"}), 400

        # Generate unique return ID
        return_id = f"RET-{return_data['serialNumber']}-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        return_entry = {
            "returnId": return_id,
            "serialNumber": return_data["serialNumber"],
            "items": return_data["items"],
            "reason": return_data["reason"],
            "notes": return_data.get("notes", ""),
            "refundOption": return_data["refundOption"],
            "status": "Approved",
            "date": return_data.get("date", datetime.now().isoformat()),
            "totalRefunded": sum(
                item["quantity"] * next(p["total_price"] / p["quantity"] for p in sale["products"] if p.get("barcode") == item["barcode"])
                for item in return_data["items"]
            )
        }
        print(f"Inserting return entry: {return_entry}")
        result = returns_collection.insert_one(return_entry)
        print(f"Return inserted with ID: {str(result.inserted_id)}")

        # Update sale record
        sales_collection.update_one(
            {"serialNumber": return_data["serialNumber"]},
            {"$set": {"returned": True, "returnId": return_id}}
        )

        return jsonify({"message": "Return processed successfully", "returnId": return_id}), 201
    except Exception as e:
        print(f"Error processing return: {str(e)}")
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500
    
@app.route('/api/sale-by-barcode', methods=['GET'])
def get_sale_by_barcode():
    try:
        store_id = request.args.get('storeId')
        barcode = request.args.get('barcode')
        if not store_id or not barcode:
            return jsonify({"error": "Store ID and Barcode are required"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        sale = sales_collection.find_one({"products.barcode": barcode})
        if not sale:
            return jsonify({"message": "No sale found with this barcode"}), 404

        sale_data = {
            "_id": str(sale["_id"]),
            "serialNumber": sale.get("serialNumber"),
            "total_amount": sale.get("total_amount", 0),
            "products": sale.get("products", []),
            "date": sale.get("date", ""),
            "customer_phone": sale.get("customer_phone", None),
            "user_id": sale.get("user_id", None)
        }
        return jsonify({"sale": sale_data}), 200
    except Exception as e:
        print(f"Error in /api/sale-by-barcode: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/sale-by-phone', methods=['GET'])
def get_sale_by_phone():
    try:
        store_id = request.args.get('storeId')
        phone = request.args.get('phone')
        if not store_id or not phone:
            return jsonify({"error": "Store ID and Phone are required"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        sale = sales_collection.find_one({"customer_phone": phone})
        if not sale:
            return jsonify({"message": "No sale found with this phone number"}), 404

        sale_data = {
            "_id": str(sale["_id"]),
            "serialNumber": sale.get("serialNumber"),
            "total_amount": sale.get("total_amount", 0),
            "products": sale.get("products", []),
            "date": sale.get("date", ""),
            "customer_phone": sale.get("customer_phone", None),
            "user_id": sale.get("user_id", None)
        }
        return jsonify({"sale": sale_data}), 200
    except Exception as e:
        print(f"Error in /api/sale-by-phone: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/returns', methods=['GET'])
def get_returns():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"error": "Store ID is required"}), 400

        store_db = get_store_db(store_id)
        returns_collection = store_db['returns']
        returns = list(returns_collection.find())
        for r in returns:
            r["_id"] = str(r["_id"])
        return jsonify(returns), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
@app.route('/api/top-products', methods=['GET'])
def get_top_products():
    store_id = request.args.get('storeId')
    limit = int(request.args.get('limit', 5))
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        store_db = get_store_db(store_id)  # Fixed: use store_id, not storeId
        sales_collection = store_db['sales']

        pipeline = [
            {"$unwind": "$products"},
            {"$group": {
                "_id": "$products.name",
                "total_quantity": {"$sum": "$products.quantity"},
                "total_amount": {"$sum": "$products.total_price"}
            }},
            {"$sort": {"total_quantity": -1}},
            {"$limit": limit}
        ]
        top_products = list(sales_collection.aggregate(pipeline))

        if not top_products:
            return jsonify({"message": "No product sales data found."}), 404

        products = [
            {
                "product_name": product["_id"],
                "total_quantity": product["total_quantity"],
                "total_amount": product["total_amount"]
            }
            for product in top_products
        ]
        print(f"Top products response: {products}")  # Debugging
        return jsonify({"products": products})
    except Exception as e:
        print(f"Error in /api/top-products: {str(e)}")
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500
if __name__ == "__main__":
    app.run(debug=True, port=5010)