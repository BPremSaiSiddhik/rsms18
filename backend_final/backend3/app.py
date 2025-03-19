# # # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # # # # # # # # from bson.objectid import ObjectId

# # # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # # # # # # CORS(app)  # Enable CORS to allow communication with the React frontend

# # # # # # # # # # # # # # # # # # # # # # # # # MongoDB connection
# # # # # # # # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
# # # # # # # # # # # # # # # # # # # # # # # # db = client.gaurav
# # # # # # # # # # # # # # # # # # # # # # # # products_collection = db.products

# # # # # # # # # # # # # # # # # # # # # # # # @app.route("/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # # # # # #         product["_id"] = str(product["_id"])
# # # # # # # # # # # # # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # # # # # @app.route("/products", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # # # # # def add_product():
# # # # # # # # # # # # # # # # # # # # # # # #     """Add a new product to the database."""
# # # # # # # # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # # # # # # # #     product = {
# # # # # # # # # # # # # # # # # # # # # # # #         "name": data["name"],
# # # # # # # # # # # # # # # # # # # # # # # #         "purchasePrice": data["purchasePrice"],
# # # # # # # # # # # # # # # # # # # # # # # #         "salePrice": data["salePrice"],
# # # # # # # # # # # # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # # # # # # # # # # # #         "unit": data["unit"],
# # # # # # # # # # # # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # # # # # # # # # # # #         "totalValue": data["totalValue"],
# # # # # # # # # # # # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # # # # # # # # # # # #     }
# # # # # # # # # # # # # # # # # # # # # # # #     result = products_collection.insert_one(product)
# # # # # # # # # # # # # # # # # # # # # # # #     product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # # # # # # # # # # #     return jsonify(product), 201

# # # # # # # # # # # # # # # # # # # # # # # # @app.route("/products/<product_id>", methods=["PUT"])
# # # # # # # # # # # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # # # # # # # # # # #     """Update an existing product in the database."""
# # # # # # # # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # # # # # # # #     updated_product = {
# # # # # # # # # # # # # # # # # # # # # # # #         "name": data["name"],
# # # # # # # # # # # # # # # # # # # # # # # #         "purchasePrice": data["purchasePrice"],
# # # # # # # # # # # # # # # # # # # # # # # #         "salePrice": data["salePrice"],
# # # # # # # # # # # # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # # # # # # # # # # # #         "unit": data["unit"],
# # # # # # # # # # # # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # # # # # # # # # # # #         "totalValue": data["totalValue"],
# # # # # # # # # # # # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # # # # # # # # # # # #     }
# # # # # # # # # # # # # # # # # # # # # # # #     products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": updated_product})
# # # # # # # # # # # # # # # # # # # # # # # #     updated_product["_id"] = product_id
# # # # # # # # # # # # # # # # # # # # # # # #     return jsonify(updated_product)

# # # # # # # # # # # # # # # # # # # # # # # # @app.route("/products/<product_id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # # # # # # # # # # #     """Delete a product from the database."""
# # # # # # # # # # # # # # # # # # # # # # # #     products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # # # # # # # # # # # #     return jsonify({"message": "Product deleted"}), 204

# # # # # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # # # # # # # from bson.objectid import ObjectId

# # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # # # # # CORS(app)  # Enable CORS to allow communication with the React frontend

# # # # # # # # # # # # # # # # # # # # # # # # MongoDB connection
# # # # # # # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
# # # # # # # # # # # # # # # # # # # # # # # db = client.gaurav
# # # # # # # # # # # # # # # # # # # # # # # products_collection = db.products2  # Updated collection name

# # # # # # # # # # # # # # # # # # # # # # # @app.route("/products2", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # # # # #         product["_id"] = str(product["_id"])
# # # # # # # # # # # # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # # # # @app.route("/products2", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # # # # def add_product():
# # # # # # # # # # # # # # # # # # # # # # #     """Add a new product to the database."""
# # # # # # # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # # # # # # #     product = {
# # # # # # # # # # # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # # # # # # # # # # #         "quantity": int(data["quantity"]),
# # # # # # # # # # # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # # # # # # # # # # #         "purchase_price": float(data["purchase_price"]),
# # # # # # # # # # # # # # # # # # # # # # #         "sale_price": float(data["sale_price"]),
# # # # # # # # # # # # # # # # # # # # # # #         "tax": float(data["tax"]),
# # # # # # # # # # # # # # # # # # # # # # #         "discount": float(data["discount"]),
# # # # # # # # # # # # # # # # # # # # # # #         "total_value": float(data["total_value"]),
# # # # # # # # # # # # # # # # # # # # # # #         "date_added": data["dateAdded"],
# # # # # # # # # # # # # # # # # # # # # # #     }
# # # # # # # # # # # # # # # # # # # # # # #     result = products_collection.insert_one(product)
# # # # # # # # # # # # # # # # # # # # # # #     product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # # # # # # # # # #     return jsonify(product), 201

# # # # # # # # # # # # # # # # # # # # # # # @app.route("/products2/<product_id>", methods=["PUT"])
# # # # # # # # # # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # # # # # # # # # #     """Update an existing product in the database."""
# # # # # # # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # # # # # # #     updated_product = {
# # # # # # # # # # # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # # # # # # # # # # #         "quantity": int(data["quantity"]),
# # # # # # # # # # # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # # # # # # # # # # #         "purchase_price": float(data["purchase_price"]),
# # # # # # # # # # # # # # # # # # # # # # #         "sale_price": float(data["sale_price"]),
# # # # # # # # # # # # # # # # # # # # # # #         "tax": float(data["tax"]),
# # # # # # # # # # # # # # # # # # # # # # #         "discount": float(data["discount"]),
# # # # # # # # # # # # # # # # # # # # # # #         "total_value": float(data["total_value"]),
# # # # # # # # # # # # # # # # # # # # # # #         "date_added": data["dateAdded"],
# # # # # # # # # # # # # # # # # # # # # # #     }
# # # # # # # # # # # # # # # # # # # # # # #     products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": updated_product})
# # # # # # # # # # # # # # # # # # # # # # #     updated_product["_id"] = product_id
# # # # # # # # # # # # # # # # # # # # # # #     return jsonify(updated_product)
# # # # # # # # # # # # # # # # # # # # # # # @app.route("/products2/<product_id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # # # # # # # # # #     """Delete a product from the database."""
# # # # # # # # # # # # # # # # # # # # # # #     products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # # # # # # # # # # #     return jsonify({"message": "Product deleted"}), 204

# # # # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True)



# # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # # # from bson.objectid import ObjectId
# # # # # # # # # # # # # # # # # # # from bson.errors import InvalidId

# # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # CORS(app)  # Enable CORS to allow communication with the React frontend

# # # # # # # # # # # # # # # # # # # # MongoDB connection
# # # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI
# # # # # # # # # # # # # # # # # # # db = client.gaurav
# # # # # # # # # # # # # # # # # # # products_collection = db.products2  # Updated collection name


# # # # # # # # # # # # # # # # # # # @app.route("/products2", methods=["GET"])
# # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # # # # #             product["_id"] = str(product["_id"])  # Convert ObjectId to string
# # # # # # # # # # # # # # # # # # #             products.append(product)
# # # # # # # # # # # # # # # # # # #         return jsonify(products), 200
# # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to fetch products", "message": str(e)}), 500


# # # # # # # # # # # # # # # # # # # @app.route("/products2", methods=["POST"])
# # # # # # # # # # # # # # # # # # # def add_product():
# # # # # # # # # # # # # # # # # # #     """Add a new product to the database."""
# # # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # # #     required_fields = [
# # # # # # # # # # # # # # # # # # #         "product_name", "quantity", "units", "category", 
# # # # # # # # # # # # # # # # # # #         "purchase_price", "sale_price", "tax", "discount", "total_value", "dateAdded"
# # # # # # # # # # # # # # # # # # #     ]
# # # # # # # # # # # # # # # # # # #     # Check for missing fields
# # # # # # # # # # # # # # # # # # #     if not all(field in data for field in required_fields):
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # #         product = {
# # # # # # # # # # # # # # # # # # #             "product_name": data["product_name"],
# # # # # # # # # # # # # # # # # # #             "quantity": int(data["quantity"]),
# # # # # # # # # # # # # # # # # # #             "units": data["units"],
# # # # # # # # # # # # # # # # # # #             "category": data["category"],
# # # # # # # # # # # # # # # # # # #             "purchase_price": float(data["purchase_price"]),
# # # # # # # # # # # # # # # # # # #             "sale_price": float(data["sale_price"]),
# # # # # # # # # # # # # # # # # # #             "tax": float(data["tax"]),
# # # # # # # # # # # # # # # # # # #             "discount": float(data["discount"]),
# # # # # # # # # # # # # # # # # # #             "total_value": float(data["total_value"]),
# # # # # # # # # # # # # # # # # # #             "date_added": data["dateAdded"],
# # # # # # # # # # # # # # # # # # #         }
# # # # # # # # # # # # # # # # # # #         result = products_collection.insert_one(product)
# # # # # # # # # # # # # # # # # # #         product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # # # # # #         return jsonify(product), 201
# # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to add product", "message": str(e)}), 500


# # # # # # # # # # # # # # # # # # # @app.route("/products2/<product_id>", methods=["PUT"])
# # # # # # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # # # # # #     """Update an existing product in the database."""
# # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # #         # Validate ObjectId
# # # # # # # # # # # # # # # # # # #         if not ObjectId.is_valid(product_id):
# # # # # # # # # # # # # # # # # # #             raise InvalidId()

# # # # # # # # # # # # # # # # # # #         data = request.json
# # # # # # # # # # # # # # # # # # #         required_fields = [
# # # # # # # # # # # # # # # # # # #             "product_name", "quantity", "units", "category", 
# # # # # # # # # # # # # # # # # # #             "purchase_price", "sale_price", "tax", "discount", "total_value", "dateAdded"
# # # # # # # # # # # # # # # # # # #         ]
# # # # # # # # # # # # # # # # # # #         # Check for missing fields
# # # # # # # # # # # # # # # # # # #         if not all(field in data for field in required_fields):
# # # # # # # # # # # # # # # # # # #             return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # # # # # # # # # # # #         updated_product = {
# # # # # # # # # # # # # # # # # # #             "product_name": data["product_name"],
# # # # # # # # # # # # # # # # # # #             "quantity": int(data["quantity"]),
# # # # # # # # # # # # # # # # # # #             "units": data["units"],
# # # # # # # # # # # # # # # # # # #             "category": data["category"],
# # # # # # # # # # # # # # # # # # #             "purchase_price": float(data["purchase_price"]),
# # # # # # # # # # # # # # # # # # #             "sale_price": float(data["sale_price"]),
# # # # # # # # # # # # # # # # # # #             "tax": float(data["tax"]),
# # # # # # # # # # # # # # # # # # #             "discount": float(data["discount"]),
# # # # # # # # # # # # # # # # # # #             "total_value": float(data["total_value"]),
# # # # # # # # # # # # # # # # # # #             "date_added": data["dateAdded"],
# # # # # # # # # # # # # # # # # # #         }
# # # # # # # # # # # # # # # # # # #         result = products_collection.update_one(
# # # # # # # # # # # # # # # # # # #             {"_id": ObjectId(product_id)}, {"$set": updated_product}
# # # # # # # # # # # # # # # # # # #         )
# # # # # # # # # # # # # # # # # # #         if result.matched_count == 0:
# # # # # # # # # # # # # # # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # # # #         updated_product["_id"] = product_id
# # # # # # # # # # # # # # # # # # #         return jsonify(updated_product), 200
# # # # # # # # # # # # # # # # # # #     except InvalidId:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Invalid product ID"}), 400
# # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to update product", "message": str(e)}), 500


# # # # # # # # # # # # # # # # # # # @app.route("/products2/<product_id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # # # # # #     """Delete a product from the database."""
# # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # #         # Validate ObjectId
# # # # # # # # # # # # # # # # # # #         if not ObjectId.is_valid(product_id):
# # # # # # # # # # # # # # # # # # #             raise InvalidId()

# # # # # # # # # # # # # # # # # # #         result = products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # # # # # # #         if result.deleted_count == 0:
# # # # # # # # # # # # # # # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # # # #         return jsonify({"message": "Product deleted successfully"}), 200
# # # # # # # # # # # # # # # # # # #     except InvalidId:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Invalid product ID"}), 400
# # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to delete product", "message": str(e)}), 500


# # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # #     app.run(debug=True)


# # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # # from bson.objectid import ObjectId
# # # # # # # # # # # # # # # # # # from bson.errors import InvalidId

# # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # CORS(app)  # Enable CORS to allow communication with the React frontend

# # # # # # # # # # # # # # # # # # # MongoDB connection
# # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")  # Replace with your MongoDB URI

# # # # # # # # # # # # # # # # # # @app.route("/products2", methods=["GET"])
# # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # #     """Fetch all products from the database for a specific store."""
# # # # # # # # # # # # # # # # # #     store_name = request.args.get('store')  # Get store name from query parameter
# # # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # # # #     db = client[store_name]  # Select the database based on store name
# # # # # # # # # # # # # # # # # #     products_collection = db.products  # Use the collection for that store

# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # # # #             product["_id"] = str(product["_id"])  # Convert ObjectId to string
# # # # # # # # # # # # # # # # # #             products.append(product)
# # # # # # # # # # # # # # # # # #         return jsonify(products), 200
# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to fetch products", "message": str(e)}), 500

# # # # # # # # # # # # # # # # # # @app.route("/products2", methods=["POST"])
# # # # # # # # # # # # # # # # # # def add_product():
# # # # # # # # # # # # # # # # # #     """Add a new product to the database for a specific store."""
# # # # # # # # # # # # # # # # # #     store_name = request.args.get('store')  # Get store name from query parameter
# # # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # # # #     db = client[store_name]  # Select the database based on store name
# # # # # # # # # # # # # # # # # #     products_collection = db.products  # Use the collection for that store

