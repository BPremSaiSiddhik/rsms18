# # from flask import Flask, request, jsonify
# # from flask_cors import CORS
# # from pymongo import MongoClient
# # from bson import ObjectId
# # from bson.errors import InvalidId
# # import os

# # app = Flask(__name__)
# # CORS(app)

# # # MongoDB Client
# # client = MongoClient('mongodb://localhost:27017/')

# # def get_store_db(store_id):
# #     """Retrieve the database for the specified store ID."""
# #     if not store_id:
# #         raise ValueError("Store ID is required.")
# #     return client[store_id]

# # @app.errorhandler(Exception)
# # def handle_exception(e):
# #     """Global error handler."""
# #     return jsonify({"error": str(e)}), 500

# # # Route to get all suppliers for a specific store
# # @app.route('/suppliers', methods=['GET'])
# # def get_suppliers():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         suppliers_collection = store_db['suppliers']
# #         suppliers = list(suppliers_collection.find())
# #         for supplier in suppliers:
# #             supplier['_id'] = str(supplier['_id'])  # Convert ObjectId to string
# #         return jsonify(suppliers)
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # # Route to add a new supplier
# # # @app.route('/suppliers', methods=['POST'])
# # # def add_supplier():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     supplier_data = request.json
# # #     if not supplier_data:
# # #         return jsonify({"error": "Supplier data is required"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Insert new supplier
# # #         result = suppliers_collection.insert_one(supplier_data)
# # #         supplier_id = str(result.inserted_id)

# # #         return jsonify({"message": "Supplier added successfully", "supplier_id": supplier_id}), 201
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500
# # # @app.route('/suppliers', methods=['POST'])
# # # def add_supplier():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     supplier_data = request.json
# # #     if not supplier_data:
# # #         return jsonify({"error": "Supplier data is required"}), 400

# # #     # Validate required fields
# # #     required_fields = ['name', 'location', 'category', 'dealerInfo']
# # #     for field in required_fields:
# # #         if field not in supplier_data:
# # #             return jsonify({"error": f"Missing required field: {field}"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Insert new supplier
# # #         result = suppliers_collection.insert_one(supplier_data)
# # #         supplier_id = str(result.inserted_id)

# # #         return jsonify({"message": "Supplier added successfully", "supplier_id": supplier_id}), 201
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500
# # # # Route to update a supplier
# # # @app.route('/suppliers/<string:supplier_id>', methods=['PUT'])
# # # def update_supplier(supplier_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     supplier_data = request.json
# # #     if not supplier_data:
# # #         return jsonify({"error": "Supplier data is required"}), 400

# # #     try:
# # #         supplier_id_obj = ObjectId(supplier_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid supplier ID"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Update the supplier
# # #         result = suppliers_collection.update_one(
# # #             {'_id': supplier_id_obj},
# # #             {'$set': supplier_data}
# # #         )

# # #         if result.matched_count == 0:
# # #             return jsonify({"error": "Supplier not found"}), 404

# # #         return jsonify({"message": "Supplier updated successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # # Route to delete a supplier
# # # @app.route('/suppliers/<string:supplier_id>', methods=['DELETE'])
# # # def delete_supplier(supplier_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         supplier_id_obj = ObjectId(supplier_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid supplier ID"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Delete the supplier
# # #         result = suppliers_collection.delete_one({'_id': supplier_id_obj})

# # #         if result.deleted_count == 0:
# # #             return jsonify({"error": "Supplier not found"}), 404

# # #         return jsonify({"message": "Supplier deleted successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # if __name__ == '__main__':
# # #     app.run(debug=True,port=5015)   


# # # from flask import Flask, request, jsonify
# # # from flask_cors import CORS
# # # from pymongo import MongoClient
# # # from bson import ObjectId
# # # from bson.errors import InvalidId
# # # import os

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

# # # # Route to get all suppliers for a specific store
# # # @app.route('/suppliers', methods=['GET'])
# # # def get_suppliers():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']
# # #         suppliers = list(suppliers_collection.find())
# # #         for supplier in suppliers:
# # #             supplier['_id'] = str(supplier['_id'])  # Convert ObjectId to string
# # #         return jsonify(suppliers)
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # @app.route('/suppliers', methods=['POST'])
# # # def add_supplier():
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     supplier_data = request.json
# # #     if not supplier_data:
# # #         return jsonify({"error": "Supplier data is required"}), 400

