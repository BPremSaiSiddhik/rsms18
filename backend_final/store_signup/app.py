# # # # # from flask import Flask, request, jsonify
# # # # # from flask_cors import CORS
# # # # # from pymongo import MongoClient

# # # # # app = Flask(__name__)
# # # # # CORS(app)

# # # # # # Connect to the central MongoDB (adminsstore database)
# # # # # client = MongoClient("mongodb://localhost:27017/")
# # # # # central_db = client['adminsstore']
# # # # # admins_collection = central_db['admins']

# # # # # @app.route('/signup', methods=['POST'])
# # # # # def signup():
# # # # #     try:
# # # # #         # Parse request data
# # # # #         data = request.json
# # # # #         full_name = data.get('fullName')
# # # # #         email = data.get('email') 
# # # # #         password = data.get('password')
# # # # #         store_name = data.get('storeName')
# # # # #         store_address = data.get('storeAddress')
# # # # #         phone_number = data.get('phoneNumber')

# # # # #         # Validate required fields
# # # # #         if not all([full_name, email, password, store_name]):
# # # # #             return jsonify({"message": "Missing required fields"}), 400

# # # # #         # Save to the central `admins` collection
# # # # #         admin_data = {
# # # # #             "fullName": full_name,
# # # # #             "email": email,
# # # # #             "password": password,
# # # # #             "storeName": store_name,
# # # # #             "storeAddress": store_address,
# # # # #             "phoneNumber": phone_number
# # # # #         }
# # # # #         admins_collection.insert_one(admin_data)

# # # # #         # Create a new database for the store
# # # # #         store_db = client[store_name]
# # # # #         users_collection = store_db['users']

# # # # #         # Insert the default admin user into `users` collection
# # # # #         default_user = {
# # # # #             "store_name": store_name,
# # # # #             "id": 1,
# # # # #             "password": password ,
# # # # #              "role":"admin",
# # # # #               "email":email,
# # # # #                "phoneNumber":phone_number # Default admin password
# # # # #         }
# # # # #         users_collection.insert_one(default_user)

# # # # #         return jsonify({"message": "Signup successful!"}), 200

# # # # #     except Exception as e:
# # # # #         print(f"Error: {e}")
# # # # #         return jsonify({"message": "An error occurred during signup"}), 500


# # # # # if __name__ == '__main__':
# # # # #     app.run(debug=True, port=5003)
# # # # from flask import Flask, request, jsonify
# # # # from flask_cors import CORS
# # # # from pymongo import MongoClient
# # # # import uuid

# # # # app = Flask(__name__)
# # # # CORS(app)

# # # # # Connect to the central MongoDB (adminsstore database)
# # # # client = MongoClient("mongodb://localhost:27017/")
# # # # central_db = client['adminsstore']
# # # # admins_collection = central_db['admins']

# # # # # Connect to the central stores database
# # # # stores_db = client['storesdb']
# # # # stores_collection = stores_db['stores']

# # # # @app.route('/signup', methods=['POST'])
# # # # def signup():
# # # #     try:
# # # #         # Parse request data
# # # #         data = request.json
# # # #         full_name = data.get('fullName')
# # # #         email = data.get('email') 
# # # #         password = data.get('password')
# # # #         store_name = data.get('storeName')
# # # #         store_address = data.get('storeAddress')
# # # #         phone_number = data.get('phoneNumber')

# # # #         # Validate required fields
# # # #         if not all([full_name, email, password, store_name]):
# # # #             return jsonify({"message": "Missing required fields"}), 400

# # # #         # Generate a unique store ID
# # # #         store_id = str(uuid.uuid4())

# # # #         # Save the store information in the `stores` collection
# # # #         store_data = {
# # # #             "storeId": store_id,
# # # #             "storeName": store_name,
# # # #             "storeAddress": store_address
# # # #         }
# # # #         stores_collection.insert_one(store_data)

# # # #         # Save admin data in the `admins` collection
# # # #         admin_data = {
# # # #             "fullName": full_name,
# # # #             "email": email,
# # # #             "password": password,
# # # #             "storeId": store_id,  # Associate the admin with the unique store ID
# # # #             "storeName": store_name,
# # # #             "phoneNumber": phone_number
# # # #         }
# # # #         admins_collection.insert_one(admin_data)

# # # #         # Create a new database for the store using the unique store ID
# # # #         store_db = client[store_id]
# # # #         users_collection = store_db['users']