# # # # # # # # # # # # # # # # # #     data = request.json
# # # # # # # # # # # # # # # # # #     required_fields = [
# # # # # # # # # # # # # # # # # #         "product_name", "quantity", "units", "category", 
# # # # # # # # # # # # # # # # # #         "purchase_price", "sale_price", "tax", "discount", "total_value", "dateAdded"
# # # # # # # # # # # # # # # # # #     ]
# # # # # # # # # # # # # # # # # #     # Check for missing fields
# # # # # # # # # # # # # # # # # #     if not all(field in data for field in required_fields):
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         product = {
# # # # # # # # # # # # # # # # # #             "product_name": data["product_name"],
# # # # # # # # # # # # # # # # # #             "quantity": int(data["quantity"]),
# # # # # # # # # # # # # # # # # #             "units": data["units"],
# # # # # # # # # # # # # # # # # #             "category": data["category"],
# # # # # # # # # # # # # # # # # #             "purchase_price": float(data["purchase_price"]),
# # # # # # # # # # # # # # # # # #             "sale_price": float(data["sale_price"]),
# # # # # # # # # # # # # # # # # #             "tax": float(data["tax"]),
# # # # # # # # # # # # # # # # # #             "discount": float(data["discount"]),
# # # # # # # # # # # # # # # # # #             "total_value": float(data["total_value"]),
# # # # # # # # # # # # # # # # # #             "date_added": data["dateAdded"],
# # # # # # # # # # # # # # # # # #         }
# # # # # # # # # # # # # # # # # #         result = products_collection.insert_one(product)
# # # # # # # # # # # # # # # # # #         product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # # # # #         return jsonify(product), 201
# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to add product", "message": str(e)}), 500

# # # # # # # # # # # # # # # # # # @app.route("/products2/<product_id>", methods=["PUT"])
# # # # # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # # # # #     """Update an existing product in the database for a specific store."""
# # # # # # # # # # # # # # # # # #     store_name = request.args.get('store')  # Get store name from query parameter
# # # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # # # #     db = client[store_name]  # Select the database based on store name
# # # # # # # # # # # # # # # # # #     products_collection = db.products  # Use the collection for that store

# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         # Validate ObjectId
# # # # # # # # # # # # # # # # # #         if not ObjectId.is_valid(product_id):
# # # # # # # # # # # # # # # # # #             raise InvalidId()

# # # # # # # # # # # # # # # # # #         data = request.json
# # # # # # # # # # # # # # # # # #         required_fields = [
# # # # # # # # # # # # # # # # # #             "product_name", "quantity", "units", "category", 
# # # # # # # # # # # # # # # # # #             "purchase_price", "sale_price", "tax", "discount", "total_value", "dateAdded"
# # # # # # # # # # # # # # # # # #         ]
# # # # # # # # # # # # # # # # # #         # Check for missing fields
# # # # # # # # # # # # # # # # # #         if not all(field in data for field in required_fields):
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # # # # # # # # # # #         updated_product = {
# # # # # # # # # # # # # # # # # #             "product_name": data["product_name"],
# # # # # # # # # # # # # # # # # #             "quantity": int(data["quantity"]),
# # # # # # # # # # # # # # # # # #             "units": data["units"],
# # # # # # # # # # # # # # # # # #             "category": data["category"],
# # # # # # # # # # # # # # # # # #             "purchase_price": float(data["purchase_price"]),
# # # # # # # # # # # # # # # # # #             "sale_price": float(data["sale_price"]),
# # # # # # # # # # # # # # # # # #             "tax": float(data["tax"]),
# # # # # # # # # # # # # # # # # #             "discount": float(data["discount"]),
# # # # # # # # # # # # # # # # # #             "total_value": float(data["total_value"]),
# # # # # # # # # # # # # # # # # #             "date_added": data["dateAdded"],
# # # # # # # # # # # # # # # # # #         }
# # # # # # # # # # # # # # # # # #         result = products_collection.update_one(
# # # # # # # # # # # # # # # # # #             {"_id": ObjectId(product_id)}, {"$set": updated_product}
# # # # # # # # # # # # # # # # # #         )
# # # # # # # # # # # # # # # # # #         if result.matched_count == 0:
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "Product not found"}), 404
# # # # # # # # # # # # # # # # # #         updated_product["_id"] = product_id
# # # # # # # # # # # # # # # # # #         return jsonify(updated_product), 200
# # # # # # # # # # # # # # # # # #     except InvalidId:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Invalid product ID"}), 400
# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to update product", "message": str(e)}), 500

# # # # # # # # # # # # # # # # # # @app.route("/products2/<product_id>", methods=["DELETE"])
# # # # # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # # # # #     """Delete a product from the database for a specific store."""
# # # # # # # # # # # # # # # # # #     store_name = request.args.get('store')  # Get store name from query parameter
# # # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # # # #     db = client[store_name]  # Select the database based on store name
# # # # # # # # # # # # # # # # # #     products_collection = db.products  # Use the collection for that store

# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         result = products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # # # # # #         if result.deleted_count == 0:
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "Product not found"}), 404
# # # # # # # # # # # # # # # # # #         return jsonify({"message": "Product deleted"}), 200
# # # # # # # # # # # # # # # # # #     except InvalidId:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Invalid product ID"}), 400
# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Failed to delete product", "message": str(e)}), 500

# # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # #     app.run(debug=True)


# # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # from bson.objectid import ObjectId

# # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # Configuration for MongoDB
# # # # # # # # # # # # # # # # # app.config['MONGO_URI'] = 'mongodb://localhost:27017/yourdbname'
# # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # Collections
# # # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string for JSON serialization
# # # # # # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # # # # # # # # # def create_product():
# # # # # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # # # # #     # Validate required fields
# # # # # # # # # # # # # # # # #     if not all(field in data for field in ['name', 'price', 'quantity']):
# # # # # # # # # # # # # # # # #         return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # # # # # # # # # #     new_product = {
# # # # # # # # # # # # # # # # #         "name": data['name'],
# # # # # # # # # # # # # # # # #         "price": data['price'],
# # # # # # # # # # # # # # # # #         "quantity": data['quantity']
# # # # # # # # # # # # # # # # #     }

# # # # # # # # # # # # # # # # #     result = products_collection.insert_one(new_product)
# # # # # # # # # # # # # # # # #     new_product['_id'] = str(result.inserted_id)
# # # # # # # # # # # # # # # # #     return jsonify(new_product), 201

# # # # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['GET'])
# # # # # # # # # # # # # # # # # def get_product(product_id):
# # # # # # # # # # # # # # # # #     product = products_collection.find_one({"_id": ObjectId(product_id)})

# # # # # # # # # # # # # # # # #     if not product:
# # # # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # #     product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # # # # # # # # # # # # #     return jsonify(product), 200

# # # # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['DELETE'])
# # # # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # # # #     result = products_collection.delete_one({"_id": ObjectId(product_id)})

# # # # # # # # # # # # # # # # #     if result.deleted_count > 0:
# # # # # # # # # # # # # # # # #         return jsonify({"message": "Product deleted successfully"}), 200
# # # # # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['PUT'])
# # # # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # # # # #     # Validate required fields
# # # # # # # # # # # # # # # # #     if not any(field in data for field in ['name', 'price', 'quantity']):
# # # # # # # # # # # # # # # # #         return jsonify({"error": "No fields to update"}), 400

# # # # # # # # # # # # # # # # #     updated_product = {}
# # # # # # # # # # # # # # # # #     if 'name' in data:
# # # # # # # # # # # # # # # # #         updated_product['name'] = data['name']
# # # # # # # # # # # # # # # # #     if 'price' in data:
# # # # # # # # # # # # # # # # #         updated_product['price'] = data['price']
# # # # # # # # # # # # # # # # #     if 'quantity' in data:
# # # # # # # # # # # # # # # # #         updated_product['quantity'] = data['quantity']

# # # # # # # # # # # # # # # # #     result = products_collection.update_one(
# # # # # # # # # # # # # # # # #         {"_id": ObjectId(product_id)},
# # # # # # # # # # # # # # # # #         {"$set": updated_product}
# # # # # # # # # # # # # # # # #     )

# # # # # # # # # # # # # # # # #     if result.matched_count > 0:
# # # # # # # # # # # # # # # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # # # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # from bson.objectid import ObjectId

# # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # MongoDB URI for dynamic connection based on store name
# # # # # # # # # # # # # # # # client = PyMongo(app).client

# # # # # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # #     store_name = request.args.get("store")  # Store name is passed in query parameters
# # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # #     db = client[store_name]  # Use the database corresponding to the store name
# # # # # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # # # # # # # # def create_product():
# # # # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # #     db = client[store_name]
# # # # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # # # #     product = {
# # # # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # # # #         "purchase_price": data["purchase_price"],
# # # # # # # # # # # # # # # #         "sale_price": data["sale_price"],
# # # # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # # # #         "total_value": data["total_value"],
# # # # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # # # #     }

# # # # # # # # # # # # # # # #     result = products_collection.insert_one(product)
# # # # # # # # # # # # # # # #     product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # # #     return jsonify(product), 201

# # # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['PUT'])
# # # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # #     db = client[store_name]
# # # # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # # # #     updated_product = {
# # # # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # # # #         "purchase_price": data["purchase_price"],
# # # # # # # # # # # # # # # #         "sale_price": data["sale_price"],
# # # # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # # # #         "total_value": data["total_value"],
# # # # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # # # #     }

# # # # # # # # # # # # # # # #     result = products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": updated_product})
# # # # # # # # # # # # # # # #     if result.matched_count > 0:
# # # # # # # # # # # # # # # #         updated_product["_id"] = product_id
# # # # # # # # # # # # # # # #         return jsonify(updated_product), 200
# # # # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['DELETE'])
# # # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # # #     db = client[store_name]
# # # # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # # # #     result = products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # # # #     if result.deleted_count > 0:
# # # # # # # # # # # # # # # #         return jsonify({"message": "Product deleted"}), 200
# # # # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # from bson.objectid import ObjectId

# # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # Set MongoDB URI for dynamic connection based on store name
# # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"  # Adjust this if you're using MongoDB Atlas

# # # # # # # # # # # # # # # client = PyMongo(app).client  # This should now work

# # # # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # #     store_name = request.args.get("store")  # Store name is passed in query parameters
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # #     db = client[store_name]  # Use the database corresponding to the store name
# # # # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # # # # # # # def create_product():
# # # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # #     db = client[store_name]
# # # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # # #     product = {
# # # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # # #         "purchase_price": data["purchase_price"],
# # # # # # # # # # # # # # #         "sale_price": data["sale_price"],
# # # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # # #         "total_value": data["total_value"],
# # # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # # #     }

# # # # # # # # # # # # # # #     result = products_collection.insert_one(product)
# # # # # # # # # # # # # # #     product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # # #     return jsonify(product), 201

# # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['PUT'])
# # # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # #     db = client[store_name]
# # # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # # #     updated_product = {
# # # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # # #         "purchase_price": data["purchase_price"],
# # # # # # # # # # # # # # #         "sale_price": data["sale_price"],
# # # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # # #         "total_value": data["total_value"],
# # # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # # #     }

# # # # # # # # # # # # # # #     result = products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": updated_product})
# # # # # # # # # # # # # # #     if result.matched_count > 0:
# # # # # # # # # # # # # # #         updated_product["_id"] = product_id
# # # # # # # # # # # # # # #         return jsonify(updated_product), 200
# # # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['DELETE'])
# # # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # # #     db = client[store_name]
# # # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # # #     result = products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # # #     if result.deleted_count > 0:
# # # # # # # # # # # # # # #         return jsonify({"message": "Product deleted"}), 200
# # # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # from bson.objectid import ObjectId

# # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # Set MongoDB URI for dynamic connection based on store name
# # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"  # Adjust this if you're using MongoDB Atlas

# # # # # # # # # # # # # # # Initialize PyMongo with the Flask app
# # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # #     store_name = request.args.get("store")  # Store name is passed in query parameters
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # #     db = mongo.db[store_name]  # Use the database corresponding to the store name
# # # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # # # # # # def create_product():
# # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # #     db = mongo.db[store_name]
# # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # #     product = {
# # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # #         "purchase_price": data["purchase_price"],
# # # # # # # # # # # # # #         "sale_price": data["sale_price"],
# # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # #         "total_value": data["total_value"],
# # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # #     }

# # # # # # # # # # # # # #     result = products_collection.insert_one(product)
# # # # # # # # # # # # # #     product["_id"] = str(result.inserted_id)
# # # # # # # # # # # # # #     return jsonify(product), 201

# # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['PUT'])
# # # # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # #     db = mongo.db[store_name]
# # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # #     data = request.json

# # # # # # # # # # # # # #     updated_product = {
# # # # # # # # # # # # # #         "product_name": data["product_name"],
# # # # # # # # # # # # # #         "quantity": data["quantity"],
# # # # # # # # # # # # # #         "units": data["units"],
# # # # # # # # # # # # # #         "category": data["category"],
# # # # # # # # # # # # # #         "purchase_price": data["purchase_price"],
# # # # # # # # # # # # # #         "sale_price": data["sale_price"],
# # # # # # # # # # # # # #         "tax": data["tax"],
# # # # # # # # # # # # # #         "discount": data["discount"],
# # # # # # # # # # # # # #         "total_value": data["total_value"],
# # # # # # # # # # # # # #         "dateAdded": data["dateAdded"],
# # # # # # # # # # # # # #     }

# # # # # # # # # # # # # #     result = products_collection.update_one({"_id": ObjectId(product_id)}, {"$set": updated_product})
# # # # # # # # # # # # # #     if result.matched_count > 0:
# # # # # # # # # # # # # #         updated_product["_id"] = product_id
# # # # # # # # # # # # # #         return jsonify(updated_product), 200
# # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # @app.route('/products/<product_id>', methods=['DELETE'])
# # # # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # # #     db = mongo.db[store_name]
# # # # # # # # # # # # # #     products_collection = db.products
# # # # # # # # # # # # # #     result = products_collection.delete_one({"_id": ObjectId(product_id)})
# # # # # # # # # # # # # #     if result.deleted_count > 0:
# # # # # # # # # # # # # #         return jsonify({"message": "Product deleted"}), 200
# # # # # # # # # # # # # #     else:
# # # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # #     app.run(debug=True)




# # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # from bson.objectid import ObjectId
# # # # # # # # # # # # # from flask_cors import CORS

# # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # Enable CORS to allow cross-origin requests (useful for development with frontend running separately)
# # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # Set MongoDB URI for dynamic connection based on store name
# # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/mydatabase"  # Adjust this if you're using MongoDB Atlas

# # # # # # # # # # # # # # Initialize PyMongo with the Flask app
# # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # #     store_name = request.args.get("store")  # Store name is passed in query parameters
# # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # #     db = mongo.db[store_name]  # Use the database corresponding to the store name
# # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # #     products = []
# # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # # # # # # # # #         products.append(product)
# # # # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # # # # # def create_product():
# # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # #     db = mongo.db[store_name]
# # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # #     new_product = request.get_json()
# # # # # # # # # # # # #     result = products_collection.insert_one(new_product)
# # # # # # # # # # # # #     new_product['_id'] = str(result.inserted_id)
# # # # # # # # # # # # #     return jsonify(new_product), 201

# # # # # # # # # # # # # @app.route('/products/<id>', methods=['PUT'])
# # # # # # # # # # # # # def update_product(id):
# # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # #     db = mongo.db[store_name]
# # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # #     updated_product = request.get_json()
# # # # # # # # # # # # #     result = products_collection.update_one(
# # # # # # # # # # # # #         {'_id': ObjectId(id)}, {"$set": updated_product}
# # # # # # # # # # # # #     )

