// // // import React from 'react';
// // // import logo from './images/logo.jpg';
// // // import { Link } from 'react-router-dom';

// // // const Header = () => {
// // //   return (
// // //     <header className="flex justify-between items-center p-3 bg-[#0d1122]">
// // //       {/* Left Section */}
// // //       <div className="flex items-center gap-5">
// // //         {/* Logo */}
// // //         <div className="w-12 h-12">
// // //           <Link to="/AboutPage">
// // //             <img src={logo} alt="Logo" className="w-full h-full" />
// // //           </Link>
// // //         </div>
// // //         {/* Navigation Links */}
// // //         <nav className="flex gap-4">
// // //           <Link to="/" className="text-blue-500 text-base no-underline hover:text-[#ff6347]">Home</Link>
// // //           <Link to="/AboutPage" className="text-white text-base no-underline hover:text-[#ff6347]">About</Link>
// // //           <Link to="/ContactUs" className="text-white text-base no-underline hover:text-[#ff6347]">Contact</Link>
// // //         </nav>
// // //       </div>
// // //       {/* Buttons */}
// // //       <div className="flex gap-3">
// // //         <Link to="/SignUp">
// // //           <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // //             SignUp
// // //           </button>
// // //         </Link>
// // //         <Link to="/LoginPage">
// // //           <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // //             Login
// // //           </button>
// // //         </Link>
// // //         <Link to="/StoreReview">
// // //           <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // //             Leave a Review
// // //           </button>
// // //         </Link>
// // //       </div>
// // //     </header>
// // //   );
// // // };
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // // Import all your images here
// // import logo from './images/logo.jpg';


// // // Add CSS animations
// // const style = document.createElement('style');
// // style.textContent = `
// //   @keyframes fadeIn {
// //     from { opacity: 0; }
// //     to { opacity: 1; }
// //   }

// //   @keyframes slideUp {
// //     from { transform: translateY(20px); opacity: 0; }
// //     to { transform: translateY(0); opacity: 1; }
// //   }

// //   @keyframes slideRight {
// //     from { transform: translateX(-20px); opacity: 0; }
// //     to { transform: translateX(0); opacity: 1; }
// //   }

// //   @keyframes slideLeft {
// //     from { transform: translateX(20px); opacity: 0; }
// //     to { transform: translateX(0); opacity: 1; }
// //   }

// //   .animate-fadeIn {
// //     animation: fadeIn 1s ease-out forwards;
// //   }

// //   .animate-slideUp {
// //     animation: slideUp 1s ease-out forwards;
// //   }

// //   .animate-slideRight {
// //     animation: slideRight 1s ease-out forwards;
// //   }

// //   .animate-slideLeft {
// //     animation: slideLeft 1s ease-out forwards;
// //   }
// // `;

// // // Header Component
// // const Header = () => {
// //   return (
// //     <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md animate-fadeIn">
// //       <div className="flex items-center gap-5">
// //         <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// //           <Link to="/AboutPage">
// //             <img src={logo} alt="Logo" className="w-full h-full" />
// //           </Link>
// //         </div>
// //         <nav className="flex gap-4">
// //           <Link to="/" className="text-blue-600 text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// //           <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// //           <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// //         </nav>
// //       </div>
// //       <div className="flex gap-3">
// //         {['SignUp', 'LoginPage', 'StoreReview'].map((text, index) => (
// //           <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm 
// //               hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// //               shadow-md hover:shadow-lg">
// //               {text}
// //             </button>
// //           </Link>
// //         ))}
// //       </div>
// //     </header>
// //   );
// // };
// // export default Header;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// // Import logo
// import logo from './images/logo.jpg';

// // Add styles to document head instead of inline creation
// const addAnimationStyles = () => {
//   // Only add styles once
//   if (!document.getElementById('animation-styles')) {
//     const style = document.createElement('style');
//     style.id = 'animation-styles';
//     style.textContent = `
//       @keyframes fadeIn {
//         from { opacity: 0; }
//         to { opacity: 1; }
//       }

//       @keyframes slideUp {
//         from { transform: translateY(20px); opacity: 0; }
//         to { transform: translateY(0); opacity: 1; }
//       }

//       @keyframes slideRight {
//         from { transform: translateX(-20px); opacity: 0; }
//         to { transform: translateX(0); opacity: 1; }
//       }

//       @keyframes slideLeft {
//         from { transform: translateX(20px); opacity: 0; }
//         to { transform: translateX(0); opacity: 1; }
//       }

//       .animate-fadeIn {
//         animation: fadeIn 0.8s ease-out forwards;
//       }

//       .animate-slideUp {
//         animation: slideUp 0.8s ease-out forwards;
//       }

//       .animate-slideRight {
//         animation: slideRight 0.8s ease-out forwards;
//       }

