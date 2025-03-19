# # # # # # from flask import Flask, request, jsonify
# # # # # # from flask_pymongo import PyMongo
# # # # # # from bson.json_util import dumps
# # # # # # from flask_cors import CORS  # Import CORS

# # # # # # app = Flask(__name__)

# # # # # # # Enable CORS for the entire application
# # # # # # CORS(app)  # This will allow all domains to make requests to your API

# # # # # # # MongoDB Configuration
# # # # # # app.config['MONGO_URI'] = 'mongodb://localhost:27017/store'  # Connect to MongoDB database
# # # # # # mongo = PyMongo(app)

# # # # # # # Define the collection name
# # # # # # reviews_collection = mongo.db.reviewers  # This collection will store the reviews

# # # # # # # Route to fetch all reviews
# # # # # # @app.route('/reviews', methods=['GET'])
# # # # # # def get_reviews():
# # # # # #     reviews = reviews_collection.find()
# # # # # #     return dumps(reviews)  # dumps is used to serialize MongoDB data to JSON

# # # # # # # Route to add a new review
# # # # # # @app.route('/reviews', methods=['POST'])
# # # # # # def add_review():
# # # # # #     data = request.get_json()

# # # # # #     # Create a new review document
# # # # # #     new_review = {
# # # # # #         "name": data['name'],
# # # # # #         "rating": data['rating'],
# # # # # #         "review": data['review'],
# # # # # #         "email": data['email'],
# # # # # #         "phone": data['phone']
# # # # # #     }

# # # # # #     # Insert the new review into the MongoDB collection
# # # # # #     reviews_collection.insert_one(new_review)

# # # # # #     return jsonify({'message': 'Review added successfully'}), 201

# # # # # # if __name__ == '__main__':
# # # # # #     app.run(debug=True,port=5011)
# # # # # from flask import Flask, request, jsonify
# # # # # from flask_cors import CORS
# # # # # import pymongo

# # # # # app = Flask(__name__)
# # # # # CORS(app)  # Allow cross-origin requests from React

# # # # # # MongoDB connection setup
# # # # # client = pymongo.MongoClient("mongodb://localhost:27017/")
# # # # # db = client["store_reviews"]
# # # # # reviews_collection = db["reviewers"]

# # # # # @app.route('/reviews', methods=['POST'])
# # # # # def submit_review():
# # # # #     data = request.get_json()

# # # # #     # Ensure all required fields are present
# # # # #     if 'name' in data and 'rating' in data and 'review' in data:
# # # # #         review_data = {
# # # # #             'name': data['name'],
# # # # #             'rating': data['rating'],
# # # # #             'review': data['review']
# # # # #         }
# # # # #         reviews_collection.insert_one(review_data)  # Insert the review into MongoDB

# # # # #         return jsonify(review_data), 201  # Return the added review data as response
# # # # #     else:
# # # # #         return jsonify({"error": "Missing fields"}), 400


# # # # # @app.route('/reviews', methods=['GET'])
# # # # # def get_reviews():
# # # # #     reviews = list(reviews_collection.find({}, {"_id": 0}))  # Fetch reviews without MongoDB ID
# # # # #     return jsonify(reviews)


# # # # # if __name__ == '__main__':
# # # # #     app.run(debug=True,port=5011)
# # # # from flask import Flask, request, jsonify
# # # # from flask_cors import CORS
# # # # from pymongo import MongoClient
# # # # from bson import ObjectId

# # # # app = Flask(__name__)
# # # # CORS(app)  # Allow CORS to communicate with the React frontend

# # # # # MongoDB setup
# # # # client = MongoClient("mongodb://localhost:27017")
# # # # db = client["store"]
# # # # reviews_collection = db["reviewers"]

# # # # # @app.route("/reviews", methods=["GET"])
# # # # # def get_reviews():
# # # # #     reviews = list(reviews_collection.find({}, {"_id": 0}))  # Remove MongoDB _id field
# # # # #     return jsonify(reviews)
# # # # @app.route("/reviews", methods=["GET"])
# # # # def get_reviews():
# # # #     reviews = list(reviews_collection.find({}, {"_id": 0}))  # Remove MongoDB _id field
# # # #     return jsonify(reviews)