# # #     # Validate required fields
# # #     required_fields = ['name', 'location', 'category', 'dealerInfo']
# # #     for field in required_fields:
# # #         if field not in supplier_data:
# # #             return jsonify({"error": f"Missing required field: {field}"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Insert new supplier
# # #         result = suppliers_collection.insert_one(supplier_data)
# # #         supplier_id = str(result.inserted_id)

# # #         return jsonify({"message": "Supplier added successfully", "supplier_id": supplier_id}), 201
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # # Route to update a supplier
# # # @app.route('/suppliers/<string:supplier_id>', methods=['PUT'])
# # # def update_supplier(supplier_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     supplier_data = request.json
# # #     if not supplier_data:
# # #         return jsonify({"error": "Supplier data is required"}), 400

# # #     try:
# # #         supplier_id_obj = ObjectId(supplier_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid supplier ID"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Update the supplier
# # #         result = suppliers_collection.update_one(
# # #             {'_id': supplier_id_obj},
# # #             {'$set': supplier_data}
# # #         )

# # #         if result.matched_count == 0:
# # #             return jsonify({"error": "Supplier not found"}), 404

# # #         return jsonify({"message": "Supplier updated successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # # Route to delete a supplier
# # # @app.route('/suppliers/<string:supplier_id>', methods=['DELETE'])
# # # def delete_supplier(supplier_id):
# # #     store_id = request.args.get('storeId')
# # #     if not store_id:
# # #         return jsonify({"error": "Store ID is required"}), 400

# # #     try:
# # #         supplier_id_obj = ObjectId(supplier_id)
# # #     except InvalidId:
# # #         return jsonify({"error": "Invalid supplier ID"}), 400

# # #     try:
# # #         store_db = get_store_db(store_id)
# # #         suppliers_collection = store_db['suppliers']

# # #         # Delete the supplier
# # #         result = suppliers_collection.delete_one({'_id': supplier_id_obj})

# # #         if result.deleted_count == 0:
# # #             return jsonify({"error": "Supplier not found"}), 404

# # #         return jsonify({"message": "Supplier deleted successfully"}), 200
# # #     except Exception as e:
# # #         return jsonify({"error": str(e)}), 500

# # # if __name__ == '__main__':
# # #     app.run(debug=True, port=5015)

# # from flask import Flask, request, jsonify
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

# # @app.errorhandler(Exception)
# # def handle_exception(e):
# #     """Global error handler."""
# #     return jsonify({"error": str(e)}), 500

# # @app.route('/suppliers', methods=['GET'])
# # def get_suppliers():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         suppliers_collection = store_db['suppliers']
# #         suppliers = list(suppliers_collection.find())
# #         for supplier in suppliers:
# #             supplier['_id'] = str(supplier['_id'])  # Convert ObjectId to string
# #         return jsonify(suppliers), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/suppliers', methods=['POST'])
# # def add_supplier():
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     supplier_data = request.get_json()
# #     if not supplier_data:
# #         return jsonify({"error": "Supplier data is required"}), 400

# #     required_fields = [
# #         'name', 'location', 'category', 'dealerInfo', 'shopAddress', 'pincode',
# #         'gstNo', 'taxId', 'accountDetails', 'paymentTerms', 'billingAddress'
# #     ]
# #     dealer_required_fields = ['dealerName', 'phone1', 'email']

# #     for field in required_fields:
# #         if field not in supplier_data or not supplier_data[field]:
# #             return jsonify({"error": f"Missing or empty required field: {field}"}), 400

# #     if 'dealerInfo' not in supplier_data or not isinstance(supplier_data['dealerInfo'], dict):
# #         return jsonify({"error": "dealerInfo must be an object"}), 400

# #     for field in dealer_required_fields:
# #         if field not in supplier_data['dealerInfo'] or not supplier_data['dealerInfo'][field]:
# #             return jsonify({"error": f"Missing or empty required field in dealerInfo: {field}"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         suppliers_collection = store_db['suppliers']
# #         result = suppliers_collection.insert_one(supplier_data)
# #         supplier_id = str(result.inserted_id)
# #         return jsonify({"message": "Supplier added successfully", "supplier_id": supplier_id}), 201
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/suppliers/<string:supplier_id>', methods=['PUT'])
# # def update_supplier(supplier_id):
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     supplier_data = request.get_json()
# #     if not supplier_data:
# #         return jsonify({"error": "Supplier data is required"}), 400

# #     required_fields = [
# #         'name', 'location', 'category', 'shopAddress', 'pincode', 'gstNo', 'taxId',
# #         'accountDetails', 'paymentTerms', 'billingAddress'
# #     ]
# #     dealer_required_fields = ['dealerName', 'phone1', 'email']

# #     for field in required_fields:
# #         if field not in supplier_data or not supplier_data[field]:
# #             return jsonify({"error": f"Missing or empty required field: {field}"}), 400

# #     if 'dealerInfo' not in supplier_data or not isinstance(supplier_data['dealerInfo'], dict):
# #         return jsonify({"error": "dealerInfo must be an object"}), 400

# #     for field in dealer_required_fields:
# #         if field not in supplier_data['dealerInfo'] or not supplier_data['dealerInfo'][field]:
# #             return jsonify({"error": f"Missing or empty required field in dealerInfo: {field}"}), 400

# #     try:
# #         supplier_id_obj = ObjectId(supplier_id)
# #     except InvalidId:
# #         return jsonify({"error": "Invalid supplier ID"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         suppliers_collection = store_db['suppliers']
# #         result = suppliers_collection.update_one(
# #             {'_id': supplier_id_obj},
# #             {'$set': supplier_data}
# #         )
# #         if result.matched_count == 0:
# #             return jsonify({"error": "Supplier not found"}), 404
# #         return jsonify({"message": "Supplier updated successfully"}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # @app.route('/suppliers/<string:supplier_id>', methods=['DELETE'])
# # def delete_supplier(supplier_id):
# #     store_id = request.args.get('storeId')
# #     if not store_id:
# #         return jsonify({"error": "Store ID is required"}), 400

# #     try:
# #         supplier_id_obj = ObjectId(supplier_id)
# #     except InvalidId:
# #         return jsonify({"error": "Invalid supplier ID"}), 400

# #     try:
# #         store_db = get_store_db(store_id)
# #         suppliers_collection = store_db['suppliers']
# #         result = suppliers_collection.delete_one({'_id': supplier_id_obj})
# #         if result.deleted_count == 0:
# #             return jsonify({"error": "Supplier not found"}), 404
# #         return jsonify({"message": "Supplier deleted successfully"}), 200
# #     except Exception as e:
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == '__main__':
# #     app.run(debug=True, port=5015)

# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from pymongo import MongoClient
# from bson import ObjectId
# from bson.errors import InvalidId
# import logging

# app = Flask(__name__)
# CORS(app)

# # Configure logging
# logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
# logger = logging.getLogger(__name__)

# # MongoDB Client
# client = MongoClient('mongodb://localhost:27017/')

# def get_store_db(store_id):
#     """Retrieve the database for the specified store ID."""
#     if not store_id:
#         raise ValueError("Store ID is required.")
#     return client[store_id]

# @app.errorhandler(Exception)
# def handle_exception(e):
#     """Global error handler."""
#     logger.error(f"Unhandled exception: {str(e)}")
#     return jsonify({"error": str(e)}), 500

# @app.route('/suppliers', methods=['GET'])
# def get_suppliers():
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         suppliers_collection = store_db['suppliers']
#         suppliers = list(suppliers_collection.find())
#         for supplier in suppliers:
#             supplier['_id'] = str(supplier['_id'])
#         logger.info(f"Retrieved {len(suppliers)} suppliers for store {store_id}")
#         return jsonify(suppliers), 200
#     except Exception as e:
#         logger.error(f"Error retrieving suppliers: {str(e)}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/suppliers', methods=['POST'])
# def add_supplier():
#     store_id = request.args.get('storeId')
#     if not store_id:
#         return jsonify({"error": "Store ID is required"}), 400

