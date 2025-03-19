// // // // // // import React from "react";
// // // // // // // import logo from "./logo.jpg";
// // // // // // // import { Link } from "react-router-dom";

// // // // // // const AboutPage = () => {
// // // // // //   return (
// // // // // //     <div className="bg-white text-[#333] font-sans">
// // // // // //       {/* Header Section */}
// // // // // //       {/* <header className="flex justify-between items-center p-4 bg-white shadow-md">
// // // // // //         <div className="flex items-center space-x-8">
// // // // // //           <div className="w-12 h-12">
// // // // // //             <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // //           </div>
// // // // // //           <nav className="flex space-x-6">
// // // // // //             <Link to="/" className="text-[#333] hover:text-gray-600">Home</Link>
// // // // // //             <Link className="text-gold-500">About</Link>
// // // // // //             <Link to="/ContactUs" className="text-[#333] hover:text-gray-600">Contact</Link>
// // // // // //           </nav>
// // // // // //         </div>
// // // // // //         <div className="flex space-x-4">
// // // // // //           <Link to="/SignUp">
// // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">SignUp</button>
// // // // // //           </Link>
// // // // // //           <Link to="/LoginPage2">
// // // // // //             <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">Login</button>
// // // // // //           </Link>
// // // // // //           <Link to="/reviews">
// // // // // //             <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all">Leave a Review</button>
// // // // // //           </Link>
// // // // // //         </div>
// // // // // //       </header> */}

// // // // // //       {/* Hero Section */}
// // // // // //       <div className="bg-[#2f80ed] text-white py-32 text-center">
// // // // // //         <div className="max-w-4xl mx-auto px-4">
// // // // // //           <h1 className="text-5xl font-bold uppercase mb-6 tracking-wider">Who We Are?</h1>
// // // // // //           <p className="text-xl text-white/85 leading-relaxed">
// // // // // //             Our Retail Store Management System empowers businesses of all sizes to streamline their operations. We simplify inventory management,
// // // // // //             sales tracking, and reporting—all in one easy-to-use platform.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Core Values Section */}
// // // // // //       <section className="bg-white py-20 px-4 text-center">
// // // // // //         <h2 className="text-4xl font-bold uppercase mb-16 tracking-wider">Our Core Values</h2>
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // // // // //           <div className="bg-[#f1f1f1] p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
// // // // // //             <div className="text-4xl mb-6">🔒</div>
// // // // // //             <h3 className="text-2xl font-bold uppercase mb-4">Reliability</h3>
// // // // // //             <p className="text-[#555] leading-relaxed">
// // // // // //               We deliver a dependable system with 99.9% uptime, ensuring smooth retail operations.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //           <div className="bg-[#f1f1f1] p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
// // // // // //             <div className="text-4xl mb-6">💡</div>
// // // // // //             <h3 className="text-2xl font-bold uppercase mb-4">Innovation</h3>
// // // // // //             <p className="text-[#555] leading-relaxed">
// // // // // //               We continuously innovate to offer the latest tools and technologies to help our customers thrive.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //           <div className="bg-[#f1f1f1] p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
// // // // // //             <div className="text-4xl mb-6">❤️</div>
// // // // // //             <h3 className="text-2xl font-bold uppercase mb-4">Customer-Centric</h3>
// // // // // //             <p className="text-[#555] leading-relaxed">
// // // // // //               Our customers are at the heart of everything we do. We create solutions to simplify their work and help them succeed.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Key Features Section */}
// // // // // //       <section className="bg-[#f7f8fc] py-20 px-4 text-center">
// // // // // //         <h2 className="text-4xl font-bold uppercase mb-16 tracking-wider">Key Features</h2>
// // // // // //         <div className="max-w-6xl mx-auto space-y-8">
// // // // // //           <div className="bg-white p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all flex items-center justify-between">
// // // // // //             <div className="text-5xl text-[#3498db] mr-6">📦</div>
// // // // // //             <div className="text-left">
// // // // // //               <h3 className="text-2xl font-bold mb-4">Inventory Management</h3>
// // // // // //               <p className="text-[#555] leading-relaxed">
// // // // // //                 Keep track of your stock levels in real-time. Our system helps you manage product quantities, avoid stockouts, and optimize your inventory.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="bg-white p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all flex items-center justify-between">
// // // // // //             <div className="text-5xl text-[#3498db] mr-6">💳</div>
// // // // // //             <div className="text-left">
// // // // // //               <h3 className="text-2xl font-bold mb-4">Sales Tracking</h3>
// // // // // //               <p className="text-[#555] leading-relaxed">
// // // // // //                 Effortlessly track sales across different locations. Generate sales reports to analyze trends and improve your business strategies.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="bg-white p-10 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all flex items-center justify-between">
// // // // // //             <div className="text-5xl text-[#3498db] mr-6">📊</div>
// // // // // //             <div className="text-left">
// // // // // //               <h3 className="text-2xl font-bold mb-4">Reporting & Analytics</h3>
// // // // // //               <p className="text-[#555] leading-relaxed">
// // // // // //                 Generate customizable reports that provide deep insights into your sales, expenses, and profit margins to make informed decisions.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Footer Section */}
// // // // // //       <footer className="bg-purple-500 text-white py-12 px-4 text-center">
// // // // // //         <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
// // // // // //           Thousands of stores have trusted our Retail Store Management System to improve efficiency and grow their business. We are here to help you thrive!
// // // // // //         </p>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AboutPage;
// // // // // // import React from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import logo from "./images/logo.jpg";

// // // // // // const AboutPage = () => {
// // // // // //   return (
// // // // // //     <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans min-h-screen">
// // // // // //       {/* Header Section */}
// // // // // //       <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-lg">
// // // // // //         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
// // // // // //           <div className="flex items-center space-x-8">
// // // // // //             <div className="w-12 h-12 transition-transform hover:scale-105">
// // // // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// // // // // //             </div>
// // // // // //             <nav className="flex space-x-8">
// // // // // //               <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
// // // // // //               <Link className="text-purple-600 font-medium">About</Link>
// // // // // //               <Link to="/ContactUs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
// // // // // //             </nav>
// // // // // //           </div>
// // // // // //           <div className="flex space-x-4">
// // // // // //             <Link to="/SignUp">
// // // // // //               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // // //                 Sign Up
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //             <Link to="/LoginPage">
// // // // // //               <button className="bg-white text-purple-600 px-6 py-2 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
// // // // // //                 Login
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //             <Link to="/StoreReview">
// // // // // //               <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // // //                 Reviews
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </header>

// // // // // //       {/* Hero Section */}
// // // // // //       <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32">
// // // // // //         <div className="max-w-4xl mx-auto px-4 text-center">
// // // // // //           <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">
// // // // // //             Who We Are
// // // // // //           </h1>
// // // // // //           <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up">
// // // // // //             Our Retail Store Management System empowers businesses of all sizes to streamline their operations. We simplify inventory management,
// // // // // //             sales tracking, and reporting—all in one easy-to-use platform.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
// // // // // //       </div>

// // // // // //       {/* Core Values Section */}
// // // // // //       <section className="py-24 px-4">
// // // // // //         <div className="max-w-6xl mx-auto">
// // // // // //           <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // //             {[
// // // // // //               {
// // // // // //                 icon: "🔒",
// // // // // //                 title: "Reliability",
// // // // // //                 description: "We deliver a dependable system with 99.9% uptime, ensuring smooth retail operations."
// // // // // //               },
// // // // // //               {
// // // // // //                 icon: "💡",
// // // // // //                 title: "Innovation",
// // // // // //                 description: "We continuously innovate to offer the latest tools and technologies to help our customers thrive."
// // // // // //               },
// // // // // //               {
// // // // // //                 icon: "❤️",
// // // // // //                 title: "Customer-Centric",
// // // // // //                 description: "Our customers are at the heart of everything we do. We create solutions to simplify their work and help them succeed."
// // // // // //               }
// // // // // //             ].map((value, index) => (
// // // // // //               <div key={index} 
// // // // // //                 className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
// // // // // //                 <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
// // // // // //                   {value.icon}
// // // // // //                 </div>
// // // // // //                 <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
// // // // // //                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Key Features Section */}
// // // // // //       <section className="bg-gray-50 py-24 px-4">
// // // // // //         <div className="max-w-6xl mx-auto">
// // // // // //           <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
// // // // // //           <div className="space-y-8">
// // // // // //             {[
// // // // // //               {
// // // // // //                 icon: "📦",
// // // // // //                 title: "Inventory Management",
// // // // // //                 description: "Keep track of your stock levels in real-time. Our system helps you manage product quantities, avoid stockouts, and optimize your inventory."
// // // // // //               },
// // // // // //               {
// // // // // //                 icon: "💳",
// // // // // //                 title: "Sales Tracking",
// // // // // //                 description: "Effortlessly track sales across different locations. Generate sales reports to analyze trends and improve your business strategies."
// // // // // //               },
// // // // // //               {
// // // // // //                 icon: "📊",
// // // // // //                 title: "Reporting & Analytics",
// // // // // //                 description: "Generate customizable reports that provide deep insights into your sales, expenses, and profit margins to make informed decisions."
// // // // // //               }
// // // // // //             ].map((feature, index) => (
// // // // // //               <div key={index} 
// // // // // //                 className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-x-2 transition-all duration-300 flex items-center">
// // // // // //                 <div className="text-5xl text-purple-600 mr-8 transform group-hover:scale-110 transition-transform duration-300">
// // // // // //                   {feature.icon}
// // // // // //                 </div>
// // // // // //                 <div>
// // // // // //                   <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
// // // // // //                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Footer Section */}
// // // // // //       <footer className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-4">
// // // // // //         <div className="max-w-4xl mx-auto text-center">
// // // // // //           <p className="text-xl text-white/90 leading-relaxed">
// // // // // //             Thousands of stores have trusted our Retail Store Management System to improve efficiency and grow their business. 
// // // // // //             <span className="block mt-4 font-semibold">We are here to help you thrive!</span>
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default AboutPage;


// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import logo from "./images/logo.jpg";
// // // // // import { motion } from "framer-motion";