# # # #         # Insert the default admin user into the `users` collection
# # # #         default_user = {
# # # #             "storeId": store_id,
# # # #             "storeName": store_name,
# # # #             "id": 1,
# # # #             "password": password,
# # # #             "role": "admin",
# # # #             "email": email,
# # # #             "phoneNumber": phone_number
# # # #         }
# # # #         users_collection.insert_one(default_user)

# # # #         return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

# # # #     except Exception as e:
# # # #         print(f"Error: {e}")
# # # #         return jsonify({"message": "An error occurred during signup"}), 500

# # # # if __name__ == '__main__':
# # # #     app.run(debug=True, port=5003)
# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # from pymongo import MongoClient
# # # import time
# # # import random

# # # app = Flask(__name__)
# # # CORS(app)

# # # # Connect to the central MongoDB (adminsstore database)
# # # client = MongoClient("mongodb://localhost:27017/")
# # # central_db = client['adminsstore']
# # # admins_collection = central_db['admins']

# # # # Connect to the central stores database
# # # stores_db = client['storesdb']
# # # stores_collection = stores_db['stores']

# # # def generate_store_id():
# # #     timestamp = int(time.time())  # Get the current Unix timestamp
# # #     random_number = random.randint(1000, 9999)  # Generate a random 4-digit number
# # #     return f"STORE-{timestamp}-{random_number}"

# # # @app.route('/signup', methods=['POST'])
# # # def signup():
# # #     try:
# # #         # Parse request data
# # #         data = request.json
# # #         full_name = data.get('fullName')
# # #         email = data.get('email') 
# # #         password = data.get('password')
# # #         store_name = data.get('storeName')
# # #         store_address = data.get('storeAddress')
# # #         phone_number = data.get('phoneNumber')

# # #         # Validate required fields
# # #         if not all([full_name, email, password, store_name]):
# # #             return jsonify({"message": "Missing required fields"}), 400

# # #         # Generate a human-readable store ID
# # #         store_id = generate_store_id()

# # #         # Save the store information in the `stores` collection
# # #         store_data = {
# # #             "storeId": store_id,
# # #             "storeName": store_name,
# # #             "storeAddress": store_address
# # #         }
# # #         stores_collection.insert_one(store_data)

# # #         # Save admin data in the `admins` collection
# # #         admin_data = {
# # #             "fullName": full_name,
# # #             "email": email,
# # #             "password": password,
# # #             "storeId": store_id,  # Associate the admin with the unique store ID
# # #             "storeName": store_name,
# # #             "phoneNumber": phone_number
# # #         }
# # #         admins_collection.insert_one(admin_data)

# # #         # Create a new database for the store using the unique store ID
# # #         store_db = client[store_id]
# # #         users_collection = store_db['users']

# # #         # Insert the default admin user into the `users` collection
# # #         default_user = {
# # #             "storeId": store_id,
# # #             "storeName": store_name,
# # #             "id": '1',
# # #             "password": password,
# # #             "role": "admin",
# # #             "email": email,
# # #             "phoneNumber": phone_number
# # #         }
# # #         users_collection.insert_one(default_user)

# # #         return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

# # #     except Exception as e:
# # #         print(f"Error: {e}")
# # #         return jsonify({"message": "An error occurred during signup"}), 500

# # # if __name__ == '__main__':
# # #     app.run(debug=True, port=5003)
# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # from pymongo import MongoClient
# # import time
# # import random
# # from itsdangerous import URLSafeTimedSerializer
# # from flask_mail import Mail, Message
# # import os
# # from dotenv import load_dotenv

# # # Load environment variables
# # load_dotenv()

# # app = Flask(__name__)
# # CORS(app)

# # # Configure Flask-Mail for sending emails
# # app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# # app.config['MAIL_PORT'] = 587
# # app.config['MAIL_USE_TLS'] = True
# # app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')  # Use your email
# # app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')  # Use your email password
# # app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')  # Secret key for token generation

# # mail = Mail(app)

# # # Connect to MongoDB
# # client = MongoClient("mongodb://localhost:27017/")
# # central_db = client['adminsstore']
# # admins_collection = central_db['admins']
# # stores_db = client['storesdb']
# # stores_collection = stores_db['stores']

# # # Token serializer for email verification
# # serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

# # def generate_store_id():
# #     timestamp = int(time.time())
# #     random_number = random.randint(1000, 9999)
# #     return f"STORE-{timestamp}-{random_number}"

