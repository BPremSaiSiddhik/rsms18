// // // // // // // import React from "react";
// // // // // // // // import logo from './logo.jpg';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import ss1 from "./images/ss1.png";
// // // // // // // import ss2 from "./images/ss2.jpg";
// // // // // // // import ss3 from "./images/ss3.jpg";
// // // // // // // import { FaCheck } from "react-icons/fa";  // Importing the check icon

// // // // // // // const ContactUs = () => {
// // // // // // //   return (
// // // // // // //     <div className="text-center bg-white text-[#333] font-poppins">
// // // // // // //       {/* Header Section */}
// // // // // // //       {/* <header className="flex justify-between items-center p-4 bg-white shadow-md">
// // // // // // //         <div className="flex items-center space-x-8">
// // // // // // //           <div className="w-12 h-12">
// // // // // // //             <Link to="/AboutPage">
// // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //           <nav className="flex space-x-6">
// // // // // // //             <Link to="/" className="text-[#333] hover:text-gray-600">Home</Link>
// // // // // // //             <Link to="/AboutPage" className="text-[#333] hover:text-gray-600">About</Link>
// // // // // // //             <Link className="text-blue-500">Contact</Link>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //         <div className="flex space-x-4">
// // // // // // //           <Link to="/SignUp">
// // // // // // //             <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">SignUp</button>
// // // // // // //           </Link>
// // // // // // //           <Link to="/LoginPage2">
// // // // // // //             <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">Login</button>
// // // // // // //           </Link>
// // // // // // //           <Link to="/reviews">
// // // // // // //             <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all">Leave a Review</button>
// // // // // // //           </Link>
// // // // // // //         </div>
// // // // // // //       </header> */}

// // // // // // //       {/* Main Content Section */}
// // // // // // //       <div className="bg-gradient-to-r from-[#ff6a00] to-[#ff1744] py-16 px-4">
// // // // // // //         <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
// // // // // // //           <h1 className="text-4xl font-bold text-[#420000] mb-6">GET IN TOUCH</h1>
// // // // // // //           <p className="text-lg text-[#444] mb-6 leading-relaxed">
// // // // // // //             We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
// // // // // // //           </p>

// // // // // // //           {/* Contact Information Section */}
// // // // // // //           <section className="mt-10">
// // // // // // //             <h2 className="text-3xl font-semibold text-[#420000] mb-6">Contact Information</h2>
// // // // // // //             <div className="text-left space-y-4">
// // // // // // //               <p className="text-lg"><strong>Email:</strong> <a href="mailto:support@rsms.com" className="text-[#F8A600] font-semibold">support@rsms.com</a></p>
// // // // // // //               <p className="text-lg"><strong>Phone:</strong> +1 234 567 908</p>
// // // // // // //               <p className="text-lg"><strong>Address:</strong> 123 Retail Lane, Business City, India</p>
// // // // // // //             </div>
// // // // // // //           </section>

// // // // // // //           {/* Why Contact Us Section */}
// // // // // // //           <section className="mt-10 bg-[#f1f5f8] p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
// // // // // // //             <h2 className="text-3xl font-bold text-[#2f3d4a] mb-6">Why Contact Us?</h2>
// // // // // // //             <p className="text-lg text-[#555] mb-8 leading-relaxed">
// // // // // // //               We are here to help with product inquiries, technical support, and much more. Get in touch for:
// // // // // // //             </p>
// // // // // // //             <div className="space-y-6">
// // // // // // //               <div className="flex items-center space-x-4">
// // // // // // //                 <span className="text-3xl">🔍</span>
// // // // // // //                 <span className="text-lg"><strong>Product Inquiries:</strong> Want to learn more about our products?</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-center space-x-4">
// // // // // // //                 <span className="text-3xl">⚙️</span>
// // // // // // //                 <span className="text-lg"><strong>Technical Support:</strong> Facing any issues? We're here to assist.</span>
// // // // // // //               </div>
// // // // // // //               <div className="flex items-center space-x-4">
// // // // // // //                 <span className="text-3xl">💬</span>
// // // // // // //                 <span className="text-lg"><strong>General Feedback:</strong> We value your opinion!</span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </section>

// // // // // // //           {/* Contact Form Section */}
// // // // // // //           <p className="text-xl font-semibold text-[#333] mt-10">
// // // // // // //             Or <span className="font-bold text-[#F8A600]">leave us a message</span> using the contact form below:
// // // // // // //           </p>
// // // // // // //           <form className="mt-6 max-w-2xl mx-auto text-left">
// // // // // // //             <div className="mb-6">
// // // // // // //               <label htmlFor="name" className="block text-lg font-semibold text-[#333] mb-2">Name:</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 id="name"
// // // // // // //                 name="name"
// // // // // // //                 placeholder="Enter your name"
// // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F8A600]"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="mb-6">
// // // // // // //               <label htmlFor="email" className="block text-lg font-semibold text-[#333] mb-2">Email:</label>
// // // // // // //               <input
// // // // // // //                 type="email"
// // // // // // //                 id="email"
// // // // // // //                 name="email"
// // // // // // //                 placeholder="Enter your email"
// // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F8A600]"
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="mb-6">
// // // // // // //               <label htmlFor="message" className="block text-lg font-semibold text-[#333] mb-2">Message:</label>
// // // // // // //               <textarea
// // // // // // //                 id="message"
// // // // // // //                 name="message"
// // // // // // //                 placeholder="Your message here"
// // // // // // //                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F8A600] h-40 resize-none"
// // // // // // //               ></textarea>
// // // // // // //             </div>
// // // // // // //             <button
// // // // // // //               type="submit"
// // // // // // //               className="w-full max-w-[220px] mx-auto bg-[#F8A600] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FF7A00] transition-all"
// // // // // // //             >
// // // // // // //               Submit
// // // // // // //             </button>
// // // // // // //           </form>

// // // // // // //           {/* Support Team Section */}
// // // // // // //           <section className="mt-10">
// // // // // // //             <h2 className="text-3xl font-bold text-[#420000] mb-6">Meet Our Support Team</h2>
// // // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
// // // // // // //                 <img src={ss1} alt="Support Staff 1" className="w-40 h-40 rounded-full border-4 border-[#F8A600] mx-auto" />
// // // // // // //                 <h3 className="text-2xl font-bold text-[#420000] mt-4">Jane Doe</h3>
// // // // // // //                 <p className="text-lg text-[#555]">Customer Support Specialist</p>
// // // // // // //                 <p className="text-lg"><strong>Email:</strong> <a href="mailto:jane.doe@rsms.com" className="text-[#F8A600]">jane.doe@rsms.com</a></p>
// // // // // // //                 <p className="text-lg"><strong>Phone:</strong> +1 234 567 111</p>
// // // // // // //               </div>
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
// // // // // // //                 <img src={ss2} alt="Support Staff 2" className="w-40 h-40 rounded-full border-4 border-[#F8A600] mx-auto" />
// // // // // // //                 <h3 className="text-2xl font-bold text-[#420000] mt-4">John Smith</h3>
// // // // // // //                 <p className="text-lg text-[#555]">Technical Support Lead</p>
// // // // // // //                 <p className="text-lg"><strong>Email:</strong> <a href="mailto:john.smith@rsms.com" className="text-[#F8A600]">john.smith@rsms.com</a></p>
// // // // // // //                 <p className="text-lg"><strong>Phone:</strong> +1 234 567 222</p>
// // // // // // //               </div>
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all">
// // // // // // //                 <img src={ss3} alt="Support Staff 3" className="w-40 h-40 rounded-full border-4 border-[#F8A600] mx-auto" />
// // // // // // //                 <h3 className="text-2xl font-bold text-[#420000] mt-4">Emma Johnson</h3>
// // // // // // //                 <p className="text-lg text-[#555]">Billing & Account Support</p>
// // // // // // //                 <p className="text-lg"><strong>Email:</strong> <a href="mailto:emma.johnson@rsms.com" className="text-[#F8A600]">emma.johnson@rsms.com</a></p>
// // // // // // //                 <p className="text-lg"><strong>Phone:</strong> +1 234 567 333</p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </section>

// // // // // // //           {/* FAQs Section */}
// // // // // // //           <section className="mt-10">
// // // // // // //             <h2 className="text-3xl font-bold text-[#420000] mb-6">Frequently Asked Questions</h2>
// // // // // // //             <div className="space-y-4">
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg">
// // // // // // //                 <h3 className="text-xl font-semibold text-[#420000]">How can I track my order?</h3>
// // // // // // //                 <p className="text-lg text-[#666] mt-2">
// // // // // // //                   After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order.
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg">
// // // // // // //                 <h3 className="text-xl font-semibold text-[#420000]">Can I change my order after it’s been placed?</h3>
// // // // // // //                 <p className="text-lg text-[#666] mt-2">
// // // // // // //                   We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes.
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //               <div className="bg-white p-6 rounded-lg shadow-lg">
// // // // // // //                 <h3 className="text-xl font-semibold text-[#420000]">How do I cancel my subscription?</h3>
// // // // // // //                 <p className="text-lg text-[#666] mt-2">
// // // // // // //                   You can cancel your subscription at any time through your account settings or by reaching out to our support team.
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </section>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default ContactUs;
// // // // // // import React, { useState } from "react";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import logo from "./logo.jpg";
// // // // // // import ss1 from "./images/ss1.png";
// // // // // // import ss2 from "./images/ss2.jpg";
// // // // // // import ss3 from "./images/ss3.jpg";
// // // // // // import { FaCheck, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// // // // // // const ContactUs = () => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     email: "",
// // // // // //     message: ""
// // // // // //   });

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
// // // // // //       {/* Header */}
// // // // // //       {/* <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-lg">
// // // // // //         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
// // // // // //           <div className="flex items-center space-x-8">
// // // // // //             <Link to="/AboutPage" className="transform hover:scale-105 transition-transform duration-200">
// // // // // //               <img src={logo} alt="Logo" className="w-12 h-12 rounded-lg" />
// // // // // //             </Link>
// // // // // //             <nav className="flex space-x-8">
// // // // // //               <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
// // // // // //               <Link to="/AboutPage" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</Link>
// // // // // //               <Link className="text-purple-600 font-medium">Contact</Link>
// // // // // //             </nav>
// // // // // //           </div>
// // // // // //           <div className="flex space-x-4">
// // // // // //             <Link to="/SignUp">
// // // // // //               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // // //                 Sign Up
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //             <Link to="/LoginPage2">
// // // // // //               <button className="bg-white text-purple-600 px-6 py-2 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
// // // // // //                 Login
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //             <Link to="/reviews">
// // // // // //               <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // // //                 Reviews
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </header> */}

// // // // // //       {/* Hero Section */}
// // // // // //       <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-20 px-4">
// // // // // //         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
// // // // // //           <div className="p-8">
// // // // // //             <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in-down">Get in Touch</h1>
// // // // // //             <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
// // // // // //               We're here to help! Reach out to us with any queries or concerns.
// // // // // //             </p>

// // // // // //             {/* Contact Info Cards */}
// // // // // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// // // // // //               <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
// // // // // //                 <FaEnvelope className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
// // // // // //                 <h3 className="text-lg font-semibold mb-2">Email Us</h3>
// // // // // //                 <a href="mailto:support@rsms.com" className="text-purple-600 hover:text-purple-700">support@rsms.com</a>
// // // // // //               </div>
// // // // // //               <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
// // // // // //                 <FaPhone className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
// // // // // //                 <h3 className="text-lg font-semibold mb-2">Call Us</h3>
// // // // // //                 <p>+1 234 567 908</p>
// // // // // //               </div>
// // // // // //               <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
// // // // // //                 <FaMapMarkerAlt className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
// // // // // //                 <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
// // // // // //                 <p>123 Retail Lane, Business City</p>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Contact Form */}
// // // // // //             <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
// // // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
// // // // // //               <form className="space-y-6">
// // // // // //                 <div className="group">
// // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
// // // // // //                     Name
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     id="name"
// // // // // //                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // // // // //                     placeholder="Your name"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div className="group">
// // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
// // // // // //                     Email
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="email"
// // // // // //                     id="email"
// // // // // //                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // // // // //                     placeholder="your@email.com"
// // // // // //                   />
// // // // // //                 </div>
// // // // // //                 <div className="group">
// // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
// // // // // //                     Message
// // // // // //                   </label>
// // // // // //                   <textarea
// // // // // //                     id="message"
// // // // // //                     rows={4}
// // // // // //                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
// // // // // //                     placeholder="Your message here..."
// // // // // //                   ></textarea>
// // // // // //                 </div>
// // // // // //                 <button
// // // // // //                   type="submit"
// // // // // //                   className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md"
// // // // // //                 >
// // // // // //                   Send Message
// // // // // //                 </button>
// // // // // //               </form>
// // // // // //             </div>

