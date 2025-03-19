# # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # from pymongo import MongoClient

# # # # # # # # app = Flask(__name__)

# # # # # # # # # MongoDB Configuration
# # # # # # # # mongo_client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI

# # # # # # # # @app.route("/api/customers", methods=["POST"])
# # # # # # # # def add_customer():
# # # # # # # #     data = request.json

# # # # # # # #     # Validate the required fields
# # # # # # # #     required_fields = ["name", "phone", "storeName"]
# # # # # # # #     for field in required_fields:
# # # # # # # #         if field not in data or not data[field]:
# # # # # # # #             return jsonify({"error": f"{field} is required"}), 400

# # # # # # # #     store_name = data["storeName"]  # Dynamic database name
# # # # # # # #     customer = {
# # # # # # # #         "name": data["name"],
# # # # # # # #         "phone": data["phone"],
# # # # # # # #         "email": data.get("email", ""),
# # # # # # # #         "address": data.get("address", ""),
# # # # # # # #     }

# # # # # # # #     try:
# # # # # # # #         # Use the dynamic database (store name) and constant collection name 'customers'
# # # # # # # #         db = mongo_client[store_name]
# # # # # # # #         customers_collection = db["customers"]
# # # # # # # #         customers_collection.insert_one(customer)

# # # # # # # #         return jsonify({"message": "Customer added successfully"}), 201
# # # # # # # #     except Exception as e:
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # if __name__ == "__main__":
# # # # # # # #     app.run(debug=True,port=5008)
# # # # # # # from flask import Flask, request, jsonify
# # # # # # # from pymongo import MongoClient
# # # # # # # from flask_cors import CORS  # Import CORS

# # # # # # # app = Flask(__name__)

# # # # # # # # Enable CORS for the app
# # # # # # # CORS(app)

# # # # # # # # MongoDB Configuration
# # # # # # # mongo_client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI

# # # # # # # @app.route("/api/customers", methods=["POST"])
# # # # # # # def add_customer():
# # # # # # #     data = request.json

# # # # # # #     # Validate the required fields
# # # # # # #     required_fields = ["name", "phone", "storeName"]
# # # # # # #     for field in required_fields:
# # # # # # #         if field not in data or not data[field]:
# # # # # # #             return jsonify({"error": f"{field} is required"}), 400

# # # # # # #     store_name = data["storeName"]  # Dynamic database name
# # # # # # #     customer = {
# # # # # # #         "name": data["name"],
# # # # # # #         "phone": data["phone"],
# # # # # # #         "email": data.get("email", ""),
# # # # # # #         "address": data.get("address", ""),
# # # # # # #     }

# # # # # # #     try:
# # # # # # #         # Use the dynamic database (store name) and constant collection name 'customers'
# # # # # # #         db = mongo_client[store_name]
# # # # # # #         customers_collection = db["customers"]
# # # # # # #         customers_collection.insert_one(customer)

# # # # # # #         return jsonify({"message": "Customer added successfully"}), 201
# # # # # # #     except Exception as e:
# # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # if __name__ == "__main__":
# # # # # # #     app.run(debug=True, port=5008)
# # # # # # from flask import Flask, request, jsonify
# # # # # # from pymongo import MongoClient
# # # # # # from flask_cors import CORS  # Import CORS

# # # # # # app = Flask(__name__)

# # # # # # # Enable CORS for the app
# # # # # # CORS(app)

# # # # # # # MongoDB Configuration
# # # # # # mongo_client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI

# # # # # # # Add a customer (Customer Signup)
# # # # # # @app.route("/api/customers", methods=["POST"])
# # # # # # def add_customer():
# # # # # #     data = request.json

# # # # # #     # Validate the required fields
# # # # # #     required_fields = ["name", "phone", "storeName"]
# # # # # #     for field in required_fields:
# # # # # #         if field not in data or not data[field]:
# # # # # #             return jsonify({"error": f"{field} is required"}), 400

