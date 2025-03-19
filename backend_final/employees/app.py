# # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # # from bson import ObjectId 
# # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # # Connect to MongoDB
# # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")
# # # # # # # # # # # # # # # # # # db = client["EmployeeDB"]
# # # # # # # # # # # # # # # # # # collection = db["employees"]

# # # # # # # # # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # # # # # # # # def get_employees():
# # # # # # # # # # # # # # # # # #     employees = list(collection.find({}, {"_id": 1, "name": 1, "role": 1, "salary": 1, "shifts": 1, "contact": 1}))
# # # # # # # # # # # # # # # # # #     for employee in employees:
# # # # # # # # # # # # # # # # # #         employee["_id"] = str(employee["_id"])  # Convert ObjectId to string
# # # # # # # # # # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # # # # # # # def add_employee():
# # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # #     result = collection.insert_one(data)
# # # # # # # # # # # # # # # # # #     return jsonify({"message": "Employee added", "id": str(result.inserted_id)})

# # # # # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # #     collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # # # # # # # # # # # #     return jsonify({"message": "Employee updated"})

# # # # # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # # # # # # # # #     collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # # # # # # # # # #     return jsonify({"message": "Employee deleted"})

# # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # #     app.run(debug=True,port=5004)
# # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # from bson import ObjectId

# # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # MongoDB setup
# # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")
# # # # # # # # # # # # # # # # # db = client["EmployeeDB"]
# # # # # # # # # # # # # # # # # collection = db["employees"]

# # # # # # # # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # # # # # # # def get_employees():
# # # # # # # # # # # # # # # # #     employees = list(collection.find())
# # # # # # # # # # # # # # # # #     for employee in employees:
# # # # # # # # # # # # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # # # # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # # # # # # def add_employee():
# # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # #     result = collection.insert_one(data)
# # # # # # # # # # # # # # # # #     return jsonify({"id": str(result.inserted_id)})

# # # # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # #     collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # # # # # # # # # # #     return jsonify({"message": "Employee updated"})

# # # # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # # # # # # # #     collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # # # # # # # # #     return jsonify({"message": "Employee deleted"})

# # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # #     app.run(debug=True,port=5004)
# # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # from flask_cors import CORS

# # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/employees"
# # # # # # # # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # Collection
# # # # # # # # # # # # # # # # employee_collection = mongo.db.employees

# # # # # # # # # # # # # # # # # Get all employees
# # # # # # # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # # # # # # def get_employees():
# # # # # # # # # # # # # # # #     employees = [
# # # # # # # # # # # # # # # #         {
# # # # # # # # # # # # # # # #             "_id": str(employee["_id"]),
# # # # # # # # # # # # # # # #             "name": employee["name"],
# # # # # # # # # # # # # # # #             "role": employee.get("role", ""),
# # # # # # # # # # # # # # # #             "salary": employee.get("salary", ""),
# # # # # # # # # # # # # # # #             "shifts": employee.get("shifts", ""),
# # # # # # # # # # # # # # # #             "contact": employee.get("contact", ""),
# # # # # # # # # # # # # # # #         }
# # # # # # # # # # # # # # # #         for employee in employee_collection.find()
# # # # # # # # # # # # # # # #     ]
# # # # # # # # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # # # # # # # # Add a new employee
# # # # # # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # # # # # def add_employee():
# # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # #     new_employee = {
# # # # # # # # # # # # # # # #         "name": data["name"],
# # # # # # # # # # # # # # # #         "role": data.get("role", ""),
# # # # # # # # # # # # # # # #         "salary": data.get("salary", ""),
# # # # # # # # # # # # # # # #         "shifts": data.get("shifts", ""),
# # # # # # # # # # # # # # # #         "contact": data.get("contact", ""),
# # # # # # # # # # # # # # # #     }
# # # # # # # # # # # # # # # #     result = employee_collection.insert_one(new_employee)
# # # # # # # # # # # # # # # #     new_employee["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # # #     return jsonify(new_employee), 201

# # # # # # # # # # # # # # # # # Update an employee
# # # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # #     employee_collection.update_one(
# # # # # # # # # # # # # # # #         {"_id": ObjectId(id)},
# # # # # # # # # # # # # # # #         {"$set": {key: data[key] for key in data if key != "_id"}}
# # # # # # # # # # # # # # # #     )
# # # # # # # # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # # # # # # # Delete an employee
# # # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # #     app.run(debug=True,port=5004)
# # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # from flask_cors import CORS

# # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # Middleware to dynamically select the store's database
# # # # # # # # # # # # # # # @app.before_request
# # # # # # # # # # # # # # # def set_db():
# # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")  # Get storeName from headers
# # # # # # # # # # # # # # #     if store_name:
# # # # # # # # # # # # # # #         # Set the database to use the store_name
# # # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # #         mongo.init_app(app)

# # # # # # # # # # # # # # # # Collection to be dynamically selected based on store
# # # # # # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # # # # # def get_employees():
# # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # # #     employee_collection = mongo.db.employees
# # # # # # # # # # # # # # #     employees = [
# # # # # # # # # # # # # # #         {
# # # # # # # # # # # # # # #             "_id": str(employee["_id"]),
# # # # # # # # # # # # # # #             "name": employee["name"],
# # # # # # # # # # # # # # #             "role": employee.get("role", ""),
# # # # # # # # # # # # # # #             "salary": employee.get("salary", ""),
# # # # # # # # # # # # # # #             "shifts": employee.get("shifts", ""),
# # # # # # # # # # # # # # #             "contact": employee.get("contact", ""),
# # # # # # # # # # # # # # #         }
# # # # # # # # # # # # # # #         for employee in employee_collection.find()
# # # # # # # # # # # # # # #     ]
# # # # # # # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # # # # def add_employee():
# # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # # #     employee_collection = mongo.db.employees
# # # # # # # # # # # # # # #     new_employee = {
# # # # # # # # # # # # # # #         "name": data["name"],
# # # # # # # # # # # # # # #         "role": data.get("role", ""),
# # # # # # # # # # # # # # #         "salary": data.get("salary", ""),
# # # # # # # # # # # # # # #         "shifts": data.get("shifts", ""),
# # # # # # # # # # # # # # #         "contact": data.get("contact", ""),
# # # # # # # # # # # # # # #     }
# # # # # # # # # # # # # # #     result = employee_collection.insert_one(new_employee)
# # # # # # # # # # # # # # #     new_employee["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # #     return jsonify(new_employee), 201

# # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # # #     employee_collection = mongo.db.employees
# # # # # # # # # # # # # # #     employee_collection.update_one(
# # # # # # # # # # # # # # #         {"_id": ObjectId(id)},
# # # # # # # # # # # # # # #         {"$set": {key: data[key] for key in data if key != "_id"}}
# # # # # # # # # # # # # # #     )
# # # # # # # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # # #     employee_collection = mongo.db.employees
# # # # # # # # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # from flask_cors import CORS

# # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # # # # # CORS(app)


# # # # # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # # # # def get_employees():
# # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # # # #     employees = [
# # # # # # # # # # # # # #         {
# # # # # # # # # # # # # #             "_id": str(employee["_id"]),
# # # # # # # # # # # # # #             "name": employee["name"],
# # # # # # # # # # # # # #             "role": employee.get("role", ""),
# # # # # # # # # # # # # #             "salary": employee.get("salary", ""),
# # # # # # # # # # # # # #             "shifts": employee.get("shifts", ""),
# # # # # # # # # # # # # #             "contact": employee.get("contact", ""),
# # # # # # # # # # # # # #             "address": employee.get("address", ""),
# # # # # # # # # # # # # #             "dateOfJoining": employee.get("dateOfJoining", ""),
# # # # # # # # # # # # # #             "employeeId": employee.get("employeeId", ""),
# # # # # # # # # # # # # #             "experience": employee.get("experience", ""),
# # # # # # # # # # # # # #         }
# # # # # # # # # # # # # #         for employee in employee_collection.find()
# # # # # # # # # # # # # #     ]
# # # # # # # # # # # # # #     return jsonify(employees)


# # # # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # # # def add_employee():
# # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # # # #     new_employee = {
# # # # # # # # # # # # # #         "name": data["name"],
# # # # # # # # # # # # # #         "role": data.get("role", ""),
# # # # # # # # # # # # # #         "salary": data.get("salary", ""),
# # # # # # # # # # # # # #         "shifts": data.get("shifts", ""),
# # # # # # # # # # # # # #         "contact": data.get("contact", ""),
# # # # # # # # # # # # # #         "address": data.get("address", ""),
# # # # # # # # # # # # # #         "dateOfJoining": data.get("dateOfJoining", ""),
# # # # # # # # # # # # # #         "employeeId": data.get("employeeId", ""),
# # # # # # # # # # # # # #         "experience": data.get("experience", ""),
# # # # # # # # # # # # # #     }
# # # # # # # # # # # # # #     result = employee_collection.insert_one(new_employee)
# # # # # # # # # # # # # #     new_employee["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # #     return jsonify(new_employee), 201


# # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # # # #     employee_collection.update_one(
# # # # # # # # # # # # # #         {"_id": ObjectId(id)},
# # # # # # # # # # # # # #         {"$set": {key: data[key] for key in data if key != "_id"}},
# # # # # # # # # # # # # #     )
# # # # # # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})


# # # # # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

 
# # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # # # # # import os
# # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # from werkzeug.utils import secure_filename

# # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
# # # # # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # # def add_employee():
# # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # # #     data = request.form.to_dict()
# # # # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # # # #         image_filename = secure_filename(image.filename)
# # # # # # # # # # # # #         image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # # # #         data["image"] = image_filename

# # # # # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # # # # #     return jsonify(data), 201

# # # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # # #     data = request.form.to_dict()
# # # # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # # # #         image_filename = secure_filename(image.filename)
# # # # # # # # # # # # #         image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # # # #         data["image"] = image_filename

# # # # # # # # # # # # #     employee_collection.update_one(
# # # # # # # # # # # # #         {"_id": ObjectId(id)}, {"$set": data}
# # # # # # # # # # # # #     )
# # # # # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # # # # import os
# # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # from werkzeug.utils import secure_filename

# # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # Add a new employee
# # # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # # def add_employee():
# # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # #     data = request.form.to_dict()
# # # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # # #         image_filename = secure_filename(image.filename)
# # # # # # # # # # # #         image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # # #         data["image"] = image_filename

# # # # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # # # #     return jsonify(data), 201

# # # # # # # # # # # # # Update an existing employee
# # # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # # def update_employee(id):
# # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # #     data = request.form.to_dict()
# # # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # # #         image_filename = secure_filename(image.filename)
# # # # # # # # # # # #         image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # # #         data["image"] = image_filename

# # # # # # # # # # # #     employee_collection.update_one(
# # # # # # # # # # # #         {"_id": ObjectId(id)}, {"$set": data}
# # # # # # # # # # # #     )
# # # # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # # # Delete an employee
# # # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # #     result = employee_collection.delete_one({"_id": ObjectId(id)})

# # # # # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # # # # #         return jsonify({"error": "Employee not found"}), 404

# # # # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # # # # Get all employees
# # # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # # def get_employees():
# # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # #     employees = list(employee_collection.find())

# # # # # # # # # # # #     for employee in employees:
# # # # # # # # # # # #         employee["_id"] = str(employee["_id"])

# # # # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # # # # Get a single employee by ID
# # # # # # # # # # # # @app.route("/employees/<id>", methods=["GET"])
# # # # # # # # # # # # def get_employee(id):
# # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # # #     employee = employee_collection.find_one({"_id": ObjectId(id)})

# # # # # # # # # # # #     if not employee:
# # # # # # # # # # # #         return jsonify({"error": "Employee not found"}), 404

# # # # # # # # # # # #     employee["_id"] = str(employee["_id"])
# # # # # # # # # # # #     return jsonify(employee)

# # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # # # import os
# # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # from werkzeug.utils import secure_filename

# # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
# # # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # # CORS(app)

# # # # # # # # # # # # Add Employee
# # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # def add_employee():
# # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # #     data = request.form.to_dict()
# # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # #         image_filename = secure_filename(image.filename)
# # # # # # # # # # #         image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # #         data["image"] = image_filename

# # # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # # #     return jsonify(data), 201

# # # # # # # # # # # # Update Employee
# # # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # # def update_employee(id):
# # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # #     data = request.form.to_dict()
# # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # #         image_filename = secure_filename(image.filename)
# # # # # # # # # # #         image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # #         data["image"] = image_filename

# # # # # # # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # # Delete Employee
# # # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # # def delete_employee(id):
# # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # # # Get All Employees
# # # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # # def get_employees():
# # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # #     employees = list(employee_collection.find())
# # # # # # # # # # #     for employee in employees:
# # # # # # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # # import os
# # # # # # # # # # from flask import Flask, request, jsonify, send_from_directory
# # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # from bson import ObjectId
# # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # from werkzeug.utils import secure_filename

# # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # # # # # Make sure the upload folder exists
# # # # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # # CORS(app)

# # # # # # # # # # # Check if the file extension is allowed
# # # # # # # # # # def allowed_file(filename):
# # # # # # # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # # # # # # Serve uploaded images
# # # # # # # # # # @app.route('/uploads/<filename>')
# # # # # # # # # # def serve_file(filename):
# # # # # # # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # # # # # # Add Employee
# # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # def add_employee():
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # #     if "image" in request.files:
# # # # # # # # # #         image = request.files["image"]
# # # # # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # #             try:
# # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # #             except Exception as e:
# # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # #         else:
# # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400

# # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # #     return jsonify(data), 201

# # # # # # # # # # # Update Employee
# # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # def update_employee(id):
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # #     if "image" in request.files:
# # # # # # # # # #         image = request.files["image"]
# # # # # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # #             try:
# # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # #             except Exception as e:
# # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # #         else:
# # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400

# # # # # # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # Delete Employee
# # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # def delete_employee(id):
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # # Get All Employees
# # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # def get_employees():
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     employees = list(employee_collection.find())
# # # # # # # # # #     for employee in employees:
# # # # # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # import os
# # # # # # # # # from flask import Flask, request, jsonify, send_from_directory
# # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # from bson import ObjectId
# # # # # # # # # from flask_cors import CORS
# # # # # # # # # from werkzeug.utils import secure_filename

# # # # # # # # # app = Flask(__name__)
# # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # # # # Make sure the upload folder exists
# # # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # CORS(app)

# # # # # # # # # # Check if the file extension is allowed
# # # # # # # # # def allowed_file(filename):
# # # # # # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # # # # # Serve uploaded images
# # # # # # # # # @app.route('/uploads/<filename>')
# # # # # # # # # def serve_file(filename):
# # # # # # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # # # # # Add Employee
# # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # def add_employee():
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # #     if "image" in request.files:
# # # # # # # # # #         image = request.files["image"]
# # # # # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # #             try:
# # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # #             except Exception as e:
# # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # #         else:
# # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400

# # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # #     return jsonify(data), 201
# # # # # # # # # # Add Employee
# # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # def add_employee():
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # # # # #     if "image" in request.files:
# # # # # # # # # #         image = request.files["image"]
# # # # # # # # # #         if image and allowed_file(image.filename):
# # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # #             try:
# # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # #             except Exception as e:
# # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # #         else:
# # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # # # # #     else:
# # # # # # # # # #         # If no image is uploaded, set default image path
# # # # # # # # # #         data["image"] = "C:\\Users\\B PREM SAI SIDDHIK\\Desktop\\FED\\store\\src\\em.jpg"

# # # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # # #     return jsonify(data), 201
# # # # # # # # # # # Add Employee
# # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # def add_employee():
# # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # #         if image and allowed_file(image.filename):
# # # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # # #             try:
# # # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # # #             except Exception as e:
# # # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # # #         else:
# # # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # # # # # #     else:
# # # # # # # # # # #         # If no image is uploaded, set default image to 'static/images/em.jpg'
# # # # # # # # # # #         data["image"] = "static/images/em.jpg"

# # # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # # #     return jsonify(data), 201
# # # # # # # # # # # Add Employee
# # # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # # def add_employee():
# # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # # # # # #     if "image" in request.files:
# # # # # # # # # # #         image = request.files["image"]
# # # # # # # # # # #         if image and allowed_file(image.filename):
# # # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # # #             try:
# # # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # # #             except Exception as e:
# # # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # # #         else:
# # # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # # # # # #     else:
# # # # # # # # # # #         # If no image is uploaded, set default image to 'uploads/em.jpg'
# # # # # # # # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # # #     return jsonify(data), 201
# # # # # # # # # # # Add Employee
# # # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # # def add_employee():
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # # # # #     if "image" in request.files and request.files["image"]:
# # # # # # # # # #         image = request.files["image"]
# # # # # # # # # #         if image and allowed_file(image.filename):
# # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # #             try:
# # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # #             except Exception as e:
# # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # # #         else:
# # # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # # # # #     else:
# # # # # # # # # #         # If no image is uploaded, set default image to 'em.jpg'
# # # # # # # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # # #     return jsonify(data), 201

# # # # # # # # # # # Update Employee
# # # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # # def update_employee(id):
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     data = request.form.to_dict()

# # # # # # # # # #     if "image" in request.files:
# # # # # # # # # #         image = request.files["image"]
# # # # # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # # #             try:
# # # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # # #                 data["image"] = image_filename
# # # # # # # # # #             except Exception as e:
# # # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # # # # # # # #     # Handle the case where no image is uploaded but existing image is retained
# # # # # # # # # #     if "image" not in data and "existingImage" in request.form:
# # # # # # # # # #         data["image"] = request.form["existingImage"]

# # # # # # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # # Delete Employee
# # # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # # def delete_employee(id):
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # # Get All Employees
# # # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # # def get_employees():
# # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # # #     employees = list(employee_collection.find())
# # # # # # # # # #     for employee in employees:
# # # # # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # # # # #     return jsonify(employees)

# # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # # import os
# # # # # # # # # from flask import Flask, request, jsonify, send_from_directory
# # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # from bson import ObjectId
# # # # # # # # # from flask_cors import CORS
# # # # # # # # # from werkzeug.utils import secure_filename

# # # # # # # # # app = Flask(__name__)
# # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # # # # Make sure the upload folder exists
# # # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # # # mongo = PyMongo(app)
# # # # # # # # # CORS(app)