# # # # @app.route("/reviews", methods=["POST"])
# # # # def add_review():
# # # #     data = request.get_json()

# # # #     if "name" in data and "rating" in data and "review" in data and "email" in data and "phone" in data:
# # # #         review_data = {
# # # #             "name": data["name"],
# # # #             "rating": data["rating"],
# # # #             "review": data["review"],
# # # #             "email": data["email"],
# # # #             "phone": data["phone"]
# # # #         }

# # # #         # Insert the new review into MongoDB
# # # #         result = reviews_collection.insert_one(review_data)

# # # #         # Return the inserted review data back to the frontend
# # # #         inserted_review = {
# # # #             "name": data["name"],
# # # #             "rating": data["rating"],
# # # #             "review": data["review"],
# # # #             "email": data["email"],
# # # #             "phone": data["phone"]
# # # #         }

# # # #         return jsonify(inserted_review), 201

# # # #     return jsonify({"error": "Invalid data"}), 400

# # # # if __name__ == "__main__":
# # # #     app.run(debug=True,port=5011)
# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # from pymongo import MongoClient
# # # from bson import ObjectId

# # # app = Flask(__name__)
# # # CORS(app)  # Allow CORS to communicate with the React frontend

# # # # MongoDB setup
# # # client = MongoClient("mongodb://localhost:27017")
# # # db = client["store"]
# # # reviews_collection = db["reviewers"]

# # # @app.route("/reviews", methods=["GET"])
# # # def get_reviews():
# # #     reviews = list(reviews_collection.find({}, {"_id": 0}))  # Remove MongoDB _id field
# # #     return jsonify(reviews)

# # # @app.route("/reviews", methods=["POST"])
# # # def add_review():
# # #     data = request.get_json()

# # #     # Make email and phone optional by checking if they exist before adding them to the review data
# # #     review_data = {
# # #         "name": data["name"],
# # #         "rating": data["rating"],
# # #         "review": data["review"],
# # #     }

# # #     if "email" in data:
# # #         review_data["email"] = data["email"]  # Add email if provided
# # #     if "phone" in data:
# # #         review_data["phone"] = data["phone"]  # Add phone if provided

# # #     # Insert the new review into MongoDB
# # #     result = reviews_collection.insert_one(review_data)

# # #     # Return the inserted review data back to the frontend (without email/phone)
# # #     inserted_review = {
# # #         "name": data["name"],
# # #         "rating": data["rating"],
# # #         "review": data["review"]
# # #     }

# # #     # Only include email and phone in the response if they were provided
# # #     if "email" in data:
# # #         inserted_review["email"] = data["email"]
# # #     if "phone" in data:
# # #         inserted_review["phone"] = data["phone"]

# # #     return jsonify(inserted_review), 201

# # # if __name__ == "__main__":
# # #     app.run(debug=True, port=5011)

# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # from pymongo import MongoClient
# # from bson import ObjectId
# # from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
# # import datetime
# # import smtplib
# # from email.mime.text import MIMEText
# # import os
# # from dotenv import load_dotenv

# # load_dotenv()

# # app = Flask(__name__)
# # CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for simplicity; restrict in production

# # # MongoDB setup
# # client = MongoClient("mongodb://localhost:27017")
# # db = client["store"]
# # reviews_collection = db["reviewers"]
# # users_collection = db["users"]

# # # JWT setup
# # app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "your-secret-key-here")
# # jwt = JWTManager(app)

# # # SMTP setup for Gmail
# # SMTP_SERVER = "smtp.gmail.com"
# # SMTP_PORT = 587
# # SMTP_USER = "noreplyretailstore123@gmail.com"
# # SMTP_PASSWORD = "mzfy vtui vepc tcyc"

# # # Initialize admin user (run once)
# # def init_users():
# #     if users_collection.count_documents({"userName": "admin"}) == 0:
# #         users_collection.insert_one({
# #             "userName": "admin",
# #             "password": "admin123",
# #             "role": "admin"
# #         })
# # init_users()

