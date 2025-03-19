# # from flask import Flask, request, jsonify
# # from pymongo import MongoClient
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app)

# # client = MongoClient("mongodb://localhost:27017")

# # @app.route("/get_users", methods=["GET"])
# # def get_users():
# #     try:
# #         store_id = request.args.get('storeId')  # Get storeId from query params
# #         db = client[store_id]  # Dynamically use the store DB
# #         users_collection = db["users"]
# #         users = list(users_collection.find())
# #         # Remove _id field from MongoDB response
# #         for user in users:
# #             user.pop('_id', None)
# #         return jsonify(users), 200
# #     except Exception as e:
# #         return jsonify({"message": "Error occurred", "error": str(e)}), 500


# # @app.route("/add_user", methods=["POST"])
# # def add_user():
# #     try:
# #         data = request.json
# #         store_id = data.get("storeId")
# #         first_name = data.get("firstName")
# #         last_name = data.get("lastName")
# #         email = data.get("email")
# #         phone_number = data.get("phoneNumber")
# #         password = data.get("password")
# #         role = data.get("role")
        
# #         if not all([store_id, first_name, last_name, email, phone_number, password, role]):
# #             return jsonify({"message": "All fields are required!"}), 400

# #         db = client[store_id]
# #         users_collection = db["users"]

# #         # Create a new user document
# #         new_user = {
# #             "firstName": first_name,
# #             "lastName": last_name,
# #             "email": email,
# #             "phoneNumber": phone_number,
# #             "password": password,
# #             "role": role,
# #         }

# #         users_collection.insert_one(new_user)
# #         return jsonify({"message": "User added successfully!"}), 201
# #     except Exception as e:
# #         return jsonify({"message": "Error occurred", "error": str(e)}), 500


# # @app.route("/delete_user", methods=["DELETE"])
# # def delete_user():
# #     try:
# #         data = request.json
# #         store_id = data.get("storeId")
# #         user_id = data.get("userId")

# #         if not store_id or not user_id:
# #             return jsonify({"message": "Store ID and User ID are required!"}), 400

# #         db = client[store_id]
# #         users_collection = db["users"]

# #         # Delete the user
# #         result = users_collection.delete_one({"id": user_id})

# #         if result.deleted_count > 0:
# #             return jsonify({"message": "User deleted successfully!"}), 200
# #         else:
# #             return jsonify({"message": "User not found!"}), 404
# #     except Exception as e:
# #         return jsonify({"message": "Error occurred", "error": str(e)}), 500


# # if __name__ == "__main__":
# #     app.run(debug=True, port=5014)
#     from flask import Flask, request, jsonify
#     from pymongo import MongoClient
#     from flask_cors import CORS

#     app = Flask(__name__)
#     CORS(app)

#     client = MongoClient("mongodb://localhost:27017")

#     # @app.route("/get_users", methods=["GET"])
#     # def get_users():
#     #     try:
#     #         store_id = request.args.get('storeId')  # Get storeId from query params
#     #         db = client[store_id]  # Dynamically use the store DB
#     #         users_collection = db["users"]
#     #         users = list(users_collection.find())
#     #         # Remove _id field from MongoDB response
#     #         for user in users:
#     #             user.pop('_id', None)
#     #         return jsonify(users), 200
#     #     except Exception as e:
#     #         return jsonify({"message": "Error occurred", "error": str(e)}), 500

#     @app.route("/get_users", methods=["GET"])
#     def get_users():
#         try:
#             store_id = request.args.get('storeId')  # Get storeId from query params
#             if not store_id:
#                 return jsonify({"message": "Store ID is required!"}), 400

#             db = client[store_id]  # Dynamically use the store DB
#             users_collection = db["users"]
#             users = list(users_collection.find())

#             if not users:
#                 return jsonify({"message": "No users found."}), 404

#             # Remove _id field from MongoDB response
#             for user in users:
#                 user.pop('_id', None)
#             return jsonify(users), 200
#         except Exception as e:
#             return jsonify({"message": "Error occurred", "error": str(e)}), 500
        
#     @app.route("/add_user", methods=["POST"])
#     def add_user():
#         try:
#             data = request.json
#             store_id = data.get("storeId")
#             first_name = data.get("firstName")
#             last_name = data.get("lastName")
#             email = data.get("email")
#             phone_number = data.get("phoneNumber")
#             password = data.get("password")
#             role = data.get("role")
#             id = data.get("idno")  # New field added