// // // // // //             {/* Team Section */}
// // // // // //             <section className="mt-16">
// // // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Support Team</h2>
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // // //                 {[
// // // // // //                   { img: ss1, name: "Jane Doe", role: "Customer Support", email: "jane.doe@rsms.com" },
// // // // // //                   { img: ss2, name: "John Smith", role: "Technical Support", email: "john.smith@rsms.com" },
// // // // // //                   { img: ss3, name: "Emma Johnson", role: "Account Support", email: "emma.johnson@rsms.com" }
// // // // // //                 ].map((member, index) => (
// // // // // //                   <div key={index} className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// // // // // //                     <div className="relative mb-6">
// // // // // //                       <img
// // // // // //                         src={member.img}
// // // // // //                         alt={member.name}
// // // // // //                         className="w-32 h-32 rounded-full mx-auto border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300"
// // // // // //                       />
// // // // // //                       <div className="absolute inset-0 bg-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// // // // // //                     </div>
// // // // // //                     <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
// // // // // //                     <p className="text-purple-600 mb-4">{member.role}</p>
// // // // // //                     <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
// // // // // //                       {member.email}
// // // // // //                     </a>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </section>

// // // // // //             {/* FAQs Section */}
// // // // // //             <section className="mt-16">
// // // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
// // // // // //               <div className="space-y-6">
// // // // // //                 {[
// // // // // //                   {
// // // // // //                     q: "How can I track my order?",
// // // // // //                     a: "After placing an order, you'll receive a tracking number via email. Use this to monitor your order status on our tracking page."
// // // // // //                   },
// // // // // //                   {
// // // // // //                     q: "What are your support hours?",
// // // // // //                     a: "Our support team is available 24/7 to assist you with any queries or concerns you may have."
// // // // // //                   },
// // // // // //                   {
// // // // // //                     q: "How do I request a refund?",
// // // // // //                     a: "You can request a refund through your account dashboard or by contacting our support team directly."
// // // // // //                   }
// // // // // //                 ].map((faq, index) => (
// // // // // //                   <div
// // // // // //                     key={index}
// // // // // //                     className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
// // // // // //                   >
// // // // // //                     <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-200">
// // // // // //                       {faq.q}
// // // // // //                     </h3>
// // // // // //                     <p className="text-gray-600">{faq.a}</p>
// // // // // //                   </div>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </section>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ContactUs;
// // // // // import React, { useState } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import logo from "./logo.jpg";
// // // // // import ss1 from "./images/ss1.png";
// // // // // import ss2 from "./images/ss2.jpg";
// // // // // import ss3 from "./images/ss3.jpg";
// // // // // import { FaCheck, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// // // // // const ContactUs = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     message: ""
// // // // //   });

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 font-sans">
// // // // //       {/* Header */}
// // // // //       {/* <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-lg">
// // // // //         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
// // // // //           <div className="flex items-center space-x-8">
// // // // //             <Link to="/AboutPage" className="transform hover:scale-105 transition-transform duration-200">
// // // // //               <img src={logo} alt="Logo" className="w-12 h-12 rounded-lg" />
// // // // //             </Link>
// // // // //             <nav className="flex space-x-8">
// // // // //               <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Home</Link>
// // // // //               <Link to="/AboutPage" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</Link>
// // // // //               <Link className="text-purple-600 font-medium">Contact</Link>
// // // // //             </nav>
// // // // //           </div>
// // // // //           <div className="flex space-x-4">
// // // // //             <Link to="/SignUp">
// // // // //               <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // //                 Sign Up
// // // // //               </button>
// // // // //             </Link>
// // // // //             <Link to="/LoginPage2">
// // // // //               <button className="bg-white text-purple-600 px-6 py-2 rounded-lg border-2 border-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200">
// // // // //                 Login
// // // // //               </button>
// // // // //             </Link>
// // // // //             <Link to="/reviews">
// // // // //               <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-md">
// // // // //                 Reviews
// // // // //               </button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header> */}

// // // // //       {/* Main Content */}
// // // // //       <div className="bg-gradient-to-r from-purple-600 to-blue-500 py-16 px-4">
// // // // //         <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
// // // // //           <div className="p-8">
// // // // //             <h1 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in-down">GET IN TOUCH</h1>
// // // // //             <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
// // // // //               We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
// // // // //             </p>

// // // // //             {/* Contact Information */}
// // // // //             <section className="mt-10">
// // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
// // // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // // //                 <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
// // // // //                   <FaEnvelope className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
// // // // //                   <h3 className="text-lg font-semibold mb-2">Email</h3>
// // // // //                   <a href="mailto:support@rsms.com" className="text-purple-600 hover:text-purple-700">support@rsms.com</a>
// // // // //                 </div>
// // // // //                 <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
// // // // //                   <FaPhone className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
// // // // //                   <h3 className="text-lg font-semibold mb-2">Phone</h3>
// // // // //                   <p>+1 234 567 908</p>
// // // // //                 </div>
// // // // //                 <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
// // // // //                   <FaMapMarkerAlt className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
// // // // //                   <h3 className="text-lg font-semibold mb-2">Address</h3>
// // // // //                   <p>123 Retail Lane, Business City, India</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </section>

// // // // //             {/* Why Contact Us Section */}
// // // // //             <section className="mt-10">
// // // // //               <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
// // // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Contact Us?</h2>
// // // // //                 <p className="text-lg text-gray-600 mb-8">
// // // // //                   We are here to help with product inquiries, technical support, and much more. Get in touch for:
// // // // //                 </p>
// // // // //                 <div className="space-y-6">
// // // // //                   <div className="flex items-center space-x-4 group">
// // // // //                     <span className="text-3xl group-hover:scale-110 transition-transform duration-200">🔍</span>
// // // // //                     <span className="text-lg"><strong>Product Inquiries:</strong> Want to learn more about our products?</span>
// // // // //                   </div>
// // // // //                   <div className="flex items-center space-x-4 group">
// // // // //                     <span className="text-3xl group-hover:scale-110 transition-transform duration-200">⚙️</span>
// // // // //                     <span className="text-lg"><strong>Technical Support:</strong> Facing any issues? We're here to assist.</span>
// // // // //                   </div>
// // // // //                   <div className="flex items-center space-x-4 group">
// // // // //                     <span className="text-3xl group-hover:scale-110 transition-transform duration-200">💬</span>
// // // // //                     <span className="text-lg"><strong>General Feedback:</strong> We value your opinion!</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </section>

// // // // //             {/* Contact Form */}
// // // // //             <section className="mt-10">
// // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-6">Leave us a message</h2>
// // // // //               <form className="max-w-2xl mx-auto space-y-6">
// // // // //                 <div className="group">
// // // // //                   <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
// // // // //                     Name:
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     id="name"
// // // // //                     placeholder="Enter your name"
// // // // //                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="group">
// // // // //                   <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="email">
// // // // //                     Email:
// // // // //                   </label>
// // // // //                   <input
// // // // //                     type="email"
// // // // //                     id="email"
// // // // //                     placeholder="Enter your email"
// // // // //                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="group">
// // // // //                   <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="message">
// // // // //                     Message:
// // // // //                   </label>
// // // // //                   <textarea
// // // // //                     id="message"
// // // // //                     placeholder="Your message here"
// // // // //                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-40 resize-none"
// // // // //                   ></textarea>
// // // // //                 </div>
// // // // //                 <button
// // // // //                   type="submit"
// // // // //                   className="w-full max-w-[220px] mx-auto bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md"
// // // // //                 >
// // // // //                   Submit
// // // // //                 </button>
// // // // //               </form>
// // // // //             </section>

// // // // //             {/* Support Team Section */}
// // // // //             <section className="mt-16">
// // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Support Team</h2>
// // // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //                 <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// // // // //                   <div className="relative mb-6">
// // // // //                     <img src={ss1} alt="Support Staff 1" className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300" />
// // // // //                   </div>
// // // // //                   <h3 className="text-2xl font-bold text-gray-800 mb-2">Jane Doe</h3>
// // // // //                   <p className="text-lg text-purple-600 mb-2">Customer Support Specialist</p>
// // // // //                   <p className="text-lg"><strong>Email:</strong> <a href="mailto:jane.doe@rsms.com" className="text-purple-600 hover:text-purple-700">jane.doe@rsms.com</a></p>
// // // // //                   <p className="text-lg"><strong>Phone:</strong> +1 234 567 111</p>
// // // // //                 </div>
// // // // //                 <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// // // // //                   <div className="relative mb-6">
// // // // //                     <img src={ss2} alt="Support Staff 2" className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300" />
// // // // //                   </div>
// // // // //                   <h3 className="text-2xl font-bold text-gray-800 mb-2">John Smith</h3>
// // // // //                   <p className="text-lg text-purple-600 mb-2">Technical Support Lead</p>
// // // // //                   <p className="text-lg"><strong>Email:</strong> <a href="mailto:john.smith@rsms.com" className="text-purple-600 hover:text-purple-700">john.smith@rsms.com</a></p>
// // // // //                   <p className="text-lg"><strong>Phone:</strong> +1 234 567 222</p>
// // // // //                 </div>
// // // // //                 <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
// // // // //                   <div className="relative mb-6">
// // // // //                     <img src={ss3} alt="Support Staff 3" className="w-40 h-40 rounded-full mx-auto border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300" />
// // // // //                   </div>
// // // // //                   <h3 className="text-2xl font-bold text-gray-800 mb-2">Emma Johnson</h3>
// // // // //                   <p className="text-lg text-purple-600 mb-2">Billing & Account Support</p>
// // // // //                   <p className="text-lg"><strong>Email:</strong> <a href="mailto:emma.johnson@rsms.com" className="text-purple-600 hover:text-purple-700">emma.johnson@rsms.com</a></p>
// // // // //                   <p className="text-lg"><strong>Phone:</strong> +1 234 567 333</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </section>

// // // // //             {/* FAQs Section */}
// // // // //             <section className="mt-16">
// // // // //               <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
// // // // //               <div className="space-y-6">
// // // // //                 <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
// // // // //                   <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
// // // // //                     How can I track my order?
// // // // //                   </h3>
// // // // //                   <p className="text-lg text-gray-600 mt-2">
// // // // //                     After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order.
// // // // //                   </p>
// // // // //                 </div>
// // // // //                 <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
// // // // //                   <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
// // // // //                     Can I change my order after it's been placed?
// // // // //                   </h3>
// // // // //                   <p className="text-lg text-gray-600 mt-2">
// // // // //                     We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes.
// // // // //                   </p>
// // // // //                 </div>
// // // // //                 <div className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
// // // // //                   <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
// // // // //                     How do I cancel my subscription?
// // // // //                   </h3>
// // // // //                   <p className="text-lg text-gray-600 mt-2">
// // // // //                     You can cancel your subscription at any time through your account settings or by reaching out to our support team.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </section>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ContactUs;

// // // // import React, { useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import logo from "./logo.jpg";
// // // // import ss1 from "./images/ss1.png";
// // // // import ss2 from "./images/ss2.jpg";
// // // // import ss3 from "./images/ss3.jpg";
// // // // import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaStar, FaQuestionCircle } from "react-icons/fa";

// // // // const ContactUs = () => {
// // // //   const [activeTab, setActiveTab] = useState('contact');
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     message: ""
// // // //   });

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
// // // //       {/* Animated Header */}
// // // //       {/* <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
// // // //         <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
// // // //           <div className="flex items-center space-x-8">
// // // //             <Link to="/AboutPage" className="group">
// // // //               <div className="relative w-12 h-12 overflow-hidden rounded-xl">
// // // //                 <img src={logo} alt="Logo" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" />
// // // //                 <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
// // // //               </div>
// // // //             </Link>
// // // //             <nav className="hidden md:flex space-x-8">
// // // //               {['Home', 'About', 'Contact'].map((item) => (
// // // //                 <Link
// // // //                   key={item}
// // // //                   to={item === 'Home' ? '/' : `/${item}Page`}
// // // //                   className={`relative px-2 py-1 ${
// // // //                     item === 'Contact' ? 'text-purple-600' : 'text-gray-600'
// // // //                   } hover:text-purple-600 transition-colors duration-200`}
// // // //                 >
// // // //                   {item}
// // // //                   {item === 'Contact' && (
// // // //                     <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-100 transition-transform duration-300"></span>
// // // //                   )}
// // // //                 </Link>
// // // //               ))}
// // // //             </nav>
// // // //           </div>
// // // //           <div className="flex space-x-4">
// // // //             {[
// // // //               { text: 'Sign Up', bg: 'bg-purple-600', hover: 'hover:bg-purple-700' },
// // // //               { text: 'Login', bg: 'bg-white', hover: 'hover:bg-purple-50', border: true },
// // // //               { text: 'Reviews', bg: 'bg-gray-800', hover: 'hover:bg-gray-900' }
// // // //             ].map((btn, index) => (
// // // //               <button
// // // //                 key={index}
// // // //                 className={`
// // // //                   ${btn.bg} 
// // // //                   ${btn.hover} 
// // // //                   ${btn.border ? 'border-2 border-purple-600 text-purple-600' : 'text-white'} 
// // // //                   px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-md
// // // //                   flex items-center space-x-2
// // // //                 `}
// // // //               >
// // // //                 <span>{btn.text}</span>
// // // //                 <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </header> */}