# # # Login endpoint for staff (with OPTIONS handling)
# # @app.route("/login", methods=["OPTIONS", "POST"])
# # def login():
# #     if request.method == "OPTIONS":
# #         # Handle CORS preflight request
# #         response = jsonify({"status": "OK"})
# #         response.headers.add("Access-Control-Allow-Origin", "*")
# #         response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
# #         response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
# #         return response, 200

# #     data = request.get_json()
# #     username = data.get("username")  # Frontend sends "username"
# #     password = data.get("password")
# #     # Use "userName" to match MongoDB field
# #     user = users_collection.find_one({"userName": username, "password": password})
# #     if not user:
# #         return jsonify({"error": "Invalid credentials"}), 401
# #     access_token = create_access_token(identity={"username": username, "role": user["role"]})
# #     return jsonify({"access_token": access_token}), 200

# # # Get all reviews (public)
# # @app.route("/reviews", methods=["GET"])
# # def get_reviews():
# #     reviews = list(reviews_collection.find({}, {"_id": 1, "name": 1, "rating": 1, "review": 1, "email": 1, "phone": 1, "replies": 1, "date": 1}))
# #     for review in reviews:
# #         review["_id"] = str(review["_id"])
# #     return jsonify(reviews)

# # # Add a review (public)
# # @app.route("/reviews", methods=["POST"])
# # def add_review():
# #     data = request.get_json()
# #     review_data = {
# #         "name": data["name"],
# #         "rating": data["rating"],
# #         "review": data["review"],
# #         "date": datetime.datetime.now().strftime("%Y-%m-%d")
# #     }
# #     if "email" in data and data["email"]:
# #         review_data["email"] = data["email"]
# #     if "phone" in data and data["phone"]:
# #         review_data["phone"] = data["phone"]
# #     result = reviews_collection.insert_one(review_data)
# #     inserted_review = {**review_data, "_id": str(result.inserted_id)}
# #     return jsonify(inserted_review), 201

# # # Add public reply (staff only)
# # @app.route("/reviews/<review_id>/reply/public", methods=["POST"])
# # @jwt_required()
# # def add_public_reply(review_id):
# #     user = get_jwt_identity()
# #     if user["role"] != "admin":
# #         return jsonify({"error": "Admins only"}), 403
# #     data = request.get_json()
# #     reply_data = {
# #         "text": data["reply"],
# #         "date": datetime.datetime.now().strftime("%Y-%m-%d"),
# #         "by": user["username"]
# #     }
# #     reviews_collection.update_one(
# #         {"_id": ObjectId(review_id)},
# #         {"$push": {"replies": reply_data}}
# #     )
# #     return jsonify(reply_data), 201

# # # Add private reply via email (staff only)
# # @app.route("/reviews/<review_id>/reply/private", methods=["POST"])
# # @jwt_required()
# # def add_private_reply(review_id):
# #     user = get_jwt_identity()
# #     if user["role"] != "admin":
# #         return jsonify({"error": "Admins only"}), 403
# #     data = request.get_json()
# #     review = reviews_collection.find_one({"_id": ObjectId(review_id)})
# #     if not review.get("email"):
# #         return jsonify({"error": "No email provided by reviewer"}), 400

# #     subject = "Response to Your Review - Retail Store Management System"
# #     body = f"Hi {review['name']},\n\nThank you for your review: '{review['review']}'.\n\nOur response: {data['reply']}\n\nBest regards,\n{user['username']} from the Retail Store Team"
# #     msg = MIMEText(body)
# #     msg["Subject"] = subject
# #     msg["From"] = SMTP_USER
# #     msg["To"] = review["email"]

# #     try:
# #         with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
# #             server.starttls()
# #             server.login(SMTP_USER, SMTP_PASSWORD)
# #             server.send_message(msg)
# #         return jsonify({"message": "Email sent successfully"}), 200
# #     except Exception as e:
# #         print(f"Error sending email: {e}")
# #         return jsonify({"error": f"Failed to send email: {str(e)}"}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True, port=5011)
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# from bson import ObjectId
# from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
# import datetime
# import smtplib
# from email.mime.text import MIMEText
# import os
# from dotenv import load_dotenv

# load_dotenv()

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins; restrict in production

# # MongoDB setup
# client = MongoClient("mongodb://localhost:27017")
# db = client["store"]
# reviews_collection = db["reviewers"]
# users_collection = db["users"]

# # JWT setup
# app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "your-secret-key-here")
# jwt = JWTManager(app)

# # SMTP setup for Gmail
# SMTP_SERVER = "smtp.gmail.com"
# SMTP_PORT = 587
# SMTP_USER = "noreplyretailstore123@gmail.com"
# SMTP_PASSWORD = "mzfy vtui vepc tcyc"

# # Login endpoint for staff (with OPTIONS handling)
# @app.route("/login", methods=["OPTIONS", "POST"])
# def login():
#     if request.method == "OPTIONS":
#         response = jsonify({"status": "OK"})
#         response.headers.add("Access-Control-Allow-Origin", "*")
#         response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
#         response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
#         return response, 200

#     data = request.get_json()
#     username = data.get("username")
#     password = data.get("password")
#     user = users_collection.find_one({"userName": username, "password": password})
#     if not user:
#         return jsonify({"error": "Invalid credentials"}), 401
#     access_token = create_access_token(identity={"username": username, "role": user["role"]})
#     return jsonify({"access_token": access_token}), 200

# # Get all reviews (public)
# @app.route("/reviews", methods=["GET"])
# def get_reviews():
#     reviews = list(reviews_collection.find({}, {"_id": 1, "name": 1, "rating": 1, "review": 1, "email": 1, "phone": 1, "replies": 1, "date": 1}))
#     for review in reviews:
#         review["_id"] = str(review["_id"])
#     return jsonify(reviews)

# # Add a review (public)
# @app.route("/reviews", methods=["POST"])
# def add_review():
#     data = request.get_json()
#     review_data = {
#         "name": data["name"],
#         "rating": data["rating"],
#         "review": data["review"],
#         "date": datetime.datetime.now().strftime("%Y-%m-%d")
#     }
#     if "email" in data and data["email"]:
#         review_data["email"] = data["email"]
#     if "phone" in data and data["phone"]:
#         review_data["phone"] = data["phone"]
#     result = reviews_collection.insert_one(review_data)
#     inserted_review = {**review_data, "_id": str(result.inserted_id)}
#     return jsonify(inserted_review), 201

# # Add public reply (staff only)
# @app.route("/reviews/<review_id>/reply/public", methods=["OPTIONS", "POST"])
# @jwt_required()
# def add_public_reply(review_id):
#     if request.method == "OPTIONS":
#         response = jsonify({"status": "OK"})
#         response.headers.add("Access-Control-Allow-Origin", "*")
#         response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
#         response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
#         return response, 200

#     user = get_jwt_identity()
#     if user["role"] != "admin":
#         return jsonify({"error": "Admins only"}), 403
#     data = request.get_json()
#     reply_data = {
#         "text": data["reply"],
#         "date": datetime.datetime.now().strftime("%Y-%m-%d"),
#         "by": user["username"]
#     }
#     reviews_collection.update_one(
#         {"_id": ObjectId(review_id)},
#         {"$push": {"replies": reply_data}}
#     )
#     return jsonify(reply_data), 201

# # Add private reply via email (staff only)
# @app.route("/reviews/<review_id>/reply/private", methods=["OPTIONS", "POST"])
# @jwt_required()
# def add_private_reply(review_id):
#     if request.method == "OPTIONS":
#         response = jsonify({"status": "OK"})
#         response.headers.add("Access-Control-Allow-Origin", "*")
#         response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
#         response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
#         return response, 200

#     user = get_jwt_identity()
#     if user["role"] != "admin":
#         return jsonify({"error": "Admins only"}), 403
#     data = request.get_json()
#     review = reviews_collection.find_one({"_id": ObjectId(review_id)})
#     if not review.get("email"):
#         return jsonify({"error": "No email provided by reviewer"}), 400

#     subject = "Response to Your Review - Retail Store Management System"
#     body = f"Hi {review['name']},\n\nThank you for your review: '{review['review']}'.\n\nOur response: {data['reply']}\n\nBest regards,\n{user['username']} from the Retail Store Team"
#     msg = MIMEText(body)
#     msg["Subject"] = subject
#     msg["From"] = SMTP_USER
#     msg["To"] = review["email"]