# # # # # #     store_name = data["storeName"]  # Dynamic database name
# # # # # #     customer = {
# # # # # #         "name": data["name"],
# # # # # #         "phone": data["phone"],
# # # # # #         "email": data.get("email", ""),
# # # # # #         "address": data.get("address", ""),
# # # # # #     }

# # # # # #     try:
# # # # # #         # Use the dynamic database (store name) and constant collection name 'customers'
# # # # # #         db = mongo_client[store_name]
# # # # # #         customers_collection = db["customers"]
# # # # # #         customers_collection.insert_one(customer)

# # # # # #         return jsonify({"message": "Customer added successfully"}), 201
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # # View all customers for a specific store
# # # # # # @app.route("/api/customers", methods=["GET"])
# # # # # # def get_customers():
# # # # # #     store_name = request.args.get("storeName")

# # # # # #     if not store_name:
# # # # # #         return jsonify({"error": "storeName is required"}), 400

# # # # # #     try:
# # # # # #         # Use the dynamic database (store name) and constant collection name 'customers'
# # # # # #         db = mongo_client[store_name]
# # # # # #         customers_collection = db["customers"]
# # # # # #         customers = list(customers_collection.find({}, {"_id": 0}))  # Exclude the MongoDB ID from the response

# # # # # #         return jsonify({"customers": customers}), 200
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True, port=5008)


# # # # # from flask import Flask, request, jsonify
# # # # # from pymongo import MongoClient
# # # # # from flask_cors import CORS

# # # # # app = Flask(__name__)
# # # # # CORS(app)

# # # # # # MongoDB Configuration
# # # # # mongo_client = MongoClient("mongodb://localhost:27017/")

# # # # # # Add a customer (Customer Signup)
# # # # # @app.route("/api/customers", methods=["POST"])
# # # # # def add_customer():
# # # # #     data = request.json

# # # # #     required_fields = ["name", "phone", "storeName"]
# # # # #     for field in required_fields:
# # # # #         if field not in data or not data[field]:
# # # # #             return jsonify({"error": f"{field} is required"}), 400

# # # # #     store_name = data["storeName"]
# # # # #     customer = {
# # # # #         "name": data["name"],
# # # # #         "phone": data["phone"],
# # # # #         "email": data.get("email", ""),
# # # # #         "address": data.get("address", ""),
# # # # #         "birthday": data.get("birthday", ""),
# # # # #         "loyaltyPoints": 100,  # Default points for signup
# # # # #     }

# # # # #     try:
# # # # #         db = mongo_client[store_name]
# # # # #         customers_collection = db["customers"]
# # # # #         customers_collection.insert_one(customer)

# # # # #         return jsonify({"message": "Customer added successfully"}), 201
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # # View all customers for a specific store
# # # # # @app.route("/api/customers", methods=["GET"])
# # # # # def get_customers():
# # # # #     store_name = request.args.get("storeName")

# # # # #     if not store_name:
# # # # #         return jsonify({"error": "storeName is required"}), 400

# # # # #     try:
# # # # #         db = mongo_client[store_name]
# # # # #         customers_collection = db["customers"]
# # # # #         customers = list(customers_collection.find({}, {"_id": 0}))
# # # # #         return jsonify({"customers": customers}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, port=5008)
# # # # from flask import Flask, request, jsonify
# # # # from pymongo import MongoClient
# # # # from flask_cors import CORS

# # # # app = Flask(__name__)
# # # # CORS(app)

# # # # # MongoDB Configuration
# # # # mongo_client = MongoClient("mongodb://localhost:27017/")

# # # # # Add a customer (Customer Signup)
# # # # @app.route("/api/customers", methods=["POST"])
# # # # def add_customer():
# # # #     data = request.json

# # # #     required_fields = ["name", "phone", "storeName"]
# # # #     for field in required_fields:
# # # #         if field not in data or not data[field]:
# # # #             return jsonify({"error": f"{field} is required"}), 400