// // // // // const AboutPage = () => {
// // // // //   const fadeIn = {
// // // // //     hidden: { opacity: 0, y: 20 },
// // // // //     visible: { opacity: 1, y: 0 },
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans min-h-screen">
// // // // //       {/* Header Section */}
// // // // //       <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-lg">
// // // // //         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
// // // // //           <div className="flex items-center space-x-8">
// // // // //             <div className="w-12 h-12 transition-transform hover:scale-105">
// // // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// // // // //             </div>
// // // // //             <nav className="hidden md:flex space-x-8">
// // // // //               <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
// // // // //               <Link className="text-purple-600 font-medium">About</Link>
// // // // //               <Link to="/ContactUs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
// // // // //               <Link to="/StoreReview" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Reviews</Link>
// // // // //             </nav>
// // // // //           </div>
// // // // //           <div className="hidden md:flex space-x-4">
// // // // //             <Link to="/SignUp">
// // // // //               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // //                 Sign Up
// // // // //               </button>
// // // // //             </Link>
// // // // //             <Link to="/LoginPage">
// // // // //               <button className="bg-white text-purple-600 px-6 py-2 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
// // // // //                 Login
// // // // //               </button>
// // // // //             </Link>
// // // // //           </div>
// // // // //           {/* Mobile menu button */}
// // // // //           <div className="md:hidden">
// // // // //             <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// // // // //               </svg>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       {/* Hero Section with Angled Design */}
// // // // //       <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32 overflow-hidden">
// // // // //         <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 transform skew-x-12"></div>
// // // // //         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
// // // // //           <motion.h1 
// // // // //             initial={{ opacity: 0, y: -20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.7 }}
// // // // //             className="text-6xl font-bold mb-6"
// // // // //           >
// // // // //             Who We Are
// // // // //           </motion.h1>
// // // // //           <motion.p 
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             transition={{ duration: 0.7, delay: 0.3 }}
// // // // //             className="text-xl text-white/90 leading-relaxed mb-8"
// // // // //           >
// // // // //             Our Retail Store Management System empowers businesses of all sizes to streamline their operations. We simplify inventory management,
// // // // //             sales tracking, and reporting—all in one easy-to-use platform.
// // // // //           </motion.p>
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 20 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.7, delay: 0.6 }}
// // // // //           >
// // // // //             <Link to="/ContactUs">
// // // // //               <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
// // // // //                 Get Started Today
// // // // //               </button>
// // // // //             </Link>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //         {/* Wave divider */}
// // // // //         <div className="absolute bottom-0 left-0 right-0">
// // // // //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
// // // // //             <path fill="#f9fafb" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,90.7C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
// // // // //           </svg>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Our Story Section */}
// // // // //       <section className="py-24 px-4">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <div className="flex flex-col md:flex-row items-center gap-12">
// // // // //             <div className="md:w-1/2">
// // // // //               <div className="relative">
// // // // //                 <div className="bg-purple-200 w-64 h-64 rounded-full absolute -z-10 -left-6 -top-6"></div>
// // // // //                 <div className="bg-gradient-to-br from-purple-500 to-blue-500 w-full h-80 rounded-lg shadow-xl"></div>
// // // // //                 <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
// // // // //                   <p className="text-purple-600 font-bold">Trusted by 1000+ retailers</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="md:w-1/2">
// // // // //               <h2 className="text-4xl font-bold mb-6">Our Story</h2>
// // // // //               <p className="text-gray-600 mb-6 leading-relaxed">
// // // // //                 Founded in 2020, our company began with a simple mission: to create a retail management system that actually works for retailers, not against them. 
// // // // //               </p>
// // // // //               <p className="text-gray-600 mb-6 leading-relaxed">
// // // // //                 After years of working in retail ourselves, we experienced firsthand the frustrations of cumbersome inventory systems and disconnected sales platforms. We knew there had to be a better way.
// // // // //               </p>
// // // // //               <p className="text-gray-600 leading-relaxed">
// // // // //                 Today, our platform serves thousands of retailers across the globe, from small boutiques to multi-location enterprises. Our commitment remains the same: simplify retail operations so you can focus on what matters—growing your business.
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Stats Section */}
// // // // //       <section className="bg-purple-900 text-white py-16 px-4">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
// // // // //             {[
// // // // //               { number: "1000+", label: "Retailers" },
// // // // //               { number: "50M+", label: "Transactions Processed" },
// // // // //               { number: "99.9%", label: "Uptime" },
// // // // //               { number: "24/7", label: "Support" }
// // // // //             ].map((stat, index) => (
// // // // //               <div key={index} className="p-6">
// // // // //                 <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
// // // // //                 <p className="text-purple-200">{stat.label}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Core Values Section */}
// // // // //       <section className="py-24 px-4">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <h2 className="text-4xl font-bold text-center mb-6">Our Core Values</h2>
// // // // //           <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
// // // // //             These principles guide everything we do, from product development to customer service.
// // // // //           </p>
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             {[
// // // // //               {
// // // // //                 icon: "🔒",
// // // // //                 title: "Reliability",
// // // // //                 description: "We deliver a dependable system with 99.9% uptime, ensuring smooth retail operations even during peak seasons."
// // // // //               },
// // // // //               {
// // // // //                 icon: "💡",
// // // // //                 title: "Innovation",
// // // // //                 description: "We continuously innovate to offer the latest tools and technologies to help our customers stay ahead in the competitive retail landscape."
// // // // //               },
// // // // //               {
// // // // //                 icon: "❤️",
// // // // //                 title: "Customer-Centric",
// // // // //                 description: "Our customers are at the heart of everything we do. We create solutions to simplify their work and help them succeed in an ever-changing market."
// // // // //               },
// // // // //               {
// // // // //                 icon: "🔍",
// // // // //                 title: "Transparency",
// // // // //                 description: "We believe in clear communication, fair pricing, and honest relationships with all our customers and partners."
// // // // //               },
// // // // //               {
// // // // //                 icon: "🚀",
// // // // //                 title: "Excellence",
// // // // //                 description: "We strive for excellence in every feature we develop, every support ticket we resolve, and every interaction with our customers."
// // // // //               },
// // // // //               {
// // // // //                 icon: "🤝",
// // // // //                 title: "Partnership",
// // // // //                 description: "We see ourselves as your business partner, not just a software provider. Your success is our success."
// // // // //               }
// // // // //             ].map((value, index) => (
// // // // //               <div key={index} 
// // // // //                 className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500">
// // // // //                 <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
// // // // //                   {value.icon}
// // // // //                 </div>
// // // // //                 <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
// // // // //                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Key Features Section */}
// // // // //       <section className="bg-gray-50 py-24 px-4">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <h2 className="text-4xl font-bold text-center mb-6">Key Features</h2>
// // // // //           <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
// // // // //             Our platform is designed to make retail management simple, intuitive, and powerful.
// // // // //           </p>
// // // // //           <div className="space-y-8">
// // // // //             {[
// // // // //               {
// // // // //                 icon: "📦",
// // // // //                 title: "Inventory Management",
// // // // //                 description: "Keep track of your stock levels in real-time. Our system helps you manage product quantities, avoid stockouts, and optimize your inventory with automated reordering and comprehensive stock analytics."
// // // // //               },
// // // // //               {
// // // // //                 icon: "💳",
// // // // //                 title: "Point of Sale",
// // // // //                 description: "Process sales quickly with our intuitive POS system that works on any device. Support for multiple payment methods, gift cards, and customer loyalty programs built right in."
// // // // //               },
// // // // //               {
// // // // //                 icon: "📊",
// // // // //                 title: "Reporting & Analytics",
// // // // //                 description: "Generate customizable reports that provide deep insights into your sales, expenses, and profit margins. Make data-driven decisions with beautiful visualizations and predictive analytics."
// // // // //               },
// // // // //               {
// // // // //                 icon: "👥",
// // // // //                 title: "Customer Management",
// // // // //                 description: "Build lasting relationships with your customers. Track purchase history, manage loyalty programs, and create targeted marketing campaigns to boost retention."
// // // // //               },
// // // // //               {
// // // // //                 icon: "🔄",
// // // // //                 title: "Multi-channel Integration",
// // // // //                 description: "Seamlessly connect your physical store with your online presence. Manage inventory across all sales channels from a single dashboard."
// // // // //               }
// // // // //             ].map((feature, index) => (
// // // // //               <div key={index} 
// // // // //                 className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-x-2 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center">
// // // // //                 <div className="text-5xl text-purple-600 mb-6 md:mb-0 md:mr-8 transform group-hover:scale-110 transition-transform duration-300">
// // // // //                   {feature.icon}
// // // // //                 </div>
// // // // //                 <div>
// // // // //                   <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
// // // // //                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Testimonials Section */}
// // // // //       <section className="py-24 px-4 bg-white">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             {[
// // // // //               {
// // // // //                 quote: "This system has completely transformed how we manage our store. The inventory tracking alone has saved us countless hours.",
// // // // //                 author: "Sarah J.",
// // // // //                 role: "Boutique Owner"
// // // // //               },
// // // // //               {
// // // // //                 quote: "As someone who runs multiple store locations, having everything in one platform has been a game-changer. The support team is also incredible.",
// // // // //                 author: "Michael T.",
// // // // //                 role: "Retail Chain Manager"
// // // // //               },
// // // // //               {
// // // // //                 quote: "We've tried several systems before, but this is the only one that actually understands retail. It's intuitive and powerful.",
// // // // //                 author: "Rebecca L.",
// // // // //                 role: "Department Store Director"
// // // // //               }
// // // // //             ].map((testimonial, index) => (
// // // // //               <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
// // // // //                 <div className="absolute -top-5 left-8 text-purple-600 text-5xl">"</div>
// // // // //                 <p className="text-gray-600 italic mb-6 pt-6">{testimonial.quote}</p>
// // // // //                 <div className="flex items-center">
// // // // //                   <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-600">
// // // // //                     {testimonial.author.charAt(0)}
// // // // //                   </div>
// // // // //                   <div className="ml-4">
// // // // //                     <p className="font-bold text-gray-800">{testimonial.author}</p>
// // // // //                     <p className="text-gray-500 text-sm">{testimonial.role}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* CTA Section */}
// // // // //       <section className="bg-gradient-to-r from-purple-500 to-blue-500 py-24 px-4 relative overflow-hidden">
// // // // //         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
// // // // //         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-24 translate-y-16"></div>
// // // // //         <div className="max-w-4xl mx-auto text-center relative z-10">
// // // // //           <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Business?</h2>
// // // // //           <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
// // // // //             Join thousands of successful retailers who have streamlined their operations with our platform.
// // // // //           </p>
// // // // //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// // // // //             <Link to="/SignUp">
// // // // //               <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg w-full sm:w-auto">
// // // // //                 Start Free Trial
// // // // //               </button>
// // // // //             </Link>
// // // // //             <Link to="/ContactUs">
// // // // //               <button className="bg-transparent text-white px-8 py-3 rounded-lg font-medium border-2 border-white hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto">
// // // // //                 Schedule Demo
// // // // //               </button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Footer Section */}
// // // // //       <footer className="bg-gray-900 text-gray-300 py-16 px-4">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
// // // // //             <div>
// // // // //               <div className="flex items-center mb-4">
// // // // //                 <div className="w-12 h-12 mr-3">
// // // // //                   <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// // // // //                 </div>
// // // // //                 <h3 className="text-xl font-bold text-white">RetailPro</h3>
// // // // //               </div>
// // // // //               <p className="mb-4">Empowering retailers with smart management solutions since 2020.</p>
// // // // //               <div className="flex space-x-4">
// // // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // // //                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                 </a>
// // // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // // //                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// // // // //                   </svg>
// // // // //                 </a>
// // // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // // //                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                 </a>
// // // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // // //                     <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                 </a>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold text-white mb-4">Product</h3>
// // // // //               <ul className="space-y-3">
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
// // // // //               </ul>
// // // // //             </div>
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold text-white mb-4">Company</h3>
// // // // //               <ul className="space-y-3">
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
// // // // //               </ul>
// // // // //             </div>
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold text-white mb-4">Support</h3>
// // // // //               <ul className="space-y-3">
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
// // // // //                 <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
// // // // //               </ul>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="pt-8 border-t border-gray-800 text-center text-sm">
// // // // //             <p>&copy; 2025 RetailPro. All rights reserved.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default AboutPage;

// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import logo from "./images/logo.jpg";
// // // // import { motion } from "framer-motion";
// // // // import storeImage from "./images/store-management.jpg"; // Add this image to your project

// // // // const AboutPage = () => {
// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0, y: 20 },
// // // //     visible: { opacity: 1, y: 0 },
// // // //   };

// // // //   return (
// // // //     <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans min-h-screen">
// // // //       {/* Header Section */}
// // // //       <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-lg">
// // // //         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
// // // //           <div className="flex items-center space-x-8">
// // // //             <div className="w-12 h-12 transition-transform hover:scale-105">
// // // //               <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// // // //             </div>
// // // //             <nav className="hidden md:flex space-x-8">
// // // //               <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
// // // //               <Link className="text-purple-600 font-medium">About</Link>
// // // //               <Link to="/ContactUs" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</Link>
// // // //               <Link to="/StoreReview" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Reviews</Link>
// // // //             </nav>
// // // //           </div>
// // // //           <div className="hidden md:flex space-x-4">
// // // //             <Link to="/SignUp">
// // // //               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // //                 Sign Up
// // // //               </button>
// // // //             </Link>
// // // //             <Link to="/LoginPage">
// // // //               <button className="bg-white text-purple-600 px-6 py-2 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
// // // //                 Login
// // // //               </button>
// // // //             </Link>
// // // //           </div>
// // // //           {/* Mobile menu button */}
// // // //           <div className="md:hidden">
// // // //             <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
// // // //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// // // //               </svg>
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       {/* Hero Section - Keeping closer to original but with enhancements */}
// // // //       <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32">
// // // //         <div className="max-w-4xl mx-auto px-4 text-center">
// // // //           <motion.h1 
// // // //             initial={{ opacity: 0, y: -20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.7 }}
// // // //             className="text-6xl font-bold mb-6 animate-fade-in-up"
// // // //           >
// // // //             Who We Are
// // // //           </motion.h1>
// // // //           <motion.p 
// // // //             initial={{ opacity: 0 }}
// // // //             animate={{ opacity: 1 }}
// // // //             transition={{ duration: 0.7, delay: 0.3 }}
// // // //             className="text-xl text-white/90 leading-relaxed animate-fade-in-up mb-8"
// // // //           >
// // // //             Our Retail Store Management System empowers businesses of all sizes to streamline their operations. We simplify inventory management,
// // // //             sales tracking, and reporting—all in one easy-to-use platform.
// // // //           </motion.p>
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.7, delay: 0.6 }}
// // // //           >
// // // //             <Link to="/ContactUs">
// // // //               <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
// // // //                 Get Started Today
// // // //               </button>
// // // //             </Link>
// // // //           </motion.div>
// // // //         </div>
// // // //         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
// // // //       </div>