#             if not all([store_id, first_name, last_name, email, phone_number, password, role, id]):
#                 return jsonify({"message": "All fields are required!"}), 400

#             db = client[store_id]
#             users_collection = db["users"]

#             # Create a new user document
#             new_user = {
#                 "firstName": first_name,
#                 "lastName": last_name,
#                 "email": email,
#                 "phoneNumber": phone_number,
#                 "password": password,
#                 "role": role,
#                 "id": id,  # Include the idno in the user data
#             }

#             users_collection.insert_one(new_user)
#             return jsonify({"message": "User added successfully!"}), 201
#         except Exception as e:
#             return jsonify({"message": "Error occurred", "error": str(e)}), 500
#     @app.route("/update_user", methods=["PUT"])
#     def update_user():
#         try:
#             data = request.json
#             store_id = data.get("storeId")
#             user_id = data.get("userId")  # The ID of the user to update
#             updated_data = data.get("updatedData")  # New data to update

#             if not store_id or not user_id or not updated_data:
#                 return jsonify({"message": "Store ID, User ID, and updated data are required!"}), 400

#             db = client[store_id]
#             users_collection = db["users"]

#             # Update the user document
#             result = users_collection.update_one(
#                 {"id": user_id},  # Find the user by their ID
#                 {"$set": updated_data}  # Update the fields provided in updatedData
#             )

#             if result.matched_count > 0:
#                 if result.modified_count > 0:
#                     return jsonify({"message": "User updated successfully!"}), 200
#                 else:
#                     return jsonify({"message": "No changes made to the user."}), 200
#             else:
#                 return jsonify({"message": "User not found!"}), 404
#         except Exception as e:
#             return jsonify({"message": "Error occurred", "error": str(e)}), 500

#     @app.route("/delete_user", methods=["DELETE"])
#     def delete_user():
#         try:
#             data = request.json
#             store_id = data.get("storeId")
#             user_id = data.get("userId")

#             if not store_id or not user_id:
#                 return jsonify({"message": "Store ID and User ID are required!"}), 400

#             db = client[store_id]
#             users_collection = db["users"]

#             # Delete the user by user id
#             result = users_collection.delete_one({"id": int(user_id)})  # Use idno for deletion

#             if result.deleted_count > 0:
#                 return jsonify({"message": "User deleted successfully!"}), 200
#             else:
#                 return jsonify({"message": "User not found!"}), 404
#         except Exception as e:
#             return jsonify({"message": "Error occurred", "error": str(e)}), 500


#     if __name__ == "__main__":
#         app.run(debug=True, port=5014)

from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")