# # def generate_otp():
# #     return str(random.randint(100000, 999999))

# # def send_verification_email(email, otp):
# #     subject = "Email Verification for Your Retail Store Account"
# #     body = f"Your OTP for email verification is: {otp}"
# #     msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[email])
# #     msg.body = body
# #     mail.send(msg)

# # @app.route('/signup', methods=['POST'])
# # def signup():
# #     try:
# #         data = request.json
# #         full_name = data.get('fullName')
# #         email = data.get('email')
# #         password = data.get('password')
# #         store_name = data.get('storeName')
# #         store_address = data.get('storeAddress')
# #         phone_number = data.get('phoneNumber')

# #         # Validate required fields
# #         if not all([full_name, email, password, store_name]):
# #             return jsonify({"message": "Missing required fields"}), 400

# #         # Check if email already exists
# #         if admins_collection.find_one({"email": email}):
# #             return jsonify({"message": "Email already registered"}), 400

# #         # Generate OTP and send verification email
# #         otp = generate_otp()
# #         send_verification_email(email, otp)

# #         # Save the OTP and user data temporarily
# #         temp_data = {
# #             "fullName": full_name,
# #             "email": email,
# #             "password": password,
# #             "storeName": store_name,
# #             "storeAddress": store_address,
# #             "phoneNumber": phone_number,
# #             "otp": otp,
# #             "verified": False
# #         }
# #         admins_collection.insert_one(temp_data)

# #         return jsonify({"message": "OTP sent to your email. Please verify to complete signup."}), 200

# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"message": "An error occurred during signup"}), 500

# # @app.route('/verify-otp', methods=['POST'])
# # def verify_otp():
# #     try:
# #         data = request.json
# #         email = data.get('email')
# #         otp = data.get('otp')

# #         # Find the user in the temporary collection
# #         user = admins_collection.find_one({"email": email, "otp": otp})
# #         if not user:
# #             return jsonify({"message": "Invalid OTP"}), 400

# #         # Mark the user as verified
# #         admins_collection.update_one({"email": email}, {"$set": {"verified": True}})

# #         # Generate a store ID
# #         store_id = generate_store_id()

# #         # Save the store information
# #         store_data = {
# #             "storeId": store_id,
# #             "storeName": user['storeName'],
# #             "storeAddress": user['storeAddress']
# #         }
# #         stores_collection.insert_one(store_data)

# #         # Save admin data
# #         admin_data = {
# #             "fullName": user['fullName'],
# #             "email": user['email'],
# #             "password": user['password'],
# #             "storeId": store_id,
# #             "storeName": user['storeName'],
# #             "phoneNumber": user['phoneNumber']
# #         }
# #         admins_collection.insert_one(admin_data)

# #         # Create a new database for the store
# #         store_db = client[store_id]
# #         users_collection = store_db['users']
# #         default_user = {
# #             "storeId": store_id,
# #             "storeName": user['storeName'],
# #             "id": '1',
# #             "password": user['password'],
# #             "role": "admin",
# #             "email": user['email'],
# #             "phoneNumber": user['phoneNumber']
# #         }
# #         users_collection.insert_one(default_user)

# #         return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

# #     except Exception as e:
# #         print(f"Error: {e}")
# #         return jsonify({"message": "An error occurred during OTP verification"}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True, port=5003)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# import time
# import random
# from itsdangerous import URLSafeTimedSerializer
# from flask_mail import Mail, Message
# import os
# from dotenv import load_dotenv

# # Load environment variables
# load_dotenv()

# # Debug: Print environment variables
# print("MAIL_USERNAME:", os.getenv('MAIL_USERNAME'))
# print("MAIL_PASSWORD:", os.getenv('MAIL_PASSWORD'))
# print("SECRET_KEY:", os.getenv('SECRET_KEY'))

# app = Flask(__name__)
# CORS(app)

# # Configure Flask-Mail for sending emails
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')  # Use your email
# app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')  # Use your email password
# app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')  # Secret key for token generation

# # Debug: Print app.config
# print("App Config SECRET_KEY:", app.config['SECRET_KEY'])

# mail = Mail(app)

# # Connect to MongoDB
# client = MongoClient("mongodb://localhost:27017/")
# central_db = client['adminsstore']
# admins_collection = central_db['admins']
# stores_db = client['storesdb']
# stores_collection = stores_db['stores']