#     supplier_data = request.get_json()
#     if not supplier_data:
#         return jsonify({"error": "Supplier data is required"}), 400

#     required_fields = [
#         'name', 'location', 'category', 'shopAddress', 'pincode',
#         'gstNo', 'taxId', 'accountDetails', 'paymentTerms', 'billingAddress'
#     ]
#     dealer_required_fields = ['dealerName', 'phone1', 'email']

#     for field in required_fields:
#         if field not in supplier_data or not supplier_data[field]:
#             logger.warning(f"Missing or empty required field: {field}")
#             return jsonify({"error": f"Missing or empty required field: {field}"}), 400

#     if 'dealerInfo' not in supplier_data or not isinstance(supplier_data['dealerInfo'], dict):
#         logger.warning("dealerInfo must be an object")
#         return jsonify({"error": "dealerInfo must be an object"}), 400

#     for field in dealer_required_fields:
#         if field not in supplier_data['dealerInfo'] or not supplier_data['dealerInfo'][field]:
#             logger.warning(f"Missing or empty required field in dealerInfo: {field}")
#             return jsonify({"error": f"Missing or empty required field in dealerInfo: {field}"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         suppliers_collection = store_db['suppliers']
#         result = suppliers_collection.insert_one(supplier_data)
#         supplier_id = str(result.inserted_id)
#         logger.info(f"Supplier added with ID: {supplier_id} for store {store_id}")
#         return jsonify({"message": "Supplier added successfully", "supplier_id": supplier_id}), 201
#     except Exception as e:
#         logger.error(f"Error adding supplier: {str(e)}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/suppliers/<string:supplier_id>', methods=['PUT'])
# def update_supplier(supplier_id):
#     store_id = request.args.get('storeId')
#     if not store_id:
#         logger.warning("Store ID is required")
#         return jsonify({"error": "Store ID is required"}), 400

#     supplier_data = request.get_json()
#     if not supplier_data:
#         logger.warning("Supplier data is required")
#         return jsonify({"error": "Supplier data is required"}), 400

#     required_fields = [
#         'name', 'location', 'category', 'shopAddress', 'pincode', 'gstNo', 'taxId',
#         'accountDetails', 'paymentTerms', 'billingAddress'
#     ]
#     dealer_required_fields = ['dealerName', 'phone1', 'email']

#     for field in required_fields:
#         if field not in supplier_data or not supplier_data[field]:
#             logger.warning(f"Missing or empty required field: {field}")
#             return jsonify({"error": f"Missing or empty required field: {field}"}), 400

#     if 'dealerInfo' not in supplier_data or not isinstance(supplier_data['dealerInfo'], dict):
#         logger.warning("dealerInfo must be an object")
#         return jsonify({"error": "dealerInfo must be an object"}), 400

#     for field in dealer_required_fields:
#         if field not in supplier_data['dealerInfo'] or not supplier_data['dealerInfo'][field]:
#             logger.warning(f"Missing or empty required field in dealerInfo: {field}")
#             return jsonify({"error": f"Missing or empty required field in dealerInfo: {field}"}), 400

#     try:
#         supplier_id_obj = ObjectId(supplier_id)
#         logger.debug(f"Converted supplier_id {supplier_id} to ObjectId")
#     except InvalidId:
#         logger.error(f"Invalid supplier ID: {supplier_id}")
#         return jsonify({"error": "Invalid supplier ID"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         suppliers_collection = store_db['suppliers']
#         result = suppliers_collection.update_one(
#             {'_id': supplier_id_obj},
#             {'$set': supplier_data}
#         )
#         if result.matched_count == 0:
#             logger.warning(f"Supplier not found with ID: {supplier_id}")
#             return jsonify({"error": "Supplier not found"}), 404
#         logger.info(f"Supplier updated successfully with ID: {supplier_id}")
#         return jsonify({"message": "Supplier updated successfully"}), 200
#     except Exception as e:
#         logger.error(f"Error updating supplier {supplier_id}: {str(e)}")
#         return jsonify({"error": str(e)}), 500