# # # # # # # # # # Check if the file extension is allowed
# # # # # # # # # def allowed_file(filename):
# # # # # # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # # # # # Serve uploaded images
# # # # # # # # # @app.route('/uploads/<filename>')
# # # # # # # # # def serve_file(filename):
# # # # # # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # # # # # Add Employee
# # # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # # def add_employee():
# # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # #     data = request.form.to_dict()

# # # # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # # # #     if "image" in request.files and request.files["image"]:
# # # # # # # # #         image = request.files["image"]
# # # # # # # # #         if image and allowed_file(image.filename):
# # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # #             try:
# # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # #                 data["image"] = image_filename
# # # # # # # # #             except Exception as e:
# # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # # #         else:
# # # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # # # #     else:
# # # # # # # # #         # If no image is uploaded, set default image to 'em.jpg'
# # # # # # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # #     return jsonify(data), 201

# # # # # # # # # # Update Employee
# # # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # # def update_employee(id):
# # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # #     data = request.form.to_dict()

# # # # # # # # #     if "image" in request.files:
# # # # # # # # #         image = request.files["image"]
# # # # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # # #             try:
# # # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # # #                 data["image"] = image_filename
# # # # # # # # #             except Exception as e:
# # # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # # # # # # #     # Handle the case where no image is uploaded but existing image is retained
# # # # # # # # #     if "image" not in data and "existingImage" in request.form:
# # # # # # # # #         data["image"] = request.form["existingImage"]

# # # # # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # # Delete Employee
# # # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # # def delete_employee(id):
# # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # # Get All Employees
# # # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # # def get_employees():
# # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name not provided"}), 400

# # # # # # # # #     employee_collection = mongo.cx[store_name].employees
# # # # # # # # #     employees = list(employee_collection.find())
# # # # # # # # #     for employee in employees:
# # # # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # # # #     return jsonify(employees)

# # # # # # # # # if __name__ == "__main__":
# # # # # # # # #     app.run(debug=True, port=5004)
# # # # # # # # import os
# # # # # # # # from flask import Flask, request, jsonify, send_from_directory
# # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # from bson import ObjectId
# # # # # # # # from flask_cors import CORS
# # # # # # # # from werkzeug.utils import secure_filename
# # # # # # # # from datetime import datetime


# # # # # # # # app = Flask(__name__)
# # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # # # Make sure the upload folder exists
# # # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # # mongo = PyMongo(app)
# # # # # # # # CORS(app)

# # # # # # # # # Check if the file extension is allowed
# # # # # # # # def allowed_file(filename):
# # # # # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # # # # Serve uploaded images
# # # # # # # # @app.route('/uploads/<filename>')
# # # # # # # # def serve_file(filename):
# # # # # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # # # # Add Employee
# # # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # # def add_employee():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # # #     data = request.form.to_dict()

# # # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # # #     if "image" in request.files and request.files["image"]:
# # # # # # # #         image = request.files["image"]
# # # # # # # #         if image and allowed_file(image.filename):
# # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # #             try:
# # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # #                 data["image"] = image_filename
# # # # # # # #             except Exception as e:
# # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # # #         else:
# # # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # # #     else:
# # # # # # # #         # If no image is uploaded, set default image to 'em.jpg'
# # # # # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # # # # #     result = employee_collection.insert_one(data)
# # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # #     return jsonify(data), 201

# # # # # # # # # Update Employee
# # # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # # def update_employee(id):
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # # #     data = request.form.to_dict()

# # # # # # # #     if "image" in request.files:
# # # # # # # #         image = request.files["image"]
# # # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # # #             try:
# # # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # # #                 data["image"] = image_filename
# # # # # # # #             except Exception as e:
# # # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # # # # # #     # Handle the case where no image is uploaded but existing image is retained
# # # # # # # #     if "image" not in data and "existingImage" in request.form:
# # # # # # # #         data["image"] = request.form["existingImage"]

# # # # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # # Delete Employee
# # # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # # def delete_employee(id):
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # # Get All Employees
# # # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # # def get_employees():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # # #     employees = list(employee_collection.find())
# # # # # # # #     for employee in employees:
# # # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # # #     return jsonify(employees)

# # # # # # # # # Add this to your Flask backend (app.py)

# # # # # # # # # Record Attendance
# # # # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # # # def record_attendance():
# # # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # # #     if not store_id:
# # # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # # #     attendance_collection = mongo.cx[store_id].attendance  # Use storeId as the DB name
# # # # # # # # #     data = request.json

# # # # # # # # #     # Validate required fields
# # # # # # # # #     if not data.get("employeeId") or not data.get("date") or not data.get("status"):
# # # # # # # # #         return jsonify({"error": "Employee ID, date, and status are required"}), 400

# # # # # # # # #     # Insert attendance record
# # # # # # # # #     result = attendance_collection.insert_one(data)
# # # # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # # # #     return jsonify(data), 201
# # # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # # def record_attendance():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     attendance_collection = mongo.cx[store_id].attendance  # Use storeId as the DB name
# # # # # # # #     data = request.json

# # # # # # # #     # Validate that data is a list
# # # # # # # #     if not isinstance(data, list):
# # # # # # # #         return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # # #     # Add a timestamp to each record
# # # # # # # #     for record in data:
# # # # # # # #         if not record.get("employeeId") or not record.get("status"):
# # # # # # # #             return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # # #         record["timestamp"] = datetime.now()  # Add current date and time

# # # # # # # #     # Insert all attendance records
# # # # # # # #     result = attendance_collection.insert_many(data)
# # # # # # # #     return jsonify({"message": "Attendance recorded successfully!", "inserted_ids": [str(id) for id in result.inserted_ids]}), 201
# # # # # # # # # Get Attendance Records
# # # # # # # # @app.route("/attendance", methods=["GET"])
# # # # # # # # def get_attendance():
# # # # # # # #     store_id = request.headers.get("storeId")
# # # # # # # #     if not store_id:
# # # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # # #     attendance_collection = mongo.cx[store_id].attendance  # Use storeId as the DB name
# # # # # # # #     attendance_records = list(attendance_collection.find())
# # # # # # # #     for record in attendance_records:
# # # # # # # #         record["_id"] = str(record["_id"])
# # # # # # # #     return jsonify(attendance_records)
# # # # # # # # if __name__ == "__main__":
# # # # # # # #     app.run(debug=True, port=5004)



# # # # # # # import os
# # # # # # # from flask import Flask, request, jsonify, send_from_directory, make_response
# # # # # # # from flask_pymongo import PyMongo
# # # # # # # from bson import ObjectId
# # # # # # # from flask_cors import CORS
# # # # # # # from werkzeug.utils import secure_filename
# # # # # # # from datetime import datetime
# # # # # # # import logging

# # # # # # # app = Flask(__name__)
# # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # # Configure logging
# # # # # # # logging.basicConfig(level=logging.INFO)
# # # # # # # logger = logging.getLogger(__name__)

# # # # # # # # Make sure the upload folder exists
# # # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # # Enhanced CORS configuration
# # # # # # # CORS(app, resources={
# # # # # # #     r"/*": {
# # # # # # #         "origins": "*",
# # # # # # #         "allow_headers": ["Content-Type", "storeId", "Authorization"],
# # # # # # #         "supports_credentials": True
# # # # # # #     }
# # # # # # # })

# # # # # # # mongo = PyMongo(app)

# # # # # # # # Centralized error handler
# # # # # # # @app.errorhandler(Exception)
# # # # # # # def handle_error(e):
# # # # # # #     logger.error(f"Unhandled Exception: {str(e)}")
# # # # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # # def allowed_file(filename):
# # # # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # # # Serve uploaded images
# # # # # # # @app.route('/uploads/<filename>')
# # # # # # # def serve_file(filename):
# # # # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # # # Add Employee
# # # # # # # @app.route("/employees", methods=["POST"])
# # # # # # # def add_employee():
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # #     data = request.form.to_dict()

# # # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # # #     if "image" in request.files and request.files["image"]:
# # # # # # #         image = request.files["image"]
# # # # # # #         if image and allowed_file(image.filename):
# # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # #             try:
# # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # #                 data["image"] = image_filename
# # # # # # #             except Exception as e:
# # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # # #         else:
# # # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # # #     else:
# # # # # # #         # If no image is uploaded, set default image to 'em.jpg'
# # # # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # # # #     result = employee_collection.insert_one(data)
# # # # # # #     data["_id"] = str(result.inserted_id)
# # # # # # #     return jsonify(data), 201

# # # # # # # # Update Employee
# # # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # # def update_employee(id):
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # #     data = request.form.to_dict()

# # # # # # #     if "image" in request.files:
# # # # # # #         image = request.files["image"]
# # # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # # #             image_filename = secure_filename(image.filename)
# # # # # # #             try:
# # # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # # #                 data["image"] = image_filename
# # # # # # #             except Exception as e:
# # # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # # # # #     # Handle the case where no image is uploaded but existing image is retained
# # # # # # #     if "image" not in data and "existingImage" in request.form:
# # # # # # #         data["image"] = request.form["existingImage"]

# # # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # # Delete Employee
# # # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # # def delete_employee(id):
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # # Get All Employees
# # # # # # # @app.route("/employees", methods=["GET"])
# # # # # # # def get_employees():
# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # # #     employees = list(employee_collection.find())
# # # # # # #     for employee in employees:
# # # # # # #         employee["_id"] = str(employee["_id"])
# # # # # # #     return jsonify(employees)

# # # # # # # # CORS Preflight handler
# # # # # # # @app.route('/employees', methods=['OPTIONS'])
# # # # # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # # # # def handle_options():
# # # # # # #     response = make_response()
# # # # # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # # # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # # # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
# # # # # # #     return response

# # # # # # # # Existing routes remain the same, but with added logging

# # # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # # def record_attendance():
# # # # # # #     # Log incoming request details
# # # # # # #     logger.info(f"Attendance Record Request Headers: {request.headers}")
# # # # # # #     logger.info(f"Attendance Record Request Data: {request.get_json()}")

# # # # # # #     store_id = request.headers.get("storeId")
# # # # # # #     if not store_id:
# # # # # # #         logger.warning("Attendance record attempt without store ID")
# # # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # # #     try:
# # # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # # #         data = request.get_json()

# # # # # # #         # Validate that data is a list
# # # # # # #         if not isinstance(data, list):
# # # # # # #             logger.warning(f"Invalid data format: {data}")
# # # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # # #         # Add a timestamp to each record
# # # # # # #         for record in data:
# # # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # # #             record["timestamp"] = datetime.now()

# # # # # # #         # Insert all attendance records
# # # # # # #         result = attendance_collection.insert_many(data)
        
# # # # # # #         logger.info(f"Successfully recorded {len(data)} attendance records")
# # # # # # #         return jsonify({
# # # # # # #             "message": "Attendance recorded successfully!", 
# # # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # # #         }), 201

# # # # # # #     except Exception as e:
# # # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

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
        
# # # # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records")
# # # # # # #         return jsonify(attendance_records)
    
# # # # # # #     except Exception as e:
# # # # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # # # if __name__ == "__main__":
# # # # # # #     app.run(debug=True, host='0.0.0.0', port=5004)



# # # # # # from flask import Flask, request, jsonify, send_from_directory, make_response
# # # # # # from flask_pymongo import PyMongo
# # # # # # from bson import ObjectId
# # # # # # from flask_cors import CORS
# # # # # # from werkzeug.utils import secure_filename
# # # # # # from datetime import datetime
# # # # # # import logging
# # # # # # import os

# # # # # # app = Flask(__name__)
# # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # # Configure logging
# # # # # # logging.basicConfig(level=logging.INFO)
# # # # # # logger = logging.getLogger(__name__)

# # # # # # # Make sure the upload folder exists
# # # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # # Enhanced CORS configuration
# # # # # # CORS(app, resources={
# # # # # #     r"/*": {
# # # # # #         "origins": "*",
# # # # # #         "allow_headers": ["Content-Type", "storeId", "Authorization"],
# # # # # #         "supports_credentials": True
# # # # # #     }
# # # # # # })

# # # # # # mongo = PyMongo(app)

# # # # # # # Centralized error handler
# # # # # # @app.errorhandler(Exception)
# # # # # # def handle_error(e):
# # # # # #     logger.error(f"Unhandled Exception: {str(e)}")
# # # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # # def allowed_file(filename):
# # # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # # Serve uploaded images
# # # # # # @app.route('/uploads/<filename>')
# # # # # # def serve_file(filename):
# # # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # # Add Employee
# # # # # # @app.route("/employees", methods=["POST"])
# # # # # # def add_employee():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # #     data = request.form.to_dict()

# # # # # #     # Check if image was uploaded, otherwise use a default image
# # # # # #     if "image" in request.files and request.files["image"]:
# # # # # #         image = request.files["image"]
# # # # # #         if image and allowed_file(image.filename):
# # # # # #             image_filename = secure_filename(image.filename)
# # # # # #             try:
# # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # #                 data["image"] = image_filename
# # # # # #             except Exception as e:
# # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # # #         else:
# # # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # # #     else:
# # # # # #         # If no image is uploaded, set default image to 'em.jpg'
# # # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # # #     result = employee_collection.insert_one(data)
# # # # # #     data["_id"] = str(result.inserted_id)
# # # # # #     return jsonify(data), 201

# # # # # # # Update Employee
# # # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # # def update_employee(id):
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # #     data = request.form.to_dict()

# # # # # #     if "image" in request.files:
# # # # # #         image = request.files["image"]
# # # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # # #             image_filename = secure_filename(image.filename)
# # # # # #             try:
# # # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # # #                 data["image"] = image_filename
# # # # # #             except Exception as e:
# # # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # # # #     # Handle the case where no image is uploaded but existing image is retained
# # # # # #     if "image" not in data and "existingImage" in request.form:
# # # # # #         data["image"] = request.form["existingImage"]

# # # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # # Delete Employee
# # # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # # def delete_employee(id):
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # # Get All Employees
# # # # # # @app.route("/employees", methods=["GET"])
# # # # # # def get_employees():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # # #     employees = list(employee_collection.find())
# # # # # #     for employee in employees:
# # # # # #         employee["_id"] = str(employee["_id"])
# # # # # #     return jsonify(employees)

# # # # # # # CORS Preflight handler
# # # # # # @app.route('/employees', methods=['OPTIONS'])
# # # # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # # # def handle_options():
# # # # # #     response = make_response()
# # # # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
# # # # # #     return response

# # # # # # # Existing routes remain the same, but with added logging

# # # # # # @app.route("/attendance", methods=["POST"])
# # # # # # def record_attendance():
# # # # # #     # Log incoming request details
# # # # # #     logger.info(f"Attendance Record Request Headers: {request.headers}")
# # # # # #     logger.info(f"Attendance Record Request Data: {request.get_json()}")

# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         logger.warning("Attendance record attempt without store ID")
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     try:
# # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # #         data = request.get_json()

# # # # # #         # Validate that data is a list
# # # # # #         if not isinstance(data, list):
# # # # # #             logger.warning(f"Invalid data format: {data}")
# # # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # # #         # Add a timestamp to each record
# # # # # #         for record in data:
# # # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # # #             record["timestamp"] = datetime.now()

# # # # # #         # Insert all attendance records
# # # # # #         result = attendance_collection.insert_many(data)
        
# # # # # #         logger.info(f"Successfully recorded {len(data)} attendance records")
# # # # # #         return jsonify({
# # # # # #             "message": "Attendance recorded successfully!", 
# # # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # # #         }), 201

# # # # # #     except Exception as e:
# # # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # # @app.route("/attendance", methods=["GET"])
# # # # # # def get_attendance():
# # # # # #     store_id = request.headers.get("storeId")
# # # # # #     if not store_id:
# # # # # #         logger.warning("Attendance fetch attempt without store ID")
# # # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # # #     try:
# # # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # # #         attendance_records = list(attendance_collection.find())
        
# # # # # #         for record in attendance_records:
# # # # # #             record["_id"] = str(record["_id"])
        
# # # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records")
# # # # # #         return jsonify(attendance_records)
    
# # # # # #     except Exception as e:
# # # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # # if __name__ == "__main__":
# # # # # #     app.run(debug=True, host='0.0.0.0', port=5004)
# # # # # from flask import Flask, request, jsonify, send_from_directory, make_response
# # # # # from flask_pymongo import PyMongo
# # # # # from bson import ObjectId
# # # # # from flask_cors import CORS
# # # # # from werkzeug.utils import secure_filename
# # # # # from datetime import datetime
# # # # # import logging
# # # # # import os

# # # # # app = Flask(__name__)
# # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # # Configure logging
# # # # # logging.basicConfig(level=logging.INFO)
# # # # # logger = logging.getLogger(__name__)

# # # # # # Make sure the upload folder exists
# # # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # # Enhanced CORS configuration
# # # # # CORS(app, resources={
# # # # #     r"/*": {
# # # # #         "origins": "*",
# # # # #         "allow_headers": ["Content-Type", "storeId", "Authorization"],
# # # # #         "supports_credentials": True
# # # # #     }
# # # # # })

# # # # # mongo = PyMongo(app)

# # # # # # Centralized error handler
# # # # # @app.errorhandler(Exception)
# # # # # def handle_error(e):
# # # # #     logger.error(f"Unhandled Exception: {str(e)}")
# # # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # # def allowed_file(filename):
# # # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # # Serve uploaded images
# # # # # @app.route('/uploads/<filename>')
# # # # # def serve_file(filename):
# # # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # # Add Employee
# # # # # @app.route("/employees", methods=["POST"])
# # # # # def add_employee():
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # #     data = request.form.to_dict()

# # # # #     # Check if image was uploaded, otherwise use a default image
# # # # #     if "image" in request.files and request.files["image"]:
# # # # #         image = request.files["image"]
# # # # #         if image and allowed_file(image.filename):
# # # # #             image_filename = secure_filename(image.filename)
# # # # #             try:
# # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # #                 data["image"] = image_filename
# # # # #             except Exception as e:
# # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # # #         else:
# # # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # # #     else:
# # # # #         # If no image is uploaded, set default image to 'em.jpg'
# # # # #         data["image"] = "em.jpg"  # Use the default image in the uploads folder

# # # # #     result = employee_collection.insert_one(data)
# # # # #     data["_id"] = str(result.inserted_id)
# # # # #     return jsonify(data), 201

# # # # # # Update Employee
# # # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # # def update_employee(id):
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # #     data = request.form.to_dict()

