# # # # # # # # from flask import Flask, jsonify, request
# # # # # # # # from flask_cors import CORS
# # # # # # # # from datetime import datetime, timedelta
# # # # # # # # from pymongo import MongoClient

# # # # # # # # app = Flask(__name__)
# # # # # # # # CORS(app)

# # # # # # # # # MongoDB connection
# # # # # # # # MONGO_URI = "mongodb://localhost:27017/"
# # # # # # # # client = MongoClient(MONGO_URI)

# # # # # # # # def get_store_db(store_id):
# # # # # # # #     return client[f"store_{store_id}"]

# # # # # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # # # # def get_sales():
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         if not store_id:
# # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # #         store_db = get_store_db(store_id)
# # # # # # # #         sales_collection = store_db['sales']

# # # # # # # #         # Get date range from query parameters
# # # # # # # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # # # # # # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # # # # # # #         if not start_date or not end_date:
# # # # # # # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # # # # # # #         # Convert dates to datetime objects
# # # # # # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999)

# # # # # # # #         # Query sales data for the date range
# # # # # # # #         sales_cursor = sales_collection.find({
# # # # # # # #             "date": {
# # # # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # # # #             }
# # # # # # # #         })

# # # # # # # #         sales_data = []
# # # # # # # #         total_sales = 0
# # # # # # # #         employee_sales = {}  # To track sales by employee

# # # # # # # #         for sale in sales_cursor:
# # # # # # # #             sale_data = {
# # # # # # # #                 "id": str(sale["_id"]),
# # # # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # # # #                 "products": sale.get("products", []),
# # # # # # # #                 "employee_id": sale.get("employee_id", "N/A"),
# # # # # # # #                 "date": sale["date"]
# # # # # # # #             }
# # # # # # # #             sales_data.append(sale_data)
# # # # # # # #             total_sales += sale.get("total_amount", 0)

# # # # # # # #             # Track sales by employee
# # # # # # # #             employee_id = sale.get("employee_id", "N/A")
# # # # # # # #             if employee_id not in employee_sales:
# # # # # # # #                 employee_sales[employee_id] = 0
# # # # # # # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # # # # # # #         if not sales_data:
# # # # # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # # # # #         # Calculate summaries
# # # # # # # #         total_transactions = len(sales_data)
# # # # # # # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # # # # # # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # # # # # # #         response = {
# # # # # # # #             "sales": sales_data,
# # # # # # # #             "summary": {
# # # # # # # #                 "total_sales": total_sales,
# # # # # # # #                 "average_sale": average_sale,
# # # # # # # #                 "total_transactions": total_transactions,
# # # # # # # #                 "top_employee": top_employee
# # # # # # # #             },
# # # # # # # #             "employee_sales": employee_sales  # For charts
# # # # # # # #         }

# # # # # # # #         return jsonify(response)

# # # # # # # #     except Exception as e:
# # # # # # # #         print(f"Error: {e}")
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # if __name__ == "__main__":
# # # # # # # #     app.run(debug=True, port=5021)

# # # # # # # from flask import Flask, jsonify, request
# # # # # # # from flask_cors import CORS
# # # # # # # from datetime import datetime, timedelta
# # # # # # # from pymongo import MongoClient

# # # # # # # app = Flask(__name__)
# # # # # # # CORS(app)

# # # # # # # # MongoDB connection
# # # # # # # MONGO_URI = "mongodb://localhost:27017/"
# # # # # # # client = MongoClient(MONGO_URI)

# # # # # # # def get_store_db(store_id):
# # # # # # #     return client[f"store_{store_id}"]

# # # # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # # # def get_sales():
# # # # # # #     try:
# # # # # # #         store_id = request.headers.get("storeId")
# # # # # # #         if not store_id:
# # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # #         store_db = get_store_db(store_id)
# # # # # # #         sales_collection = store_db['sales']

# # # # # # #         # Get date range from query parameters
# # # # # # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # # # # # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # # # # # #         if not start_date or not end_date:
# # # # # # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # # # # # #         # Convert dates to datetime objects with time
# # # # # # #         start_time = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
# # # # # # #         end_time = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999)

# # # # # # #         # Query sales data for the date range
# # # # # # #         sales_cursor = sales_collection.find({
# # # # # # #             "date": {
# # # # # # #                 "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # #                 "$lte": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # # # # # #             }
# # # # # # #         })

# # # # # # #         sales_data = []
# # # # # # #         total_sales = 0
# # # # # # #         employee_sales = {}  # To track sales by employee