# # # #     store_name = data["storeName"]
# # # #     customer = {
# # # #         "name": data["name"],
# # # #         "phone": data["phone"],
# # # #         "email": data.get("email", ""),
# # # #         "address": data.get("address", ""),
# # # #         "birthday": data.get("birthday", ""),
# # # #         "loyaltyPoints": 100,  # Default points for signup
# # # #     }

# # # #     try:
# # # #         db = mongo_client[store_name]
# # # #         customers_collection = db["customers"]
# # # #         customers_collection.insert_one(customer)

# # # #         return jsonify({"message": "Customer added successfully"}), 201
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500


# # # # # View all customers for a specific store
# # # # @app.route("/api/customers", methods=["GET"])
# # # # def get_customers():
# # # #     store_name = request.args.get("storeName")

# # # #     if not store_name:
# # # #         return jsonify({"error": "storeName is required"}), 400

# # # #     try:
# # # #         db = mongo_client[store_name]
# # # #         customers_collection = db["customers"]
# # # #         customers = list(customers_collection.find({}, {"_id": 0}))
# # # #         return jsonify({"customers": customers}), 200
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500


# # # # if __name__ == "__main__":
# # # #     app.run(debug=True, port=5008)
# # # from flask import Flask, request, jsonify
# # # from pymongo import MongoClient
# # # from flask_cors import CORS

# # # app = Flask(__name__)
# # # CORS(app)

# # # # MongoDB Configuration
# # # mongo_client = MongoClient("mongodb://localhost:27017/")

# # # # Add a customer (Customer Signup)
# # # @app.route("/api/customers", methods=["POST"])
# # # def add_customer():
# # #     data = request.json

# # #     # Required fields, with storeId instead of storeName
# # #     required_fields = ["name", "phone", "storeId"]
# # #     for field in required_fields:
# # #         if field not in data or not data[field]:
# # #             return jsonify({"error": f"{field} is required"}), 400

# # #     store_id = data["storeId"]  # Use storeId for the database name
# # #     customer = {
# # #         "name": data["name"],
# # #         "phone": data["phone"],
# # #         "email": data.get("email", ""),
# # #         "address": data.get("address", ""),
# # #         "birthday": data.get("birthday", ""),
# # #         "loyaltyPoints": 100,  # Default points for signup
# # #     }

# # #     try:
# # #         db = mongo_client[store_id]  # Use storeId as the database name
# # #         customers_collection = db["customers"]
# # #         customers_collection.insert_one(customer)

# # #         return jsonify({"message": "Customer added successfully"}), 201
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500


# # # # View all customers for a specific store
# # # @app.route("/api/customers", methods=["GET"])
# # # def get_customers():
# # #     store_id = request.args.get("storeId")  # Get storeId from query params

# # #     if not store_id:
# # #         return jsonify({"error": "storeId is required"}), 400

# # #     try:
# # #         db = mongo_client[store_id]  # Use storeId as the database name
# # #         customers_collection = db["customers"]
# # #         customers = list(customers_collection.find({}, {"_id": 0}))
# # #         return jsonify({"customers": customers}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # # @app.route("/api/customers/<customer_id>/purchase-history", methods=["GET"])
# # # # def get_purchase_history(customer_id):
# # # #     store_id = request.args.get("storeId")  # Get storeId from query params
# # # #     if not store_id:
# # # #         return jsonify({"error": "storeId is required"}), 400

# # # #     try:
# # # #         db = mongo_client[store_id]  # Use storeId as the database name
# # # #         sales_collection = db["sales"]  # Assuming sales data is in the 'sales' collection

# # # #         # Find all sales that belong to the customer
# # # #         purchase_history = list(sales_collection.find({"customer_id": customer_id}, {"_id": 0}))

# # # #         if not purchase_history:
# # # #             return jsonify({"message": "No purchase history found for this customer."}), 404

# # # #         return jsonify({"purchase_history": purchase_history}), 200
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500


# # # # @app.route("/api/customers/<customer_phone>/purchase-history", methods=["GET"])
# # # # def get_purchase_history(customer_phone):
# # # #     store_id = request.args.get("storeId")  # Get storeId from query params
# # # #     if not store_id:
# # # #         return jsonify({"error": "storeId is required"}), 400

