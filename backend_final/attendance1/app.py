# # # # # # # import os
# # # # # # # from flask import Flask, request, jsonify, send_from_directory, make_response
# # # # # # # from flask_pymongo import PyMongo
# # # # # # # from bson import ObjectId
# # # # # # # from flask_cors import CORS
# # # # # # # from datetime import datetime
# # # # # # # import logging

# # # # # # # app = Flask(__name__)
# # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # # Configure logging
# # # # # # # logging.basicConfig(level=logging.INFO)
# # # # # # # logger = logging.getLogger(__name__)

# # # # # # # mongo = PyMongo(app)
# # # # # # # CORS(app)

# # # # # # # @app.errorhandler(Exception)
# # # # # # # def handle_error(e):
# # # # # # #     logger.error(f"Unhandled Exception: {str(e)}")
# # # # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # def get_employees():
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     employee_collection = mongo.cx[store_id].employees
# # # # # # #     employees = list(employee_collection.find())
# # # # # # #     for employee in employees:
# # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # #     return jsonify(employees)

# # # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # # def record_attendance():
# # # # # # # #     logger.info(f"Attendance Record Request Headers: {request.headers}")
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     attendance_collection = mongo.cx[store_id].attendance
# # # # # # # #     data = request.get_json()

# # # # # # # #     if not isinstance(data, list):
# # # # # # # #         return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # # #     for record in data:
# # # # # # # #         if not record.get("employeeId") or not record.get("status"):
# # # # # # # #             return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # # #         record["timestamp"] = datetime.utcnow()  # Use UTC for consistency

# # # # # # # #     result = attendance_collection.insert_many(data)
# # # # # # # #     return jsonify({"message": "Attendance recorded successfully!", "inserted_ids": [str(id) for id in result.inserted_ids]}), 201
# # # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # # def record_attendance():
# # # # # # # #     logger.info(f"Attendance Record Request Headers: {request.headers}")
# # # # # # # #     logger.info(f"Attendance Record Request Data: {request.get_json()}")

# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         logger.warning("Attendance record attempt without store ID")
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     try:
# # # # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # # # #         data = request.get_json()

# # # # # # # #         if not isinstance(data, list):
# # # # # # # #             logger.warning(f"Invalid data format: {data}")
# # # # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # # #         for record in data:
# # # # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # # #             record["timestamp"] = datetime.now()

# # # # # # # #         result = attendance_collection.insert_many(data)
        
# # # # # # # #         logger.info(f"Successfully recorded {len(data)} attendance records")
# # # # # # # #         return jsonify({
# # # # # # # #             "message": "Attendance recorded successfully!", 
# # # # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # # # #         }), 201

# # # # # # # #     except Exception as e:
# # # # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500


# # # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # # def record_attendance():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     try:
# # # # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # # # #         data = request.get_json()

# # # # # # # #         if not isinstance(data, list):
# # # # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # # #         for record in data:
# # # # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # # #             record["timestamp"] = datetime.utcnow()  # Use UTC time

# # # # # # # #         result = attendance_collection.insert_many(data)
# # # # # # # #         return jsonify({
# # # # # # # #             "message": "Attendance recorded successfully!", 
# # # # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # # # #         }), 201

# # # # # # # #     except Exception as e:
# # # # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500
# # # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # # def record_attendance():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     try:
# # # # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # # # #         data = request.get_json()

# # # # # # # #         if not isinstance(data, list):
# # # # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # # #         for record in data:
# # # # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # # #             record["timestamp"] = datetime.utcnow()  # Use UTC time
# # # # # # # #             logger.info(f"Recorded attendance for employee {record['employeeId']} at {record['timestamp']}")

# # # # # # # #         result = attendance_collection.insert_many(data)
# # # # # # # #         return jsonify({
# # # # # # # #             "message": "Attendance recorded successfully!", 
# # # # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # # # #         }), 201

# # # # # # # #     except Exception as e:
# # # # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500
# # # # # # # # @app.route("/attendance", methods=["GET"])
# # # # # # # # def get_attendance():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     attendance_collection = mongo.cx[store_id].attendance
# # # # # # # #     attendance_records = list(attendance_collection.find())
    
# # # # # # # #     for record in attendance_records:
# # # # # # # #         record["_id"] = str(record["_id"])
        
# # # # # # # #     return jsonify(attendance_records)

# # # # # # # # if __name__ == "__main__":
# # # # # # # #     app.run(debug=True, host='0.0.0.0', port=5019)
# # # # # # # from flask import Flask, request, jsonify
# # # # # # # from flask_pymongo import PyMongo
# # # # # # # from bson import ObjectId
# # # # # # # from flask_cors import CORS
# # # # # # # from datetime import datetime
# # # # # # # import logging

# # # # # # # app = Flask(__name__)
# # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# # # # # # # # Configure logging
# # # # # # # logging.basicConfig(level=logging.INFO)
# # # # # # # logger = logging.getLogger(__name__)

# # # # # # # mongo = PyMongo(app)
# # # # # # # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # # # # # # # Error handler
# # # # # # # @app.errorhandler(Exception)
# # # # # # # def handle_error(e):
# # # # # # #     logger.error(f"Unhandled Exception: {str(e)}")
# # # # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # # # Record Attendance
# # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # def record_attendance():
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         logger.warning("Attendance record attempt without store ID")
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     try:
# # # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # # #         data = request.get_json()