# # # # # # #         for sale in sales_cursor:
# # # # # # #             sale_data = {
# # # # # # #                 "id": str(sale["_id"]),
# # # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # # #                 "products": sale.get("products", []),
# # # # # # #                 "employee_id": sale.get("employee_id", "N/A"),
# # # # # # #                 "date": sale["date"]
# # # # # # #             }
# # # # # # #             sales_data.append(sale_data)
# # # # # # #             total_sales += sale.get("total_amount", 0)

# # # # # # #             # Track sales by employee
# # # # # # #             employee_id = sale.get("employee_id", "N/A")
# # # # # # #             if employee_id not in employee_sales:
# # # # # # #                 employee_sales[employee_id] = 0
# # # # # # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # # # # # #         if not sales_data:
# # # # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # # # #         # Calculate summaries
# # # # # # #         total_transactions = len(sales_data)
# # # # # # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # # # # # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # # # # # #         response = {
# # # # # # #             "sales": sales_data,
# # # # # # #             "summary": {
# # # # # # #                 "total_sales": total_sales,
# # # # # # #                 "average_sale": average_sale,
# # # # # # #                 "total_transactions": total_transactions,
# # # # # # #                 "top_employee": top_employee
# # # # # # #             },
# # # # # # #             "employee_sales": employee_sales  # For charts
# # # # # # #         }

# # # # # # #         return jsonify(response)

# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error: {e}")
# # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # if __name__ == "__main__":
# # # # # # #     app.run(debug=True, port=5021)

# # # # # # from flask import Flask, jsonify, request
# # # # # # from flask_cors import CORS
# # # # # # from datetime import datetime, timedelta
# # # # # # from pymongo import MongoClient

# # # # # # app = Flask(__name__)
# # # # # # CORS(app)

# # # # # # # MongoDB connection
# # # # # # MONGO_URI = "mongodb://localhost:27017/"
# # # # # # client = MongoClient(MONGO_URI)

# # # # # # def get_store_db(store_id):
# # # # # #     return client[f"store_{store_id}"]

# # # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # # def get_sales():
# # # # # #     try:
# # # # # #         store_id = request.headers.get("storeId")
# # # # # #         if not store_id:
# # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         sales_collection = store_db['sales']

# # # # # #         # Get date range from query parameters
# # # # # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # # # # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # # # # #         if not start_date or not end_date:
# # # # # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # # # # #         # Convert dates to strings with time
# # # # # #         start_time = f"{start_date} 00:00:00"  # Start of the day
# # # # # #         end_time = f"{end_date} 23:59:59"      # End of the day

# # # # # #         # Query sales data for the date range
# # # # # #         sales_cursor = sales_collection.find({
# # # # # #             "date": {
# # # # # #                 "$gte": start_time,
# # # # # #                 "$lte": end_time
# # # # # #             }
# # # # # #         })

# # # # # #         sales_data = []
# # # # # #         total_sales = 0
# # # # # #         employee_sales = {}  # To track sales by employee

# # # # # #         for sale in sales_cursor:
# # # # # #             sale_data = {
# # # # # #                 "id": str(sale["_id"]),
# # # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # # #                 "products": sale.get("products", []),
# # # # # #                 "employee_id": sale.get("employee_id", "N/A"),
# # # # # #                 "date": sale["date"]  # Keep the date as a string
# # # # # #             }
# # # # # #             sales_data.append(sale_data)
# # # # # #             total_sales += sale.get("total_amount", 0)

# # # # # #             # Track sales by employee
# # # # # #             employee_id = sale.get("employee_id", "N/A")
# # # # # #             if employee_id not in employee_sales:
# # # # # #                 employee_sales[employee_id] = 0
# # # # # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # # # # #         if not sales_data:
# # # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # # #         # Calculate summaries
# # # # # #         total_transactions = len(sales_data)
# # # # # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # # # # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # # # # #         response = {
# # # # # #             "sales": sales_data,
# # # # # #             "summary": {
# # # # # #                 "total_sales": total_sales,
# # # # # #                 "average_sale": average_sale,
# # # # # #                 "total_transactions": total_transactions,
# # # # # #                 "top_employee": top_employee
# # # # # #             },
# # # # # #             "employee_sales": employee_sales  # For charts
# # # # # #         }

# # # # # #         return jsonify(response)

# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True, port=5021)