# # Token serializer for email verification
# secret_key = app.config['SECRET_KEY']
# if not secret_key:
#     raise ValueError("SECRET_KEY is not set. Please check your .env file.")

# serializer = URLSafeTimedSerializer(secret_key)

# def generate_store_id():
#     timestamp = int(time.time())
#     random_number = random.randint(1000, 9999)
#     return f"STORE-{timestamp}-{random_number}"

# def generate_otp():
#     return str(random.randint(100000, 999999))

# def send_verification_email(email, otp):
#     subject = "Email Verification for Your Retail Store Account"
#     body = f"Your OTP for email verification is: {otp}"
#     msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[email])
#     msg.body = body
#     mail.send(msg)

# @app.route('/signup', methods=['POST'])
# def signup():
#     try:
#         data = request.json
#         full_name = data.get('fullName')
#         email = data.get('email')
#         password = data.get('password')
#         store_name = data.get('storeName')
#         store_address = data.get('storeAddress')
#         phone_number = data.get('phoneNumber')

#         # Validate required fields
#         if not all([full_name, email, password, store_name]):
#             return jsonify({"message": "Missing required fields"}), 400

#         # Check if email already exists
#         if admins_collection.find_one({"email": email}):
#             return jsonify({"message": "Email already registered"}), 400

#         # Generate OTP and send verification email
#         otp = generate_otp()
#         send_verification_email(email, otp)

#         # Save the OTP and user data temporarily
#         temp_data = {
#             "fullName": full_name,
#             "email": email,
#             "password": password,
#             "storeName": store_name,
#             "storeAddress": store_address,
#             "phoneNumber": phone_number,
#             "otp": otp,
#             "verified": False
#         }
#         admins_collection.insert_one(temp_data)

#         return jsonify({"message": "OTP sent to your email. Please verify to complete signup."}), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "An error occurred during signup"}), 500

# @app.route('/verify-otp', methods=['POST'])
# def verify_otp():
#     try:
#         data = request.json
#         email = data.get('email')
#         otp = data.get('otp')

#         # Find the user in the temporary collection
#         user = admins_collection.find_one({"email": email, "otp": otp})
#         if not user:
#             return jsonify({"message": "Invalid OTP"}), 400

#         # Mark the user as verified
#         admins_collection.update_one({"email": email}, {"$set": {"verified": True}})

#         # Generate a store ID
#         store_id = generate_store_id()

#         # Save the store information
#         store_data = {
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "storeAddress": user['storeAddress']
#         }
#         stores_collection.insert_one(store_data)

#         # Save admin data
#         admin_data = {
#             "fullName": user['fullName'],
#             "email": user['email'],
#             "password": user['password'],
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "phoneNumber": user['phoneNumber']
#         }
#         admins_collection.insert_one(admin_data)

#         # Create a new database for the store
#         store_db = client[store_id]
#         users_collection = store_db['users']
#         default_user = {
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "id": '1',
#             "password": user['password'],
#             "role": "admin",
#             "email": user['email'],
#             "phoneNumber": user['phoneNumber']
#         }
#         users_collection.insert_one(default_user)

#         return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "An error occurred during OTP verification"}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5003)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# import time
# import random
# from itsdangerous import URLSafeTimedSerializer
# from flask_mail import Mail, Message
# import os
# from dotenv import load_dotenv

# # Load environment variables
# dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
# load_dotenv(dotenv_path)

# # Debugging: Print loaded values
# print("MAIL_USERNAME:", os.getenv('MAIL_USERNAME'))
# print("MAIL_PASSWORD:", os.getenv('MAIL_PASSWORD'))
# print("SECRET_KEY:", os.getenv('SECRET_KEY'))

# app = Flask(__name__)
# CORS(app)

# # Flask-Mail configuration
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
# app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
# app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# # Ensure SECRET_KEY is loaded
# if not app.config['SECRET_KEY']:
#     raise ValueError("❌ SECRET_KEY is not set. Please check your .env file!")

# mail = Mail(app)

# # MongoDB Connection
# client = MongoClient("mongodb://localhost:27017/")
# central_db = client['adminsstore']
# admins_collection = central_db['admins']
# stores_db = client['storesdb']
# stores_collection = stores_db['stores']

# # Token serializer
# serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

# # Helper Functions
# def generate_store_id():
#     return f"STORE-{int(time.time())}-{random.randint(1000, 9999)}"

# def generate_otp():
#     return str(random.randint(100000, 999999))

# def send_verification_email(email, otp):
#     try:
#         msg = Message(
#             subject="Email Verification for Your Retail Store Account",
#             sender=app.config['MAIL_USERNAME'],
#             recipients=[email],
#             body=f"Your OTP for email verification is: {otp}"
#         )
#         mail.send(msg)
#     except Exception as e:
#         print(f"Error sending email: {e}")

# # Routes
# @app.route('/signup', methods=['POST'])
# def signup():
#     try:
#         data = request.json
#         full_name = data.get('fullName')
#         email = data.get('email')
#         password = data.get('password')
#         store_name = data.get('storeName')
#         store_address = data.get('storeAddress')
#         phone_number = data.get('phoneNumber')

#         # Validate required fields
#         if not all([full_name, email, password, store_name]):
#             return jsonify({"message": "Missing required fields"}), 400

#         # Check if email already exists
#         if admins_collection.find_one({"email": email}):
#             return jsonify({"message": "Email already registered"}), 400

#         # Generate OTP and send verification email
#         otp = generate_otp()
#         send_verification_email(email, otp)

#         # Save user data with OTP
#         admins_collection.insert_one({
#             "fullName": full_name,
#             "email": email,
#             "password": password,
#             "storeName": store_name,
#             "storeAddress": store_address,
#             "phoneNumber": phone_number,
#             "otp": otp,
#             "verified": False
#         })

#         return jsonify({"message": "OTP sent to your email. Please verify."}), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "An error occurred during signup"}), 500

# @app.route('/verify-otp', methods=['POST'])
# def verify_otp():
#     try:
#         data = request.json
#         email = data.get('email')
#         otp = data.get('otp')

#         # Find user with the OTP
#         user = admins_collection.find_one({"email": email, "otp": otp})
#         if not user:
#             return jsonify({"message": "Invalid OTP"}), 400

#         # Mark user as verified
#         admins_collection.update_one({"email": email}, {"$set": {"verified": True}})

#         # Generate store ID and create store
#         store_id = generate_store_id()
#         stores_collection.insert_one({"storeId": store_id, "storeName": user['storeName'], "storeAddress": user['storeAddress']})

#         # Save admin data
#         admins_collection.insert_one({
#             "fullName": user['fullName'],
#             "email": user['email'],
#             "password": user['password'],
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "phoneNumber": user['phoneNumber']
#         })

#         # Create store database and default admin user
#         store_db = client[store_id]
#         store_db['users'].insert_one({
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "id": '1',
#             "password": user['password'],
#             "role": "admin",
#             "email": user['email'],
#             "phoneNumber": user['phoneNumber']
#         })

#         return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "An error occurred during OTP verification"}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5003)
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# import time
# import random
# from itsdangerous import URLSafeTimedSerializer
# from flask_mail import Mail, Message
# import os
# from dotenv import load_dotenv

# # Load environment variables
# dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
# load_dotenv(dotenv_path)

# # Debugging: Print loaded values
# print("MAIL_USERNAME:", os.getenv('MAIL_USERNAME'))
# print("MAIL_PASSWORD:", os.getenv('MAIL_PASSWORD'))
# print("SECRET_KEY:", os.getenv('SECRET_KEY'))

# app = Flask(__name__)
# CORS(app)

# # Flask-Mail configuration
# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 587
# app.config['MAIL_USE_TLS'] = True
# app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
# app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
# app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# # Ensure SECRET_KEY is loaded
# if not app.config['SECRET_KEY']:
#     raise ValueError("❌ SECRET_KEY is not set. Please check your .env file!")

# mail = Mail(app)

# # MongoDB Connection
# client = MongoClient("mongodb://localhost:27017/")
# central_db = client['adminsstore']
# admins_collection = central_db['admins']
# stores_db = client['storesdb']
# stores_collection = stores_db['stores']

# # Token serializer
# serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

# # Helper Functions
# def generate_store_id():
#     return f"STORE-{int(time.time())}-{random.randint(1000, 9999)}"

# def generate_otp():
#     return str(random.randint(100000, 999999))

# def send_email(email, subject, body):
#     try:
#         msg = Message(
#             subject=subject,
#             sender=app.config['MAIL_USERNAME'],
#             recipients=[email],
#             body=body
#         )
#         mail.send(msg)
#     except Exception as e:
#         print(f"Error sending email: {e}")