// // // //       {/* Hero Section with Animated Background */}
// // // //       <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-24">
// // // //         <div className="absolute inset-0 overflow-hidden">
// // // //           <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10"></div>
// // // //         </div>
        
// // // //         {/* Main Content Container */}
// // // //         <div className="relative max-w-6xl mx-auto px-4">
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
// // // //             {/* Tabs Navigation */}
// // // //             <div className="flex border-b border-gray-200">
// // // //               {[
// // // //                 { id: 'contact', label: 'Contact Us', icon: FaEnvelope },
// // // //                 { id: 'team', label: 'Our Team', icon: FaStar },
// // // //                 { id: 'faq', label: 'FAQs', icon: FaQuestionCircle }
// // // //               ].map((tab) => (
// // // //                 <button
// // // //                   key={tab.id}
// // // //                   onClick={() => setActiveTab(tab.id)}
// // // //                   className={`
// // // //                     flex-1 py-4 px-6 flex items-center justify-center space-x-2
// // // //                     ${activeTab === tab.id ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:bg-gray-50'}
// // // //                     transition-all duration-200
// // // //                   `}
// // // //                 >
// // // //                   <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'}`} />
// // // //                   <span className="font-medium">{tab.label}</span>
// // // //                 </button>
// // // //               ))}
// // // //             </div>

// // // //             <div className="p-8">
// // // //               {/* Contact Information Cards */}
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// // // //                 {[
// // // //                   { icon: FaEnvelope, title: 'Email Us', content: 'support@rsms.com', color: 'from-purple-500 to-pink-500' },
// // // //                   { icon: FaPhone, title: 'Call Us', content: '+1 234 567 908', color: 'from-blue-500 to-cyan-500' },
// // // //                   { icon: FaMapMarkerAlt, title: 'Visit Us', content: '123 Retail Lane, Business City', color: 'from-green-500 to-emerald-500' }
// // // //                 ].map((item, index) => (
// // // //                   <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden">
// // // //                     <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
// // // //                     <div className="relative p-6">
// // // //                       <div className="flex items-center space-x-4">
// // // //                         <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white`}>
// // // //                           <item.icon className="w-6 h-6" />
// // // //                         </div>
// // // //                         <div>
// // // //                           <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
// // // //                           <p className="text-gray-600">{item.content}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               {/* Contact Form with Enhanced Design */}
// // // //               <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
// // // //                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
// // // //                 <div className="relative">
// // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
// // // //                   <form className="space-y-6">
// // // //                     {[
// // // //                       { label: 'Name', type: 'text', placeholder: 'Enter your name' },
// // // //                       { label: 'Email', type: 'email', placeholder: 'Enter your email' }
// // // //                     ].map((field, index) => (
// // // //                       <div key={index} className="group">
// // // //                         <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                           {field.label}
// // // //                         </label>
// // // //                         <input
// // // //                           type={field.type}
// // // //                           placeholder={field.placeholder}
// // // //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // // //                         />
// // // //                       </div>
// // // //                     ))}
// // // //                     <div className="group">
// // // //                       <label className="block text-sm font-medium text-gray-700 mb-2">
// // // //                         Message
// // // //                       </label>
// // // //                       <textarea
// // // //                         rows={4}
// // // //                         placeholder="Your message here..."
// // // //                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
// // // //                       ></textarea>
// // // //                     </div>
// // // //                     <button
// // // //                       type="submit"
// // // //                       className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
// // // //                     >
// // // //                       <span>Send Message</span>
// // // //                       <FaArrowRight className="w-4 h-4" />
// // // //                     </button>
// // // //                   </form>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Team Section with Enhanced Cards */}
// // // //               <section className="mt-16">
// // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Support Team</h2>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //                   {[
// // // //                     { img: ss1, name: 'Jane Doe', role: 'Customer Support Specialist', email: 'jane.doe@rsms.com', phone: '+1 234 567 111' },
// // // //                     { img: ss2, name: 'John Smith', role: 'Technical Support Lead', email: 'john.smith@rsms.com', phone: '+1 234 567 222' },
// // // //                     { img: ss3, name: 'Emma Johnson', role: 'Billing & Account Support', email: 'emma.johnson@rsms.com', phone: '+1 234 567 333' }
// // // //                   ].map((member, index) => (
// // // //                     <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden">
// // // //                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // //                       <div className="p-6">
// // // //                         <div className="relative w-32 h-32 mx-auto mb-6">
// // // //                           <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// // // //                           <img
// // // //                             src={member.img}
// // // //                             alt={member.name}
// // // //                             className="w-full h-full object-cover rounded-full border-4 border-purple-200 group-hover:border-purple-300 transition-colors duration-300"
// // // //                           />
// // // //                         </div>
// // // //                         <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
// // // //                           {member.name}
// // // //                         </h3>
// // // //                         <p className="text-purple-600 mb-4 font-medium">{member.role}</p>
// // // //                         <div className="space-y-2 text-gray-600">
// // // //                           <p><strong>Email:</strong> {member.email}</p>
// // // //                           <p><strong>Phone:</strong> {member.phone}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </section>

// // // //               {/* Enhanced FAQ Section */}
// // // //               <section className="mt-16">
// // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
// // // //                 <div className="space-y-6">
// // // //                   {[
// // // //                     {
// // // //                       q: "How can I track my order?",
// // // //                       a: "After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order."
// // // //                     },
// // // //                     {
// // // //                       q: "Can I change my order after it's been placed?",
// // // //                       a: "We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes."
// // // //                     },
// // // //                     {
// // // //                       q: "How do I cancel my subscription?",
// // // //                       a: "You can cancel your subscription at any time through your account settings or by reaching out to our support team."
// // // //                     }
// // // //                   ].map((faq, index) => (
// // // //                     <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
// // // //                       <div className="p-6">
// // // //                         <div className="flex items-start space-x-4">
// // // //                           <div className="flex-shrink-0">
// // // //                             <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
// // // //                               <FaQuestionCircle className="w-4 h-4 text-purple-600" />
// // // //                             </div>
// // // //                           </div>
// // // //                           <div>
// // // //                             <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
// // // //                               {faq.q}
// // // //                             </h3>
// // // //                             <p className="mt-2 text-gray-600">{faq.a}</p>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </section>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ContactUs;

// // // // import React, { useState } from "react";
// // // // import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaStar, FaQuestionCircle } from "react-icons/fa";
// // // // import {Link} from "react-router-dom";
// // // // import logo from './images/logo.jpg';

// // // // const ContactUs = () => {
// // // //   const [activeTab, setActiveTab] = useState('contact');
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     message: ""
// // // //   });

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
// // // //       {/* Hero Section with Animated Background */}
// // // //       <header className="flex justify-between items-center p-3 bg-[#0d1122]">
// // // //       {/* Left Section */}
// // // //       <div className="flex items-center gap-5">
// // // //         {/* Logo */}
// // // //         <div className="w-12 h-12">
// // // //           <Link to="/AboutPage">
// // // //             <img src={logo} alt="Logo" className="w-full h-full" />
// // // //           </Link>
// // // //         </div>
// // // //         {/* Navigation Links */}
// // // //         <nav className="flex gap-4">
// // // //           <Link to="/" className="text-blue-500 text-base no-underline hover:text-[#ff6347]">Home</Link>
// // // //           <Link to="/AboutPage" className="text-white text-base no-underline hover:text-[#ff6347]">About</Link>
// // // //           <Link to="/ContactUs" className="text-white text-base no-underline hover:text-[#ff6347]">Contact</Link>
// // // //         </nav>
// // // //       </div>
// // // //       {/* Buttons */}
// // // //       <div className="flex gap-3">
// // // //         <Link to="/SignUp">
// // // //           <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // //             SignUp
// // // //           </button>
// // // //         </Link>
// // // //         <Link to="/LoginPage">
// // // //           <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // //             Login
// // // //           </button>
// // // //         </Link>
// // // //         <Link to="/StoreReview">
// // // //           <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // // //             Leave a Review
// // // //           </button>
// // // //         </Link>
// // // //       </div>
// // // //     </header>
// // // //       <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-24">
// // // //         <div className="absolute inset-0 overflow-hidden">
// // // //           <div className="absolute inset-0 opacity-10"></div>
// // // //         </div>
        
// // // //         {/* Main Content Container */}
// // // //         <div className="relative max-w-6xl mx-auto px-4">
// // // //           <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
// // // //             {/* Tabs Navigation */}
// // // //             <div className="flex border-b border-gray-200">
// // // //               {[
// // // //                 { id: 'contact', label: 'Contact Us', icon: FaEnvelope },
// // // //                 { id: 'team', label: 'Our Team', icon: FaStar },
// // // //                 { id: 'faq', label: 'FAQs', icon: FaQuestionCircle }
// // // //               ].map((tab) => (
// // // //                 <button
// // // //                   key={tab.id}
// // // //                   onClick={() => setActiveTab(tab.id)}
// // // //                   className={`
// // // //                     flex-1 py-4 px-6 flex items-center justify-center space-x-2
// // // //                     ${activeTab === tab.id ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:bg-gray-50'}
// // // //                     transition-all duration-200
// // // //                   `}
// // // //                 >
// // // //                   <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'}`} />
// // // //                   <span className="font-medium">{tab.label}</span>
// // // //                 </button>
// // // //               ))}
// // // //             </div>

// // // //             <div className="p-8">
// // // //               <h1 className="text-5xl font-bold text-gray-800 mb-6">GET IN TOUCH</h1>
// // // //               <p className="text-xl text-gray-600 mb-8">
// // // //                 We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
// // // //               </p>

// // // //               {/* Contact Information Cards */}
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// // // //                 {[
// // // //                   { icon: FaEnvelope, title: 'Email Us', content: 'support@rsms.com', color: 'from-purple-500 to-pink-500' },
// // // //                   { icon: FaPhone, title: 'Call Us', content: '+1 234 567 908', color: 'from-blue-500 to-cyan-500' },
// // // //                   { icon: FaMapMarkerAlt, title: 'Visit Us', content: '123 Retail Lane, Business City', color: 'from-green-500 to-emerald-500' }
// // // //                 ].map((item, index) => (
// // // //                   <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
// // // //                     <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
// // // //                     <div className="relative p-6">
// // // //                       <div className="flex items-center space-x-4">
// // // //                         <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
// // // //                           <item.icon className="w-6 h-6" />
// // // //                         </div>
// // // //                         <div>
// // // //                           <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
// // // //                           <p className="text-gray-600">{item.content}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               {/* Why Contact Us Section */}
// // // //               <section className="mt-10">
// // // //                 <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
// // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Contact Us?</h2>
// // // //                   <p className="text-lg text-gray-600 mb-8">
// // // //                     We are here to help with product inquiries, technical support, and much more. Get in touch for:
// // // //                   </p>
// // // //                   <div className="space-y-6">
// // // //                     {[
// // // //                       { emoji: '🔍', title: 'Product Inquiries', desc: 'Want to learn more about our products?' },
// // // //                       { emoji: '⚙️', title: 'Technical Support', desc: 'Facing any issues? We\'re here to assist.' },
// // // //                       { emoji: '💬', title: 'General Feedback', desc: 'We value your opinion!' }
// // // //                     ].map((item, index) => (
// // // //                       <div key={index} className="flex items-center space-x-4 group">
// // // //                         <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{item.emoji}</span>
// // // //                         <span className="text-lg"><strong>{item.title}:</strong> {item.desc}</span>
// // // //                       </div>
// // // //                     ))}
// // // //                   </div>
// // // //                 </div>
// // // //               </section>