# @app.route('/suppliers/<string:supplier_id>', methods=['DELETE'])
# def delete_supplier(supplier_id):
#     store_id = request.args.get('storeId')
#     if not store_id:
#         logger.warning("Store ID is required")
#         return jsonify({"error": "Store ID is required"}), 400

#     try:
#         supplier_id_obj = ObjectId(supplier_id)
#         logger.debug(f"Converted supplier_id {supplier_id} to ObjectId")
#     except InvalidId:
#         logger.error(f"Invalid supplier ID: {supplier_id}")
#         return jsonify({"error": "Invalid supplier ID"}), 400

#     try:
#         store_db = get_store_db(store_id)
#         suppliers_collection = store_db['suppliers']
#         result = suppliers_collection.delete_one({'_id': supplier_id_obj})
#         if result.deleted_count == 0:
#             logger.warning(f"Supplier not found with ID: {supplier_id}")
#             return jsonify({"error": "Supplier not found"}), 404
#         logger.info(f"Supplier deleted successfully with ID: {supplier_id}")
#         return jsonify({"message": "Supplier deleted successfully"}), 200
#     except Exception as e:
#         logger.error(f"Error deleting supplier {supplier_id}: {str(e)}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(debug=True, port=5015)
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from bson.errors import InvalidId
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# MongoDB Client
client = MongoClient('mongodb://localhost:27017/')

def get_store_db(store_id):
    """Retrieve the database for the specified store ID."""
    if not store_id:
        raise ValueError("Store ID is required.")
    return client[store_id]

@app.errorhandler(Exception)
def handle_exception(e):
    """Global error handler."""
    logger.error(f"Unhandled exception: {str(e)}")
    return jsonify({"error": str(e)}), 500