# # # # #     if "image" in request.files:
# # # # #         image = request.files["image"]
# # # # #         if image and allowed_file(image.filename):  # Check if the image is valid
# # # # #             image_filename = secure_filename(image.filename)
# # # # #             try:
# # # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # # #                 data["image"] = image_filename
# # # # #             except Exception as e:
# # # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # # #     # Handle the case where no image is uploaded but existing image is retained
# # # # #     if "image" not in data and "existingImage" in request.form:
# # # # #         data["image"] = request.form["existingImage"]

# # # # #     employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # # #     return jsonify({"message": "Employee updated successfully!"})

# # # # # # Delete Employee
# # # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # # def delete_employee(id):
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # #     employee_collection.delete_one({"_id": ObjectId(id)})
# # # # #     return jsonify({"message": "Employee deleted successfully!"})

# # # # # # Get All Employees
# # # # # @app.route("/employees", methods=["GET"])
# # # # # def get_employees():
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     employee_collection = mongo.cx[store_id].employees  # Use storeId as the DB name
# # # # #     employees = list(employee_collection.find())
# # # # #     for employee in employees:
# # # # #         employee["_id"] = str(employee["_id"])
# # # # #     return jsonify(employees)

# # # # # # CORS Preflight handler
# # # # # @app.route('/employees', methods=['OPTIONS'])
# # # # # @app.route('/attendance', methods=['OPTIONS'])
# # # # # def handle_options():
# # # # #     response = make_response()
# # # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
# # # # #     return response

# # # # # # Existing routes remain the same, but with added logging

# # # # # @app.route("/attendance", methods=["POST"])
# # # # # def record_attendance():
# # # # #     # Log incoming request details
# # # # #     logger.info(f"Attendance Record Request Headers: {request.headers}")
# # # # #     logger.info(f"Attendance Record Request Data: {request.get_json()}")

# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         logger.warning("Attendance record attempt without store ID")
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     try:
# # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # #         data = request.get_json()

# # # # #         # Validate that data is a list
# # # # #         if not isinstance(data, list):
# # # # #             logger.warning(f"Invalid data format: {data}")
# # # # #             return jsonify({"error": "Expected an array of attendance records"}), 400

# # # # #         # Add a timestamp to each record
# # # # #         for record in data:
# # # # #             if not record.get("employeeId") or not record.get("status"):
# # # # #                 logger.warning(f"Incomplete record: {record}")
# # # # #                 return jsonify({"error": "Each record must contain employeeId and status"}), 400
# # # # #             record["date"] = datetime.now().strftime("%Y-%m-%d")  # Add date field

# # # # #         # Insert all attendance records
# # # # #         result = attendance_collection.insert_many(data)
        
# # # # #         logger.info(f"Successfully recorded {len(data)} attendance records")
# # # # #         return jsonify({
# # # # #             "message": "Attendance recorded successfully!", 
# # # # #             "inserted_ids": [str(id) for id in result.inserted_ids]
# # # # #         }), 201

# # # # #     except Exception as e:
# # # # #         logger.error(f"Error recording attendance: {str(e)}")
# # # # #         return jsonify({"error": "Failed to record attendance", "details": str(e)}), 500

# # # # # @app.route("/attendance", methods=["GET"])
# # # # # def get_attendance():
# # # # #     store_id = request.headers.get("storeId")
# # # # #     if not store_id:
# # # # #         logger.warning("Attendance fetch attempt without store ID")
# # # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # # #     try:
# # # # #         attendance_collection = mongo.cx[store_id].attendance
# # # # #         attendance_records = list(attendance_collection.find())
        
# # # # #         for record in attendance_records:
# # # # #             record["_id"] = str(record["_id"])
        
# # # # #         logger.info(f"Retrieved {len(attendance_records)} attendance records")
# # # # #         return jsonify(attendance_records)
    
# # # # #     except Exception as e:
# # # # #         logger.error(f"Error fetching attendance records: {str(e)}")
# # # # #         return jsonify({"error": "Failed to fetch attendance records", "details": str(e)}), 500

# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, host='0.0.0.0', port=5004)  
# # # # from flask import Flask, request, jsonify, send_from_directory, make_response
# # # # from flask_pymongo import PyMongo
# # # # from bson import ObjectId
# # # # from flask_cors import CORS
# # # # from werkzeug.utils import secure_filename
# # # # import logging
# # # # import os

# # # # app = Flask(__name__)
# # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # # Configure logging
# # # # logging.basicConfig(level=logging.INFO)
# # # # logger = logging.getLogger(__name__)

# # # # # Make sure the upload folder exists
# # # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # # Enhanced CORS configuration
# # # # CORS(app, resources={
# # # #     r"/*": {
# # # #         "origins": "*",
# # # #         "allow_headers": ["Content-Type", "storeId", "Authorization"],
# # # #         "supports_credentials": True
# # # #     }
# # # # })

# # # # try:
# # # #     mongo = PyMongo(app)
# # # #     logger.info("MongoDB connection established successfully")
# # # # except Exception as e:
# # # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # # #     mongo = None

# # # # # Centralized error handler
# # # # @app.errorhandler(Exception)
# # # # def handle_error(e):
# # # #     logger.error(f"Unhandled Exception: {str(e)}")
# # # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # # def allowed_file(filename):
# # # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # # Serve uploaded images
# # # # @app.route('/uploads/<filename>')
# # # # def serve_file(filename):
# # # #     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# # # # # Add Employee
# # # # @app.route("/employees", methods=["POST"])
# # # # def add_employee():
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         logger.warning("No storeId provided in request")
# # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # #     if not mongo:
# # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # #     employee_collection = mongo.cx[store_id].employees
# # # #     data = request.form.to_dict()

# # # #     if "image" in request.files and request.files["image"]:
# # # #         image = request.files["image"]
# # # #         if image and allowed_file(image.filename):
# # # #             image_filename = secure_filename(image.filename)
# # # #             try:
# # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # #                 data["image"] = image_filename
# # # #             except Exception as e:
# # # #                 logger.error(f"Failed to save image: {str(e)}")
# # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # # #         else:
# # # #             return jsonify({"error": "Invalid image file format"}), 400
# # # #     else:
# # # #         data["image"] = "em.jpg"

# # # #     try:
# # # #         result = employee_collection.insert_one(data)
# # # #         data["_id"] = str(result.inserted_id)
# # # #         logger.info(f"Employee added: {data['_id']}")
# # # #         return jsonify(data), 201
# # # #     except Exception as e:
# # # #         logger.error(f"Failed to insert employee: {str(e)}")
# # # #         return jsonify({"error": "Failed to add employee", "details": str(e)}), 500

# # # # # Update Employee
# # # # @app.route("/employees/<id>", methods=["PUT"])
# # # # def update_employee(id):
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         logger.warning("No storeId provided in request")
# # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # #     if not mongo:
# # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # #     employee_collection = mongo.cx[store_id].employees
# # # #     data = request.form.to_dict()

# # # #     if "image" in request.files:
# # # #         image = request.files["image"]
# # # #         if image and allowed_file(image.filename):
# # # #             image_filename = secure_filename(image.filename)
# # # #             try:
# # # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # # #                 data["image"] = image_filename
# # # #             except Exception as e:
# # # #                 logger.error(f"Failed to save image: {str(e)}")
# # # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # # #     if "image" not in data and "existingImage" in request.form:
# # # #         data["image"] = request.form["existingImage"]

# # # #     try:
# # # #         result = employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # # #         if result.matched_count == 0:
# # # #             logger.warning(f"No employee found with id: {id}")
# # # #             return jsonify({"error": "Employee not found"}), 404
# # # #         logger.info(f"Employee updated: {id}")
# # # #         return jsonify({"message": "Employee updated successfully!"})
# # # #     except Exception as e:
# # # #         logger.error(f"Failed to update employee: {str(e)}")
# # # #         return jsonify({"error": "Failed to update employee", "details": str(e)}), 500

# # # # # Delete Employee
# # # # @app.route("/employees/<id>", methods=["DELETE"])
# # # # def delete_employee(id):
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         logger.warning("No storeId provided in request")
# # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # #     if not mongo:
# # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # #     employee_collection = mongo.cx[store_id].employees
# # # #     try:
# # # #         result = employee_collection.delete_one({"_id": ObjectId(id)})
# # # #         if result.deleted_count == 0:
# # # #             logger.warning(f"No employee found with id: {id}")
# # # #             return jsonify({"error": "Employee not found"}), 404
# # # #         logger.info(f"Employee deleted: {id}")
# # # #         return jsonify({"message": "Employee deleted successfully!"})
# # # #     except Exception as e:
# # # #         logger.error(f"Failed to delete employee: {str(e)}")
# # # #         return jsonify({"error": "Failed to delete employee", "details": str(e)}), 500

# # # # # Get All Employees
# # # # @app.route("/employees", methods=["GET"])
# # # # def get_employees():
# # # #     store_id = request.headers.get("storeId")
# # # #     if not store_id:
# # # #         logger.warning("No storeId provided in GET request")
# # # #         return jsonify({"error": "Store ID not provided"}), 400

# # # #     if not mongo:
# # # #         logger.error("MongoDB connection not available")
# # # #         return jsonify({"error": "Database connection unavailable"}), 503