// // // //               {/* Contact Form */}
// // // //               <div className="mt-10 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
// // // //                 <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
// // // //                 <div className="relative">
// // // //                   <h2 className="text-3xl font-bold text-gray-800 mb-6">Leave us a message</h2>
// // // //                   <form className="space-y-6">
// // // //                     {[
// // // //                       { label: 'Name', type: 'text', placeholder: 'Enter your name' },
// // // //                       { label: 'Email', type: 'email', placeholder: 'Enter your email' }
// // // //                     ].map((field, index) => (
// // // //                       <div key={index} className="group">
// // // //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// // // //                           {field.label}:
// // // //                         </label>
// // // //                         <input
// // // //                           type={field.type}
// // // //                           placeholder={field.placeholder}
// // // //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // // //                         />
// // // //                       </div>
// // // //                     ))}
// // // //                     <div className="group">
// // // //                       <label className="block text-lg font-semibold text-gray-700 mb-2">
// // // //                         Message:
// // // //                       </label>
// // // //                       <textarea
// // // //                         placeholder="Your message here"
// // // //                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-40 resize-none"
// // // //                       ></textarea>
// // // //                     </div>
// // // //                     <button
// // // //                       type="submit"
// // // //                       className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
// // // //                     >
// // // //                       <span>Submit</span>
// // // //                       <FaArrowRight className="w-4 h-4" />
// // // //                     </button>
// // // //                   </form>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Support Team Section */}
// // // //               <section className="mt-16">
// // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Support Team</h2>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // //                   {[
// // // //                     { name: 'Jane Doe', role: 'Customer Support Specialist', email: 'jane.doe@rsms.com', phone: '+1 234 567 111' },
// // // //                     { name: 'John Smith', role: 'Technical Support Lead', email: 'john.smith@rsms.com', phone: '+1 234 567 222' },
// // // //                     { name: 'Emma Johnson', role: 'Billing & Account Support', email: 'emma.johnson@rsms.com', phone: '+1 234 567 333' }
// // // //                   ].map((member, index) => (
// // // //                     <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
// // // //                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // // //                       <div className="p-6">
// // // //                         <div className="relative w-40 h-40 mx-auto mb-6">
// // // //                           <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// // // //                           <img
// // // //                             src="/api/placeholder/160/160"
// // // //                             alt={member.name}
// // // //                             className="w-full h-full rounded-full border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300"
// // // //                           />
// // // //                         </div>
// // // //                         <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
// // // //                           {member.name}
// // // //                         </h3>
// // // //                         <p className="text-lg text-purple-600 mb-2">{member.role}</p>
// // // //                         <p className="text-lg"><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-purple-600 hover:text-purple-700">{member.email}</a></p>
// // // //                         <p className="text-lg"><strong>Phone:</strong> {member.phone}</p>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </section>

// // // //               {/* FAQs Section */}
// // // //               <section className="mt-16">
// // // //                 <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
// // // //                 <div className="space-y-6">
// // // //                   {[
// // // //                     {
// // // //                       q: "How can I track my order?",
// // // //                       a: "After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order."
// // // //                     },
// // // //                     {
// // // //                       q: "Can I change my order after it's been placed?",
// // // //                       a: "We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes."
// // // //                     },
// // // //                     {
// // // //                       q: "How do I cancel my subscription?",
// // // //                       a: "You can cancel your subscription at any time through your account settings or by reaching out to our support team."
// // // //                     }
// // // //                   ].map((faq, index) => (
// // // //                     <div key={index} className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
// // // //                       <div className="flex items-start space-x-4">
// // // //                         <div className="flex-shrink-0">
// // // //                           <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-200">
// // // //                             <FaQuestionCircle className="w-4 h-4 text-purple-600" />
// // // //                           </div>
// // // //                         </div>
// // // //                         <div>
// // // //                           <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
// // // //                             {faq.q}
// // // //                           </h3>
// // // //                           <p className="text-lg text-gray-600 mt-2">{faq.a}</p>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </section>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ContactUs;

// // // import React, { useState, useEffect } from "react";
// // // import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaStar, FaQuestionCircle } from "react-icons/fa";
// // // import { Link } from "react-router-dom";
// // // import logo from './images/logo.jpg';

// // // const ContactUs = () => {
// // //   const [activeTab, setActiveTab] = useState('contact');
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     message: ""
// // //   });
// // //   const [formSubmitted, setFormSubmitted] = useState(false);

// // //   // Handle form input changes
// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: value
// // //     });
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     // Form validation
// // //     if (!formData.name || !formData.email || !formData.message) {
// // //       alert("Please fill in all fields");
// // //       return;
// // //     }
// // //     // Simulate form submission
// // //     console.log("Form submitted:", formData);
// // //     setFormSubmitted(true);
// // //     // Reset form after submission
// // //     setTimeout(() => {
// // //       setFormData({ name: "", email: "", message: "" });
// // //       setFormSubmitted(false);
// // //     }, 3000);
// // //   };

// // //   // Scroll to section when tab changes
// // //   useEffect(() => {
// // //     const element = document.getElementById(activeTab + "-section");
// // //     if (element) {
// // //       element.scrollIntoView({ behavior: "smooth", block: "start" });
// // //     }
// // //   }, [activeTab]);

// // //   // Support team data
// // //   const teamMembers = [
// // //     { name: 'Jane Doe', role: 'Customer Support Specialist', email: 'jane.doe@rsms.com', phone: '+1 234 567 111' },
// // //     { name: 'John Smith', role: 'Technical Support Lead', email: 'john.smith@rsms.com', phone: '+1 234 567 222' },
// // //     { name: 'Emma Johnson', role: 'Billing & Account Support', email: 'emma.johnson@rsms.com', phone: '+1 234 567 333' }
// // //   ];

// // //   // FAQ data
// // //   const faqs = [
// // //     {
// // //       q: "How can I track my order?",
// // //       a: "After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order."
// // //     },
// // //     {
// // //       q: "Can I change my order after it's been placed?",
// // //       a: "We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes."
// // //     },
// // //     {
// // //       q: "How do I cancel my subscription?",
// // //       a: "You can cancel your subscription at any time through your account settings or by reaching out to our support team."
// // //     },
// // //     {
// // //       q: "What is your return policy?",
// // //       a: "We offer a 30-day return policy on most items. Please check the product description for specific return information."
// // //     },
// // //     {
// // //       q: "How can I update my account information?",
// // //       a: "You can update your account information by logging into your account and navigating to the 'Account Settings' section."
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
// // //       {/* Header */}
// // //       <header className="flex justify-between items-center p-3 bg-[#0d1122]">
// // //         {/* Left Section */}
// // //         <div className="flex items-center gap-5">
// // //           {/* Logo */}
// // //           <div className="w-12 h-12">
// // //             <Link to="/AboutPage">
// // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // //             </Link>
// // //           </div>
// // //           {/* Navigation Links */}
// // //           <nav className="flex gap-4">
// // //             <Link to="/" className="text-blue-500 text-base no-underline hover:text-[#ff6347]">Home</Link>
// // //             <Link to="/AboutPage" className="text-white text-base no-underline hover:text-[#ff6347]">About</Link>
// // //             <Link to="/ContactUs" className="text-white text-base no-underline hover:text-[#ff6347]">Contact</Link>
// // //           </nav>
// // //         </div>
// // //         {/* Buttons */}
// // //         <div className="flex gap-3">
// // //           <Link to="/SignUp">
// // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // //               SignUp
// // //             </button>
// // //           </Link>
// // //           <Link to="/LoginPage">
// // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // //               Login
// // //             </button>
// // //           </Link>
// // //           <Link to="/StoreReview">
// // //             <button className="bg-[#1c4b82] text-white px-4 py-2 rounded-md text-sm hover:bg-[#337ab7] transition-all">
// // //               Leave a Review
// // //             </button>
// // //           </Link>
// // //         </div>
// // //       </header>

// // //       <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-24">
// // //         <div className="absolute inset-0 overflow-hidden">
// // //           <div className="absolute inset-0 opacity-10"></div>
// // //         </div>
        
// // //         {/* Main Content Container */}
// // //         <div className="relative max-w-6xl mx-auto px-4">
// // //           <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
// // //             {/* Tabs Navigation */}
// // //             <div className="flex border-b border-gray-200">
// // //               {[
// // //                 { id: 'contact', label: 'Contact Us', icon: FaEnvelope },
// // //                 { id: 'team', label: 'Our Team', icon: FaStar },
// // //                 { id: 'faq', label: 'FAQs', icon: FaQuestionCircle }
// // //               ].map((tab) => (
// // //                 <button
// // //                   key={tab.id}
// // //                   onClick={() => setActiveTab(tab.id)}
// // //                   className={`
// // //                     flex-1 py-4 px-6 flex items-center justify-center space-x-2
// // //                     ${activeTab === tab.id ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:bg-gray-50'}
// // //                     transition-all duration-200
// // //                   `}
// // //                 >
// // //                   <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'}`} />
// // //                   <span className="font-medium">{tab.label}</span>
// // //                 </button>
// // //               ))}
// // //             </div>

// // //             <div className="p-8">
// // //               {/* Tab Content */}
// // //               <div className={`${activeTab === 'contact' ? 'block' : 'hidden'}`} id="contact-section">
// // //                 <h1 className="text-5xl font-bold text-gray-800 mb-6">GET IN TOUCH</h1>
// // //                 <p className="text-xl text-gray-600 mb-8">
// // //                   We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
// // //                 </p>

// // //                 {/* Contact Information Cards */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// // //                   {[
// // //                     { icon: FaEnvelope, title: 'Email Us', content: 'support@rsms.com', color: 'from-purple-500 to-pink-500' },
// // //                     { icon: FaPhone, title: 'Call Us', content: '+1 234 567 908', color: 'from-blue-500 to-cyan-500' },
// // //                     { icon: FaMapMarkerAlt, title: 'Visit Us', content: '123 Retail Lane, Business City', color: 'from-green-500 to-emerald-500' }
// // //                   ].map((item, index) => (
// // //                     <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
// // //                       <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
// // //                       <div className="relative p-6">
// // //                         <div className="flex items-center space-x-4">
// // //                           <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
// // //                             <item.icon className="w-6 h-6" />
// // //                           </div>
// // //                           <div>
// // //                             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
// // //                             <p className="text-gray-600">{item.content}</p>
// // //                           </div>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* Why Contact Us Section */}
// // //                 <section className="mt-10">
// // //                   <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
// // //                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Contact Us?</h2>
// // //                     <p className="text-lg text-gray-600 mb-8">
// // //                       We are here to help with product inquiries, technical support, and much more. Get in touch for:
// // //                     </p>
// // //                     <div className="space-y-6">
// // //                       {[
// // //                         { emoji: '🔍', title: 'Product Inquiries', desc: 'Want to learn more about our products?' },
// // //                         { emoji: '⚙️', title: 'Technical Support', desc: 'Facing any issues? We\'re here to assist.' },
// // //                         { emoji: '💬', title: 'General Feedback', desc: 'We value your opinion!' }
// // //                       ].map((item, index) => (
// // //                         <div key={index} className="flex items-center space-x-4 group">
// // //                           <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{item.emoji}</span>
// // //                           <span className="text-lg"><strong>{item.title}:</strong> {item.desc}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 </section>

// // //                 {/* Contact Form */}
// // //                 <div className="mt-10 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
// // //                   <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
// // //                   <div className="relative">
// // //                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Leave us a message</h2>
// // //                     {formSubmitted ? (
// // //                       <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6">
// // //                         <p className="font-bold">Thank you!</p>
// // //                         <p>Your message has been sent. We'll get back to you soon.</p>
// // //                       </div>
// // //                     ) : null}
// // //                     <form className="space-y-6" onSubmit={handleSubmit}>
// // //                       <div className="group">
// // //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// // //                           Name:
// // //                         </label>
// // //                         <input
// // //                           type="text"
// // //                           name="name"
// // //                           value={formData.name}
// // //                           onChange={handleInputChange}
// // //                           placeholder="Enter your name"
// // //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // //                           required
// // //                         />
// // //                       </div>
// // //                       <div className="group">
// // //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// // //                           Email:
// // //                         </label>
// // //                         <input
// // //                           type="email"
// // //                           name="email"
// // //                           value={formData.email}
// // //                           onChange={handleInputChange}
// // //                           placeholder="Enter your email"
// // //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// // //                           required
// // //                         />
// // //                       </div>
// // //                       <div className="group">
// // //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// // //                           Message:
// // //                         </label>
// // //                         <textarea
// // //                           name="message"
// // //                           value={formData.message}
// // //                           onChange={handleInputChange}
// // //                           placeholder="Your message here"
// // //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-40 resize-none"
// // //                           required
// // //                         ></textarea>
// // //                       </div>
// // //                       <button
// // //                         type="submit"
// // //                         className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
// // //                       >
// // //                         <span>Submit</span>
// // //                         <FaArrowRight className="w-4 h-4" />
// // //                       </button>
// // //                     </form>
// // //                   </div>
// // //                 </div>

// // //                 {/* Quick links to other tabs */}
// // //                 <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
// // //                   <button 
// // //                     onClick={() => setActiveTab('team')}
// // //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// // //                   >
// // //                     <FaStar className="text-purple-600" />
// // //                     <span>Meet Our Team</span>
// // //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// // //                   </button>
// // //                   <button 
// // //                     onClick={() => setActiveTab('faq')}
// // //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// // //                   >
// // //                     <FaQuestionCircle className="text-purple-600" />
// // //                     <span>View FAQs</span>
// // //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Team Tab Content */}
// // //               <div className={`${activeTab === 'team' ? 'block' : 'hidden'}`} id="team-section">
// // //                 <h1 className="text-5xl font-bold text-gray-800 mb-6">OUR SUPPORT TEAM</h1>
// // //                 <p className="text-xl text-gray-600 mb-8">
// // //                   Meet the dedicated professionals ready to assist you with any questions or concerns you may have.
// // //                 </p>