# # # #     try:
# # # #         db = mongo_client[store_id]  # Use storeId as the database name
# # # #         sales_collection = db["sales"]  # Assuming sales data is in the 'sales' collection

# # # #         # Find all sales that belong to the customer
# # # #         purchase_history = list(sales_collection.find({"customer_phone": customer_phone}, {"_id": 0}))

# # # #         if not purchase_history:
# # # #             return jsonify({"message": "No purchase history found for this customer."}), 404

# # # #         return jsonify({"purchase_history": purchase_history}), 200
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500
# # # # Update customer details (Edit Customer)
# # # @app.route("/api/customers/<customer_phone>", methods=["PUT"])
# # # def update_customer(customer_phone):
# # #     data = request.json
# # #     # Required fields
# # #     required_fields = ["name", "phone", "storeId"]
# # #     for field in required_fields:
# # #         if field not in data or not data[field]:
# # #             return jsonify({"error": f"{field} is required"}), 400

# # #     store_id = data["storeId"]  # Use storeId for the database name
# # #     updated_customer = {
# # #         "name": data["name"],
# # #         "phone": data["phone"],
# # #         "email": data.get("email", ""),
# # #         "address": data.get("address", ""),
# # #         "birthday": data.get("birthday", ""),
# # #         "loyaltyPoints": data.get("loyaltyPoints", 100),  # Loyalty points if provided
# # #     }
# # #     try:
# # #         db = mongo_client[store_id]  # Use storeId as the database name
# # #         customers_collection = db["customers"]
        
# # #         result = customers_collection.update_one(
# # #             {"phone": customer_phone},
# # #             {"$set": updated_customer}
# # #         )

# # #         if result.matched_count == 0:
# # #             return jsonify({"error": "Customer not found"}), 404

# # #         return jsonify({"message": "Customer details updated successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # # Delete customer
# # # @app.route("/api/customers/<customer_phone>", methods=["DELETE"])
# # # def delete_customer(customer_phone):
# # #     store_id = request.args.get("storeId")  # Get storeId from query params
# # #     if not store_id:
# # #         return jsonify({"error": "storeId is required"}), 400

# # #     try:
# # #         db = mongo_client[store_id]  # Use storeId as the database name
# # #         customers_collection = db["customers"]

# # #         result = customers_collection.delete_one({"phone": customer_phone})

# # #         if result.deleted_count == 0:
# # #             return jsonify({"error": "Customer not found"}), 404

# # #         return jsonify({"message": "Customer deleted successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route("/api/customers/<customer_phone>/purchase-history", methods=["GET"])
# # # def get_purchase_history(customer_phone):
# # #     store_id = request.args.get("storeId")  # Get storeId from query params
# # #     if not store_id:
# # #         return jsonify({"error": "storeId is required"}), 400

# # #     try:
# # #         db = mongo_client[store_id]  # Use storeId as the database name
# # #         sales_collection = db["sales"]  # Assuming sales data is in the 'sales' collection

# # #         # Find all sales that belong to the customer
# # #         purchase_history = list(sales_collection.find({"customer_phone": customer_phone}, {"_id": 0}))

# # #         if not purchase_history:
# # #             # No purchase history found for the customer
# # #             return jsonify({"message": "No purchases found for this customer."}), 404

# # #         return jsonify({"purchase_history": purchase_history}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500
# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5008)
# # from flask import Flask, request, jsonify
# # from pymongo import MongoClient
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)

# # # MongoDB Configuration
# # mongo_client = MongoClient("mongodb://localhost:27017/")

# # # Add a customer (Customer Signup)
# # @app.route("/api/customers", methods=["POST"])
# # def add_customer():
# #     data = request.json

# #     required_fields = ["name", "phone", "storeId"]
# #     for field in required_fields:
# #         if field not in data or not data[field]:
# #             return jsonify({"error": f"{field} is required"}), 400