@app.route('/suppliers', methods=['GET'])
def get_suppliers():
    store_id = request.args.get('storeId')
    if not store_id:
        logger.warning("Store ID is required")
        return jsonify({"error": "Store ID is required"}), 400

    try:
        store_db = get_store_db(store_id)
        suppliers_collection = store_db['suppliers']
        suppliers = list(suppliers_collection.find())
        for supplier in suppliers:
            supplier['_id'] = str(supplier['_id'])
        logger.info(f"Retrieved {len(suppliers)} suppliers for store {store_id}")
        return jsonify(suppliers), 200
    except Exception as e:
        logger.error(f"Error retrieving suppliers: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/suppliers', methods=['POST'])
def add_supplier():
    store_id = request.args.get('storeId')
    if not store_id:
        logger.warning("Store ID is required")
        return jsonify({"error": "Store ID is required"}), 400

    supplier_data = request.get_json()
    if not supplier_data:
        logger.warning("Supplier data is required")
        return jsonify({"error": "Supplier data is required"}), 400

    required_fields = [
        'name', 'location', 'category', 'shopAddress', 'pincode',
        'gstNo', 'taxId', 'accountDetails', 'paymentTerms', 'billingAddress'
    ]
    dealer_required_fields = ['dealerName', 'phone1', 'email']

    for field in required_fields:
        if field not in supplier_data or not supplier_data[field]:
            logger.warning(f"Missing or empty required field: {field}")
            return jsonify({"error": f"Missing or empty required field: {field}"}), 400

    if 'dealerInfo' not in supplier_data or not isinstance(supplier_data['dealerInfo'], dict):
        logger.warning("dealerInfo must be an object")
        return jsonify({"error": "dealerInfo must be an object"}), 400

    for field in dealer_required_fields:
        if field not in supplier_data['dealerInfo'] or not supplier_data['dealerInfo'][field]:
            logger.warning(f"Missing or empty required field in dealerInfo: {field}")
            return jsonify({"error": f"Missing or empty required field in dealerInfo: {field}"}), 400

    try:
        store_db = get_store_db(store_id)
        suppliers_collection = store_db['suppliers']
        result = suppliers_collection.insert_one(supplier_data)
        supplier_id = str(result.inserted_id)
        logger.info(f"Supplier added with ID: {supplier_id} for store {store_id}")
        return jsonify({"message": "Supplier added successfully", "supplier_id": supplier_id}), 201
    except Exception as e:
        logger.error(f"Error adding supplier: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/suppliers/<string:supplier_id>', methods=['PUT'])
def update_supplier(supplier_id):
    store_id = request.args.get('storeId')
    if not store_id:
        logger.warning("Store ID is required")
        return jsonify({"error": "Store ID is required"}), 400

    supplier_data = request.get_json()
    if not supplier_data:
        logger.warning("Supplier data is required")
        return jsonify({"error": "Supplier data is required"}), 400

    # Log the incoming data for debugging
    logger.debug(f"Received supplier data for update: {supplier_data}")

    required_fields = [
        'name', 'location', 'category', 'shopAddress', 'pincode', 'gstNo', 'taxId',
        'accountDetails', 'paymentTerms', 'billingAddress'
    ]
    dealer_required_fields = ['dealerName', 'phone1', 'email']

    # Ensure supplier_data is a dictionary
    if not isinstance(supplier_data, dict):
        logger.error("Supplier data must be a dictionary")
        return jsonify({"error": "Supplier data must be a dictionary"}), 400

    for field in required_fields:
        if field not in supplier_data or not supplier_data[field]:
            logger.warning(f"Missing or empty required field: {field}")
            return jsonify({"error": f"Missing or empty required field: {field}"}), 400

    if 'dealerInfo' not in supplier_data or not isinstance(supplier_data['dealerInfo'], dict):
        logger.warning("dealerInfo must be an object")
        return jsonify({"error": "dealerInfo must be an object"}), 400

    for field in dealer_required_fields:
        if field not in supplier_data['dealerInfo'] or not supplier_data['dealerInfo'][field]:
            logger.warning(f"Missing or empty required field in dealerInfo: {field}")
            return jsonify({"error": f"Missing or empty required field in dealerInfo: {field}"}), 400

    try:
        supplier_id_obj = ObjectId(supplier_id)
        logger.debug(f"Converted supplier_id {supplier_id} to ObjectId")
    except InvalidId:
        logger.error(f"Invalid supplier ID: {supplier_id}")
        return jsonify({"error": "Invalid supplier ID"}), 400

    try:
        store_db = get_store_db(store_id)
        suppliers_collection = store_db['suppliers']
        # Remove _id from supplier_data if present, as MongoDB doesn’t allow updating _id
        if '_id' in supplier_data:
            del supplier_data['_id']
        result = suppliers_collection.update_one(
            {'_id': supplier_id_obj},
            {'$set': supplier_data}
        )
        if result.matched_count == 0:
            logger.warning(f"Supplier not found with ID: {supplier_id}")
            return jsonify({"error": "Supplier not found"}), 404
        logger.info(f"Supplier updated successfully with ID: {supplier_id}")
        return jsonify({"message": "Supplier updated successfully"}), 200
    except Exception as e:
        logger.error(f"Error updating supplier {supplier_id}: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/suppliers/<string:supplier_id>', methods=['DELETE'])
def delete_supplier(supplier_id):
    store_id = request.args.get('storeId')
    if not store_id:
        logger.warning("Store ID is required")
        return jsonify({"error": "Store ID is required"}), 400

    try:
        supplier_id_obj = ObjectId(supplier_id)
        logger.debug(f"Converted supplier_id {supplier_id} to ObjectId")
    except InvalidId:
        logger.error(f"Invalid supplier ID: {supplier_id}")
        return jsonify({"error": "Invalid supplier ID"}), 400

    try:
        store_db = get_store_db(store_id)
        suppliers_collection = store_db['suppliers']
        result = suppliers_collection.delete_one({'_id': supplier_id_obj})
        if result.deleted_count == 0:
            logger.warning(f"Supplier not found with ID: {supplier_id}")
            return jsonify({"error": "Supplier not found"}), 404
        logger.info(f"Supplier deleted successfully with ID: {supplier_id}")
        return jsonify({"message": "Supplier deleted successfully"}), 200
    except Exception as e:
        logger.error(f"Error deleting supplier {supplier_id}: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5015)