# # # # # # #         if not isinstance(data, list):
# # # # # # #             logger.warning(f"Invalid data format: {data}")
# # # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # #         for record in data:
# # # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # #             record["timestamp"] = datetime.utcnow().isoformat()  # Consistent ISO format

# # # # # # #         result = attendance_collection.insert_many(data)
# # # # # # #         logger.info(f"Recorded {len(data)} attendance records for store {store_id}")
# # # # # # #         return jsonify({
# # # # # # #             "message": "Attendance recorded successfully!",
# # # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # # #         }), 201

# # # # # # #     except Exception as e:
# # # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # # # # Get Attendance Records
# # # # # # # @app.route("/attendance", methods=["GET"])
# # # # # # # def get_attendance():
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         logger.warning("Attendance fetch attempt without store ID")
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     try:
# # # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # # #         attendance_records = list(attendance_collection.find())
# # # # # # #         for record in attendance_records:
# # # # # # #             record["_id"] = str(record["_id"])
# # # # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
# # # # # # #         return jsonify(attendance_records)
# # # # # # #     except Exception as e:
# # # # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # # # if __name__ == "__main__":
# # # # # # #     app.run(debug=True, host='0.0.0.0', port=5019)
# # # # # # from flask import Flask, request, jsonify
# # # # # # from flask_pymongo import PyMongo
# # # # # # from bson import ObjectId
# # # # # # from flask_cors import CORS
# # # # # # from datetime import datetime
# # # # # # import logging

# # # # # # app = Flask(__name__)
# # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# # # # # # # Configure logging
# # # # # # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # # # # # logger = logging.getLogger(__name__)

# # # # # # try:
# # # # # #     mongo = PyMongo(app)
# # # # # #     logger.info("MongoDB connection established successfully")
# # # # # # except Exception as e:
# # # # # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # # # # #     mongo = None

# # # # # # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # # # # # # Error handler
# # # # # # @app.errorhandler(Exception)
# # # # # # def handle_error(e):
# # # # # #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# # # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # # Record Attendance
# # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # def record_attendance():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         logger.warning("Attendance record attempt without store ID")
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     if not mongo:
# # # # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # # # #     try:
# # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # #         data = request.get_json()

# # # # # #         if not isinstance(data, list):
# # # # # #             logger.warning(f"Invalid data format: {data}")
# # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # #         for record in data:
# # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # #             record["timestamp"] = datetime.utcnow().isoformat()  # Consistent ISO format

# # # # # #         result = attendance_collection.insert_many(data)
# # # # # #         logger.info(f"Recorded {len(data)} attendance records for store {store_id}")
# # # # # #         return jsonify({
# # # # # #             "message": "Attendance recorded successfully!",
# # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # #         }), 201
# # # # # #     except Exception as e:
# # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # # # Get Attendance Records
# # # # # # @app.route("/attendance", methods=["GET"])
# # # # # # def get_attendance():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         logger.warning("Attendance fetch attempt without store ID")
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     if not mongo:
# # # # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # # # #     # Create database and collection if they don't exist
# # # # # #     if store_id not in mongo.cx.list_database_names():
# # # # # #         mongo.cx[store_id].attendance.insert_one({"init": "init"})
# # # # # #         mongo.cx[store_id].attendance.delete_one({"init": "init"})

# # # # # #     try:
# # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # #         attendance_records = list(attendance_collection.find())
# # # # # #         for record in attendance_records:
# # # # # #             record["_id"] = str(record["_id"])
# # # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
# # # # # #         return jsonify(attendance_records)
# # # # # #     except Exception as e:
# # # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # # # CORS Preflight handler
# # # # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # # # def handle_options():
# # # # # #     response = make_response()
# # # # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
# # # # # #     return response

# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True, host='0.0.0.0', port=5019)

# # # # # # from flask import Flask, request, jsonify, make_response
# # # # # # from flask_pymongo import PyMongo
# # # # # # from bson import ObjectId
# # # # # # from flask_cors import CORS
# # # # # # from datetime import datetime
# # # # # # import logging

# # # # # # app = Flask(__name__)
# # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# # # # # # # Configure logging
# # # # # # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # # # # # logger = logging.getLogger(__name__)

# # # # # # try:
# # # # # #     mongo = PyMongo(app)
# # # # # #     logger.info("MongoDB connection established successfully")
# # # # # # except Exception as e:
# # # # # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # # # # #     mongo = None

# # # # # # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # # # # # # Error handler
# # # # # # @app.errorhandler(Exception)
# # # # # # def handle_error(e):
# # # # # #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# # # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # # Health Check
# # # # # # @app.route('/health', methods=['GET'])
# # # # # # def health_check():
# # # # # #     return jsonify({"status": "healthy"}), 200

# # # # # # # Record Attendance
# # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # def record_attendance():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         logger.warning("Attendance record attempt without store ID")
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     if not mongo:
# # # # # #         logger.error("Database connection unavailable")
# # # # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # # # #     try:
# # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # #         data = request.get_json()

