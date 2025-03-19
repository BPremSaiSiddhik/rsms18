import React from "react";
import img1 from "./images/c2img.jpg";

const RetailStorePage = () => {
  return (
    <div className="font-sans">
      {/* Top Banner */}
      <div className="bg-[#002f4b] text-white text-center py-2 text-lg font-bold border-4 border-pink-500">
        <marquee className="text-yellow-400">
          Tip: Use the 'Reports' tab to view daily sales analytics
        </marquee>
      </div>

      {/* Main Content */}
      <div className="flex flex-row p-5 bg-gray-100">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={img1}
            alt="Retail Store"
            className="w-[650px] h-[400px] rounded-lg ml-5 border-4 border-gray-400"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 p-5 bg-[#1a1a1a] text-white rounded-lg border-4 border-yellow-500 flex justify-center items-center">
          <p className="text-lg leading-[1.8] text-yellow-400 mt-[112px] ml-6">
            Our Retail Store Management System revolutionizes retail management
            by offering advanced features such as role-based access control,
            real-time inventory tracking, automated billing, and customizable
            reporting, empowering businesses to deliver exceptional service and
            achieve operational excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetailStorePage;