// // // //       {/* Our Story Section - Fixed with actual image */}
// // // //       <section className="py-24 px-4">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <div className="flex flex-col md:flex-row items-center gap-12">
// // // //             <div className="md:w-1/2">
// // // //               <div className="relative">
// // // //                 <div className="bg-purple-200 w-64 h-64 rounded-full absolute -z-10 -left-6 -top-6"></div>
// // // //                 <div className="w-full h-80 rounded-lg shadow-xl overflow-hidden">
// // // //                   {/* Using a placeholder that should be replaced with an actual image */}
// // // //                   <img 
// // // //                     src={storeImage}
// // // //                     alt="Retail management system in action" 
// // // //                     className="w-full h-full object-cover"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
// // // //                   <p className="text-purple-600 font-bold">Trusted by 1000+ retailers</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="md:w-1/2">
// // // //               <h2 className="text-4xl font-bold mb-6">Our Story</h2>
// // // //               <p className="text-gray-600 mb-6 leading-relaxed">
// // // //                 Founded in 2025, our company began with a simple mission: to create a retail management system that actually works for retailers, not against them. 
// // // //               </p>
// // // //               <p className="text-gray-600 mb-6 leading-relaxed">
// // // //                 After years of working in retail ourselves, we experienced firsthand the frustrations of cumbersome inventory systems and disconnected sales platforms. We knew there had to be a better way.
// // // //               </p>
// // // //               <p className="text-gray-600 leading-relaxed">
// // // //                 Today, our platform serves thousands of retailers across the globe, from small boutiques to multi-location enterprises. Our commitment remains the same: simplify retail operations so you can focus on what matters—growing your business.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Stats Section */}
// // // //       <section className="bg-purple-900 text-white py-16 px-4">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
// // // //             {[
// // // //               { number: "1000+", label: "Retailers" },
// // // //               { number: "50M+", label: "Transactions Processed" },
// // // //               { number: "99.9%", label: "Uptime" },
// // // //               { number: "24/7", label: "Support" }
// // // //             ].map((stat, index) => (
// // // //               <div key={index} className="p-6">
// // // //                 <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
// // // //                 <p className="text-purple-200">{stat.label}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Core Values Section */}
// // // //       <section className="py-24 px-4">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center mb-6">Our Core Values</h2>
// // // //           <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
// // // //             These principles guide everything we do, from product development to customer service.
// // // //           </p>
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {[
// // // //               {
// // // //                 icon: "🔒",
// // // //                 title: "Reliability",
// // // //                 description: "We deliver a dependable system with 99.9% uptime, ensuring smooth retail operations even during peak seasons."
// // // //               },
// // // //               {
// // // //                 icon: "💡",
// // // //                 title: "Innovation",
// // // //                 description: "We continuously innovate to offer the latest tools and technologies to help our customers stay ahead in the competitive retail landscape."
// // // //               },
// // // //               {
// // // //                 icon: "❤️",
// // // //                 title: "Customer-Centric",
// // // //                 description: "Our customers are at the heart of everything we do. We create solutions to simplify their work and help them succeed in an ever-changing market."
// // // //               },
// // // //               {
// // // //                 icon: "🔍",
// // // //                 title: "Transparency",
// // // //                 description: "We believe in clear communication, fair pricing, and honest relationships with all our customers and partners."
// // // //               },
// // // //               {
// // // //                 icon: "🚀",
// // // //                 title: "Excellence",
// // // //                 description: "We strive for excellence in every feature we develop, every support ticket we resolve, and every interaction with our customers."
// // // //               },
// // // //               {
// // // //                 icon: "🤝",
// // // //                 title: "Partnership",
// // // //                 description: "We see ourselves as your business partner, not just a software provider. Your success is our success."
// // // //               }
// // // //             ].map((value, index) => (
// // // //               <div key={index} 
// // // //                 className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500">
// // // //                 <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
// // // //                   {value.icon}
// // // //                 </div>
// // // //                 <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
// // // //                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Key Features Section */}
// // // //       <section className="bg-gray-50 py-24 px-4">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center mb-6">Key Features</h2>
// // // //           <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
// // // //             Our platform is designed to make retail management simple, intuitive, and powerful.
// // // //           </p>
// // // //           <div className="space-y-8">
// // // //             {[
// // // //               {
// // // //                 icon: "📦",
// // // //                 title: "Inventory Management",
// // // //                 description: "Keep track of your stock levels in real-time. Our system helps you manage product quantities, avoid stockouts, and optimize your inventory with automated reordering and comprehensive stock analytics."
// // // //               },
// // // //               {
// // // //                 icon: "💳",
// // // //                 title: "Sales Tracking",
// // // //                 description: "Effortlessly track sales across different locations. Generate sales reports to analyze trends and improve your business strategies. Support for multiple payment methods and detailed transaction history."
// // // //               },
// // // //               {
// // // //                 icon: "📊",
// // // //                 title: "Reporting & Analytics",
// // // //                 description: "Generate customizable reports that provide deep insights into your sales, expenses, and profit margins. Make data-driven decisions with beautiful visualizations and predictive analytics."
// // // //               },
// // // //               {
// // // //                 icon: "👥",
// // // //                 title: "Customer Management",
// // // //                 description: "Build lasting relationships with your customers. Track purchase history, manage loyalty programs, and create targeted marketing campaigns to boost retention."
// // // //               },
// // // //               {
// // // //                 icon: "🔄",
// // // //                 title: "Multi-channel Integration",
// // // //                 description: "Seamlessly connect your physical store with your online presence. Manage inventory across all sales channels from a single dashboard."
// // // //               }
// // // //             ].map((feature, index) => (
// // // //               <div key={index} 
// // // //                 className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-x-2 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center">
// // // //                 <div className="text-5xl text-purple-600 mb-6 md:mb-0 md:mr-8 transform group-hover:scale-110 transition-transform duration-300">
// // // //                   {feature.icon}
// // // //                 </div>
// // // //                 <div>
// // // //                   <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
// // // //                   <p className="text-gray-600 leading-relaxed">{feature.description}</p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Testimonials Section */}
// // // //       <section className="py-24 px-4 bg-white">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //             {[
// // // //               {
// // // //                 quote: "This system has completely transformed how we manage our store. The inventory tracking alone has saved us countless hours.",
// // // //                 author: "Sarah J.",
// // // //                 role: "Boutique Owner"
// // // //               },
// // // //               {
// // // //                 quote: "As someone who runs multiple store locations, having everything in one platform has been a game-changer. The support team is also incredible.",
// // // //                 author: "Michael T.",
// // // //                 role: "Retail Chain Manager"
// // // //               },
// // // //               {
// // // //                 quote: "We've tried several systems before, but this is the only one that actually understands retail. It's intuitive and powerful.",
// // // //                 author: "Rebecca L.",
// // // //                 role: "Department Store Director"
// // // //               }
// // // //             ].map((testimonial, index) => (
// // // //               <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
// // // //                 <div className="absolute -top-5 left-8 text-purple-600 text-5xl">"</div>
// // // //                 <p className="text-gray-600 italic mb-6 pt-6">{testimonial.quote}</p>
// // // //                 <div className="flex items-center">
// // // //                   <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-600">
// // // //                     {testimonial.author.charAt(0)}
// // // //                   </div>
// // // //                   <div className="ml-4">
// // // //                     <p className="font-bold text-gray-800">{testimonial.author}</p>
// // // //                     <p className="text-gray-500 text-sm">{testimonial.role}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* CTA Section */}
// // // //       <section className="bg-gradient-to-r from-purple-500 to-blue-500 py-24 px-4 relative overflow-hidden">
// // // //         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
// // // //         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-24 translate-y-16"></div>
// // // //         <div className="max-w-4xl mx-auto text-center relative z-10">
// // // //           <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Business?</h2>
// // // //           <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
// // // //             Join thousands of successful retailers who have streamlined their operations with our platform.
// // // //           </p>
// // // //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// // // //             <Link to="/SignUp">
// // // //               <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg w-full sm:w-auto">
// // // //                 Start Your Journey
// // // //               </button>
// // // //             </Link>
// // // //             {/* <Link to="/ContactUs">
// // // //               <button className="bg-transparent text-white px-8 py-3 rounded-lg font-medium border-2 border-white hover:bg-white/10 transition-colors duration-200 w-full sm:w-auto">
// // // //                 Schedule Demo
// // // //               </button>
// // // //             </Link> */}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Footer Section */}
// // // //       <footer className="bg-gray-900 text-gray-300 py-16 px-4">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
// // // //             <div>
// // // //               <div className="flex items-center mb-4">
// // // //                 <div className="w-12 h-12 mr-3">
// // // //                   <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// // // //                 </div>
// // // //                 <h3 className="text-xl font-bold text-white">RetailPro</h3>
// // // //               </div>
// // // //               <p className="mb-4">Empowering retailers with smart management solutions since 2025.</p>
// // // //               <div className="flex space-x-4">
// // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // //                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
// // // //                   </svg>
// // // //                 </a>
// // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // //                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// // // //                   </svg>
// // // //                 </a>
// // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // //                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
// // // //                   </svg>
// // // //                 </a>
// // // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // // //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// // // //                     <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
// // // //                   </svg>
// // // //                 </a>
// // // //               </div>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-lg font-bold text-white mb-4">Product</h3>
// // // //               <ul className="space-y-3">
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
// // // //               </ul>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-lg font-bold text-white mb-4">Company</h3>
// // // //               <ul className="space-y-3">
// // // //                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
// // // //               </ul>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-lg font-bold text-white mb-4">Support</h3>
// // // //               <ul className="space-y-3">
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
// // // //                 <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
// // // //               </ul>
// // // //             </div>
// // // //           </div>
// // // //           <div className="pt-8 border-t border-gray-800 text-center text-sm">
// // // //             <p>&copy; 2025 RetailPro. All rights reserved.</p>
// // // //           </div>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AboutPage;
// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import logo from './images/logo.jpg'; // Assuming same logo is used
// // // import storeImage from './images/store-management.jpg'; // Assuming this image exists
// // // import { Sun, Moon } from 'lucide-react'; // Import icons for theme toggle

// // // // Reusable Header Component
// // // const Header = ({ currentTheme, toggleTheme, isDarkMode, scrolled, mobileMenuOpen, setMobileMenuOpen, location }) => {
// // //   const navLinks = [
// // //     { name: 'Home', path: '/' },
// // //     { name: 'About', path: '/AboutPage' },
// // //     { name: 'Contact', path: '/ContactUs' },
// // //   ];
// // //   const actionButtons = [
// // //     { name: 'Sign Up', path: '/SignUp' },
// // //     { name: 'Login', path: '/LoginPage' },
// // //     { name: 'Store Review', path: '/StoreReview' },
// // //   ];

// // //   return (
// // //     <motion.header
// // //       className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? currentTheme.header : currentTheme.headerTransparent}`}
// // //       initial={{ y: -100 }}
// // //       animate={{ y: 0 }}
// // //       transition={{ duration: 0.8, ease: 'easeOut' }}
// // //     >
// // //       <div className="container mx-auto px-6 py-4">
// // //         <div className="flex justify-between items-center">
// // //           <Link to="/" className="flex items-center gap-3 group">
// // //             <motion.img src={logo} alt="RetailPro" className="w-12 h-12 rounded-full group-hover:rotate-12 transition-transform" whileHover={{ scale: 1.1 }} />
// // //             <span className={`${currentTheme.accent} text-2xl font-extrabold tracking-tight group-hover:text-opacity-80 transition-all`}>RetailPro</span>
// // //           </Link>
// // //           <nav className="hidden md:flex gap-8">
// // //             {navLinks.map((link, idx) => (
// // //               <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
// // //                 <Link to={link.path} className={`text-lg font-medium ${location.pathname === link.path ? currentTheme.accent : currentTheme.secondaryText} hover:${currentTheme.accent} transition-colors`}>
// // //                   {link.name}
// // //                 </Link>
// // //               </motion.div>
// // //             ))}
// // //           </nav>
// // //           <div className="hidden md:flex gap-4">
// // //             {actionButtons.map((button, idx) => (
// // //               <motion.button
// // //                 key={idx}
// // //                 className={`px-5 py-2 rounded-full text-sm font-semibold ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton} ${currentTheme.glow} transition-all`}
// // //                 whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,70,229,0.5)' }}
// // //                 whileTap={{ scale: 0.95 }}
// // //               >
// // //                 <Link to={button.path}>{button.name}</Link>
// // //               </motion.button>
// // //             ))}
// // //           </div>
// // //           <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// // //             <svg className={`w-8 h-8 ${currentTheme.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //               {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
// // //             </svg>
// // //           </button>
// // //         </div>
// // //         {mobileMenuOpen && (
// // //           <motion.div
// // //             className={`${currentTheme.card} mt-4 p-4 rounded-lg`}
// // //             initial={{ opacity: 0, y: -20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.5 }}
// // //           >
// // //             {navLinks.map((link, idx) => (
// // //               <Link key={idx} to={link.path} className={`block py-2 ${currentTheme.text} hover:${currentTheme.accent}`} onClick={() => setMobileMenuOpen(false)}>
// // //                 {link.name}
// // //               </Link>
// // //             ))}
// // //             {actionButtons.map((button, idx) => (
// // //               <Link key={idx} to={button.path} className="block w-full">
// // //                 <button className={`w-full py-2 mt-2 rounded-lg ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton}`} onClick={() => setMobileMenuOpen(false)}>
// // //                   {button.name}
// // //                 </button>
// // //               </Link>
// // //             ))}
// // //           </motion.div>
// // //         )}
// // //       </div>
// // //     </motion.header>
// // //   );
// // // };

// // // // Updated AboutPage Component
// // // const AboutPage = () => {
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// // //   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
// // //   const location = { pathname: '/AboutPage' }; // Hardcoding for simplicity; use useLocation() in a real app

// // //   const themes = {
// // //     light: {
// // //       background: 'bg-gradient-to-b from-white to-gray-50',
// // //       text: 'text-gray-800',
// // //       secondaryText: 'text-gray-600',
// // //       accent: 'text-purple-600',
// // //       button: 'bg-purple-600 hover:bg-purple-700 text-white',
// // //       secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
// // //       card: 'bg-white',
// // //       border: 'border-gray-100',
// // //       header: 'bg-white/90 backdrop-blur-md shadow-lg',
// // //       headerTransparent: 'bg-transparent',
// // //       highlight: 'text-purple-500',
// // //       glow: 'shadow-md',
// // //     },
// // //     dark: {
// // //       background: 'bg-gradient-to-b from-gray-950 to-gray-900',
// // //       text: 'text-gray-100',
// // //       secondaryText: 'text-gray-400',
// // //       accent: 'text-purple-400',
// // //       button: 'bg-purple-600 hover:bg-purple-700 text-white',
// // //       secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
// // //       card: 'bg-gray-800/80',
// // //       border: 'border-gray-700',
// // //       header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
// // //       headerTransparent: 'bg-transparent',
// // //       highlight: 'text-purple-300',
// // //       glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)]',
// // //     },
// // //   };

// // //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// // //   const toggleTheme = () => {
// // //     setIsDarkMode((prev) => {
// // //       const newMode = !prev;
// // //       localStorage.setItem('theme', newMode ? 'dark' : 'light');
// // //       return newMode;
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const fadeIn = {
// // //     hidden: { opacity: 0, y: 20 },
// // //     visible: { opacity: 1, y: 0 },
// // //   };

// // //   return (
// // //     <div className={`${currentTheme.background} ${currentTheme.text} font-sans min-h-screen`}>
// // //       {/* Theme Toggle */}
// // //       <motion.button
// // //         whileHover={{ scale: 1.1, rotate: 10 }}
// // //         whileTap={{ scale: 0.9 }}
// // //         onClick={toggleTheme}
// // //         className={`fixed top-6 right-6 z-[100] p-3 rounded-full ${currentTheme.card} ${currentTheme.glow} transition-all`}
// // //       >
// // //         {isDarkMode ? <Sun className={`w-6 h-6 ${currentTheme.accent}`} /> : <Moon className={`w-6 h-6 ${currentTheme.accent}`} />}
// // //       </motion.button>

// // //       {/* Header */}
// // //       <Header
// // //         currentTheme={currentTheme}
// // //         toggleTheme={toggleTheme}
// // //         isDarkMode={isDarkMode}
// // //         scrolled={scrolled}
// // //         mobileMenuOpen={mobileMenuOpen}
// // //         setMobileMenuOpen={setMobileMenuOpen}
// // //         location={location}
// // //       />

// // //       {/* Hero Section */}
// // //       <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32 pt-24">
// // //         <div className="max-w-4xl mx-auto px-4 text-center">
// // //           <motion.h1
// // //             initial={{ opacity: 0, y: -20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.7 }}
// // //             className="text-6xl font-bold mb-6 animate-fade-in-up"
// // //           >
// // //             Who We Are
// // //           </motion.h1>
// // //           <motion.p
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 0.7, delay: 0.3 }}
// // //             className="text-xl text-white/90 leading-relaxed animate-fade-in-up mb-8"
// // //           >
// // //             Our Retail Store Management System empowers businesses of all sizes to streamline their operations. We simplify inventory management,
// // //             sales tracking, and reporting—all in one easy-to-use platform.
// // //           </motion.p>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.7, delay: 0.6 }}
// // //           >
// // //             <Link to="/ContactUs">
// // //               <button className={`${currentTheme.button} px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${currentTheme.glow}`}>
// // //                 Get Started Today
// // //               </button>
// // //             </Link>
// // //           </motion.div>
// // //         </div>
// // //         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
// // //       </div>

// // //       {/* Our Story Section */}
// // //       <section className="py-24 px-4">
// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="flex flex-col md:flex-row items-center gap-12">
// // //             <div className="md:w-1/2">
// // //               <div className="relative">
// // //                 <div className="bg-purple-200 w-64 h-64 rounded-full absolute -z-10 -left-6 -top-6"></div>
// // //                 <div className="w-full h-80 rounded-lg shadow-xl overflow-hidden">
// // //                   <img
// // //                     src={storeImage}
// // //                     alt="Retail management system in action"
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                 </div>
// // //                 <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
// // //                   <p className={currentTheme.accent}>Trusted by 1000+ retailers</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className="md:w-1/2">
// // //               <h2 className="text-4xl font-bold mb-6">Our Story</h2>
// // //               <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed`}>
// // //                 Founded in 2025, our company began with a simple mission: to create a retail management system that actually works for retailers, not against them.
// // //               </p>
// // //               <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed`}>
// // //                 After years of working in retail ourselves, we experienced firsthand the frustrations of cumbersome inventory systems and disconnected sales platforms. We knew there had to be a better way.
// // //               </p>
// // //               <p className={`${currentTheme.secondaryText} leading-relaxed`}>
// // //                 Today, our platform serves thousands of retailers across the globe, from small boutiques to multi-location enterprises. Our commitment remains the same: simplify retail operations so you can focus on what matters—growing your business.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Stats Section */}
// // //       <section className="bg-purple-900 text-white py-16 px-4">
// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
// // //             {[
// // //               { number: "1000+", label: "Retailers" },
// // //               { number: "50M+", label: "Transactions Processed" },
// // //               { number: "99.9%", label: "Uptime" },
// // //               { number: "24/7", label: "Support" }
// // //             ].map((stat, index) => (
// // //               <div key={index} className="p-6">
// // //                 <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
// // //                 <p className="text-purple-200">{stat.label}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Core Values Section */}
// // //       <section className="py-24 px-4">
// // //         <div className="max-w-6xl mx-auto">
// // //           <h2 className="text-4xl font-bold text-center mb-6">Our Core Values</h2>
// // //           <p className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16`}>
// // //             These principles guide everything we do, from product development to customer service.
// // //           </p>
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {[
// // //               {
// // //                 icon: "🔒",
// // //                 title: "Reliability",
// // //                 description: "We deliver a dependable system with 99.9% uptime, ensuring smooth retail operations even during peak seasons."
// // //               },
// // //               {
// // //                 icon: "💡",
// // //                 title: "Innovation",
// // //                 description: "We continuously innovate to offer the latest tools and technologies to help our customers stay ahead in the competitive retail landscape."
// // //               },
// // //               {
// // //                 icon: "❤️",
// // //                 title: "Customer-Centric",
// // //                 description: "Our customers are at the heart of everything we do. We create solutions to simplify their work and help them succeed in an ever-changing market."
// // //               },
// // //               {
// // //                 icon: "🔍",
// // //                 title: "Transparency",
// // //                 description: "We believe in clear communication, fair pricing, and honest relationships with all our customers and partners."
// // //               },
// // //               {
// // //                 icon: "🚀",
// // //                 title: "Excellence",
// // //                 description: "We strive for excellence in every feature we develop, every support ticket we resolve, and every interaction with our customers."
// // //               },
// // //               {
// // //                 icon: "🤝",
// // //                 title: "Partnership",
// // //                 description: "We see ourselves as your business partner, not just a software provider. Your success is our success."
// // //               }
// // //             ].map((value, index) => (
// // //               <div key={index}
// // //                 className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500`}>
// // //                 <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
// // //                   {value.icon}
// // //                 </div>
// // //                 <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
// // //                 <p className={currentTheme.secondaryText}>{value.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Footer Section */}
// // //       <footer className="bg-gray-900 text-gray-300 py-16 px-4">
// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
// // //             <div>
// // //               <div className="flex items-center mb-4">
// // //                 <div className="w-12 h-12 mr-3">
// // //                   <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// // //                 </div>
// // //                 <h3 className="text-xl font-bold text-white">RetailPro</h3>
// // //               </div>
// // //               <p className="mb-4">Empowering retailers with smart management solutions since 2025.</p>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-bold text-white mb-4">Product</h3>
// // //               <ul className="space-y-3">
// // //                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-bold text-white mb-4">Company</h3>
// // //               <ul className="space-y-3">
// // //                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="text-lg font-bold text-white mb-4">Support</h3>
// // //               <ul className="space-y-3">
// // //                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
// // //                 <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
// // //               </ul>
// // //             </div>
// // //           </div>
// // //           <div className="pt-8 border-t border-gray-800 text-center text-sm">
// // //             <p>© 2025 RetailPro. All rights reserved.</p>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default AboutPage;
// // import React, { useState, useEffect } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import logo from './images/logo.jpg';
// // import storeImage from './images/store-management.jpg';
// // import { Sun, Moon } from 'lucide-react';

// // // Reusable Header Component
// // const Header = ({ currentTheme, toggleTheme, isDarkMode, scrolled, mobileMenuOpen, setMobileMenuOpen, location }) => {
// //   const navLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About', path: '/AboutPage' },
// //     { name: 'Contact', path: '/ContactUs' },
// //   ];
// //   const actionButtons = [
// //     { name: 'Sign Up', path: '/SignUp' },
// //     { name: 'Login', path: '/LoginPage' },
// //     { name: 'Store Review', path: '/StoreReview' },
// //   ];

// //   return (
// //     <motion.header
// //       className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? currentTheme.header : currentTheme.headerTransparent}`}
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ duration: 0.8, ease: 'easeOut' }}
// //     >
// //       <div className="container mx-auto px-6 py-4">
// //         <div className="flex justify-between items-center">
// //           <Link to="/" className="flex items-center gap-3 group">
// //             <motion.img src={logo} alt="RetailPro" className="w-12 h-12 rounded-full group-hover:rotate-12 transition-transform" whileHover={{ scale: 1.1 }} />
// //             <span className={`${currentTheme.accent} text-2xl font-extrabold tracking-tight group-hover:text-opacity-80 transition-all`}>RetailPro</span>
// //           </Link>
// //           <nav className="hidden md:flex gap-8">
// //             {navLinks.map((link, idx) => (
// //               <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
// //                 <Link to={link.path} className={`text-lg font-medium ${location.pathname === link.path ? currentTheme.accent : currentTheme.secondaryText} hover:${currentTheme.accent} transition-colors`}>
// //                   {link.name}
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </nav>
// //           <div className="hidden md:flex gap-4">
// //             {actionButtons.map((button, idx) => (
// //               <motion.button
// //                 key={idx}
// //                 className={`px-5 py-2 rounded-full text-sm font-semibold ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton} ${currentTheme.glow} transition-all`}
// //                 whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,70,229,0.5)' }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 <Link to={button.path}>{button.name}</Link>
// //               </motion.button>
// //             ))}
// //           </div>
// //           <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //             <svg className={`w-8 h-8 ${currentTheme.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
// //             </svg>
// //           </button>
// //         </div>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             className={`${currentTheme.card} mt-4 p-4 rounded-lg`}
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             {navLinks.map((link, idx) => (
// //               <Link key={idx} to={link.path} className={`block py-2 ${currentTheme.text} hover:${currentTheme.accent}`} onClick={() => setMobileMenuOpen(false)}>
// //                 {link.name}
// //               </Link>
// //             ))}
// //             {actionButtons.map((button, idx) => (
// //               <Link key={idx} to={button.path} className="block w-full">
// //                 <button className={`w-full py-2 mt-2 rounded-lg ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton}`} onClick={() => setMobileMenuOpen(false)}>
// //                   {button.name}
// //                 </button>
// //               </Link>
// //             ))}
// //           </motion.div>
// //         )}
// //       </div>
// //     </motion.header>
// //   );
// // };

// // const AboutPage = () => {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
// //   const location = useLocation(); // Using useLocation for real navigation

// //   const themes = {
// //     light: {
// //       background: 'bg-gradient-to-b from-white to-gray-50',
// //       text: 'text-gray-800',
// //       secondaryText: 'text-gray-600',
// //       accent: 'text-purple-600',
// //       button: 'bg-purple-600 hover:bg-purple-700 text-white',
// //       secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
// //       card: 'bg-white',
// //       border: 'border-gray-100',
// //       header: 'bg-white/90 backdrop-blur-md shadow-lg',
// //       headerTransparent: 'bg-transparent',
// //       highlight: 'text-purple-500',
// //       glow: 'shadow-md',
// //       heroGradient: 'bg-gradient-to-t from-gray-50 to-transparent',
// //       statsBg: 'bg-purple-900',
// //       statsText: 'text-white',
// //       statsSecondary: 'text-purple-200',
// //       ctaBg: 'bg-gradient-to-r from-purple-500 to-blue-500',
// //     },
// //     dark: {
// //       background: 'bg-gradient-to-b from-gray-950 to-gray-900',
// //       text: 'text-gray-100',
// //       secondaryText: 'text-gray-400',
// //       accent: 'text-purple-400',
// //       button: 'bg-purple-600 hover:bg-purple-700 text-white',
// //       secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
// //       card: 'bg-gray-800/80',
// //       border: 'border-gray-700',
// //       header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
// //       headerTransparent: 'bg-transparent',
// //       highlight: 'text-purple-300',
// //       glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)]',
// //       heroGradient: 'bg-gradient-to-t from-gray-900 to-transparent',
// //       statsBg: 'bg-purple-950',
// //       statsText: 'text-gray-100',
// //       statsSecondary: 'text-purple-300',
// //       ctaBg: 'bg-gradient-to-r from-purple-600 to-blue-600',
// //     },
// //   };

// //   const currentTheme = isDarkMode ? themes.dark : themes.light;

// //   const toggleTheme = () => {
// //     setIsDarkMode((prev) => {
// //       const newMode = !prev;
// //       localStorage.setItem('theme', newMode ? 'dark' : 'light');
// //       return newMode;
// //     });
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const fadeIn = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0 },
// //   };

// //   return (
// //     <div className={`${currentTheme.background} ${currentTheme.text} font-sans min-h-screen`}>
// //       {/* Theme Toggle */}
// //       <motion.button
// //         whileHover={{ scale: 1.1, rotate: 10 }}
// //         whileTap={{ scale: 0.9 }}
// //         onClick={toggleTheme}
// //         className={`fixed top-6 right-6 z-[100] p-3 rounded-full ${currentTheme.card} ${currentTheme.glow} transition-all`}
// //       >
// //         {isDarkMode ? <Sun className={`w-6 h-6 ${currentTheme.accent}`} /> : <Moon className={`w-6 h-6 ${currentTheme.accent}`} />}
// //       </motion.button>

// //       {/* Header */}
// //       <Header
// //         currentTheme={currentTheme}
// //         toggleTheme={toggleTheme}
// //         isDarkMode={isDarkMode}
// //         scrolled={scrolled}
// //         mobileMenuOpen={mobileMenuOpen}
// //         setMobileMenuOpen={setMobileMenuOpen}
// //         location={location}
// //       />

// //       {/* Hero Section */}
// //       <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32 pt-24">
// //         <div className="max-w-4xl mx-auto px-4 text-center">
// //           <motion.h1
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7 }}
// //             className="text-6xl font-bold mb-6 animate-fade-in-up"
// //           >
// //             Who We Are
// //           </motion.h1>
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.7, delay: 0.3 }}
// //             className="text-xl text-white/90 leading-relaxed animate-fade-in-up mb-8"
// //           >
// //             Our Retail Store Management System empowers businesses of all sizes to streamline their operations. We simplify inventory management,
// //             sales tracking, and reporting—all in one easy-to-use platform.
// //           </motion.p>
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.7, delay: 0.6 }}
// //           >
// //             <Link to="/ContactUs">
// //               <button className={`${currentTheme.button} px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${currentTheme.glow}`}>
// //                 Get Started Today
// //               </button>
// //             </Link>
// //           </motion.div>
// //         </div>
// //         <div className={`absolute bottom-0 left-0 right-0 h-16 ${currentTheme.heroGradient}`}></div>
// //       </div>

