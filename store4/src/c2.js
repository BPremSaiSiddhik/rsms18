// import React from "react";
// import img1 from './images/c2img.jpg';

// // const RetailStorePage = () => {
// //   return (
// //     <div className="font-sans">
// //       {/* Top Banner */}
// //       <div className="bg-[#002f4b] text-white text-center py-2 text-lg font-bold border-5 border-pink-500">
// //         <marquee className="text-yellow-400">Tip: Use the 'Reports' tab to view daily sales analytics</marquee>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex p-5 bg-gray-100">
// //         {/* Image Section */}
// //         <div className="flex-1">
// //           <img
// //             src={img1}
// //             alt="Retail Store"
// //             className="w-[650px] h-[400px] rounded-lg border-5 border-silver mx-5"
// //           />
// //         </div>

// //         {/* Text Section */}
// //         <div className="flex-1 p-5 bg-[#1a1a1a] text-white rounded-lg border-5 border-yellow-500 flex items-center">
// //           <p className="text-lg text-yellow-400 leading-7 mt-28">
// //             Our Retail Store Management System revolutionizes retail management
// //             by offering advanced features such as role-based access control,
// //             real-time inventory tracking, automated billing, and customizable
// //             reporting, empowering businesses to deliver exceptional service and
// //             achieve operational excellence.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// const RetailStorePage = () => {
//     return (
//       <div className="font-sans">
//         <div className="bg-blue-100 text-gray-800 text-center py-2 text-lg font-bold border-b-4 border-blue-200 animate-fadeIn">
//           <marquee className="text-blue-600">Tip: Use the 'Reports' tab to view daily sales analytics</marquee>
//         </div>
  
//         <div className="flex p-5 bg-gradient-to-r from-blue-50 to-blue-100">
//           <div className="flex-1 animate-slideRight">
//             <img
//               src={img1}
//               alt="Retail Store"
//               className="w-[650px] h-[400px] rounded-lg border-4 border-blue-200 mx-5 shadow-lg 
//                 transform hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="flex-1 p-5 bg-white text-gray-800 rounded-lg border-4 border-blue-200 
//             flex items-center shadow-lg animate-slideLeft">
//             <p className="text-lg text-gray-700 leading-7 mt-28">
//               Our Retail Store Management System revolutionizes retail management
//               by offering advanced features such as role-based access control,
//               real-time inventory tracking, automated billing, and customizable
//               reporting, empowering businesses to deliver exceptional service and
//               achieve operational excellence.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  

// export default RetailStorePage;

import React from "react";
import img1 from './images/c2img.jpg';
import { ArrowRight, Bell, Calendar, ChevronRight } from "lucide-react";

const RetailStorePage = () => {
  // Tips for the marquee with more practical advice
  const tips = [
    "Tip: Use the 'Reports' tab to view daily sales analytics",
    "Tip: Set inventory alerts to avoid stockouts during peak seasons",
    "Tip: Regular data backups protect your business information",
    "Tip: Try the dark mode for reduced eye strain during night shifts"
  ];

  // Stats to highlight
  const stats = [
    { number: "35%", label: "Faster Checkout" },
    { number: "24/7", label: "Customer Support" },
    { number: "99.9%", label: "System Uptime" }
  ];

  // Features to highlight
  const keyFeatures = [
    "Role-based access control",
    "Real-time inventory tracking",
    "Automated billing system",
    "Customizable reporting"
  ];

  return (
    <section className="font-sans">
      {/* Info banner with rotating tips */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 border-b border-blue-800 animate-fadeIn relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center">
          <Bell className="w-5 h-5 mr-2 flex-shrink-0" />
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {tips.map((tip, index) => (
                <span key={index} className="inline-block mx-8 font-medium">{tip}</span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-full opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="75" cy="50" r="20" fill="white" />
            <circle cx="25" cy="50" r="10" fill="white" />
          </svg>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="py-16 px-6 md:px-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image column */}
            <div className="w-full lg:w-1/2 animate-slideRight">
              <div className="relative">
                {/* Main image with shadow effect */}
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={img1}
                    alt="Modern Retail Store Management"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute -bottom-6 left-0 right-0 mx-auto w-5/6 bg-white rounded-lg shadow-xl p-4 border-l-4 border-blue-500">
                  <div className="grid grid-cols-3 gap-2">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-blue-600 text-xl font-bold">{stat.number}</p>
                        <p className="text-xs text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md flex items-center text-blue-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Since 2022</span>
                </div>
              </div>
            </div>
            
            {/* Content column */}
            <div className="w-full lg:w-1/2 animate-slideLeft">
              <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-blue-500">
                {/* Section heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                  Revolutionize Your Retail Management
                </h2>
                
                <div className="h-1 w-16 bg-blue-500 mb-6"></div>
                
                {/* Main description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our Retail Store Management System transforms how you manage your business 
                  by combining powerful technology with intuitive design. With features built 
                  specifically for retail environments, you'll deliver exceptional customer 
                  service while achieving operational excellence.
                </p>
                
                {/* Key features list */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Capabilities:</h3>
                  <ul className="space-y-2">
                    {keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA button */}
                <a 
                  href="/AboutPage" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg
                    font-medium shadow-md hover:bg-blue-700 transition-all duration-300
                    hover:shadow-lg transform hover:-translate-y-1"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailStorePage;