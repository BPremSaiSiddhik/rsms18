import React, { useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useStore } from "./StoreContext"; // Adjust the import path as needed

const AddEmployeeFace = () => {
  const { storeId } = useStore(); // Get storeId from context
  const webcamRef = useRef(null);
  const [employeeId, setEmployeeId] = useState("");
  const [status, setStatus] = useState("");

  const captureAndSend = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const base64Image = imageSrc.split(",")[1]; // Extract base64 data

    try {
      const response = await axios.post(
        "http://localhost:5004/employees",
        {
          employeeId,
          image: `data:image/jpeg;base64,${base64Image}`, // Send base64 image
        },
        {
          headers: { storeId }, // Send storeId in the headers
        }
      );
      setStatus("Employee added successfully!");
    } catch (err) {
      console.error("Failed to add employee:", err);
      setStatus("Failed to add employee.");
    }
  };

  return (
    <div>
      <h1>Add Employee Face</h1>

      {/* Webcam feed */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />

      {/* Employee ID input */}
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />

      {/* Capture button */}
      <button onClick={captureAndSend}>Capture and Add Face</button>

      {/* Status message */}
      {status && <p>{status}</p>}
    </div>
  );
};

export default AddEmployeeFace;