# # # # # #         if not isinstance(data, list):
# # # # # #             logger.warning(f"Invalid data format: {data}")
# # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # #         today = datetime.utcnow().date()
# # # # # #         blocked_employees = []

# # # # # #         for record in data:
# # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400

# # # # # #             # Check if attendance is already recorded for today
# # # # # #             existing_record = attendance_collection.find_one({
# # # # # #                 "employeeId": record["employeeId"],
# # # # # #                 "timestamp": {"$gte": datetime.combine(today, datetime.min.time()).isoformat(), "$lt": datetime.combine(today + datetime.timedelta(days=1), datetime.min.time()).isoformat()}
# # # # # #             })
# # # # # #             if existing_record:
# # # # # #                 blocked_employees.append(record["employeeId"])
# # # # # #                 continue

# # # # # #             record["timestamp"] = datetime.utcnow().isoformat()

# # # # # #         if blocked_employees:
# # # # # #             return jsonify({
# # # # # #                 "error": "Attendance already recorded for today",
# # # # # #                 "blocked_employees": blocked_employees,
# # # # # #                 "message": "Attendance submission blocked for employees with existing records today."
# # # # # #             }), 409

# # # # # #         result = attendance_collection.insert_many(data)
# # # # # #         logger.info(f"Recorded {len(data)} attendance records for store {store_id}")
# # # # # #         return jsonify({
# # # # # #             "message": "Attendance recorded successfully!",
# # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # #         }), 201

# # # # # #     except Exception as e:
# # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # # # Get Attendance Records
# # # # # # @app.route("/attendance", methods=["GET"])
# # # # # # def get_attendance():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         logger.warning("Attendance fetch attempt without store ID")
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     if not mongo:
# # # # # #         logger.error("Database connection not available")
# # # # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # # # #     # Create database and collection if they don't exist
# # # # # #     if store_id not in mongo.cx.list_database_names():
# # # # # #         try:
# # # # # #             mongo.cx[store_id].attendance.insert_one({"init": "init"})
# # # # # #             mongo.cx[store_id].attendance.delete_one({"init": "init"})
# # # # # #         except Exception as e:
# # # # # #             logger.error(f"Failed to initialize database: {str(e)}")
# # # # # #             return jsonify({"error": "Failed to initialize database", "details": str(e)}), 500

# # # # # #     try:
# # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # #         attendance_records = list(attendance_collection.find())
# # # # # #         for record in attendance_records:
# # # # # #             record["_id"] = str(record["_id"])

# # # # # #         # Check if attendance is locked for today
# # # # # #         today = datetime.utcnow().date()
# # # # # #         attendance_locked = any(
# # # # # #             attendance_collection.find_one({
# # # # # #                 "employeeId": record["employeeId"],
# # # # # #                 "timestamp": {"$gte": datetime.combine(today, datetime.min.time()).isoformat(), "$lt": datetime.combine(today + datetime.timedelta(days=1), datetime.min.time()).isoformat()}
# # # # # #             })
# # # # # #             for record in attendance_records
# # # # # #         )

# # # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
# # # # # #         return jsonify({
# # # # # #             "attendance_records": attendance_records,
# # # # # #             "attendance_locked": attendance_locked
# # # # # #         })
# # # # # #     except Exception as e:
# # # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # # # Handle invalid routes
# # # # # # @app.errorhandler(404)
# # # # # # def not_found(e):
# # # # # #     logger.warning(f"Invalid route accessed: {request.url}")
# # # # # #     return jsonify({"error": "Invalid endpoint", "details": "Check the URL"}), 404

# # # # # # # CORS Preflight handler
# # # # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # # # def handle_options():
# # # # # #     response = make_response()
# # # # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
# # # # # #     return response

# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True, host='0.0.0.0', port=5019)

# # # # # from flask import Flask, request, jsonify
# # # # # from flask_pymongo import PyMongo
# # # # # from bson import ObjectId
# # # # # from flask_cors import CORS
# # # # # from datetime import datetime
# # # # # import logging

# # # # # app = Flask(__name__)
# # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# # # # # # Configure logging
# # # # # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # # # # logger = logging.getLogger(__name__)

# # # # # try:
# # # # #     mongo = PyMongo(app)
# # # # #     logger.info("MongoDB connection established successfully")
# # # # # except Exception as e:
# # # # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # # # #     mongo = None

# # # # # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # # # # # Error handler
# # # # # @app.errorhandler(Exception)
# # # # # def handle_error(e):
# # # # #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # Record Attendance
# # # # # @app.route("/attendance", methods=["POST"])
# # # # # def record_attendance():
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         logger.warning("Attendance record attempt without store ID")
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     if not mongo:
# # # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # # #     try:
# # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # #         data = request.get_json()

# # # # #         if not isinstance(data, list):
# # # # #             logger.warning(f"Invalid data format: {data}")
# # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # #         for record in data:
# # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # #             record["timestamp"] = datetime.utcnow().isoformat()  # Consistent ISO format