# # # #     try:
# # # #         employee_collection = mongo.cx[store_id].employees
# # # #         employees = list(employee_collection.find())
# # # #         logger.info(f"Found {len(employees)} employees for store {store_id}")
# # # #         for employee in employees:
# # # #             employee["_id"] = str(employee["_id"])
# # # #         return jsonify(employees)
# # # #     except Exception as e:
# # # #         logger.error(f"Error fetching employees: {str(e)}")
# # # #         return jsonify({"error": "Failed to fetch employees", "details": str(e)}), 500

# # # # # CORS Preflight handler
# # # # @app.route('/employees', methods=['OPTIONS'])
# # # # def handle_options():
# # # #     response = make_response()
# # # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
# # # #     return response

# # # # if __name__ == "__main__":
# # # #     app.run(debug=True, host='0.0.0.0', port=5004)
# # # from flask import Flask, request, jsonify, send_from_directory, make_response
# # # from flask_pymongo import PyMongo
# # # from bson import ObjectId
# # # from flask_cors import CORS
# # # from werkzeug.utils import secure_filename
# # # import logging
# # # import os

# # # app = Flask(__name__)
# # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # app.config["UPLOAD_FOLDER"] = "uploads/"
# # # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # # Configure logging
# # # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # # logger = logging.getLogger(__name__)

# # # # Make sure the upload folder exists
# # # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # # Enhanced CORS configuration
# # # CORS(app, resources={
# # #     r"/*": {
# # #         "origins": "*",
# # #         "allow_headers": ["Content-Type", "storeId", "Authorization"],
# # #         "supports_credentials": True
# # #     }
# # # })

# # # try:
# # #     mongo = PyMongo(app)
# # #     logger.info("MongoDB connection established successfully")
# # # except Exception as e:
# # #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# # #     mongo = None

# # # # Centralized error handler
# # # @app.errorhandler(Exception)
# # # def handle_error(e):
# # #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# # #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # # def allowed_file(filename):
# # #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # # Serve uploaded images
# # # @app.route('/uploads/<filename>')
# # # def serve_file(filename):
# # #     try:
# # #         return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
# # #     except Exception as e:
# # #         logger.error(f"Failed to serve file {filename}: {str(e)}")
# # #         return jsonify({"error": "File not found"}), 404

# # # # Add Employee
# # # @app.route("/employees", methods=["POST"])
# # # def add_employee():
# # #     store_id = request.headers.get("storeId")
# # #     if not store_id:
# # #         logger.warning("No storeId provided in request")
# # #         return jsonify({"error": "Store ID not provided"}), 400

# # #     if not mongo:
# # #         return jsonify({"error": "Database connection unavailable"}), 503

# # #     employee_collection = mongo.cx[store_id].employees
# # #     data = request.form.to_dict()

# # #     if "image" in request.files and request.files["image"]:
# # #         image = request.files["image"]
# # #         if image and allowed_file(image.filename):
# # #             image_filename = secure_filename(image.filename)
# # #             try:
# # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # #                 data["image"] = image_filename
# # #             except Exception as e:
# # #                 logger.error(f"Failed to save image: {str(e)}")
# # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# # #         else:
# # #             return jsonify({"error": "Invalid image file format"}), 400
# # #     else:
# # #         data["image"] = "em.jpg"

# # #     try:
# # #         result = employee_collection.insert_one(data)
# # #         data["_id"] = str(result.inserted_id)
# # #         # Add employeeId if not provided
# # #         if "employeeId" not in data:
# # #             employee_collection.update_one(
# # #                 {"_id": ObjectId(data["_id"])},
# # #                 {"$set": {"employeeId": data["_id"]}}
# # #             )
# # #             data["employeeId"] = data["_id"]
# # #         logger.info(f"Employee added: {data['_id']} for store {store_id}")
# # #         return jsonify(data), 201
# # #     except Exception as e:
# # #         logger.error(f"Failed to insert employee: {str(e)}")
# # #         return jsonify({"error": "Failed to add employee", "details": str(e)}), 500

# # # # Update Employee
# # # @app.route("/employees/<id>", methods=["PUT"])
# # # def update_employee(id):
# # #     store_id = request.headers.get("storeId")
# # #     if not store_id:
# # #         logger.warning("No storeId provided in request")
# # #         return jsonify({"error": "Store ID not provided"}), 400

# # #     if not mongo:
# # #         return jsonify({"error": "Database connection unavailable"}), 503

# # #     employee_collection = mongo.cx[store_id].employees
# # #     data = request.form.to_dict()

# # #     if "image" in request.files:
# # #         image = request.files["image"]
# # #         if image and allowed_file(image.filename):
# # #             image_filename = secure_filename(image.filename)
# # #             try:
# # #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# # #                 data["image"] = image_filename
# # #             except Exception as e:
# # #                 logger.error(f"Failed to save image: {str(e)}")
# # #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# # #     if "image" not in data and "existingImage" in request.form:
# # #         data["image"] = request.form["existingImage"]

# # #     try:
# # #         result = employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# # #         if result.matched_count == 0:
# # #             logger.warning(f"No employee found with id: {id}")
# # #             return jsonify({"error": "Employee not found"}), 404
# # #         logger.info(f"Employee updated: {id} for store {store_id}")
# # #         return jsonify({"message": "Employee updated successfully!"})
# # #     except Exception as e:
# # #         logger.error(f"Failed to update employee: {str(e)}")
# # #         return jsonify({"error": "Failed to update employee", "details": str(e)}), 500

# # # # Delete Employee
# # # @app.route("/employees/<id>", methods=["DELETE"])
# # # def delete_employee(id):
# # #     store_id = request.headers.get("storeId")
# # #     if not store_id:
# # #         logger.warning("No storeId provided in request")
# # #         return jsonify({"error": "Store ID not provided"}), 400

# # #     if not mongo:
# # #         return jsonify({"error": "Database connection unavailable"}), 503

# # #     employee_collection = mongo.cx[store_id].employees
# # #     try:
# # #         result = employee_collection.delete_one({"_id": ObjectId(id)})
# # #         if result.deleted_count == 0:
# # #             logger.warning(f"No employee found with id: {id}")
# # #             return jsonify({"error": "Employee not found"}), 404
# # #         logger.info(f"Employee deleted: {id} for store {store_id}")
# # #         return jsonify({"message": "Employee deleted successfully!"})
# # #     except Exception as e:
# # #         logger.error(f"Failed to delete employee: {str(e)}")
# # #         return jsonify({"error": "Failed to delete employee", "details": str(e)}), 500

# # # # Get All Employees
# # # @app.route("/employees", methods=["GET"])
# # # def get_employees():
# # #     store_id = request.headers.get("storeId")
# # #     if not store_id:
# # #         logger.warning("No storeId provided in GET request")
# # #         return jsonify({"error": "Store ID not provided"}), 400

# # #     if not mongo:
# # #         logger.error("MongoDB connection not available")
# # #         return jsonify({"error": "Database connection unavailable"}), 503

# # #     # Create database and collection if they don't exist
# # #     if store_id not in mongo.cx.list_database_names():
# # #         mongo.cx[store_id].employees.insert_one({"init": "init"})
# # #         mongo.cx[store_id].employees.delete_one({"init": "init"})

# # #     try:
# # #         employee_collection = mongo.cx[store_id].employees
# # #         employees = list(employee_collection.find())
# # #         logger.info(f"Found {len(employees)} employees for store {store_id}")
# # #         for employee in employees:
# # #             employee["_id"] = str(employee["_id"])
# # #             # Ensure employeeId exists
# # #             if "employeeId" not in employee:
# # #                 employee_collection.update_one(
# # #                     {"_id": ObjectId(employee["_id"])},
# # #                     {"$set": {"employeeId": employee["_id"]}}
# # #                 )
# # #                 employee["employeeId"] = employee["_id"]
# # #         return jsonify(employees)
# # #     except Exception as e:
# # #         logger.error(f"Error fetching employees: {str(e)}")
# # #         return jsonify({"error": "Failed to fetch employees", "details": str(e)}), 500

# # # # CORS Preflight handler
# # # @app.route('/employees', methods=['OPTIONS'])
# # # def handle_options():
# # #     response = make_response()
# # #     response.headers.add("Access-Control-Allow-Origin", "*")
# # #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# # #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
# # #     return response

# # # if __name__ == "__main__":
# # #     app.run(debug=True, host='0.0.0.0', port=5004)
# # from flask import Flask, request, jsonify, send_from_directory, make_response
# # from flask_pymongo import PyMongo
# # from bson import ObjectId
# # from flask_cors import CORS
# # from werkzeug.utils import secure_filename
# # import logging
# # import os

# # app = Flask(__name__)
# # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # app.config["UPLOAD_FOLDER"] = "uploads/"
# # ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # # Configure logging
# # logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# # logger = logging.getLogger(__name__)

# # # Make sure the upload folder exists
# # os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # # Enhanced CORS configuration
# # CORS(app, resources={
# #     r"/*": {
# #         "origins": "*",
# #         "allow_headers": ["Content-Type", "storeId", "Authorization"],
# #         "supports_credentials": True
# #     }
# # })

# # try:
# #     mongo = PyMongo(app)
# #     logger.info("MongoDB connection established successfully")
# # except Exception as e:
# #     logger.error(f"Failed to connect to MongoDB: {str(e)}")
# #     mongo = None