# # # # # from flask import Flask, jsonify, request
# # # # # from flask_cors import CORS
# # # # # from pymongo import MongoClient

# # # # # app = Flask(__name__)
# # # # # CORS(app)

# # # # # # MongoDB connection
# # # # # MONGO_URI = "mongodb://localhost:27017/"
# # # # # client = MongoClient(MONGO_URI)

# # # # # def get_store_db(store_id):
# # # # #     return client[f"store_{store_id}"]

# # # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # # def get_sales():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         sales_collection = store_db['sales']

# # # # #         # Get date range from query parameters
# # # # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # # # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # # # #         if not start_date or not end_date:
# # # # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # # # #         # Construct query with date range
# # # # #         start_time = f"{start_date} 00:00:00"  # Start of the day
# # # # #         end_time = f"{end_date} 23:59:59"      # End of the day

# # # # #         # Query sales data for the date range
# # # # #         sales_cursor = sales_collection.find({
# # # # #             "date": {
# # # # #                 "$gte": start_time,
# # # # #                 "$lte": end_time
# # # # #             }
# # # # #         })

# # # # #         sales_data = []
# # # # #         total_sales = 0
# # # # #         employee_sales = {}  # To track sales by employee

# # # # #         for sale in sales_cursor:
# # # # #             sale_data = {
# # # # #                 "id": str(sale["_id"]),
# # # # #                 "total_amount": sale.get("total_amount", 0),
# # # # #                 "products": sale.get("products", []),
# # # # #                 "employee_id": sale.get("employee_id", "N/A"),
# # # # #                 "date": sale["date"]  # Keep the date as a string
# # # # #             }
# # # # #             sales_data.append(sale_data)
# # # # #             total_sales += sale.get("total_amount", 0)

# # # # #             # Track sales by employee
# # # # #             employee_id = sale.get("employee_id", "N/A")
# # # # #             if employee_id not in employee_sales:
# # # # #                 employee_sales[employee_id] = 0
# # # # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # # # #         if not sales_data:
# # # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # # #         # Calculate summaries
# # # # #         total_transactions = len(sales_data)
# # # # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # # # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # # # #         response = {
# # # # #             "sales": sales_data,
# # # # #             "summary": {
# # # # #                 "total_sales": total_sales,
# # # # #                 "average_sale": average_sale,
# # # # #                 "total_transactions": total_transactions,
# # # # #                 "top_employee": top_employee
# # # # #             },
# # # # #             "employee_sales": employee_sales  # For charts
# # # # #         }

# # # # #         return jsonify(response)

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, port=5021)

# # # # from flask import Flask, jsonify, request
# # # # from flask_cors import CORS
# # # # from pymongo import MongoClient

# # # # app = Flask(__name__)
# # # # CORS(app)

# # # # # MongoDB connection
# # # # MONGO_URI = "mongodb://localhost:27017/"
# # # # client = MongoClient(MONGO_URI)

# # # # def get_store_db(store_id):
# # # #     return client[f"store_{store_id}"]

# # # # @app.route('/api/daily-sales', methods=['GET'])
# # # # def get_sales():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         sales_collection = store_db['sales']

# # # #         # Get date range from query parameters
# # # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # # #         if not start_date or not end_date:
# # # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # # #         # Construct query with date range
# # # #         start_time = f"{start_date} 00:00:00"  # Start of the day
# # # #         end_time = f"{end_date} 23:59:59"      # End of the day

# # # #         # Query sales data for the date range
# # # #         sales_cursor = sales_collection.find({
# # # #             "date": {
# # # #                 "$gte": start_time,
# # # #                 "$lte": end_time
# # # #             }
# # # #         })

# # # #         sales_data = []
# # # #         total_sales = 0
# # # #         employee_sales = {}  # To track sales by employee

# # # #         for sale in sales_cursor:
# # # #             sale_data = {
# # # #                 "id": str(sale["_id"]),
# # # #                 "total_amount": sale.get("total_amount", 0),
# # # #                 "products": sale.get("products", []),
# # # #                 "employee_id": sale.get("employee_id", "N/A"),
# # # #                 "date": sale["date"]  # Keep the date as a string
# # # #             }
# # # #             sales_data.append(sale_data)
# # # #             total_sales += sale.get("total_amount", 0)

