// import React from 'react';
// import home from './images/home2.png';
// import { Link } from 'react-router-dom';

// // const MainSection = () => {
// //   return (
// //     <section className="flex justify-between items-center p-12 bg-[#1e2233] text-white">
// //       <div className="max-w-1/2">
// //         <h1 className="text-5xl text-yellow-400 mb-2">Retail Store Management System</h1>
// //         <h2 className="text-lg text-[#a3c969] mt-8 mb-5">Streamline Operations, Elevate Shopping Experiences</h2>
// //         <p className="text-lg text-yellow-400 mb-5">
// //           Streamline your retail operations with our all-in-one management system, offering sales,
// //         </p>
// //         <p className="text-lg text-yellow-400 mb-5">
// //           billing, inventory, and analytics tools.
// //         </p>
// //         <Link to="/ContactUs">
// //           <button className="mt-8 w-48 py-3 rounded bg-[#a3c969] text-black hover:bg-[#8fb155] transition">
// //             Connect With Us
// //           </button>
// //         </Link>
// //       </div>
// //       <div className="flex-shrink-0">
// //         <img src={home} alt="Retail System" className="h-96 w-auto border-4 border-gold mx-5" />
// //       </div>
// //     </section>
// //   );
// // };

// const MainSection = () => {
//     return (
//       <section className="flex justify-between items-center p-12 bg-gradient-to-r from-blue-50 to-blue-100 animate-slideUp">
//         <div className="max-w-1/2">
//           <h1 className="text-5xl text-blue-600 mb-2 animate-fadeIn pl-8">Retail Store Management System</h1>
//           <h2 className="text-lg text-blue-800 mt-8 mb-5 animate-slideRight pl-45">Streamline Operations, Elevate Shopping Experiences</h2>
//           <p className="text-lg text-gray-700 mb-5 animate-slideRight delay-100 pl-10">
//             Streamline your retail operations with our all-in-one management system, offering sales,
//           </p>
//           <p className="text-lg text-gray-700 mb-5 animate-slideRight delay-200 pl-60">
//             billing, inventory, and analytics tools.
//           </p>
//           <Link to="/ContactUs">
//             <button className="mt-8 w-48 py-3 rounded bg-blue-500 text-white 
//               hover:bg-blue-600 transform hover:-translate-y-1 transition-all duration-300 
//               shadow-md hover:shadow-lg animate-fadeIn delay-300 ml-70">
//               Connect With Us
//             </button>
//           </Link>
//         </div>
//         <div className="flex-shrink-0 animate-slideLeft">
//           <img src={home} alt="Retail System" className="h-96 w-auto border-4 border-blue-200 mx-5 rounded-lg shadow-lg" />
//         </div>
//       </section>
//     );
//   };
  

// export default MainSection;


import React, { useEffect } from 'react';
import home from './images/home2.png';
import { Link } from 'react-router-dom';

const MainSection = () => {
  // Function to handle animation classes based on scroll position
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    // Trigger once on load
    setTimeout(handleScrollAnimation, 100);
    
    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Content Column */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-slideUp">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 animate-fadeIn">
          Retail Store Management System
        </h1>

        <div className="h-1 w-16 bg-blue-500 mb-6 animate-slideRight"></div>
        
        <h2 className="text-xl font-medium text-blue-800 mb-5 animate-slideRight">
          Streamline Operations, Elevate Shopping Experiences
        </h2>
        
        <div className="prose text-gray-700 mb-8 animate-slideRight delay-100">
          <p className="mb-4">
            Streamline your retail operations with our all-in-one management system, offering comprehensive tools for:
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pl-6 mb-6">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span> Sales tracking
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span> Billing automation
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span> Inventory management
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span> Real-time analytics
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span> Customer insights
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span> Employee scheduling
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fadeIn delay-300">
          <Link to="/ContactUs">
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-blue-600 text-white 
              hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300
              shadow-md hover:shadow-lg font-medium">
              Connect With Us
            </button>
          </Link>
          
          <Link to="/AboutPage">
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-transparent text-blue-600 
              border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300
              font-medium">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-slideLeft">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-70 z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-70 z-0"></div>
          
          {/* Main image */}
          <img 
            src={home} 
            alt="RetailPro System Dashboard" 
            className="relative z-10 h-auto max-w-full sm:max-w-lg w-auto border-4 border-blue-200 rounded-lg shadow-xl"
          />
          
          {/* Stats overlay */}
          <div className="absolute -bottom-6 left-0 right-0 mx-auto w-4/5 bg-white p-4 rounded-lg shadow-lg z-20">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-blue-600 text-xl font-bold">99.9%</p>
                <p className="text-xs text-gray-600">Uptime</p>
              </div>
              <div>
                <p className="text-blue-600 text-xl font-bold">32%</p>
                <p className="text-xs text-gray-600">Time Saved</p>
              </div>
              <div>
                <p className="text-blue-600 text-xl font-bold">24/7</p>
                <p className="text-xs text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;