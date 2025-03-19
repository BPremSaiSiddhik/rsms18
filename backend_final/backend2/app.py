# # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # from pymongo import MongoClient
# # # # # # # # from flask_cors import CORS
# # # # # # # # app = Flask(__name__)
# # # # # # # # CORS(app)
# # # # # # # # client = MongoClient("mongodb://localhost:27017")
# # # # # # # # db = client["gaurav"]
# # # # # # # # users_collection = db["users"]
# # # # # # # # @app.route("/check_user", methods=["POST"])
# # # # # # # # def check_product():
# # # # # # # #     data = request.get_json()
# # # # # # # #     store_name = data.get("store_name")
# # # # # # # #     id = data.get("id")
# # # # # # # #     password=data.get("password")
# # # # # # # #     print(f"Received data: Store Name: {store_name}, ID: {id} ,Password: {password}") 
# # # # # # # #     user=users_collection.findOne({"store_name":store_name,"id":id,"password":password})
# # # # # # # #     if user:
# # # # # # # #         print("User found",user)
# # # # # # # #         return jsonify({"message": "User found!",
# # # # # # # #                         "name":user.get("name","N/A"),
# # # # # # # #                         "id":user.get("id","N/A"),
# # # # # # # #                         "password":user.get("password","N/A"),
# # # # # # # #                         })
# # # # # # # #     else:
# # # # # # # #         print("User not found");
# # # # # # # #         return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # # # # # # if __name__ == "__main__":
# # # # # # # #     app.run(debug=True)
# # # # # # # from flask import Flask, request, jsonify
# # # # # # # from pymongo import MongoClient
# # # # # # # from flask_cors import CORS

# # # # # # # app = Flask(__name__)
# # # # # # # CORS(app)

# # # # # # # client = MongoClient("mongodb://localhost:27017")
# # # # # # # db = client["gaurav"]
# # # # # # # users_collection = db["users"]

# # # # # # # @app.route("/check_user", methods=["POST"])
# # # # # # # def check_user():
# # # # # # #     try:
# # # # # # #         data = request.get_json()
# # # # # # #         store_name = data.get("store_name")
# # # # # # #         id = data.get("id")
# # # # # # #         password = data.get("password")

# # # # # # #         print(f"Received data: Store Name: {store_name}, ID: {id}, Password: {password}")
        
# # # # # # #         # Corrected method name from findOne to find_one
# # # # # # #         user = users_collection.find_one({"store_name": store_name, "id": id, "password": password})
        
# # # # # # #         if user:
# # # # # # #             print("User found:", user)
# # # # # # #             return jsonify({
# # # # # # #                 "store_name": user.get("store_name", "N/A"),
# # # # # # #                 "id": user.get("id", "N/A"),
# # # # # # #                 "password": user.get("password", "N/A")
# # # # # # #             })
# # # # # # #         else:
# # # # # # #             print("User not found")
# # # # # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # # # # #     except Exception as e:
# # # # # # #         print(f"Error: {e}")
# # # # # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # # # # # # if __name__ == "__main__":
# # # # # # #     app.run(debug=True)
# # # # # # from flask import Flask, request, jsonify
# # # # # # from pymongo import MongoClient
# # # # # # from flask_cors import CORS

# # # # # # app = Flask(__name__)
# # # # # # CORS(app)  # Allows cross-origin requests (needed for React to communicate with Flask)

# # # # # # client = MongoClient("mongodb://localhost:27017")
# # # # # # db = client["gaurav"]
# # # # # # users_collection = db["users"]

# # # # # # @app.route("/check_user", methods=["POST"])
# # # # # # def check_user():
# # # # # #     try:
# # # # # #         data = request.get_json()
# # # # # #         print("Received data:", data)  # Log the received data for debugging

# # # # # #         store_name = data.get("store_name")
# # # # # #         id = data.get("id")
# # # # # #         password = data.get("password")

# # # # # #         # Check for the user in the MongoDB collection
# # # # # #         user = users_collection.find_one({"store_name": store_name, "id": id, "password": password})

# # # # # #         if user:
# # # # # #             print("User found:", user)
# # # # # #             return jsonify({
# # # # # #                 "message": "User found!",
# # # # # #                 "store_name": user.get("store_name", "N/A"),
# # # # # #                 "id": user.get("id", "N/A"),
# # # # # #                 "password": user.get("password", "N/A")
# # # # # #             })
# # # # # #         else:
# # # # # #             print("User not found")
# # # # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # # # #     except Exception as e:
# # # # # #         print(f"Error: {e}")
# # # # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True,port=5001)
# # # # # from flask import Flask, request, jsonify
# # # # # from pymongo import MongoClient
# # # # # from flask_cors import CORS