# # # #             # Track sales by employee
# # # #             employee_id = sale.get("employee_id", "N/A")
# # # #             if employee_id not in employee_sales:
# # # #                 employee_sales[employee_id] = 0
# # # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # # #         if not sales_data:
# # # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # # #         # Calculate summaries
# # # #         total_transactions = len(sales_data)
# # # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # # #         response = {
# # # #             "sales": sales_data,
# # # #             "summary": {
# # # #                 "total_sales": total_sales,
# # # #                 "average_sale": average_sale,
# # # #                 "total_transactions": total_transactions,
# # # #                 "top_employee": top_employee
# # # #             },
# # # #             "employee_sales": employee_sales  # For charts
# # # #         }

# # # #         return jsonify(response)

# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # if __name__ == "__main__":
# # # #     app.run(debug=True, port=5021)

# # # from flask import Flask, jsonify, request
# # # from flask_cors import CORS
# # # from pymongo import MongoClient

# # # app = Flask(__name__)
# # # CORS(app)

# # # # MongoDB connection
# # # MONGO_URI = "mongodb://localhost:27017/"
# # # client = MongoClient(MONGO_URI)

# # # def get_store_db(store_id):
# # #     return client[f"store_{store_id}"]

# # # @app.route('/api/daily-sales', methods=['GET'])
# # # def get_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         # Get date range from query parameters
# # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # #         if not start_date or not end_date:
# # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # #         # Construct query with date range
# # #         start_time = f"{start_date} 00:00:00"  # Start of the day
# # #         end_time = f"{end_date} 23:59:59"      # End of the day

# # #         # Query sales data for the date range
# # #         sales_cursor = sales_collection.find({
# # #             "date": {
# # #                 "$gte": start_time,
# # #                 "$lte": end_time
# # #             }
# # #         })

# # #         sales_data = []
# # #         total_sales = 0
# # #         employee_sales = {}  # To track sales by employee

# # #         for sale in sales_cursor:
# # #             sale_data = {
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "employee_id": sale.get("employee_id", "N/A"),
# # #                 "date": sale["date"]  # Keep the date as a string
# # #             }
# # #             sales_data.append(sale_data)
# # #             total_sales += sale.get("total_amount", 0)

# # #             # Track sales by employee
# # #             employee_id = sale.get("employee_id", "N/A")
# # #             if employee_id not in employee_sales:
# # #                 employee_sales[employee_id] = 0
# # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # #         if not sales_data:
# # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # #         # Calculate summaries
# # #         total_transactions = len(sales_data)
# # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # #         response = {
# # #             "sales": sales_data,
# # #             "summary": {
# # #                 "total_sales": total_sales,
# # #                 "average_sale": average_sale,
# # #                 "total_transactions": total_transactions,
# # #                 "top_employee": top_employee
# # #             },
# # #             "employee_sales": employee_sales  # For charts
# # #         }

# # #         return jsonify(response)

# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500

# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5021)

# # from flask import Flask, jsonify, request
# # from flask_cors import CORS
# # from datetime import datetime, timedelta
# # from pymongo import MongoClient

# # app = Flask(__name__)
# # CORS(app)

# # # MongoDB connection
# # MONGO_URI = "mongodb://localhost:27017/"
# # client = MongoClient(MONGO_URI)

# # def get_store_db(store_id):
# #     return client[f"store_{store_id}"]

# # # @app.route('/api/daily-sales', methods=['GET'])
# # # def get_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         # Get date range from query parameters
# # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # #         if not start_date or not end_date:
# # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # #         # Convert dates to datetime objects
# # #         start_time = datetime.strptime(start_date, "%Y-%m-%d")
# # #         end_time = datetime.strptime(end_date, "%Y-%m-%d") + timedelta(days=1)

# # #         # Query sales data for the date range
# # #         sales_cursor = sales_collection.find({
# # #             "date": {
# # #                 "$gte": start_time,
# # #                 "$lt": end_time
# # #             }
# # #         })

# # #         sales_data = []
# # #         total_sales = 0
# # #         employee_sales = {}  # To track sales by employee

# # #         for sale in sales_cursor:
# # #             sale_data = {
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "employee_id": sale.get("employee_id", "N/A"),
# # #                 "date": sale["date"].strftime("%Y-%m-%d %H:%M:%S")  # Convert to string
# # #             }
# # #             sales_data.append(sale_data)
# # #             total_sales += sale.get("total_amount", 0)

# # #             # Track sales by employee
# # #             employee_id = sale.get("employee_id", "N/A")
# # #             if employee_id not in employee_sales:
# # #                 employee_sales[employee_id] = 0
# # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # #         if not sales_data:
# # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # #         # Calculate summaries
# # #         total_transactions = len(sales_data)
# # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # #         response = {
# # #             "sales": sales_data,
# # #             "summary": {
# # #                 "total_sales": total_sales,
# # #                 "average_sale": average_sale,
# # #                 "total_transactions": total_transactions,
# # #                 "top_employee": top_employee
# # #             },
# # #             "employee_sales": employee_sales  # For charts
# # #         }

# # #         return jsonify(response)

# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500
# # # @app.route('/api/daily-sales', methods=['GET'])
# # # def get_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         # Get date range from query parameters
# # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # #         if not start_date or not end_date:
# # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # #         # Convert dates to datetime objects
# # #         start_time = datetime.strptime(start_date, "%Y-%m-%d")
# # #         end_time = datetime.strptime(end_date, "%Y-%m-%d") + timedelta(days=1)

# # #         # Query sales data for the date range
# # #         # sales_cursor = sales_collection.find({
# # #         #     "date": {
# # #         #         "$gte": start_time.strftime("%Y-%m-%d %H:%M:%S"),  # Match string format
# # #         #         "$lt": end_time.strftime("%Y-%m-%d %H:%M:%S")
# # #         #     }
# # #         # })
# # #         sales_cursor = sales_collection.find({
# # #     "date": {
# # #         "$gte": start_date,
# # #         "$lte": end_date
# # #     }
# # # })
# # # @app.route('/api/daily-sales', methods=['GET'])
# # # def get_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']

# # #         # Get date range from query parameters
# # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # #         if not start_date or not end_date:
# # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400

# # #         # Handle string dates properly since your schema appears to use string dates
# # #         # Add logging to troubleshoot
# # #         print(f"Searching for sales in store {store_id} between {start_date} and {end_date}")
        
# # #         # Adjust query based on your DB schema
# # #         sales_cursor = sales_collection.find({
# # #             "$and": [
# # #                 {"store_id": store_id},
# # #                 {"date": {"$regex": f"^({start_date}|{end_date})"}}
# # #             ]
# # #         })
        
# # #         # For debugging, count the results before processing
# # #         count = sales_collection.count_documents({
# # #             "$and": [
# # #                 {"store_id": store_id},
# # #                 {"date": {"$regex": f"^({start_date}|{end_date})"}}
# # #             ]
# # #         })
# # #         print(f"Found {count} matching records")
# # #         sales_data = []
# # #         total_sales = 0
# # #         employee_sales = {}  # To track sales by employee

# # #         for sale in sales_cursor:
# # #             sale_data = {
# # #                 "id": str(sale["_id"]),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "employee_id": sale.get("employee_id", "N/A"),
# # #                 "date": sale["date"]  # Keep as string
# # #             }
# # #             sales_data.append(sale_data)
# # #             total_sales += sale.get("total_amount", 0)

# # #             # Track sales by employee
# # #             employee_id = sale.get("employee_id", "N/A")
# # #             if employee_id not in employee_sales:
# # #                 employee_sales[employee_id] = 0
# # #             employee_sales[employee_id] += sale.get("total_amount", 0)

# # #         if not sales_data:
# # #             return jsonify({"message": "No sales data found for the selected date range."}), 404

# # #         # Calculate summaries
# # #         total_transactions = len(sales_data)
# # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# # #         response = {
# # #             "sales": sales_data,
# # #             "summary": {
# # #                 "total_sales": total_sales,
# # #                 "average_sale": average_sale,
# # #                 "total_transactions": total_transactions,
# # #                 "top_employee": top_employee
# # #             },
# # #             "employee_sales": employee_sales  # For charts
# # #         }

# # #         return jsonify(response)

# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"error": str(e)}), 500
# # # @app.route('/api/daily-sales', methods=['GET'])
# # # def get_sales():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         print(f"Received request with store_id: {store_id}")
        
# # #         store_db = get_store_db(store_id)
# # #         sales_collection = store_db['sales']
        
# # #         # First, check if there's any data at all in this collection
# # #         total_records = sales_collection.count_documents({})
# # #         print(f"Total records in store_{store_id} sales collection: {total_records}")
        
# # #         if total_records == 0:
# # #             print(f"ERROR: No data found in store_{store_id} sales collection")
# # #             return jsonify({"message": "No sales data found for this store."}), 404
            