# # # # # # # # # # # # #     if result.modified_count == 0:
# # # # # # # # # # # # #         return jsonify({"error": "Product not found or no changes made"}), 404

# # # # # # # # # # # # #     updated_product['_id'] = id
# # # # # # # # # # # # #     return jsonify(updated_product), 200

# # # # # # # # # # # # # @app.route('/products/<id>', methods=['DELETE'])
# # # # # # # # # # # # # def delete_product(id):
# # # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # # #     db = mongo.db[store_name]
# # # # # # # # # # # # #     products_collection = db.products

# # # # # # # # # # # # #     result = products_collection.delete_one({'_id': ObjectId(id)})

# # # # # # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # #     return jsonify({"message": "Product deleted successfully"}), 200

# # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # import json
# # # # # # # # # # # # from bson import ObjectId

# # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # Configure MongoDB URI
# # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # Utility function to convert ObjectId to string for JSON serialization
# # # # # # # # # # # # def objectid_to_str(obj):
# # # # # # # # # # # #     if isinstance(obj, ObjectId):
# # # # # # # # # # # #         return str(obj)
# # # # # # # # # # # #     return obj

# # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # def get_products():
# # # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # # #     # Access the products collection
# # # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # # #     # Optional: Adding search functionality for categories
# # # # # # # # # # # #     category = request.args.get('category')
# # # # # # # # # # # #     if category:
# # # # # # # # # # # #         products = list(products_collection.find({"category": category}))
# # # # # # # # # # # #     else:
# # # # # # # # # # # #         products = list(products_collection.find())

# # # # # # # # # # # #     # Convert ObjectId to string for JSON response
# # # # # # # # # # # #     for product in products:
# # # # # # # # # # # #         product['_id'] = objectid_to_str(product['_id'])

# # # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # # @app.route('/product', methods=['POST'])
# # # # # # # # # # # # def add_product():
# # # # # # # # # # # #     store_name = request.json.get("store")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # # #     # Access the products collection
# # # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # # #     # Get product data from the request
# # # # # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # # # # #     if not product_data:
# # # # # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # # # # #     # Insert the new product into the collection
# # # # # # # # # # # #     products_collection.insert_one(product_data)

# # # # # # # # # # # #     return jsonify({"message": "Product added successfully"}), 201

# # # # # # # # # # # # @app.route('/product/<product_id>', methods=['PUT'])
# # # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # # #     store_name = request.json.get("store")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # # #     # Access the products collection
# # # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # # #     # Get the updated product data
# # # # # # # # # # # #     updated_product_data = request.json.get('product')
# # # # # # # # # # # #     if not updated_product_data:
# # # # # # # # # # # #         return jsonify({"error": "Updated product data is required"}), 400

# # # # # # # # # # # #     # Update the product with the given product_id
# # # # # # # # # # # #     result = products_collection.update_one(
# # # # # # # # # # # #         {"_id": ObjectId(product_id)},
# # # # # # # # # # # #         {"$set": updated_product_data}
# # # # # # # # # # # #     )

# # # # # # # # # # # #     if result.matched_count == 0:
# # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # #     return jsonify({"message": "Product updated successfully"}), 200

# # # # # # # # # # # # @app.route('/product/<product_id>', methods=['DELETE'])
# # # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # # #     store_name = request.json.get("store")
# # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # # #     # Access the products collection
# # # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # # #     # Delete the product with the given product_id
# # # # # # # # # # # #     result = products_collection.delete_one({"_id": ObjectId(product_id)})

# # # # # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # #     return jsonify({"message": "Product deleted successfully"}), 200

# # # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # import json
# # # # # # # # # # # from bson import ObjectId

# # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # Configure MongoDB URI
# # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/"
# # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # Utility function to convert ObjectId to string for JSON serialization
# # # # # # # # # # # def objectid_to_str(obj):
# # # # # # # # # # #     if isinstance(obj, ObjectId):
# # # # # # # # # # #         return str(obj)
# # # # # # # # # # #     return obj

# # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # def get_products():
# # # # # # # # # # #     store_name = request.args.get("store")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # #     # Access the products collection
# # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # #     # Optional: Adding search functionality for categories
# # # # # # # # # # #     category = request.args.get('category')
# # # # # # # # # # #     if category:
# # # # # # # # # # #         products = list(products_collection.find({"category": category}))
# # # # # # # # # # #     else:
# # # # # # # # # # #         products = list(products_collection.find())

# # # # # # # # # # #     # Convert ObjectId to string for JSON response
# # # # # # # # # # #     for product in products:
# # # # # # # # # # #         product['_id'] = objectid_to_str(product['_id'])

# # # # # # # # # # #     return jsonify(products), 200

# # # # # # # # # # # @app.route('/product', methods=['POST'])
# # # # # # # # # # # def add_product():
# # # # # # # # # # #     store_name = request.json.get("store")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # #     # Access the products collection
# # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # #     # Get product data from the request
# # # # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # # # #     if not product_data:
# # # # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # # # #     # Insert the new product into the collection
# # # # # # # # # # #     products_collection.insert_one(product_data)

# # # # # # # # # # #     return jsonify({"message": "Product added successfully"}), 201

# # # # # # # # # # # @app.route('/product/<product_id>', methods=['PUT'])
# # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # #     store_name = request.json.get("store")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # #     # Access the products collection
# # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # #     # Get the updated product data
# # # # # # # # # # #     updated_product_data = request.json.get('product')
# # # # # # # # # # #     if not updated_product_data:
# # # # # # # # # # #         return jsonify({"error": "Updated product data is required"}), 400

# # # # # # # # # # #     # Update the product with the given product_id
# # # # # # # # # # #     result = products_collection.update_one(
# # # # # # # # # # #         {"_id": ObjectId(product_id)},
# # # # # # # # # # #         {"$set": updated_product_data}
# # # # # # # # # # #     )

# # # # # # # # # # #     if result.matched_count == 0:
# # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # #     return jsonify({"message": "Product updated successfully"}), 200

# # # # # # # # # # # @app.route('/product/<product_id>', methods=['DELETE'])
# # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # #     store_name = request.json.get("store")
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     # Access the store's database dynamically
# # # # # # # # # # #     db = mongo.db[store_name]

# # # # # # # # # # #     # Access the products collection
# # # # # # # # # # #     products_collection = db['products']

# # # # # # # # # # #     # Delete the product with the given product_id
# # # # # # # # # # #     result = products_collection.delete_one({"_id": ObjectId(product_id)})

# # # # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # #     return jsonify({"message": "Product deleted successfully"}), 200

# # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # import os

# # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # Enable CORS for all domains (you can customize it based on your needs)
# # # # # # # # # # # CORS(app)

# # # # # # # # # # # # Setup MongoDB connection
# # # # # # # # # # # client = MongoClient('mongodb://localhost:27017/')
# # # # # # # # # # # db = client['RetailStoreDB']  # General DB, individual store DBs will be handled dynamically

# # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # def get_products():
# # # # # # # # # # #     store_name = request.args.get('store')
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # # #     products_collection = store_db['products']
# # # # # # # # # # #     products = list(products_collection.find())

# # # # # # # # # # #     # Convert ObjectId to string
# # # # # # # # # # #     for product in products:
# # # # # # # # # # #         product['_id'] = str(product['_id'])

# # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # @app.route('/product', methods=['POST'])
# # # # # # # # # # # def add_product():
# # # # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # # # #     if not product_data:
# # # # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # # #     products_collection = store_db['products']
# # # # # # # # # # #     result = products_collection.insert_one(product_data)

# # # # # # # # # # #     return jsonify({"message": "Product added successfully", "product_id": str(result.inserted_id)})

# # # # # # # # # # # @app.route('/product/<string:product_id>', methods=['PUT'])
# # # # # # # # # # # def update_product(product_id):
# # # # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # # # #     if not product_data:
# # # # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # # #     products_collection = store_db['products']
# # # # # # # # # # #     result = products_collection.update_one(
# # # # # # # # # # #         {'_id': product_id}, {'$set': product_data}
# # # # # # # # # # #     )

# # # # # # # # # # #     if result.matched_count == 0:
# # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # #     return jsonify({"message": "Product updated successfully"})

# # # # # # # # # # # @app.route('/product/<string:product_id>', methods=['DELETE'])
# # # # # # # # # # # def delete_product(product_id):
# # # # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # # # #     if not store_name:
# # # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # # #     products_collection = store_db['products']
# # # # # # # # # # #     result = products_collection.delete_one({'_id': product_id})

# # # # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # #     return jsonify({"message": "Product deleted successfully"})

# # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # #     app.run(debug=True)
# # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # import os

# # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # Enable CORS for all domains (you can customize it based on your needs)
# # # # # # # # # # CORS(app)

# # # # # # # # # # # Setup MongoDB connection
# # # # # # # # # # client = MongoClient('mongodb://localhost:27017/')
# # # # # # # # # # db = client['RetailStoreDB']  # General DB, individual store DBs will be handled dynamically

# # # # # # # # # # @app.route('/products', methods=['GET', 'POST'])
# # # # # # # # # # def manage_products():
# # # # # # # # # #     store_name = request.args.get('store')  # Get store from query parameters
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # #     products_collection = store_db['products']

# # # # # # # # # #     if request.method == 'GET':
# # # # # # # # # #         # Handle GET request to fetch products
# # # # # # # # # #         products = list(products_collection.find())
        
# # # # # # # # # #         # Convert ObjectId to string
# # # # # # # # # #         for product in products:
# # # # # # # # # #             product['_id'] = str(product['_id'])

# # # # # # # # # #         return jsonify(products)

# # # # # # # # # #     elif request.method == 'POST':
# # # # # # # # # #         # Handle POST request to add a new product
# # # # # # # # # #         product_data = request.json.get('product')  # Expected format: { product: {...} }
# # # # # # # # # #         if not product_data:
# # # # # # # # # #             return jsonify({"error": "Product data is required"}), 400

# # # # # # # # # #         result = products_collection.insert_one(product_data)
        
# # # # # # # # # #         return jsonify({
# # # # # # # # # #             "message": "Product added successfully",
# # # # # # # # # #             "product_id": str(result.inserted_id)
# # # # # # # # # #         }), 201

# # # # # # # # # # @app.route('/product/<string:product_id>', methods=['PUT'])
# # # # # # # # # # def update_product(product_id):
# # # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # # #     if not product_data:
# # # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # #     products_collection = store_db['products']
# # # # # # # # # #     result = products_collection.update_one(
# # # # # # # # # #         {'_id': product_id}, {'$set': product_data}
# # # # # # # # # #     )

# # # # # # # # # #     if result.matched_count == 0:
# # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # #     return jsonify({"message": "Product updated successfully"})

# # # # # # # # # # @app.route('/product/<string:product_id>', methods=['DELETE'])
# # # # # # # # # # def delete_product(product_id):
# # # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # # #     if not store_name:
# # # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # # #     store_db = client[store_name]
# # # # # # # # # #     products_collection = store_db['products']
# # # # # # # # # #     result = products_collection.delete_one({'_id': product_id})

# # # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # # #     return jsonify({"message": "Product deleted successfully"})

# # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # #     app.run(debug=True)
# # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # from flask_cors import CORS
# # # # # # # # # from pymongo import MongoClient
# # # # # # # # # import os

# # # # # # # # # app = Flask(__name__)

# # # # # # # # # # Enable CORS for all domains (you can customize it based on your needs)
# # # # # # # # # CORS(app)

# # # # # # # # # # Setup MongoDB connection
# # # # # # # # # client = MongoClient('mongodb://localhost:27017/')
# # # # # # # # # db = client['RetailStoreDB']  # General DB, individual store DBs will be handled dynamically

# # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # def get_products():
# # # # # # # # #     store_name = request.args.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
# # # # # # # # #     products = list(products_collection.find())

# # # # # # # # #     # Convert ObjectId to string
# # # # # # # # #     for product in products:
# # # # # # # # #         product['_id'] = str(product['_id'])

# # # # # # # # #     return jsonify(products)

# # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # def add_product():
# # # # # # # # #     store_name = request.args.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # #     if not product_data:
# # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
    
# # # # # # # # #     # Log the incoming data for debugging
# # # # # # # # #     print(f"Received product data: {product_data}")
    
# # # # # # # # #     result = products_collection.insert_one(product_data)

# # # # # # # # #     return jsonify({"message": "Product added successfully", "product_id": str(result.inserted_id)}), 201

# # # # # # # # # @app.route('/product/<string:product_id>', methods=['PUT'])
# # # # # # # # # def update_product(product_id):
# # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # #     if not product_data:
# # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
    
# # # # # # # # #     result = products_collection.update_one(
# # # # # # # # #         {'_id': product_id}, {'$set': product_data}
# # # # # # # # #     )

# # # # # # # # #     if result.matched_count == 0:
# # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # #     return jsonify({"message": "Product updated successfully"})

# # # # # # # # # @app.route('/product/<string:product_id>', methods=['DELETE'])
# # # # # # # # # def delete_product(product_id):
# # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
    
# # # # # # # # #     result = products_collection.delete_one({'_id': product_id})

# # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # #     return jsonify({"message": "Product deleted successfully"})

# # # # # # # # # if __name__ == '__main__':
# # # # # # # # #     app.run(debug=True)
# # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # from flask_cors import CORS
# # # # # # # # # from pymongo import MongoClient
# # # # # # # # # import os

# # # # # # # # # app = Flask(__name__)
# # # # # # # # # CORS(app)
# # # # # # # # # client = MongoClient('mongodb://localhost:27017/')
# # # # # # # # # db = client['RetailStoreDB']  # General DB, individual store DBs will be handled dynamically

# # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # def get_products():
# # # # # # # # #     store_name = request.args.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
# # # # # # # # #     products = list(products_collection.find())
# # # # # # # # #     for product in products:
# # # # # # # # #         product['_id'] = str(product['_id'])

# # # # # # # # #     return jsonify(products)

# # # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # # def add_product():
# # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # #     if not product_data:
# # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
    
# # # # # # # # #     # Log the incoming data for debugging
# # # # # # # # #     print(f"Received product data: {product_data}")
    
# # # # # # # # #     result = products_collection.insert_one(product_data)

# # # # # # # # #     return jsonify({"message": "Product added successfully", "product_id": str(result.inserted_id)}), 201

# # # # # # # # # @app.route('/product/<string:product_id>', methods=['PUT'])
# # # # # # # # # def update_product(product_id):
# # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     product_data = request.json.get('product')
# # # # # # # # #     if not product_data:
# # # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
    
# # # # # # # # #     result = products_collection.update_one(
# # # # # # # # #         {'_id': product_id}, {'$set': product_data}
# # # # # # # # #     )