# # # # # app = Flask(__name__)
# # # # # CORS(app)  # Allows cross-origin requests (needed for React to communicate with Flask)

# # # # # client = MongoClient("mongodb://localhost:27017")

# # # # # @app.route("/check_user", methods=["POST"])
# # # # # def check_user():
# # # # #     try:
# # # # #         data = request.get_json()
# # # # #         print("Received data:", data)  # Log the received data for debugging

# # # # #         # Extract the input details
# # # # #         store_name = data.get("store_name")  # This becomes the database name
# # # # #         id = data.get("id")
# # # # #         password = data.get("password")

# # # # #         if not store_name or not id or not password:
# # # # #             return jsonify({"message": "All fields are required!"}), 400

# # # # #         # Dynamically select the database and collection
# # # # #         db = client[store_name]  # Dynamically use the store_name as the database name
# # # # #         users_collection = db["users"]  # Always use 'users' as the collection name

# # # # #         # Query the MongoDB collection
# # # # #         user = users_collection.find_one({"id": id, "password": password})

# # # # #         if user:
# # # # #             print("User found:", user)
# # # # #             return jsonify({
# # # # #                 "message": "User found!",
# # # # #                 "store_name": store_name,
# # # # #                 "id": user.get("id", "N/A"),
# # # # #                 "password": user.get("password", "N/A")
# # # # #             })
# # # # #         else:
# # # # #             print("User not found")
# # # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, port=5001)


# # # # # @app.route("/check_user", methods=["POST"])
# # # # # def check_user():
# # # # #     try:
# # # # #         data = request.get_json()
# # # # #         print("Received data:", data)  # Log the received data for debugging

# # # # #         # Extract the input details
# # # # #         store_id = data.get("storeId")  # Use storeId to find store details
# # # # #         id = data.get("id")
# # # # #         password = data.get("password")

# # # # #         if not store_id or not id or not password:
# # # # #             return jsonify({"message": "All fields are required!"}), 400

# # # # #         # Get the store name based on store_id from the stores collection
# # # # #         stores_collection = client["storesdb"]["stores"]
# # # # #         store = stores_collection.find_one({"storeId": store_id})

# # # # #         if not store:
# # # # #             return jsonify({"message": "Store not found!"}), 404

# # # # #         store_name = store.get("storeName")

# # # # #         # Dynamically select the store database using store_id
# # # # #         db = client[store_id]  # Store ID is the database name
# # # # #         users_collection = db["users"]

# # # # #         # Query the MongoDB collection
# # # # #         user = users_collection.find_one({"id": id, "password": password})

# # # # #         if user:
# # # # #             print("User found:", user)
# # # # #             return jsonify({
# # # # #                 "message": "User found!",
# # # # #                 "store_name": store_name,  # Return the store name
# # # # #                 "id": user.get("id", "N/A"),
# # # # #                 "password": user.get("password", "N/A")
# # # # #             })
# # # # #         else:
# # # # #             print("User not found")
# # # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500
# # # # #@app.route("/check_user", methods=["POST"])
# # # # # def check_user():
# # # # #     try:
# # # # #         data = request.get_json()
# # # # #         print("Received data:", data)  # Log the received data for debugging

# # # # #         # Extract the input details
# # # # #         store_id = data.get("storeId")  # Use storeId to find store details
# # # # #         id = data.get("id")
# # # # #         password = data.get("password")

# # # # #         if not store_id or not id or not password:
# # # # #             return jsonify({"message": "All fields are required!"}), 400

# # # # #         # Get the store name based on store_id from the stores collection
# # # # #         stores_collection = client["storesdb"]["stores"]
# # # # #         store = stores_collection.find_one({"storeId": store_id})

# # # # #         if not store:
# # # # #             return jsonify({"message": "Store not found!"}), 404

# # # # #         store_name = store.get("storeName")

# # # # #         # Dynamically select the store database using store_id
# # # # #         db = client[store_id]  # Store ID is the database name
# # # # #         users_collection = db["users"]

# # # # #         # Query the MongoDB collection
# # # # #         user = users_collection.find_one({"id": str(id), "password": password})