# # #         # Get some sample records to verify data format
# # #         sample = list(sales_collection.find().limit(1))
# # #         if sample:
# # #             print(f"Sample record: {sample[0]}")
# # #             print(f"Date format in DB: {type(sample[0].get('date'))} - {sample[0].get('date')}")
        
# # #         # Get date range from query parameters
# # #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# # #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# # #         if not start_date or not end_date:
# # #             return jsonify({"error": "startDate and endDate are required in query parameters"}), 400
            
# # #         print(f"Searching for sales between {start_date} and {end_date}")
        
# # #         # Try a more permissive query first to see if we can find any data
# # #         # Get all records and check dates manually if needed
# # #         all_records = list(sales_collection.find({"store_id": store_id}))
# # #         print(f"Found {len(all_records)} records with store_id: {store_id}")
        
# # #         # Let's try to match with different date formats and see if we get any hits
# # #         matching_records = []
# # #         for record in all_records:
# # #             date_str = record.get('date')
# # #             # Try parsing the date as a string
# # #             try:
# # #                 record_date = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S").date()
# # #                 query_start = datetime.strptime(start_date, "%Y-%m-%d").date()
# # #                 query_end = datetime.strptime(end_date, "%Y-%m-%d").date()
                
# # #                 if query_start <= record_date <= query_end:
# # #                     matching_records.append(record)
# # #             except (ValueError, TypeError) as e:
# # #                 print(f"Date parsing error: {e}")
# # #                 continue
        
# # #         print(f"Found {len(matching_records)} records within date range after manual filtering")
        
# # #         if not matching_records:
# # #             return jsonify({"message": "No sales data found for the selected date range."}), 404
            
# # #         # Process the matching records similar to your original code
# # #         sales_data = []
# # #         total_sales = 0
# # #         employee_sales = {}
        
# # #         for sale in matching_records:
# # #             sale_data = {
# # #                 "id": str(sale.get("_id")),
# # #                 "total_amount": sale.get("total_amount", 0),
# # #                 "products": sale.get("products", []),
# # #                 "employee_id": sale.get("employee_id", "N/A"),
# # #                 "date": sale.get("date")
# # #             }
# # #             sales_data.append(sale_data)
# # #             total_sales += sale.get("total_amount", 0)
            
# # #             employee_id = sale.get("employee_id", "N/A")
# # #             if employee_id not in employee_sales:
# # #                 employee_sales[employee_id] = 0
# # #             employee_sales[employee_id] += sale.get("total_amount", 0)
        
# # #         total_transactions = len(sales_data)
# # #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# # #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"
        
# # #         response = {
# # #             "sales": sales_data,
# # #             "summary": {
# # #                 "total_sales": total_sales,
# # #                 "average_sale": average_sale,
# # #                 "total_transactions": total_transactions,
# # #                 "top_employee": top_employee
# # #             },
# # #             "employee_sales": employee_sales
# # #         }
        
# # #         return jsonify(response)
    
# # #     except Exception as e:
# # #         import traceback
# # #         print(f"Error in get_sales: {e}")
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500
# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5021)

# # from flask import Flask, request, jsonify
# # from flask_pymongo import PyMongo
# # from bson import ObjectId
# # from datetime import datetime
# # import traceback

# # app = Flask(__name__)

# # # Connect to MongoDB
# # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # mongo = PyMongo(app)

# # def get_store_db(store_id):
# #     """ Returns the specific store database. """
# #     return mongo.cx[f"store_{store_id}"]

# # @app.route('/api/daily-sales', methods=['GET'])
# # def get_sales():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         print(f"Received request with store_id: {store_id}")
        
# #         store_db = get_store_db(store_id)
# #         sales_collection = store_db['sales']
        
# #         # Check if there are any records in the collection
# #         total_records = sales_collection.count_documents({})
# #         print(f"Total records in store_{store_id} sales collection: {total_records}")
        
# #         if total_records == 0:
# #             print(f"ERROR: No data found in store_{store_id} sales collection")
# #             return jsonify({"message": "No sales data found for this store."}), 404
            
# #         # Fetch date range from query parameters
# #         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
# #         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'
# #         print(start_date)
# #         print(end_date)
# #         if not start_date or not end_date:
# #             return jsonify({"error": "startDate and endDate are required"}), 400

# #         print(f"Searching for sales between {start_date} and {end_date}")
        
# #         # Convert date strings to datetime objects
# #         query_start = datetime.strptime(start_date, "%Y-%m-%d").date()
# #         query_end = datetime.strptime(end_date, "%Y-%m-%d").date()