// // //                 {/* Team Members Grid */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// // //                   {teamMembers.map((member, index) => (
// // //                     <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
// // //                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// // //                       <div className="p-6">
// // //                         <div className="relative w-40 h-40 mx-auto mb-6">
// // //                           <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// // //                           <img
// // //                             src="/api/placeholder/160/160"
// // //                             alt={member.name}
// // //                             className="w-full h-full rounded-full border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300"
// // //                           />
// // //                         </div>
// // //                         <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200 text-center">
// // //                           {member.name}
// // //                         </h3>
// // //                         <p className="text-lg text-purple-600 mb-4 text-center">{member.role}</p>
// // //                         <div className="space-y-2 mt-6">
// // //                           <p className="flex items-center justify-center gap-2">
// // //                             <FaEnvelope className="text-purple-600" />
// // //                             <a href={`mailto:${member.email}`} className="text-purple-600 hover:text-purple-700">{member.email}</a>
// // //                           </p>
// // //                           <p className="flex items-center justify-center gap-2">
// // //                             <FaPhone className="text-purple-600" />
// // //                             <span>{member.phone}</span>
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* Team Values */}
// // //                 <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-12">
// // //                   <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Support Values</h2>
// // //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                     {[
// // //                       { title: "Customer First", desc: "We prioritize your needs and satisfaction above all else.", icon: "🌟" },
// // //                       { title: "Rapid Response", desc: "We aim to respond to all inquiries within 24 hours.", icon: "⚡" },
// // //                       { title: "Expert Solutions", desc: "Our team is trained to provide knowledgeable assistance.", icon: "🧠" }
// // //                     ].map((value, index) => (
// // //                       <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
// // //                         <div className="text-4xl mb-4">{value.icon}</div>
// // //                         <h3 className="text-xl font-bold text-purple-600 mb-2">{value.title}</h3>
// // //                         <p className="text-gray-700">{value.desc}</p>
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </div>

// // //                 {/* Quick links to other tabs */}
// // //                 <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
// // //                   <button 
// // //                     onClick={() => setActiveTab('contact')}
// // //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// // //                   >
// // //                     <FaEnvelope className="text-purple-600" />
// // //                     <span>Contact Us</span>
// // //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// // //                   </button>
// // //                   <button 
// // //                     onClick={() => setActiveTab('faq')}
// // //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// // //                   >
// // //                     <FaQuestionCircle className="text-purple-600" />
// // //                     <span>View FAQs</span>
// // //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* FAQ Tab Content */}
// // //               <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`} id="faq-section">
// // //                 <h1 className="text-5xl font-bold text-gray-800 mb-6">FREQUENTLY ASKED QUESTIONS</h1>
// // //                 <p className="text-xl text-gray-600 mb-8">
// // //                   Find answers to our most commonly asked questions. Can't find what you're looking for? Contact our support team.
// // //                 </p>

// // //                 {/* FAQ Accordion */}
// // //                 <div className="space-y-6 mb-12">
// // //                   {faqs.map((faq, index) => (
// // //                     <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
// // //                       <details className="group">
// // //                         <summary className="flex justify-between items-center p-6 cursor-pointer group-hover:bg-purple-50 transition-all">
// // //                           <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600">{faq.q}</h3>
// // //                           <span className="text-purple-600 group-open:rotate-180 transition-transform">
// // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// // //                             </svg>
// // //                           </span>
// // //                         </summary>
// // //                         <div className="p-6 bg-gray-50 border-t border-gray-100">
// // //                           <p className="text-lg text-gray-700">{faq.a}</p>
// // //                         </div>
// // //                       </details>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* FAQ Categories */}
// // //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// // //                   {[
// // //                     { title: "Shipping & Delivery", count: 8, icon: "🚚" },
// // //                     { title: "Returns & Refunds", count: 6, icon: "↩️" },
// // //                     { title: "Account & Ordering", count: 10, icon: "🛒" }
// // //                   ].map((category, index) => (
// // //                     <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
// // //                       <div className="text-4xl mb-4">{category.icon}</div>
// // //                       <h3 className="text-xl font-bold text-purple-600 mb-2">{category.title}</h3>
// // //                       <p className="text-gray-700">{category.count} questions</p>
// // //                       <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-colors">View All</button>
// // //                     </div>
// // //                   ))}
// // //                 </div>

// // //                 {/* Still Have Questions */}
// // //                 <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-12">
// // //                   <div className="max-w-3xl mx-auto text-center">
// // //                     <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
// // //                     <p className="text-xl mb-6">Our support team is ready to help you with any questions or concerns you may have.</p>
// // //                     <button 
// // //                       onClick={() => setActiveTab('contact')}
// // //                       className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
// // //                     >
// // //                       Contact Us Now
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 {/* Quick links to other tabs */}
// // //                 <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
// // //                   <button 
// // //                     onClick={() => setActiveTab('contact')}
// // //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// // //                   >
// // //                     <FaEnvelope className="text-purple-600" />
// // //                     <span>Contact Us</span>
// // //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// // //                   </button>
// // //                   <button 
// // //                     onClick={() => setActiveTab('team')}
// // //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// // //                   >
// // //                     <FaStar className="text-purple-600" />
// // //                     <span>Meet Our Team</span>
// // //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ContactUs;



// // import React, { useState, useEffect } from "react";
// // import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaStar, FaQuestionCircle, FaHeadset, FaComments, FaUserFriends } from "react-icons/fa";
// // import { Link } from "react-router-dom";
// // import logo from './images/logo.jpg';

// // const ContactUs = () => {
// //   const [activeTab, setActiveTab] = useState('contact');
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: ""
// //   });
// //   const [formSubmitted, setFormSubmitted] = useState(false);

// //   // Handle form input changes
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value
// //     });
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Form validation
// //     if (!formData.name || !formData.email || !formData.message) {
// //       alert("Please fill in all fields");
// //       return;
// //     }
// //     // Simulate form submission
// //     console.log("Form submitted:", formData);
// //     setFormSubmitted(true);
// //     // Reset form after submission
// //     setTimeout(() => {
// //       setFormData({ name: "", email: "", message: "" });
// //       setFormSubmitted(false);
// //     }, 3000);
// //   };

// //   // Scroll to section when tab changes
// //   useEffect(() => {
// //     const element = document.getElementById(activeTab + "-section");
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth", block: "start" });
// //     }
// //   }, [activeTab]);

// //   // Support team data
// //   const teamMembers = [
// //     { name: 'Jane Doe', role: 'Customer Support Specialist', email: 'jane.doe@rsms.com', phone: '+1 234 567 111' },
// //     { name: 'John Smith', role: 'Technical Support Lead', email: 'john.smith@rsms.com', phone: '+1 234 567 222' },
// //     { name: 'Emma Johnson', role: 'Billing & Account Support', email: 'emma.johnson@rsms.com', phone: '+1 234 567 333' }
// //   ];

// //   // FAQ data
// //   const faqs = [
// //     {
// //       q: "How can I track my order?",
// //       a: "After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order."
// //     },
// //     {
// //       q: "Can I change my order after it's been placed?",
// //       a: "We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes."
// //     },
// //     {
// //       q: "How do I cancel my subscription?",
// //       a: "You can cancel your subscription at any time through your account settings or by reaching out to our support team."
// //     },
// //     {
// //       q: "What is your return policy?",
// //       a: "We offer a 30-day return policy on most items. Please check the product description for specific return information."
// //     },
// //     {
// //       q: "How can I update my account information?",
// //       a: "You can update your account information by logging into your account and navigating to the 'Account Settings' section."
// //     }
// //   ];
// //   const Header = ({ logo }) => {
// //     return (
// //       <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md">
// //         <div className="flex items-center gap-5">
// //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// //             <Link to="/AboutPage">
// //               <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
// //             </Link>
// //           </div>
// //           <nav className="hidden md:flex gap-4">
// //             <Link to="/" className="text-blue-600 text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// //           </nav>
// //         </div>
// //         <div className="flex gap-3">
// //           <Link to="/SignUp">
// //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// //               Sign Up
// //             </button>
// //           </Link>
// //           <Link to="/LoginPage">
// //             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg">
// //               Login
// //             </button> 
// //           </Link>
// //         </div>
// //       </header>
// //     );
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-800 font-sans">
// //       {/* Header */}
// // <Header/>
// //       <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-24">
// //         {/* Enhanced background with decorative elements */}
// //         <div className="absolute inset-0 overflow-hidden">
// //           <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          
// //           {/* Floating decorative shapes */}
// //           <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5"></div>
// //           <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
// //           <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full opacity-5"></div>
// //           <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white rounded-full opacity-5"></div>
          
// //           {/* Animated wave effect */}
// //           <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-5 transform -skew-y-3"></div>
// //           <div className="absolute bottom-0 left-0 right-0 h-8 bg-white opacity-5 transform skew-y-3"></div>
// //         </div>
        
// //         {/* Headline and intro text in the background area */}
// //         <div className="relative mb-8 text-center text-white">
// //           <h1 className="text-4xl md:text-6xl font-bold mb-4">We're Here For You</h1>
// //           <p className="text-xl max-w-2xl mx-auto opacity-90">Our dedicated team is ready to assist you with any questions or concerns.</p>
// //           <div className="flex justify-center mt-6 space-x-6">
// //             <div className="flex items-center">
// //               <FaHeadset className="text-2xl mr-2 text-purple-300" />
// //               <span>24/7 Support</span>
// //             </div>
// //             <div className="flex items-center">
// //               <FaComments className="text-2xl mr-2 text-purple-300" />
// //               <span>Quick Response</span>
// //             </div>
// //             <div className="flex items-center">
// //               <FaUserFriends className="text-2xl mr-2 text-purple-300" />
// //               <span>Expert Team</span>
// //             </div>
// //           </div>
// //         </div>
        
// //         {/* Main Content Container */}
// //         <div className="relative max-w-6xl mx-auto px-4">
// //           <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
// //             {/* Tabs Navigation */}
// //             <div className="flex border-b border-gray-200">
// //               {[
// //                 { id: 'contact', label: 'Contact Us', icon: FaEnvelope },
// //                 { id: 'team', label: 'Our Team', icon: FaStar },
// //                 { id: 'faq', label: 'FAQs', icon: FaQuestionCircle }
// //               ].map((tab) => (
// //                 <button
// //                   key={tab.id}
// //                   onClick={() => setActiveTab(tab.id)}
// //                   className={`
// //                     flex-1 py-4 px-6 flex items-center justify-center space-x-2
// //                     ${activeTab === tab.id ? 'bg-purple-50 text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:bg-gray-50'}
// //                     transition-all duration-200
// //                   `}
// //                 >
// //                   <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-purple-600' : 'text-gray-400'}`} />
// //                   <span className="font-medium">{tab.label}</span>
// //                 </button>
// //               ))}
// //             </div>

// //             <div className="p-8">
// //               {/* Tab Content */}
// //               <div className={`${activeTab === 'contact' ? 'block' : 'hidden'}`} id="contact-section">
// //                 <h1 className="text-5xl font-bold text-gray-800 mb-6">GET IN TOUCH</h1>
// //                 <p className="text-xl text-gray-600 mb-8">
// //                   We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
// //                 </p>

// //                 {/* Contact Information Cards */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// //                   {[
// //                     { icon: FaEnvelope, title: 'Email Us', content: 'support@rsms.com', color: 'from-purple-500 to-pink-500' },
// //                     { icon: FaPhone, title: 'Call Us', content: '+1 234 567 908', color: 'from-blue-500 to-cyan-500' },
// //                     { icon: FaMapMarkerAlt, title: 'Visit Us', content: '123 Retail Lane, Business City', color: 'from-green-500 to-emerald-500' }
// //                   ].map((item, index) => (
// //                     <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
// //                       <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
// //                       <div className="relative p-6">
// //                         <div className="flex items-center space-x-4">
// //                           <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
// //                             <item.icon className="w-6 h-6" />
// //                           </div>
// //                           <div>
// //                             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
// //                             <p className="text-gray-600">{item.content}</p>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Why Contact Us Section */}
// //                 <section className="mt-10">
// //                   <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
// //                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Contact Us?</h2>
// //                     <p className="text-lg text-gray-600 mb-8">
// //                       We are here to help with product inquiries, technical support, and much more. Get in touch for:
// //                     </p>
// //                     <div className="space-y-6">
// //                       {[
// //                         { emoji: '🔍', title: 'Product Inquiries', desc: 'Want to learn more about our products?' },
// //                         { emoji: '⚙️', title: 'Technical Support', desc: 'Facing any issues? We\'re here to assist.' },
// //                         { emoji: '💬', title: 'General Feedback', desc: 'We value your opinion!' }
// //                       ].map((item, index) => (
// //                         <div key={index} className="flex items-center space-x-4 group">
// //                           <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{item.emoji}</span>
// //                           <span className="text-lg"><strong>{item.title}:</strong> {item.desc}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </section>