@app.route("/get_users", methods=["GET"])
def get_users():
    try:
        store_id = request.args.get('storeId')  # Get storeId from query params
        if not store_id:
            return jsonify({"message": "Store ID is required!"}), 400

        db = client[store_id]  # Dynamically use the store DB
        users_collection = db["users"]
        users = list(users_collection.find())

        if not users:
            return jsonify({"message": "No users found."}), 404

        # Remove _id field from MongoDB response
        for user in users:
            user.pop('_id', None)
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route("/add_user", methods=["POST"])
def add_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        email = data.get("email")
        phone_number = data.get("phoneNumber")
        password = data.get("password")
        role = data.get("role")
        id = data.get("idno")  # New field added

        if not all([store_id, first_name, last_name, email, phone_number, password, role, id]):
            return jsonify({"message": "All fields are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        # Create a new user document
        new_user = {
            "firstName": first_name,
            "lastName": last_name,
            "email": email,
            "phoneNumber": phone_number,
            "password": password,
            "role": role,
            "id": id,  # Include the idno in the user data
        }

        users_collection.insert_one(new_user)
        return jsonify({"message": "User added successfully!"}), 201
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

# @app.route("/update_user", methods=["PUT"])
# def update_user():
#     try:
#         data = request.json
#         store_id = data.get("storeId")
#         user_id = data.get("userId")  # The ID of the user to update
#         updated_data = data.get("updatedData")  # New data to update

#         if not store_id or not user_id or not updated_data:
#             return jsonify({"message": "Store ID, User ID, and updated data are required!"}), 400

#         db = client[store_id]
#         users_collection = db["users"]

#         # Update the user document
#         result = users_collection.update_one(
#             {"id": user_id},  # Find the user by their ID
#             {"$set": updated_data}  # Update the fields provided in updatedData
#         )

#         if result.matched_count > 0:
#             if result.modified_count > 0:
#                 return jsonify({"message": "User updated successfully!"}), 200
#             else:
#                 return jsonify({"message": "No changes made to the user."}), 200
#         else:
#             return jsonify({"message": "User not found!"}), 404
#     except Exception as e:
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500
@app.route("/update_user", methods=["PUT"])
def update_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        user_id = data.get("userId")  # The ID of the user to update
        updated_data = data.get("updatedData")  # New data to update

        if not store_id or not user_id or not updated_data:
            return jsonify({"message": "Store ID, User ID, and updated data are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        # Update the user document
        result = users_collection.update_one(
            {"id": user_id},  # Find the user by their ID
            {"$set": updated_data}  # Update the fields provided in updatedData
        )

        if result.matched_count > 0:
            if result.modified_count > 0:
                return jsonify({"message": "User  updated successfully!"}), 200
            else:
                return jsonify({"message": "No changes made to the user."}), 200
        else:
            return jsonify({"message": "User  not found!"}), 404
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500
# @app.route("/delete_user", methods=["DELETE"])
# def delete_user():
#     try:
#         data = request.json
#         store_id = data.get("storeId")
#         user_id = data.get("userId")

#         if not store_id or not user_id:
#             return jsonify({"message": "Store ID and User ID are required!"}), 400

#         db = client[store_id]
#         users_collection = db["users"]

#         # Delete the user by user id
#         result = users_collection.delete_one({"id": int(user_id)})  # Use idno for deletion

#         if result.deleted_count > 0:
#             return jsonify({"message": "User deleted successfully!"}), 200
#         else:
#             return jsonify({"message": "User not found!"}), 404
#     except Exception as e:
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500

# @app.route("/delete_user", methods=["DELETE"])
# def delete_user():
#     try:
#         data = request.json
#         store_id = data.get("storeId")
#         user_id = data.get("userId")

#         if not store_id or not user_id:
#             return jsonify({"message": "Store ID and User ID are required!"}), 400

#         db = client[store_id]
#         users_collection = db["users"]

#         # Delete the user by user id
#         result = users_collection.delete_one({"id": user_id})  # Use id for deletion

#         if result.deleted_count > 0:
#             return jsonify({"message": "User  deleted successfully!"}), 200
#         else:
#             return jsonify({"message": "User  not found!"}), 404
#     except Exception as e:
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500
# if __name__ == "__main__":
#     app.run(debug=True, port=5014)



from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")

@app.route("/get_users", methods=["GET"])
def get_users():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"message": "Store ID is required!"}), 400

        db = client[store_id]
        users_collection = db["users"]
        users = list(users_collection.find())

        if not users:
            return jsonify({"message": "No users found."}), 404

        for user in users:
            user.pop('_id', None)
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route("/add_user", methods=["POST"])
def add_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        email = data.get("email")
        phone_number = data.get("phoneNumber")
        password = data.get("password")
        role = data.get("role")
        id = data.get("idno")

        if not all([store_id, first_name, last_name, email, phone_number, password, role, id]):
            return jsonify({"message": "All fields are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        new_user = {
            "firstName": first_name,
            "lastName": last_name,
            "email": email,
            "phoneNumber": phone_number,
            "password": password,
            "role": role,
            "id": id,
        }

        users_collection.insert_one(new_user)
        return jsonify({"message": "User  added successfully!"}), 201
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500
# @app.route("/add_user", methods=["POST"])
# def add_user():
#     try:
#         data = request.json
#         store_id = data.get("storeId")
#         first_name = data.get("firstName")
#         last_name = data.get("lastName")
#         email = data.get("email")
#         phone_number = data.get("phoneNumber")
#         password = data.get("password")
#         role = data.get("role")
#         id = data.get("idno")

#         if not all([store_id, first_name, last_name, email, phone_number, password, role, id]):
#             return jsonify({"message": "All fields are required!"}), 400

#         # Hash the password before storing it
#         hashed_password = hash_password(password)

#         db = client[store_id]
#         users_collection = db["users"]

#         new_user = {
#             "firstName": first_name,
#             "lastName": last_name,
#             "email": email,
#             "phoneNumber": phone_number,
#             "password": hashed_password.decode('utf-8'),  # Store hashed password
#             "role": role,
#             "id": id,
#         }

#         users_collection.insert_one(new_user)
#         return jsonify({"message": "User added successfully!"}), 201
#     except Exception as e:
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500
@app.route("/update_user", methods=["PUT"])
def update_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        user_id = data.get("userId")
        updated_data = data.get("updatedData")

        if not store_id or not user_id or not updated_data:
            return jsonify({"message": "Store ID, User ID, and updated data are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        result = users_collection.update_one(
            {"id": user_id},
            {"$set": updated_data}
        )

        if result.matched_count > 0:
            if result.modified_count > 0:
                return jsonify({"message": "User  updated successfully!"}), 200
            else:
                return jsonify({"message": "No changes made to the user."}), 200
        else:
            return jsonify({"message": "User  not found!"}), 404
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

# @app.route("/delete_user", methods=["DELETE"])
# def delete_user():
#     try:
#         data = request.json
#         store_id = data.get("storeId")
#         user_id = data.get("userId")

#         if not store_id or not user_id:
#             return jsonify({"message": "Store ID and User ID are required!"}), 400

#         db = client[store_id]
#         users_collection = db["users"]

#         result = users_collection.delete_one({"id": user_id})

#         if result.deleted_count > 0:
#             return jsonify({"message": "User  deleted successfully!"}), 200
#         else:
#             return jsonify({"message": "User  not found!"}), 404
#     except Exception as e:
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500
# @app.route("/delete_user", methods=["DELETE"])
# def delete_user():
#     try:
#         data = request.json
#         store_id = data.get("storeId")
#         user_id = data.get("userId")

#         print("Received delete request:", {"store_id": store_id, "user_id": user_id})  # Debug print

#         if not store_id or not user_id:
#             return jsonify({"message": "Store ID and User ID are required!"}), 400

#         db = client[store_id]
#         users_collection = db["users"]

#         result = users_collection.delete_one({"id": user_id})

#         if result.deleted_count > 0:
#             return jsonify({"message": "User  deleted successfully!"}), 200
#         else:
#             return jsonify({"message": "User  not found!"}), 404
#     except Exception as e:
#         return jsonify({"message": "Error occurred", "error": str(e)}), 500
# if __name__ == "__main__":
#     app.run(debug=True, port=5014)  
from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017")

@app.route("/get_users", methods=["GET"])
def get_users():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"message": "Store ID is required!"}), 400

        db = client[store_id]
        users_collection = db["users"]
        users = list(users_collection.find())

        if not users:
            return jsonify({"message": "No users found."}), 404

        for user in users:
            user.pop('_id', None)  # Remove ObjectId since it’s not JSON-serializable
        return jsonify(users), 200
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route("/add_user", methods=["POST"])
def add_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        first_name = data.get("firstName")
        last_name = data.get("lastName")
        email = data.get("email")
        phone_number = data.get("phoneNumber")
        password = data.get("password")
        role = data.get("role")
        id = data.get("idno")

        if not all([store_id, first_name, last_name, email, phone_number, password, role, id]):
            return jsonify({"message": "All fields are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        new_user = {
            "firstName": first_name,
            "lastName": last_name,
            "email": email,
            "phoneNumber": phone_number,
            "password": password,
            "role": role,
            "id": id,
        }

        users_collection.insert_one(new_user)
        return jsonify({"message": "User added successfully!"}), 201
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route("/update_user", methods=["PUT"])
def update_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        user_id = data.get("userId")
        updated_data = data.get("updatedData")

        if not store_id or not user_id or not updated_data:
            return jsonify({"message": "Store ID, User ID, and updated data are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        result = users_collection.update_one(
            {"id": user_id},
            {"$set": updated_data}
        )

        if result.matched_count > 0:
            if result.modified_count > 0:
                return jsonify({"message": "User updated successfully!"}), 200
            else:
                return jsonify({"message": "No changes made to the user."}), 200
        else:
            return jsonify({"message": "User not found!"}), 404
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

@app.route("/delete_user", methods=["DELETE"])
def delete_user():
    try:
        data = request.json
        store_id = data.get("storeId")
        user_id = data.get("userId")

        print("Received delete request:", {"store_id": store_id, "user_id": user_id})  # Debug print

        if not store_id or not user_id:
            return jsonify({"message": "Store ID and User ID are required!"}), 400

        db = client[store_id]
        users_collection = db["users"]

        result = users_collection.delete_one({"id": user_id})

        if result.deleted_count > 0:
            return jsonify({"message": "User deleted successfully!"}), 200
        else:
            return jsonify({"message": "User not found!"}), 404
    except Exception as e:
        return jsonify({"message": "Error occurred", "error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5014)