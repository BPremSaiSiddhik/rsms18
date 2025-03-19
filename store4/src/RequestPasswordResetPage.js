import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RequestPasswordResetPage = () => {
  const [storeId, setStoreId] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRequestReset = async () => {
    if (!storeId || !userId) {
      toast.error("Store ID and User ID are required!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5001/request_password_reset", {
        storeId,
        userId,
      });
      toast.success(response.data.message);
      setStoreId("");
      setUserId("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to request password reset");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Request Password Reset</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Store ID</label>
            <input
              type="text"
              value={storeId}
              onChange={(e) => setStoreId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleRequestReset}
            disabled={isLoading}
            className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {isLoading ? "Sending..." : "Request Reset"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestPasswordResetPage;