# # # # # # # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, jsonify
# # # # # # # # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # # # # # # # # # # # from pymongo import MongoClient

# # # # # # # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # # # # # # # # # # CORS(app)  # Enable CORS for the React frontend to communicate with this backend

# # # # # # # # # # # # # # # # # # # # # # # # # # # # # MongoDB setup
# # # # # # # # # # # # # # # # # # # # # # # # # # # # client = MongoClient('mongodb://localhost:27017/')
# # # # # # # # # # # # # # # # # # # # # # # # # # # # db = client.gaurav  # Database name
# # # # # # # # # # # # # # # # # # # # # # # # # # # # collection = db.products  # Collection name

# # # # # # # # # # # # # # # # # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # # # # # # #     products = get_products_from_db()  # Or wherever you're getting the products
# # # # # # # # # # # # # # # # # # # # # # # # # # # #     print(products)  # This will log the product data to help with debugging
    
# # # # # # # # # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # # # # # # # # #         product_list = [{"name": product['name'], "price": product['price']} for product in products]
# # # # # # # # # # # # # # # # # # # # # # # # # # # #     except KeyError as e:
# # # # # # # # # # # # # # # # # # # # # # # # # # # #         print(f"KeyError: Missing key {e}")
# # # # # # # # # # # # # # # # # # # # # # # # # # # #         return "Error: Missing key in product data", 500
    
# # # # # # # # # # # # # # # # # # # # # # # # # # # #     return jsonify(product_list)


# # # # # # # # # # # # # # # # # # # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True,port=5002)
# # # # # # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, render_template

# # # # # # # # # # # # # # # # # # # # # # # # # # # # Initialize Flask app
# # # # # # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # Simulate getting products from a database
# # # # # # # # # # # # # # # # # # # # # # # # # # # def get_products_from_db():
# # # # # # # # # # # # # # # # # # # # # # # # # # #     # Normally, you'd query your database here, for example with SQLAlchemy
# # # # # # # # # # # # # # # # # # # # # # # # # # #     # But for this example, we are just returning a hardcoded list of products
# # # # # # # # # # # # # # # # # # # # # # # # # # #     products = [
# # # # # # # # # # # # # # # # # # # # # # # # # # #         {"name": "Product 1", "price": 100},
# # # # # # # # # # # # # # # # # # # # # # # # # # #         {"name": "Product 2", "price": 200},
# # # # # # # # # # # # # # # # # # # # # # # # # # #         {"name": "Product 3", "price": 150},
# # # # # # # # # # # # # # # # # # # # # # # # # # #     ]
# # # # # # # # # # # # # # # # # # # # # # # # # # #     return products

# # # # # # # # # # # # # # # # # # # # # # # # # # # # Define a route to display the products
# # # # # # # # # # # # # # # # # # # # # # # # # # # @app.route('/products')
# # # # # # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # # # # # #     products = get_products_from_db()  # Call the function that fetches products
# # # # # # # # # # # # # # # # # # # # # # # # # # #     return render_template('products.html', products=products)

# # # # # # # # # # # # # # # # # # # # # # # # # # # # Run the app
# # # # # # # # # # # # # # # # # # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True,port=5002)
# # # # # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, jsonify
# # # # # # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # # # # # # # # # from pymongo import MongoClient

# # # # # # # # # # # # # # # # # # # # # # # # # # # Initialize Flask app
# # # # # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # # # # # # # # CORS(app)  # Enable CORS for the React frontend to communicate with this backend

# # # # # # # # # # # # # # # # # # # # # # # # # # # MongoDB setup
# # # # # # # # # # # # # # # # # # # # # # # # # # client = MongoClient('mongodb://localhost:27017/')
# # # # # # # # # # # # # # # # # # # # # # # # # # db = client.gaurav  # Database name
# # # # # # # # # # # # # # # # # # # # # # # # # # collection = db.products  # Collection name

# # # # # # # # # # # # # # # # # # # # # # # # # # # Function to get products from MongoDB
# # # # # # # # # # # # # # # # # # # # # # # # # # def get_products_from_db():
# # # # # # # # # # # # # # # # # # # # # # # # # #     # Fetch all products from MongoDB
# # # # # # # # # # # # # # # # # # # # # # # # # #     products = list(collection.find({}, {'_id': 0}))  # Exclude the '_id' field from results
# # # # # # # # # # # # # # # # # # # # # # # # # #     return products

# # # # # # # # # # # # # # # # # # # # # # # # # # # Route to fetch products
# # # # # # # # # # # # # # # # # # # # # # # # # # @app.route('/products', methods=['GET'])
# # # # # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # # # # # # #         products = get_products_from_db()  # Call the function to fetch products from MongoDB
# # # # # # # # # # # # # # # # # # # # # # # # # #         print(products)  # Log the product data for debugging
        
# # # # # # # # # # # # # # # # # # # # # # # # # #         # Extract only 'name' and 'price' fields from products
# # # # # # # # # # # # # # # # # # # # # # # # # #         product_list = [{"name": product['name'], "price": product['price']} for product in products]
# # # # # # # # # # # # # # # # # # # # # # # # # #         return jsonify(product_list)  # Return the list of products as JSON
    
# # # # # # # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # # # # # # #         print(f"Error fetching products: {e}")
# # # # # # # # # # # # # # # # # # # # # # # # # #         return "Error fetching products", 500

# # # # # # # # # # # # # # # # # # # # # # # # # # # Run the app
# # # # # # # # # # # # # # # # # # # # # # # # # # if __name__ == '__main__':
# # # # # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, jsonify
# # # # # # # # # # # # # # # # # # # # # # # # # from pymongo import MongoClient
# # # # # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS

# # # # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # # # # # # # CORS(app)  # Allow cross-origin requests from your React frontend

# # # # # # # # # # # # # # # # # # # # # # # # # # Connect to MongoDB
# # # # # # # # # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")
# # # # # # # # # # # # # # # # # # # # # # # # # db = client["gaurav"]  # Replace with your database name
# # # # # # # # # # # # # # # # # # # # # # # # # collection = db["products"]  # Replace with your collection name


# # # # # # # # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # # # # # #         # Fetch products from MongoDB
# # # # # # # # # # # # # # # # # # # # # # # # #         products = list(collection.find({}, {"_id": 0}))  # Exclude the MongoDB '_id' field
# # # # # # # # # # # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, jsonify
# # # # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # # # # # # # from pymongo import MongoClient

# # # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # # # # # # # CORS(app)  # Enable Cross-Origin Resource Sharing

# # # # # # # # # # # # # # # # # # # # # # # # # MongoDB connection
# # # # # # # # # # # # # # # # # # # # # # # # client = MongoClient("mongodb://localhost:27017/")
# # # # # # # # # # # # # # # # # # # # # # # # db = client["billing_system"]
# # # # # # # # # # # # # # # # # # # # # # # # collection = db["products"]

# # # # # # # # # # # # # # # # # # # # # # # # @app.route('/api/products', methods=['GET'])
# # # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # # # # #         # Fetch products from the database
# # # # # # # # # # # # # # # # # # # # # # # #         products = list(collection.find())
        
# # # # # # # # # # # # # # # # # # # # # # # #         # Rename 'salePrice' to 'price' for frontend compatibility
# # # # # # # # # # # # # # # # # # # # # # # #         for product in products:
# # # # # # # # # # # # # # # # # # # # # # # #             product["price"] = product.pop("salePrice")
        
# # # # # # # # # # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True,port=5002)
# # # # # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # # # # # # from datetime import datetime

# # # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # # # # # # # MongoDB configuration
# # # # # # # # # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/gaurav"
# # # # # # # # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # # # # # # # Get the products collection
# # # # # # # # # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # # # # #         products.append({
# # # # # # # # # # # # # # # # # # # # # # #             "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # # # # # # #             "name": product["name"],
# # # # # # # # # # # # # # # # # # # # # # #             "price": float(product["salePrice"]),
# # # # # # # # # # # # # # # # # # # # # # #             "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # # # # # # #             "unit": product["unit"],
# # # # # # # # # # # # # # # # # # # # # # #             "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # # # # # # #             "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # # # # # # #         })
# # # # # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['name']}"}), 400

# # # # # # # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # # # # # # #             sale_price = float(db_product["salePrice"])
# # # # # # # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # # # # # # #                 "name": db_product["name"],
# # # # # # # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True,port=5002)
# # # # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS  # Enable CORS if needed

# # # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # # # # # # Enable CORS if front-end and back-end are on different domains/ports
# # # # # # # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # # # # # # MongoDB configuration
# # # # # # # # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/gaurav"
# # # # # # # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # # # # # # Get the products collection
# # # # # # # # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # # # #         products.append({
# # # # # # # # # # # # # # # # # # # # # #             "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # # # # # #             "name": product["name"],
# # # # # # # # # # # # # # # # # # # # # #             "price": float(product["salePrice"]),
# # # # # # # # # # # # # # # # # # # # # #             "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # # # # # #             "unit": product["unit"],
# # # # # # # # # # # # # # # # # # # # # #             "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # # # # # #             "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # # # # # #         })
# # # # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['name']}"}), 400

# # # # # # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # # # # # #             sale_price = float(db_product["salePrice"])
# # # # # # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # # # # # #                 "name": db_product["name"],
# # # # # # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # # # # from datetime import datetime

# # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # # # # # MongoDB configuration
# # # # # # # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/gaurav"
# # # # # # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # # # # # Get the products collection
# # # # # # # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # # #         products.append({
# # # # # # # # # # # # # # # # # # # # #             "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # # # # #             "name": product["name"],
# # # # # # # # # # # # # # # # # # # # #             "price": float(product["salePrice"]),
# # # # # # # # # # # # # # # # # # # # #             "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # # # # #             "unit": product["unit"],
# # # # # # # # # # # # # # # # # # # # #             "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # # # # #             "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # # # # #         })
# # # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['name']}"}), 400

# # # # # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # # # # #             sale_price = float(db_product["salePrice"])
# # # # # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # # # # #                 "name": db_product["name"],
# # # # # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # # # # #             )
# # # # # # # # # # # # # # # # # # # # #             print(f"Updated product {db_product['name']} quantity to {new_quantity}")  # Debugging line

# # # # # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # # # # #         print(f"Generated bill summary: {bill_summary}")  # Debugging line
# # # # # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # #         print(f"Error occurred: {str(e)}")  # Debugging line
# # # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # # # # # # from flask_cors import CORS  # Enable CORS if needed

# # # # # # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # # # # # Enable CORS if front-end and back-end are on different domains/ports
# # # # # # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # # # # # MongoDB configuration
# # # # # # # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/gaurav"
# # # # # # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # # # # # Get the products collection
# # # # # # # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # # #         products.append({
# # # # # # # # # # # # # # # # # # # # #             "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # # # # #             "name": product["name"],
# # # # # # # # # # # # # # # # # # # # #             "price": float(product["salePrice"]),
# # # # # # # # # # # # # # # # # # # # #             "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # # # # #             "unit": product["unit"],
# # # # # # # # # # # # # # # # # # # # #             "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # # # # #             "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # # # # #         })
# # # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['name']}"}), 400

# # # # # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # # # # #             sale_price = float(db_product["salePrice"])
# # # # # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # # # # #                 "name": db_product["name"],
# # # # # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # # # # # from flask_cors import CORS  # Enable CORS if needed

# # # # # # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # # # # # Enable CORS if front-end and back-end are on different domains/ports
# # # # # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # # # # MongoDB configuration
# # # # # # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/gaurav"
# # # # # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # # # # Get the products collection
# # # # # # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # # # # # #     for product in products_collection.find():
# # # # # # # # # # # # # # # # # # # #         products.append({
# # # # # # # # # # # # # # # # # # # #             "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # # # #             "name": product["name"],
# # # # # # # # # # # # # # # # # # # #             "price": float(product["salePrice"]),
# # # # # # # # # # # # # # # # # # # #             "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # # # #             "unit": product["unit"],
# # # # # # # # # # # # # # # # # # # #             "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # # # #             "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # # # #         })
# # # # # # # # # # # # # # # # # # # #     return jsonify(products)

# # # # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['name']}"}), 400

# # # # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # # # #             sale_price = float(db_product["salePrice"])
# # # # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # # # #                 "name": db_product["name"],
# # # # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # # # # # # # # # # # # # # # @app.route("/api/update-product-quantity", methods=["POST"])
# # # # # # # # # # # # # # # # # # # # def update_product_quantity():
# # # # # # # # # # # # # # # # # # # #     """Update product quantity in the database."""
# # # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # # #         data = request.json
# # # # # # # # # # # # # # # # # # # #         product_id = data.get("id")
# # # # # # # # # # # # # # # # # # # #         new_quantity = data.get("quantity")

# # # # # # # # # # # # # # # # # # # #         # Ensure we have both product id and new quantity
# # # # # # # # # # # # # # # # # # # #         if not product_id or new_quantity is None:
# # # # # # # # # # # # # # # # # # # #             return jsonify({"error": "Missing product id or quantity"}), 400

# # # # # # # # # # # # # # # # # # # #         # Convert product_id to ObjectId
# # # # # # # # # # # # # # # # # # # #         product_id = ObjectId(product_id)

# # # # # # # # # # # # # # # # # # # #         # Find the product in the database
# # # # # # # # # # # # # # # # # # # #         db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # # # # # # # # #         if not db_product:
# # # # # # # # # # # # # # # # # # # #             return jsonify({"error": "Product not found"}), 404

# # # # # # # # # # # # # # # # # # # #         # Update the product quantity
# # # # # # # # # # # # # # # # # # # #         products_collection.update_one(
# # # # # # # # # # # # # # # # # # # #             {"_id": product_id},
# # # # # # # # # # # # # # # # # # # #             {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # # # #         )

# # # # # # # # # # # # # # # # # # # #         return jsonify({"message": f"Product quantity updated to {new_quantity}"}), 200

# # # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # from flask_cors import CORS  # Enable CORS if needed
# # # # # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # # # # app = Flask(__name__)

# # # # # # # # # # # # # # # # # Enable CORS if front-end and back-end are on different domains/ports
# # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # MongoDB configuration
# # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/gaurav"
# # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # Get the products collection
# # # # # # # # # # # # # # # # products_collection = mongo.db.products

# # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # #     """Fetch all products from the database."""
# # # # # # # # # # # # # # # #     products = []
# # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # # # #                 "name": product["name"],
# # # # # # # # # # # # # # # #                 "price": float(product["salePrice"]),
# # # # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # #                 "unit": product["unit"],
# # # # # # # # # # # # # # # #                 "tax": float(product["tax"]),
# # # # # # # # # # # # # # # #                 "discount": float(product["discount"]),
# # # # # # # # # # # # # # # #             })
# # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # #         print("Error fetching products: ", str(e))
# # # # # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['name']}"}), 400

# # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # #             sale_price = float(db_product["salePrice"])
# # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # #                 "name": db_product["name"],
# # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # #         # Detailed logging of the error
# # # # # # # # # # # # # # # #         print("Error: ", str(e))
# # # # # # # # # # # # # # # #         print("Traceback: ", traceback.format_exc())  # Prints the full traceback
# # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500


# # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # # from flask_cors import CORS

# # # # # # # # # # # # # # # # # # # app = Flask(_name_)
# # # # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # # #     """Fetch products from the specific store database."""
# # # # # # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # # # # #     mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # #     products_collection = mongo.db.products
# # # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # # #                 "units": product["units"],
# # # # # # # # # # # # # # # # # # #                 "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # # #                 "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # # #             })
# # # # # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # # #         return jsonify({"error": "Error fetching products"}), 500

# # # # # # # # # # # # # # # # # # # if _name_ == "_main_":
# # # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # # Initialize PyMongo without a URI so it can be set dynamically per request
# # # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # # #     """Fetch products from the specific store database."""
# # # # # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # # # #     # Set the dynamic URI based on the store name
# # # # # # # # # # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # # # #     mongo.init_app(app)  # Re-initialize with the new URI

# # # # # # # # # # # # # # # # # #     products_collection = mongo.db.products
# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # # #                 "units": product["units"],
# # # # # # # # # # # # # # # # # #                 "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # # #                 "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # # #             })
# # # # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         print("Error fetching products: ", str(e))
# # # # # # # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         # Get the store name from the request headers
# # # # # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # # # #         # Set the dynamic URI based on the store name
# # # # # # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # # # #         mongo.init_app(app)  # Re-initialize with the new URI

# # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # # #         # Get the products collection
# # # # # # # # # # # # # # # # # #         products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         # Detailed logging of the error
# # # # # # # # # # # # # # # # # #         print("Error: ", str(e))
# # # # # # # # # # # # # # # # # #         print("Traceback: ", traceback.format_exc())  # Prints the full traceback
# # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # # Initialize PyMongo with a default URI (you can change this to any default URI or leave it empty)
# # # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"  # Set to any default database
# # # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # # #     """Fetch products from the specific store database."""
# # # # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # # #     # Set the dynamic URI based on the store name
# # # # # # # # # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # # #     mongo.init_app(app)  # Re-initialize with the new URI