// //       {/* Our Story Section */}
// //       <section className="py-24 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="flex flex-col md:flex-row items-center gap-12">
// //             <div className="md:w-1/2">
// //               <div className="relative">
// //                 <div className="bg-purple-200 w-64 h-64 rounded-full absolute -z-10 -left-6 -top-6"></div>
// //                 <div className="w-full h-80 rounded-lg shadow-xl overflow-hidden">
// //                   <img
// //                     src={storeImage}
// //                     alt="Retail management system in action"
// //                     className="w-full h-full object-cover"
// //                   />
// //                 </div>
// //                 <div className={`absolute bottom-4 right-4 ${currentTheme.card} p-4 rounded-lg ${currentTheme.glow}`}>
// //                   <p className={currentTheme.accent}>Trusted by 1000+ retailers</p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="md:w-1/2">
// //               <h2 className="text-4xl font-bold mb-6">Our Story</h2>
// //               <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed`}>
// //                 Founded in 2025, our company began with a simple mission: to create a retail management system that actually works for retailers, not against them.
// //               </p>
// //               <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed`}>
// //                 After years of working in retail ourselves, we experienced firsthand the frustrations of cumbersome inventory systems and disconnected sales platforms. We knew there had to be a better way.
// //               </p>
// //               <p className={`${currentTheme.secondaryText} leading-relaxed`}>
// //                 Today, our platform serves thousands of retailers across the globe, from small boutiques to multi-location enterprises. Our commitment remains the same: simplify retail operations so you can focus on what matters—growing your business.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section className={`${currentTheme.statsBg} ${currentTheme.statsText} py-16 px-4`}>
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
// //             {[
// //               { number: "1000+", label: "Retailers" },
// //               { number: "50M+", label: "Transactions Processed" },
// //               { number: "99.9%", label: "Uptime" },
// //               { number: "24/7", label: "Support" },
// //             ].map((stat, index) => (
// //               <div key={index} className="p-6">
// //                 <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
// //                 <p className={currentTheme.statsSecondary}>{stat.label}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Core Values Section */}
// //       <section className="py-24 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-center mb-6">Our Core Values</h2>
// //           <p className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16`}>
// //             These principles guide everything we do, from product development to customer service.
// //           </p>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: "🔒",
// //                 title: "Reliability",
// //                 description: "We deliver a dependable system with 99.9% uptime, ensuring smooth retail operations even during peak seasons.",
// //               },
// //               {
// //                 icon: "💡",
// //                 title: "Innovation",
// //                 description: "We continuously innovate to offer the latest tools and technologies to help our customers stay ahead in the competitive retail landscape.",
// //               },
// //               {
// //                 icon: "❤️",
// //                 title: "Customer-Centric",
// //                 description: "Our customers are at the heart of everything we do. We create solutions to simplify their work and help them succeed in an ever-changing market.",
// //               },
// //               {
// //                 icon: "🔍",
// //                 title: "Transparency",
// //                 description: "We believe in clear communication, fair pricing, and honest relationships with all our customers and partners.",
// //               },
// //               {
// //                 icon: "🚀",
// //                 title: "Excellence",
// //                 description: "We strive for excellence in every feature we develop, every support ticket we resolve, and every interaction with our customers.",
// //               },
// //               {
// //                 icon: "🤝",
// //                 title: "Partnership",
// //                 description: "We see ourselves as your business partner, not just a software provider. Your success is our success.",
// //               },
// //             ].map((value, index) => (
// //               <div
// //                 key={index}
// //                 className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transform hover:-translate-y-2 transition-all duration-300 border-t-4 border-purple-500`}
// //               >
// //                 <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
// //                   {value.icon}
// //                 </div>
// //                 <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
// //                 <p className={currentTheme.secondaryText}>{value.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Key Features Section */}
// //       <section className={`${currentTheme.background} py-24 px-4`}>
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-center mb-6">Key Features</h2>
// //           <p className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16`}>
// //             Our platform is designed to make retail management simple, intuitive, and powerful.
// //           </p>
// //           <div className="space-y-8">
// //             {[
// //               {
// //                 icon: "📦",
// //                 title: "Inventory Management",
// //                 description: "Keep track of your stock levels in real-time. Our system helps you manage product quantities, avoid stockouts, and optimize your inventory with automated reordering and comprehensive stock analytics.",
// //               },
// //               {
// //                 icon: "💳",
// //                 title: "Sales Tracking",
// //                 description: "Effortlessly track sales across different locations. Generate sales reports to analyze trends and improve your business strategies. Support for multiple payment methods and detailed transaction history.",
// //               },
// //               {
// //                 icon: "📊",
// //                 title: "Reporting & Analytics",
// //                 description: "Generate customizable reports that provide deep insights into your sales, expenses, and profit margins. Make data-driven decisions with beautiful visualizations and predictive analytics.",
// //               },
// //               {
// //                 icon: "👥",
// //                 title: "Customer Management",
// //                 description: "Build lasting relationships with your customers. Track purchase history, manage loyalty programs, and create targeted marketing campaigns to boost retention.",
// //               },
// //               {
// //                 icon: "🔄",
// //                 title: "Multi-channel Integration",
// //                 description: "Seamlessly connect your physical store with your online presence. Manage inventory across all sales channels from a single dashboard.",
// //               },
// //             ].map((feature, index) => (
// //               <div
// //                 key={index}
// //                 className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transform hover:-translate-x-2 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center`}
// //               >
// //                 <div className={`text-5xl ${currentTheme.highlight} mb-6 md:mb-0 md:mr-8 transform group-hover:scale-110 transition-transform duration-300`}>
// //                   {feature.icon}
// //                 </div>
// //                 <div>
// //                   <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
// //                   <p className={currentTheme.secondaryText}>{feature.description}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="py-24 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 quote: "This system has completely transformed how we manage our store. The inventory tracking alone has saved us countless hours.",
// //                 author: "Sarah J.",
// //                 role: "Boutique Owner",
// //               },
// //               {
// //                 quote: "As someone who runs multiple store locations, having everything in one platform has been a game-changer. The support team is also incredible.",
// //                 author: "Michael T.",
// //                 role: "Retail Chain Manager",
// //               },
// //               {
// //                 quote: "We've tried several systems before, but this is the only one that actually understands retail. It's intuitive and powerful.",
// //                 author: "Rebecca L.",
// //                 role: "Department Store Director",
// //               },
// //             ].map((testimonial, index) => (
// //               <div key={index} className={`${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} relative`}>
// //                 <div className={`absolute -top-5 left-8 text-5xl ${currentTheme.accent}`}>"</div>
// //                 <p className={`${currentTheme.secondaryText} italic mb-6 pt-6`}>{testimonial.quote}</p>
// //                 <div className="flex items-center">
// //                   <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-600">
// //                     {testimonial.author.charAt(0)}
// //                   </div>
// //                   <div className="ml-4">
// //                     <p className="font-bold">{testimonial.author}</p>
// //                     <p className={currentTheme.secondaryText}>{testimonial.role}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className={`${currentTheme.ctaBg} py-24 px-4 relative overflow-hidden`}>
// //         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
// //         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-24 translate-y-16"></div>
// //         <div className="max-w-4xl mx-auto text-center relative z-10">
// //           <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Retail Business?</h2>
// //           <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
// //             Join thousands of successful retailers who have streamlined their operations with our platform.
// //           </p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <Link to="/SignUp">
// //               <button className={`${currentTheme.button} px-8 py-3 rounded-lg font-medium transition-colors duration-200 ${currentTheme.glow}`}>
// //                 Start Your Journey
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer Section */}
// //       <footer className="bg-gray-900 text-gray-300 py-16 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
// //             <div>
// //               <div className="flex items-center mb-4">
// //                 <div className="w-12 h-12 mr-3">
// //                   <img src={logo} alt="Logo" className="w-full h-full rounded-lg" />
// //                 </div>
// //                 <h3 className="text-xl font-bold text-white">RetailPro</h3>
// //               </div>
// //               <p className="mb-4">Empowering retailers with smart management solutions since 2025.</p>
// //               <div className="flex space-x-4">
// //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
// //                   </svg>
// //                 </a>
// //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// //                   </svg>
// //                 </a>
// //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
// //                   </svg>
// //                 </a>
// //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// //                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                     <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
// //                   </svg>
// //                 </a>
// //               </div>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-bold text-white mb-4">Product</h3>
// //               <ul className="space-y-3">
// //                 <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-bold text-white mb-4">Company</h3>
// //               <ul className="space-y-3">
// //                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="text-lg font-bold text-white mb-4">Support</h3>
// //               <ul className="space-y-3">
// //                 <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
// //                 <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //           <div className="pt-8 border-t border-gray-800 text-center text-sm">
// //             <p>© 2025 RetailPro. All rights reserved.</p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default AboutPage;   
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import logo from './images/logo.jpg';
// import storeImage from './images/store-management.jpg';
// import { Sun, Moon } from 'lucide-react';