// //                 {/* Contact Form */}
// //                 <div className="mt-10 max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
// //                   <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
// //                   <div className="relative">
// //                     <h2 className="text-3xl font-bold text-gray-800 mb-6">Leave us a message</h2>
// //                     {formSubmitted ? (
// //                       <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6">
// //                         <p className="font-bold">Thank you!</p>
// //                         <p>Your message has been sent. We'll get back to you soon.</p>
// //                       </div>
// //                     ) : null}
// //                     <form className="space-y-6" onSubmit={handleSubmit}>
// //                       <div className="group">
// //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// //                           Name:
// //                         </label>
// //                         <input
// //                           type="text"
// //                           name="name"
// //                           value={formData.name}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter your name"
// //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// //                           required
// //                         />
// //                       </div>
// //                       <div className="group">
// //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// //                           Email:
// //                         </label>
// //                         <input
// //                           type="email"
// //                           name="email"
// //                           value={formData.email}
// //                           onChange={handleInputChange}
// //                           placeholder="Enter your email"
// //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
// //                           required
// //                         />
// //                       </div>
// //                       <div className="group">
// //                         <label className="block text-lg font-semibold text-gray-700 mb-2">
// //                           Message:
// //                         </label>
// //                         <textarea
// //                           name="message"
// //                           value={formData.message}
// //                           onChange={handleInputChange}
// //                           placeholder="Your message here"
// //                           className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-40 resize-none"
// //                           required
// //                         ></textarea>
// //                       </div>
// //                       <button
// //                         type="submit"
// //                         className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-md flex items-center justify-center space-x-2"
// //                       >
// //                         <span>Submit</span>
// //                         <FaArrowRight className="w-4 h-4" />
// //                       </button>
// //                     </form>
// //                   </div>
// //                 </div>

// //                 {/* Quick links to other tabs */}
// //                 <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
// //                   <button 
// //                     onClick={() => setActiveTab('team')}
// //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// //                   >
// //                     <FaStar className="text-purple-600" />
// //                     <span>Meet Our Team</span>
// //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// //                   </button>
// //                   <button 
// //                     onClick={() => setActiveTab('faq')}
// //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// //                   >
// //                     <FaQuestionCircle className="text-purple-600" />
// //                     <span>View FAQs</span>
// //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Team Tab Content */}
// //               <div className={`${activeTab === 'team' ? 'block' : 'hidden'}`} id="team-section">
// //                 <h1 className="text-5xl font-bold text-gray-800 mb-6">OUR SUPPORT TEAM</h1>
// //                 <p className="text-xl text-gray-600 mb-8">
// //                   Meet the dedicated professionals ready to assist you with any questions or concerns you may have.
// //                 </p>

// //                 {/* Team Members Grid */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
// //                   {teamMembers.map((member, index) => (
// //                     <div key={index} className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
// //                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
// //                       <div className="p-6">
// //                         <div className="relative w-40 h-40 mx-auto mb-6">
// //                           <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
// //                           <img
// //                             src="/api/placeholder/160/160"
// //                             alt={member.name}
// //                             className="w-full h-full rounded-full border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300"
// //                           />
// //                         </div>
// //                         <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200 text-center">
// //                           {member.name}
// //                         </h3>
// //                         <p className="text-lg text-purple-600 mb-4 text-center">{member.role}</p>
// //                         <div className="space-y-2 mt-6">
// //                           <p className="flex items-center justify-center gap-2">
// //                             <FaEnvelope className="text-purple-600" />
// //                             <a href={`mailto:${member.email}`} className="text-purple-600 hover:text-purple-700">{member.email}</a>
// //                           </p>
// //                           <p className="flex items-center justify-center gap-2">
// //                             <FaPhone className="text-purple-600" />
// //                             <span>{member.phone}</span>
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Team Values */}
// //                 <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-12">
// //                   <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Support Values</h2>
// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                     {[
// //                       { title: "Customer First", desc: "We prioritize your needs and satisfaction above all else.", icon: "🌟" },
// //                       { title: "Rapid Response", desc: "We aim to respond to all inquiries within 24 hours.", icon: "⚡" },
// //                       { title: "Expert Solutions", desc: "Our team is trained to provide knowledgeable assistance.", icon: "🧠" }
// //                     ].map((value, index) => (
// //                       <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
// //                         <div className="text-4xl mb-4">{value.icon}</div>
// //                         <h3 className="text-xl font-bold text-purple-600 mb-2">{value.title}</h3>
// //                         <p className="text-gray-700">{value.desc}</p>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>

// //                 {/* Quick links to other tabs */}
// //                 <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
// //                   <button 
// //                     onClick={() => setActiveTab('contact')}
// //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// //                   >
// //                     <FaEnvelope className="text-purple-600" />
// //                     <span>Contact Us</span>
// //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// //                   </button>
// //                   <button 
// //                     onClick={() => setActiveTab('faq')}
// //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// //                   >
// //                     <FaQuestionCircle className="text-purple-600" />
// //                     <span>View FAQs</span>
// //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* FAQ Tab Content */}
// //               <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`} id="faq-section">
// //                 <h1 className="text-5xl font-bold text-gray-800 mb-6">FREQUENTLY ASKED QUESTIONS</h1>
// //                 <p className="text-xl text-gray-600 mb-8">
// //                   Find answers to our most commonly asked questions. Can't find what you're looking for? Contact our support team.
// //                 </p>

// //                 {/* FAQ Accordion */}
// //                 <div className="space-y-6 mb-12">
// //                   {faqs.map((faq, index) => (
// //                     <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
// //                       <details className="group">
// //                         <summary className="flex justify-between items-center p-6 cursor-pointer group-hover:bg-purple-50 transition-all">
// //                           <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600">{faq.q}</h3>
// //                           <span className="text-purple-600 group-open:rotate-180 transition-transform">
// //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                             </svg>
// //                           </span>
// //                         </summary>
// //                         <div className="p-6 bg-gray-50 border-t border-gray-100">
// //                           <p className="text-lg text-gray-700">{faq.a}</p>
// //                         </div>
// //                       </details>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* FAQ Categories */}
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// //                   {[
// //                     { title: "Shipping & Delivery", count: 8, icon: "🚚" },
// //                     { title: "Returns & Refunds", count: 6, icon: "↩️" },
// //                     { title: "Account & Ordering", count: 10, icon: "🛒" }
// //                   ].map((category, index) => (
// //                     <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
// //                       <div className="text-4xl mb-4">{category.icon}</div>
// //                       <h3 className="text-xl font-bold text-purple-600 mb-2">{category.title}</h3>
// //                       <p className="text-gray-700">{category.count} questions</p>
// //                       <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-colors">View All</button>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Still Have Questions */}
// //                 <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg mb-12">
// //                   <div className="max-w-3xl mx-auto text-center">
// //                     <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
// //                     <p className="text-xl mb-6">Our support team is ready to help you with any questions or concerns you may have.</p>
// //                     <button 
// //                       onClick={() => setActiveTab('contact')}
// //                       className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
// //                     >
// //                       Contact Us Now
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Quick links to other tabs */}
// //                 <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
// //                   <button 
// //                     onClick={() => setActiveTab('contact')}
// //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// //                   >
// //                     <FaEnvelope className="text-purple-600" />
// //                     <span>Contact Us</span>
// //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// //                   </button>
// //                   <button 
// //                     onClick={() => setActiveTab('team')}
// //                     className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
// //                   >
// //                     <FaStar className="text-purple-600" />
// //                     <span>Meet Our Team</span>
// //                     <FaArrowRight className="w-3 h-3 text-gray-400" />
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Add this style to the component */}
// //       <style jsx>{`
// //         .bg-pattern {
// //           background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ContactUs;
// import React, { useState, useEffect } from "react";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaStar, FaQuestionCircle, FaHeadset, FaComments, FaUserFriends } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Sun, Moon } from 'lucide-react';
// import logo from './images/logo.jpg';

// // Reusable Header Component (aligned with Home and AboutPage)
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

// const ContactUs = () => {
//   const [activeTab, setActiveTab] = useState('contact');
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
//   const location = useLocation();

//   const themes = {
//     light: {
//       background: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
//       text: 'text-gray-800',
//       secondaryText: 'text-gray-600',
//       accent: 'text-purple-600',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
//       card: 'bg-white/95',
//       border: 'border-gray-200',
//       header: 'bg-white/90 backdrop-blur-md shadow-lg',
//       headerTransparent: 'bg-transparent',
//       highlight: 'text-purple-500',
//       glow: 'shadow-md hover:shadow-lg',
//       heroBg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
//       tabActive: 'bg-purple-50 text-purple-600 border-b-2 border-purple-600',
//       tabInactive: 'text-gray-600 hover:bg-gray-50',
//       successBg: 'bg-green-100',
//       successBorder: 'border-green-500',
//       successText: 'text-green-700',
//     },
//     dark: {
//       background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
//       text: 'text-gray-100',
//       secondaryText: 'text-gray-400',
//       accent: 'text-purple-400',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
//       card: 'bg-gray-800/95',
//       border: 'border-gray-700',
//       header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
//       headerTransparent: 'bg-transparent',
//       highlight: 'text-purple-300',
//       glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
//       heroBg: 'bg-gradient-to-r from-purple-800 to-indigo-800',
//       tabActive: 'bg-purple-900 text-purple-400 border-b-2 border-purple-400',
//       tabInactive: 'text-gray-400 hover:bg-gray-900',
//       successBg: 'bg-green-900',
//       successBorder: 'border-green-400',
//       successText: 'text-green-300',
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

//   useEffect(() => {
//     const element = document.getElementById(activeTab + "-section");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [activeTab]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill in all fields");
//       return;
//     }
//     console.log("Form submitted:", formData);
//     setFormSubmitted(true);
//     setTimeout(() => {
//       setFormData({ name: "", email: "", message: "" });
//       setFormSubmitted(false);
//     }, 3000);
//   };

//   const teamMembers = [
//     { name: 'Jane Doe', role: 'Customer Support Specialist', email: 'jane.doe@rsms.com', phone: '+1 234 567 111' },
//     { name: 'John Smith', role: 'Technical Support Lead', email: 'john.smith@rsms.com', phone: '+1 234 567 222' },
//     { name: 'Emma Johnson', role: 'Billing & Account Support', email: 'emma.johnson@rsms.com', phone: '+1 234 567 333' }
//   ];

//   const faqs = [
//     { q: "How can I track my order?", a: "After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order." },
//     { q: "Can I change my order after it's been placed?", a: "We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes." },
//     { q: "How do I cancel my subscription?", a: "You can cancel your subscription at any time through your account settings or by reaching out to our support team." },
//     { q: "What is your return policy?", a: "We offer a 30-day return policy on most items. Please check the product description for specific return information." },
//     { q: "How can I update my account information?", a: "You can update your account information by logging into your account and navigating to the 'Account Settings' section." }
//   ];

//   return (
//     <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen font-sans`}>
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

//       <div className={`relative ${currentTheme.heroBg} py-24 pt-24`}>
//         {/* Enhanced background with decorative elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 opacity-10 bg-pattern"></div>
//           <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5"></div>
//           <div className="absolute top-20 right-20 w-40 h-40 bg-white rounded-full opacity-5"></div>
//           <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full opacity-5"></div>
//           <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white rounded-full opacity-5"></div>
//           <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-5 transform -skew-y-3"></div>
//           <div className="absolute bottom-0 left-0 right-0 h-8 bg-white opacity-5 transform skew-y-3"></div>
//         </div>

//         {/* Headline and intro text */}
//         <div className="relative mb-8 text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">We're Here For You</h1>
//           <p className="text-xl max-w-2xl mx-auto opacity-90">Our dedicated team is ready to assist you with any questions or concerns.</p>
//           <div className="flex justify-center mt-6 space-x-6">
//             <div className="flex items-center">
//               <FaHeadset className="text-2xl mr-2 text-purple-300" />
//               <span>24/7 Support</span>
//             </div>
//             <div className="flex items-center">
//               <FaComments className="text-2xl mr-2 text-purple-300" />
//               <span>Quick Response</span>
//             </div>
//             <div className="flex items-center">
//               <FaUserFriends className="text-2xl mr-2 text-purple-300" />
//               <span>Expert Team</span>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Container */}
//         <div className="relative max-w-6xl mx-auto px-4">
//           <div className={`${currentTheme.card} backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden`}>
//             {/* Tabs Navigation */}
//             <div className={`flex ${currentTheme.border}`}>
//               {[
//                 { id: 'contact', label: 'Contact Us', icon: FaEnvelope },
//                 { id: 'team', label: 'Our Team', icon: FaStar },
//                 { id: 'faq', label: 'FAQs', icon: FaQuestionCircle }
//               ].map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex-1 py-4 px-6 flex items-center justify-center space-x-2 ${activeTab === tab.id ? currentTheme.tabActive : currentTheme.tabInactive} transition-all duration-200`}
//                 >
//                   <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? currentTheme.accent : currentTheme.secondaryText}`} />
//                   <span className="font-medium">{tab.label}</span>
//                 </button>
//               ))}
//             </div>

//             <div className="p-8">
//               {/* Contact Tab */}
//               <div className={`${activeTab === 'contact' ? 'block' : 'hidden'}`} id="contact-section">
//                 <h1 className="text-5xl font-bold mb-6">GET IN TOUCH</h1>
//                 <p className={`text-xl ${currentTheme.secondaryText} mb-8`}>
//                   We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
//                 </p>

//                 {/* Contact Information Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//                   {[
//                     { icon: FaEnvelope, title: 'Email Us', content: 'support@rsms.com', color: 'from-purple-500 to-pink-500' },
//                     { icon: FaPhone, title: 'Call Us', content: '+1 234 567 908', color: 'from-blue-500 to-cyan-500' },
//                     { icon: FaMapMarkerAlt, title: 'Visit Us', content: '123 Retail Lane, Business City', color: 'from-green-500 to-emerald-500' }
//                   ].map((item, index) => (
//                     <motion.div
//                       key={index}
//                       className={`group relative bg-white rounded-xl shadow-lg overflow-hidden`}
//                       whileHover={{ y: -5 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
//                       <div className="relative p-6">
//                         <div className="flex items-center space-x-4">
//                           <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
//                             <item.icon className="w-6 h-6" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-semibold">{item.title}</h3>
//                             <p className={currentTheme.secondaryText}>{item.content}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Why Contact Us Section */}
//                 <section className="mt-10">
//                   <div className={`bg-gray-50 dark:bg-gray-900 p-8 rounded-xl ${currentTheme.glow}`}>
//                     <h2 className="text-3xl font-bold mb-6">Why Contact Us?</h2>
//                     <p className={`text-lg ${currentTheme.secondaryText} mb-8`}>
//                       We are here to help with product inquiries, technical support, and much more. Get in touch for:
//                     </p>
//                     <div className="space-y-6">
//                       {[
//                         { emoji: '🔍', title: 'Product Inquiries', desc: 'Want to learn more about our products?' },
//                         { emoji: '⚙️', title: 'Technical Support', desc: 'Facing any issues? We\'re here to assist.' },
//                         { emoji: '💬', title: 'General Feedback', desc: 'We value your opinion!' }
//                       ].map((item, index) => (
//                         <motion.div key={index} className="flex items-center space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
//                           <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{item.emoji}</span>
//                           <span className="text-lg"><strong>{item.title}:</strong> {item.desc}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </section>

//                 {/* Contact Form */}
//                 <div className="mt-10 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-indigo-900 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
//                   <div className="relative">
//                     <h2 className="text-3xl font-bold mb-6">Leave us a message</h2>
//                     {formSubmitted && (
//                       <div className={`${currentTheme.successBg} ${currentTheme.successBorder} ${currentTheme.successText} border-l-4 p-4 rounded mb-6`}>
//                         <p className="font-bold">Thank you!</p>
//                         <p>Your message has been sent. We'll get back to you soon.</p>
//                       </div>
//                     )}
//                     <form className="space-y-6" onSubmit={handleSubmit}>
//                       <div className="group">
//                         <label className="block text-lg font-semibold mb-2">Name:</label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="Enter your name"
//                           className={`w-full px-4 py-3 rounded-lg border ${currentTheme.border} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 ${currentTheme.text}`}
//                           required
//                         />
//                       </div>
//                       <div className="group">
//                         <label className="block text-lg font-semibold mb-2">Email:</label>
//                         <input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="Enter your email"
//                           className={`w-full px-4 py-3 rounded-lg border ${currentTheme.border} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 ${currentTheme.text}`}
//                           required
//                         />
//                       </div>
//                       <div className="group">
//                         <label className="block text-lg font-semibold mb-2">Message:</label>
//                         <textarea
//                           name="message"
//                           value={formData.message}
//                           onChange={handleInputChange}
//                           placeholder="Your message here"
//                           className={`w-full px-4 py-3 rounded-lg border ${currentTheme.border} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-40 resize-none bg-white dark:bg-gray-700 ${currentTheme.text}`}
//                           required
//                         ></textarea>
//                       </div>
//                       <motion.button
//                         type="submit"
//                         className={`${currentTheme.button} w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <span>Submit</span>
//                         <FaArrowRight className="w-4 h-4" />
//                       </motion.button>
//                     </form>
//                   </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
//                   <button onClick={() => setActiveTab('team')} className={`bg-white dark:bg-gray-800 px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
//                     <FaStar className={currentTheme.accent} />
//                     <span>Meet Our Team</span>
//                     <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
//                   </button>
//                   <button onClick={() => setActiveTab('faq')} className={`bg-white dark:bg-gray-800 px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
//                     <FaQuestionCircle className={currentTheme.accent} />
//                     <span>View FAQs</span>
//                     <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
//                   </button>
//                 </div>
//               </div>

//               {/* Team Tab */}
//               <div className={`${activeTab === 'team' ? 'block' : 'hidden'}`} id="team-section">
//                 <h1 className="text-5xl font-bold mb-6">OUR SUPPORT TEAM</h1>
//                 <p className={`text-xl ${currentTheme.secondaryText} mb-8`}>
//                   Meet the dedicated professionals ready to assist you with any questions or concerns you may have.
//                 </p>

//                 {/* Team Members Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//                   {teamMembers.map((member, index) => (
//                     <motion.div
//                       key={index}
//                       className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden`}
//                       whileHover={{ y: -5 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                       <div className="p-6">
//                         <div className="relative w-40 h-40 mx-auto mb-6">
//                           <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                           <img
//                             src="/api/placeholder/160/160"
//                             alt={member.name}
//                             className="w-full h-full rounded-full border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300"
//                           />
//                         </div>
//                         <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors duration-200 text-center">
//                           {member.name}
//                         </h3>
//                         <p className={`${currentTheme.accent} text-lg mb-4 text-center`}>{member.role}</p>
//                         <div className="space-y-2 mt-6">
//                           <p className="flex items-center justify-center gap-2">
//                             <FaEnvelope className={currentTheme.accent} />
//                             <a href={`mailto:${member.email}`} className={`${currentTheme.accent} hover:${currentTheme.highlight}`}>{member.email}</a>
//                           </p>
//                           <p className="flex items-center justify-center gap-2">
//                             <FaPhone className={currentTheme.accent} />
//                             <span>{member.phone}</span>
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Team Values */}
//                 <div className={`bg-gray-50 dark:bg-gray-900 p-8 rounded-xl ${currentTheme.glow} mb-12`}>
//                   <h2 className="text-3xl font-bold mb-6">Our Support Values</h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {[
//                       { title: "Customer First", desc: "We prioritize your needs and satisfaction above all else.", icon: "🌟" },
//                       { title: "Rapid Response", desc: "We aim to respond to all inquiries within 24 hours.", icon: "⚡" },
//                       { title: "Expert Solutions", desc: "Our team is trained to provide knowledgeable assistance.", icon: "🧠" }
//                     ].map((value, index) => (
//                       <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-lg ${currentTheme.glow}`}>
//                         <div className="text-4xl mb-4">{value.icon}</div>
//                         <h3 className={`text-xl font-bold ${currentTheme.accent} mb-2`}>{value.title}</h3>
//                         <p className={currentTheme.secondaryText}>{value.desc}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
//                   <button onClick={() => setActiveTab('contact')} className={`bg-white dark:bg-gray-800 px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
//                     <FaEnvelope className={currentTheme.accent} />
//                     <span>Contact Us</span>
//                     <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
//                   </button>
//                   <button onClick={() => setActiveTab('faq')} className={`bg-white dark:bg-gray-800 px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
//                     <FaQuestionCircle className={currentTheme.accent} />
//                     <span>View FAQs</span>
//                     <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
//                   </button>
//                 </div>
//               </div>

//               {/* FAQ Tab */}
//               <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`} id="faq-section">
//                 <h1 className="text-5xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h1>
//                 <p className={`text-xl ${currentTheme.secondaryText} mb-8`}>
//                   Find answers to our most commonly asked questions. Can't find what you're looking for? Contact our support team.
//                 </p>

//                 {/* FAQ Accordion */}
//                 <div className="space-y-6 mb-12">
//                   {faqs.map((faq, index) => (
//                     <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl ${currentTheme.glow} overflow-hidden`}>
//                       <details className="group">
//                         <summary className={`flex justify-between items-center p-6 cursor-pointer group-hover:bg-purple-50 dark:group-hover:bg-purple-900 transition-all`}>
//                           <h3 className="text-xl font-semibold group-hover:text-purple-600">{faq.q}</h3>
//                           <span className={`${currentTheme.accent} group-open:rotate-180 transition-transform`}>
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                             </svg>
//                           </span>
//                         </summary>
//                         <div className={`p-6 bg-gray-50 dark:bg-gray-900 border-t ${currentTheme.border}`}>
//                           <p className={`text-lg ${currentTheme.secondaryText}`}>{faq.a}</p>
//                         </div>
//                       </details>
//                     </div>
//                   ))}
//                 </div>

//                 {/* FAQ Categories */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//                   {[
//                     { title: "Shipping & Delivery", count: 8, icon: "🚚" },
//                     { title: "Returns & Refunds", count: 6, icon: "↩️" },
//                     { title: "Account & Ordering", count: 10, icon: "🛒" }
//                   ].map((category, index) => (
//                     <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-xl ${currentTheme.glow} text-center`}>
//                       <div className="text-4xl mb-4">{category.icon}</div>
//                       <h3 className={`text-xl font-bold ${currentTheme.accent} mb-2`}>{category.title}</h3>
//                       <p className={currentTheme.secondaryText}>{category.count} questions</p>
//                       <button className={`${currentTheme.accent} font-medium hover:${currentTheme.highlight} transition-colors mt-4`}>View All</button>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Still Have Questions */}
//                 <div className={`${currentTheme.heroBg} text-white p-8 rounded-xl ${currentTheme.glow} mb-12`}>
//                   <div className="max-w-3xl mx-auto text-center">
//                     <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
//                     <p className="text-xl mb-6">Our support team is ready to help you with any questions or concerns you may have.</p>
//                     <button onClick={() => setActiveTab('contact')} className={`bg-white dark:bg-gray-800 ${currentTheme.accent} px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all`}>
//                       Contact Us Now
//                     </button>
//                   </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
//                   <button onClick={() => setActiveTab('contact')} className={`bg-white dark:bg-gray-800 px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
//                     <FaEnvelope className={currentTheme.accent} />
//                     <span>Contact Us</span>
//                     <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
//                   </button>
//                   <button onClick={() => setActiveTab('team')} className={`bg-white dark:bg-gray-800 px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
//                     <FaStar className={currentTheme.accent} />
//                     <span>Meet Our Team</span>
//                     <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .bg-pattern {
//           background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight, FaStar, FaQuestionCircle, FaHeadset, FaComments, FaUserFriends } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sun, Moon } from 'lucide-react';
import logo from './images/logo.jpg';

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

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);
  const location = useLocation();

  const themes = {
    light: {
      background: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
      text: 'text-gray-800',
      secondaryText: 'text-gray-600',
      accent: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
      card: 'bg-white',
      border: 'border-gray-200',
      header: 'bg-white/90 backdrop-blur-md shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-500',
      glow: 'shadow-md hover:shadow-lg',
      heroBg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      tabActive: 'bg-purple-50 text-purple-600 border-b-2 border-purple-600',
      tabInactive: 'text-gray-600 hover:bg-gray-50',
      successBg: 'bg-green-100',
      successBorder: 'border-green-500',
      successText: 'text-green-700',
      formBg: 'bg-white',
      inputBg: 'bg-white',
      sectionBg: 'bg-gray-50',
    },
    dark: {
      background: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700',
      text: 'text-gray-100',
      secondaryText: 'text-gray-400',
      accent: 'text-purple-400',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
      card: 'bg-gray-800',
      border: 'border-gray-700',
      header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-300',
      glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
      heroBg: 'bg-gradient-to-r from-purple-800 to-indigo-800',
      tabActive: 'bg-purple-900 text-purple-400 border-b-2 border-purple-400',
      tabInactive: 'text-gray-400 hover:bg-gray-900',
      successBg: 'bg-green-900',
      successBorder: 'border-green-400',
      successText: 'text-green-300',
      formBg: 'bg-gray-800',
      inputBg: 'bg-gray-700',
      sectionBg: 'bg-gray-900',
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

  useEffect(() => {
    const element = document.getElementById(activeTab + "-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormSubmitted(false);
    }, 3000);
  };

  const teamMembers = [
    { name: 'Jane Doe', role: 'Customer Support Specialist', email: 'jane.doe@rsms.com', phone: '+1 234 567 111' },
    { name: 'John Smith', role: 'Technical Support Lead', email: 'john.smith@rsms.com', phone: '+1 234 567 222' },
    { name: 'Emma Johnson', role: 'Billing & Account Support', email: 'emma.johnson@rsms.com', phone: '+1 234 567 333' }
  ];

  const faqs = [
    { q: "How can I track my order?", a: "After placing an order, you will receive a tracking number. Simply visit our Order Tracking page to monitor the status of your order." },
    { q: "Can I change my order after it's been placed?", a: "We process orders quickly, but if you contact us within an hour of placing your order, we may be able to make changes." },
    { q: "How do I cancel my subscription?", a: "You can cancel your subscription at any time through your account settings or by reaching out to our support team." },
    { q: "What is your return policy?", a: "We offer a 30-day return policy on most items. Please check the product description for specific return information." },
    { q: "How can I update my account information?", a: "You can update your account information by logging into your account and navigating to the 'Account Settings' section." }
  ];

  return (
    <div className={`${currentTheme.background} ${currentTheme.text} min-h-screen font-sans`}>
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

      <div className={`relative ${currentTheme.heroBg} py-24 pt-24`}>
        {/* Enhanced background with decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white dark:bg-gray-700 rounded-full opacity-5"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-white dark:bg-gray-700 rounded-full opacity-5"></div>
          <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white dark:bg-gray-700 rounded-full opacity-5"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white dark:bg-gray-700 rounded-full opacity-5"></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-700 opacity-5 transform -skew-y-3"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white dark:bg-gray-700 opacity-5 transform skew-y-3"></div>
        </div>

        {/* Headline and intro text */}
        <div className="relative mb-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">We're Here For You</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Our dedicated team is ready to assist you with any questions or concerns.</p>
          <div className="flex justify-center mt-6 space-x-6">
            <div className="flex items-center">
              <FaHeadset className="text-2xl mr-2 text-purple-300" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <FaComments className="text-2xl mr-2 text-purple-300" />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center">
              <FaUserFriends className="text-2xl mr-2 text-purple-300" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          <div className={`${currentTheme.card} rounded-3xl shadow-2xl overflow-hidden`}>
            {/* Tabs Navigation */}
            <div className={`flex ${currentTheme.border}`}>
              {[
                { id: 'contact', label: 'Contact Us', icon: FaEnvelope },
                { id: 'team', label: 'Our Team', icon: FaStar },
                { id: 'faq', label: 'FAQs', icon: FaQuestionCircle }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 flex items-center justify-center space-x-2 ${activeTab === tab.id ? currentTheme.tabActive : currentTheme.tabInactive} transition-all duration-200`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? currentTheme.accent : currentTheme.secondaryText}`} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-8">
              {/* Contact Tab */}
              <div className={`${activeTab === 'contact' ? 'block' : 'hidden'}`} id="contact-section">
                <h1 className="text-5xl font-bold mb-6">GET IN TOUCH</h1>
                <p className={`text-xl ${currentTheme.secondaryText} mb-8`}>
                  We're always here to help! Reach out to us with any queries or concerns, and our team will get back to you promptly.
                </p>

                {/* Contact Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: FaEnvelope, title: 'Email Us', content: 'support@rsms.com', color: 'from-purple-500 to-pink-500' },
                    { icon: FaPhone, title: 'Call Us', content: '+1 234 567 908', color: 'from-blue-500 to-cyan-500' },
                    { icon: FaMapMarkerAlt, title: 'Visit Us', content: '123 Retail Lane, Business City', color: 'from-green-500 to-emerald-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`group relative ${currentTheme.card} rounded-xl shadow-lg overflow-hidden`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <div className="relative p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className={currentTheme.secondaryText}>{item.content}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Why Contact Us Section */}
                <section className="mt-10">
                  <div className={`${currentTheme.sectionBg} p-8 rounded-xl ${currentTheme.glow}`}>
                    <h2 className="text-3xl font-bold mb-6">Why Contact Us?</h2>
                    <p className={`text-lg ${currentTheme.secondaryText} mb-8`}>
                      We are here to help with product inquiries, technical support, and much more. Get in touch for:
                    </p>
                    <div className="space-y-6">
                      {[
                        { emoji: '🔍', title: 'Product Inquiries', desc: 'Want to learn more about our products?' },
                        { emoji: '⚙️', title: 'Technical Support', desc: 'Facing any issues? We\'re here to assist.' },
                        { emoji: '💬', title: 'General Feedback', desc: 'We value your opinion!' }
                      ].map((item, index) => (
                        <motion.div key={index} className="flex items-center space-x-4 group" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                          <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{item.emoji}</span>
                          <span className="text-lg"><strong>{item.title}:</strong> {item.desc}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Contact Form */}
                <div className={`mt-10 max-w-2xl mx-auto ${currentTheme.formBg} rounded-xl shadow-lg p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-900 dark:to-indigo-900 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
                  <div className="relative">
                    <h2 className="text-3xl font-bold mb-6">Leave us a message</h2>
                    {formSubmitted && (
                      <div className={`${currentTheme.successBg} ${currentTheme.successBorder} ${currentTheme.successText} border-l-4 p-4 rounded mb-6`}>
                        <p className="font-bold">Thank you!</p>
                        <p>Your message has been sent. We'll get back to you soon.</p>
                      </div>
                    )}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="group">
                        <label className="block text-lg font-semibold mb-2">Name:</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className={`w-full px-4 py-3 rounded-lg border ${currentTheme.border} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${currentTheme.inputBg} ${currentTheme.text}`}
                          required
                        />
                      </div>
                      <div className="group">
                        <label className="block text-lg font-semibold mb-2">Email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className={`w-full px-4 py-3 rounded-lg border ${currentTheme.border} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${currentTheme.inputBg} ${currentTheme.text}`}
                          required
                        />
                      </div>
                      <div className="group">
                        <label className="block text-lg font-semibold mb-2">Message:</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your message here"
                          className={`w-full px-4 py-3 rounded-lg border ${currentTheme.border} focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-40 resize-none ${currentTheme.inputBg} ${currentTheme.text}`}
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        className={`${currentTheme.button} w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Submit</span>
                        <FaArrowRight className="w-4 h-4" />
                      </motion.button>
                    </form>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                  <button onClick={() => setActiveTab('team')} className={`${currentTheme.card} px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
                    <FaStar className={currentTheme.accent} />
                    <span>Meet Our Team</span>
                    <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
                  </button>
                  <button onClick={() => setActiveTab('faq')} className={`${currentTheme.card} px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
                    <FaQuestionCircle className={currentTheme.accent} />
                    <span>View FAQs</span>
                    <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
                  </button>
                </div>
              </div>

              {/* Team Tab */}
              <div className={`${activeTab === 'team' ? 'block' : 'hidden'}`} id="team-section">
                <h1 className="text-5xl font-bold mb-6">OUR SUPPORT TEAM</h1>
                <p className={`text-xl ${currentTheme.secondaryText} mb-8`}>
                  Meet the dedicated professionals ready to assist you with any questions or concerns you may have.
                </p>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className={`group relative ${currentTheme.card} rounded-xl shadow-lg overflow-hidden`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="p-6">
                        <div className="relative w-40 h-40 mx-auto mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          <img
                            src="/api/placeholder/160/160"
                            alt={member.name}
                            className="w-full h-full rounded-full border-4 border-purple-500 group-hover:border-purple-600 transition-all duration-300"
                          />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 text-center">
                          {member.name}
                        </h3>
                        <p className={`${currentTheme.accent} text-lg mb-4 text-center`}>{member.role}</p>
                        <div className="space-y-2 mt-6">
                          <p className="flex items-center justify-center gap-2">
                            <FaEnvelope className={currentTheme.accent} />
                            <a href={`mailto:${member.email}`} className={`${currentTheme.accent} hover:${currentTheme.highlight}`}>{member.email}</a>
                          </p>
                          <p className="flex items-center justify-center gap-2">
                            <FaPhone className={currentTheme.accent} />
                            <span>{member.phone}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Team Values */}
                <div className={`${currentTheme.sectionBg} p-8 rounded-xl ${currentTheme.glow} mb-12`}>
                  <h2 className="text-3xl font-bold mb-6">Our Support Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: "Customer First", desc: "We prioritize your needs and satisfaction above all else.", icon: "🌟" },
                      { title: "Rapid Response", desc: "We aim to respond to all inquiries within 24 hours.", icon: "⚡" },
                      { title: "Expert Solutions", desc: "Our team is trained to provide knowledgeable assistance.", icon: "🧠" }
                    ].map((value, index) => (
                      <div key={index} className={`${currentTheme.card} p-6 rounded-lg ${currentTheme.glow}`}>
                        <div className="text-4xl mb-4">{value.icon}</div>
                        <h3 className={`text-xl font-bold ${currentTheme.accent} mb-2`}>{value.title}</h3>
                        <p className={currentTheme.secondaryText}>{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
                  <button onClick={() => setActiveTab('contact')} className={`${currentTheme.card} px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
                    <FaEnvelope className={currentTheme.accent} />
                    <span>Contact Us</span>
                    <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
                  </button>
                  <button onClick={() => setActiveTab('faq')} className={`${currentTheme.card} px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
                    <FaQuestionCircle className={currentTheme.accent} />
                    <span>View FAQs</span>
                    <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
                  </button>
                </div>
              </div>

              {/* FAQ Tab */}
              <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`} id="faq-section">
                <h1 className="text-5xl font-bold mb-6">FREQUENTLY ASKED QUESTIONS</h1>
                <p className={`text-xl ${currentTheme.secondaryText} mb-8`}>
                  Find answers to our most commonly asked questions. Can't find what you're looking for? Contact our support team.
                </p>

                {/* FAQ Accordion */}
                <div className="space-y-6 mb-12">
                  {faqs.map((faq, index) => (
                    <div key={index} className={`${currentTheme.card} rounded-xl ${currentTheme.glow} overflow-hidden`}>
                      <details className="group">
                        <summary className={`flex justify-between items-center p-6 cursor-pointer group-hover:${currentTheme.tabActive} transition-all`}>
                          <h3 className="text-xl font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400">{faq.q}</h3>
                          <span className={`${currentTheme.accent} group-open:rotate-180 transition-transform`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className={`p-6 ${currentTheme.sectionBg} border-t ${currentTheme.border}`}>
                          <p className={`text-lg ${currentTheme.secondaryText}`}>{faq.a}</p>
                        </div>
                      </details>
                    </div>
                  ))}
                </div>

                {/* FAQ Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { title: "Shipping & Delivery", count: 8, icon: "🚚" },
                    { title: "Returns & Refunds", count: 6, icon: "↩️" },
                    { title: "Account & Ordering", count: 10, icon: "🛒" }
                  ].map((category, index) => (
                    <div key={index} className={`${currentTheme.card} p-6 rounded-xl ${currentTheme.glow} text-center`}>
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className={`text-xl font-bold ${currentTheme.accent} mb-2`}>{category.title}</h3>
                      <p className={currentTheme.secondaryText}>{category.count} questions</p>
                      <button className={`${currentTheme.accent} font-medium hover:${currentTheme.highlight} transition-colors mt-4`}>View All</button>
                    </div>
                  ))}
                </div>

                {/* Still Have Questions */}
                <div className={`${currentTheme.heroBg} text-white p-8 rounded-xl ${currentTheme.glow} mb-12`}>
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="text-xl mb-6">Our support team is ready to help you with any questions or concerns you may have.</p>
                    <button onClick={() => setActiveTab('contact')} className={`${currentTheme.card} ${currentTheme.accent} px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all`}>
                      Contact Us Now
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
                  <button onClick={() => setActiveTab('contact')} className={`${currentTheme.card} px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
                    <FaEnvelope className={currentTheme.accent} />
                    <span>Contact Us</span>
                    <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
                  </button>
                  <button onClick={() => setActiveTab('team')} className={`${currentTheme.card} px-6 py-3 rounded-lg ${currentTheme.glow} flex items-center gap-2`}>
                    <FaStar className={currentTheme.accent} />
                    <span>Meet Our Team</span>
                    <FaArrowRight className={`w-3 h-3 ${currentTheme.secondaryText}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default ContactUs;