# # # # # # # # # # # # # # # # #     products_collection = mongo.db.products
# # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # # #                 "units": product["units"],
# # # # # # # # # # # # # # # # #                 "tax": float(product["tax"]),
# # # # # # # # # # # # # # # # #                 "discount": float(product["discount"]),
# # # # # # # # # # # # # # # # #             })
# # # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # #         print("Error fetching products: ", str(e))
# # # # # # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # # #         # Get the store name from the request headers
# # # # # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # # # #         # Set the dynamic URI based on the store name
# # # # # # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # # # #         mongo.init_app(app)  # Re-initialize with the new URI

# # # # # # # # # # # # # # # # # #         # Get the billing data from the request
# # # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # # #         # Get the products collection
# # # # # # # # # # # # # # # # # #         products_collection = mongo.db.products

# # # # # # # # # # # # # # # # # #         # Initialize bill details
# # # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # # #             # Find the product in the database
# # # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})

# # # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # # # # # #             # Calculate the product's total price after tax and discount
# # # # # # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # # #             # Add to the bill total
# # # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # # #             # Add to billed products
# # # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # # #             # Update the product quantity in the database
# # # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # # #         # Create the bill summary
# # # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # # #         # Detailed logging of the error
# # # # # # # # # # # # # # # # # #         print("Error: ", str(e))
# # # # # # # # # # # # # # # # # #         print("Traceback: ", traceback.format_exc())  # Prints the full traceback
# # # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # # #         mongo.init_app(app)

# # # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # # #         products_collection = mongo.db.products

# # # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # # # # #             tax = float(db_product["tax"])
# # # # # # # # # # # # # # # # #             discount = float(db_product["discount"])

# # # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # # #         print("Error: ", str(e))
# # # # # # # # # # # # # # # # #         print("Traceback: ", traceback.format_exc())
# # # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # # Default MongoDB URI
# # # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # # #     """Fetch products from the specific store database."""
# # # # # # # # # # # # # # # #     store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # #     if not store_name:
# # # # # # # # # # # # # # # #         return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # #     mongo.init_app(app)

# # # # # # # # # # # # # # # #     products_collection = mongo.db.products
# # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # # #                 "units": product.get("units", ""),  # Optional field
# # # # # # # # # # # # # # # #                 "tax": float(product.get("tax", 0)),  # Default 0 if missing
# # # # # # # # # # # # # # # #                 "discount": float(product.get("discount", 0)),  # Default 0 if missing
# # # # # # # # # # # # # # # #             })
# # # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # #         print("Error fetching products: ", str(e))
# # # # # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # #     """Generate the bill and update the product quantities in the database."""
# # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # # #         mongo.init_app(app)

# # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # #         products_collection = mongo.db.products

# # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # #             product_id = ObjectId(product["id"])
# # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # #             if int(db_product["quantity"]) < quantity_to_bill:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # #             new_quantity = int(db_product["quantity"]) - quantity_to_bill
# # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # #         print("Error: ", str(e))
# # # # # # # # # # # # # # # #         print("Traceback: ", traceback.format_exc())
# # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # # def set_store_database(store_name):
# # # # # # # # # # # # # # #     """Set the database dynamically based on the store name."""
# # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # #             raise ValueError("Store name is required.")
# # # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # # #         mongo.init_app(app)
# # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # #         raise RuntimeError(f"Failed to set database for store '{store_name}': {str(e)}")

# # # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # # #     """
# # # # # # # # # # # # # # #     Fetch products from the specific store database.
# # # # # # # # # # # # # # #     Store name is required in headers.
# # # # # # # # # # # # # # #     """
# # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # # # #         set_store_database(store_name)

# # # # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # # #                 "units": product.get("units", ""),  # Optional field
# # # # # # # # # # # # # # #                 "tax": float(product.get("tax", 0)),  # Default 0 if missing
# # # # # # # # # # # # # # #                 "discount": float(product.get("discount", 0)),  # Default 0 if missing
# # # # # # # # # # # # # # #             })
# # # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # # #     """
# # # # # # # # # # # # # # # #     Generate a bill and update the product quantities in the store database.
# # # # # # # # # # # # # # # #     Request payload must include storeName and product details.
# # # # # # # # # # # # # # # #     """
# # # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # # # # #         set_store_database(store_name)

# # # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # # #         products_collection = mongo.db.products

# # # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # # #         # Inside the generate_bill endpoint
# # # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # # #             try:
# # # # # # # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # # # # # # #             except Exception:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])

# # # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # # #             if db_product["quantity"] < quantity_to_bill:
# # # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # # # #             # Compute price after tax and discount
# # # # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # # # # # # #             new_quantity = db_product["quantity"] - quantity_to_bill
# # # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # # #             )


# # # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # # #     """
# # # # # # # # # # # # # # #     Generate a bill, update the product quantities in the store database, and insert sales information.
# # # # # # # # # # # # # # #     Request payload must include storeName and product details.
# # # # # # # # # # # # # # #     """
# # # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # # # #         set_store_database(store_name)

# # # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # # # #         sales_collection = mongo.db.sales  # This is the new collection for sales info

# # # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # # #         # Inside the generate_bill endpoint
# # # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # # #             try:
# # # # # # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # # # # # #             except Exception:
# # # # # # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # # #             # Compute price after tax and discount
# # # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # # #             })

# # # # # # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # # #             )

# # # # # # # # # # # # # # #         # Insert sales information into the sales collectio
# # # # # # # # # # # # # # #         sale_record = {
# # # # # # # # # # # # # # #             "store_name": store_name,
# # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # #             "customer_name": billing_data.get("customerName", ""),
# # # # # # # # # # # # # # #             "customer_phone": billing_data.get("customerPhone", ""),
# # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # # #         }

# # # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # # @app.errorhandler(404)
# # # # # # # # # # # # # # # def not_found(error):
# # # # # # # # # # # # # # #     return jsonify({"error": "Endpoint not found"}), 404

# # # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # # #     app.run(debug=True, port=5002)


# # # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # # def set_store_database(store_name):
# # # # # # # # # # # # # #     """Set the database dynamically based on the store name."""
# # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # #             raise ValueError("Store name is required.")
# # # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_name}"
# # # # # # # # # # # # # #         mongo.init_app(app)
# # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # #         raise RuntimeError(f"Failed to set database for store '{store_name}': {str(e)}")

# # # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # # #     """
# # # # # # # # # # # # # #     Fetch products from the specific store database.
# # # # # # # # # # # # # #     Store name is required in headers.
# # # # # # # # # # # # # #     """
# # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # # #         set_store_database(store_name)

# # # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # # #         products = []
# # # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # # #             products.append({ 
# # # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # # #                 "units": product.get("units", ""),  # Optional field
# # # # # # # # # # # # # #                 "tax": float(product.get("tax", 0)),  # Default 0 if missing
# # # # # # # # # # # # # #                 "discount": float(product.get("discount", 0)),  # Default 0 if missing
# # # # # # # # # # # # # #             })
# # # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # # #     """
# # # # # # # # # # # # # #     Generate a bill, update the product quantities in the store database, and insert sales information.
# # # # # # # # # # # # # #     Request payload must include storeName and product details.
# # # # # # # # # # # # # #     """
# # # # # # # # # # # # # #     try:
# # # # # # # # # # # # # #         store_name = request.headers.get("storeName")
# # # # # # # # # # # # # #         if not store_name:
# # # # # # # # # # # # # #             return jsonify({"error": "Store name is required in headers"}), 400

# # # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # # #         set_store_database(store_name)

# # # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # # #         sales_collection = mongo.db.sales  # This is the new collection for sales info

# # # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # # #         # Inside the generate_bill endpoint
# # # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # # #             try:
# # # # # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # # # # #             except Exception:
# # # # # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # # #             # Compute price after tax and discount
# # # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # # #             })

# # # # # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # # #             )

# # # # # # # # # # # # # #         # Insert sales information into the sales collection
# # # # # # # # # # # # # #         sale_record = {
# # # # # # # # # # # # # #             "store_name": store_name,
# # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # #             "customer_name": billing_data.get("customerName", ""),
# # # # # # # # # # # # # #             "customer_phone": billing_data.get("customerPhone", ""),
# # # # # # # # # # # # # #         }

# # # # # # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # # #         }

# # # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # # @app.errorhandler(404)
# # # # # # # # # # # # # # def not_found(error):
# # # # # # # # # # # # # #     return jsonify({"error": "Endpoint not found"}), 404

# # # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # # import traceback

# # # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # # def set_store_database(store_id):
# # # # # # # # # # # # #     """Set the database dynamically based on the store ID."""
# # # # # # # # # # # # #     try:
# # # # # # # # # # # # #         if not store_id:
# # # # # # # # # # # # #             raise ValueError("Store ID is required.")
# # # # # # # # # # # # #         app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"  # Use store_id as db name
# # # # # # # # # # # # #         mongo.init_app(app)
# # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # #         raise RuntimeError(f"Failed to set database for store ID '{store_id}': {str(e)}")

# # # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # # def get_products():
# # # # # # # # # # # # #     """
# # # # # # # # # # # # #     Fetch products from the specific store database.
# # # # # # # # # # # # #     Store ID is required in headers.
# # # # # # # # # # # # #     """
# # # # # # # # # # # # #     try:
# # # # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # # # #         if not store_id:
# # # # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # #         products = []
# # # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # # #             products.append({
# # # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # # #                 "units": product.get("units", ""),  # Optional field
# # # # # # # # # # # # #                 "tax": float(product.get("tax", 0)),  # Default 0 if missing
# # # # # # # # # # # # #                 "discount": float(product.get("discount", 0)),  # Default 0 if missing
# # # # # # # # # # # # #             })
# # # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # #     """
# # # # # # # # # # # # #     Generate a bill, update the product quantities in the store database, and insert sales information.
# # # # # # # # # # # # #     Request payload must include storeId and product details.
# # # # # # # # # # # # #     """
# # # # # # # # # # # # #     try:
# # # # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # # # #         if not store_id:
# # # # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # #         sales_collection = mongo.db.sales  # This is the new collection for sales info

# # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # #         # Inside the generate_bill endpoint
# # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # #             try:
# # # # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # # # #             except Exception:
# # # # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # #             # Compute price after tax and discount
# # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # #             })

# # # # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # # # # #             products_collection.update_one(
# # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # #             )

# # # # # # # # # # # # #         # Insert sales information into the sales collection
# # # # # # # # # # # # #         sale_record = {
# # # # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # #             "customer_name": billing_data.get("customerName", ""),
# # # # # # # # # # # # #             "customer_phone": billing_data.get("customerPhone", ""),
# # # # # # # # # # # # #         }

# # # # # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # #         }

# # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # @app.errorhandler(404)
# # # # # # # # # # # # # def not_found(error):
# # # # # # # # # # # # #     return jsonify({"error": "Endpoint not found"}), 404

# # # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # # import traceback

# # # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # # CORS(app)

# # # # # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # # def set_store_database(store_id):
# # # # # # # # # # # #     """Set the database dynamically based on the store ID."""
# # # # # # # # # # # #     if not store_id:
# # # # # # # # # # # #         raise ValueError("Store ID is required.")
# # # # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"  # Use store_id as db name
# # # # # # # # # # # #     mongo.init_app(app)

# # # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # # def get_products():
# # # # # # # # # # # #     """
# # # # # # # # # # # #     Fetch products from the specific store database.
# # # # # # # # # # # #     Store ID is required in headers.
# # # # # # # # # # # #     """
# # # # # # # # # # # #     try:
# # # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # # #         if not store_id:
# # # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # #         products = []
# # # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # # #             products.append({
# # # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # # #                 "units": product.get("units", ""),  # Optional field
# # # # # # # # # # # #                 "tax": float(product.get("tax", 0)),  # Default 0 if missing
# # # # # # # # # # # #                 "discount": float(product.get("discount", 0)),  # Default 0 if missing
# # # # # # # # # # # #             })
# # # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # # #     """
# # # # # # # # # # # # #     Generate a bill, update the product quantities in the store database, and insert sales information.
# # # # # # # # # # # # #     Request payload must include storeId and product details.
# # # # # # # # # # # # #     """
# # # # # # # # # # # # #     try:
# # # # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # # # #         if not store_id:
# # # # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])

# # # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # # #         sales_collection = mongo.db.sales  # This is the new collection for sales info

# # # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # # #             try:
# # # # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # # # #             except Exception:
# # # # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # # #             # Compute price after tax and discount
# # # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # # #             })

# # # # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # # # # #             update_result = products_collection.update_one(
# # # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # # #             )

# # # # # # # # # # # # #             if update_result.matched_count == 0:
# # # # # # # # # # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # # # # # # # # # #         # Insert sales information into the sales collection
# # # # # # # # # # # # #         sale_record = {
# # # # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # #             "customer_name": billing_data.get("customerName", ""),
# # # # # # # # # # # # #             "customer_phone": billing_data.get("customerPhone", ""),
# # # # # # # # # # # # #         }

# # # # # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # # #         }

# # # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # # @app.errorhandler(404)
# # # # # # # # # # # # # def not_found(error):
# # # # # # # # # # # # #     return jsonify({"error": "Endpoint not found"}), 404
# # # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # # def generate_bill():
# # # # # # # # # # # #     """
# # # # # # # # # # # #     Generate a bill, update the product quantities in the store database, and insert sales information.
# # # # # # # # # # # #     Request payload must include storeId, userId, and product details.
# # # # # # # # # # # #     """
# # # # # # # # # # # #     try:
# # # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # # #         if not store_id:
# # # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # # #         products_to_bill = billing_data.get("products", [])
# # # # # # # # # # # #         user_id = billing_data.get("userId")  # Get userId from the request payload

# # # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # # #         if not user_id:
# # # # # # # # # # # #             return jsonify({"error": "User ID is required"}), 400

# # # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # # #         sales_collection = mongo.db.sales  # This is the new collection for sales info

# # # # # # # # # # # #         bill_total = 0
# # # # # # # # # # # #         billed_products = []

# # # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # # #             try:
# # # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # # #             except Exception:
# # # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # # #             if not db_product:
# # # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # # #             # Compute price after tax and discount
# # # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # # #             tax = float(db_product.get("tax", 0))
# # # # # # # # # # # #             discount = float(db_product.get("discount", 0))

# # # # # # # # # # # #             price_after_discount = sale_price * (1 - discount / 100)
# # # # # # # # # # # #             price_after_tax = price_after_discount * (1 + tax / 100)
# # # # # # # # # # # #             total_price = price_after_tax * quantity_to_bill

# # # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # # #             billed_products.append({
# # # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # # #             })

# # # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # # # #             update_result = products_collection.update_one(
# # # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # # #             )

# # # # # # # # # # # #             if update_result.matched_count == 0:
# # # # # # # # # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # # # # # # # # #         # Insert sales information into the sales collection
# # # # # # # # # # # #         sale_record = {
# # # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # # #             "user_id": user_id,  # Include userId in the sales record
# # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # #             "customer_name": billing_data.get("customerName", ""),
# # # # # # # # # # # #             "customer_phone": billing_data.get("customerPhone", ""),
# # # # # # # # # # # #         }

# # # # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # # # #         bill_summary = {
# # # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # # #         }

# # # # # # # # # # # #         return jsonify(bill_summary)

# # # # # # # # # # # #     except Exception as e:
# # # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # # from bson import ObjectId
# # # # # # # # # # # from datetime import datetime
# # # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # # import traceback

# # # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # # CORS(app)

# # # # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # # def set_store_database(store_id):
# # # # # # # # # # #     """Set the database dynamically based on the store ID."""
# # # # # # # # # # #     if not store_id:
# # # # # # # # # # #         raise ValueError("Store ID is required.")
# # # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"  # Use store_id as db name
# # # # # # # # # # #     mongo.init_app(app)

# # # # # # # # # # # # Billing System APIs
# # # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # # def get_products():
# # # # # # # # # # #     try:
# # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # #         if not store_id:
# # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # #         products = []
# # # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # # #             products.append({
# # # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # # #             })
# # # # # # # # # # #         return jsonify(products)
# # # # # # # # # # #     except Exception as e:
# # # # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # # def generate_bill():
# # # # # # # # # # #     try:
# # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # #         if not store_id:
# # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # #         billing_data = request.json
# # # # # # # # # # #         products_to_bill = billing_data.get("products", [])
# # # # # # # # # # #         customer_name = billing_data.get("customerName", "")
# # # # # # # # # # #         customer_phone = billing_data.get("customerPhone", "")
# # # # # # # # # # #         payment_status = billing_data.get("paymentStatus", "paid")  # 'paid' or 'unpaid'

# # # # # # # # # # #         if not products_to_bill:
# # # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # # #         sales_collection = mongo.db.sales

# # # # # # # # # # #         bill_total = 0
# # # # # # # # # # #         billed_products = []

# # # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # # #             try:
# # # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # # #             except Exception:
# # # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # # #             if not db_product:
# # # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # # #             # Compute total price
# # # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # # #             total_price = sale_price * quantity_to_bill
# # # # # # # # # # #             bill_total += total_price

# # # # # # # # # # #             billed_products.append({
# # # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # # #             })

# # # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # # #             update_result = products_collection.update_one(
# # # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # # #             )