# #     store_id = data["storeId"]
# #     customer = {
# #         "name": data["name"],
# #         "phone": data["phone"],
# #         "email": data.get("email", ""),
# #         "address": data.get("address", ""),
# #         "birthday": data.get("birthday", ""),
# #         "loyaltyPoints": 100,  # Default points for signup
# #     }

# #     try:
# #         db = mongo_client[store_id]
# #         customers_collection = db["customers"]
# #         # Check if phone already exists
# #         if customers_collection.find_one({"phone": data["phone"]}):
# #             return jsonify({"error": "Phone number already exists"}), 400
        
# #         result = customers_collection.insert_one(customer)
# #         customer["_id"] = str(result.inserted_id)  # Convert ObjectId to string
# #         return jsonify({"message": "Customer added successfully", "customer": customer}), 201
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # # View all customers for a specific store
# # @app.route("/api/customers", methods=["GET"])
# # def get_customers():
# #     store_id = request.args.get("storeId")
# #     if not store_id:
# #         return jsonify({"error": "storeId is required"}), 400

# #     try:
# #         db = mongo_client[store_id]
# #         customers_collection = db["customers"]
# #         customers = list(customers_collection.find({}, {"_id": 0}))
# #         return jsonify({"customers": customers}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # # Update customer
# # @app.route("/api/customers/<customer_phone>", methods=["PUT"])
# # def update_customer(customer_phone):
# #     data = request.json
# #     required_fields = ["name", "phone", "storeId"]
# #     for field in required_fields:
# #         if field not in data or not data[field]:
# #             return jsonify({"error": f"{field} is required"}), 400

# #     store_id = data["storeId"]
# #     updated_customer = {
# #         "name": data["name"],
# #         "phone": data["phone"],
# #         "email": data.get("email", ""),
# #         "address": data.get("address", ""),
# #         "birthday": data.get("birthday", ""),
# #         "loyaltyPoints": data.get("loyaltyPoints", 100),
# #     }
# #     try:
# #         db = mongo_client[store_id]
# #         customers_collection = db["customers"]
        
# #         # Check if new phone number already exists for another customer
# #         if data["phone"] != customer_phone and customers_collection.find_one({"phone": data["phone"]}):
# #             return jsonify({"error": "Phone number already in use by another customer"}), 400

# #         result = customers_collection.update_one(
# #             {"phone": customer_phone},
# #             {"$set": updated_customer}
# #         )

# #         if result.matched_count == 0:
# #             return jsonify({"error": "Customer not found"}), 404

# #         return jsonify({"message": "Customer updated successfully", "customer": updated_customer}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # # Delete customer
# # @app.route("/api/customers/<customer_phone>", methods=["DELETE"])
# # def delete_customer(customer_phone):
# #     store_id = request.args.get("storeId")
# #     if not store_id:
# #         return jsonify({"error": "storeId is required"}), 400

# #     try:
# #         db = mongo_client[store_id]
# #         customers_collection = db["customers"]

# #         result = customers_collection.delete_one({"phone": customer_phone})

# #         if result.deleted_count == 0:
# #             return jsonify({"error": "Customer not found"}), 404

# #         return jsonify({"message": "Customer deleted successfully"}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5008)
# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # MongoDB Configuration
# mongo_client = MongoClient("mongodb://localhost:27017/")

# # Add a customer (Customer Signup)
# @app.route("/api/customers", methods=["POST"])
# def add_customer():
#     data = request.json
#     required_fields = ["name", "phone", "storeId"]
#     for field in required_fields:
#         if field not in data or not data[field]:
#             return jsonify({"error": f"{field} is required"}), 400

#     store_id = data["storeId"]
#     customer = {
#         "name": data["name"],
#         "phone": data["phone"],
#         "email": data.get("email", ""),
#         "address": data.get("address", ""),
#         "birthday": data.get("birthday", ""),
#         "loyaltyPoints": 100  # Default points for signup
#     }

#     try:
#         db = mongo_client[store_id]
#         customers_collection = db["customers"]
#         if customers_collection.find_one({"phone": data["phone"]}):
#             return jsonify({"error": "Phone number already exists"}), 400
        