# # # # #         result = attendance_collection.insert_many(data)
# # # # #         logger.info(f"Recorded {len(data)} attendance records for store {store_id}")
# # # # #         return jsonify({
# # # # #             "message": "Attendance recorded successfully!",
# # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # #         }), 201
# # # # #     except Exception as e:
# # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # # Get Attendance Records
# # # # # @app.route("/attendance", methods=["GET"])
# # # # # def get_attendance():
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         logger.warning("Attendance fetch attempt without store ID")
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     if not mongo:
# # # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # # #     # Create database and collection if they don't exist
# # # # #     if store_id not in mongo.cx.list_database_names():
# # # # #         mongo.cx[store_id].attendance.insert_one({"init": "init"})
# # # # #         mongo.cx[store_id].attendance.delete_one({"init": "init"})

# # # # #     try:
# # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # #         attendance_records = list(attendance_collection.find())
# # # # #         for record in attendance_records:
# # # # #             record["_id"] = str(record["_id"])
# # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
# # # # #         return jsonify(attendance_records)
# # # # #     except Exception as e:
# # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # # CORS Preflight handler
# # # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # # def handle_options():
# # # # #     response = make_response()
# # # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
# # # # #     return response

# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, host='0.0.0.0', port=5019)
# # # # from flask import Flask, request, jsonify, make_response
# # # # from flask_pymongo import PyMongo
# # # # from flask_cors import CORS
# # # # from flask_socketio import SocketIO, emit
# # # # from bson import ObjectId
# # # # from datetime import datetime
# # # # import logging

# # # # app = Flask(__name__)
# # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# # # # # WebSocket setup
# # # # socketio = SocketIO(app, cors_allowed_origins="*")

# # # # # Configure logging
# # # # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # # # logger = logging.getLogger(__name__)

# # # # # MongoDB connection
# # # # try:
# # # #     mongo = PyMongo(app)
# # # #     logger.info("MongoDB connection established successfully")
# # # # except Exception as e:
# # # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # # #     mongo = None

# # # # # CORS configuration
# # # # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # # # # Error handler
# # # # @app.errorhandler(Exception)
# # # # def handle_error(e):
# # # #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # Record Attendance via WebSocket
# # # # @socketio.on('newAttendance')
# # # # def handle_new_attendance(data):
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         emit('error', {"error": "Store ID not provided"})
# # # #         return

# # # #     if not mongo:
# # # #         emit('error', {"error": "Database connection unavailable"})
# # # #         return

# # # #     try:
# # # #         attendance_collection = mongo.cx[store_id].attendance
# # # #         if not isinstance(data, list):
# # # #             emit('error', {"error": "Expected an array of attendance records"})
# # # #             return

# # # #         for record in data:
# # # #             if not record.get("employeeId") or not record.get("status"):
# # # #                 emit('error', {"error": "Each record must contain employeeId and status"})
# # # #                 return
# # # #             record["timestamp"] = datetime.utcnow().isoformat()

# # # #         attendance_collection.insert_many(data)
# # # #         emit('attendanceUpdate', data, broadcast=True)  # Broadcast to all clients
# # # #         logger.info(f"Recorded {len(data)} attendance records for store {store_id} via WebSocket")
# # # #     except Exception as e:
# # # #         logger.error(f"Error recording attendance via WebSocket: {str(e)}")
# # # #         emit('error', {"error": str(e)})

# # # # # Record Attendance via HTTP
# # # # @app.route("/attendance", methods=["POST"])
# # # # def record_attendance():
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         logger.warning("Attendance record attempt without store ID")
# # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # #     if not mongo:
# # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # #     try:
# # # #         attendance_collection = mongo.cx[store_id].attendance
# # # #         data = request.get_json()

# # # #         if not isinstance(data, list):
# # # #             logger.warning(f"Invalid data format: {data}")
# # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # #         for record in data:
# # # #             if not record.get("employeeId") or not record.get("status"):
# # # #                 logger.warning(f"Incomplete record: {record}")
# # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # #             record["timestamp"] = datetime.utcnow().isoformat()

# # # #         result = attendance_collection.insert_many(data)
# # # #         socketio.emit('attendanceUpdate', data)  # Notify via WebSocket
# # # #         logger.info(f"Recorded {len(data)} attendance records for store {store_id}")
# # # #         return jsonify({
# # # #             "message": "Attendance recorded successfully!",
# # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # #         }), 201
# # # #     except Exception as e:
# # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # Get Attendance Records
# # # # @app.route("/attendance", methods=["GET"])
# # # # def get_attendance():
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         logger.warning("Attendance fetch attempt without store ID")
# # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # #     if not mongo:
# # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # #     try:
# # # #         attendance_collection = mongo.cx[store_id].attendance
# # # #         attendance_records = list(attendance_collection.find())
# # # #         for record in attendance_records:
# # # #             record["_id"] = str(record["_id"])
# # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
# # # #         return jsonify(attendance_records)
# # # #     except Exception as e:
# # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # CORS Preflight handler
# # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # def handle_options():
# # # #     response = make_response()
# # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
# # # #     return response

# # # # if __name__ == "__main__":
# # # #     socketio.run(app, debug=True, host='0.0.0.0', port=5019)
# # # from flask import Flask, request, jsonify, make_response
# # # from flask_pymongo import PyMongo
# # # from bson import ObjectId
# # # from flask_cors import CORS
# # # from datetime import datetime, timedelta
# # # import logging
# # # import time
# # # from functools import wraps

# # # app = Flask(__name__)
# # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# # # # Configure logging
# # # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # # logger = logging.getLogger(__name__)

# # # try:
# # #     mongo = PyMongo(app)
# # #     logger.info("MongoDB connection established successfully")
# # # except Exception as e:
# # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # #     mongo = None

# # # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # # # Performance monitoring decorator
# # # def track_performance(f):
# # #     @wraps(f)
# # #     def wrapper(*args, **kwargs):
# # #         start_time = time.time()
# # #         result = f(*args, **kwargs)
# # #         end_time = time.time()
# # #         logger.info(f"Function {f.__name__} took {end_time - start_time:.2f} seconds to execute")
# # #         return result
# # #     return wrapper

# # # # Error handler
# # # @app.errorhandler(Exception)
# # # def handle_error(e):
# # #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # Ensure database and collections exist
# # # def ensure_db_exists(store_id):
# # #     if not mongo:
# # #         return False
        
# # #     if store_id not in mongo.cx.list_database_names():
# # #         mongo.cx[store_id].attendance.insert_one({"init": "init"})
# # #         mongo.cx[store_id].attendance.delete_one({"init": "init"})
# # #     return True

# # # # Record Attendance
# # # @app.route("/attendance", methods=["POST"])
# # # @track_performance
# # # def record_attendance():
# # #     store_id = request.headers.get("storeId")
# # #     if not store_id:
# # #         logger.warning("Attendance record attempt without store ID")
# # #         return jsonify({"error": "Store ID not provided"}), 400

# # #     if not mongo:
# # #         return jsonify({"error": "Database connection unavailable"}), 503

# # #     try:
# # #         attendance_collection = mongo.cx[store_id].attendance
# # #         data = request.get_json()

# # #         if not isinstance(data, list):
# # #             logger.warning(f"Invalid data format: {data}")
# # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # #         # Get today's date
# # #         today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
# # #         today_str = today.strftime("%Y-%m-%d")
        
# # #         # Process each record
# # #         processed_records = []
# # #         for record in data:
# # #             if not record.get("employeeId") or not record.get("status"):
# # #                 logger.warning(f"Incomplete record: {record}")
# # #                 continue
                
# # #             # Check if record already exists for today
# # #             existing_record = attendance_collection.find_one({
# # #                 "employeeId": record["employeeId"],
# # #                 "date": today_str
# # #             })
            
# # #             if existing_record:
# # #                 # Update existing record
# # #                 attendance_collection.update_one(
# # #                     {"_id": existing_record["_id"]},
# # #                     {"$set": {
# # #                         "status": record["status"],
# # #                         "timestamp": datetime.utcnow().isoformat(),
# # #                         "updated": True
# # #                     }}
# # #                 )
# # #                 processed_records.append(str(existing_record["_id"]))
# # #             else:
# # #                 # Create new record
# # #                 new_record = {
# # #                     "employeeId": record["employeeId"],
# # #                     "status": record["status"],
# # #                     "timestamp": datetime.utcnow().isoformat(),
# # #                     "date": today_str
# # #                 }
# # #                 result = attendance_collection.insert_one(new_record)
# # #                 processed_records.append(str(result.inserted_id))

# # #         logger.info(f"Processed {len(processed_records)} attendance records for store {store_id}")
# # #         return jsonify({
# # #             "message": "Attendance recorded successfully!",
# # #             "processed_ids": processed_records
# # #         }), 201
# # #     except Exception as e:
# # #         logger.error(f"Error recording attendance: {str(e)}")
# # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # Get Attendance Records
# # # @app.route("/attendance", methods=["GET"])
# # # @track_performance
# # # def get_attendance():
# # #     store_id = request.headers.get("storeId")
# # #     if not store_id:
# # #         logger.warning("Attendance fetch attempt without store ID")
# # #         return jsonify({"error": "Store ID not provided"}), 400

# # #     if not mongo:
# # #         return jsonify({"error": "Database connection unavailable"}), 503

# # #     if not ensure_db_exists(store_id):
# # #         return jsonify({"error": "Failed to ensure database exists"}), 500

# # #     try:
# # #         attendance_collection = mongo.cx[store_id].attendance
        
# # #         # Get query parameters
# # #         date = request.args.get('date')
# # #         employee_id = request.args.get('employeeId')
# # #         status = request.args.get('status')
# # #         page = int(request.args.get('page', 1))
# # #         per_page = int(request.args.get('per_page', 50))
        
# # #         # Build query
# # #         query = {}
        
# # #         if date:
# # #             query["date"] = date
        
# # #         if employee_id:
# # #             query["employeeId"] = employee_id
            
# # #         if status:
# # #             query["status"] = status
        
# # #         # Use pagination for large datasets
# # #         total_records = attendance_collection.count_documents(query)
# # #         skip = (page - 1) * per_page
        
# # #         # Fetch records with pagination
# # #         records = list(attendance_collection.find(query)
# # #                           .skip(skip)
# # #                           .limit(per_page)
# # #                           .sort("timestamp", -1))  # Sort by most recent
        
# # #         # Convert ObjectId to string and format timestamps
# # #         formatted_records = []
# # #         for record in records:
# # #             record["_id"] = str(record["_id"])
# # #             if "timestamp" in record:
# # #                 record["timestamp"] = datetime.fromisoformat(record["timestamp"]).strftime("%Y-%m-%d %H:%M:%S")
# # #             formatted_records.append(record)
        