# # # # # # # # # # #             if update_result.matched_count == 0:
# # # # # # # # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # # # # # # # #         # Insert sales information into the sales collection
# # # # # # # # # # #         sale_record = {
# # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # #             "customer_name": customer_name,
# # # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # # #             "payment_status": payment_status,
# # # # # # # # # # #         }

# # # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # # #         # If the customer didn't pay, record the transaction in Khatabook
# # # # # # # # # # #         if payment_status == "unpaid":
# # # # # # # # # # #             khatabook_transaction = {
# # # # # # # # # # #                 "store_id": store_id,
# # # # # # # # # # #                 "customer_phone": customer_phone,
# # # # # # # # # # #                 "type": "debit",  # Customer owes money
# # # # # # # # # # #                 "amount": bill_total,
# # # # # # # # # # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # #                 "notes": "Unpaid bill",
# # # # # # # # # # #             }
# # # # # # # # # # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # # # # # # # # # #         bill_summary = {
# # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # #             "products": billed_products,
# # # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # # #         }

# # # # # # # # # # #         return jsonify(bill_summary)
# # # # # # # # # # #     except Exception as e:
# # # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # # Khatabook APIs
# # # # # # # # # # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # # # # # # # # # def add_khatabook_transaction():
# # # # # # # # # # #     try:
# # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # #         if not store_id:
# # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # #         data = request.json
# # # # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # # # #         transaction_type = data.get("type")  # 'credit' or 'debit'
# # # # # # # # # # #         amount = data.get("amount")
# # # # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # # # #         # Add transaction to the database
# # # # # # # # # # #         transaction = {
# # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # # #             "type": transaction_type,
# # # # # # # # # # #             "amount": amount,
# # # # # # # # # # #             "notes": notes,
# # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # #         }

# # # # # # # # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # # # # # # # #         return jsonify({"message": "Transaction added successfully"}), 201
# # # # # # # # # # #     except Exception as e:
# # # # # # # # # # #         print("Error adding transaction:", str(e))
# # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # # # # # # # # # def get_customer_balance(customer_phone):
# # # # # # # # # # #     try:
# # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # #         if not store_id:
# # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # # # # # # # # # #         balance = 0
# # # # # # # # # # #         for transaction in transactions:
# # # # # # # # # # #             if transaction["type"] == "credit":
# # # # # # # # # # #                 balance += transaction["amount"]
# # # # # # # # # # #             else:
# # # # # # # # # # #                 balance -= transaction["amount"]
        
# # # # # # # # # # #         return jsonify({"balance": balance}), 200
# # # # # # # # # # #     except Exception as e:
# # # # # # # # # # #         print("Error fetching customer balance:", str(e))
# # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # # #     app.run(debug=True, port=5002)



# # # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # # from bson import ObjectId
# # # # # # # # # # from datetime import datetime
# # # # # # # # # # from flask_cors import CORS
# # # # # # # # # # import traceback
# # # # # # # # # # import smtplib
# # # # # # # # # # from email.mime.text import MIMEText
# # # # # # # # # # from email.mime.multipart import MIMEMultipart


# # # # # # # # # # app = Flask(__name__)
# # # # # # # # # # CORS(app)

# # # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # # def set_store_database(store_id):
# # # # # # # # # #     """Set the database dynamically based on the store ID."""
# # # # # # # # # #     if not store_id:
# # # # # # # # # #         raise ValueError("Store ID is required.")
# # # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"  # Use store_id as db name
# # # # # # # # # #     mongo.init_app(app)

# # # # # # # # # # # Billing System APIs
# # # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # # def get_products():
# # # # # # # # # #     try:
# # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # #         if not store_id:
# # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # #         # Set the database for the current store
# # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # #         products = []
# # # # # # # # # #         for product in products_collection.find():
# # # # # # # # # #             products.append({
# # # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # # #             })
# # # # # # # # # #         return jsonify(products)
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # # def generate_bill():
# # # # # # # # # #     try:
# # # # # # # # # #         store_id = request.headers.get("storeId") 
# # # # # # # # # #         # user_id = request.headers.get("userId")  
# # # # # # # # # #         # # Get storeId from headers
# # # # # # # # # #         user_id = int(request.headers.get("userId")) if request.headers.get("userId") else None

# # # # # # # # # #         print(user_id)
# # # # # # # # # #         if not store_id:
# # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # #         # Set the database for the current store
# # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # #         billing_data = request.json
# # # # # # # # # #         products_to_bill = billing_data.get("products", [])
# # # # # # # # # #         customer_name = billing_data.get("customerName", "")
# # # # # # # # # #         customer_phone = billing_data.get("customerPhone", "")
# # # # # # # # # #         payment_status = billing_data.get("paymentStatus", "paid")  # 'paid' or 'unpaid'

# # # # # # # # # #         if not products_to_bill:
# # # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # # #         sales_collection = mongo.db.sales

# # # # # # # # # #         bill_total = 0
# # # # # # # # # #         billed_products = []

# # # # # # # # # #         for product in products_to_bill:
# # # # # # # # # #             try:
# # # # # # # # # #                 product_id = ObjectId(product["id"])  # Ensure the product ID is valid
# # # # # # # # # #             except Exception:
# # # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # # #             quantity_to_bill = int(product["quantity"])  # Ensure quantity is an integer

# # # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # # #             if not db_product:
# # # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # # #             # Ensure the db_product quantity is an integer before comparing
# # # # # # # # # #             db_product_quantity = int(db_product["quantity"])

# # # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # # #             # Compute total price
# # # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # # #             total_price = sale_price * quantity_to_bill
# # # # # # # # # #             bill_total += total_price

# # # # # # # # # #             billed_products.append({
# # # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # # #                 "total_price": total_price,
# # # # # # # # # #             })

# # # # # # # # # #             # Update the product quantity after the sale
# # # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # # #             update_result = products_collection.update_one(
# # # # # # # # # #                 {"_id": product_id},
# # # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # # #             )

# # # # # # # # # #             if update_result.matched_count == 0:
# # # # # # # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # # # # # # #         # Insert sales information into the sales collection
# # # # # # # # # #         sale_record = {
# # # # # # # # # #             "user_id":str(user_id),
# # # # # # # # # #             "store_id": store_id,
# # # # # # # # # #             "products": billed_products,
# # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # #             "customer_name": customer_name,
# # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # #             "payment_status": payment_status,
# # # # # # # # # #         }

# # # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # # #         # If the customer didn't pay, record the transaction in Khatabook
# # # # # # # # # #         if payment_status == "unpaid":
# # # # # # # # # #             khatabook_transaction = {
# # # # # # # # # #                 "store_id": store_id,
# # # # # # # # # #                 "customer_phone": customer_phone,
# # # # # # # # # #                 "type": "debit",  # Customer owes money
# # # # # # # # # #                 "amount": bill_total,
# # # # # # # # # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # #                 "notes": "Unpaid bill",
# # # # # # # # # #             }
# # # # # # # # # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # # # # # # # # #         bill_summary = {
# # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # #             "products": billed_products,
# # # # # # # # # #             "total_amount": bill_total,
# # # # # # # # # #         }

# # # # # # # # # #         return jsonify(bill_summary)
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # @app.route("/api/khatabook/transactions", methods=["GET"])
# # # # # # # # # # def get_transactions():
# # # # # # # # # #     try:
# # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # #         customer_phone = request.args.get("customerPhone")  # Get customerPhone from query params

# # # # # # # # # #         # Debugging: Log received parameters
# # # # # # # # # #         print("Received request with:", {
# # # # # # # # # #             "store_id": store_id,
# # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # #         });

# # # # # # # # # #         if not store_id or not customer_phone:
# # # # # # # # # #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# # # # # # # # # #         # Set the database for the current store
# # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # #         transactions = list(mongo.db.khatabook.find(
# # # # # # # # # #             {"store_id": store_id, "customer_phone": customer_phone},
# # # # # # # # # #             {"_id": 0}  # Exclude MongoDB _id field
# # # # # # # # # #         ))

# # # # # # # # # #         # Debugging: Log fetched transactions
# # # # # # # # # #         print("Fetched transactions:", transactions);
        
# # # # # # # # # #         return jsonify({"transactions": transactions}), 200
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error fetching transactions:", str(e))
# # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # # # # # # # # def add_khatabook_transaction():
# # # # # # # # # #     try:
# # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # #         if not store_id:
# # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # #         # Set the database for the current store
# # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # #         data = request.json
# # # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # # #         transaction_type = data.get("type")  # 'credit' or 'debit'
# # # # # # # # # #         amount = data.get("amount")
# # # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # # #         # Add transaction to the database
# # # # # # # # # #         transaction = {
# # # # # # # # # #             "store_id": store_id,
# # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # #             "type": transaction_type,
# # # # # # # # # #             "amount": amount,
# # # # # # # # # #             "notes": notes,
# # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # #         }

# # # # # # # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # # # # # # #         return jsonify({"message": "Transaction added successfully"}), 201
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error adding transaction:", str(e))
# # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # # # # # # # # def get_customer_balance(customer_phone):
# # # # # # # # # #     try:
# # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # #         if not store_id:
# # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # #         # Set the database for the current store
# # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # # # # # # # # #         balance = 0
# # # # # # # # # #         for transaction in transactions:
# # # # # # # # # #             if transaction["type"] == "credit":
# # # # # # # # # #                 balance += transaction["amount"]
# # # # # # # # # #             else:
# # # # # # # # # #                 balance -= transaction["amount"]
        
# # # # # # # # # #         return jsonify({"balance": balance}), 200
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error fetching customer balance:", str(e))
# # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # @app.route("/api/send-email", methods=["POST"])
# # # # # # # # # # def send_email():
# # # # # # # # # #     try:
# # # # # # # # # #         data = request.json
# # # # # # # # # #         to_email = data.get("to")
# # # # # # # # # #         subject = data.get("subject")
# # # # # # # # # #         html_content = data.get("html")

# # # # # # # # # #         if not to_email or not subject or not html_content:
# # # # # # # # # #             return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # # #         # SMTP configuration
# # # # # # # # # #         smtp_server = "smtp.gmail.com"
# # # # # # # # # #         smtp_port = 587
# # # # # # # # # #         smtp_username = "noreplyretailstore123@gmail.com"
# # # # # # # # # #         smtp_password = "mzfy vtui vepc tcyc"

# # # # # # # # # #         # Create the email
# # # # # # # # # #         msg = MIMEMultipart()
# # # # # # # # # #         msg["From"] = smtp_username
# # # # # # # # # #         msg["To"] = to_email
# # # # # # # # # #         msg["Subject"] = subject
# # # # # # # # # #         msg.attach(MIMEText(html_content, "html"))

# # # # # # # # # #         # Send the email
# # # # # # # # # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # # # # # # # # #             server.starttls()
# # # # # # # # # #             server.login(smtp_username, smtp_password)
# # # # # # # # # #             server.sendmail(smtp_username, to_email, msg.as_string())

# # # # # # # # # #         return jsonify({"message": "Email sent successfully"}), 200
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error sending email:", str(e))
# # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # # # # # # # # def process_payment():
# # # # # # # # # # #     try:
# # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # #         if not store_id:
# # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # #         data = request.json
# # # # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # # # #         amount = data.get("amount")
# # # # # # # # # # #         transaction_type = data.get("type")  # 'credit' or 'debit'
# # # # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # # # #         if not customer_phone or not amount or not transaction_type:
# # # # # # # # # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # # # # # # # # #         # Ensure the amount is a valid number
# # # # # # # # # # #         try:
# # # # # # # # # # #             amount = float(amount)
# # # # # # # # # # #             if amount <= 0:
# # # # # # # # # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # # # # # # # # #         except ValueError:
# # # # # # # # # # #             return jsonify({"error": "Invalid amount"}), 400

# # # # # # # # # # #         # Add the transaction to the khatabook
# # # # # # # # # # #         transaction = {
# # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # # #             "type": transaction_type,
# # # # # # # # # # #             "amount": amount,
# # # # # # # # # # #             "notes": notes,
# # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # #         }

# # # # # # # # # # #         mongo.db.khatabook.insert_one(transaction)

# # # # # # # # # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # # # # # # # # #     except Exception as e:
# # # # # # # # # # #         print("Error processing payment:", str(e))
# # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # # # # # # # # def process_payment():
# # # # # # # # # # #     try:
# # # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # # #         if not store_id:
# # # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # # #         # Set the database for the current store
# # # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # # #         data = request.json
# # # # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # # # #         amount = data.get("amount")
# # # # # # # # # # #         transaction_type = data.get("type")  # 'credit' or 'debit'
# # # # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # # # #         if not customer_phone or not amount or not transaction_type:
# # # # # # # # # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # # # # # # # # #         # Ensure the amount is a valid number
# # # # # # # # # # #         try:
# # # # # # # # # # #             amount = float(amount)
# # # # # # # # # # #             if amount <= 0:
# # # # # # # # # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # # # # # # # # #         except ValueError:
# # # # # # # # # # #             return jsonify({"error": "Invalid amount"}), 400

# # # # # # # # # # #         # Add the transaction to the khatabook
# # # # # # # # # # #         transaction = {
# # # # # # # # # # #             "store_id": store_id,
# # # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # # #             "type": transaction_type,
# # # # # # # # # # #             "amount": amount,
# # # # # # # # # # #             "notes": notes,
# # # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # # #         }

# # # # # # # # # # #         mongo.db.khatabook.insert_one(transaction)

# # # # # # # # # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # # # # # # # # #     except Exception as e:
# # # # # # # # # # #         print("Error processing payment:", str(e))
# # # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # # # # # # # def process_payment():
# # # # # # # # # #     try:
# # # # # # # # # #         store_id = request.headers.get("storeId")  # Get storeId from headers
# # # # # # # # # #         if not store_id:
# # # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # # #         # Set the database for the current store
# # # # # # # # # #         set_store_database(store_id)

# # # # # # # # # #         data = request.json
# # # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # # #         amount = data.get("amount")
# # # # # # # # # #         transaction_type = data.get("type")  # 'credit' or 'debit'
# # # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # # #         if not customer_phone or not amount or not transaction_type:
# # # # # # # # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # # # # # # # #         # Ensure the amount is a valid number
# # # # # # # # # #         try:
# # # # # # # # # #             amount = float(amount)
# # # # # # # # # #             if amount <= 0:
# # # # # # # # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # # # # # # # #         except ValueError:
# # # # # # # # # #             return jsonify({"error": "Invalid amount"}), 400

# # # # # # # # # #         # Add the transaction to the khatabook
# # # # # # # # # #         transaction = {
# # # # # # # # # #             "store_id": store_id,
# # # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # # #             "type": transaction_type,
# # # # # # # # # #             "amount": amount,
# # # # # # # # # #             "notes": notes,
# # # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # # #         }

# # # # # # # # # #         mongo.db.khatabook.insert_one(transaction)

# # # # # # # # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # # # # # # # #     except Exception as e:
# # # # # # # # # #         print("Error processing payment:", str(e))
# # # # # # # # # #         print(traceback.format_exc())
# # # # # # # # # #         return jsonify({"error": str(e)}), 500
# # # # # # # # # # if __name__ == "__main__":
# # # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # # from bson import ObjectId
# # # # # # # # # from datetime import datetime
# # # # # # # # # from flask_cors import CORS
# # # # # # # # # import traceback
# # # # # # # # # import smtplib
# # # # # # # # # from email.mime.text import MIMEText
# # # # # # # # # from email.mime.multipart import MIMEMultipart

# # # # # # # # # app = Flask(__name__)
# # # # # # # # # CORS(app)

# # # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # # mongo = PyMongo(app)

# # # # # # # # # def set_store_database(store_id):
# # # # # # # # #     """Set the database dynamically based on the store ID."""
# # # # # # # # #     if not store_id:
# # # # # # # # #         raise ValueError("Store ID is required.")
# # # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
# # # # # # # # #     mongo.init_app(app)

# # # # # # # # # # Billing System APIs
# # # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # # def get_products():
# # # # # # # # #     try:
# # # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # # #         if not store_id:
# # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # #         set_store_database(store_id)
# # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # #         products = []
# # # # # # # # #         for product in products_collection.find():
# # # # # # # # #             products.append({
# # # # # # # # #                 "id": str(product["_id"]),
# # # # # # # # #                 "product_name": product["product_name"],
# # # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # # #                 "barcode": product.get("barcode", "")  # Include barcode
# # # # # # # # #             })
# # # # # # # # #         return jsonify(products)
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # # #         print(traceback.format_exc())
# # # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # # def generate_bill():
# # # # # # # # #     try:
# # # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # # #         user_id = request.headers.get("userId")
# # # # # # # # #         user_id = int(user_id) if user_id else None
# # # # # # # # #         print(user_id)
# # # # # # # # #         if not store_id:
# # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # #         set_store_database(store_id)
# # # # # # # # #         billing_data = request.json
# # # # # # # # #         products_to_bill = billing_data.get("products", [])
# # # # # # # # #         customer_name = billing_data.get("customerName", "")
# # # # # # # # #         customer_phone = billing_data.get("customerPhone", "")
# # # # # # # # #         payment_status = billing_data.get("paymentStatus", "paid")

# # # # # # # # #         if not products_to_bill:
# # # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # # #         products_collection = mongo.db.products
# # # # # # # # #         sales_collection = mongo.db.sales

