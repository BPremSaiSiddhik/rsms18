import React from "react";
import boy1 from "./images/bussiness-man2.png";
import boy2 from "./images/boy2.png";
import girl from "./images/girl2.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import youtube from "./images/youtube.png";
import { Link } from "react-router-dom";

// const TestimonialsPage = () => {
//   const testimonials = [
//     {
//       name: "Eeswar",
//       role: "Manager at XYZ Store",
//       date: "10/11/24",
//       feedback:
//         "This application has transformed the way we manage our store. The product management feature alone has saved us countless hours!",
//       rating: 5,
//       avatar: boy2,
//     },
//     {
//       name: "Siri",
//       role: "Owner of a Fancy Store",
//       date: "10/10/24",
//       feedback:
//         "I am owning a fancy store and I could say this helps me in many ways like managing my sales and drawing essential insights from sales.",
//       rating: 4,
//       avatar: girl,
//     },
//     {
//       name: "Ramesh",
//       role: "Cashier at XYZ Store",
//       date: "9/10/24",
//       feedback:
//         "This makes my job very easy and can easily generate bills irrespective of no. of items.",
//       rating: 4,
//       avatar: boy1,
//     },
//   ];

//   const renderStars = (count) => "⭐".repeat(count);

//   return (
//     <div className="bg-gray-900 text-white font-sans p-10">
//       <div className="text-center">
//         <h2 className="text-yellow-500 text-3xl font-bold mb-5">What Our Customers Say</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-blue-900 p-5 w-80 rounded-lg shadow-lg transition transform hover:scale-105">
//               <div className="flex items-center mb-3">
//                 <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
//                 <div>
//                   <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
//                   <p className="text-gray-400 text-sm">{testimonial.role}</p>
//                   <p className="text-gray-500 text-xs">{testimonial.date}</p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-300 leading-relaxed">{testimonial.feedback}</p>
//               <p className="text-yellow-400 text-sm">Rating: {renderStars(testimonial.rating)}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="bg-blue-900 p-8 mt-10 flex flex-wrap justify-around text-center text-white">
//         <div className="flex-1">
//           <h3 className="text-yellow-500 font-bold text-lg">Follow Our Store On</h3>
//           <div className="flex justify-center gap-3 mt-3">
//             <img src={youtube} alt="YouTube" className="w-8" />
//             <img src={instagram} alt="Instagram" className="w-8" />
//             <img src={facebook} alt="Facebook" className="w-8" />
//             <img src={twitter} alt="Twitter" className="w-8" />
//           </div>
//         </div>

//         <div className="flex-1">
//           <h3 className="text-yellow-500 font-bold text-lg">Get To Know Us</h3>
//           <ul className="list-none p-0">
//             <li><Link to="/" className="text-white hover:text-yellow-400">Home</Link></li>
//             <li><Link to="/AboutPage" className="text-white hover:text-yellow-400">About</Link></li>
//             <li className="text-white">Purpose</li>
//             <li><Link to="/ContactUs" className="text-white hover:text-yellow-400">Contact</Link></li>
//           </ul>
//         </div>

//         <div className="flex-1">
//           <h3 className="text-yellow-500 font-bold text-lg">Connect With Us</h3>
//           <p className="text-gray-300">Facebook, Twitter, Instagram</p>
//           <p className="text-gray-300">Ph: +91 342 223 4553</p>
//           <p className="text-gray-300">Email: xyzstore@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };
const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Eeswar",
      role: "Manager at XYZ Store",
      date: "10/11/24",
      feedback: "This application has transformed the way we manage our store. The product management feature alone has saved us countless hours!",
      rating: 5,
      avatar: boy2,
    },
    {
      name: "Siri",
      role: "Owner of a Fancy Store",
      date: "10/10/24",
      feedback: "I am owning a fancy store and I could say this helps me in many ways like managing my sales and drawing essential insights from sales.",
      rating: 4,
      avatar: girl,
    },
    {
      name: "Ramesh",
      role: "Cashier at XYZ Store",
      date: "9/10/24",
      feedback: "This makes my job very easy and can easily generate bills irrespective of no. of items.",
      rating: 4,
      avatar: boy1,
    },
  ];

  const renderStars = (count) => "⭐".repeat(count);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 font-sans p-10">
      <div className="text-center">
        <h2 className="text-blue-600 text-3xl font-bold mb-5 animate-fadeIn">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-5 w-80 rounded-lg shadow-lg transition transform 
                hover:scale-105 duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <h3 className="text-gray-800 font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{testimonial.feedback}</p>
              <p className="text-blue-500 text-sm">Rating: {renderStars(testimonial.rating)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 mt-10 flex flex-wrap justify-around text-center text-gray-800 
        rounded-lg shadow-lg animate-slideUp">
        <div className="flex-1">
          <h3 className="text-blue-600 font-bold text-lg">Follow Our Store On</h3>
          <div className="flex justify-center gap-3 mt-3">
            <img src={youtube} alt="YouTube" className="w-8 hover:scale-110 transition-transform" />
            <img src={instagram} alt="Instagram" className="w-8 hover:scale-110 transition-transform" />
            <img src={facebook} alt="Facebook" className="w-8 hover:scale-110 transition-transform" />
            <img src={twitter} alt="Twitter" className="w-8 hover:scale-110 transition-transform" />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-blue-600 font-bold text-lg">Get To Know Us</h3>
          <ul className="list-none p-0">
            <li><Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link to="/AboutPage" className="text-gray-600 hover:text-blue-500 transition-colors">About</Link></li>
            <li className="text-gray-600">Purpose</li>
            <li><Link to="/ContactUs" className="text-gray-600 hover:text-blue-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-blue-600 font-bold text-lg">Connect With Us</h3>
          <p className="text-gray-600">Facebook, Twitter, Instagram</p>
          <p className="text-gray-600">Ph: +91 342 223 4553</p>
          <p className="text-gray-600">Email: xyzstore@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialsPage;