# #         # Fetch all sales records from the database
# #         all_records = list(sales_collection.find({"store_id": store_id}))

# #         print(f"Found {len(all_records)} records for store_id: {store_id}")

# #         # Filter records manually by date
# #         matching_records = []
# #         for record in all_records:
# #             try:
# #                 # Try different possible date formats
# #                 date_str = record.get('date')
# #                 if isinstance(date_str, str):
# #                     try:
# #                         record_date = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S").date()
# #                     except ValueError:
# #                         record_date = datetime.strptime(date_str, "%Y-%m-%d").date()
# #                 else:
# #                     continue  # Skip invalid dates

# #                 # Check if record date falls in the range
# #                 if query_start <= record_date <= query_end:
# #                     matching_records.append(record)
# #             except Exception as e:
# #                 print(f"Date parsing error for record {record}: {e}")
# #                 continue
        
# #         print(f"Found {len(matching_records)} records within date range after filtering")

# #         if not matching_records:
# #             return jsonify({"message": "No sales data found for the selected date range."}), 404
            
# #         # Process the matching records
# #         sales_data = []
# #         total_sales = 0
# #         employee_sales = {}

# #         for sale in matching_records:
# #             sale_data = {
# #                 "id": str(sale.get("_id")),
# #                 "total_amount": sale.get("total_amount", 0),
# #                 "products": sale.get("products", []),
# #                 "employee_id": sale.get("user_id", "N/A"),
# #                 "date": sale.get("date")
# #             }
# #             sales_data.append(sale_data)
# #             total_sales += sale.get("total_amount", 0)

# #             # Track employee sales
# #             employee_id = sale.get("user_id", "N/A")
# #             employee_sales[employee_id] = employee_sales.get(employee_id, 0) + sale.get("total_amount", 0)

# #         total_transactions = len(sales_data)
# #         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
# #         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

# #         response = {
# #             "sales": sales_data,
# #             "summary": {
# #                 "total_sales": total_sales,
# #                 "average_sale": average_sale,
# #                 "total_transactions": total_transactions,
# #                 "top_employee": top_employee
# #             },
# #             "employee_sales": employee_sales
# #         }

# #         return jsonify(response)
    
# #     except Exception as e:
# #         print(f"Error in get_sales: {e}")
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5021)
# from flask import Flask, request, jsonify
# from flask_pymongo import PyMongo
# from bson import ObjectId
# from datetime import datetime
# import traceback

# app = Flask(__name__)

# # Connect to MongoDB
# app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# mongo = PyMongo(app)

# def get_store_db(store_id):
#     """ Returns the specific store database. """
#     return mongo.cx[f"store_{store_id}"]

# @app.route('/api/daily-sales', methods=['GET'])
# def get_sales():
#     try:
#         # Get store_id from headers
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         print(f"Received request with store_id: {store_id}", flush=True)
        
#         store_db = get_store_db(store_id)
#         sales_collection = store_db['sales']
        
#         # Check if any sales exist
#         total_records = sales_collection.count_documents({})
#         print(f"Total records in store_{store_id} sales collection: {total_records}", flush=True)
        
#         if total_records == 0:
#             print(f"ERROR: No data found in store_{store_id} sales collection", flush=True)
#             return jsonify({"message": "No sales data found for this store."}), 404
            
#         # Fetch date range from query parameters
#         start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
#         end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'

#         if not start_date or not end_date:
#             return jsonify({"error": "startDate and endDate are required"}), 400

#         print(f"Searching for sales between {start_date} and {end_date}", flush=True)
        
#         # Convert date strings to datetime objects
#         query_start = datetime.strptime(start_date, "%Y-%m-%d").date()
#         query_end = datetime.strptime(end_date, "%Y-%m-%d").date()

#         # Fetch all sales records for this store
#         all_records = list(sales_collection.find({"store_id": store_id}))

#         print(f"Found {len(all_records)} records for store_id: {store_id}", flush=True)

#         # Filter records manually by date
#         matching_records = []
#         for record in all_records:
#             try:
#                 date_str = record.get('date')
#                 if isinstance(date_str, str):
#                     try:
#                         record_date = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S").date()
#                     except ValueError:
#                         record_date = datetime.strptime(date_str, "%Y-%m-%d").date()
#                 else:
#                     print(f"Skipping invalid date format: {record}", flush=True)
#                     continue  

#                 # Check if record date falls in the range
#                 if query_start <= record_date <= query_end:
#                     matching_records.append(record)