# # # # # # # # #     if result.matched_count == 0:
# # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # #     return jsonify({"message": "Product updated successfully"})

# # # # # # # # # @app.route('/product/<string:product_id>', methods=['DELETE'])
# # # # # # # # # def delete_product(product_id):
# # # # # # # # #     store_name = request.json.get('store')
# # # # # # # # #     if not store_name:
# # # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # # #     store_db = client[store_name]
# # # # # # # # #     products_collection = store_db['products']
    
# # # # # # # # #     result = products_collection.delete_one({'_id': product_id})

# # # # # # # # #     if result.deleted_count == 0:
# # # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # # #     return jsonify({"message": "Product deleted successfully"})

# # # # # # # # # if __name__ == '__main__':
# # # # # # # # #     app.run(debug=True)


# # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # from flask_cors import CORS
# # # # # # # # from pymongo import MongoClient
# # # # # # # # from bson.objectid import ObjectId

# # # # # # # # app = Flask(__name__)
# # # # # # # # CORS(app)

# # # # # # # # # MongoDB connection
# # # # # # # # client = MongoClient('mongodb://localhost:27017/')

# # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # def get_products():
# # # # # # # #     store_name = request.args.get('store')
# # # # # # # #     if not store_name:
# # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # #     store_db = client[store_name]
# # # # # # # #     products_collection = store_db['products']

# # # # # # # #     products = list(products_collection.find())
# # # # # # # #     for product in products:
# # # # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string

# # # # # # # #     return jsonify(products), 200


# # # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # # def add_product():
# # # # # # # #     data = request.get_json()
# # # # # # # #     store_name = data.get('store')
# # # # # # # #     product_data = data.get('product')

# # # # # # # #     if not store_name:
# # # # # # # #         return jsonify({"error": "Store name is required"}), 400
# # # # # # # #     if not product_data:
# # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # #     store_db = client[store_name]
# # # # # # # #     products_collection = store_db['products']

# # # # # # # #     result = products_collection.insert_one(product_data)
# # # # # # # #     product_data['_id'] = str(result.inserted_id)

# # # # # # # #     return jsonify({"message": "Product added successfully", "product": product_data}), 201


# # # # # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # # # # def update_product(product_id):
# # # # # # # #     data = request.get_json()
# # # # # # # #     store_name = data.get('store')
# # # # # # # #     product_data = data.get('product')

# # # # # # # #     if not store_name:
# # # # # # # #         return jsonify({"error": "Store name is required"}), 400
# # # # # # # #     if not product_data:
# # # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # # #     store_db = client[store_name]
# # # # # # # #     products_collection = store_db['products']

# # # # # # # #     result = products_collection.update_one(
# # # # # # # #         {'_id': ObjectId(product_id)}, {'$set': product_data}
# # # # # # # #     )

# # # # # # # #     if result.matched_count == 0:
# # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # #     return jsonify({"message": "Product updated successfully"}), 200


# # # # # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # # # # def delete_product(product_id):
# # # # # # # #     data = request.get_json()
# # # # # # # #     store_name = data.get('store')

# # # # # # # #     if not store_name:
# # # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # # #     store_db = client[store_name]
# # # # # # # #     products_collection = store_db['products']

# # # # # # # #     result = products_collection.delete_one({'_id': ObjectId(product_id)})

# # # # # # # #     if result.deleted_count == 0:
# # # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # # #     return jsonify({"message": "Product deleted successfully"}), 200


# # # # # # # # if __name__ == '__main__':
# # # # # # # #     app.run(debug=True)
# # # # # # # from flask import Flask, request, jsonify
# # # # # # # from flask_cors import CORS
# # # # # # # from pymongo import MongoClient
# # # # # # # from bson import ObjectId

# # # # # # # app = Flask(__name__)
# # # # # # # CORS(app)
# # # # # # # client = MongoClient('mongodb://localhost:27017/')

# # # # # # # # Helper function to convert MongoDB ObjectId to string
# # # # # # # def serialize_product(product):
# # # # # # #     product['_id'] = str(product['_id'])
# # # # # # #     return product

# # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # def get_products():
# # # # # # #     store_name = request.args.get('store')
# # # # # # #     if not store_name:
# # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # #     # Use the store name as the database name
# # # # # # #     store_db = client[store_name]
# # # # # # #     products_collection = store_db['products']
# # # # # # #     products = list(products_collection.find())
# # # # # # #     products = [serialize_product(product) for product in products]
# # # # # # #     return jsonify(products), 200

# # # # # # # @app.route('/products', methods=['POST'])
# # # # # # # def add_product():
# # # # # # #     store_name = request.args.get('store')  # Store name from query parameter
# # # # # # #     if not store_name:
# # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # #     product_data = request.json  # Product data sent directly in request body
# # # # # # #     if not product_data:
# # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # #     # Use the store name as the database name
# # # # # # #     store_db = client[store_name]
# # # # # # #     products_collection = store_db['products']
    
# # # # # # #     # Insert product into the database
# # # # # # #     result = products_collection.insert_one(product_data)
# # # # # # #     product_data['_id'] = str(result.inserted_id)
# # # # # # #     return jsonify(product_data), 201

# # # # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # # # def update_product(product_id):
# # # # # # #     store_name = request.args.get('store')  # Store name from query parameter
# # # # # # #     if not store_name:
# # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # #     product_data = request.json  # Updated product data sent directly in request body
# # # # # # #     if not product_data:
# # # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # # #     # Use the store name as the database name
# # # # # # #     store_db = client[store_name]
# # # # # # #     products_collection = store_db['products']
    
# # # # # # #     # Update product in the database
# # # # # # #     result = products_collection.update_one(
# # # # # # #         {'_id': ObjectId(product_id)}, {'$set': product_data}
# # # # # # #     )

# # # # # # #     if result.matched_count == 0:
# # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # #     return jsonify({"message": "Product updated successfully"}), 200

# # # # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # # # def delete_product(product_id):
# # # # # # #     store_name = request.args.get('store')  # Store name from query parameter
# # # # # # #     if not store_name:
# # # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # # #     # Use the store name as the database name
# # # # # # #     store_db = client[store_name]
# # # # # # #     products_collection = store_db['products']
    
# # # # # # #     # Delete product from the database
# # # # # # #     result = products_collection.delete_one({'_id': ObjectId(product_id)})

# # # # # # #     if result.deleted_count == 0:
# # # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # # #     return jsonify({"message": "Product deleted successfully"}), 200

# # # # # # # if __name__ == '__main__':
# # # # # # #     app.run(debug=True)
# # # # # # from flask import Flask, request, jsonify
# # # # # # from flask_cors import CORS
# # # # # # from pymongo import MongoClient
# # # # # # from bson import ObjectId

# # # # # # app = Flask(__name__)
# # # # # # CORS(app)
# # # # # # client = MongoClient('mongodb://localhost:27017/')

# # # # # # # Route to get all products for a specific store
# # # # # # @app.route('/products', methods=['GET'])
# # # # # # def get_products():
# # # # # #     store_name = request.args.get('store')
# # # # # #     if not store_name:
# # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # #     store_db = client[store_name]
# # # # # #     products_collection = store_db['products']
# # # # # #     products = list(products_collection.find())

# # # # # #     for product in products:
# # # # # #         product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # # # #     return jsonify(products)

# # # # # # # Route to add a new product
# # # # # # @app.route('/products', methods=['POST'])
# # # # # # def add_product():
# # # # # #     store_name = request.args.get('store')
# # # # # #     if not store_name:
# # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     store_db = client[store_name]
# # # # # #     products_collection = store_db['products']
    
# # # # # #     # Insert new product
# # # # # #     result = products_collection.insert_one(product_data)
# # # # # #     product_id = str(result.inserted_id)

# # # # # #     return jsonify({"message": "Product added successfully", "product_id": product_id})

# # # # # # # Route to update a product by ID
# # # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # # def update_product(product_id):
# # # # # #     store_name = request.args.get('store')
# # # # # #     if not store_name:
# # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     # Remove the _id field before updating
# # # # # #     product_data.pop('_id', None)  # This ensures the _id field isn't part of the update

# # # # # #     store_db = client[store_name]
# # # # # #     products_collection = store_db['products']
    
# # # # # #     # Update the product, excluding _id field
# # # # # #     result = products_collection.update_one(
# # # # # #         {'_id': ObjectId(product_id)}, {'$set': product_data}
# # # # # #     )

# # # # # #     if result.matched_count == 0:
# # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # #     return jsonify({"message": "Product updated successfully"})


# # # # # # # Route to delete a product by ID
# # # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # # def delete_product(product_id):
# # # # # #     store_name = request.args.get('store')
# # # # # #     if not store_name:
# # # # # #         return jsonify({"error": "Store name is required"}), 400

# # # # # #     store_db = client[store_name]
# # # # # #     products_collection = store_db['products']
    
# # # # # #     result = products_collection.delete_one({'_id': ObjectId(product_id)})

# # # # # #     if result.deleted_count == 0:
# # # # # #         return jsonify({"error": "Product not found"}), 404

# # # # # #     return jsonify({"message": "Product deleted successfully"})

# # # # # # if __name__ == '__main__':
# # # # # #     app.run(debug=True)
# # # # # # from flask import Flask, request, jsonify
# # # # # # from flask_cors import CORS
# # # # # # from pymongo import MongoClient
# # # # # # from bson import ObjectId

# # # # # # app = Flask(__name__)
# # # # # # CORS(app)
# # # # # # client = MongoClient('mongodb://localhost:27017/')

# # # # # # def get_store_db(store_id):
# # # # # #     """Retrieve the database for the specified store ID."""
# # # # # #     if not store_id:
# # # # # #         raise ValueError("Store ID is required.")
# # # # # #     return client[store_id]

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
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to add a new product
# # # # # # @app.route('/products', methods=['POST'])
# # # # # # def add_product():
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         # Insert new product
# # # # # #         result = products_collection.insert_one(product_data)
# # # # # #         product_id = str(result.inserted_id)

# # # # # #         return jsonify({"message": "Product added successfully", "product_id": product_id})
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to update a product by ID
# # # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # # def update_product(product_id):
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     try:
# # # # # #         # Remove the _id field before updating
# # # # # #         product_data.pop('_id', None)  # This ensures the _id field isn't part of the update

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         # Update the product, excluding _id field
# # # # # #         result = products_collection.update_one(
# # # # # #             {'_id': ObjectId(product_id)}, {'$set': product_data}
# # # # # #         )

# # # # # #         if result.matched_count == 0:
# # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # #         return jsonify({"message": "Product updated successfully"})
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to delete a product by ID
# # # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # # def delete_product(product_id):
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         result = products_collection.delete_one({'_id': ObjectId(product_id)})

# # # # # #         if result.deleted_count == 0:
# # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # #         return jsonify({"message": "Product deleted successfully"})
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # if __name__ == '__main__':
# # # # # #     app.run(debug=True)
# # # # # from flask import Flask, request, jsonify
# # # # # from flask_cors import CORS
# # # # # from pymongo import MongoClient
# # # # # from bson import ObjectId
# # # # # from bson.errors import InvalidId

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
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # # Route to add a new product
# # # # # # @app.route('/products', methods=['POST'])
# # # # # # def add_product():
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         # Insert new product
# # # # # #         result = products_collection.insert_one(product_data)
# # # # # #         product_id = str(result.inserted_id)

# # # # # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # # Route to update a product by ID
# # # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # # def update_product(product_id):
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     try:
# # # # # #         # Validate ObjectId
# # # # # #         try:
# # # # # #             product_id_obj = ObjectId(product_id)
# # # # # #         except InvalidId:
# # # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # # #         # Remove the _id field before updating
# # # # # #         product_data.pop('_id', None)

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         # Update the product
# # # # # #         result = products_collection.update_one(
# # # # # #             {'_id': product_id_obj}, {'$set': product_data}
# # # # # #         )

# # # # # #         if result.matched_count == 0:
# # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # @app.route('/products', methods=['POST'])
# # # # # # def add_product():
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     try:
# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         # Insert new product
# # # # # #         result = products_collection.insert_one(product_data)
# # # # # #         product_id = str(result.inserted_id)

# # # # # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # # def update_product(product_id):
# # # # # #     store_id = request.args.get('storeId')
# # # # # #     if not store_id:
# # # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # # #     product_data = request.json
# # # # # #     if not product_data:
# # # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # # #     try:
# # # # # #         # Validate ObjectId
# # # # # #         try:
# # # # # #             product_id_obj = ObjectId(product_id)
# # # # # #         except InvalidId:
# # # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # # #         # Remove the _id field before updating
# # # # # #         product_data.pop('_id', None)

# # # # # #         store_db = get_store_db(store_id)
# # # # # #         products_collection = store_db['products']

# # # # # #         # Update the product
# # # # # #         result = products_collection.update_one(
# # # # # #             {'_id': product_id_obj}, {'$set': product_data}
# # # # # #         )

# # # # # #         if result.matched_count == 0:
# # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # # # #     except Exception as e:
# # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # Route to delete a product by ID
# # # # # @app.route('/products', methods=['POST'])
# # # # # def add_product():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     product_data = request.json
# # # # #     if not product_data:
# # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # #     # Validate that the necessary fields are provided, including image URL
# # # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']

# # # # #         # Insert new product
# # # # #         result = products_collection.insert_one(product_data)
# # # # #         product_id = str(result.inserted_id)

# # # # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # def update_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     product_data = request.json
# # # # #     if not product_data:
# # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # #     # Validate ObjectId
# # # # #     try:
# # # # #         product_id_obj = ObjectId(product_id)
# # # # #     except InvalidId:
# # # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # # #     # Remove the _id field before updating
# # # # #     product_data.pop('_id', None)

# # # # #     # Validate that the necessary fields are provided, including image URL
# # # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']

# # # # #         # Update the product
# # # # #         result = products_collection.update_one(
# # # # #             {'_id': product_id_obj}, {'$set': product_data}
# # # # #         )

# # # # #         if result.matched_count == 0:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # def delete_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         # Validate ObjectId
# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']

# # # # #         # Delete the product
# # # # #         result = products_collection.delete_one({'_id': product_id_obj})

# # # # #         if result.deleted_count == 0:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         return jsonify({"message": "Product deleted successfully"}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # if __name__ == '__main__':
# # # # #     app.run(debug=True)
# # # # # from flask import Flask, request, jsonify
# # # # # from flask_cors import CORS
# # # # # from pymongo import MongoClient
# # # # # from bson import ObjectId
# # # # # from bson.errors import InvalidId

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
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/products', methods=['POST'])
# # # # # def add_product():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     product_data = request.json
# # # # #     if not product_data:
# # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # #     # Validate that the necessary fields are provided, including image URL
# # # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']