#     try:
#         with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
#             server.starttls()
#             server.login(SMTP_USER, SMTP_PASSWORD)
#             server.send_message(msg)
#         return jsonify({"message": "Email sent successfully"}), 200
#     except Exception as e:
#         print(f"Error sending email: {e}")
#         return jsonify({"error": f"Failed to send email: {str(e)}"}), 500

# if __name__ == "__main__":
#     app.run(debug=True, port=5011)


from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import datetime
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Restrict to frontend URL in production

# MongoDB setup
client = MongoClient("mongodb://localhost:27017")
db = client["store"]
reviews_collection = db["reviewers"]
users_collection = db["users"]

# JWT setup
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "your-secret-key-here")
jwt = JWTManager(app)

# SMTP setup for Gmail
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SMTP_USER = "noreplyretailstore123@gmail.com"
SMTP_PASSWORD = "mzfy vtui vepc tcyc"

# Login endpoint
@app.route("/login", methods=["OPTIONS", "POST"])
def login():
    if request.method == "OPTIONS":
        response = jsonify({"status": "OK"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
        return response, 200

    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    user = users_collection.find_one({"userName": username, "password": password})
    if not user:
        return jsonify({"error": "Invalid credentials"}), 401
    access_token = create_access_token(identity={"username": username, "role": user["role"]})
    return jsonify({"access_token": access_token}), 200

# Get all reviews (public)
@app.route("/reviews", methods=["GET"])
def get_reviews():
    reviews = list(reviews_collection.find({}, {"_id": 1, "name": 1, "rating": 1, "review": 1, "email": 1, "phone": 1, "replies": 1, "date": 1}))
    for review in reviews:
        review["_id"] = str(review["_id"])
    return jsonify(reviews)

# Add a review (public)
@app.route("/reviews", methods=["POST"])
def add_review():
    data = request.get_json()
    review_data = {
        "name": data["name"],
        "rating": data["rating"],
        "review": data["review"],
        "date": datetime.datetime.now().strftime("%Y-%m-%d")
    }
    if "email" in data and data["email"]:
        review_data["email"] = data["email"]
    if "phone" in data and data["phone"]:
        review_data["phone"] = data["phone"]
    result = reviews_collection.insert_one(review_data)
    inserted_review = {**review_data, "_id": str(result.inserted_id)}
    return jsonify(inserted_review), 201

# Add public reply (staff only)
@app.route("/reviews/<review_id>/reply/public", methods=["OPTIONS", "POST"])
@jwt_required()
def add_public_reply(review_id):
    if request.method == "OPTIONS":
        response = jsonify({"status": "OK"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
        return response, 200

    user = get_jwt_identity()
    if user["role"] != "admin":
        return jsonify({"error": "Admins only"}), 403
    data = request.get_json()
    reply_data = {
        "text": data["reply"],
        "date": datetime.datetime.now().strftime("%Y-%m-%d"),
        "by": user["username"]
    }
    reviews_collection.update_one(
        {"_id": ObjectId(review_id)},
        {"$push": {"replies": reply_data}}
    )
    return jsonify(reply_data), 201

# Add private reply via email (staff only)
@app.route("/reviews/<review_id>/reply/private", methods=["OPTIONS", "POST"])
@jwt_required()
def add_private_reply(review_id):
    if request.method == "OPTIONS":
        response = jsonify({"status": "OK"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Methods", "POST, OPTIONS")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
        return response, 200

    user = get_jwt_identity()
    if user["role"] != "admin":
        return jsonify({"error": "Admins only"}), 403
    data = request.get_json()
    review = reviews_collection.find_one({"_id": ObjectId(review_id)})
    if not review.get("email"):
        return jsonify({"error": "No email provided by reviewer"}), 400

    subject = "Response to Your Review - Retail Store Management System"
    body = f"Hi {review['name']},\n\nThank you for your review: '{review['review']}'.\n\nOur response: {data['reply']}\n\nBest regards,\n{user['username']} from the Retail Store Team"
    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = review["email"]

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"error": f"Failed to send email: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5011)