# # Routes
# @app.route('/signup', methods=['POST'])
# def signup():
#     try:
#         data = request.json
#         full_name = data.get('fullName')
#         email = data.get('email')
#         password = data.get('password')
#         store_name = data.get('storeName')
#         store_address = data.get('storeAddress')
#         phone_number = data.get('phoneNumber')

#         # Validate required fields
#         if not all([full_name, email, password, store_name]):
#             return jsonify({"message": "Missing required fields"}), 400

#         # Check if email already exists
#         if admins_collection.find_one({"email": email}):
#             return jsonify({"message": "Email already registered"}), 400

#         # Generate OTP and send verification email
#         otp = generate_otp()
#         send_email(email, "Email Verification for Your Retail Store Account", f"Your OTP for email verification is: {otp}")

#         # Save user data with OTP
#         admins_collection.insert_one({
#             "fullName": full_name,
#             "email": email,
#             "password": password,
#             "storeName": store_name,
#             "storeAddress": store_address,  
#             "phoneNumber": phone_number,
#             "otp": otp,
#             "verified": False
#         })

#         return jsonify({"message": "OTP sent to your email. Please verify."}), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "An error occurred during signup"}), 500

# @app.route('/verify-otp', methods=['POST'])
# def verify_otp():
#     try:
#         data = request.json
#         email = data.get('email')
#         otp = data.get('otp')

#         # Find user with the OTP
#         user = admins_collection.find_one({"email": email, "otp": otp})
#         if not user:
#             return jsonify({"message": "Invalid OTP"}), 400

#         # Mark user as verified
#         admins_collection.update_one({"email": email}, {"$set": {"verified": True}})

#         # Generate store ID and create store
#         store_id = generate_store_id()
#         stores_collection.insert_one({"storeId": store_id, "storeName": user['storeName'], "storeAddress": user['storeAddress']})

#         # Save admin data
#         admins_collection.insert_one({
#             "fullName": user['fullName'],
#             "email": user['email'],
#             "password": user['password'],
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "phoneNumber": user['phoneNumber']
#         })

#         # Create store database and default admin user
#         store_db = client[store_id]
#         store_db['users'].insert_one({
#             "storeId": store_id,
#             "storeName": user['storeName'],
#             "id": '1',
#             "password": user['password'],
#             "role": "admin",
#             "email": user['email'],
#             "phoneNumber": user['phoneNumber']
#         })

#         # Send store ID to the user's email
#         send_email(
#             email,
#             "Your Retail Store Account is Ready!",
#             f"Your store has been successfully created!\n\nStore ID: {store_id}\nStore Name: {user['storeName']}\n\nPlease save this information for future reference."
#         )

#         return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

#     except Exception as e:
#         print(f"Error: {e}")
#         return jsonify({"message": "An error occurred during OTP verification"}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5003)

from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import time
import random
from itsdangerous import URLSafeTimedSerializer
from flask_mail import Mail, Message
import os
from dotenv import load_dotenv
import logging
import socket

# Set up logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('signup_app.log'),
        logging.StreamHandler()
    ]
)

# Load environment variables
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = Flask(__name__)
CORS(app)

# Flask-Mail configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

# Log environment variables for debugging (mask sensitive parts)
logging.debug(f"MAIL_USERNAME: {app.config['MAIL_USERNAME']}")
logging.debug(f"MAIL_PASSWORD: {'*' * len(app.config['MAIL_PASSWORD'] or '')}")
logging.debug(f"SECRET_KEY: {'*' * len(app.config['SECRET_KEY'] or '')}")

# Validate critical configurations
if not app.config['MAIL_USERNAME'] or not app.config['MAIL_PASSWORD']:
    logging.error("MAIL_USERNAME or MAIL_PASSWORD not set in .env")
    raise ValueError("❌ MAIL_USERNAME or MAIL_PASSWORD not set. Check your .env file!")
if not app.config['SECRET_KEY']:
    logging.error("SECRET_KEY not set in .env")
    raise ValueError("❌ SECRET_KEY is not set. Check your .env file!")

mail = Mail(app)

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")
central_db = client['adminsstore']
admins_collection = central_db['admins']
stores_db = client['storesdb']
stores_collection = stores_db['stores']

# Token serializer
serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])

# Helper Functions
def generate_store_id():
    return f"STORE-{int(time.time())}-{random.randint(1000, 9999)}"