# # # # #         # Insert new product
# # # # #         result = products_collection.insert_one(product_data)
# # # # #         product_id = str(result.inserted_id)

# # # # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # def update_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     product_data = request.json
# # # # #     if not product_data:
# # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # #     # Validate ObjectId
# # # # #     try:
# # # # #         product_id_obj = ObjectId(product_id)
# # # # #     except InvalidId:
# # # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # # #     # Remove the _id field before updating
# # # # #     product_data.pop('_id', None)

# # # # #     # Validate that the necessary fields are provided, including image URL
# # # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']

# # # # #         # Update the product
# # # # #         result = products_collection.update_one(
# # # # #             {'_id': product_id_obj}, {'$set': product_data}
# # # # #         )

# # # # #         if result.matched_count == 0:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # def delete_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         # Validate ObjectId
# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']

# # # # #         # Delete the product
# # # # #         result = products_collection.delete_one({'_id': product_id_obj})

# # # # #         if result.deleted_count == 0:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         return jsonify({"message": "Product deleted successfully"}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/damage-items', methods=['POST'])
# # # # # def add_damage_item():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     damage_data = request.json
# # # # #     if not damage_data.get("productId") or not damage_data.get("quantity") or not damage_data.get("reason"):
# # # # #         return jsonify({"error": "All fields are required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         damage_collection = store_db['damage_items']
# # # # #         result = damage_collection.insert_one(damage_data)

# # # # #         return jsonify({"message": "Damage item recorded", "damage_id": str(result.inserted_id)}), 201
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500


# # # # # if __name__ == '__main__':
# # # # #     app.run(debug=True)

# # # # # from flask import Flask, request, jsonify
# # # # # from flask_cors import CORS
# # # # # from pymongo import MongoClient
# # # # # from bson import ObjectId
# # # # # from bson.errors import InvalidId

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
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/products', methods=['POST'])
# # # # # def add_product():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     product_data = request.json
# # # # #     if not product_data:
# # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         result = products_collection.insert_one(product_data)
# # # # #         product_id = str(result.inserted_id)
# # # # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # # def update_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     product_data = request.json
# # # # #     if not product_data:
# # # # #         return jsonify({"error": "Product data is required"}), 400

# # # # #     try:
# # # # #         product_id_obj = ObjectId(product_id)
# # # # #     except InvalidId:
# # # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # # #     product_data.pop('_id', None)

# # # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         result = products_collection.update_one(
# # # # #             {'_id': product_id_obj}, {'$set': product_data}
# # # # #         )
# # # # #         if result.matched_count == 0:
# # # # #             return jsonify({"error": "Product not found"}), 404
# # # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # # def delete_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         product_id_obj = ObjectId(product_id)
# # # # #     except InvalidId:
# # # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         result = products_collection.delete_one({'_id': product_id_obj})
# # # # #         if result.deleted_count == 0:
# # # # #             return jsonify({"error": "Product not found"}), 404
# # # # #         return jsonify({"message": "Product deleted successfully"}), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route('/damage-items', methods=['POST'])
# # # # # def add_damage_item():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     damage_data = request.json
# # # # #     product_id = damage_data.get("productId")
# # # # #     damage_quantity = damage_data.get("quantity")

# # # # #     if not product_id or not damage_quantity or not damage_data.get("reason"):
# # # # #         return jsonify({"error": "All fields are required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         damage_collection = store_db['damage_items']

# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         product = products_collection.find_one({"_id": product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         current_stock = product.get("quantity", 0)
# # # # #         if damage_quantity > current_stock:
# # # # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # # # #         damage_data["product_name"] = product["product_name"]
# # # # #         damage_collection.insert_one(damage_data)

# # # # #         new_stock = current_stock - damage_quantity
# # # # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": new_stock}})

# # # # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/damage-items', methods=['POST'])
# # # # # def add_damage_item():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     damage_data = request.json
# # # # #     print("Received Damage Data:", damage_data)  # Debugging Line

# # # # #     if not damage_data:
# # # # #         return jsonify({"error": "Damage data is required"}), 400

# # # # #     product_id = damage_data.get("productId")
# # # # #     damage_quantity = damage_data.get("quantity")

# # # # #     if not product_id or not damage_quantity or not damage_data.get("reason"):
# # # # #         return jsonify({"error": "All fields are required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         damage_collection = store_db['damage_items']

# # # # #         # Validate productId
# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         # Check if product exists
# # # # #         product = products_collection.find_one({"_id": product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         # Ensure damage quantity is valid
# # # # #         current_stock = product.get("quantity", 0)
# # # # #         if damage_quantity > current_stock:
# # # # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # # # #         # Prepare data for insertion
# # # # #         damage_data["product_name"] = product["product_name"]
# # # # #         damage_data["date"] = damage_data.get("date", "N/A")  # Ensure date is always present

# # # # #         # Insert into damage_items collection
# # # # #         result = damage_collection.insert_one(damage_data)
# # # # #         if not result.inserted_id:
# # # # #             return jsonify({"error": "Failed to save damage item"}), 500

# # # # #         # Update product stock
# # # # #         new_stock = current_stock - damage_quantity
# # # # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": new_stock}})

# # # # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
# # # # #     except Exception as e:
# # # # #         print("Error Saving Damage Item:", str(e))  # Debugging Line
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/damage-items', methods=['POST'])
# # # # # def add_damage_item():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     damage_data = request.json
# # # # #     print("Received Damage Data:", damage_data)  # Debugging Line

# # # # #     if not damage_data:
# # # # #         return jsonify({"error": "Damage data is required"}), 400

# # # # #     product_id = damage_data.get("productId")
# # # # #     damage_quantity = damage_data.get("quantity")

# # # # #     if not product_id or not damage_quantity or not damage_data.get("reason"):
# # # # #         return jsonify({"error": "All fields are required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         damage_collection = store_db['damage_items']

# # # # #         # Validate productId
# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         # Fetch the product
# # # # #         product = products_collection.find_one({"_id": product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         # Convert quantity fields to integers
# # # # #         current_stock = int(product.get("quantity", 0))  # Ensure it's an integer
# # # # #         damage_quantity = int(damage_quantity)  # Convert user input to integer

# # # # #         if damage_quantity > current_stock:
# # # # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # # # #         # Insert into damage_items collection
# # # # #         damage_data["product_name"] = product["product_name"]
# # # # #         damage_data["date"] = damage_data.get("date", "N/A")  # Ensure date is present
# # # # #         damage_collection.insert_one(damage_data)

# # # # #         # Update product stock
# # # # #         new_stock = current_stock - damage_quantity
# # # # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": str(new_stock)}})  # Store as string to match existing schema

# # # # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
# # # # #     except Exception as e:
# # # # #         print("Error Saving Damage Item:", str(e))  # Debugging Line
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # def add_damage_item():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     damage_data = request.json
# # # # #     print("Received Damage Data:", damage_data)  # Debugging Line

# # # # #     if not damage_data:
# # # # #         return jsonify({"error": "Damage data is required"}), 400

# # # # #     product_id = damage_data.get("productId")
# # # # #     damage_quantity = damage_data.get("quantity")

# # # # #     if not product_id or not damage_quantity or not damage_data.get("reason"):
# # # # #         return jsonify({"error": "All fields are required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         damage_collection = store_db['damage_items']

# # # # #         # Validate productId
# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         # Fetch the product
# # # # #         product = products_collection.find_one({"_id": product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         # Convert quantity fields to integers safely
# # # # #         try:
# # # # #             current_stock = int(product.get("quantity", "0"))  # Convert MongoDB string quantity to integer
# # # # #             damage_quantity = int(damage_quantity)  # Ensure damage_quantity is an int
# # # # #         except ValueError:
# # # # #             return jsonify({"error": "Invalid quantity format in database"}), 500

# # # # #         if damage_quantity > current_stock:
# # # # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # # # #         # Insert into damage_items collection
# # # # #         damage_data["product_name"] = product["product_name"]
# # # # #         damage_data["date"] = damage_data.get("date", "N/A")
# # # # #         damage_collection.insert_one(damage_data)

# # # # #         # Update product stock
# # # # #         new_stock = current_stock - damage_quantity
# # # # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": str(new_stock)}})  # Store as string

# # # # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
# # # # #     except Exception as e:
# # # # #         print("Error Saving Damage Item:", str(e))  # Debugging Line
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/damage-items', methods=['POST'])
# # # # # def add_damage_item():
# # # # #     try:
# # # # #         store_id = request.args.get('storeId')
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required"}), 400

# # # # #         damage_data = request.json
# # # # #         print("Received Damage Data:", damage_data)  # Debugging

# # # # #         if not damage_data:
# # # # #             return jsonify({"error": "Damage data is required"}), 400

# # # # #         product_id = damage_data.get("productId")
# # # # #         damage_quantity = damage_data.get("quantity")

# # # # #         if not product_id or not damage_quantity or not damage_data.get("reason"):
# # # # #             return jsonify({"error": "All fields are required"}), 400

# # # # #         # Convert quantity to integer safely
# # # # #         try:
# # # # #             damage_quantity = int(damage_quantity)
# # # # #         except ValueError:
# # # # #             return jsonify({"error": "Quantity must be a number"}), 400

# # # # #         # Connect to MongoDB
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         damage_collection = store_db['damage_items']

# # # # #         # Validate product ID
# # # # #         try:
# # # # #             product_id_obj = ObjectId(product_id)
# # # # #         except InvalidId:
# # # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # # #         # Fetch the product
# # # # #         product = products_collection.find_one({"_id": product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         # Ensure quantity is an integer in MongoDB
# # # # #         try:
# # # # #             current_stock = int(product.get("quantity", "0"))  # Convert string to integer
# # # # #         except ValueError:
# # # # #             return jsonify({"error": "Invalid quantity format in database"}), 500

# # # # #         if damage_quantity > current_stock:
# # # # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # # # #         # Insert into damage_items collection
# # # # #         damage_data["product_name"] = product["product_name"]
# # # # #         damage_data["date"] = damage_data.get("date", "N/A")
# # # # #         damage_collection.insert_one(damage_data)

# # # # #         # Update product stock
# # # # #         new_stock = current_stock - damage_quantity
# # # # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": str(new_stock)}})  # Store as string

# # # # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201

# # # # #     except Exception as e:
# # # # #         print("Error Saving Damage Item:", str(e))  # Print full error for debugging
# # # # #         return jsonify({"error": str(e)}), 500
# # # # from flask import Flask, request, jsonify
# # # # from datetime import datetime
# # # # from flask_cors import CORS
# # # # from pymongo import MongoClient
# # # # from bson import ObjectId
# # # # from bson.errors import InvalidId

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
# # # #     return jsonify({"error": str(e)}), 500

# # # # # Route to get all products for a specific store
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
# # # #             product['_id'] = str(product['_id'])  # Convert ObjectId to string
# # # #         return jsonify(products)
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/products', methods=['POST'])
# # # # def add_product():
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     product_data = request.json
# # # #     if not product_data:
# # # #         return jsonify({"error": "Product data is required"}), 400

# # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         result = products_collection.insert_one(product_data)
# # # #         product_id = str(result.inserted_id)
# # # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # # def update_product(product_id):
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     product_data = request.json
# # # #     if not product_data:
# # # #         return jsonify({"error": "Product data is required"}), 400

# # # #     try:
# # # #         product_id_obj = ObjectId(product_id)
# # # #     except InvalidId:
# # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # #     product_data.pop('_id', None)

# # # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         result = products_collection.update_one(
# # # #             {'_id': product_id_obj}, {'$set': product_data}
# # # #         )
# # # #         if result.matched_count == 0:
# # # #             return jsonify({"error": "Product not found"}), 404
# # # #         return jsonify({"message": "Product updated successfully"}), 200
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # # def delete_product(product_id):
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     try:
# # # #         product_id_obj = ObjectId(product_id)
# # # #     except InvalidId:
# # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         result = products_collection.delete_one({'_id': product_id_obj})
# # # #         if result.deleted_count == 0:
# # # #             return jsonify({"error": "Product not found"}), 404
# # # #         return jsonify({"message": "Product deleted successfully"}), 200
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500


# # # # @app.route('/damage-items', methods=['GET'])
# # # # def get_damage_items():
# # # #     try:
# # # #         store_id = request.args.get('storeId')
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required"}), 400

# # # #         # Connect to MongoDB
# # # #         store_db = get_store_db(store_id)
# # # #         damage_collection = store_db['damage_items']

# # # #         # Fetch all damage items for this store
# # # #         damage_items = list(damage_collection.find())
        
# # # #         # Convert ObjectId to string for JSON serialization
# # # #         for item in damage_items:
# # # #             if '_id' in item:
# # # #                 item['_id'] = str(item['_id'])
        
# # # #         return jsonify(damage_items), 200

# # # #     except Exception as e:
# # # #         print("Error fetching damage items:", str(e))
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/damage-items', methods=['POST'])
# # # # def add_damage_item():
# # # #     try:
# # # #         store_id = request.args.get('storeId')
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required"}), 400

# # # #         damage_data = request.json
# # # #         product_id = damage_data.get("productId")
# # # #         damage_quantity = damage_data.get("quantity")

# # # #         if not product_id or not damage_quantity or not damage_data.get("reason"):
# # # #             return jsonify({"error": "All fields are required"}), 400

# # # #         # Convert quantity to integer safely
# # # #         try:
# # # #             damage_quantity = int(damage_quantity)
# # # #         except ValueError:
# # # #             return jsonify({"error": "Quantity must be a number"}), 400

# # # #         # Connect to MongoDB
# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         damage_collection = store_db['damage_items']

# # # #         # Validate product ID
# # # #         try:
# # # #             product_id_obj = ObjectId(product_id)
# # # #         except InvalidId:
# # # #             return jsonify({"error": "Invalid product ID"}), 400

# # # #         # Fetch the product
# # # #         product = products_collection.find_one({"_id": product_id_obj})
# # # #         if not product:
# # # #             return jsonify({"error": "Product not found"}), 404

# # # #         # Ensure quantity is an integer in MongoDB
# # # #         try:
# # # #             current_stock = int(product.get("quantity", "0"))  # Convert string to integer
# # # #         except ValueError:
# # # #             return jsonify({"error": "Invalid quantity format in database"}), 500

# # # #         if damage_quantity > current_stock:
# # # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # # #         # Insert into damage_items collection
# # # #         damage_data["product_name"] = product["product_name"]
# # # #         damage_data["date"] = damage_data.get("date", "N/A")
# # # #         damage_collection.insert_one(damage_data)

# # # #         # Update product stock
# # # #         new_stock = current_stock - damage_quantity
# # # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": str(new_stock)}})  # Store as string

# # # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201