# # # # #         if user:
# # # # #             print("User found:", user)
# # # # #             return jsonify({
# # # # #                 "message": "User found!",
# # # # #                 "store_name": store_name,  # Return the store name
# # # # #                 "id": user.get("id", "N/A"),
# # # # #                 "password": user.get("password", "N/A")
# # # # #             })
# # # # #         else:
# # # # #             print("User not found")
# # # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # # #     @app.route("/check_user", methods=["POST"]) 
# # # #     def check_user():
# # # #         try:
# # # #             data = request.get_json()
# # # #             print("Received data:", data)  # Log the received data for debugging

# # # #             store_id = data.get("storeId")  # Use storeId to find store details
# # # #             id = data.get("id")
# # # #             password = data.get("password")

# # # #             if not store_id or not id or not password:
# # # #                 return jsonify({"message": "All fields are required!"}), 400

# # # #             # Get the store name based on store_id from the stores collection
# # # #             stores_collection = client["storesdb"]["stores"]
# # # #             store = stores_collection.find_one({"storeId": store_id})

# # # #             if not store:
# # # #                 return jsonify({"message": "Store not found!"}), 404

# # # #             store_name = store.get("storeName")

# # # #             # Dynamically select the store database using store_id
# # # #             db = client[store_id]  # Store ID is the database name
# # # #             users_collection = db["users"]

# # # #             # Debugging: Log the query parameters
# # # #             print(f"Querying for user with ID: {id} and Password: {password}")
            
# # # #             # Query the MongoDB collection using string id
# # # #             user = users_collection.find_one({"id": str(id), "password": password})

# # # #             if user:
# # # #                 print("User found:", user)
# # # #                 return jsonify({
# # # #                     "message": "User found!",
# # # #                     "store_name": store_name,  # Return the store name
# # # #                     "id": user.get("id", "N/A"),
# # # #                     "password": user.get("password", "N/A")
# # # #                 })
# # # #             else:
# # # #                 print(f"User with ID: {id} not found or fields mismatch")
# # # #                 return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # #         except Exception as e:
# # # #             print(f"Error: {e}")
# # # #             return jsonify({"message": "Error occurred", "error": str(e)}), 500
# # # # from flask import Flask, request, jsonify
# # # # from pymongo import MongoClient
# # # # from flask_cors import CORS

# # # # app = Flask(__name__)
# # # # CORS(app)  # Allows cross-origin requests (needed for React to communicate with Flask)

# # # # client = MongoClient("mongodb://localhost:27017")

# # # # @app.route("/check_user", methods=["POST"])
# # # # def check_user():
# # # #     try:
# # # #         data = request.get_json()
# # # #         print("Received data:", data)  # Log the received data for debugging

# # # #         # Extract the input details
# # # #         store_id = data.get("storeId")  # Use storeId to find store details
# # # #         id = data.get("id")
# # # #         password = data.get("password")

# # # #         if not store_id or not id or not password:
# # # #             return jsonify({"message": "All fields are required!"}), 400

# # # #         # Get the store name based on store_id from the stores collection
# # # #         stores_collection = client["storesdb"]["stores"]
# # # #         store = stores_collection.find_one({"storeId": store_id})

# # # #         if not store:
# # # #             return jsonify({"message": "Store not found!"}), 404

# # # #         store_name = store.get("storeName")

# # # #         # Dynamically select the store database using store_id
# # # #         db = client[store_id]  # Store ID is the database name
# # # #         users_collection = db["users"]

# # # #         # Debugging: Log the query parameters
# # # #         print(f"Querying for user with ID: {id} (type: {type(id)}) and Password: {password}")

# # # #         # Query the MongoDB collection using string id
# # # #         user = users_collection.find_one({"id": str(id), "password": password})

# # # #         if user:
# # # #             print("User found:", user)
# # # #             return jsonify({
# # # #                 "message": "User found!",
# # # #                 "store_name": store_name,  # Return the store name
# # # #                 "id": user.get("id", "N/A"),
# # # #                 "password": user.get("password", "N/A")
# # # #             })
# # # #         else:
# # # #             print(f"User with ID: {id} not found or fields mismatch")
# # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # # # if __name__ == "__main__":
# # # #     app.run(debug=True, port=5001)


# # # from flask import Flask, request, jsonify
# # # from pymongo import MongoClient
# # # from flask_cors import CORS

# # # app = Flask(__name__)
# # # CORS(app)  # Allows cross-origin requests (needed for React to communicate with Flask)

# # # client = MongoClient("mongodb://localhost:27017")
# # # # @app.route("/check_user", methods=["POST"])
# # # # def check_user():
# # # #     try:
# # # #         data = request.get_json()
# # # #         print("Received data:", data)  # Log the received data for debugging

# # # #         # Extract the input details
# # # #         store_id = data.get("storeId")
# # # #         id = data.get("id")
# # # #         password = data.get("password")

# # # #         if not store_id or not id or not password:
# # # #             return jsonify({"message": "All fields are required!"}), 400

# # # #         # Get the store name based on store_id from stores collection
# # # #         stores_collection = client["storesdb"]["stores"]
# # # #         store = stores_collection.find_one({"storeId": store_id})
# # # #         print("Store found:", store)  # Debugging store data

# # # #         if not store:
# # # #             return jsonify({"message": "Store not found!"}), 404

# # # #         store_name = store.get("storeName")

# # # #         # Dynamically select the store database using store_id
# # # #         db = client[store_id]  # Store ID is the database name
# # # #         users_collection = db["users"]

# # # #         # Query the MongoDB collection
# # # #         # user = users_collection.find_one({"id": id, "password": password})
# # # #         user = users_collection.find_one({"id": str(id), "password": password})  # Convert id to string

# # # #         print("User found:", user)  # Debugging user data

# # # #         if user:
# # # #             return jsonify({
# # # #                 "message": "User found!",
# # # #                 "store_name": store_name,
# # # #                 "id": user.get("id", "N/A"),
# # # #                 "password": user.get("password", "N/A")
# # # #             })
# # # #         else:
# # # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500
# # # @app.route("/check_user", methods=["POST"])
# # # def check_user():
# # #     try:
# # #         data = request.get_json()
# # #         print("Received data:", data)  # Log the received data for debugging

# # #         # Extract the input details
# # #         store_id = data.get("storeId")
# # #         id = data.get("id")
# # #         password = data.get("password")

# # #         if not store_id or not id or not password:
# # #             return jsonify({"message": "All fields are required!"}), 400

# # #         # Get the store name based on store_id from stores collection
# # #         stores_collection = client["storesdb"]["stores"]
# # #         store = stores_collection.find_one({"storeId": store_id})
# # #         print("Store found:", store)  # Debugging store data

# # #         if not store:
# # #             return jsonify({"message": "Store not found!"}), 404

# # #         store_name = store.get("storeName")

# # #         # Dynamically select the store database using store_id
# # #         db = client[store_id]  # Store ID is the database name
# # #         users_collection = db["users"]

# # #         # Query the MongoDB collection
# # #         user = users_collection.find_one({"id": str(id), "password": password})  # Convert id to string

# # #         print("User found:", user)  # Debugging user data

# # #         if user:
# # #             return jsonify({
# # #                 "message": "User found!",
# # #                 "store_name": store_name,
# # #                 "id": user.get("id", "N/A"),
# # #                 "password": user.get("password", "N/A"),
# # #                 "role": user.get("role", "N/A")  # Include the user's role in the response
# # #             })
# # #         else:
# # #             return jsonify({"message": "User not found or Fields mismatch"}), 404
# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"message": "Error occurred", "error": str(e)}), 500
# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5001)
# # from flask import Flask, request, jsonify
# # from pymongo import MongoClient
# # from flask_cors import CORS
# # import bcrypt  # Import bcrypt for password hashing

# # app = Flask(__name__)
# # CORS(app)

# # client = MongoClient("mongodb://localhost:27017")

# # @app.route("/check_user", methods=["POST"])
# # def check_user():
# #     try:
# #         data = request.get_json()
# #         print("Received data:", data)

# #         # Extract input fields
# #         store_id = data.get("storeId")
# #         user_id = data.get("id")
# #         password = data.get("password")

# #         if not store_id or not user_id or not password:
# #             return jsonify({"message": "All fields are required!"}), 400

# #         # Connect to stores collection
# #         stores_collection = client["storesdb"]["stores"]
# #         store = stores_collection.find_one({"storeId": store_id})

# #         if not store:
# #             return jsonify({"message": "Store not found!"}), 404

# #         print("Store found:", store)

# #         store_name = store.get("storeName")

# #         # Connect to specific store database
# #         db = client[store_id]  
# #         users_collection = db["users"]

# #         # Find user
# #         user = users_collection.find_one({"id": str(user_id)})

# #         if user:
# #             stored_hashed_password = user.get("password", "")
# #             if bcrypt.checkpw(password.encode("utf-8"), stored_hashed_password.encode("utf-8")):
# #                 return jsonify({
# #                     "message": "User found!",
# #                     "store_name": store_name,
# #                     "id": user.get("id", "N/A"),
# #                     "role": user.get("role", "N/A")
# #                 }), 200
# #             else:
# #                 return jsonify({"message": "Incorrect password"}), 401
# #         else:
# #             return jsonify({"message": "User not found"}), 404

# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5001)
# # from flask import Flask, request, jsonify
# # from pymongo import MongoClient
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)

# # client = MongoClient("mongodb://localhost:27017")

# # @app.route("/check_user", methods=["POST"])
# # def check_user():
# #     try:
# #         data = request.get_json()
# #         print("Received data:", data)

# #         store_id = data.get("storeId")
# #         user_id = data.get("id")
# #         password = data.get("password")

# #         if not store_id or not user_id or not password:
# #             return jsonify({"message": "All fields are required!"}), 400

# #         # Connect to stores collection
# #         stores_collection = client["storesdb"]["stores"]
# #         store = stores_collection.find_one({"storeId": store_id})

# #         if not store:
# #             return jsonify({"message": "Store not found!"}), 404

# #         print("Store found:", store)

# #         db = client[store_id]  
# #         users_collection = db["users"]

# #         # Convert user_id to int if needed
# #         try:
# #             user_id = int(user_id)  # Convert string ID to integer
# #         except ValueError:
# #             pass  # Keep as string if conversion fails

# #         # Find user
# #         user = users_collection.find_one({"id": user_id})

# #         if user:
# #             print("User found in DB:", user)
# #             if user["password"] == password:
# #                 return jsonify({
# #                     "message": "User found!",
# #                     "store_name": store.get("storeName"),
# #                     "id": user.get("id", "N/A"),
# #                     "role": user.get("role", "N/A")
# #                 }), 200
# #             else:
# #                 return jsonify({"message": "Incorrect password"}), 401
# #         else:
# #             print("User not found in DB for:", {"id": user_id})
# #             return jsonify({"message": "User not found"}), 404

# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5001)
# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# from flask_cors import CORS
# from bson.objectid import ObjectId

# app = Flask(__name__)
# CORS(app)

# client = MongoClient("mongodb://localhost:27017")

# @app.route("/check_user", methods=["POST"])
# def check_user():
#     try:
#         data = request.get_json()
#         print("Received data:", data)

#         store_id = data.get("storeId")
#         user_id = data.get("id")
#         password = data.get("password")

#         if not store_id or not user_id or not password:
#             return jsonify({"message": "All fields are required!"}), 400

#         # Connect to stores collection
#         stores_collection = client["storesdb"]["stores"]
#         store = stores_collection.find_one({"storeId": store_id})

#         if not store:
#             return jsonify({"message": "Store not found!"}), 404

#         print("Store found:", store)

#         db = client[store_id]  
#         users_collection = db["users"]

#         # Ensure user_id is treated as a string
#         user_id = str(user_id)

#         # Find user
#         user = users_collection.find_one({"id": user_id})

#         if user:
#             print("User found in DB:", user)
#             if user["password"] == password:
#                 return jsonify({
#                     "message": "User found!",
#                     "store_name": store.get("storeName"),
#                     "id": user.get("id", "N/A"),
#                     "role": user.get("role", "N/A")
#                 }), 200
#             else:
#                 return jsonify({"message": "Incorrect password"}), 401
#         else:
#             print("User not found in DB for:", {"id": user_id})
#             return jsonify({"message": "User not found"}), 404

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True, port=5001)


from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")

# SMTP Configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USERNAME = os.getenv("SMTP_USERNAME", "noreplyretailstore123@gmail.com")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "mzfy vtui vepc tcyc")

def send_reset_email(email, reset_link):
    try:
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME
        msg['To'] = email
        msg['Subject'] = "Password Reset Request"

        body = f"""
        <p>You have requested to reset your password. Click the link below to reset it:</p>
        <p><a href="{reset_link}">Reset Password</a></p>
        <p>If you did not request this, please ignore this email.</p>
        """
        msg.attach(MIMEText(body, 'html'))

        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.sendmail(SMTP_USERNAME, email, msg.as_string())
        server.quit()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False
# @app.route("/check_user", methods=["POST"])
# def check_user():
#     try:
#         data = request.get_json()
#         print("Received data:", data)

#         store_id = data.get("storeId")
#         user_id = data.get("id")
#         password = data.get("password")

#         if not store_id or not user_id or not password:
#             return jsonify({"message": "All fields are required!"}), 400