def generate_otp():
    return str(random.randint(100000, 999999))

def send_email(email, subject, body):
    try:
        # Test network connectivity
        socket.getaddrinfo('smtp.gmail.com', 587)
        logging.debug(f"Resolved SMTP server: smtp.gmail.com:587")

        msg = Message(
            subject=subject,
            sender=app.config['MAIL_USERNAME'],
            recipients=[email],
            body=body
        )
        mail.send(msg)
        logging.info(f"Email sent successfully to {email} with subject: {subject}")
    except socket.gaierror as e:
        logging.error(f"DNS resolution failed for smtp.gmail.com: {e}")
        raise Exception(f"Failed to resolve SMTP server: {e}")
    except Exception as e:
        logging.error(f"Error sending email to {email}: {e}")
        raise Exception(f"Email sending failed: {e}")

# Routes
@app.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        full_name = data.get('fullName')
        email = data.get('email')
        password = data.get('password')
        store_name = data.get('storeName')
        store_address = data.get('storeAddress')
        phone_number = data.get('phoneNumber')

        # Validate required fields
        if not all([full_name, email, password, store_name]):
            logging.warning("Signup attempt with missing required fields")
            return jsonify({"message": "Missing required fields"}), 400

        # Check if email already exists
        if admins_collection.find_one({"email": email}):
            logging.warning(f"Signup attempt with already registered email: {email}")
            return jsonify({"message": "Email already registered"}), 400

        # Generate OTP
        otp = generate_otp()
        logging.debug(f"Generated OTP for {email}: {otp}")

        # Send OTP email
        send_email(email, "Email Verification for Your Retail Store Account", f"Your OTP for email verification is: {otp}")

        # Save user data with OTP (temporary unverified state)
        admins_collection.insert_one({
            "fullName": full_name,
            "email": email,
            "password": password,
            "storeName": store_name,
            "storeAddress": store_address,
            "phoneNumber": phone_number,
            "otp": otp,
            "verified": False
        })
        logging.info(f"User {email} registered with OTP, awaiting verification")

        return jsonify({"message": "OTP sent to your email. Please verify."}), 200

    except Exception as e:
        logging.error(f"Signup error: {e}")
        return jsonify({"message": f"An error occurred during signup: {str(e)}"}), 500

@app.route('/verify-otp', methods=['POST'])
def verify_otp():
    try:
        data = request.json
        email = data.get('email')
        otp = data.get('otp')

        # Find user with the OTP
        user = admins_collection.find_one({"email": email, "otp": otp})
        if not user:
            logging.warning(f"Invalid OTP attempt for {email}: {otp}")
            return jsonify({"message": "Invalid OTP"}), 400

        # Generate store ID and create store
        store_id = generate_store_id()
        stores_collection.insert_one({"storeId": store_id, "storeName": user['storeName'], "storeAddress": user['storeAddress']})
        logging.debug(f"Store created: {store_id} for {user['storeName']}")

        # Update existing admin record with storeId and mark as verified
        update_result = admins_collection.update_one(
            {"email": email, "otp": otp},
            {"$set": {
                "storeId": store_id,
                "verified": True,
                "otp": None  # Clear OTP after verification
            }}
        )
        if update_result.matched_count == 0:
            logging.error(f"Failed to update admin record for {email}")
            return jsonify({"message": "Failed to update admin record"}), 500

        logging.debug(f"User {email} updated with storeId {store_id} and marked as verified")

        # Create store database and default admin user
        store_db = client[store_id]
        store_db['users'].insert_one({
            "storeId": store_id,
            "storeName": user['storeName'],
            "id": '1',
            "password": user['password'],
            "role": "admin",
            "email": user['email'],
            "phoneNumber": user['phoneNumber']
        })
        logging.debug(f"Admin user created in store database {store_id}")

        # Send store ID email
        send_email(
            email,
            "Your Retail Store Account is Ready!",
            f"Your store has been successfully created!\n\nStore ID: {store_id}\nStore Name: {user['storeName']}\n\nPlease save this information for future reference."
        )
        logging.info(f"Signup completed for {email}, store ID: {store_id}")

        return jsonify({"message": "Signup successful!", "storeId": store_id}), 200

    except Exception as e:
        logging.error(f"OTP verification error: {e}")
        return jsonify({"message": f"An error occurred during OTP verification: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5003)