// // Reusable Header Component
// const Header = ({ currentTheme, toggleTheme, isDarkMode, scrolled, mobileMenuOpen, setMobileMenuOpen, location }) => {
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/AboutPage' },
//     { name: 'Contact', path: '/ContactUs' },
//   ];
//   const actionButtons = [
//     { name: 'Sign Up', path: '/SignUp' },
//     { name: 'Login', path: '/LoginPage' },
//     { name: 'Store Review', path: '/StoreReview' },
//   ];

//   return (
//     <motion.header
//       className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? currentTheme.header : currentTheme.headerTransparent}`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8, ease: 'easeOut' }}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center gap-3 group">
//             <motion.img src={logo} alt="RetailPro" className="w-12 h-12 rounded-full group-hover:rotate-12 transition-transform" whileHover={{ scale: 1.1 }} />
//             <span className={`${currentTheme.accent} text-2xl font-extrabold tracking-tight group-hover:text-opacity-80 transition-all`}>RetailPro</span>
//           </Link>
//           <nav className="hidden md:flex gap-8">
//             {navLinks.map((link, idx) => (
//               <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
//                 <Link to={link.path} className={`text-lg font-medium ${location.pathname === link.path ? currentTheme.accent : currentTheme.secondaryText} hover:${currentTheme.accent} transition-colors`}>
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </nav>
//           <div className="hidden md:flex gap-4">
//             {actionButtons.map((button, idx) => (
//               <motion.button
//                 key={idx}
//                 className={`px-5 py-2 rounded-full text-sm font-semibold ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton} ${currentTheme.glow} transition-all`}
//                 whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,70,229,0.5)' }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link to={button.path}>{button.name}</Link>
//               </motion.button>
//             ))}
//           </div>
//           <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             <svg className={`w-8 h-8 ${currentTheme.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
//             </svg>
//           </button>
//         </div>
//         {mobileMenuOpen && (
//           <motion.div
//             className={`${currentTheme.card} mt-4 p-4 rounded-lg`}
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {navLinks.map((link, idx) => (
//               <Link key={idx} to={link.path} className={`block py-2 ${currentTheme.text} hover:${currentTheme.accent}`} onClick={() => setMobileMenuOpen(false)}>
//                 {link.name}
//               </Link>
//             ))}
//             {actionButtons.map((button, idx) => (
//               <Link key={idx} to={button.path} className="block w-full">
//                 <button className={`w-full py-2 mt-2 rounded-lg ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton}`} onClick={() => setMobileMenuOpen(false)}>
//                   {button.name}
//                 </button>
//               </Link>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// };

// const AboutPage = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
//   const location = useLocation();

//   const themes = {
//     light: {
//       background: 'bg-gradient-to-b from-white to-gray-50',
//       text: 'text-gray-800',
//       secondaryText: 'text-gray-600',
//       accent: 'text-purple-600',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
//       card: 'bg-white',
//       border: 'border-gray-100',
//       header: 'bg-white/90 backdrop-blur-md shadow-lg',
//       headerTransparent: 'bg-transparent',
//       highlight: 'text-purple-500',
//       glow: 'shadow-md hover:shadow-lg',
//       heroGradient: 'bg-gradient-to-t from-gray-50 to-transparent',
//       statsBg: 'bg-purple-900',
//       statsText: 'text-white',
//       statsSecondary: 'text-purple-200',
//       ctaBg: 'bg-gradient-to-r from-purple-500 to-blue-500',
//       footerBg: 'bg-gray-900',
//       footerText: 'text-gray-300',
//     },
//     dark: {
//       background: 'bg-gradient-to-b from-gray-950 to-gray-900',
//       text: 'text-gray-100',
//       secondaryText: 'text-gray-400',
//       accent: 'text-purple-400',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
//       card: 'bg-gray-800/80',
//       border: 'border-gray-700',
//       header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
//       headerTransparent: 'bg-transparent',
//       highlight: 'text-purple-300',
//       glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
//       heroGradient: 'bg-gradient-to-t from-gray-900 to-transparent',
//       statsBg: 'bg-purple-950',
//       statsText: 'text-gray-100',
//       statsSecondary: 'text-purple-300',
//       ctaBg: 'bg-gradient-to-r from-purple-600 to-blue-600',
//       footerBg: 'bg-gray-950',
//       footerText: 'text-gray-400',
//     },
//   };

//   const currentTheme = isDarkMode ? themes.dark : themes.light;

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => {
//       const newMode = !prev;
//       localStorage.setItem('theme', newMode ? 'dark' : 'light');
//       return newMode;
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className={`${currentTheme.background} ${currentTheme.text} font-sans min-h-screen`}>
//       {/* Theme Toggle */}
//       <motion.button
//         whileHover={{ scale: 1.1, rotate: 10 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={toggleTheme}
//         className={`fixed top-6 right-6 z-[100] p-3 rounded-full ${currentTheme.card} ${currentTheme.glow} transition-all`}
//       >
//         {isDarkMode ? <Sun className={`w-6 h-6 ${currentTheme.accent}`} /> : <Moon className={`w-6 h-6 ${currentTheme.accent}`} />}
//       </motion.button>

//       {/* Header */}
//       <Header
//         currentTheme={currentTheme}
//         toggleTheme={toggleTheme}
//         isDarkMode={isDarkMode}
//         scrolled={scrolled}
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         location={location}
//       />

//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32 pt-24">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-6xl font-bold mb-6 tracking-tight"
//           >
//             Who We Are
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//             className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto"
//           >
//             Our Retail Store Management System empowers businesses of all sizes to streamline their operations with intuitive tools for inventory management, sales tracking, and insightful reporting.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: 0.6 }}
//           >
//             <Link to="/ContactUs">
//               <button className={`${currentTheme.button} px-8 py-3 rounded-full font-medium transition-all duration-300 ${currentTheme.glow}`}>
//                 Get Started Today
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//         <div className={`absolute bottom-0 left-0 right-0 h-16 ${currentTheme.heroGradient}`}></div>
//       </div>

//       {/* Our Story Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div
//               className="md:w-1/2"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="relative">
//                 <div className="bg-purple-200 w-64 h-64 rounded-full absolute -z-10 -left-6 -top-6 opacity-50"></div>
//                 <div className={`w-full h-80 rounded-lg overflow-hidden ${currentTheme.glow}`}>
//                   <img
//                     src={storeImage}
//                     alt="Retail management system in action"
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <div className={`absolute bottom-4 right-4 ${currentTheme.card} p-4 rounded-lg ${currentTheme.glow}`}>
//                   <p className={`${currentTheme.accent} font-semibold`}>Trusted by 1000+ retailers</p>
//                 </div>
//               </div>
//             </motion.div>
//             <motion.div
//               className="md:w-1/2"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Story</h2>
//               <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed text-lg`}>
//                 Founded in 2025, our journey began with a vision to revolutionize retail management by building a system that truly understands the needs of retailers.
//               </p>
//               <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed text-lg`}>
//                 With years of hands-on retail experience, we identified the pain points of outdated systems and fragmented workflows. This drove us to create a seamless, all-in-one solution.
//               </p>
//               <p className={`${currentTheme.secondaryText} leading-relaxed text-lg`}>
//                 Now, we proudly support thousands of retailers worldwide—from local shops to global chains—helping them simplify operations and thrive in a dynamic market.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className={`${currentTheme.statsBg} ${currentTheme.statsText} py-16 px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: "1000+", label: "Retailers" },
//               { number: "50M+", label: "Transactions Processed" },
//               { number: "99.9%", label: "Uptime" },
//               { number: "24/7", label: "Support" },
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="p-6"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//               >
//                 <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
//                 <p className={currentTheme.statsSecondary}>{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-6 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Core Values
//           </motion.h2>
//           <motion.p
//             className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16 text-lg`}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             These guiding principles shape our approach to innovation, service, and partnership.
//           </motion.p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: "🔒",
//                 title: "Reliability",
//                 description: "Ensuring 99.9% uptime for uninterrupted retail operations, even during peak demand.",
//               },
//               {
//                 icon: "💡",
//                 title: "Innovation",
//                 description: "Pushing boundaries with cutting-edge tools to keep retailers ahead of the curve.",
//               },
//               {
//                 icon: "❤️",
//                 title: "Customer-Centric",
//                 description: "Designing solutions that prioritize your success and simplify your daily challenges.",
//               },
//               {
//                 icon: "🔍",
//                 title: "Transparency",
//                 description: "Fostering trust through open communication and straightforward pricing.",
//               },
//               {
//                 icon: "🚀",
//                 title: "Excellence",
//                 description: "Pursuing perfection in every feature, support interaction, and user experience.",
//               },
//               {
//                 icon: "🤝",
//                 title: "Partnership",
//                 description: "Collaborating as your ally to drive mutual growth and success.",
//               },
//             ].map((value, index) => (
//               <motion.div
//                 key={index}
//                 className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transition-all duration-300 border-t-4 border-purple-500`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className={`text-4xl mb-6 ${currentTheme.highlight} transform group-hover:scale-110 transition-transform duration-300`}>
//                   {value.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
//                 <p className={currentTheme.secondaryText}>{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Key Features Section */}
//       <section className={`${currentTheme.background} py-24 px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-6 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Key Features
//           </motion.h2>
//           <motion.p
//             className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16 text-lg`}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Discover the tools that make retail management effortless and effective.
//           </motion.p>
//           <div className="space-y-8">
//             {[
//               {
//                 icon: "📦",
//                 title: "Inventory Management",
//                 description: "Track stock in real-time, prevent shortages, and optimize inventory with automated insights.",
//               },
//               {
//                 icon: "💳",
//                 title: "Sales Tracking",
//                 description: "Monitor sales across locations with detailed reports and multi-payment support.",
//               },
//               {
//                 icon: "📊",
//                 title: "Reporting & Analytics",
//                 description: "Unlock actionable insights with customizable reports and predictive analytics.",
//               },
//               {
//                 icon: "👥",
//                 title: "Customer Management",
//                 description: "Enhance loyalty with purchase tracking and targeted marketing tools.",
//               },
//               {
//                 icon: "🔄",
//                 title: "Multi-channel Integration",
//                 description: "Unify your physical and online stores with a single, powerful dashboard.",
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transition-all duration-300 flex flex-col md:flex-row items-start md:items-center`}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ x: -5 }}
//               >
//                 <div className={`text-5xl ${currentTheme.highlight} mb-6 md:mb-0 md:mr-8 transform group-hover:scale-110 transition-transform duration-300`}>
//                   {feature.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
//                   <p className={currentTheme.secondaryText}>{feature.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             className="text-4xl font-bold text-center mb-16 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             What Our Customers Say
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 quote: "This system transformed our store operations. Inventory tracking is a lifesaver!",
//                 author: "Sarah J.",
//                 role: "Boutique Owner",
//               },
//               {
//                 quote: "Managing multiple locations is now effortless, thanks to this platform and its stellar support.",
//                 author: "Michael T.",
//                 role: "Retail Chain Manager",
//               },
//               {
//                 quote: "Intuitive, powerful, and truly understands retail needs—unlike anything we've tried before.",
//                 author: "Rebecca L.",
//                 role: "Department Store Director",
//               },
//             ].map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 className={`${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} relative`}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className={`absolute -top-5 left-8 text-5xl ${currentTheme.accent} opacity-30`}>"</div>
//                 <p className={`${currentTheme.secondaryText} italic mb-6 pt-6`}>{testimonial.quote}</p>
//                 <div className="flex items-center">
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${currentTheme.highlight} bg-purple-200/50`}>
//                     {testimonial.author.charAt(0)}
//                   </div>
//                   <div className="ml-4">
//                     <p className="font-bold">{testimonial.author}</p>
//                     <p className={currentTheme.secondaryText}>{testimonial.role}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={`${currentTheme.ctaBg} py-24 px-4 relative overflow-hidden`}>
//         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-24 translate-y-16"></div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <motion.h2
//             className="text-4xl font-bold text-white mb-6 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Ready to Transform Your Retail Business?
//           </motion.h2>
//           <motion.p
//             className="text-white/90 text-xl mb-8 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Join thousands of retailers enhancing their operations with our innovative platform.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Link to="/SignUp">
//               <button className={`${currentTheme.button} px-8 py-3 rounded-full font-medium transition-all duration-300 ${currentTheme.glow}`}>
//                 Start Your Journey
//               </button>
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Unique Footer Section */}
//       <footer className={`${currentTheme.footerBg} ${currentTheme.footerText} py-12 px-4`}>
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center mb-4">
//                 <img src={logo} alt="RetailPro" className="w-10 h-10 rounded-full mr-3" />
//                 <h3 className="text-xl font-bold text-white">RetailPro</h3>
//               </div>
//               <p className="text-sm">Simplifying retail management since 2025 with innovative solutions.</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-sm">
//                 <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
//                 <li><Link to="/AboutPage" className="hover:text-white transition-colors">About</Link></li>
//                 <li><Link to="/ContactUs" className="hover:text-white transition-colors">Contact</Link></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
//               <p className="text-sm">Email: support@retailpro.com</p>
//               <p className="text-sm">Phone: +1 (800) 555-1234</p>
//               <div className="flex space-x-4 mt-4">
//                 <a href="#" className="hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
//                 </a>
//                 <a href="#" className="hover:text-white transition-colors">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0 3.204.012 3.584.07 4.85.062 1.366.326 2.633 1.301 3.608 1.301.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0-3.204zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-6 text-center text-sm">
//             <p>&copy; {new Date().getFullYear()} RetailPro. Crafted with care for retailers worldwide.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutPage;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './images/logo.jpg';
import storeImage from './images/store-management.jpg';
import { Sun, Moon } from 'lucide-react';

// Reusable Header Component (unchanged)
const Header = ({ currentTheme, toggleTheme, isDarkMode, scrolled, mobileMenuOpen, setMobileMenuOpen, location }) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/AboutPage' },
    { name: 'Contact', path: '/ContactUs' },
  ];
  const actionButtons = [
    { name: 'Sign Up', path: '/SignUp' },
    { name: 'Login', path: '/LoginPage' },
    { name: 'Store Review', path: '/StoreReview' },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? currentTheme.header : currentTheme.headerTransparent}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img src={logo} alt="RetailPro" className="w-12 h-12 rounded-full group-hover:rotate-12 transition-transform" whileHover={{ scale: 1.1 }} />
            <span className={`${currentTheme.accent} text-2xl font-extrabold tracking-tight group-hover:text-opacity-80 transition-all`}>RetailPro</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link, idx) => (
              <motion.div key={idx} whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
                <Link to={link.path} className={`text-lg font-medium ${location.pathname === link.path ? currentTheme.accent : currentTheme.secondaryText} hover:${currentTheme.accent} transition-colors`}>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="hidden md:flex gap-4">
            {actionButtons.map((button, idx) => (
              <motion.button
                key={idx}
                className={`px-5 py-2 rounded-full text-sm font-semibold ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton} ${currentTheme.glow} transition-all`}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(79,70,229,0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={button.path}>{button.name}</Link>
              </motion.button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className={`w-8 h-8 ${currentTheme.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            className={`${currentTheme.card} mt-4 p-4 rounded-lg`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map((link, idx) => (
              <Link key={idx} to={link.path} className={`block py-2 ${currentTheme.text} hover:${currentTheme.accent}`} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            {actionButtons.map((button, idx) => (
              <Link key={idx} to={button.path} className="block w-full">
                <button className={`w-full py-2 mt-2 rounded-lg ${idx === 2 ? `${currentTheme.button} text-white` : currentTheme.secondaryButton}`} onClick={() => setMobileMenuOpen(false)}>
                  {button.name}
                </button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const AboutPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
  const location = useLocation();

  const themes = {
    light: {
      background: 'bg-gradient-to-b from-white to-gray-50',
      text: 'text-gray-800',
      secondaryText: 'text-gray-600',
      accent: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
      card: 'bg-white',
      border: 'border-gray-100',
      header: 'bg-white/90 backdrop-blur-md shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-500',
      glow: 'shadow-md hover:shadow-lg',
      heroGradient: 'bg-gradient-to-t from-gray-50 to-transparent',
      statsBg: 'bg-purple-900',
      statsText: 'text-white',
      statsSecondary: 'text-purple-200',
      ctaBg: 'bg-gradient-to-r from-purple-500 to-blue-500',
      footerBg: 'bg-gray-800', // Slightly lighter than Home's bg-gray-900
      footerText: 'text-gray-300',
      footerAccent: 'text-purple-400',
    },
    dark: {
      background: 'bg-gradient-to-b from-gray-950 to-gray-900',
      text: 'text-gray-100',
      secondaryText: 'text-gray-400',
      accent: 'text-purple-400',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
      card: 'bg-gray-800/80',
      border: 'border-gray-700',
      header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-300',
      glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
      heroGradient: 'bg-gradient-to-t from-gray-900 to-transparent',
      statsBg: 'bg-purple-950',
      statsText: 'text-gray-100',
      statsSecondary: 'text-purple-300',
      ctaBg: 'bg-gradient-to-r from-purple-600 to-blue-600',
      footerBg: 'bg-gray-900', // Slightly lighter than Home's bg-gray-950
      footerText: 'text-gray-400',
      footerAccent: 'text-purple-300',
    },
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${currentTheme.background} ${currentTheme.text} font-sans min-h-screen`}>
      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-[100] p-3 rounded-full ${currentTheme.card} ${currentTheme.glow} transition-all`}
      >
        {isDarkMode ? <Sun className={`w-6 h-6 ${currentTheme.accent}`} /> : <Moon className={`w-6 h-6 ${currentTheme.accent}`} />}
      </motion.button>

      {/* Header */}
      <Header
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        location={location}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 text-white py-32 pt-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-bold mb-6 tracking-tight"
          >
            Who We Are
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Our Retail Store Management System empowers businesses of all sizes to streamline their operations with intuitive tools for inventory management, sales tracking, and insightful reporting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/ContactUs">
              <button className={`${currentTheme.button} px-8 py-3 rounded-full font-medium transition-all duration-300 ${currentTheme.glow}`}>
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </div>
        <div className={`absolute bottom-0 left-0 right-0 h-16 ${currentTheme.heroGradient}`}></div>
      </div>

      {/* Our Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="bg-purple-200 w-64 h-64 rounded-full absolute -z-10 -left-6 -top-6 opacity-50"></div>
                <div className={`w-full h-80 rounded-lg overflow-hidden ${currentTheme.glow}`}>
                  <img
                    src={storeImage}
                    alt="Retail management system in action"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className={`absolute bottom-4 right-4 ${currentTheme.card} p-4 rounded-lg ${currentTheme.glow}`}>
                  <p className={`${currentTheme.accent} font-semibold`}>Trusted by 1000+ retailers</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Story</h2>
              <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed text-lg`}>
                Founded in 2025, our journey began with a vision to revolutionize retail management by building a system that truly understands the needs of retailers.
              </p>
              <p className={`${currentTheme.secondaryText} mb-6 leading-relaxed text-lg`}>
                With years of hands-on retail experience, we identified the pain points of outdated systems and fragmented workflows. This drove us to create a seamless, all-in-one solution.
              </p>
              <p className={`${currentTheme.secondaryText} leading-relaxed text-lg`}>
                Now, we proudly support thousands of retailers worldwide—from local shops to global chains—helping them simplify operations and thrive in a dynamic market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`${currentTheme.statsBg} ${currentTheme.statsText} py-16 px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Retailers" },
              { number: "50M+", label: "Transactions Processed" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-5xl font-bold mb-2">{stat.number}</h3>
                <p className={currentTheme.statsSecondary}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16 text-lg`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            These guiding principles shape our approach to innovation, service, and partnership.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "Reliability",
                description: "Ensuring 99.9% uptime for uninterrupted retail operations, even during peak demand.",
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Pushing boundaries with cutting-edge tools to keep retailers ahead of the curve.",
              },
              {
                icon: "❤️",
                title: "Customer-Centric",
                description: "Designing solutions that prioritize your success and simplify your daily challenges.",
              },
              {
                icon: "🔍",
                title: "Transparency",
                description: "Fostering trust through open communication and straightforward pricing.",
              },
              {
                icon: "🚀",
                title: "Excellence",
                description: "Pursuing perfection in every feature, support interaction, and user experience.",
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "Collaborating as your ally to drive mutual growth and success.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transition-all duration-300 border-t-4 border-purple-500`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl mb-6 ${currentTheme.highlight} transform group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className={currentTheme.secondaryText}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`${currentTheme.background} py-24 px-4`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          <motion.p
            className={`${currentTheme.secondaryText} text-center max-w-3xl mx-auto mb-16 text-lg`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover the tools that make retail management effortless and effective.
          </motion.p>
          <div className="space-y-8">
            {[
              {
                icon: "📦",
                title: "Inventory Management",
                description: "Track stock in real-time, prevent shortages, and optimize inventory with automated insights.",
              },
              {
                icon: "💳",
                title: "Sales Tracking",
                description: "Monitor sales across locations with detailed reports and multi-payment support.",
              },
              {
                icon: "📊",
                title: "Reporting & Analytics",
                description: "Unlock actionable insights with customizable reports and predictive analytics.",
              },
              {
                icon: "👥",
                title: "Customer Management",
                description: "Enhance loyalty with purchase tracking and targeted marketing tools.",
              },
              {
                icon: "🔄",
                title: "Multi-channel Integration",
                description: "Unify your physical and online stores with a single, powerful dashboard.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`group ${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} transition-all duration-300 flex flex-col md:flex-row items-start md:items-center`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: -5 }}
              >
                <div className={`text-5xl ${currentTheme.highlight} mb-6 md:mb-0 md:mr-8 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className={currentTheme.secondaryText}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This system transformed our store operations. Inventory tracking is a lifesaver!",
                author: "Sarah J.",
                role: "Boutique Owner",
              },
              {
                quote: "Managing multiple locations is now effortless, thanks to this platform and its stellar support.",
                author: "Michael T.",
                role: "Retail Chain Manager",
              },
              {
                quote: "Intuitive, powerful, and truly understands retail needs—unlike anything we've tried before.",
                author: "Rebecca L.",
                role: "Department Store Director",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className={`${currentTheme.card} p-8 rounded-xl ${currentTheme.glow} relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute -top-5 left-8 text-5xl ${currentTheme.accent} opacity-30`}>"</div>
                <p className={`${currentTheme.secondaryText} italic mb-6 pt-6`}>{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${currentTheme.highlight} bg-purple-200/50`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className={currentTheme.secondaryText}>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${currentTheme.ctaBg} py-24 px-4 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-24 translate-y-16"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Retail Business?
          </motion.h2>
          <motion.p
            className="text-white/90 text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of retailers enhancing their operations with our innovative platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/SignUp">
              <button className={`${currentTheme.button} px-8 py-3 rounded-full font-medium transition-all duration-300 ${currentTheme.glow}`}>
                Start Your Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Revised Footer Section */}
      <footer className={`${currentTheme.footerBg} ${currentTheme.footerText} py-12 px-4`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="RetailPro" className="w-10 h-10 rounded-full mr-3" />
                <h3 className="text-xl font-bold text-white">RetailPro</h3>
              </div>
              <p className="text-sm">Simplifying retail management since 2025 with innovative solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/AboutPage" className={`hover:${currentTheme.footerAccent} transition-colors ${currentTheme.footerAccent}`}>About</Link></li>
                <li><Link to="/ContactUs" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-sm">Email: <a href="mailto:support@retailpro.com" className={`hover:${currentTheme.footerAccent} transition-colors`}>support@retailpro.com</a></p>
              <p className="text-sm">Phone: <a href="tel:+18005551234" className={`hover:${currentTheme.footerAccent} transition-colors`}>+1 (800) 555-1234</a></p>
              <div className="flex space-x-4 mt-4">
                <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </motion.a>
                <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </motion.a>
                <motion.a href="#" className="hover:text-white transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0 3.204.012 3.584.07 4.85.062 1.366.326 2.633 1.301 3.608 1.301.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-1.301.975-1.24 2.242-1.301 3.608-.058 1.266-.07 1.646-.07 4.85 0-3.204zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} RetailPro · <span className={currentTheme.footerAccent}>Built for the future of retail</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;