# # # Centralized error handler
# # @app.errorhandler(Exception)
# # def handle_error(e):
# #     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
# #     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# # def allowed_file(filename):
# #     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # # Serve uploaded images
# # @app.route('/uploads/<filename>')
# # def serve_file(filename):
# #     try:
# #         return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
# #     except Exception as e:
# #         logger.error(f"Failed to serve file {filename}: {str(e)}")
# #         return jsonify({"error": "File not found"}), 404

# # # Add Employee
# # @app.route("/employees", methods=["POST"])
# # def add_employee():
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         logger.warning("No storeId provided in request")
# #         return jsonify({"error": "Store ID not provided"}), 400

# #     if not mongo:
# #         return jsonify({"error": "Database connection unavailable"}), 503

# #     employee_collection = mongo.cx[store_id].employees
# #     data = request.form.to_dict()

# #     if "image" in request.files and request.files["image"]:
# #         image = request.files["image"]
# #         if image and allowed_file(image.filename):
# #             image_filename = secure_filename(image.filename)
# #             try:
# #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# #                 data["image"] = image_filename
# #             except Exception as e:
# #                 logger.error(f"Failed to save image: {str(e)}")
# #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
# #         else:
# #             return jsonify({"error": "Invalid image file format"}), 400
# #     else:
# #         data["image"] = "em.jpg"

# #     try:
# #         result = employee_collection.insert_one(data)
# #         data["_id"] = str(result.inserted_id)
# #         # Add employeeId if not provided
# #         if "employeeId" not in data:
# #             employee_collection.update_one(
# #                 {"_id": ObjectId(data["_id"])},
# #                 {"$set": {"employeeId": data["_id"]}}
# #             )
# #             data["employeeId"] = data["_id"]
# #         logger.info(f"Employee added: {data['_id']} for store {store_id}")
# #         return jsonify(data), 201
# #     except Exception as e:
# #         logger.error(f"Failed to insert employee: {str(e)}")
# #         return jsonify({"error": "Failed to add employee", "details": str(e)}), 500

# # # Update Employee
# # @app.route("/employees/<id>", methods=["PUT"])
# # def update_employee(id):
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         logger.warning("No storeId provided in request")
# #         return jsonify({"error": "Store ID not provided"}), 400

# #     if not mongo:
# #         return jsonify({"error": "Database connection unavailable"}), 503

# #     employee_collection = mongo.cx[store_id].employees
# #     data = request.form.to_dict()

# #     if "image" in request.files:
# #         image = request.files["image"]
# #         if image and allowed_file(image.filename):
# #             image_filename = secure_filename(image.filename)
# #             try:
# #                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
# #                 data["image"] = image_filename
# #             except Exception as e:
# #                 logger.error(f"Failed to save image: {str(e)}")
# #                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

# #     if "image" not in data and "existingImage" in request.form:
# #         data["image"] = request.form["existingImage"]

# #     try:
# #         result = employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
# #         if result.matched_count == 0:
# #             logger.warning(f"No employee found with id: {id}")
# #             return jsonify({"error": "Employee not found"}), 404
# #         logger.info(f"Employee updated: {id} for store {store_id}")
# #         return jsonify({"message": "Employee updated successfully!"})
# #     except Exception as e:
# #         logger.error(f"Failed to update employee: {str(e)}")
# #         return jsonify({"error": "Failed to update employee", "details": str(e)}), 500

# # # Delete Employee
# # @app.route("/employees/<id>", methods=["DELETE"])
# # def delete_employee(id):
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         logger.warning("No storeId provided in request")
# #         return jsonify({"error": "Store ID not provided"}), 400

# #     if not mongo:
# #         return jsonify({"error": "Database connection unavailable"}), 503

# #     employee_collection = mongo.cx[store_id].employees
# #     try:
# #         result = employee_collection.delete_one({"_id": ObjectId(id)})
# #         if result.deleted_count == 0:
# #             logger.warning(f"No employee found with id: {id}")
# #             return jsonify({"error": "Employee not found"}), 404
# #         logger.info(f"Employee deleted: {id} for store {store_id}")
# #         return jsonify({"message": "Employee deleted successfully!"})
# #     except Exception as e:
# #         logger.error(f"Failed to delete employee: {str(e)}")
# #         return jsonify({"error": "Failed to delete employee", "details": str(e)}), 500

# # # Get All Employees
# # @app.route("/employees", methods=["GET"])
# # def get_employees():
# #     store_id = request.headers.get("storeId")
# #     if not store_id:
# #         logger.warning("No storeId provided in GET request")
# #         return jsonify({"error": "Store ID not provided"}), 400

# #     if not mongo:
# #         logger.error("MongoDB connection not available")
# #         return jsonify({"error": "Database connection unavailable"}), 503

# #     # Create database and collection if they don't exist
# #     if store_id not in mongo.cx.list_database_names():
# #         mongo.cx[store_id].employees.insert_one({"init": "init"})
# #         mongo.cx[store_id].employees.delete_one({"init": "init"})

# #     try:
# #         employee_collection = mongo.cx[store_id].employees
# #         employees = list(employee_collection.find())
# #         logger.info(f"Found {len(employees)} employees for store {store_id}")
# #         for employee in employees:
# #             employee["_id"] = str(employee["_id"])
# #             # Ensure employeeId exists
# #             if "employeeId" not in employee:
# #                 employee_collection.update_one(
# #                     {"_id": ObjectId(employee["_id"])},
# #                     {"$set": {"employeeId": employee["_id"]}}
# #                 )
# #                 employee["employeeId"] = employee["_id"]
# #         return jsonify(employees)
# #     except Exception as e:
# #         logger.error(f"Error fetching employees: {str(e)}")
# #         return jsonify({"error": "Failed to fetch employees", "details": str(e)}), 500

# # # CORS Preflight handler
# # @app.route('/employees', methods=['OPTIONS'])
# # def handle_options():
# #     response = make_response()
# #     response.headers.add("Access-Control-Allow-Origin", "*")
# #     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
# #     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
# #     return response

# # if __name__ == "__main__":
# #     app.run(debug=True, host='0.0.0.0', port=5004)

# from flask import Flask, request, jsonify, send_from_directory, make_response
# from flask_pymongo import PyMongo
# from flask_cors import CORS
# from bson import ObjectId
# from werkzeug.utils import secure_filename
# import logging
# import os

# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# app.config["UPLOAD_FOLDER"] = "uploads/"
# ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

# # Configure logging
# logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
# logger = logging.getLogger(__name__)

# # Ensure upload folder exists
# os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# # CORS configuration
# CORS(app, resources={
#     r"/*": {
#         "origins": "*",
#         "allow_headers": ["Content-Type", "storeId", "Authorization"],
#         "supports_credentials": True
#     }
# })

# # MongoDB connection
# try:
#     mongo = PyMongo(app)
#     logger.info("MongoDB connection established successfully")
# except Exception as e:
#     logger.error(f"Failed to connect to MongoDB: {str(e)}")
#     mongo = None

# # Centralized error handler
# @app.errorhandler(Exception)
# def handle_error(e):
#     logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
#     return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

# def allowed_file(filename):
#     return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

# # Serve uploaded images
# @app.route('/uploads/<filename>')
# def serve_file(filename):
#     try:
#         return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
#     except Exception as e:
#         logger.error(f"Failed to serve file {filename}: {str(e)}")
#         return jsonify({"error": "File not found"}), 404

# # Add Employee
# @app.route("/employees", methods=["POST"])
# def add_employee():
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         logger.warning("No storeId provided in request")
#         return jsonify({"error": "Store ID not provided"}), 400

#     if not mongo:
#         return jsonify({"error": "Database connection unavailable"}), 503

#     employee_collection = mongo.cx[store_id].employees
#     data = request.form.to_dict()

#     if "image" in request.files and request.files["image"]:
#         image = request.files["image"]
#         if image and allowed_file(image.filename):
#             image_filename = secure_filename(image.filename)
#             try:
#                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
#                 data["image"] = image_filename
#             except Exception as e:
#                 logger.error(f"Failed to save image: {str(e)}")
#                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
#         else:
#             return jsonify({"error": "Invalid image file format"}), 400
#     else:
#         data["image"] = "em.jpg"

#     try:
#         result = employee_collection.insert_one(data)
#         data["_id"] = str(result.inserted_id)
#         if "employeeId" not in data:
#             employee_collection.update_one(
#                 {"_id": ObjectId(data["_id"])},
#                 {"$set": {"employeeId": data["_id"]}}
#             )
#             data["employeeId"] = data["_id"]
#         logger.info(f"Employee added: {data['_id']} for store {store_id}")
#         return jsonify(data), 201
#     except Exception as e:
#         logger.error(f"Failed to insert employee: {str(e)}")
#         return jsonify({"error": "Failed to add employee", "details": str(e)}), 500

# # Update Employee
# @app.route("/employees/<id>", methods=["PUT"])
# def update_employee(id):
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         logger.warning("No storeId provided in request")
#         return jsonify({"error": "Store ID not provided"}), 400

#     if not mongo:
#         return jsonify({"error": "Database connection unavailable"}), 503

#     employee_collection = mongo.cx[store_id].employees
#     data = request.form.to_dict()