# # #         logger.info(f"Retrieved {len(formatted_records)} attendance records for store {store_id}")
        
# # #         return jsonify({
# # #             "data": formatted_records,
# # #             "pagination": {
# # #                 "page": page,
# # #                 "per_page": per_page,
# # #                 "total_records": total_records,
# # #                 "total_pages": (total_records // per_page) + (1 if total_records % per_page > 0 else 0)
# # #             }
# # #         })
# # #     except Exception as e:
# # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # Run the Flask app
# # # if __name__ == "__main__":
# # #     app.run(debug=True, host='0.0.0.0', port=5019)
# # from flask import Flask, request, jsonify, make_response
# # from flask_pymongo import PyMongo
# # from flask_cors import CORS
# # from flask_socketio import SocketIO, emit
# # from datetime import datetime
# # import logging

# # app = Flask(__name__)
# # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # socketio = SocketIO(app, cors_allowed_origins="*")

# # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # logger = logging.getLogger(__name__)

# # try:
# #     mongo = PyMongo(app)
# #     logger.info("MongoDB connection established successfully")
# # except Exception as e:
# #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# #     mongo = None

# # CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# # @app.errorhandler(Exception)
# # def handle_error(e):
# #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # @socketio.on('newAttendance')
# # def handle_new_attendance(data):
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         emit('error', {"error": "Store ID not provided"})
# #         return

# #     if not mongo:
# #         emit('error', {"error": "Database connection unavailable"})
# #         return

# #     try:
# #         attendance_collection = mongo.cx[store_id].attendance
# #         if not isinstance(data, list):
# #             emit('error', {"error": "Expected an array of attendance records"})
# #             return

# #         today = datetime.utcnow().strftime('%Y-%m-%d')
# #         valid_records = []
# #         for record in data:
# #             if not record.get("employeeId") or not record.get("status"):
# #                 emit('error', {"error": "Each record must contain employeeId and status"})
# #                 return
# #             # Check if attendance already exists for today
# #             existing = attendance_collection.find_one({
# #                 "employeeId": record["employeeId"],
# #                 "timestamp": {"$regex": f"^{today}"}
# #             })
# #             if not existing:
# #                 record["timestamp"] = datetime.utcnow().isoformat()
# #                 valid_records.append(record)

# #         if not valid_records:
# #             emit('error', {"error": "All selected employees already have attendance recorded today"})
# #             return

# #         attendance_collection.insert_many(valid_records)
# #         emit('attendanceUpdate', valid_records, broadcast=True)
# #         logger.info(f"Recorded {len(valid_records)} attendance records for store {store_id} via WebSocket")
# #     except Exception as e:
# #         logger.error(f"Error recording attendance via WebSocket: {str(e)}")
# #         emit('error', {"error": str(e)})

# # @app.route("/attendance", methods=["POST"])
# # def record_attendance():
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         logger.warning("Attendance record attempt without store ID")
# #         return jsonify({"error": "Store ID not provided"}), 400

# #     if not mongo:
# #         return jsonify({"error": "Database connection unavailable"}), 503

# #     try:
# #         attendance_collection = mongo.cx[store_id].attendance
# #         data = request.get_json()

# #         if not isinstance(data, list):
# #             logger.warning(f"Invalid data format: {data}")
# #             return jsonify({"error": "Expected an array of attendance records"}), 400

# #         today = datetime.utcnow().strftime('%Y-%m-%d')
# #         valid_records = []
# #         for record in data:
# #             if not record.get("employeeId") or not record.get("status"):
# #                 logger.warning(f"Incomplete record: {record}")
# #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# #             # Check if attendance already exists for today
# #             existing = attendance_collection.find_one({
# #                 "employeeId": record["employeeId"],
# #                 "timestamp": {"$regex": f"^{today}"}
# #             })
# #             if not existing:
# #                 record["timestamp"] = datetime.utcnow().isoformat()
# #                 valid_records.append(record)

# #         if not valid_records:
# #             return jsonify({"error": "All selected employees already have attendance recorded today"}), 400

# #         result = attendance_collection.insert_many(valid_records)
# #         socketio.emit('attendanceUpdate', valid_records)
# #         logger.info(f"Recorded {len(valid_records)} attendance records for store {store_id}")
# #         return jsonify({
# #             "message": "Attendance recorded successfully!",
# #             "inserted_ids": [str(id) for id in result.inserted_ids]
# #         }), 201
# #     except Exception as e:
# #         logger.error(f"Error recording attendance: {str(e)}")
# #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # @app.route("/attendance", methods=["GET"])
# # def get_attendance():
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         logger.warning("Attendance fetch attempt without store ID")
# #         return jsonify({"error": "Store ID not provided"}), 400

# #     if not mongo:
# #         return jsonify({"error": "Database connection unavailable"}), 503