#             except Exception as e:
#                 print(f"Date parsing error for record {record}: {e}", flush=True)
#                 continue
        
#         print(f"Found {len(matching_records)} records within date range after filtering", flush=True)

#         if not matching_records:
#             return jsonify({"message": "No sales data found for the selected date range."}), 404
            
#         # Process the matching records
#         sales_data = []
#         total_sales = 0
#         employee_sales = {}

#         for sale in matching_records:
#             sale_data = {
#                 "id": str(sale.get("_id")),
#                 "total_amount": sale.get("total_amount", 0),
#                 "products": sale.get("products", []),
#                 "employee_id": sale.get("user_id", "N/A"),
#                 "date": sale.get("date")
#             }
#             sales_data.append(sale_data)
#             total_sales += sale.get("total_amount", 0)

#             # Track employee sales
#             employee_id = sale.get("user_id", "N/A")
#             employee_sales[employee_id] = employee_sales.get(employee_id, 0) + sale.get("total_amount", 0)

#         total_transactions = len(sales_data)
#         average_sale = total_sales / total_transactions if total_transactions > 0 else 0
#         top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

#         response = {
#             "sales": sales_data,
#             "summary": {
#                 "total_sales": total_sales,
#                 "average_sale": average_sale,
#                 "total_transactions": total_transactions,
#                 "top_employee": top_employee
#             },
#             "employee_sales": employee_sales
#         }

#         return jsonify(response)
    
#     except Exception as e:
#         print(f"Error in get_sales: {e}", flush=True)
#         print(traceback.format_exc(), flush=True)
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True, port=5021)
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from datetime import datetime, timedelta
import traceback

app = Flask(__name__)

# Connect to MongoDB
app.config["MONGO_URI"] = "mongodb://localhost:27017/"
mongo = PyMongo(app)

def get_store_db(store_id):
    """ Returns the specific store database. """
    return mongo.cx[f"store_{store_id}"]

@app.route('/api/daily-sales', methods=['GET'])
def get_sales():
    try:
        # Get store_id from headers
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        store_db = get_store_db(store_id)
        sales_collection = store_db['sales']

        # Fetch date range from query parameters
        start_date = request.args.get('startDate')  # Expecting 'YYYY-MM-DD'
        end_date = request.args.get('endDate')      # Expecting 'YYYY-MM-DD'

        if not start_date or not end_date:
            return jsonify({"error": "startDate and endDate are required"}), 400

        # Convert date strings to datetime objects
        query_start = datetime.strptime(start_date, "%Y-%m-%d").replace(hour=0, minute=0, second=0, microsecond=0)
        query_end = datetime.strptime(end_date, "%Y-%m-%d").replace(hour=23, minute=59, second=59, microsecond=999999)

        print(f"Fetching sales from {query_start} to {query_end}", flush=True)

        # Query MongoDB for matching dates
        sales_cursor = sales_collection.find({
            "date": {
                "$gte": query_start.strftime("%Y-%m-%d %H:%M:%S"),
                "$lte": query_end.strftime("%Y-%m-%d %H:%M:%S")
            }
        })

        sales_data = []
        total_sales = 0
        employee_sales = {}

        for sale in sales_cursor:
            sale_data = {
                "id": str(sale["_id"]),
                "total_amount": sale.get("total_amount", 0),
                "products": sale.get("products", []),
                "employee_id": sale.get("user_id", "N/A"),
                "date": sale["date"]
            }
            sales_data.append(sale_data)
            total_sales += sale.get("total_amount", 0)

            # Track employee sales
            employee_id = sale.get("user_id", "N/A")
            employee_sales[employee_id] = employee_sales.get(employee_id, 0) + sale.get("total_amount", 0)

        if not sales_data:
            return jsonify({"message": "No sales data found for the selected date range."}), 404

        total_transactions = len(sales_data)
        average_sale = total_sales / total_transactions if total_transactions > 0 else 0
        top_employee = max(employee_sales, key=employee_sales.get) if employee_sales else "N/A"

        response = {
            "sales": sales_data,
            "summary": {
                "total_sales": total_sales,
                "average_sale": average_sale,
                "total_transactions": total_transactions,
                "top_employee": top_employee
            },
            "employee_sales": employee_sales
        }

        return jsonify(response)

    except Exception as e:
        print(f"Error in get_sales: {e}", flush=True)
        print(traceback.format_exc(), flush=True)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5021)