#     if "image" in request.files:
#         image = request.files["image"]
#         if image and allowed_file(image.filename):
#             image_filename = secure_filename(image.filename)
#             try:
#                 image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
#                 data["image"] = image_filename
#             except Exception as e:
#                 logger.error(f"Failed to save image: {str(e)}")
#                 return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

#     if "image" not in data and "existingImage" in request.form:
#         data["image"] = request.form["existingImage"]

#     try:
#         result = employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
#         if result.matched_count == 0:
#             logger.warning(f"No employee found with id: {id}")
#             return jsonify({"error": "Employee not found"}), 404
#         logger.info(f"Employee updated: {id} for store {store_id}")
#         return jsonify({"message": "Employee updated successfully!"})
#     except Exception as e:
#         logger.error(f"Failed to update employee: {str(e)}")
#         return jsonify({"error": "Failed to update employee", "details": str(e)}), 500

# # Delete Employee
# @app.route("/employees/<id>", methods=["DELETE"])
# def delete_employee(id):
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         logger.warning("No storeId provided in request")
#         return jsonify({"error": "Store ID not provided"}), 400

#     if not mongo:
#         return jsonify({"error": "Database connection unavailable"}), 503

#     employee_collection = mongo.cx[store_id].employees
#     try:
#         result = employee_collection.delete_one({"_id": ObjectId(id)})
#         if result.deleted_count == 0:
#             logger.warning(f"No employee found with id: {id}")
#             return jsonify({"error": "Employee not found"}), 404
#         logger.info(f"Employee deleted: {id} for store {store_id}")
#         return jsonify({"message": "Employee deleted successfully!"})
#     except Exception as e:
#         logger.error(f"Failed to delete employee: {str(e)}")
#         return jsonify({"error": "Failed to delete employee", "details": str(e)}), 500

# # Get All Employees with Pagination
# @app.route("/employees", methods=["GET"])
# def get_employees():
#     store_id = request.headers.get("storeId")
#     if not store_id:
#         logger.warning("No storeId provided in GET request")
#         return jsonify({"error": "Store ID not provided"}), 400

#     if not mongo:
#         logger.error("MongoDB connection not available")
#         return jsonify({"error": "Database connection unavailable"}), 503

#     page = int(request.args.get("page", 1))
#     limit = int(request.args.get("limit", 50))
#     skip = (page - 1) * limit

#     try:
#         employee_collection = mongo.cx[store_id].employees
#         employees = list(employee_collection.find().skip(skip).limit(limit))
#         logger.info(f"Found {len(employees)} employees for store {store_id} (page {page})")
#         for employee in employees:
#             employee["_id"] = str(employee["_id"])
#             if "employeeId" not in employee:
#                 employee_collection.update_one(
#                     {"_id": ObjectId(employee["_id"])},
#                     {"$set": {"employeeId": employee["_id"]}}
#                 )
#                 employee["employeeId"] = employee["_id"]
#         return jsonify(employees)
#     except Exception as e:
#         logger.error(f"Error fetching employees: {str(e)}")
#         return jsonify({"error": "Failed to fetch employees", "details": str(e)}), 500

# # CORS Preflight handler
# @app.route('/employees', methods=['OPTIONS'])
# def handle_options():
#     response = make_response()
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
#     response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
#     return response

# if __name__ == "__main__":
#     app.run(debug=True, host='0.0.0.0', port=5004)
from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson import ObjectId
from werkzeug.utils import secure_filename
import logging
import os

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/"
app.config["UPLOAD_FOLDER"] = "uploads/"
ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

CORS(app, resources={
    r"/*": {
        "origins": "*",
        "allow_headers": ["Content-Type", "storeId", "Authorization"],
        "supports_credentials": True
    }
})

try:
    mongo = PyMongo(app)
    logger.info("MongoDB connection established successfully")
except Exception as e:
    logger.error(f"Failed to connect to MongoDB: {str(e)}")
    mongo = None

@app.errorhandler(Exception)
def handle_error(e):
    logger.error(f"Unhandled Exception: {str(e)}", exc_info=True)
    return jsonify({"error": "Internal Server Error", "details": str(e)}), 500

def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/uploads/<filename>')
def serve_file(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)
    except Exception as e:
        logger.error(f"Failed to serve file {filename}: {str(e)}")
        return jsonify({"error": "File not found"}), 404

@app.route("/employees", methods=["POST"])
def add_employee():
    store_id = request.headers.get("storeId")
    if not store_id:
        logger.warning("No storeId provided in request")
        return jsonify({"error": "Store ID not provided"}), 400

    if not mongo:
        return jsonify({"error": "Database connection unavailable"}), 503

    employee_collection = mongo.cx[store_id].employees
    data = request.form.to_dict()

    if "image" in request.files and request.files["image"]:
        image = request.files["image"]
        if image and allowed_file(image.filename):
            image_filename = secure_filename(image.filename)
            try:
                image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
                data["image"] = image_filename
            except Exception as e:
                logger.error(f"Failed to save image: {str(e)}")
                return jsonify({"error": f"Failed to save image: {str(e)}"}), 500
        else:
            return jsonify({"error": "Invalid image file format"}), 400
    else:
        data["image"] = "em.jpg"

    try:
        result = employee_collection.insert_one(data)
        data["_id"] = str(result.inserted_id)
        if "employeeId" not in data:
            employee_collection.update_one(
                {"_id": ObjectId(data["_id"])},
                {"$set": {"employeeId": data["_id"]}}
            )
            data["employeeId"] = data["_id"]
        logger.info(f"Employee added: {data['_id']} for store {store_id}")
        return jsonify(data), 201
    except Exception as e:
        logger.error(f"Failed to insert employee: {str(e)}")
        return jsonify({"error": "Failed to add employee", "details": str(e)}), 500

@app.route("/employees/<id>", methods=["PUT"])
def update_employee(id):
    store_id = request.headers.get("storeId")
    if not store_id:
        logger.warning("No storeId provided in request")
        return jsonify({"error": "Store ID not provided"}), 400

    if not mongo:
        return jsonify({"error": "Database connection unavailable"}), 503

    employee_collection = mongo.cx[store_id].employees
    data = request.form.to_dict()

    if "image" in request.files:
        image = request.files["image"]
        if image and allowed_file(image.filename):
            image_filename = secure_filename(image.filename)
            try:
                image.save(os.path.join(app.config["UPLOAD_FOLDER"], image_filename))
                data["image"] = image_filename
            except Exception as e:
                logger.error(f"Failed to save image: {str(e)}")
                return jsonify({"error": f"Failed to save image: {str(e)}"}), 500

    if "image" not in data and "existingImage" in request.form:
        data["image"] = request.form["existingImage"]

    try:
        result = employee_collection.update_one({"_id": ObjectId(id)}, {"$set": data})
        if result.matched_count == 0:
            logger.warning(f"No employee found with id: {id}")
            return jsonify({"error": "Employee not found"}), 404
        logger.info(f"Employee updated: {id} for store {store_id}")
        return jsonify({"message": "Employee updated successfully!"})
    except Exception as e:
        logger.error(f"Failed to update employee: {str(e)}")
        return jsonify({"error": "Failed to update employee", "details": str(e)}), 500

@app.route("/employees/<id>", methods=["DELETE"])
def delete_employee(id):
    store_id = request.headers.get("storeId")
    if not store_id:
        logger.warning("No storeId provided in request")
        return jsonify({"error": "Store ID not provided"}), 400

    if not mongo:
        return jsonify({"error": "Database connection unavailable"}), 503

    employee_collection = mongo.cx[store_id].employees
    try:
        result = employee_collection.delete_one({"_id": ObjectId(id)})
        if result.deleted_count == 0:
            logger.warning(f"No employee found with id: {id}")
            return jsonify({"error": "Employee not found"}), 404
        logger.info(f"Employee deleted: {id} for store {store_id}")
        return jsonify({"message": "Employee deleted successfully!"})
    except Exception as e:
        logger.error(f"Failed to delete employee: {str(e)}")
        return jsonify({"error": "Failed to delete employee", "details": str(e)}), 500

@app.route("/employees", methods=["GET"])
def get_employees():
    store_id = request.headers.get("storeId")
    if not store_id:
        logger.warning("No storeId provided in GET request")
        return jsonify({"error": "Store ID not provided"}), 400

    if not mongo:
        logger.error("MongoDB connection not available")
        return jsonify({"error": "Database connection unavailable"}), 503

    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 50))
    skip = (page - 1) * limit

    try:
        employee_collection = mongo.cx[store_id].employees
        employees = list(employee_collection.find().skip(skip).limit(limit))
        logger.info(f"Found {len(employees)} employees for store {store_id} (page {page})")
        for employee in employees:
            employee["_id"] = str(employee["_id"])
            if "employeeId" not in employee:
                employee_collection.update_one(
                    {"_id": ObjectId(employee["_id"])},
                    {"$set": {"employeeId": employee["_id"]}}
                )
                employee["employeeId"] = employee["_id"]
        return jsonify(employees)
    except Exception as e:
        logger.error(f"Error fetching employees: {str(e)}")
        return jsonify({"error": "Failed to fetch employees", "details": str(e)}), 500

@app.route('/employees', methods=['OPTIONS'])
def handle_options():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,storeId')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    return response

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5004)