//       .animate-slideLeft {
//         animation: slideLeft 0.8s ease-out forwards;
//       }
//     `;
//     document.head.appendChild(style);
//   }
// };

// // Header Component
// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();
  
//   // Track scroll position for sticky header effect
//   useEffect(() => {
//     addAnimationStyles();
    
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 10;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   // Navigation links data
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/AboutPage' },
//     { name: 'Contact', path: '/ContactUs' }
//   ];

//   // Action buttons data
//   const actionButtons = [
//     { name: 'Sign Up', path: '/SignUp' },
//     { name: 'Login', path: '/LoginPage' },
//     { name: 'Store Review', path: '/StoreReview' }
//   ];

//   return (
//     <header className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'py-2 bg-white shadow-lg' : 'py-3 bg-gradient-to-r from-blue-50 to-blue-100'
//     } animate-fadeIn`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-4">
//             <Link 
//               to="/AboutPage" 
//               className="w-12 h-12 transform hover:scale-110 transition-transform duration-300"
//               aria-label="Go to About page"
//             >
//               <img src={logo} alt="Company Logo" className="w-full h-full object-contain rounded-md" />
//             </Link>
            
//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex gap-6">
//               {navLinks.map((link, index) => (
//                 <Link 
//                   key={index}
//                   to={link.path} 
//                   className={`text-base font-medium transition-colors duration-300 ${
//                     location.pathname === link.path
//                       ? 'text-blue-600 border-b-2 border-blue-600'
//                       : 'text-gray-700 hover:text-blue-600'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Desktop Action Buttons */}
//           <div className="hidden md:flex gap-3 items-center">
//             {actionButtons.map((button, index) => (
//               <Link key={index} to={button.path}>
//                 <button 
//                   className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                     transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${
//                     index === actionButtons.length - 1
//                       ? 'bg-blue-600 text-white hover:bg-blue-700'
//                       : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
//                   }`}
//                 >
//                   {button.name}
//                 </button>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden flex items-center" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileMenuOpen}
//           >
//             <svg
//               className="w-6 h-6 text-gray-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {mobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden pt-4 pb-3 animate-slideUp">
//             <nav className="flex flex-col gap-3 border-b border-gray-200 pb-3 mb-3">
//               {navLinks.map((link, index) => (
//                 <Link 
//                   key={index}
//                   to={link.path} 
//                   className={`text-base py-2 px-1 ${
//                     location.pathname === link.path
//                       ? 'text-blue-600 font-medium'
//                       : 'text-gray-700'
//                   }`}
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>
//             <div className="flex flex-col gap-2">
//               {actionButtons.map((button, index) => (
//                 <Link key={index} to={button.path} className="w-full">
//                   <button 
//                     className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
//                       index === actionButtons.length - 1
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-blue-100 text-blue-600'
//                     }`}
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {button.name}
//                   </button>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import logo
import logo from './images/logo.jpg';

// Add styles to document head instead of inline creation
const addAnimationStyles = () => {
  // Only add styles once
  if (!document.getElementById('animation-styles')) {
    const style = document.createElement('style');
    style.id = 'animation-styles';
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes slideRight {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      @keyframes slideLeft {
        from { transform: translateX(20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }

      .animate-slideUp {
        animation: slideUp 0.8s ease-out forwards;
      }

      .animate-slideRight {
        animation: slideRight 0.8s ease-out forwards;
      }

      .animate-slideLeft {
        animation: slideLeft 0.8s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }
};

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Track scroll position for sticky header effect
  useEffect(() => {
    addAnimationStyles();
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Navigation links data
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/AboutPage' },
    { name: 'Contact', path: '/ContactUs' }
  ];

  // Action buttons data
  const actionButtons = [
    { name: 'Sign Up', path: '/SignUp' },
    { name: 'Login', path: '/LoginPage' },
    { name: 'Store Review', path: '/StoreReview' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-2 bg-white shadow-lg' : 'py-3 bg-gradient-to-r from-blue-50 to-blue-100'
    } animate-fadeIn`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and App Name */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
                aria-label="Go to Home page"
              >
                <img src={logo} alt="RetailPro Logo" className="w-10 h-10 object-contain rounded-md" />
                <span className="text-blue-700 font-bold text-xl">RetailPro</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 ml-6">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className={`text-base font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            {actionButtons.map((button, index) => (
              <Link key={index} to={button.path}>
                <button 
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 
                    transform hover:-translate-y-0.5 shadow-md hover:shadow-lg ${
                    index === actionButtons.length - 1
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                  }`}
                >
                  {button.name}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-slideUp">
            <nav className="flex flex-col gap-3 border-b border-gray-200 pb-3 mb-3">
              {navLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className={`text-base py-2 px-1 ${
                    location.pathname === link.path
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              {actionButtons.map((button, index) => (
                <Link key={index} to={button.path} className="w-full">
                  <button 
                    className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                      index === actionButtons.length - 1
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {button.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;