# # # # # # # # #         bill_total = 0
# # # # # # # # #         billed_products = []

# # # # # # # # #         for product in products_to_bill:
# # # # # # # # #             try:
# # # # # # # # #                 product_id = ObjectId(product["id"])
# # # # # # # # #             except Exception:
# # # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # # #             quantity_to_bill = int(product["quantity"])
# # # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # # #             if not db_product:
# # # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # # #             db_product_quantity = int(db_product["quantity"])
# # # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # # #             total_price = sale_price * quantity_to_bill
# # # # # # # # #             bill_total += total_price

# # # # # # # # #             billed_products.append({
# # # # # # # # #                 "name": db_product["product_name"],
# # # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # # #                 "unit_price": sale_price,
# # # # # # # # #                 "total_price": total_price,
# # # # # # # # #                 "barcode": db_product.get("barcode", "")  # Include barcode
# # # # # # # # #             })

# # # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # # #             update_result = products_collection.update_one(
# # # # # # # # #                 {"_id": product_id},
# # # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # # #             )

# # # # # # # # #             if update_result.matched_count == 0:
# # # # # # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # # # # # #         sale_record = {
# # # # # # # # #             "user_id": str(user_id) if user_id else None,
# # # # # # # # #             "store_id": store_id,
# # # # # # # # #             "products": billed_products,
# # # # # # # # #             "total_amount": bill_total,
# # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # #             "customer_name": customer_name,
# # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # #             "payment_status": payment_status,
# # # # # # # # #         }

# # # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # # #         if payment_status == "unpaid":
# # # # # # # # #             khatabook_transaction = {
# # # # # # # # #                 "store_id": store_id,
# # # # # # # # #                 "customer_phone": customer_phone,
# # # # # # # # #                 "type": "debit",
# # # # # # # # #                 "amount": bill_total,
# # # # # # # # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # #                 "notes": "Unpaid bill",
# # # # # # # # #             }
# # # # # # # # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # # # # # # # #         bill_summary = {
# # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # #             "products": billed_products,
# # # # # # # # #             "total_amount": bill_total,
# # # # # # # # #         }

# # # # # # # # #         return jsonify(bill_summary)
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # # #         print(traceback.format_exc())
# # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # @app.route("/api/khatabook/transactions", methods=["GET"])
# # # # # # # # # def get_transactions():
# # # # # # # # #     try:
# # # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # # #         customer_phone = request.args.get("customerPhone")

# # # # # # # # #         print("Received request with:", {
# # # # # # # # #             "store_id": store_id,
# # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # #         })

# # # # # # # # #         if not store_id or not customer_phone:
# # # # # # # # #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# # # # # # # # #         set_store_database(store_id)
# # # # # # # # #         transactions = list(mongo.db.khatabook.find(
# # # # # # # # #             {"store_id": store_id, "customer_phone": customer_phone},
# # # # # # # # #             {"_id": 0}
# # # # # # # # #         ))

# # # # # # # # #         print("Fetched transactions:", transactions)
# # # # # # # # #         return jsonify({"transactions": transactions}), 200
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error fetching transactions:", str(e))
# # # # # # # # #         print(traceback.format_exc())
# # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # # # # # # # def add_khatabook_transaction():
# # # # # # # # #     try:
# # # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # # #         if not store_id:
# # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # #         set_store_database(store_id)
# # # # # # # # #         data = request.json
# # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # #         transaction_type = data.get("type")
# # # # # # # # #         amount = data.get("amount")
# # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # #         transaction = {
# # # # # # # # #             "store_id": store_id,
# # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # #             "type": transaction_type,
# # # # # # # # #             "amount": amount,
# # # # # # # # #             "notes": notes,
# # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # #         }

# # # # # # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # # # # # #         return jsonify({"message": "Transaction added successfully"}), 201
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error adding transaction:", str(e))
# # # # # # # # #         print(traceback.format_exc())
# # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # # # # # # # def get_customer_balance(customer_phone):
# # # # # # # # #     try:
# # # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # # #         if not store_id:
# # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # #         set_store_database(store_id)
# # # # # # # # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # # # # # # # #         balance = 0
# # # # # # # # #         for transaction in transactions:
# # # # # # # # #             if transaction["type"] == "credit":
# # # # # # # # #                 balance += float(transaction["amount"])
# # # # # # # # #             else:  # debit
# # # # # # # # #                 balance -= float(transaction["amount"])
        
# # # # # # # # #         return jsonify({"balance": balance}), 200
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error fetching customer balance:", str(e))
# # # # # # # # #         print(traceback.format_exc())
# # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # @app.route("/api/send-email", methods=["POST"])
# # # # # # # # # def send_email():
# # # # # # # # #     try:
# # # # # # # # #         data = request.json
# # # # # # # # #         to_email = data.get("to")
# # # # # # # # #         subject = data.get("subject")
# # # # # # # # #         html_content = data.get("html")

# # # # # # # # #         if not to_email or not subject or not html_content:
# # # # # # # # #             return jsonify({"error": "Missing required fields"}), 400

# # # # # # # # #         smtp_server = "smtp.gmail.com"
# # # # # # # # #         smtp_port = 587
# # # # # # # # #         smtp_username = "noreplyretailstore123@gmail.com"
# # # # # # # # #         smtp_password = "mzfy vtui vepc tcyc"

# # # # # # # # #         msg = MIMEMultipart()
# # # # # # # # #         msg["From"] = smtp_username
# # # # # # # # #         msg["To"] = to_email
# # # # # # # # #         msg["Subject"] = subject
# # # # # # # # #         msg.attach(MIMEText(html_content, "html"))

# # # # # # # # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # # # # # # # #             server.starttls()
# # # # # # # # #             server.login(smtp_username, smtp_password)
# # # # # # # # #             server.sendmail(smtp_username, to_email, msg.as_string())

# # # # # # # # #         return jsonify({"message": "Email sent successfully"}), 200
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error sending email:", str(e))
# # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # # # # # # def process_payment():
# # # # # # # # #     try:
# # # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # # #         if not store_id:
# # # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # # #         set_store_database(store_id)
# # # # # # # # #         data = request.json
# # # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # # #         amount = data.get("amount")
# # # # # # # # #         transaction_type = data.get("type")
# # # # # # # # #         notes = data.get("notes", "")

# # # # # # # # #         if not customer_phone or not amount or not transaction_type:
# # # # # # # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # # # # # # #         try:
# # # # # # # # #             amount = float(amount)
# # # # # # # # #             if amount <= 0:
# # # # # # # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # # # # # # #         except ValueError:
# # # # # # # # #             return jsonify({"error": "Invalid amount"}), 400

# # # # # # # # #         transaction = {
# # # # # # # # #             "store_id": store_id,
# # # # # # # # #             "customer_phone": customer_phone,
# # # # # # # # #             "type": transaction_type,
# # # # # # # # #             "amount": amount,
# # # # # # # # #             "notes": notes,
# # # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # # #         }

# # # # # # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # # # # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # # # # # # #     except Exception as e:
# # # # # # # # #         print("Error processing payment:", str(e))
# # # # # # # # #         print(traceback.format_exc())
# # # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # # if __name__ == "__main__":
# # # # # # # # #     app.run(debug=True, port=5002)
# # # # # # # # from flask import Flask, request, jsonify
# # # # # # # # from flask_pymongo import PyMongo
# # # # # # # # from bson import ObjectId
# # # # # # # # from datetime import datetime
# # # # # # # # from flask_cors import CORS
# # # # # # # # import traceback
# # # # # # # # import smtplib
# # # # # # # # from email.mime.text import MIMEText
# # # # # # # # from email.mime.multipart import MIMEMultipart

# # # # # # # # app = Flask(__name__)
# # # # # # # # CORS(app)

# # # # # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # # # # mongo = PyMongo(app)

# # # # # # # # def set_store_database(store_id):
# # # # # # # #     """Set the database dynamically based on the store ID."""
# # # # # # # #     if not store_id:
# # # # # # # #         raise ValueError("Store ID is required.")
# # # # # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
# # # # # # # #     mongo.init_app(app)

# # # # # # # # @app.route("/api/products", methods=["GET"])
# # # # # # # # def get_products():
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         if not store_id:
# # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # #         set_store_database(store_id)
# # # # # # # #         products_collection = mongo.db.products
# # # # # # # #         products = []
# # # # # # # #         for product in products_collection.find():
# # # # # # # #             products.append({
# # # # # # # #                 "id": str(product["_id"]),
# # # # # # # #                 "product_name": product["product_name"],
# # # # # # # #                 "sale_price": float(product["sale_price"]),
# # # # # # # #                 "quantity": int(product["quantity"]),
# # # # # # # #                 "barcode": product.get("barcode", "")
# # # # # # # #             })
# # # # # # # #         return jsonify(products)
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error fetching products:", str(e))
# # # # # # # #         print(traceback.format_exc())
# # # # # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # # # # def generate_bill():
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         user_id = request.headers.get("userId")
# # # # # # # #         user_id = int(user_id) if user_id else None
# # # # # # # #         if not store_id:
# # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # #         set_store_database(store_id)
# # # # # # # #         billing_data = request.json
# # # # # # # #         products_to_bill = billing_data.get("products", [])
# # # # # # # #         customer_name = billing_data.get("customerName", "")
# # # # # # # #         customer_phone = billing_data.get("customerPhone", "")
# # # # # # # #         customer_email = billing_data.get("customerEmail", "")
# # # # # # # #         payment_status = billing_data.get("paymentStatus", "paid")

# # # # # # # #         if not products_to_bill:
# # # # # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # # # # #         products_collection = mongo.db.products
# # # # # # # #         sales_collection = mongo.db.sales

# # # # # # # #         # Get the total number of sales to determine the next serial number
# # # # # # # #         sales_count = sales_collection.count_documents({})
# # # # # # # #         new_serial_number = sales_count + 1  # e.g., 10 if there are 9 sales
# # # # # # # #         invoice_number = f"INV-{store_id}-{new_serial_number:06d}"  # e.g., INV-store123-000010

# # # # # # # #         bill_total = 0
# # # # # # # #         billed_products = []

# # # # # # # #         for product in products_to_bill:
# # # # # # # #             try:
# # # # # # # #                 product_id = ObjectId(product["id"])
# # # # # # # #             except Exception:
# # # # # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # # # # #             quantity_to_bill = int(product["quantity"])
# # # # # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # # # # #             if not db_product:
# # # # # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # # # # #             db_product_quantity = int(db_product["quantity"])
# # # # # # # #             if db_product_quantity < quantity_to_bill:
# # # # # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # # # # #             sale_price = float(db_product["sale_price"])
# # # # # # # #             total_price = sale_price * quantity_to_bill
# # # # # # # #             bill_total += total_price

# # # # # # # #             billed_products.append({
# # # # # # # #                 "name": db_product["product_name"],
# # # # # # # #                 "quantity": quantity_to_bill,
# # # # # # # #                 "unit_price": sale_price,
# # # # # # # #                 "total_price": total_price,
# # # # # # # #                 "barcode": db_product.get("barcode", "")
# # # # # # # #             })

# # # # # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # # # # #             update_result = products_collection.update_one(
# # # # # # # #                 {"_id": product_id},
# # # # # # # #                 {"$set": {"quantity": new_quantity}}
# # # # # # # #             )

# # # # # # # #             if update_result.matched_count == 0:
# # # # # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # # # # #         sale_record = {
# # # # # # # #             "serialNumber": new_serial_number,
# # # # # # # #             "invoiceNumber": invoice_number,
# # # # # # # #             "user_id": str(user_id) if user_id else None,
# # # # # # # #             "store_id": store_id,
# # # # # # # #             "products": billed_products,
# # # # # # # #             "total_amount": bill_total,
# # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # #             "customer_name": customer_name,
# # # # # # # #             "customer_phone": customer_phone,
# # # # # # # #             "customer_email": customer_email,
# # # # # # # #             "payment_status": payment_status,
# # # # # # # #         }

# # # # # # # #         sales_collection.insert_one(sale_record)

# # # # # # # #         if payment_status == "unpaid":
# # # # # # # #             khatabook_transaction = {
# # # # # # # #                 "store_id": store_id,
# # # # # # # #                 "customer_phone": customer_phone,
# # # # # # # #                 "type": "debit",
# # # # # # # #                 "amount": bill_total,
# # # # # # # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # #                 "notes": f"Unpaid bill - Invoice {invoice_number}",
# # # # # # # #             }
# # # # # # # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # # # # # # #         bill_summary = {
# # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # #             "products": billed_products,
# # # # # # # #             "total_amount": bill_total,
# # # # # # # #             "invoiceNumber": invoice_number,
# # # # # # # #             "serialNumber": new_serial_number
# # # # # # # #         }

# # # # # # # #         return jsonify(bill_summary), 201
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error generating bill:", str(e))
# # # # # # # #         print(traceback.format_exc())
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # @app.route("/api/khatabook/transactions", methods=["GET"])
# # # # # # # # def get_transactions():
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         customer_phone = request.args.get("customerPhone")

# # # # # # # #         if not store_id or not customer_phone:
# # # # # # # #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# # # # # # # #         set_store_database(store_id)
# # # # # # # #         transactions = list(mongo.db.khatabook.find(
# # # # # # # #             {"store_id": store_id, "customer_phone": customer_phone},
# # # # # # # #             {"_id": 0}
# # # # # # # #         ))

# # # # # # # #         return jsonify({"transactions": transactions}), 200
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error fetching transactions:", str(e))
# # # # # # # #         print(traceback.format_exc())
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # # # # # # def add_khatabook_transaction():
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         if not store_id:
# # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # #         set_store_database(store_id)
# # # # # # # #         data = request.json
# # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # #         transaction_type = data.get("type")
# # # # # # # #         amount = data.get("amount")
# # # # # # # #         notes = data.get("notes", "")

# # # # # # # #         transaction = {
# # # # # # # #             "store_id": store_id,
# # # # # # # #             "customer_phone": customer_phone,
# # # # # # # #             "type": transaction_type,
# # # # # # # #             "amount": amount,
# # # # # # # #             "notes": notes,
# # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # #         }

# # # # # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # # # # #         return jsonify({"message": "Transaction added successfully"}), 201
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error adding transaction:", str(e))
# # # # # # # #         print(traceback.format_exc())
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # # # # # # def get_customer_balance(customer_phone):
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         if not store_id:
# # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # #         set_store_database(store_id)
# # # # # # # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # # # # # # #         balance = 0
# # # # # # # #         for transaction in transactions:
# # # # # # # #             if transaction["type"] == "credit":
# # # # # # # #                 balance += float(transaction["amount"])
# # # # # # # #             else:  # debit
# # # # # # # #                 balance -= float(transaction["amount"])
        
# # # # # # # #         return jsonify({"balance": balance}), 200
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error fetching customer balance:", str(e))
# # # # # # # #         print(traceback.format_exc())
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # @app.route("/api/send-email", methods=["POST"])
# # # # # # # # def send_email():
# # # # # # # #     try:
# # # # # # # #         data = request.json
# # # # # # # #         to_email = data.get("to")
# # # # # # # #         subject = data.get("subject")
# # # # # # # #         html_content = data.get("html")

# # # # # # # #         if not to_email or not subject or not html_content:
# # # # # # # #             return jsonify({"error": "Missing required fields"}), 400

# # # # # # # #         smtp_server = "smtp.gmail.com"
# # # # # # # #         smtp_port = 587
# # # # # # # #         smtp_username = "noreplyretailstore123@gmail.com"
# # # # # # # #         smtp_password = "mzfy vtui vepc tcyc"

# # # # # # # #         msg = MIMEMultipart()
# # # # # # # #         msg["From"] = smtp_username
# # # # # # # #         msg["To"] = to_email
# # # # # # # #         msg["Subject"] = subject
# # # # # # # #         msg.attach(MIMEText(html_content, "html"))

# # # # # # # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # # # # # # #             server.starttls()
# # # # # # # #             server.login(smtp_username, smtp_password)
# # # # # # # #             server.sendmail(smtp_username, to_email, msg.as_string())

# # # # # # # #         return jsonify({"message": "Email sent successfully"}), 200
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error sending email:", str(e))
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # # # # # def process_payment():
# # # # # # # #     try:
# # # # # # # #         store_id = request.headers.get("storeId")
# # # # # # # #         if not store_id:
# # # # # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # # # # #         set_store_database(store_id)
# # # # # # # #         data = request.json
# # # # # # # #         customer_phone = data.get("customerPhone")
# # # # # # # #         amount = data.get("amount")
# # # # # # # #         transaction_type = data.get("type")
# # # # # # # #         notes = data.get("notes", "")

# # # # # # # #         if not customer_phone or not amount or not transaction_type:
# # # # # # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # # # # # #         try:
# # # # # # # #             amount = float(amount)
# # # # # # # #             if amount <= 0:
# # # # # # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # # # # # #         except ValueError:
# # # # # # # #             return jsonify({"error": "Invalid amount"}), 400

# # # # # # # #         transaction = {
# # # # # # # #             "store_id": store_id,
# # # # # # # #             "customer_phone": customer_phone,
# # # # # # # #             "type": transaction_type,
# # # # # # # #             "amount": amount,
# # # # # # # #             "notes": notes,
# # # # # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # # # # #         }

# # # # # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # # # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # # # # # #     except Exception as e:
# # # # # # # #         print("Error processing payment:", str(e))
# # # # # # # #         print(traceback.format_exc())
# # # # # # # #         return jsonify({"error": str(e)}), 500

# # # # # # # # if __name__ == "__main__":
# # # # # # # #     app.run(debug=True, port=5002)

# # # # # from flask import Flask, request, jsonify
# # # # # from flask_pymongo import PyMongo
# # # # # from bson import ObjectId
# # # # # from datetime import datetime
# # # # # from flask_cors import CORS
# # # # # import traceback
# # # # # import smtplib
# # # # # from email.mime.text import MIMEText
# # # # # from email.mime.multipart import MIMEMultipart

# # # # # app = Flask(__name__)
# # # # # CORS(app)

# # # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # # mongo = PyMongo(app)

# # # # # def set_store_database(store_id):
# # # # #     """Set the database dynamically based on the store ID."""
# # # # #     if not store_id:
# # # # #         raise ValueError("Store ID is required.")
# # # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
# # # # #     mongo.init_app(app)

# # # # # @app.route("/api/products", methods=["GET"])
# # # # # def get_products():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         set_store_database(store_id)
# # # # #         products_collection = mongo.db.products
# # # # #         products = []
# # # # #         for product in products_collection.find():
# # # # #             products.append({
# # # # #                 "id": str(product["_id"]),
# # # # #                 "product_name": product["product_name"],
# # # # #                 "sale_price": float(product["sale_price"]),
# # # # #                 "quantity": int(product["quantity"]),
# # # # #                 "barcode": product.get("barcode", "")
# # # # #             })
# # # # #         return jsonify(products)
# # # # #     except Exception as e:
# # # # #         print("Error fetching products:", str(e))
# # # # #         print(traceback.format_exc())
# # # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # # def generate_bill():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         user_id = request.headers.get("userId")
# # # # #         user_id = int(user_id) if user_id else None
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         set_store_database(store_id)
# # # # #         billing_data = request.json
# # # # #         products_to_bill = billing_data.get("products", [])
# # # # #         customer_name = billing_data.get("customerName", "")
# # # # #         customer_phone = billing_data.get("customerPhone", "")
# # # # #         customer_email = billing_data.get("customerEmail", "")
# # # # #         payment_status = billing_data.get("paymentStatus", "paid")

# # # # #         if not products_to_bill:
# # # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # # #         products_collection = mongo.db.products
# # # # #         sales_collection = mongo.db.sales

# # # # #         # Get the total number of sales to determine the next serial number
# # # # #         sales_count = sales_collection.count_documents({})
# # # # #         new_serial_number = sales_count + 1  # e.g., 10 if there are 9 sales

# # # # #         bill_total = 0
# # # # #         billed_products = []

# # # # #         for product in products_to_bill:
# # # # #             try:
# # # # #                 product_id = ObjectId(product["id"])
# # # # #             except Exception:
# # # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # # #             quantity_to_bill = int(product["quantity"])
# # # # #             db_product = products_collection.find_one({"_id": product_id})
# # # # #             if not db_product:
# # # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # # #             db_product_quantity = int(db_product["quantity"])
# # # # #             if db_product_quantity < quantity_to_bill:
# # # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # # #             sale_price = float(db_product["sale_price"])
# # # # #             total_price = sale_price * quantity_to_bill
# # # # #             bill_total += total_price

# # # # #             billed_products.append({
# # # # #                 "name": db_product["product_name"],
# # # # #                 "quantity": quantity_to_bill,
# # # # #                 "unit_price": sale_price,
# # # # #                 "total_price": total_price,
# # # # #                 "barcode": db_product.get("barcode", "")
# # # # #             })

# # # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # # #             update_result = products_collection.update_one(
# # # # #                 {"_id": product_id},
# # # # #                 {"$set": {"quantity": new_quantity}}
# # # # #             )

# # # # #             if update_result.matched_count == 0:
# # # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # # #         sale_record = {
# # # # #             "serialNumber": new_serial_number,
# # # # #             "user_id": str(user_id) if user_id else None,
# # # # #             "store_id": store_id,
# # # # #             "products": billed_products,
# # # # #             "total_amount": bill_total,
# # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # #             "customer_name": customer_name,
# # # # #             "customer_phone": customer_phone,
# # # # #             "customer_email": customer_email,
# # # # #             "payment_status": payment_status,
# # # # #         }

# # # # #         sales_collection.insert_one(sale_record)

# # # # #         if payment_status == "unpaid":
# # # # #             khatabook_transaction = {
# # # # #                 "store_id": store_id,
# # # # #                 "customer_phone": customer_phone,
# # # # #                 "type": "debit",
# # # # #                 "amount": bill_total,
# # # # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # #                 "notes": f"Unpaid bill - Serial {new_serial_number}",
# # # # #             }
# # # # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # # # #         bill_summary = {
# # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # #             "products": billed_products,
# # # # #             "total_amount": bill_total,
# # # # #             "serialNumber": new_serial_number
# # # # #         }

# # # # #         return jsonify(bill_summary), 201
# # # # #     except Exception as e:
# # # # #         print("Error generating bill:", str(e))
# # # # #         print(traceback.format_exc())
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route("/api/khatabook/transactions", methods=["GET"])
# # # # # def get_transactions():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         customer_phone = request.args.get("customerPhone")

# # # # #         if not store_id or not customer_phone:
# # # # #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# # # # #         set_store_database(store_id)
# # # # #         transactions = list(mongo.db.khatabook.find(
# # # # #             {"store_id": store_id, "customer_phone": customer_phone},
# # # # #             {"_id": 0}
# # # # #         ))

# # # # #         return jsonify({"transactions": transactions}), 200
# # # # #     except Exception as e:
# # # # #         print("Error fetching transactions:", str(e))
# # # # #         print(traceback.format_exc())
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # # # def add_khatabook_transaction():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         set_store_database(store_id)
# # # # #         data = request.json
# # # # #         customer_phone = data.get("customerPhone")
# # # # #         transaction_type = data.get("type")
# # # # #         amount = data.get("amount")
# # # # #         notes = data.get("notes", "")

# # # # #         transaction = {
# # # # #             "store_id": store_id,
# # # # #             "customer_phone": customer_phone,
# # # # #             "type": transaction_type,
# # # # #             "amount": amount,
# # # # #             "notes": notes,
# # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # #         }

# # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # #         return jsonify({"message": "Transaction added successfully"}), 201
# # # # #     except Exception as e:
# # # # #         print("Error adding transaction:", str(e))
# # # # #         print(traceback.format_exc())
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # # # def get_customer_balance(customer_phone):
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         set_store_database(store_id)
# # # # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # # # #         balance = 0
# # # # #         for transaction in transactions:
# # # # #             if transaction["type"] == "credit":
# # # # #                 balance += float(transaction["amount"])
# # # # #             else:  # debit
# # # # #                 balance -= float(transaction["amount"])
        
# # # # #         return jsonify({"balance": balance}), 200
# # # # #     except Exception as e:
# # # # #         print("Error fetching customer balance:", str(e))
# # # # #         print(traceback.format_exc())
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route("/api/send-email", methods=["POST"])
# # # # # def send_email():
# # # # #     try:
# # # # #         data = request.json
# # # # #         to_email = data.get("to")
# # # # #         subject = data.get("subject")
# # # # #         html_content = data.get("html")

# # # # #         if not to_email or not subject or not html_content:
# # # # #             return jsonify({"error": "Missing required fields"}), 400

# # # # #         smtp_server = "smtp.gmail.com"
# # # # #         smtp_port = 587
# # # # #         smtp_username = "noreplyretailstore123@gmail.com"
# # # # #         smtp_password = "mzfy vtui vepc tcyc"

# # # # #         msg = MIMEMultipart()
# # # # #         msg["From"] = smtp_username
# # # # #         msg["To"] = to_email
# # # # #         msg["Subject"] = subject
# # # # #         msg.attach(MIMEText(html_content, "html"))

# # # # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # # # #             server.starttls()
# # # # #             server.login(smtp_username, smtp_password)
# # # # #             server.sendmail(smtp_username, to_email, msg.as_string())

# # # # #         return jsonify({"message": "Email sent successfully"}), 200
# # # # #     except Exception as e:
# # # # #         print("Error sending email:", str(e))
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # # def process_payment():
# # # # #     try:
# # # # #         store_id = request.headers.get("storeId")
# # # # #         if not store_id:
# # # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # # #         set_store_database(store_id)
# # # # #         data = request.json
# # # # #         customer_phone = data.get("customerPhone")
# # # # #         amount = data.get("amount")
# # # # #         transaction_type = data.get("type")
# # # # #         notes = data.get("notes", "")

# # # # #         if not customer_phone or not amount or not transaction_type:
# # # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # # #         try:
# # # # #             amount = float(amount)
# # # # #             if amount <= 0:
# # # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # # #         except ValueError:
# # # # #             return jsonify({"error": "Invalid amount"}), 400

# # # # #         transaction = {
# # # # #             "store_id": store_id,
# # # # #             "customer_phone": customer_phone,
# # # # #             "type": transaction_type,
# # # # #             "amount": amount,
# # # # #             "notes": notes,
# # # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # # #         }

# # # # #         mongo.db.khatabook.insert_one(transaction)
# # # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # # #     except Exception as e:
# # # # #         print("Error processing payment:", str(e))
# # # # #         print(traceback.format_exc())
# # # # #         return jsonify({"error": str(e)}), 500

# # # # # if __name__ == "__main__":
# # # # #     app.run(debug=True, port=5002)
# # # # from flask import Flask, request, jsonify
# # # # from flask_pymongo import PyMongo
# # # # from bson import ObjectId
# # # # from datetime import datetime
# # # # from flask_cors import CORS
# # # # import traceback
# # # # import smtplib
# # # # from email.mime.text import MIMEText
# # # # from email.mime.multipart import MIMEMultipart

# # # # app = Flask(__name__)
# # # # CORS(app)

# # # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # # mongo = PyMongo(app)

# # # # def set_store_database(store_id):
# # # #     """Set the database dynamically based on the store ID."""
# # # #     if not store_id:
# # # #         raise ValueError("Store ID is required.")
# # # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
# # # #     mongo.init_app(app)

# # # # @app.route("/api/products", methods=["GET"])
# # # # def get_products():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         set_store_database(store_id)
# # # #         products_collection = mongo.db.products
# # # #         products = []
# # # #         for product in products_collection.find():
# # # #             products.append({
# # # #                 "id": str(product["_id"]),
# # # #                 "product_name": product["product_name"],
# # # #                 "sale_price": float(product["sale_price"]),
# # # #                 "quantity": int(product["quantity"]),
# # # #                 "barcode": product.get("barcode", "")
# # # #             })
# # # #         return jsonify(products)
# # # #     except Exception as e:
# # # #         print("Error fetching products:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # # @app.route("/api/generate-bill", methods=["POST"])
# # # # def generate_bill():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         user_id = request.headers.get("userId")
# # # #         user_id = int(user_id) if user_id else None
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         set_store_database(store_id)
# # # #         billing_data = request.json
# # # #         products_to_bill = billing_data.get("products", [])
# # # #         customer_name = billing_data.get("customerName", "")
# # # #         customer_phone = billing_data.get("customerPhone", "")
# # # #         customer_email = billing_data.get("customerEmail", "")
# # # #         payment_status = billing_data.get("paymentStatus", "paid")

# # # #         if not products_to_bill:
# # # #             return jsonify({"error": "No products provided in the request"}), 400

# # # #         products_collection = mongo.db.products
# # # #         sales_collection = mongo.db.sales

# # # #         # Get the total number of sales to determine the next serial number
# # # #         sales_count = sales_collection.count_documents({})
# # # #         new_serial_number = sales_count + 1

# # # #         bill_total = 0
# # # #         billed_products = []

# # # #         for product in products_to_bill:
# # # #             try:
# # # #                 product_id = ObjectId(product["id"])
# # # #             except Exception:
# # # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # # #             quantity_to_bill = int(product["quantity"])
# # # #             db_product = products_collection.find_one({"_id": product_id})
# # # #             if not db_product:
# # # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # # #             db_product_quantity = int(db_product["quantity"])
# # # #             if db_product_quantity < quantity_to_bill:
# # # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # # #             sale_price = float(db_product["sale_price"])
# # # #             total_price = sale_price * quantity_to_bill
# # # #             bill_total += total_price

# # # #             billed_products.append({
# # # #                 "name": db_product["product_name"],
# # # #                 "quantity": quantity_to_bill,
# # # #                 "unit_price": sale_price,
# # # #                 "total_price": total_price,
# # # #                 "barcode": db_product.get("barcode", "")
# # # #             })

# # # #             new_quantity = db_product_quantity - quantity_to_bill
# # # #             update_result = products_collection.update_one(
# # # #                 {"_id": product_id},
# # # #                 {"$set": {"quantity": new_quantity}}
# # # #             )

# # # #             if update_result.matched_count == 0:
# # # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # # #         sale_record = {
# # # #             "serialNumber": new_serial_number,
# # # #             "user_id": str(user_id) if user_id else None,
# # # #             "store_id": store_id,
# # # #             "products": billed_products,
# # # #             "total_amount": bill_total,
# # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # #             "customer_name": customer_name,
# # # #             "customer_phone": customer_phone,
# # # #             "customer_email": customer_email,
# # # #             "payment_status": payment_status,
# # # #         }

# # # #         sales_collection.insert_one(sale_record)

# # # #         if payment_status == "unpaid":
# # # #             khatabook_transaction = {
# # # #                 "store_id": store_id,
# # # #                 "customer_phone": customer_phone,
# # # #                 "type": "debit",
# # # #                 "amount": bill_total,
# # # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # #                 "notes": f"Unpaid bill - Serial {new_serial_number}",
# # # #             }
# # # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # # #         bill_summary = {
# # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # #             "products": billed_products,
# # # #             "total_amount": bill_total,
# # # #             "serialNumber": new_serial_number
# # # #         }

# # # #         # Send email to customer if email is provided
# # # #         if customer_email:
# # # #             send_bill_email(customer_email, store_id, bill_summary)

# # # #         return jsonify(bill_summary), 201
# # # #     except Exception as e:
# # # #         print("Error generating bill:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": str(e)}), 500

# # # # def send_bill_email(to_email, store_id, bill_summary):
# # # #     """Send bill details via email."""
# # # #     try:
# # # #         smtp_server = "smtp.gmail.com"
# # # #         smtp_port = 587
# # # #         smtp_username = "noreplyretailstore123@gmail.com"
# # # #         smtp_password = "mzfy vtui vepc tcyc"  # App-specific password

# # # #         subject = f"Receipt from Store {store_id} - Serial {bill_summary['serialNumber']}"
# # # #         html_content = f"""
# # # #         <html>
# # # #           <body style="font-family: Arial, sans-serif; line-height: 1.6;">
# # # #             <h2 style="color: #00bcd4;">Thank You for Your Purchase!</h2>
# # # #             <p><strong>Date:</strong> {bill_summary['date']}</p>
# # # #             <p><strong>Serial Number:</strong> {bill_summary['serialNumber']}</p>
# # # #             <h3 style="color: #00796b;">Bill Details</h3>
# # # #             <table style="width: 100%; border-collapse: collapse;">
# # # #               <thead>
# # # #                 <tr style="background-color: #00bcd4; color: white;">
# # # #                   <th style="padding: 10px;">Product Name</th>
# # # #                   <th style="padding: 10px;">Quantity</th>
# # # #                   <th style="padding: 10px;">Unit Price</th>
# # # #                   <th style="padding: 10px;">Total</th>
# # # #                 </tr>
# # # #               </thead>
# # # #               <tbody>
# # # #                 {"".join(
# # # #                     f"<tr style='background-color: #fafafa;'><td style='padding: 10px;'>{p['name']}</td>"
# # # #                     f"<td style='padding: 10px;'>{p['quantity']}</td>"
# # # #                     f"<td style='padding: 10px;'>{p['unit_price']:.2f}</td>"
# # # #                     f"<td style='padding: 10px;'>{p['total_price']:.2f}</td></tr>"
# # # #                     for p in bill_summary['products']
# # # #                 )}
# # # #                 <tr style="background-color: #00bcd4; color: white; font-weight: bold;">
# # # #                   <td colspan="3" style="padding: 10px;">Total Amount</td>
# # # #                   <td style="padding: 10px;">{bill_summary['total_amount']:.2f}</td>
# # # #                 </tr>
# # # #               </tbody>
# # # #             </table>
# # # #             <p style="margin-top: 20px;">We appreciate your business!</p>
# # # #           </body>
# # # #         </html>
# # # #         """

# # # #         msg = MIMEMultipart()
# # # #         msg["From"] = smtp_username
# # # #         msg["To"] = to_email
# # # #         msg["Subject"] = subject
# # # #         msg.attach(MIMEText(html_content, "html"))

# # # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # # #             server.starttls()
# # # #             server.login(smtp_username, smtp_password)
# # # #             server.sendmail(smtp_username, to_email, msg.as_string())
# # # #         print(f"Email sent successfully to {to_email}")
# # # #     except Exception as e:
# # # #         print("Error sending email:", str(e))
# # # #         print(traceback.format_exc())