#         result = customers_collection.insert_one(customer)
#         customer["_id"] = str(result.inserted_id)  # Include ID for reference
#         return jsonify({"message": "Customer added successfully", "customer": customer}), 201
#     except Exception as e:
#         return jsonify({"error": f"Failed to add customer: {str(e)}"}), 500

# # View all customers for a specific store
# @app.route("/api/customers", methods=["GET"])
# def get_customers():
#     store_id = request.args.get("storeId")
#     if not store_id:
#         return jsonify({"error": "storeId is required"}), 400

#     try:
#         db = mongo_client[store_id]
#         customers_collection = db["customers"]
#         customers = list(customers_collection.find({}, {"_id": 0}))  # Exclude MongoDB _id
#         return jsonify({"customers": customers}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to fetch customers: {str(e)}"}), 500

# # Update customer
# @app.route("/api/customers/<customer_phone>", methods=["PUT"])
# def update_customer(customer_phone):
#     data = request.json
#     required_fields = ["name", "phone", "storeId"]
#     for field in required_fields:
#         if field not in data or not data[field]:
#             return jsonify({"error": f"{field} is required"}), 400

#     store_id = data["storeId"]
#     updated_customer = {
#         "name": data["name"],
#         "phone": data["phone"],
#         "email": data.get("email", ""),
#         "address": data.get("address", ""),
#         "birthday": data.get("birthday", ""),
#         "loyaltyPoints": data.get("loyaltyPoints", 100)
#     }

#     try:
#         db = mongo_client[store_id]
#         customers_collection = db["customers"]
#         if data["phone"] != customer_phone and customers_collection.find_one({"phone": data["phone"]}):
#             return jsonify({"error": "Phone number already in use by another customer"}), 400

#         result = customers_collection.update_one(
#             {"phone": customer_phone},
#             {"$set": updated_customer}
#         )
#         if result.matched_count == 0:
#             return jsonify({"error": "Customer not found"}), 404

#         return jsonify({"message": "Customer updated successfully", "customer": updated_customer}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to update customer: {str(e)}"}), 500

# # Delete customer
# @app.route("/api/customers/<customer_phone>", methods=["DELETE"])
# def delete_customer(customer_phone):
#     store_id = request.args.get("storeId")
#     if not store_id:
#         return jsonify({"error": "storeId is required"}), 400

#     try:
#         db = mongo_client[store_id]
#         customers_collection = db["customers"]
#         result = customers_collection.delete_one({"phone": customer_phone})
#         if result.deleted_count == 0:
#             return jsonify({"error": "Customer not found"}), 404

#         return jsonify({"message": "Customer deleted successfully"}), 200
#     except Exception as e:
#         return jsonify({"error": f"Failed to delete customer: {str(e)}"}), 500

# if __name__ == "__main__":
#     app.run(debug=True, port=5008)
from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from datetime import datetime
import traceback

app = Flask(__name__)
CORS(app)

# MongoDB Configuration
mongo_client = MongoClient("mongodb://localhost:27017/")

def get_store_db(store_id):
    """Retrieve the database for the specified store ID."""
    if not store_id:
        raise ValueError("Store ID is required.")
    return mongo_client[store_id]

@app.errorhandler(Exception)
def handle_exception(e):
    """Global error handler."""
    print(f"Error occurred: {str(e)}")
    traceback.print_exc()
    return jsonify({"error": str(e)}), 500

# Add a customer (Customer Signup)
@app.route("/api/customers", methods=["POST"])
def add_customer():
    data = request.json
    required_fields = ["name", "phone", "storeId"]
    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"{field} is required"}), 400

    store_id = data["storeId"]
    customer = {
        "name": data["name"],
        "phone": data["phone"],
        "email": data.get("email", ""),
        "address": data.get("address", ""),
        "birthday": data.get("birthday", ""),
        "loyaltyPoints": 100,  # Default points for signup
        "segment": data.get("segment", "New-Customer"),
        "created_at": datetime.now().isoformat()
    }

    try:
        db = get_store_db(store_id)
        customers_collection = db["customers"]
        if customers_collection.find_one({"phone": data["phone"]}):
            return jsonify({"error": "Phone number already exists"}), 400
        
        result = customers_collection.insert_one(customer)
        customer["_id"] = str(result.inserted_id)
        return jsonify({"message": "Customer added successfully", "customer": customer}), 201
    except Exception as e:
        return jsonify({"error": f"Failed to add customer: {str(e)}"}), 500