# # # #     except Exception as e:
# # # #         print("Error Saving Damage Item:", str(e))  # Print full error for debugging
# # # #         return jsonify({"error": str(e)}), 500
    
# # # # # @app.route('/products/<string:product_id>/restock', methods=['POST'])
# # # # # def restock_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         product_id_obj = ObjectId(product_id)
# # # # #     except InvalidId:
# # # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # # #     restock_data = request.json
# # # # #     if not restock_data or not restock_data.get("quantity"):
# # # # #         return jsonify({"error": "Restock quantity is required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
        
# # # # #         # Fetch the product
# # # # #         product = products_collection.find_one({'_id': product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         # Update the quantity
# # # # #         new_quantity = product['quantity'] + restock_data['quantity']
# # # # #         products_collection.update_one(
# # # # #             {'_id': product_id_obj},
# # # # #             {'$set': {'quantity': new_quantity}}
# # # # #         )

# # # # #         return jsonify({
# # # # #             "message": "Product restocked successfully",
# # # # #             "new_quantity": new_quantity
# # # # #         }), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/restock-history', methods=['GET'])
# # # # # def get_restock_history():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400
    
# # # # #     try:
# # # # #         store_db = get_store_db(storeId)
# # # # #         history_collection = store_db['restock_history']
# # # # #         history = list(history_collection.find())
# # # # #         for item in history:
# # # # #             item['_id'] = str(item['_id'])
# # # # #         return jsonify(history)
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/restock-history', methods=['GET'])
# # # # # def get_restock_history():
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400
    
# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         history_collection = store_db['restock_history']
# # # # #         history = list(history_collection.find())
# # # # #         for item in history:
# # # # #             item['_id'] = str(item['_id'])
# # # # #         return jsonify(history)
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500
# # # # @app.route('/restock-history', methods=['GET'])
# # # # def get_restock_history():
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400
    
# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         history_collection = store_db['restock_history']
# # # #         history = list(history_collection.find())
# # # #         for item in history:
# # # #             item['_id'] = str(item['_id'])  # Convert ObjectId to string for JSON
# # # #             # Ensure all fields are present and formatted
# # # #             item['date'] = item.get('date', 'N/A')
# # # #             item['quantity'] = int(item.get('quantity', 0))
# # # #             item['cost'] = float(item.get('cost', 0))
# # # #         return jsonify(history), 200  # Return 200 status explicitly
# # # #     except Exception as e:
# # # #         print(f"Error fetching restock history: {str(e)}")  # Log error for debugging
# # # #         return jsonify({"error": str(e)}), 500
# # # # # @app.route('/products/<string:product_id>/restock', methods=['POST'])
# # # # # def restock_product(product_id):
# # # # #     store_id = request.args.get('storeId')
# # # # #     if not store_id:
# # # # #         return jsonify({"error": "Store ID is required"}), 400

# # # # #     try:
# # # # #         product_id_obj = ObjectId(product_id)
# # # # #     except InvalidId:
# # # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # # #     restock_data = request.json
# # # # #     if not restock_data or not restock_data.get("quantity"):
# # # # #         return jsonify({"error": "Restock quantity is required"}), 400

# # # # #     try:
# # # # #         store_db = get_store_db(store_id)
# # # # #         products_collection = store_db['products']
# # # # #         history_collection = store_db['restock_history']
        
# # # # #         # Fetch the product
# # # # #         product = products_collection.find_one({'_id': product_id_obj})
# # # # #         if not product:
# # # # #             return jsonify({"error": "Product not found"}), 404

# # # # #         # Update the quantity
# # # # #         current_quantity = int(product['quantity'])
# # # # #         new_quantity = current_quantity + restock_data['quantity']
# # # # #         products_collection.update_one(
# # # # #             {'_id': product_id_obj},
# # # # #             {'$set': {
# # # # #                 'quantity': str(new_quantity),
# # # # #                 'last_restocked': datetime.now().isoformat()
# # # # #             }}
# # # # #         )

# # # # #         # Save to history
# # # # #         history_entry = {
# # # # #             'product_name': product['product_name'],
# # # # #             'date': datetime.now().isoformat(),
# # # # #             'quantity': restock_data['quantity'],
# # # # #             'cost': float(product['price']) * restock_data['quantity'],
# # # # #             'supplier': product.get('supplier', 'Unknown'),
# # # # #             'status': 'Completed'
# # # # #         }
# # # # #         history_collection.insert_one(history_entry)

# # # # #         return jsonify({
# # # # #             "message": "Product restocked successfully",
# # # # #             "new_quantity": new_quantity
# # # # #         }), 200
# # # # #     except Exception as e:
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # In app.py
# # # # @app.route('/products/<string:product_id>/restock', methods=['POST'])
# # # # def restock_product(product_id):
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     try:
# # # #         product_id_obj = ObjectId(product_id)
# # # #     except InvalidId:
# # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # #     restock_data = request.json
# # # #     if not restock_data or not restock_data.get("quantity"):
# # # #         return jsonify({"error": "Restock quantity is required"}), 400

# # # #     try:
# # # #         restock_quantity = int(restock_data['quantity'])  # Ensure integer
# # # #         if restock_quantity <= 0:
# # # #             return jsonify({"error": "Quantity must be positive"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         history_collection = store_db['restock_history']
        
# # # #         # Fetch the product
# # # #         product = products_collection.find_one({'_id': product_id_obj})
# # # #         if not product:
# # # #             return jsonify({"error": "Product not found"}), 404

# # # #         # Update the quantity (ensure integer conversion)
# # # #         current_quantity = int(product.get('quantity', 0))  # Handle string or int
# # # #         new_quantity = current_quantity + restock_quantity
# # # #         products_collection.update_one(
# # # #             {'_id': product_id_obj},
# # # #             {'$set': {
# # # #                 'quantity': new_quantity,  # Store as integer
# # # #                 'last_restocked': datetime.now().isoformat()
# # # #             }}
# # # #         )

# # # #         # Save to history
# # # #         history_entry = {
# # # #             'product_name': product['product_name'],
# # # #             'date': datetime.now().isoformat(),
# # # #             'quantity': restock_quantity,
# # # #             'cost': float(product['price']) * restock_quantity,
# # # #             'supplier': product.get('supplier', 'Unknown'),
# # # #             'status': 'Completed'
# # # #         }
# # # #         history_collection.insert_one(history_entry)

# # # #         return jsonify({
# # # #             "message": "Product restocked successfully",
# # # #             "new_quantity": new_quantity
# # # #         }), 200
# # # #     except ValueError:
# # # #         return jsonify({"error": "Invalid quantity format"}), 400
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500
# # # # if __name__ == '__main__':
# # # #     app.run(debug=True)

# # # from flask import Flask, request, jsonify
# # # from datetime import datetime
# # # from flask_cors import CORS
# # # from pymongo import MongoClient
# # # from bson import ObjectId
# # # from bson.errors import InvalidId

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
# # #     return jsonify({"error": str(e)}), 500

# # # # Route to get all products for a specific store
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
# # # #             quantity = int(product.get('quantity', 0))
# # # #             stock_level = int(product.get('stock_level', 100))
# # # #             if quantity <= stock_level:
# # # #                 product['status'] = 'critical'
# # # #             elif quantity <= stock_level * 1.2:
# # # #                 product['status'] = 'warning'
# # # #             else:
# # # #                 product['status'] = 'normal'
# # # #         return jsonify(products), 200
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500
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
# # #             quantity = int(product.get('quantity', 0))
# # #             stock_level = int(product.get('stock_level', 100))
# # #             if quantity <= stock_level:
# # #                 product['status'] = 'critical'
# # #             elif quantity <= stock_level * 1.2:
# # #                 product['status'] = 'warning'
# # #             else:
# # #                 product['status'] = 'normal'
# # #         return jsonify(products), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500
# # # @app.route('/products', methods=['POST'])
# # # def add_product():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     product_data = request.json
# # #     if not product_data:
# # #         return jsonify({"error": "Product data is required"}), 400

# # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         products_collection = store_db['products']
# # #         result = products_collection.insert_one(product_data)
# # #         product_id = str(result.inserted_id)
# # #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/products/<string:product_id>', methods=['PUT'])
# # # def update_product(product_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     product_data = request.json
# # #     if not product_data:
# # #         return jsonify({"error": "Product data is required"}), 400

# # #     try:
# # #         product_id_obj = ObjectId(product_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid product ID"}), 400

# # #     product_data.pop('_id', None)

# # #     if not product_data.get("product_name") or not product_data.get("quantity"):
# # #         return jsonify({"error": "Product name and quantity are required."}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         products_collection = store_db['products']
# # #         result = products_collection.update_one(
# # #             {'_id': product_id_obj}, {'$set': product_data}
# # #         )
# # #         if result.matched_count == 0:
# # #             return jsonify({"error": "Product not found"}), 404
# # #         return jsonify({"message": "Product updated successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # # def delete_product(product_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         product_id_obj = ObjectId(product_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid product ID"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         products_collection = store_db['products']
# # #         result = products_collection.delete_one({'_id': product_id_obj})
# # #         if result.deleted_count == 0:
# # #             return jsonify({"error": "Product not found"}), 404
# # #         return jsonify({"message": "Product deleted successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/damage-items', methods=['GET'])
# # # def get_damage_items():
# # #     try:
# # #         store_id = request.args.get('storeId')
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required"}), 400

# # #         store_db = get_store_db(store_id)
# # #         damage_collection = store_db['damage_items']
# # #         damage_items = list(damage_collection.find())
        
# # #         for item in damage_items:
# # #             if '_id' in item:
# # #                 item['_id'] = str(item['_id'])
        
# # #         return jsonify(damage_items), 200
# # #     except Exception as e:
# # #         print("Error fetching damage items:", str(e))
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/damage-items', methods=['POST'])
# # # def add_damage_item():
# # #     try:
# # #         store_id = request.args.get('storeId')
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required"}), 400

# # #         damage_data = request.json
# # #         product_id = damage_data.get("productId")
# # #         damage_quantity = damage_data.get("quantity")

# # #         if not product_id or not damage_quantity or not damage_data.get("reason"):
# # #             return jsonify({"error": "All fields are required"}), 400

# # #         try:
# # #             damage_quantity = int(damage_quantity)
# # #         except ValueError:
# # #             return jsonify({"error": "Quantity must be a number"}), 400

# # #         store_db = get_store_db(store_id)
# # #         products_collection = store_db['products']
# # #         damage_collection = store_db['damage_items']

# # #         try:
# # #             product_id_obj = ObjectId(product_id)
# # #         except InvalidId:
# # #             return jsonify({"error": "Invalid product ID"}), 400

# # #         product = products_collection.find_one({"_id": product_id_obj})
# # #         if not product:
# # #             return jsonify({"error": "Product not found"}), 404

# # #         current_stock = int(product.get("quantity", 0))
# # #         if damage_quantity > current_stock:
# # #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# # #         damage_data["product_name"] = product["product_name"]
# # #         damage_data["date"] = damage_data.get("date", datetime.now().isoformat())
# # #         damage_collection.insert_one(damage_data)

# # #         new_stock = current_stock - damage_quantity
# # #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": new_stock}})

# # #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
# # #     except Exception as e:
# # #         print("Error Saving Damage Item:", str(e))
# # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/restock-history', methods=['GET'])
# # # # def get_restock_history():
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400
    
# # # #     try:
# # # #         store_db = get_store_db(store_id)
# # # #         history_collection = store_db['restock_history']
# # # #         history = list(history_collection.find())
# # # #         for item in history:
# # # #             item['_id'] = str(item['_id'])
# # # #             item['date'] = item.get('date', 'N/A')
# # # #             item['quantity'] = int(item.get('quantity', 0))
# # # #             item['cost'] = float(item.get('cost', 0))
# # # #         print("Restock History:", history)  # Debug log
# # # #         return jsonify(history), 200
# # # #     except Exception as e:
# # # #         print(f"Error fetching restock history: {str(e)}")
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route('/products/<string:product_id>/restock', methods=['POST'])
# # # # def restock_product(product_id):
# # # #     store_id = request.args.get('storeId')
# # # #     if not store_id:
# # # #         return jsonify({"error": "Store ID is required"}), 400

# # # #     try:
# # # #         product_id_obj = ObjectId(product_id)
# # # #     except InvalidId:
# # # #         return jsonify({"error": "Invalid product ID"}), 400

# # # #     restock_data = request.json
# # # #     if not restock_data or not restock_data.get("quantity"):
# # # #         return jsonify({"error": "Restock quantity is required"}), 400

# # # #     try:
# # # #         restock_quantity = int(restock_data['quantity'])
# # # #         if restock_quantity <= 0:
# # # #             return jsonify({"error": "Quantity must be positive"}), 400

# # # #         store_db = get_store_db(store_id)
# # # #         products_collection = store_db['products']
# # # #         history_collection = store_db['restock_history']
        
# # # #         product = products_collection.find_one({'_id': product_id_obj})
# # # #         if not product:
# # # #             return jsonify({"error": "Product not found"}), 404

# # # #         current_quantity = int(product.get('quantity', 0))
# # # #         new_quantity = current_quantity + restock_quantity
# # # #         products_collection.update_one(
# # # #             {'_id': product_id_obj},
# # # #             {'$set': {
# # # #                 'quantity': new_quantity,
# # # #                 'last_restocked': datetime.now().isoformat()
# # # #             }}
# # # #         )

# # # #         history_entry = {
# # # #             'product_name': product['product_name'],
# # # #             'date': datetime.now().isoformat(),
# # # #             'quantity': restock_quantity,
# # # #             'cost': float(product['price']) * restock_quantity,
# # # #             'supplier': product.get('supplier', 'Unknown'),
# # # #             'status': 'Completed'
# # # #         }
# # # #         history_collection.insert_one(history_entry)

# # # #         return jsonify({
# # # #             "message": "Product restocked successfully",
# # # #             "new_quantity": new_quantity
# # # #         }), 200
# # # #     except ValueError:
# # # #         return jsonify({"error": "Invalid quantity format"}), 400
# # # #     except Exception as e:
# # # #         return jsonify({"error": str(e)}), 500
# # # @app.route('/restock-history', methods=['GET'])
# # # def get_restock_history():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400
    
# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         history_collection = store_db['restock_history']
# # #         history = list(history_collection.find())
# # #         for item in history:
# # #             item['_id'] = str(item['_id'])
# # #             item['date'] = item.get('date', 'N/A')
# # #             item['quantity'] = int(item.get('quantity', 0))
# # #             item['cost'] = float(item.get('cost', 0))
# # #         print("Restock History:", history)  # Debug log
# # #         return jsonify(history), 200
# # #     except Exception as e:
# # #         print(f"Error fetching restock history: {str(e)}")
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/products/<string:product_id>/restock', methods=['POST'])
# # # def restock_product(product_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         product_id_obj = ObjectId(product_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid product ID"}), 400