# # # # @app.route("/api/khatabook/transactions", methods=["GET"])
# # # # def get_transactions():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         customer_phone = request.args.get("customerPhone")

# # # #         if not store_id or not customer_phone:
# # # #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# # # #         set_store_database(store_id)
# # # #         transactions = list(mongo.db.khatabook.find(
# # # #             {"store_id": store_id, "customer_phone": customer_phone},
# # # #             {"_id": 0}
# # # #         ))

# # # #         return jsonify({"transactions": transactions}), 200
# # # #     except Exception as e:
# # # #         print("Error fetching transactions:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # # def add_khatabook_transaction():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         set_store_database(store_id)
# # # #         data = request.json
# # # #         customer_phone = data.get("customerPhone")
# # # #         transaction_type = data.get("type")
# # # #         amount = data.get("amount")
# # # #         notes = data.get("notes", "")

# # # #         transaction = {
# # # #             "store_id": store_id,
# # # #             "customer_phone": customer_phone,
# # # #             "type": transaction_type,
# # # #             "amount": amount,
# # # #             "notes": notes,
# # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # #         }

# # # #         mongo.db.khatabook.insert_one(transaction)
# # # #         return jsonify({"message": "Transaction added successfully"}), 201
# # # #     except Exception as e:
# # # #         print("Error adding transaction:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # # def get_customer_balance(customer_phone):
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         set_store_database(store_id)
# # # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # # #         balance = 0
# # # #         for transaction in transactions:
# # # #             if transaction["type"] == "credit":
# # # #                 balance += float(transaction["amount"])
# # # #             else:  # debit
# # # #                 balance -= float(transaction["amount"])
        
# # # #         return jsonify({"balance": balance}), 200
# # # #     except Exception as e:
# # # #         print("Error fetching customer balance:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route("/api/send-email", methods=["POST"])
# # # # def send_email():
# # # #     try:
# # # #         data = request.json
# # # #         to_email = data.get("to")
# # # #         subject = data.get("subject")
# # # #         html_content = data.get("html")

# # # #         if not to_email or not subject or not html_content:
# # # #             return jsonify({"error": "Missing required fields"}), 400

# # # #         smtp_server = "smtp.gmail.com"
# # # #         smtp_port = 587
# # # #         smtp_username = "noreplyretailstore123@gmail.com"
# # # #         smtp_password = "mzfy vtui vepc tcyc"

# # # #         msg = MIMEMultipart()
# # # #         msg["From"] = smtp_username
# # # #         msg["To"] = to_email
# # # #         msg["Subject"] = subject
# # # #         msg.attach(MIMEText(html_content, "html"))

# # # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # # #             server.starttls()
# # # #             server.login(smtp_username, smtp_password)
# # # #             server.sendmail(smtp_username, to_email, msg.as_string())

# # # #         return jsonify({"message": "Email sent successfully"}), 200
# # # #     except Exception as e:
# # # #         print("Error sending email:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": str(e)}), 500

# # # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # # def process_payment():
# # # #     try:
# # # #         store_id = request.headers.get("storeId")
# # # #         if not store_id:
# # # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # # #         set_store_database(store_id)
# # # #         data = request.json
# # # #         customer_phone = data.get("customerPhone")
# # # #         amount = data.get("amount")
# # # #         transaction_type = data.get("type")
# # # #         notes = data.get("notes", "")

# # # #         if not customer_phone or not amount or not transaction_type:
# # # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # # #         try:
# # # #             amount = float(amount)
# # # #             if amount <= 0:
# # # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # # #         except ValueError:
# # # #             return jsonify({"error": "Invalid amount"}), 400

# # # #         transaction = {
# # # #             "store_id": store_id,
# # # #             "customer_phone": customer_phone,
# # # #             "type": transaction_type,
# # # #             "amount": amount,
# # # #             "notes": notes,
# # # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # # #         }

# # # #         mongo.db.khatabook.insert_one(transaction)
# # # #         return jsonify({"message": "Payment processed successfully"}), 200
# # # #     except Exception as e:
# # # #         print("Error processing payment:", str(e))
# # # #         print(traceback.format_exc())
# # # #         return jsonify({"error": str(e)}), 500

# # # # if __name__ == "__main__":
# # # #     app.run(debug=True, port=5002)
# # # from flask import Flask, request, jsonify
# # # from flask_pymongo import PyMongo
# # # from bson import ObjectId
# # # from datetime import datetime
# # # from flask_cors import CORS
# # # import traceback
# # # import smtplib
# # # from email.mime.text import MIMEText
# # # from email.mime.multipart import MIMEMultipart

# # # app = Flask(__name__)
# # # CORS(app)

# # # # Default MongoDB URI (fallback to ensure app initializes properly)
# # # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # # mongo = PyMongo(app)

# # # def set_store_database(store_id):
# # #     """Set the database dynamically based on the store ID."""
# # #     if not store_id:
# # #         raise ValueError("Store ID is required.")
# # #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
# # #     mongo.init_app(app)

# # # @app.route("/api/products", methods=["GET"])
# # # def get_products():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         set_store_database(store_id)
# # #         products_collection = mongo.db.products
# # #         products = []
# # #         for product in products_collection.find():
# # #             products.append({
# # #                 "id": str(product["_id"]),
# # #                 "product_name": product["product_name"],
# # #                 "sale_price": float(product["sale_price"]),
# # #                 "quantity": int(product["quantity"]),
# # #                 "barcode": product.get("barcode", "")
# # #             })
# # #         return jsonify(products)
# # #     except Exception as e:
# # #         print("Error fetching products:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": "Unable to fetch products"}), 500

# # # @app.route("/api/generate-bill", methods=["POST"])
# # # def generate_bill():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         user_id = request.headers.get("userId")
# # #         user_id = int(user_id) if user_id else None
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         set_store_database(store_id)
# # #         billing_data = request.json
# # #         products_to_bill = billing_data.get("products", [])
# # #         customer_name = billing_data.get("customerName", "")
# # #         customer_phone = billing_data.get("customerPhone", "")
# # #         customer_email = billing_data.get("customerEmail", "")
# # #         payment_status = billing_data.get("paymentStatus", "paid")

# # #         if not products_to_bill:
# # #             return jsonify({"error": "No products provided in the request"}), 400

# # #         products_collection = mongo.db.products
# # #         sales_collection = mongo.db.sales

# # #         # Get the total number of sales to determine the next serial number
# # #         sales_count = sales_collection.count_documents({})
# # #         new_serial_number = sales_count + 1

# # #         bill_total = 0
# # #         billed_products = []

# # #         for product in products_to_bill:
# # #             try:
# # #                 product_id = ObjectId(product["id"])
# # #             except Exception:
# # #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# # #             quantity_to_bill = int(product["quantity"])
# # #             db_product = products_collection.find_one({"_id": product_id})
# # #             if not db_product:
# # #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# # #             db_product_quantity = int(db_product["quantity"])
# # #             if db_product_quantity < quantity_to_bill:
# # #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# # #             sale_price = float(db_product["sale_price"])
# # #             total_price = sale_price * quantity_to_bill
# # #             bill_total += total_price

# # #             billed_products.append({
# # #                 "name": db_product["product_name"],
# # #                 "quantity": quantity_to_bill,
# # #                 "unit_price": sale_price,
# # #                 "total_price": total_price,
# # #                 "barcode": db_product.get("barcode", "")
# # #             })

# # #             new_quantity = db_product_quantity - quantity_to_bill
# # #             update_result = products_collection.update_one(
# # #                 {"_id": product_id},
# # #                 {"$set": {"quantity": new_quantity}}
# # #             )

# # #             if update_result.matched_count == 0:
# # #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# # #         sale_record = {
# # #             "serialNumber": new_serial_number,
# # #             "user_id": str(user_id) if user_id else None,
# # #             "store_id": store_id,
# # #             "products": billed_products,
# # #             "total_amount": bill_total,
# # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # #             "customer_name": customer_name,
# # #             "customer_phone": customer_phone,
# # #             "customer_email": customer_email,
# # #             "payment_status": payment_status,
# # #         }

# # #         sales_collection.insert_one(sale_record)

# # #         if payment_status == "unpaid":
# # #             khatabook_transaction = {
# # #                 "store_id": store_id,
# # #                 "customer_phone": customer_phone,
# # #                 "type": "debit",
# # #                 "amount": bill_total,
# # #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # #                 "notes": f"Unpaid bill - Serial {new_serial_number}",
# # #             }
# # #             mongo.db.khatabook.insert_one(khatabook_transaction)

# # #         bill_summary = {
# # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # #             "products": billed_products,
# # #             "total_amount": bill_total,
# # #             "serialNumber": new_serial_number
# # #         }

# # #         # Send email to customer if email is provided
# # #         if customer_email:
# # #             send_bill_email(customer_email, store_id, bill_summary, billing_data.get("storeName", "Unknown Store"),
# # #                             billing_data.get("storeAddress", "N/A"), billing_data.get("phoneNumber", "N/A"),
# # #                             billing_data.get("email", "N/A"))

# # #         return jsonify(bill_summary), 201
# # #     except Exception as e:
# # #         print("Error generating bill:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500

# # # def send_bill_email(to_email, store_id, bill_summary, store_name, store_address, phone_number, store_email):
# # #     """Send bill details via email with store information."""
# # #     try:
# # #         smtp_server = "smtp.gmail.com"
# # #         smtp_port = 587
# # #         smtp_username = "noreplyretailstore123@gmail.com"
# # #         smtp_password = "mzfy vtui vepc tcyc"  # App-specific password

# # #         subject = f"Receipt from {store_name} - Serial {bill_summary['serialNumber']}"
# # #         html_content = f"""
# # #         <html>
# # #           <body style="font-family: Arial, sans-serif; line-height: 1.6;">
# # #             <h2 style="color: #00bcd4;">Thank You for Your Purchase at {store_name}!</h2>
# # #             <p><strong>Date:</strong> {bill_summary['date']}</p>
# # #             <p><strong>Serial Number:</strong> {bill_summary['serialNumber']}</p>
# # #             <h3 style="color: #00796b;">Store Details</h3>
# # #             <p><strong>Store Name:</strong> {store_name}</p>
# # #             <p><strong>Store Address:</strong> {store_address}</p>
# # #             <p><strong>Phone Number:</strong> {phone_number}</p>
# # #             <p><strong>Email:</strong> {store_email}</p>
# # #             <h3 style="color: #00796b;">Bill Details</h3>
# # #             <table style="width: 100%; border-collapse: collapse;">
# # #               <thead>
# # #                 <tr style="background-color: #00bcd4; color: white;">
# # #                   <th style="padding: 10px;">Product Name</th>
# # #                   <th style="padding: 10px;">Quantity</th>
# # #                   <th style="padding: 10px;">Unit Price</th>
# # #                   <th style="padding: 10px;">Total</th>
# # #                 </tr>
# # #               </thead>
# # #               <tbody>
# # #                 {"".join(
# # #                     f"<tr style='background-color: #fafafa;'><td style='padding: 10px;'>{p['name']}</td>"
# # #                     f"<td style='padding: 10px;'>{p['quantity']}</td>"
# # #                     f"<td style='padding: 10px;'>{p['unit_price']:.2f}</td>"
# # #                     f"<td style='padding: 10px;'>{p['total_price']:.2f}</td></tr>"
# # #                     for p in bill_summary['products']
# # #                 )}
# # #                 <tr style="background-color: #00bcd4; color: white; font-weight: bold;">
# # #                   <td colspan="3" style="padding: 10px;">Total Amount</td>
# # #                   <td style="padding: 10px;">{bill_summary['total_amount']:.2f}</td>
# # #                 </tr>
# # #               </tbody>
# # #             </table>
# # #             <p style="margin-top: 20px;">We appreciate your business!</p>
# # #           </body>
# # #         </html>
# # #         """

# # #         msg = MIMEMultipart()
# # #         msg["From"] = smtp_username
# # #         msg["To"] = to_email
# # #         msg["Subject"] = subject
# # #         msg.attach(MIMEText(html_content, "html"))

# # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # #             server.starttls()
# # #             server.login(smtp_username, smtp_password)
# # #             server.sendmail(smtp_username, to_email, msg.as_string())
# # #         print(f"Email sent successfully to {to_email}")
# # #     except Exception as e:
# # #         print("Error sending email:", str(e))
# # #         print(traceback.format_exc())

# # # @app.route("/api/khatabook/transactions", methods=["GET"])
# # # def get_transactions():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         customer_phone = request.args.get("customerPhone")

# # #         if not store_id or not customer_phone:
# # #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# # #         set_store_database(store_id)
# # #         transactions = list(mongo.db.khatabook.find(
# # #             {"store_id": store_id, "customer_phone": customer_phone},
# # #             {"_id": 0}
# # #         ))

# # #         return jsonify({"transactions": transactions}), 200
# # #     except Exception as e:
# # #         print("Error fetching transactions:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route("/api/khatabook/transactions", methods=["POST"])
# # # def add_khatabook_transaction():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         set_store_database(store_id)
# # #         data = request.json
# # #         customer_phone = data.get("customerPhone")
# # #         transaction_type = data.get("type")
# # #         amount = data.get("amount")
# # #         notes = data.get("notes", "")

# # #         transaction = {
# # #             "store_id": store_id,
# # #             "customer_phone": customer_phone,
# # #             "type": transaction_type,
# # #             "amount": amount,
# # #             "notes": notes,
# # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # #         }

# # #         mongo.db.khatabook.insert_one(transaction)
# # #         return jsonify({"message": "Transaction added successfully"}), 201
# # #     except Exception as e:
# # #         print("Error adding transaction:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # # def get_customer_balance(customer_phone):
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         set_store_database(store_id)
# # #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# # #         balance = 0
# # #         for transaction in transactions:
# # #             if transaction["type"] == "credit":
# # #                 balance += float(transaction["amount"])
# # #             else:  # debit
# # #                 balance -= float(transaction["amount"])
        
# # #         return jsonify({"balance": balance}), 200
# # #     except Exception as e:
# # #         print("Error fetching customer balance:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route("/api/send-email", methods=["POST"])
# # # def send_email():
# # #     try:
# # #         data = request.json
# # #         to_email = data.get("to")
# # #         subject = data.get("subject")
# # #         html_content = data.get("html")

# # #         if not to_email or not subject or not html_content:
# # #             return jsonify({"error": "Missing required fields"}), 400

# # #         smtp_server = "smtp.gmail.com"
# # #         smtp_port = 587
# # #         smtp_username = "noreplyretailstore123@gmail.com"
# # #         smtp_password = "mzfy vtui vepc tcyc"

# # #         msg = MIMEMultipart()
# # #         msg["From"] = smtp_username
# # #         msg["To"] = to_email
# # #         msg["Subject"] = subject
# # #         msg.attach(MIMEText(html_content, "html"))

# # #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# # #             server.starttls()
# # #             server.login(smtp_username, smtp_password)
# # #             server.sendmail(smtp_username, to_email, msg.as_string())

# # #         return jsonify({"message": "Email sent successfully"}), 200
# # #     except Exception as e:
# # #         print("Error sending email:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route("/api/khatabook/payment", methods=["POST"])
# # # def process_payment():
# # #     try:
# # #         store_id = request.headers.get("storeId")
# # #         if not store_id:
# # #             return jsonify({"error": "Store ID is required in headers"}), 400

# # #         set_store_database(store_id)
# # #         data = request.json
# # #         customer_phone = data.get("customerPhone")
# # #         amount = data.get("amount")
# # #         transaction_type = data.get("type")
# # #         notes = data.get("notes", "")

# # #         if not customer_phone or not amount or not transaction_type:
# # #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# # #         try:
# # #             amount = float(amount)
# # #             if amount <= 0:
# # #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# # #         except ValueError:
# # #             return jsonify({"error": "Invalid amount"}), 400

# # #         transaction = {
# # #             "store_id": store_id,
# # #             "customer_phone": customer_phone,
# # #             "type": transaction_type,
# # #             "amount": amount,
# # #             "notes": notes,
# # #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# # #         }

# # #         mongo.db.khatabook.insert_one(transaction)
# # #         return jsonify({"message": "Payment processed successfully"}), 200
# # #     except Exception as e:
# # #         print("Error processing payment:", str(e))
# # #         print(traceback.format_exc())
# # #         return jsonify({"error": str(e)}), 500

# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5002)
# # from flask import Flask, request, jsonify
# # from flask_pymongo import PyMongo
# # from bson import ObjectId
# # from datetime import datetime
# # from flask_cors import CORS
# # import traceback
# # import smtplib
# # from email.mime.text import MIMEText
# # from email.mime.multipart import MIMEMultipart

# # app = Flask(__name__)
# # CORS(app)

# # # Default MongoDB URI (fallback to ensure app initializes properly)
# # app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# # mongo = PyMongo(app)

# # def set_store_database(store_id):
# #     """Set the database dynamically based on the store ID."""
# #     if not store_id:
# #         raise ValueError("Store ID is required.")
# #     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
# #     mongo.init_app(app)

# # @app.route("/api/products", methods=["GET"])
# # def get_products():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         set_store_database(store_id)
# #         products_collection = mongo.db.products
# #         products = []
# #         for product in products_collection.find():
# #             products.append({
# #                 "id": str(product["_id"]),
# #                 "product_name": product["product_name"],
# #                 "sale_price": float(product["sale_price"]),
# #                 "quantity": int(product["quantity"]),
# #                 "barcode": product.get("barcode", "")
# #             })
# #         return jsonify(products)
# #     except Exception as e:
# #         print("Error fetching products:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": "Unable to fetch products"}), 500

# # @app.route("/api/generate-bill", methods=["POST"])
# # def generate_bill():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         user_id = request.headers.get("userId")
# #         user_id = int(user_id) if user_id else None
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         set_store_database(store_id)
# #         billing_data = request.json
# #         products_to_bill = billing_data.get("products", [])
# #         customer_name = billing_data.get("customerName", "")
# #         customer_phone = billing_data.get("customerPhone", "")
# #         customer_email = billing_data.get("customerEmail", "")
# #         payment_status = billing_data.get("paymentStatus", "paid")
# #         store_name = billing_data.get("storeName", "Unknown Store")
# #         store_address = billing_data.get("storeAddress", "N/A")
# #         phone_number = billing_data.get("phoneNumber", "N/A")
# #         store_email = billing_data.get("email", "N/A")

# #         if not products_to_bill:
# #             return jsonify({"error": "No products provided in the request"}), 400

# #         products_collection = mongo.db.products
# #         sales_collection = mongo.db.sales

# #         # Get the total number of sales to determine the next serial number
# #         sales_count = sales_collection.count_documents({})
# #         new_serial_number = sales_count + 1

# #         bill_total = 0
# #         billed_products = []

# #         for product in products_to_bill:
# #             try:
# #                 product_id = ObjectId(product["id"])
# #             except Exception:
# #                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

# #             quantity_to_bill = int(product["quantity"])
# #             db_product = products_collection.find_one({"_id": product_id})
# #             if not db_product:
# #                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

# #             db_product_quantity = int(db_product["quantity"])
# #             if db_product_quantity < quantity_to_bill:
# #                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

# #             sale_price = float(db_product["sale_price"])
# #             total_price = sale_price * quantity_to_bill
# #             bill_total += total_price

# #             billed_products.append({
# #                 "name": db_product["product_name"],
# #                 "quantity": quantity_to_bill,
# #                 "unit_price": sale_price,
# #                 "total_price": total_price,
# #                 "barcode": db_product.get("barcode", "")
# #             })

# #             new_quantity = db_product_quantity - quantity_to_bill
# #             update_result = products_collection.update_one(
# #                 {"_id": product_id},
# #                 {"$set": {"quantity": new_quantity}}
# #             )

# #             if update_result.matched_count == 0:
# #                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

# #         sale_record = {
# #             "serialNumber": new_serial_number,
# #             "user_id": str(user_id) if user_id else None,
# #             "store_id": store_id,
# #             "products": billed_products,
# #             "total_amount": bill_total,
# #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# #             "customer_name": customer_name,
# #             "customer_phone": customer_phone,
# #             "customer_email": customer_email,
# #             "payment_status": payment_status,
# #         }

# #         sales_collection.insert_one(sale_record)

# #         if payment_status == "unpaid":
# #             khatabook_transaction = {
# #                 "store_id": store_id,
# #                 "customer_phone": customer_phone,
# #                 "type": "debit",
# #                 "amount": bill_total,
# #                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# #                 "notes": f"Unpaid bill - Serial {new_serial_number}",
# #             }
# #             mongo.db.khatabook.insert_one(khatabook_transaction)

# #         bill_summary = {
# #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# #             "products": billed_products,
# #             "total_amount": bill_total,
# #             "serialNumber": new_serial_number
# #         }

# #         # Send email to customer if email is provided (handled by frontend, so just return summary)
# #         return jsonify(bill_summary), 201
# #     except Exception as e:
# #         print("Error generating bill:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # @app.route("/api/send-email", methods=["POST"])
# # def send_email():
# #     try:
# #         data = request.json
# #         to_email = data.get("to")
# #         subject = data.get("subject")
# #         html_content = data.get("html")

# #         if not to_email or not subject or not html_content:
# #             return jsonify({"error": "Missing required fields"}), 400

# #         smtp_server = "smtp.gmail.com"
# #         smtp_port = 587
# #         smtp_username = "noreplyretailstore123@gmail.com"
# #         smtp_password = "mzfy vtui vepc tcyc"  # App-specific password

# #         msg = MIMEMultipart()
# #         msg["From"] = smtp_username
# #         msg["To"] = to_email
# #         msg["Subject"] = subject
# #         msg.attach(MIMEText(html_content, "html"))

# #         with smtplib.SMTP(smtp_server, smtp_port) as server:
# #             server.starttls()
# #             server.login(smtp_username, smtp_password)
# #             server.sendmail(smtp_username, to_email, msg.as_string())

# #         print(f"Email sent successfully to {to_email}")
# #         return jsonify({"message": "Email sent successfully"}), 200
# #     except Exception as e:
# #         print("Error sending email:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# # def get_customer_balance(customer_phone):
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         set_store_database(store_id)
# #         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
# #         balance = 0
# #         for transaction in transactions:
# #             if transaction["type"] == "credit":
# #                 balance += float(transaction["amount"])
# #             else:  # debit
# #                 balance -= float(transaction["amount"])
        
# #         return jsonify({"balance": balance}), 200
# #     except Exception as e:
# #         print("Error fetching customer balance:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # @app.route("/api/khatabook/transactions", methods=["GET"])
# # def get_transactions():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         customer_phone = request.args.get("customerPhone")

# #         if not store_id or not customer_phone:
# #             return jsonify({"error": "Store ID and customer phone are required"}), 400

# #         set_store_database(store_id)
# #         transactions = list(mongo.db.khatabook.find(
# #             {"store_id": store_id, "customer_phone": customer_phone},
# #             {"_id": 0}
# #         ))

# #         return jsonify({"transactions": transactions}), 200
# #     except Exception as e:
# #         print("Error fetching transactions:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # @app.route("/api/khatabook/transactions", methods=["POST"])
# # def add_khatabook_transaction():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         set_store_database(store_id)
# #         data = request.json
# #         customer_phone = data.get("customerPhone")
# #         transaction_type = data.get("type")
# #         amount = data.get("amount")
# #         notes = data.get("notes", "")

# #         transaction = {
# #             "store_id": store_id,
# #             "customer_phone": customer_phone,
# #             "type": transaction_type,
# #             "amount": amount,
# #             "notes": notes,
# #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# #         }

# #         mongo.db.khatabook.insert_one(transaction)
# #         return jsonify({"message": "Transaction added successfully"}), 201
# #     except Exception as e:
# #         print("Error adding transaction:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # @app.route("/api/khatabook/payment", methods=["POST"])
# # def process_payment():
# #     try:
# #         store_id = request.headers.get("storeId")
# #         if not store_id:
# #             return jsonify({"error": "Store ID is required in headers"}), 400

# #         set_store_database(store_id)
# #         data = request.json
# #         customer_phone = data.get("customerPhone")
# #         amount = data.get("amount")
# #         transaction_type = data.get("type")
# #         notes = data.get("notes", "")

# #         if not customer_phone or not amount or not transaction_type:
# #             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

# #         try:
# #             amount = float(amount)
# #             if amount <= 0:
# #                 return jsonify({"error": "Amount must be greater than 0"}), 400
# #         except ValueError:
# #             return jsonify({"error": "Invalid amount"}), 400

# #         transaction = {
# #             "store_id": store_id,
# #             "customer_phone": customer_phone,
# #             "type": transaction_type,
# #             "amount": amount,
# #             "notes": notes,
# #             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
# #         }

# #         mongo.db.khatabook.insert_one(transaction)
# #         return jsonify({"message": "Payment processed successfully"}), 200
# #     except Exception as e:
# #         print("Error processing payment:", str(e))
# #         print(traceback.format_exc())
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5002)
# from flask import Flask, request, jsonify
# from flask_pymongo import PyMongo
# from bson import ObjectId
# from datetime import datetime
# from flask_cors import CORS
# import traceback
# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart
# from email.mime.application import MIMEApplication
# from reportlab.lib.pagesizes import letter
# from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
# from reportlab.lib import colors
# from reportlab.lib.styles import getSampleStyleSheet
# import io

# app = Flask(__name__)
# CORS(app)

# # Default MongoDB URI (fallback to ensure app initializes properly)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
# mongo = PyMongo(app)

# def set_store_database(store_id):
#     """Set the database dynamically based on the store ID."""
#     if not store_id:
#         raise ValueError("Store ID is required.")
#     app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
#     mongo.init_app(app)

# @app.route("/api/products", methods=["GET"])
# def get_products():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         set_store_database(store_id)
#         products_collection = mongo.db.products
#         products = []
#         for product in products_collection.find():
#             products.append({
#                 "id": str(product["_id"]),
#                 "product_name": product["product_name"],
#                 "sale_price": float(product["sale_price"]),
#                 "quantity": int(product["quantity"]),
#                 "barcode": product.get("barcode", "")
#             })
#         return jsonify(products)
#     except Exception as e:
#         print("Error fetching products:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": "Unable to fetch products"}), 500

# @app.route("/api/generate-bill", methods=["POST"])
# def generate_bill():
#     try:
#         store_id = request.headers.get("storeId")
#         user_id = request.headers.get("userId")
#         user_id = int(user_id) if user_id else None
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         set_store_database(store_id)
#         billing_data = request.json
#         products_to_bill = billing_data.get("products", [])
#         customer_name = billing_data.get("customerName", "")
#         customer_phone = billing_data.get("customerPhone", "")
#         customer_email = billing_data.get("customerEmail", "")
#         payment_status = billing_data.get("paymentStatus", "paid")
#         store_name = billing_data.get("storeName", "Unknown Store")
#         store_address = billing_data.get("storeAddress", "N/A")
#         phone_number = billing_data.get("phoneNumber", "N/A")
#         store_email = billing_data.get("email", "N/A")

#         if not products_to_bill:
#             return jsonify({"error": "No products provided in the request"}), 400

#         products_collection = mongo.db.products
#         sales_collection = mongo.db.sales

#         # Get the total number of sales to determine the next serial number
#         sales_count = sales_collection.count_documents({})
#         new_serial_number = sales_count + 1

#         bill_total = 0
#         billed_products = []

#         for product in products_to_bill:
#             try:
#                 product_id = ObjectId(product["id"])
#             except Exception:
#                 return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

#             quantity_to_bill = int(product["quantity"])
#             db_product = products_collection.find_one({"_id": product_id})
#             if not db_product:
#                 return jsonify({"error": f"Product with ID {product_id} not found"}), 404

#             db_product_quantity = int(db_product["quantity"])
#             if db_product_quantity < quantity_to_bill:
#                 return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

#             sale_price = float(db_product["sale_price"])
#             total_price = sale_price * quantity_to_bill
#             bill_total += total_price

#             billed_products.append({
#                 "name": db_product["product_name"],
#                 "quantity": quantity_to_bill,
#                 "unit_price": sale_price,
#                 "total_price": total_price,
#                 "barcode": db_product.get("barcode", "")
#             })

#             new_quantity = db_product_quantity - quantity_to_bill
#             update_result = products_collection.update_one(
#                 {"_id": product_id},
#                 {"$set": {"quantity": new_quantity}}
#             )

#             if update_result.matched_count == 0:
#                 return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

#         sale_record = {
#             "serialNumber": new_serial_number,
#             "user_id": str(user_id) if user_id else None,
#             "store_id": store_id,
#             "products": billed_products,
#             "total_amount": bill_total,
#             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
#             "customer_name": customer_name,
#             "customer_phone": customer_phone,
#             "customer_email": customer_email,
#             "payment_status": payment_status,
#         }

#         sales_collection.insert_one(sale_record)

#         if payment_status == "unpaid":
#             khatabook_transaction = {
#                 "store_id": store_id,
#                 "customer_phone": customer_phone,
#                 "type": "debit",
#                 "amount": bill_total,
#                 "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
#                 "notes": f"Unpaid bill - Serial {new_serial_number}",
#             }
#             mongo.db.khatabook.insert_one(khatabook_transaction)

#         bill_summary = {
#             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
#             "products": billed_products,
#             "total_amount": bill_total,
#             "serialNumber": new_serial_number
#         }

#         return jsonify(bill_summary), 201
#     except Exception as e:
#         print("Error generating bill:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/send-pdf-bill", methods=["POST"])
# def send_pdf_bill():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         set_store_database(store_id)
#         bill_data = request.json
#         customer_email = bill_data.get("customerEmail")
#         if not customer_email:
#             return jsonify({"error": "Customer email is required"}), 400

#         store_name = bill_data.get("storeName", "Unknown Store")
#         store_address = bill_data.get("storeAddress", "N/A")
#         phone_number = bill_data.get("phoneNumber", "N/A")
#         store_email = bill_data.get("email", "N/A")
#         customer_name = bill_data.get("customerName", "")
#         customer_phone = bill_data.get("customerPhone", "")
#         products = bill_data.get("products", [])
#         total_amount = sum(float(p["sale_price"]) * int(p["quantity"]) for p in products)

#         # Generate PDF
#         buffer = io.BytesIO()
#         doc = SimpleDocTemplate(buffer, pagesize=letter)
#         elements = []

#         styles = getSampleStyleSheet()
#         title_style = styles["Heading1"]
#         normal_style = styles["BodyText"]

#         # Header
#         elements.append(Paragraph(f"{store_name} - Receipt", title_style))
#         elements.append(Paragraph(f"Serial Number: {sales_collection.count_documents({})}", normal_style))
#         elements.append(Paragraph(datetime.now().strftime("%Y-%m-%d %H:%M:%S"), normal_style))
#         elements.append(Spacer(1, 12))

#         # Store Info
#         store_info = [
#             ["Store Name:", store_name],
#             ["Store Address:", store_address],
#             ["Phone Number:", phone_number],
#             ["Email:", store_email],
#         ]
#         store_table = Table(store_info, colWidths=[150, 300])
#         store_table.setStyle(TableStyle([
#             ("FONT", (0, 0), (-1, -1), "Helvetica"),
#             ("TEXTCOLOR", (0, 0), (0, -1), colors.black),
#             ("ALIGN", (0, 0), (-1, -1), "LEFT"),
#             ("VALIGN", (0, 0), (-1, -1), "TOP"),
#         ]))
#         elements.append(store_table)
#         elements.append(Spacer(1, 12))

#         # Customer Info
#         customer_info = [
#             ["Customer Name:", customer_name],
#             ["Customer Phone:", customer_phone],
#             ["Customer Email:", customer_email],
#         ]
#         customer_table = Table(customer_info, colWidths=[150, 300])
#         customer_table.setStyle(TableStyle([
#             ("FONT", (0, 0), (-1, -1), "Helvetica"),
#             ("TEXTCOLOR", (0, 0), (0, -1), colors.black),
#             ("ALIGN", (0, 0), (-1, -1), "LEFT"),
#             ("VALIGN", (0, 0), (-1, -1), "TOP"),
#         ]))
#         elements.append(customer_table)
#         elements.append(Spacer(1, 20))

#         # Products Table
#         product_data = [["Product Name", "Barcode", "Price", "Quantity", "Total"]]
#         for product in products:
#             product_data.append([
#                 product["product_name"],
#                 product.get("barcode", "N/A"),
#                 f"{float(product['sale_price']):.2f}",
#                 str(product["quantity"]),
#                 f"{float(product['sale_price']) * int(product['quantity']):.2f}",
#             ])
#         product_data.append(["Total Amount", "", "", "", f"{total_amount:.2f}"])
        
#         product_table = Table(product_data, colWidths=[150, 100, 80, 80, 80])
#         product_table.setStyle(TableStyle([
#             ("BACKGROUND", (0, 0), (-1, 0), colors.lightblue),
#             ("TEXTCOLOR", (0, 0), (-1, 0), colors.black),
#             ("ALIGN", (0, 0), (-1, -1), "CENTER"),
#             ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
#             ("FONTSIZE", (0, 0), (-1, 0), 12),
#             ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
#             ("BACKGROUND", (0, 1), (-1, -2), colors.white),
#             ("GRID", (0, 0), (-1, -1), 1, colors.black),
#             ("BACKGROUND", (0, -1), (-1, -1), colors.lightblue),
#             ("FONTNAME", (0, -1), (-1, -1), "Helvetica-Bold"),
#         ]))
#         elements.append(product_table)
#         elements.append(Spacer(1, 20))

#         # Footer
#         elements.append(Paragraph("Thank you for shopping with us!", normal_style))

#         # Build PDF
#         doc.build(elements)
#         pdf_data = buffer.getvalue()
#         buffer.close()

#         # Email setup
#         smtp_server = "smtp.gmail.com"
#         smtp_port = 587
#         smtp_username = "noreplyretailstore123@gmail.com"
#         smtp_password = "mzfy vtui vepc tcyc"  # App-specific password

#         msg = MIMEMultipart()
#         msg["From"] = smtp_username
#         msg["To"] = customer_email
#         msg["Subject"] = f"Receipt from {store_name} - Serial {sales_collection.count_documents({})}"

#         # Email body
#         body = "Please find your receipt attached as a PDF."
#         msg.attach(MIMEText(body, "plain"))

#         # Attach PDF
#         pdf_part = MIMEApplication(pdf_data, _subtype="pdf")
#         pdf_part.add_header("Content-Disposition", "attachment", filename=f"receipt_{sales_collection.count_documents({})}.pdf")
#         msg.attach(pdf_part)

#         # Send email
#         with smtplib.SMTP(smtp_server, smtp_port) as server:
#             server.starttls()
#             server.login(smtp_username, smtp_password)
#             server.sendmail(smtp_username, customer_email, msg.as_string())

#         print(f"PDF bill sent successfully to {customer_email}")
#         return jsonify({"message": "PDF bill sent successfully"}), 200
#     except Exception as e:
#         print("Error sending PDF bill:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/send-email", methods=["POST"])
# def send_email():
#     try:
#         data = request.json
#         to_email = data.get("to")
#         subject = data.get("subject")
#         html_content = data.get("html")

#         if not to_email or not subject or not html_content:
#             return jsonify({"error": "Missing required fields"}), 400

#         smtp_server = "smtp.gmail.com"
#         smtp_port = 587
#         smtp_username = "noreplyretailstore123@gmail.com"
#         smtp_password = "mzfy vtui vepc tcyc"

#         msg = MIMEMultipart()
#         msg["From"] = smtp_username
#         msg["To"] = to_email
#         msg["Subject"] = subject
#         msg.attach(MIMEText(html_content, "html"))

#         with smtplib.SMTP(smtp_server, smtp_port) as server:
#             server.starttls()
#             server.login(smtp_username, smtp_password)
#             server.sendmail(smtp_username, to_email, msg.as_string())

#         print(f"Email sent successfully to {to_email}")
#         return jsonify({"message": "Email sent successfully"}), 200
#     except Exception as e:
#         print("Error sending email:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
# def get_customer_balance(customer_phone):
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         set_store_database(store_id)
#         transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
#         balance = 0
#         for transaction in transactions:
#             if transaction["type"] == "credit":
#                 balance += float(transaction["amount"])
#             else:  # debit
#                 balance -= float(transaction["amount"])
        
#         return jsonify({"balance": balance}), 200
#     except Exception as e:
#         print("Error fetching customer balance:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/khatabook/transactions", methods=["GET"])
# def get_transactions():
#     try:
#         store_id = request.headers.get("storeId")
#         customer_phone = request.args.get("customerPhone")

#         if not store_id or not customer_phone:
#             return jsonify({"error": "Store ID and customer phone are required"}), 400

#         set_store_database(store_id)
#         transactions = list(mongo.db.khatabook.find(
#             {"store_id": store_id, "customer_phone": customer_phone},
#             {"_id": 0}
#         ))

#         return jsonify({"transactions": transactions}), 200
#     except Exception as e:
#         print("Error fetching transactions:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/khatabook/transactions", methods=["POST"])
# def add_khatabook_transaction():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         set_store_database(store_id)
#         data = request.json
#         customer_phone = data.get("customerPhone")
#         transaction_type = data.get("type")
#         amount = data.get("amount")
#         notes = data.get("notes", "")

#         transaction = {
#             "store_id": store_id,
#             "customer_phone": customer_phone,
#             "type": transaction_type,
#             "amount": amount,
#             "notes": notes,
#             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
#         }

#         mongo.db.khatabook.insert_one(transaction)
#         return jsonify({"message": "Transaction added successfully"}), 201
#     except Exception as e:
#         print("Error adding transaction:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# @app.route("/api/khatabook/payment", methods=["POST"])
# def process_payment():
#     try:
#         store_id = request.headers.get("storeId")
#         if not store_id:
#             return jsonify({"error": "Store ID is required in headers"}), 400

#         set_store_database(store_id)
#         data = request.json
#         customer_phone = data.get("customerPhone")
#         amount = data.get("amount")
#         transaction_type = data.get("type")
#         notes = data.get("notes", "")

#         if not customer_phone or not amount or not transaction_type:
#             return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

#         try:
#             amount = float(amount)
#             if amount <= 0:
#                 return jsonify({"error": "Amount must be greater than 0"}), 400
#         except ValueError:
#             return jsonify({"error": "Invalid amount"}), 400

#         transaction = {
#             "store_id": store_id,
#             "customer_phone": customer_phone,
#             "type": transaction_type,
#             "amount": amount,
#             "notes": notes,
#             "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
#         }

#         mongo.db.khatabook.insert_one(transaction)
#         return jsonify({"message": "Payment processed successfully"}), 200
#     except Exception as e:
#         print("Error processing payment:", str(e))
#         print(traceback.format_exc())
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(debug=True, port=5002)
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from bson import ObjectId
from datetime import datetime
from flask_cors import CORS
import traceback
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet
import io

app = Flask(__name__)
CORS(app)

# Default MongoDB URI (fallback to ensure app initializes properly)
app.config["MONGO_URI"] = "mongodb://localhost:27017/default"
mongo = PyMongo(app)

def set_store_database(store_id):
    """Set the database dynamically based on the store ID."""
    if not store_id:
        raise ValueError("Store ID is required.")
    app.config["MONGO_URI"] = f"mongodb://localhost:27017/{store_id}"
    mongo.init_app(app)

@app.route("/api/products", methods=["GET"])
def get_products():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        set_store_database(store_id)
        products_collection = mongo.db.products
        products = []
        for product in products_collection.find():
            products.append({
                "id": str(product["_id"]),
                "product_name": product["product_name"],
                "sale_price": float(product["sale_price"]),
                "quantity": int(product["quantity"]),
                "barcode": product.get("barcode", "")
            })
        return jsonify(products)
    except Exception as e:
        print("Error fetching products:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": "Unable to fetch products"}), 500

@app.route("/api/generate-bill", methods=["POST"])
def generate_bill():
    try:
        store_id = request.headers.get("storeId")
        user_id = request.headers.get("userId")
        user_id = int(user_id) if user_id else None
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        set_store_database(store_id)
        billing_data = request.json
        products_to_bill = billing_data.get("products", [])
        customer_name = billing_data.get("customerName", "")
        customer_phone = billing_data.get("customerPhone", "")
        customer_email = billing_data.get("customerEmail", "")
        payment_status = billing_data.get("paymentStatus", "paid")
        store_name = billing_data.get("storeName", "Unknown Store")
        store_address = billing_data.get("storeAddress", "N/A")
        phone_number = billing_data.get("phoneNumber", "N/A")
        store_email = billing_data.get("email", "N/A")

        if not products_to_bill:
            return jsonify({"error": "No products provided in the request"}), 400

        products_collection = mongo.db.products
        sales_collection = mongo.db.sales

        # Get the total number of sales to determine the next serial number
        sales_count = sales_collection.count_documents({})
        new_serial_number = sales_count + 1

        bill_total = 0
        billed_products = []

        for product in products_to_bill:
            try:
                product_id = ObjectId(product["id"])
            except Exception:
                return jsonify({"error": f"Invalid product ID: {product['id']}"}), 400

            quantity_to_bill = int(product["quantity"])
            db_product = products_collection.find_one({"_id": product_id})
            if not db_product:
                return jsonify({"error": f"Product with ID {product_id} not found"}), 404

            db_product_quantity = int(db_product["quantity"])
            if db_product_quantity < quantity_to_bill:
                return jsonify({"error": f"Not enough stock for {db_product['product_name']}"}), 400

            sale_price = float(db_product["sale_price"])
            total_price = sale_price * quantity_to_bill
            bill_total += total_price

            billed_products.append({
                "name": db_product["product_name"],
                "quantity": quantity_to_bill,
                "unit_price": sale_price,
                "total_price": total_price,
                "barcode": db_product.get("barcode", "")
            })

            new_quantity = db_product_quantity - quantity_to_bill
            update_result = products_collection.update_one(
                {"_id": product_id},
                {"$set": {"quantity": new_quantity}}
            )

            if update_result.matched_count == 0:
                return jsonify({"error": f"Failed to update product quantity for {db_product['product_name']}"}), 500

        sale_record = {
            "serialNumber": new_serial_number,
            "user_id": str(user_id) if user_id else None,
            "store_id": store_id,
            "products": billed_products,
            "total_amount": bill_total,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "customer_name": customer_name,
            "customer_phone": customer_phone,
            "customer_email": customer_email,
            "payment_status": payment_status,
        }

        sales_collection.insert_one(sale_record)

        if payment_status == "unpaid":
            khatabook_transaction = {
                "store_id": store_id,
                "customer_phone": customer_phone,
                "type": "debit",
                "amount": bill_total,
                "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "notes": f"Unpaid bill - Serial {new_serial_number}",
            }
            mongo.db.khatabook.insert_one(khatabook_transaction)

        bill_summary = {
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "products": billed_products,
            "total_amount": bill_total,
            "serialNumber": new_serial_number
        }

        return jsonify(bill_summary), 201
    except Exception as e:
        print("Error generating bill:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/send-pdf-bill", methods=["POST"])
def send_pdf_bill():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        set_store_database(store_id)
        bill_data = request.json
        customer_email = bill_data.get("customerEmail")
        if not customer_email:
            return jsonify({"error": "Customer email is required"}), 400

        store_name = bill_data.get("storeName", "Unknown Store")
        store_address = bill_data.get("storeAddress", "N/A")
        phone_number = bill_data.get("phoneNumber", "N/A")
        store_email = bill_data.get("email", "N/A")
        customer_name = bill_data.get("customerName", "")
        customer_phone = bill_data.get("customerPhone", "")
        products = bill_data.get("products", [])
        total_amount = sum(float(p["sale_price"]) * int(p["quantity"]) for p in products)

        # Define sales_collection for serial number
        sales_collection = mongo.db.sales
        sales_count = sales_collection.count_documents({})
        serial_number = sales_count  # Use the latest count (assuming bill was just generated)

        # Generate PDF
        buffer = io.BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=letter)
        elements = []

        styles = getSampleStyleSheet()
        title_style = styles["Heading1"]
        normal_style = styles["BodyText"]

        # Header
        elements.append(Paragraph(f"{store_name} - Receipt", title_style))
        elements.append(Paragraph(f"Serial Number: {serial_number}", normal_style))
        elements.append(Paragraph(datetime.now().strftime("%Y-%m-%d %H:%M:%S"), normal_style))
        elements.append(Spacer(1, 12))

        # Store Info
        store_info = [
            ["Store Name:", store_name],
            ["Store Address:", store_address],
            ["Phone Number:", phone_number],
            ["Email:", store_email],
        ]
        store_table = Table(store_info, colWidths=[150, 300])
        store_table.setStyle(TableStyle([
            ("FONT", (0, 0), (-1, -1), "Helvetica"),
            ("TEXTCOLOR", (0, 0), (0, -1), colors.black),
            ("ALIGN", (0, 0), (-1, -1), "LEFT"),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]))
        elements.append(store_table)
        elements.append(Spacer(1, 12))

        # Customer Info
        customer_info = [
            ["Customer Name:", customer_name],
            ["Customer Phone:", customer_phone],
            ["Customer Email:", customer_email],
        ]
        customer_table = Table(customer_info, colWidths=[150, 300])
        customer_table.setStyle(TableStyle([
            ("FONT", (0, 0), (-1, -1), "Helvetica"),
            ("TEXTCOLOR", (0, 0), (0, -1), colors.black),
            ("ALIGN", (0, 0), (-1, -1), "LEFT"),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ]))
        elements.append(customer_table)
        elements.append(Spacer(1, 20))

        # Products Table
        product_data = [["Product Name", "Barcode", "Price", "Quantity", "Total"]]
        for product in products:
            product_data.append([
                product["product_name"],
                product.get("barcode", "N/A"),
                f"{float(product['sale_price']):.2f}",
                str(product["quantity"]),
                f"{float(product['sale_price']) * int(product['quantity']):.2f}",
            ])
        product_data.append(["Total Amount", "", "", "", f"{total_amount:.2f}"])
        
        product_table = Table(product_data, colWidths=[150, 100, 80, 80, 80])
        product_table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.lightblue),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.black),
            ("ALIGN", (0, 0), (-1, -1), "CENTER"),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, 0), 12),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 12),
            ("BACKGROUND", (0, 1), (-1, -2), colors.white),
            ("GRID", (0, 0), (-1, -1), 1, colors.black),
            ("BACKGROUND", (0, -1), (-1, -1), colors.lightblue),
            ("FONTNAME", (0, -1), (-1, -1), "Helvetica-Bold"),
        ]))
        elements.append(product_table)
        elements.append(Spacer(1, 20))

        # Footer
        elements.append(Paragraph("Thank you for shopping with us!", normal_style))

        # Build PDF
        doc.build(elements)
        pdf_data = buffer.getvalue()
        buffer.close()

        # Email setup
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        smtp_username = "noreplyretailstore123@gmail.com"
        smtp_password = "mzfy vtui vepc tcyc"  # App-specific password

        msg = MIMEMultipart()
        msg["From"] = smtp_username
        msg["To"] = customer_email
        msg["Subject"] = f"Receipt from {store_name} - Serial {serial_number}"

        # Email body
        body = "Please find your receipt attached as a PDF."
        msg.attach(MIMEText(body, "plain"))

        # Attach PDF
        pdf_part = MIMEApplication(pdf_data, _subtype="pdf")
        pdf_part.add_header("Content-Disposition", "attachment", filename=f"receipt_{serial_number}.pdf")
        msg.attach(pdf_part)

        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(smtp_username, customer_email, msg.as_string())

        print(f"PDF bill sent successfully to {customer_email}")
        return jsonify({"message": "PDF bill sent successfully"}), 200
    except Exception as e:
        print("Error sending PDF bill:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/send-email", methods=["POST"])
def send_email():
    try:
        data = request.json
        to_email = data.get("to")
        subject = data.get("subject")
        html_content = data.get("html")

        if not to_email or not subject or not html_content:
            return jsonify({"error": "Missing required fields"}), 400

        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        smtp_username = "noreplyretailstore123@gmail.com"
        smtp_password = "mzfy vtui vepc tcyc"

        msg = MIMEMultipart()
        msg["From"] = smtp_username
        msg["To"] = to_email
        msg["Subject"] = subject
        msg.attach(MIMEText(html_content, "html"))

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.sendmail(smtp_username, to_email, msg.as_string())

        print(f"Email sent successfully to {to_email}")
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        print("Error sending email:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/khatabook/customers/<customer_phone>/balance", methods=["GET"])
def get_customer_balance(customer_phone):
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        set_store_database(store_id)
        transactions = mongo.db.khatabook.find({"store_id": store_id, "customer_phone": customer_phone})
        
        balance = 0
        for transaction in transactions:
            if transaction["type"] == "credit":
                balance += float(transaction["amount"])
            else:  # debit
                balance -= float(transaction["amount"])
        
        return jsonify({"balance": balance}), 200
    except Exception as e:
        print("Error fetching customer balance:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/khatabook/transactions", methods=["GET"])
def get_transactions():
    try:
        store_id = request.headers.get("storeId")
        customer_phone = request.args.get("customerPhone")

        if not store_id or not customer_phone:
            return jsonify({"error": "Store ID and customer phone are required"}), 400

        set_store_database(store_id)
        transactions = list(mongo.db.khatabook.find(
            {"store_id": store_id, "customer_phone": customer_phone},
            {"_id": 0}
        ))

        return jsonify({"transactions": transactions}), 200
    except Exception as e:
        print("Error fetching transactions:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/khatabook/transactions", methods=["POST"])
def add_khatabook_transaction():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        set_store_database(store_id)
        data = request.json
        customer_phone = data.get("customerPhone")
        transaction_type = data.get("type")
        amount = data.get("amount")
        notes = data.get("notes", "")

        transaction = {
            "store_id": store_id,
            "customer_phone": customer_phone,
            "type": transaction_type,
            "amount": amount,
            "notes": notes,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        }

        mongo.db.khatabook.insert_one(transaction)
        return jsonify({"message": "Transaction added successfully"}), 201
    except Exception as e:
        print("Error adding transaction:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

@app.route("/api/khatabook/payment", methods=["POST"])
def process_payment():
    try:
        store_id = request.headers.get("storeId")
        if not store_id:
            return jsonify({"error": "Store ID is required in headers"}), 400

        set_store_database(store_id)
        data = request.json
        customer_phone = data.get("customerPhone")
        amount = data.get("amount")
        transaction_type = data.get("type")
        notes = data.get("notes", "")

        if not customer_phone or not amount or not transaction_type:
            return jsonify({"error": "Missing required fields: customerPhone, amount, type"}), 400

        try:
            amount = float(amount)
            if amount <= 0:
                return jsonify({"error": "Amount must be greater than 0"}), 400
        except ValueError:
            return jsonify({"error": "Invalid amount"}), 400

        transaction = {
            "store_id": store_id,
            "customer_phone": customer_phone,
            "type": transaction_type,
            "amount": amount,
            "notes": notes,
            "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        }

        mongo.db.khatabook.insert_one(transaction)
        return jsonify({"message": "Payment processed successfully"}), 200
    except Exception as e:
        print("Error processing payment:", str(e))
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5002)