# View all customers for a specific store with filtering
@app.route("/api/customers", methods=["GET"])
def get_customers():
    store_id = request.args.get("storeId")
    if not store_id:
        return jsonify({"error": "storeId is required"}), 400

    try:
        db = get_store_db(store_id)
        customers_collection = db["customers"]
        
        # Build query based on parameters
        query = {}
        segment = request.args.get("segment")
        if segment:
            query["segment"] = segment
        
        loyalty_points = request.args.get("loyaltyPoints")
        if loyalty_points:
            try:
                query["loyaltyPoints"] = {"$gte": int(loyalty_points)}
            except ValueError:
                return jsonify({"error": "loyaltyPoints must be an integer"}), 400
        
        start_date = request.args.get("startDate")
        end_date = request.args.get("endDate")
        if start_date or end_date:
            query["created_at"] = {}
            if start_date:
                query["created_at"]["$gte"] = start_date
            if end_date:
                query["created_at"]["$lte"] = end_date

        customers = list(customers_collection.find(query, {"_id": 0}))
        return jsonify({"customers": customers}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to fetch customers: {str(e)}"}), 500

# Fetch purchase history for a customer
@app.route("/api/customers/<customer_phone>/purchase-history", methods=["GET"])
def get_purchase_history(customer_phone):
    store_id = request.args.get("storeId")
    if not store_id:
        return jsonify({"error": "storeId is required"}), 400

    try:
        db = get_store_db(store_id)
        sales_collection = db["sales"]
        purchases = list(sales_collection.find({"customer_phone": customer_phone}, {"_id": 0}))
        return jsonify({"purchase_history": purchases}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to fetch purchase history: {str(e)}"}), 500

# Update customer
@app.route("/api/customers/<customer_phone>", methods=["PUT"])
def update_customer(customer_phone):
    data = request.json
    required_fields = ["name", "phone", "storeId"]
    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({"error": f"{field} is required"}), 400

    store_id = data["storeId"]
    updated_customer = {
        "name": data["name"],
        "phone": data["phone"],
        "email": data.get("email", ""),
        "address": data.get("address", ""),
        "birthday": data.get("birthday", ""),
        "loyaltyPoints": data.get("loyaltyPoints", 100),
        "segment": data.get("segment", "New-Customer")
    }

    try:
        db = get_store_db(store_id)
        customers_collection = db["customers"]
        if data["phone"] != customer_phone and customers_collection.find_one({"phone": data["phone"]}):
            return jsonify({"error": "Phone number already in use by another customer"}), 400

        result = customers_collection.update_one(
            {"phone": customer_phone},
            {"$set": updated_customer}
        )
        if result.matched_count == 0:
            return jsonify({"error": "Customer not found"}), 404

        return jsonify({"message": "Customer updated successfully", "customer": updated_customer}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to update customer: {str(e)}"}), 500

# Delete customer
@app.route("/api/customers/<customer_phone>", methods=["DELETE"])
def delete_customer(customer_phone):
    store_id = request.args.get("storeId")
    if not store_id:
        return jsonify({"error": "storeId is required"}), 400

    try:
        db = get_store_db(store_id)
        customers_collection = db["customers"]
        result = customers_collection.delete_one({"phone": customer_phone})
        if result.deleted_count == 0:
            return jsonify({"error": "Customer not found"}), 404

        return jsonify({"message": "Customer deleted successfully"}), 200
    except Exception as e:
        return jsonify({"error": f"Failed to delete customer: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5008)