# #     try:
# #         attendance_collection = mongo.cx[store_id].attendance
# #         attendance_records = list(attendance_collection.find())
# #         for record in attendance_records:
# #             record["_id"] = str(record["_id"])
# #         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
# #         return jsonify(attendance_records)
# #     except Exception as e:
# #         logger.error(f"Error fetching attendance records: {str(e)}")
# #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # @app.route('/attendance', methods=['OPTIONS'])
# # def handle_options():
# #     response = make_response()
# #     response.headers.add("Access-Control-Allow-Origin", "*")
# #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
# #     return response

# # if __name__ == "__main__":
# #     socketio.run(app, debug=True, host='0.0.0.0', port=5019)
# from flask import Flask, request, jsonify, make_response
# from flask_pymongo import PyMongo
# from flask_cors import CORS
# from flask_socketio import SocketIO, emit
# from datetime import datetime
# import logging

# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# socketio = SocketIO(app, cors_allowed_origins="*")

# logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# logger = logging.getLogger(__name__)

# try:
#     mongo = PyMongo(app)
#     logger.info("MongoDB connection established successfully")
# except Exception as e:
#     logger.error(f"Failed to connect to MongoDB: {str(e)}")
#     mongo = None

# CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# @app.errorhandler(Exception)
# def handle_error(e):
#     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
#     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# @socketio.on('newAttendance')
# def handle_new_attendance(data):
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         emit('error', {"error": "Store ID not provided"})
#         return

#     if not mongo:
#         emit('error', {"error": "Database connection unavailable"})
#         return

#     try:
#         attendance_collection = mongo.db[f"{store_id}_attendance"]
#         if not isinstance(data, list):
#             emit('error', {"error": "Expected an array of attendance records"})
#             return

#         today = datetime.utcnow().strftime('%Y-%m-%d')
#         valid_records = []
#         for record in data:
#             if not record.get("employeeId") or not record.get("status"):
#                 emit('error', {"error": "Each record must contain employeeId and status"})
#                 return
#             existing = attendance_collection.find_one({
#                 "employeeId": record["employeeId"],
#                 "timestamp": {"$regex": f"^{today}"}
#             })
#             if not existing:
#                 record["timestamp"] = datetime.utcnow().isoformat()
#                 valid_records.append(record)

#         if not valid_records:
#             emit('error', {"error": "All selected employees already have attendance recorded today"})
#             return

#         attendance_collection.insert_many(valid_records)
#         emit('attendanceUpdate', valid_records, broadcast=True)
#         logger.info(f"Recorded {len(valid_records)} attendance records for store {store_id} via WebSocket")
#     except Exception as e:
#         logger.error(f"Error recording attendance via WebSocket: {str(e)}")
#         emit('error', {"error": f"Failed to record attendance: {str(e)}"})

# @app.route("/attendance", methods=["POST"])
# def record_attendance():
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         logger.warning("Attendance record attempt without store ID")
#         return jsonify({"error": "Store ID not provided"}), 400

#     if not mongo:
#         logger.error("MongoDB connection unavailable")
#         return jsonify({"error": "Database connection unavailable"}), 503

#     try:
#         attendance_collection = mongo.db[f"{store_id}_attendance"]
#         data = request.get_json()

#         if not isinstance(data, list):
#             logger.warning(f"Invalid data format: {data}")
#             return jsonify({"error": "Expected an array of attendance records"}), 400

#         today = datetime.utcnow().strftime('%Y-%m-%d')
#         valid_records = []
#         for record in data:
#             if not record.get("employeeId") or not record.get("status"):
#                 logger.warning(f"Incomplete record: {record}")
#                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
#             existing = attendance_collection.find_one({
#                 "employeeId": record["employeeId"],
#                 "timestamp": {"$regex": f"^{today}"}
#             })
#             if not existing:
#                 record["timestamp"] = datetime.utcnow().isoformat()
#                 valid_records.append(record)
#             else:
#                 logger.info(f"Attendance already recorded for employee {record['employeeId']} today")

#         if not valid_records:
#             logger.info("No new attendance records to insert")
#             return jsonify({"error": "All selected employees already have attendance recorded today"}), 400

#         result = attendance_collection.insert_many(valid_records)
#         socketio.emit('attendanceUpdate', valid_records)
#         logger.info(f"Recorded {len(valid_records)} attendance records for store {store_id}")
#         return jsonify({
#             "message": "Attendance recorded successfully!",
#             "inserted_ids": [str(id) for id in result.inserted_ids]
#         }), 201
#     except Exception as e:
#         logger.error(f"Error recording attendance: {str(e)}")
#         return jsonify({"error": f"Failed to record attendance: {str(e)}"}), 500

# @app.route("/attendance", methods=["GET"])
# def get_attendance():
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         logger.warning("Attendance fetch attempt without store ID")
#         return jsonify({"error": "Store ID not provided"}), 400

#     if not mongo:
#         logger.error("MongoDB connection not available")
#         return jsonify({"error": "Database connection unavailable"}), 503

#     try:
#         attendance_collection = mongo.db[f"{store_id}_attendance"]
#         attendance_records = list(attendance_collection.find())
#         for record in attendance_records:
#             record["_id"] = str(record["_id"])
#         logger.info(f"Retrieved {len(attendance_records)} attendance records for store {store_id}")
#         return jsonify(attendance_records)
#     except Exception as e:
#         logger.error(f"Error fetching attendance records: {str(e)}")
#         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# @app.route('/attendance', methods=['OPTIONS'])
# def handle_options():
#     response = make_response()
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
#     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
#     return response