# # #     restock_data = request.json
# # #     if not restock_data or not restock_data.get("quantity"):
# # #         return jsonify({"error": "Restock quantity is required"}), 400

# # #     try:
# # #         restock_quantity = int(restock_data['quantity'])
# # #         if restock_quantity <= 0:
# # #             return jsonify({"error": "Quantity must be positive"}), 400

# # #         store_db = get_store_db(store_id)
# # #         products_collection = store_db['products']
# # #         history_collection = store_db['restock_history']
        
# # #         product = products_collection.find_one({'_id': product_id_obj})
# # #         if not product:
# # #             return jsonify({"error": "Product not found"}), 404

# # #         # Handle missing or invalid price
# # #         price = product.get('price', 0)
# # #         try:
# # #             price = float(price) if price is not None else 0
# # #         except (ValueError, TypeError):
# # #             price = 0  # Default to 0 if price is invalid

# # #         current_quantity = int(product.get('quantity', 0))
# # #         new_quantity = current_quantity + restock_quantity
        
# # #         products_collection.update_one(
# # #             {'_id': product_id_obj},
# # #             {'$set': {
# # #                 'quantity': new_quantity,
# # #                 'last_restocked': datetime.now().isoformat()
# # #             }}
# # #         )

# # #         history_entry = {
# # #             'product_name': product.get('product_name', 'Unknown Product'),
# # #             'date': datetime.now().isoformat(),
# # #             'quantity': restock_quantity,
# # #             'cost': price * restock_quantity,  # Use safe price value
# # #             'supplier': product.get('supplier', 'Unknown'),
# # #             'status': 'Completed'
# # #         }
# # #         history_collection.insert_one(history_entry)

# # #         return jsonify({
# # #             "message": "Product restocked successfully",
# # #             "new_quantity": new_quantity
# # #         }), 200
# # #     except ValueError:
# # #         return jsonify({"error": "Invalid quantity format"}), 400
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500
# # # if __name__ == '__main__':
# # #     app.run(debug=True)


# # from flask import Flask, request, jsonify
# # from datetime import datetime
# # from flask_cors import CORS
# # from pymongo import MongoClient
# # from bson import ObjectId
# # from bson.errors import InvalidId

# # app = Flask(__name__)
# # CORS(app)

# # # MongoDB Client
# # client = MongoClient('mongodb://localhost:27017/')

# # def get_store_db(store_id):
# #     """Retrieve the database for the specified store ID."""
# #     if not store_id:
# #         raise ValueError("Store ID is required.")
# #     return client[store_id]

# # def generate_barcode(product_name, store_id):
# #     """Generate a unique barcode for a product."""
# #     # Format: PRODUCTNAME-SEQNUM-DATE (e.g., EGG-001-20250312)
# #     date_str = datetime.now().strftime("%Y%m%d")
# #     store_db = get_store_db(store_id)
# #     seq_num = store_db['products'].count_documents({}) + 1
# #     return f"{product_name.upper().replace(' ', '-')}-{seq_num:03d}-{date_str}"

# # @app.errorhandler(Exception)
# # def handle_exception(e):
# #     """Global error handler."""
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
# #             # Assign barcode if missing (for existing products)
# #             if 'barcode' not in product or not product['barcode']:
# #                 barcode = generate_barcode(product['product_name'], store_id)
# #                 products_collection.update_one(
# #                     {'_id': ObjectId(product['_id'])},
# #                     {'$set': {'barcode': barcode}}
# #                 )
# #                 product['barcode'] = barcode
# #             quantity = int(product.get('quantity', 0))
# #             stock_level = int(product.get('stock_level', 100))
# #             if quantity <= stock_level:
# #                 product['status'] = 'critical'
# #             elif quantity <= stock_level * 1.2:
# #                 product['status'] = 'warning'
# #             else:
# #                 product['status'] = 'normal'
# #         return jsonify(products), 200
# #     except Exception as e:
# #         print("Error fetching products:", str(e))
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/products', methods=['POST'])
# # def add_product():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     product_data = request.json
# #     if not product_data:
# #         return jsonify({"error": "Product data is required"}), 400

# #     if not product_data.get("product_name") or not product_data.get("quantity"):
# #         return jsonify({"error": "Product name and quantity are required."}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         products_collection = store_db['products']
# #         # Assign barcode if not provided
# #         if 'barcode' not in product_data or not product_data['barcode']:
# #             product_data['barcode'] = generate_barcode(product_data['product_name'], store_id)
# #         result = products_collection.insert_one(product_data)
# #         product_id = str(result.inserted_id)
# #         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
# #     except Exception as e:
# #         print("Error adding product:", str(e))
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/products/<string:product_id>', methods=['PUT'])
# # def update_product(product_id):
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     product_data = request.json
# #     if not product_data:
# #         return jsonify({"error": "Product data is required"}), 400

# #     try:
# #         product_id_obj = ObjectId(product_id)
# #     except InvalidId:
# #         return jsonify({"error": "Invalid product ID"}), 400

# #     product_data.pop('_id', None)

# #     if not product_data.get("product_name") or not product_data.get("quantity"):
# #         return jsonify({"error": "Product name and quantity are required."}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         products_collection = store_db['products']
# #         # Assign barcode if not provided
# #         if 'barcode' not in product_data or not product_data['barcode']:
# #             product_data['barcode'] = generate_barcode(product_data['product_name'], store_id)
# #         result = products_collection.update_one(
# #             {'_id': product_id_obj}, {'$set': product_data}
# #         )
# #         if result.matched_count == 0:
# #             return jsonify({"error": "Product not found"}), 404
# #         return jsonify({"message": "Product updated successfully"}), 200
# #     except Exception as e:
# #         print("Error updating product:", str(e))
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/products/<string:product_id>', methods=['DELETE'])
# # def delete_product(product_id):
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         product_id_obj = ObjectId(product_id)
# #     except InvalidId:
# #         return jsonify({"error": "Invalid product ID"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         products_collection = store_db['products']
# #         result = products_collection.delete_one({'_id': product_id_obj})
# #         if result.deleted_count == 0:
# #             return jsonify({"error": "Product not found"}), 404
# #         return jsonify({"message": "Product deleted successfully"}), 200
# #     except Exception as e:
# #         print("Error deleting product:", str(e))
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/damage-items', methods=['GET'])
# # def get_damage_items():
# #     try:
# #         store_id = request.args.get('storeId')
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required"}), 400

# #         store_db = get_store_db(store_id)
# #         damage_collection = store_db['damage_items']
# #         damage_items = list(damage_collection.find())
        
# #         for item in damage_items:
# #             if '_id' in item:
# #                 item['_id'] = str(item['_id'])
        
# #         return jsonify(damage_items), 200
# #     except Exception as e:
# #         print("Error fetching damage items:", str(e))
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/damage-items', methods=['POST'])
# # def add_damage_item():
# #     try:
# #         store_id = request.args.get('storeId')
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required"}), 400

# #         damage_data = request.json
# #         product_id = damage_data.get("productId")
# #         damage_quantity = damage_data.get("quantity")

# #         if not product_id or not damage_quantity or not damage_data.get("reason"):
# #             return jsonify({"error": "All fields are required"}), 400

# #         try:
# #             damage_quantity = int(damage_quantity)
# #         except ValueError:
# #             return jsonify({"error": "Quantity must be a number"}), 400

# #         store_db = get_store_db(store_id)
# #         products_collection = store_db['products']
# #         damage_collection = store_db['damage_items']

# #         try:
# #             product_id_obj = ObjectId(product_id)
# #         except InvalidId:
# #             return jsonify({"error": "Invalid product ID"}), 400

# #         product = products_collection.find_one({"_id": product_id_obj})
# #         if not product:
# #             return jsonify({"error": "Product not found"}), 404

# #         current_stock = int(product.get("quantity", 0))
# #         if damage_quantity > current_stock:
# #             return jsonify({"error": "Not enough stock to record this damage"}), 400

# #         damage_data["product_name"] = product["product_name"]
# #         damage_data["barcode"] = product.get("barcode", "")  # Include barcode
# #         damage_data["date"] = damage_data.get("date", datetime.now().isoformat())
# #         damage_collection.insert_one(damage_data)

# #         new_stock = current_stock - damage_quantity
# #         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": new_stock}})

# #         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
# #     except Exception as e:
# #         print("Error Saving Damage Item:", str(e))
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/restock-history', methods=['GET'])
# # def get_restock_history():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400
    
# #     try:
# #         store_db = get_store_db(store_id)
# #         history_collection = store_db['restock_history']
# #         history = list(history_collection.find())
# #         for item in history:
# #             item['_id'] = str(item['_id'])
# #             item['date'] = item.get('date', 'N/A')
# #             item['quantity'] = int(item.get('quantity', 0))
# #             item['cost'] = float(item.get('cost', 0))
# #         print("Restock History:", history)  # Debug log
# #         return jsonify(history), 200
# #     except Exception as e:
# #         print(f"Error fetching restock history: {str(e)}")
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/products/<string:product_id>/restock', methods=['POST'])
# # def restock_product(product_id):
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         product_id_obj = ObjectId(product_id)
# #     except InvalidId:
# #         return jsonify({"error": "Invalid product ID"}), 400

# #     restock_data = request.json
# #     if not restock_data or not restock_data.get("quantity"):
# #         return jsonify({"error": "Restock quantity is required"}), 400

# #     try:
# #         restock_quantity = int(restock_data['quantity'])
# #         if restock_quantity <= 0:
# #             return jsonify({"error": "Quantity must be positive"}), 400

# #         store_db = get_store_db(store_id)
# #         products_collection = store_db['products']
# #         history_collection = store_db['restock_history']
        
# #         product = products_collection.find_one({'_id': product_id_obj})
# #         if not product:
# #             return jsonify({"error": "Product not found"}), 404

# #         # Handle missing or invalid price
# #         price = product.get('sale_price', 0)  # Use sale_price for consistency
# #         try:
# #             price = float(price) if price is not None else 0
# #         except (ValueError, TypeError):
# #             price = 0  # Default to 0 if price is invalid

# #         current_quantity = int(product.get('quantity', 0))
# #         new_quantity = current_quantity + restock_quantity
        
# #         products_collection.update_one(
# #             {'_id': product_id_obj},
# #             {'$set': {
# #                 'quantity': new_quantity,
# #                 'last_restocked': datetime.now().isoformat()
# #             }}
# #         )

# #         history_entry = {
# #             'product_name': product.get('product_name', 'Unknown Product'),
# #             'barcode': product.get('barcode', ''),  # Include barcode
# #             'date': datetime.now().isoformat(),
# #             'quantity': restock_quantity,
# #             'cost': price * restock_quantity,
# #             'supplier': product.get('supplier', 'Unknown'),
# #             'status': 'Completed'
# #         }
# #         history_collection.insert_one(history_entry)

# #         return jsonify({
# #             "message": "Product restocked successfully",
# #             "new_quantity": new_quantity
# #         }), 200
# #     except ValueError:
# #         return jsonify({"error": "Invalid quantity format"}), 400
# #     except Exception as e:
# #         print(f"Error restocking product: {str(e)}")
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True, port=5000)


# from flask import Flask, request, jsonify
# from datetime import datetime
# from flask_cors import CORS
# from pymongo import MongoClient
# from bson import ObjectId
# from bson.errors import InvalidId

# app = Flask(__name__)
# CORS(app)

# # MongoDB Client
# client = MongoClient('mongodb://localhost:27017/')

# def get_store_db(store_id):
#     """Retrieve the database for the specified store ID."""
#     if not store_id:
#         raise ValueError("Store ID is required.")
#     return client[store_id]

# def generate_barcode(product_name, store_id):
#     """Generate a unique barcode for a product."""
#     date_str = datetime.now().strftime("%Y%m%d")
#     store_db = get_store_db(store_id)
#     seq_num = store_db['products'].count_documents({}) + 1
#     return f"{product_name.upper().replace(' ', '-')}-{seq_num:03d}-{date_str}"

# @app.errorhandler(Exception)
# def handle_exception(e):
#     """Global error handler."""
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
#             if 'barcode' not in product or not product['barcode']:
#                 barcode = generate_barcode(product['product_name'], store_id)
#                 products_collection.update_one(
#                     {'_id': ObjectId(product['_id'])},
#                     {'$set': {'barcode': barcode}}
#                 )
#                 product['barcode'] = barcode
#             quantity = int(product.get('quantity', 0))
#             stock_level = int(product.get('stock_level', 100))
#             if quantity <= stock_level:
#                 product['status'] = 'critical'
#             elif quantity <= stock_level * 1.2:
#                 product['status'] = 'warning'
#             else:
#                 product['status'] = 'normal'
#         return jsonify(products), 200
#     except Exception as e:
#         print("Error fetching products:", str(e))
#         return jsonify({"error": str(e)}), 500

# @app.route('/products', methods=['POST'])
# def add_product():
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     product_data = request.json
#     if not product_data:
#         return jsonify({"error": "Product data is required"}), 400

#     if not product_data.get("product_name") or not product_data.get("quantity"):
#         return jsonify({"error": "Product name and quantity are required."}), 400

#     try:
#         store_db = get_store_db(store_id)
#         products_collection = store_db['products']
#         if 'barcode' not in product_data or not product_data['barcode']:
#             product_data['barcode'] = generate_barcode(product_data['product_name'], store_id)
#         result = products_collection.insert_one(product_data)
#         product_id = str(result.inserted_id)
#         return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
#     except Exception as e:
#         print("Error adding product:", str(e))
#         return jsonify({"error": str(e)}), 500

# @app.route('/products/<string:product_id>', methods=['PUT'])
# def update_product(product_id):
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     product_data = request.json
#     if not product_data:
#         return jsonify({"error": "Product data is required"}), 400

#     try:
#         product_id_obj = ObjectId(product_id)
#     except InvalidId:
#         return jsonify({"error": "Invalid product ID"}), 400

#     product_data.pop('_id', None)

#     if not product_data.get("product_name") or not product_data.get("quantity"):
#         return jsonify({"error": "Product name and quantity are required."}), 400

#     try:
#         store_db = get_store_db(store_id)
#         products_collection = store_db['products']
#         if 'barcode' not in product_data or not product_data['barcode']:
#             product_data['barcode'] = generate_barcode(product_data['product_name'], store_id)
#         result = products_collection.update_one(
#             {'_id': product_id_obj}, {'$set': product_data}
#         )
#         if result.matched_count == 0:
#             return jsonify({"error": "Product not found"}), 404
#         return jsonify({"message": "Product updated successfully"}), 200
#     except Exception as e:
#         print("Error updating product:", str(e))
#         return jsonify({"error": str(e)}), 500

