import React from "react";
import invoice from "./images/invoice.jpg";
import roleb from "./images/roleb.jpg";
import salesr from "./images/salesr.jpg";
import products2 from "./images/products2.png";

// const FeatureCardsPage = () => {
//   const features = [
//     {
//       title: "Role Based User Access",
//       image: roleb,
//       borderColor: "border-purple-600",
//     },
//     {
//       title: "Product Management",
//       image: products2,
//       borderColor: "border-slate-700",
//     },
//     {
//       title: "Generate Sales Reports",
//       image: salesr,
//       borderColor: "border-yellow-400",
//     },
//     {
//       title: "Sales Management & Bill Generation",
//       image: invoice,
//       borderColor: "border-red-600",
//     },
//   ];

//   return (
//     <div className="bg-gray-900 min-h-[35vh] p-5">
//       <div className="flex flex-wrap justify-center gap-5">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`bg-black text-white w-[250px] rounded-lg overflow-hidden text-center border-4 ${feature.borderColor} shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}
//           >
//             <img
//               src={feature.image}
//               alt={feature.title}
//               className="w-full h-[150px] object-cover rounded-t-lg"
//             />
//             <div className="p-3">
//               <h3 className="text-lg text-gray-300 my-2">{feature.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
const FeatureCardsPage = () => {
  const features = [
    {
      title: "Role Based User Access",
      image: roleb,
      borderColor: "border-blue-400",
    },
    {
      title: "Product Management",
      image: products2,
      borderColor: "border-blue-400",
    },
    {
      title: "Generate Sales Reports",
      image: salesr,
      borderColor: "border-blue-400",
    },
    {
      title: "Sales Management & Bill Generation",
      image: invoice,
      borderColor: "border-blue-400",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-[35vh] p-5">
      <div className="flex flex-wrap justify-center gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 w-[250px] rounded-lg overflow-hidden text-center 
              border-4 border-blue-200 shadow-lg transform hover:-translate-y-2 hover:shadow-2xl 
              transition-all duration-300 animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[150px] object-cover rounded-t-lg transform hover:scale-105 transition-transform"
            />
            <div className="p-3">
              <h3 className="text-lg text-gray-700 my-2">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCardsPage;