#         # Connect to stores collection
#         stores_collection = client["storesdb"]["stores"]
#         store = stores_collection.find_one({"storeId": store_id})

#         if not store:
#             return jsonify({"message": "Store not found!"}), 404

#         print("Store found:", store)

#         db = client[store_id]  
#         users_collection = db["users"]

#         # Ensure user_id is treated as a string
#         user_id = str(user_id)

#         # Find user
#         user = users_collection.find_one({"id": user_id})

#         if user:
#             print("User found in DB:", user)
#             if user["password"] == password:
#                 return jsonify({
#                     "message": "User found!",
#                     "store_name": store.get("storeName"),
#                     "id": user.get("id", "N/A"),
#                     "role": user.get("role", "N/A")
#                 }), 200
#             else:
#                 return jsonify({"message": "Incorrect password"}), 401
#         else:
#             print("User not found in DB for:", {"id": user_id})
#             return jsonify({"message": "User not found"}), 404

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500
@app.route("/check_user", methods=["POST"])
def check_user():
    try:
        data = request.get_json()
        print("Received data:", data)

        store_id = data.get("storeId")
        user_id = data.get("id")
        password = data.get("password")

        if not store_id or not user_id or not password:
            return jsonify({"message": "All fields are required!"}), 400

        # Connect to stores collection
        stores_collection = client["storesdb"]["stores"]
        store = stores_collection.find_one({"storeId": store_id})

        if not store:
            return jsonify({"message": "Store not found!"}), 404

        print("Store found:", store)

        db = client[store_id]  
        users_collection = db["users"]

        # Ensure user_id is treated as a string
        user_id = str(user_id)

        # Find user
        user = users_collection.find_one({"id": user_id})

        if user:
            print("User found in DB:", user)
            if user["password"] == password:
                # Fetch admin details from admins collection
                admins_collection = client["adminsstore"]["admins"]
                admin = admins_collection.find_one({"storeId": store_id})

                if admin:
                    return jsonify({
                        "message": "User found!",
                        "store_name": store.get("storeName"),
                        "id": user.get("id", "N/A"),
                        "role": user.get("role", "N/A"),
                        "store_address": admin.get("storeAddress", "N/A"),
                        "email": admin.get("email", "N/A"),
                        "full_name": admin.get("fullName", "N/A"),
                        "phone_number": admin.get("phoneNumber", "N/A")
                    }), 200
                else:
                    return jsonify({"message": "Admin details not found!"}), 404
            else:
                return jsonify({"message": "Incorrect password"}), 401
        else:
            print("User not found in DB for:", {"id": user_id})
            return jsonify({"message": "User not found"}), 404

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Error occurred", "error": str(e)}), 500
@app.route("/forgot_password", methods=["POST"])
def forgot_password():
    try:
        data = request.get_json()
        email = data.get("email")

        if not email:
            return jsonify({"message": "Email is required!"}), 400

        # Connect to stores collection
        stores_collection = client["storesdb"]["stores"]
        users_collection = None

        # Find the store and user with the given email
        for store in stores_collection.find():
            db = client[store["storeId"]]
            users_collection = db["users"]
            user = users_collection.find_one({"email": email})
            if user:
                break

        if not user:
            return jsonify({"message": "User not found!"}), 404

        # Generate a reset link (this should be a frontend route)
        reset_link = f"http://localhost:3000/reset_password?token={user['_id']}"

        # Send the reset email
        if send_reset_email(email, reset_link):
            return jsonify({"message": "Password reset email sent!"}), 200
        else:
            return jsonify({"message": "Failed to send reset email."}), 500

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route("/reset_password", methods=["POST"])
def reset_password():
    try:
        data = request.get_json()
        token = data.get("token")
        password = data.get("password")

        if not token or not password:
            return jsonify({"message": "Token and password are required!"}), 400

        # Connect to stores collection
        stores_collection = client["storesdb"]["stores"]
        users_collection = None

        # Find the user with the given token
        for store in stores_collection.find():
            db = client[store["storeId"]]
            users_collection = db["users"]
            user = users_collection.find_one({"_id": ObjectId(token)})
            if user:
                break

        if not user:
            return jsonify({"message": "Invalid token!"}), 404

        # Update the user's password
        users_collection.update_one({"_id": ObjectId(token)}, {"$set": {"password": password}})
        return jsonify({"message": "Password reset successfully!"}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Error occurred", "error": str(e)}), 500 
if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True, port=5001)