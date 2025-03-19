// // import React, { useRef, useState } from "react";
// // import Webcam from "react-webcam";

// // const FacialRecognitionAttendance = () => {
// //   const webcamRef = useRef(null);
// //   const [attendanceStatus, setAttendanceStatus] = useState("");

// //   const captureAndSend = async () => {
// //     const imageSrc = webcamRef.current.getScreenshot();
// //     const formData = new FormData();
// //     formData.append("image", dataURItoBlob(imageSrc), "face.jpg");

// //     try {
// //       const response = await fetch("http://localhost:5000/record-attendance", {
// //         method: "POST",
// //         body: formData,
// //       });
// //       const result = await response.json();
// //       setAttendanceStatus(result.message);
// //     } catch (err) {
// //       console.error("Failed to record attendance:", err);
// //       setAttendanceStatus("Failed to record attendance.");
// //     }
// //   };

// //   const dataURItoBlob = (dataURI) => {
// //     const byteString = atob(dataURI.split(",")[1]);
// //     const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
// //     const ab = new ArrayBuffer(byteString.length);
// //     const ia = new Uint8Array(ab);
// //     for (let i = 0; i < byteString.length; i++) {
// //       ia[i] = byteString.charCodeAt(i);
// //     }
// //     return new Blob([ab], { type: mimeString });
// //   };

// //   return (
// //     <div>
// //       <h1>Facial Recognition Attendance</h1>
// //       <Webcam
// //         audio={false}
// //         ref={webcamRef}
// //         screenshotFormat="image/jpeg"
// //         width={640}
// //         height={480}
// //       />
// //       <button onClick={captureAndSend}>Capture and Record Attendance</button>
// //       {attendanceStatus && <p>{attendanceStatus}</p>}
// //     </div>
// //   );
// // };

// // export default FacialRecognitionAttendance;

// // import React, { useRef, useState, useContext } from "react";
// // import Webcam from "react-webcam";
// // import axios from "axios";
// // import { useStore } from "./StoreContext"; // Adjust the import path as needed

// // const FacialRecognitionAttendance = () => {
// //   const { storeId } = useStore(); // Get storeId from context
// //   const webcamRef = useRef(null);
// //   const [attendanceStatus, setAttendanceStatus] = useState("");

// //   const captureAndSend = async () => {
// //     const imageSrc = webcamRef.current.getScreenshot();
// //     const formData = new FormData();
// //     formData.append("image", dataURItoBlob(imageSrc), "face.jpg");

// //     try {
// //       const response = await axios.post("http://localhost:5018/record-attendance", formData, {
// //         headers: { storeId }, // Send storeId in the headers
// //       });
// //       setAttendanceStatus(response.data.message);
// //     } catch (err) {
// //       console.error("Failed to record attendance:", err);
// //       setAttendanceStatus("Failed to record attendance.");
// //     }
// //   };

// //   const dataURItoBlob = (dataURI) => {
// //     const byteString = atob(dataURI.split(",")[1]);
// //     const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
// //     const ab = new ArrayBuffer(byteString.length);
// //     const ia = new Uint8Array(ab);
// //     for (let i = 0; i < byteString.length; i++) {
// //       ia[i] = byteString.charCodeAt(i);
// //     }
// //     return new Blob([ab], { type: mimeString });
// //   };

// //   return (
// //     <div>
// //       <h1>Facial Recognition Attendance</h1>
// //       <Webcam
// //         audio={false}
// //         ref={webcamRef}
// //         screenshotFormat="image/jpeg"
// //         width={640}
// //         height={480}
// //       />
// //       <button onClick={captureAndSend}>Capture and Record Attendance</button>
// //       {attendanceStatus && <p>{attendanceStatus}</p>}
// //     </div>
// //   );
// // };

// // export default FacialRecognitionAttendance;

// import React, { useRef, useState, useContext } from "react";
// import Webcam from "react-webcam";
// import axios from "axios";
// import { useStore } from "./StoreContext"; // Adjust the import path as needed

// const FacialRecognitionAttendance = () => {
//   // Get storeId from the context
//   const { storeId } = useStore();

//   // Reference to the webcam component
//   const webcamRef = useRef(null);

//   // State to store the attendance status
//   const [attendanceStatus, setAttendanceStatus] = useState("");

//   // Function to capture and send the image
//   const captureAndSend = async () => {
//     // Capture the current frame from the webcam
//     const imageSrc = webcamRef.current.getScreenshot();

//     // Convert the base64 image to a Blob object
//     const formData = new FormData();
//     formData.append("image", dataURItoBlob(imageSrc), "face.jpg");

//     try {
//       // Send the image to the Flask backend
//       const response = await axios.post("http://localhost:5018/record-attendance", formData, {
//         headers: { storeId }, // Send storeId in the headers
//       });

//       // Update the attendance status
//       setAttendanceStatus(response.data.message);
//     } catch (err) {
//       console.error("Failed to record attendance:", err);
//       setAttendanceStatus("Failed to record attendance.");
//     }
//   };

//   // Function to convert a base64 image to a Blob object
//   const dataURItoBlob = (dataURI) => {
//     const byteString = atob(dataURI.split(",")[1]);
//     const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
//     const ab = new ArrayBuffer(byteString.length);
//     const ia = new Uint8Array(ab);
//     for (let i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ab], { type: mimeString });
//   };

//   return (
//     <div>
//       <h1>Facial Recognition Attendance</h1>

//       {/* Webcam feed */}
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         width={640}
//         height={480}
//       />

//       {/* Capture button */}
//       <button onClick={captureAndSend}>Capture and Record Attendance</button>

//       {/* Attendance status */}
//       {attendanceStatus && <p>{attendanceStatus}</p>}
//     </div>
//   );
// };

// export default FacialRecognitionAttendance;

import React, { useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { useStore } from "./StoreContext"; // Adjust the import path as needed

const FacialRecognitionAttendance = () => {
  const { storeId } = useStore(); // Get storeId from context
  const webcamRef = useRef(null);
  const [attendanceStatus, setAttendanceStatus] = useState("");

  const captureAndSend = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const base64Image = imageSrc.split(",")[1]; // Extract base64 data

    try {
      // Step 1: Send the captured image to the backend for facial recognition
      const recognitionResponse = await axios.post(
        "http://localhost:5004/recognize-employee",
        {
          image: `data:image/jpeg;base64,${base64Image}`,
        },
        {
          headers: { storeId }, // Send storeId in the headers
        }
      );

      const recognizedEmployeeId = recognitionResponse.data.employeeId;

      if (!recognizedEmployeeId) {
        setAttendanceStatus("No employee recognized.");
        return;
      }

      // Step 2: Record attendance for the recognized employee
      const attendanceResponse = await axios.post(
        "http://localhost:5004/attendance",
        [
          {
            employeeId: recognizedEmployeeId, // Use the recognized employee ID
            status: "Present",
          },
        ],
        {
          headers: { storeId }, // Send storeId in the headers
        }
      );

      setAttendanceStatus(`Attendance recorded for employee ${recognizedEmployeeId}`);
    } catch (err) {
      console.error("Failed to record attendance:", err);
      setAttendanceStatus("Failed to record attendance.");
    }
  };

  return (
    <div>
      <h1>Facial Recognition Attendance</h1>

      {/* Webcam feed */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />

      {/* Capture button */}
      <button onClick={captureAndSend}>Capture and Record Attendance</button>

      {/* Attendance status */}
      {attendanceStatus && <p>{attendanceStatus}</p>}
    </div>
  );
};

export default FacialRecognitionAttendance;