# @app.route('/products/<string:product_id>', methods=['DELETE'])
# def delete_product(product_id):
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     try:
#         product_id_obj = ObjectId(product_id)
#     except InvalidId:
#         return jsonify({"error": "Invalid product ID"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         products_collection = store_db['products']
#         result = products_collection.delete_one({'_id': product_id_obj})
#         if result.deleted_count == 0:
#             return jsonify({"error": "Product not found"}), 404
#         return jsonify({"message": "Product deleted successfully"}), 200
#     except Exception as e:
#         print("Error deleting product:", str(e))
#         return jsonify({"error": str(e)}), 500

# @app.route('/damage-items', methods=['GET'])
# def get_damage_items():
#     try:
#         store_id = request.args.get('storeId')
#         if not store_id:
#             return jsonify({"error": "Store ID is required"}), 400

#         store_db = get_store_db(store_id)
#         damage_collection = store_db['damage_items']
#         damage_items = list(damage_collection.find())
        
#         for item in damage_items:
#             if '_id' in item:
#                 item['_id'] = str(item['_id'])
        
#         return jsonify(damage_items), 200
#     except Exception as e:
#         print("Error fetching damage items:", str(e))
#         return jsonify({"error": str(e)}), 500

# @app.route('/damage-items', methods=['POST'])
# def add_damage_item():
#     try:
#         store_id = request.args.get('storeId')
#         if not store_id:
#             return jsonify({"error": "Store ID is required"}), 400

#         damage_data = request.json
#         product_id = damage_data.get("productId")
#         damage_quantity = damage_data.get("quantity")

#         if not product_id or not damage_quantity or not damage_data.get("reason"):
#             return jsonify({"error": "All fields are required"}), 400

#         try:
#             damage_quantity = int(damage_quantity)
#         except ValueError:
#             return jsonify({"error": "Quantity must be a number"}), 400

#         store_db = get_store_db(store_id)
#         products_collection = store_db['products']
#         damage_collection = store_db['damage_items']

#         try:
#             product_id_obj = ObjectId(product_id)
#         except InvalidId:
#             return jsonify({"error": "Invalid product ID"}), 400

#         product = products_collection.find_one({"_id": product_id_obj})
#         if not product:
#             return jsonify({"error": "Product not found"}), 404

#         current_stock = int(product.get("quantity", 0))
#         if damage_quantity > current_stock:
#             return jsonify({"error": "Not enough stock to record this damage"}), 400

#         damage_data["product_name"] = product["product_name"]
#         damage_data["barcode"] = product.get("barcode", "")
#         damage_data["date"] = damage_data.get("date", datetime.now().isoformat())
#         damage_collection.insert_one(damage_data)

#         new_stock = current_stock - damage_quantity
#         products_collection.update_one({"_id": product_id_obj}, {"$set": {"quantity": new_stock}})

#         return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
#     except Exception as e:
#         print("Error Saving Damage Item:", str(e))
#         return jsonify({"error": str(e)}), 500

# @app.route('/restock-history', methods=['GET'])
# def get_restock_history():
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400
    
#     try:
#         store_db = get_store_db(store_id)
#         history_collection = store_db['restock_history']
#         history = list(history_collection.find())
#         for item in history:
#             item['_id'] = str(item['_id'])
#             item['date'] = item.get('date', 'N/A')
#             item['quantity'] = int(item.get('quantity', 0))
#             item['cost'] = float(item.get('cost', 0))
#         print("Restock History:", history)
#         return jsonify(history), 200
#     except Exception as e:
#         print(f"Error fetching restock history: {str(e)}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/products/<string:product_id>/restock', methods=['POST'])
# def restock_product(product_id):
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     try:
#         product_id_obj = ObjectId(product_id)
#     except InvalidId:
#         return jsonify({"error": "Invalid product ID"}), 400

#     restock_data = request.json
#     if not restock_data or not restock_data.get("quantity"):
#         return jsonify({"error": "Restock quantity is required"}), 400

#     try:
#         restock_quantity = int(restock_data['quantity'])
#         if restock_quantity <= 0:
#             return jsonify({"error": "Quantity must be positive"}), 400

#         store_db = get_store_db(store_id)
#         products_collection = store_db['products']
#         history_collection = store_db['restock_history']
        
#         product = products_collection.find_one({'_id': product_id_obj})
#         if not product:
#             return jsonify({"error": "Product not found"}), 404

#         price = product.get('sale_price', 0)
#         try:
#             price = float(price) if price is not None else 0
#         except (ValueError, TypeError):
#             price = 0

#         current_quantity = int(product.get('quantity', 0))
#         new_quantity = current_quantity + restock_quantity
        
#         products_collection.update_one(
#             {'_id': product_id_obj},
#             {'$set': {
#                 'quantity': new_quantity,
#                 'last_restocked': datetime.now().isoformat()
#             }}
#         )

#         history_entry = {
#             'product_name': product.get('product_name', 'Unknown Product'),
#             'barcode': product.get('barcode', ''),
#             'date': datetime.now().isoformat(),
#             'quantity': restock_quantity,
#             'cost': price * restock_quantity,
#             'supplier': product.get('supplier', 'Unknown'),
#             'status': 'Completed'
#         }
#         history_collection.insert_one(history_entry)

#         return jsonify({
#             "message": "Product restocked successfully",
#             "new_quantity": new_quantity
#         }), 200
#     except ValueError:
#         return jsonify({"error": "Invalid quantity format"}), 400
#     except Exception as e:
#         print(f"Error restocking product: {str(e)}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5000)
from flask import Flask, request, jsonify
from datetime import datetime
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from bson.errors import InvalidId

app = Flask(__name__)
CORS(app)

# MongoDB Client
client = MongoClient('mongodb://localhost:27017/')

def get_store_db(store_id):
    """Retrieve the database for the specified store ID."""
    if not store_id:
        raise ValueError("Store ID is required.")
    return client[store_id]

def generate_barcode(product_name, store_id):
    """Generate a unique barcode for a product."""
    date_str = datetime.now().strftime("%Y%m%d")
    store_db = get_store_db(store_id)
    seq_num = store_db['products'].count_documents({}) + 1
    return f"{product_name.upper().replace(' ', '-')}-{seq_num:03d}-{date_str}"

@app.errorhandler(Exception)
def handle_exception(e):
    """Global error handler."""
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
            if 'barcode' not in product or not product['barcode']:
                barcode = generate_barcode(product['product_name'], store_id)
                products_collection.update_one(
                    {'_id': ObjectId(product['_id'])},
                    {'$set': {'barcode': barcode}}
                )
                product['barcode'] = barcode
            quantity = int(product.get('quantity', 0))
            stock_level = int(product.get('stock_level', 100))
            if quantity <= stock_level:
                product['status'] = 'critical'
            elif quantity <= stock_level * 1.2:
                product['status'] = 'warning'
            else:
                product['status'] = 'normal'
        return jsonify(products), 200
    except Exception as e:
        print("Error fetching products:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/products', methods=['POST'])
def add_product():
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    product_data = request.json
    if not product_data:
        return jsonify({"error": "Product data is required"}), 400

    if not product_data.get("product_name") or not product_data.get("quantity"):
        return jsonify({"error": "Product name and quantity are required."}), 400

    try:
        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        if 'barcode' not in product_data or not product_data['barcode']:
            product_data['barcode'] = generate_barcode(product_data['product_name'], store_id)
        result = products_collection.insert_one(product_data)
        product_id = str(result.inserted_id)
        return jsonify({"message": "Product added successfully", "product_id": product_id}), 201
    except Exception as e:
        print("Error adding product:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/products/<string:product_id>', methods=['PUT'])
def update_product(product_id):
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    product_data = request.json
    if not product_data:
        return jsonify({"error": "Product data is required"}), 400

    try:
        product_id_obj = ObjectId(product_id)
    except InvalidId:
        return jsonify({"error": "Invalid product ID"}), 400

    product_data.pop('_id', None)

    if not product_data.get("product_name") or not product_data.get("quantity"):
        return jsonify({"error": "Product name and quantity are required."}), 400

    try:
        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        if 'barcode' not in product_data or not product_data['barcode']:
            product_data['barcode'] = generate_barcode(product_data['product_name'], store_id)
        result = products_collection.update_one(
            {'_id': product_id_obj}, {'$set': product_data}
        )
        if result.matched_count == 0:
            return jsonify({"error": "Product not found"}), 404
        return jsonify({"message": "Product updated successfully"}), 200
    except Exception as e:
        print("Error updating product:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/products/<string:product_id>', methods=['DELETE'])
def delete_product(product_id):
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
        result = products_collection.delete_one({'_id': product_id_obj})
        if result.deleted_count == 0:
            return jsonify({"error": "Product not found"}), 404
        return jsonify({"message": "Product deleted successfully"}), 200
    except Exception as e:
        print("Error deleting product:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/damage-items', methods=['GET'])
def get_damage_items():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"error": "Store ID is required"}), 400

        store_db = get_store_db(store_id)
        damage_collection = store_db['damage_items']
        damage_items = list(damage_collection.find())
        
        for item in damage_items:
            if '_id' in item:
                item['_id'] = str(item['_id'])
        
        return jsonify(damage_items), 200
    except Exception as e:
        print("Error fetching damage items:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/damage-items', methods=['POST'])
def add_damage_item():
    try:
        store_id = request.args.get('storeId')
        if not store_id:
            return jsonify({"error": "Store ID is required"}), 400

        damage_data = request.json
        barcode = damage_data.get("barcode")
        damage_quantity = damage_data.get("quantity")

        if not barcode or not damage_quantity or not damage_data.get("reason"):
            return jsonify({"error": "Barcode, quantity, and reason are required"}), 400

        try:
            damage_quantity = int(damage_quantity)
        except ValueError:
            return jsonify({"error": "Quantity must be a number"}), 400

        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        damage_collection = store_db['damage_items']

        product = products_collection.find_one({"barcode": barcode})
        if not product:
            return jsonify({"error": "Product not found by barcode"}), 404

        current_stock = int(product.get("quantity", 0))
        if damage_quantity > current_stock:
            return jsonify({"error": "Not enough stock to record this damage"}), 400

        damage_data["product_name"] = product["product_name"]
        damage_data["barcode"] = barcode
        damage_data["date"] = damage_data.get("date", datetime.now().isoformat())
        damage_collection.insert_one(damage_data)

        new_stock = current_stock - damage_quantity
        products_collection.update_one({"barcode": barcode}, {"$set": {"quantity": new_stock}})

        return jsonify({"message": "Damage recorded successfully", "remaining_stock": new_stock}), 201
    except Exception as e:
        print("Error Saving Damage Item:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route('/restock-history', methods=['GET'])
def get_restock_history():
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400
    
    try:
        store_db = get_store_db(store_id)
        history_collection = store_db['restock_history']
        history = list(history_collection.find())
        for item in history:
            item['_id'] = str(item['_id'])
            item['date'] = item.get('date', 'N/A')
            item['quantity'] = int(item.get('quantity', 0))
            item['cost'] = float(item.get('cost', 0))
        print("Restock History:", history)
        return jsonify(history), 200
    except Exception as e:
        print(f"Error fetching restock history: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/products/<string:product_id>/restock', methods=['POST'])
def restock_product(product_id):
    store_id = request.args.get('storeId')
    if not store_id:
        return jsonify({"error": "Store ID is required"}), 400

    try:
        product_id_obj = ObjectId(product_id)
    except InvalidId:
        return jsonify({"error": "Invalid product ID"}), 400

    restock_data = request.json
    if not restock_data or not restock_data.get("quantity"):
        return jsonify({"error": "Restock quantity is required"}), 400

    try:
        restock_quantity = int(restock_data['quantity'])
        if restock_quantity <= 0:
            return jsonify({"error": "Quantity must be positive"}), 400

        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        history_collection = store_db['restock_history']
        
        product = products_collection.find_one({'_id': product_id_obj})
        if not product:
            return jsonify({"error": "Product not found"}), 404

        price = product.get('sale_price', 0)
        try:
            price = float(price) if price is not None else 0
        except (ValueError, TypeError):
            price = 0

        current_quantity = int(product.get('quantity', 0))
        new_quantity = current_quantity + restock_quantity
        
        products_collection.update_one(
            {'_id': product_id_obj},
            {'$set': {
                'quantity': new_quantity,
                'last_restocked': datetime.now().isoformat()
            }}
        )

        history_entry = {
            'product_name': product.get('product_name', 'Unknown Product'),
            'barcode': product.get('barcode', ''),
            'date': datetime.now().isoformat(),
            'quantity': restock_quantity,
            'cost': price * restock_quantity,
            'supplier': product.get('supplier', 'Unknown'),
            'status': 'Completed'
        }
        history_collection.insert_one(history_entry)

        return jsonify({
            "message": "Product restocked successfully",
            "new_quantity": new_quantity
        }), 200
    except ValueError:
        return jsonify({"error": "Invalid quantity format"}), 400
    except Exception as e:
        print(f"Error restocking product: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/products/restock-by-barcode', methods=['POST'])
def restock_by_barcode():
    store_id = request.args.get('storeId')
    barcode = request.args.get('barcode')
    if not store_id or not barcode:
        return jsonify({"error": "Store ID and barcode are required"}), 400

    restock_data = request.json
    if not restock_data or not restock_data.get("quantity"):
        return jsonify({"error": "Restock quantity is required"}), 400

    try:
        restock_quantity = int(restock_data['quantity'])
        if restock_quantity <= 0:
            return jsonify({"error": "Quantity must be positive"}), 400

        store_db = get_store_db(store_id)
        products_collection = store_db['products']
        history_collection = store_db['restock_history']
        
        product = products_collection.find_one({'barcode': barcode})
        if not product:
            return jsonify({"error": "Product not found by barcode"}), 404

        price = product.get('sale_price', 0)
        try:
            price = float(price) if price is not None else 0
        except (ValueError, TypeError):
            price = 0

        current_quantity = int(product.get('quantity', 0))
        new_quantity = current_quantity + restock_quantity
        
        products_collection.update_one(
            {'barcode': barcode},
            {'$set': {
                'quantity': new_quantity,
                'last_restocked': datetime.now().isoformat()
            }}
        )

        history_entry = {
            'product_name': product.get('product_name', 'Unknown Product'),
            'barcode': barcode,
            'date': datetime.now().isoformat(),
            'quantity': restock_quantity,
            'cost': price * restock_quantity,
            'supplier': product.get('supplier', 'Unknown'),
            'status': 'Completed'
        }
        history_collection.insert_one(history_entry)

        return jsonify({
            "message": "Product restocked successfully",
            "new_quantity": new_quantity
        }), 200
    except ValueError:
        return jsonify({"error": "Invalid quantity format"}), 400
    except Exception as e:
        print(f"Error restocking product by barcode: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)