# if __name__ == "__main__":
#     socketio.run(app, debug=True, host='0.0.0.0', port=5019)
from flask import Flask, request, jsonify, make_response
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_cors import CORS
from datetime import datetime, timedelta
import logging
import time
from functools import wraps

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/"

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

try:
    mongo = PyMongo(app)
    logger.info("MongoDB connection established successfully")
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {str(e)}")
    mongo = None

CORS(app, resources={r"/*": {"origins": "*", "allow_headers": ["Content-Type", "storeId"]}})

# Performance monitoring decorator
def track_performance(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = f(*args, **kwargs)
        end_time = time.time()
        logger.info(f"Function {f.__name__} took {end_time - start_time:.2f} seconds to execute")
        return result
    return wrapper

# Error handler
@app.errorhandler(Exception)
def handle_error(e):
    logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
    return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# Ensure database and collections exist
def ensure_db_exists(store_id):
    if not mongo:
        return False
        
    if store_id not in mongo.cx.list_database_names():
        mongo.cx[store_id].attendance.insert_one({"init": "init"})
        mongo.cx[store_id].attendance.delete_one({"init": "init"})
    return True

# Record Attendance
@app.route("/attendance", methods=["POST"])
@track_performance
def record_attendance():
    store_id = request.headers.get("storeId")
    if not store_id:
        logger.warning("Attendance record attempt without store ID")
        return jsonify({"error": "Store ID not provided"}), 400

    if not mongo:
        return jsonify({"error": "Database connection unavailable"}), 503

    try:
        attendance_collection = mongo.cx[store_id].attendance
        data = request.get_json()

        if not isinstance(data, list):
            logger.warning(f"Invalid data format: {data}")
            return jsonify({"error": "Expected an array of attendance records"}), 400

        # Get today's date
        today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)
        today_str = today.strftime("%Y-%m-%d")
        
        # Process each record
        processed_records = []
        for record in data:
            if not record.get("employeeId") or not record.get("status"):
                logger.warning(f"Incomplete record: {record}")
                continue
                
            # Check if record already exists for today
            existing_record = attendance_collection.find_one({
                "employeeId": record["employeeId"],
                "date": today_str
            })
            
            if existing_record:
                # Update existing record
                attendance_collection.update_one(
                    {"_id": existing_record["_id"]},
                    {"$set": {
                        "status": record["status"],
                        "timestamp": datetime.utcnow().isoformat(),
                        "updated": True
                    }}
                )
                processed_records.append(str(existing_record["_id"]))
            else:
                # Create new record
                new_record = {
                    "employeeId": record["employeeId"],
                    "status": record["status"],
                    "timestamp": datetime.utcnow().isoformat(),
                    "date": today_str
                }
                result = attendance_collection.insert_one(new_record)
                processed_records.append(str(result.inserted_id))

        logger.info(f"Processed {len(processed_records)} attendance records for store {store_id}")
        return jsonify({
            "message": "Attendance recorded successfully!",
            "processed_ids": processed_records
        }), 201
    except Exception as e:
        logger.error(f"Error recording attendance: {str(e)}")
        return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# Get Attendance Records
@app.route("/attendance", methods=["GET"])
@track_performance
def get_attendance():
    store_id = request.headers.get("storeId")
    if not store_id:
        logger.warning("Attendance fetch attempt without store ID")
        return jsonify({"error": "Store ID not provided"}), 400

    if not mongo:
        return jsonify({"error": "Database connection unavailable"}), 503

    if not ensure_db_exists(store_id):
        return jsonify({"error": "Failed to ensure database exists"}), 500

    try:
        attendance_collection = mongo.cx[store_id].attendance
        
        # Get query parameters
        date = request.args.get('date')
        employee_id = request.args.get('employeeId')
        status = request.args.get('status')
        page = int(request.args.get('page', 1))
        per_page = int(request.args.get('per_page', 50))
        
        # Build query
        query = {}
        
        if date:
            query["date"] = date
        
        if employee_id:
            query["employeeId"] = employee_id
            
        if status:
            query["status"] = status
        
        # Use pagination for large datasets
        total_records = attendance_collection.count_documents(query)
        skip = (page - 1) * per_page
        
        # Fetch records with pagination
        records = list(attendance_collection.find(query)
                          .skip(skip)
                          .limit(per_page)
                          .sort("timestamp", -1))  # Sort by most recent
        
        # Convert ObjectId to string and format timestamps
        formatted_records = []
        for record in records:
            record["_id"] = str(record["_id"])
            if "timestamp" in record:
                record["timestamp"] = datetime.fromisoformat(record["timestamp"]).strftime("%Y-%m-%d %H:%M:%S")
            formatted_records.append(record)
        
        logger.info(f"Retrieved {len(formatted_records)} attendance records for store {store_id}")
        
        return jsonify({
            "data": formatted_records,
            "pagination": {
                "page": page,
                "per_page": per_page,
                "total_records": total_records,
                "total_pages": (total_records // per_page) + (1 if total_records % per_page > 0 else 0)
            }
        })
    except Exception as e:
        logger.error(f"Error fetching attendance records: {str(e)}")
        return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5019)

