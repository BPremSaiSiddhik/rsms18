import React from "react";

// const Features = () => {
//   const features = [
//     {
//       icon: "🛒", // Use suitable icons
//       title: "Effortless Billing",
//       description:
//         "Simplify checkout processes with fast and accurate billing, enabling seamless transactions for your retail customers.",
//       highlight: "fast and accurate billing",
//     },
//     {
//       icon: "📈",
//       title: "Track Daily Sales",
//       description:
//         "Monitor daily sales trends and gain valuable insights into your store's performance with just a click.",
//       highlight: "daily sales trends",
//     },
//     {
//       icon: "💳",
//       title: "Multiple Payment Options",
//       description:
//         "Offer your customers the convenience of multiple payment modes, including UPI, cards, and cash.",
//       highlight: "multiple payment modes",
//     },
//     {
//       icon: "🔔",
//       title: "Real-time Notifications",
//       description:
//         "Stay updated with real-time alerts for billing, sales, and stock changes directly in your dashboard.",
//       highlight: "real-time alerts",
//     },
//     {
//       icon: "🔒",
//       title: "Secure Data Management",
//       description:
//         "Keep your business data safe with encrypted storage and automated backups to prevent data loss.",
//       highlight: "encrypted storage",
//     },
//     {
//       icon: "📊",
//       title: "Detailed Analytics",
//       description:
//         "Analyze your business's performance with detailed reports on sales, inventory, and customer behavior.",
//       highlight: "detailed reports",
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 bg-[#002f4b]">
//       {features.map((feature, index) => (
//         <div
//           key={index}
//           className="bg-black rounded-lg p-5 text-center text-white shadow-lg transition-transform duration-300 hover:translate-y-1 hover:shadow-xl"
//         >
//           <div className="text-5xl mb-3 text-[#ffd700]">{feature.icon}</div>
//           <h3 className="text-xl font-bold mb-2 text-[#ffd700]">{feature.title}</h3>
//           <p className="text-sm text-gray-300">
//             {feature.description.split(feature.highlight || "").map((part, i) =>
//               i === 0 ? (
//                 <span key={i}>
//                   {part}
//                   <span className="text-[#ff6f61] font-bold">{feature.highlight}</span>
//                 </span>
//               ) : (
//                 part
//               )
//             )}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };
const Features = () => {
    const features = [
      {
        icon: "🛒",
        title: "Effortless Billing",
        description: "Simplify checkout processes with fast and accurate billing, enabling seamless transactions for your retail customers.",
        highlight: "fast and accurate billing",
      },
      {
        icon: "📈",
        title: "Track Daily Sales",
        description: "Monitor daily sales trends and gain valuable insights into your store's performance with just a click.",
        highlight: "daily sales trends",
      },
      {
        icon: "💳",
        title: "Multiple Payment Options",
        description: "Offer your customers the convenience of multiple payment modes, including UPI, cards, and cash.",
        highlight: "multiple payment modes",
      },
      {
        icon: "🔔",
        title: "Real-time Notifications",
        description: "Stay updated with real-time alerts for billing, sales, and stock changes directly in your dashboard.",
        highlight: "real-time alerts",
      },
      {
        icon: "🔒",
        title: "Secure Data Management",
        description: "Keep your business data safe with encrypted storage and automated backups to prevent data loss.",
        highlight: "encrypted storage",
      },
      {
        icon: "📊",
        title: "Detailed Analytics",
        description: "Analyze your business's performance with detailed reports on sales, inventory, and customer behavior.",
        highlight: "detailed reports",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5 bg-gradient-to-r from-blue-50 to-blue-100">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-5 text-center text-gray-800 shadow-lg 
              transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 
              animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-5xl mb-3 text-blue-500">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-blue-600">{feature.title}</h3>
            <p className="text-sm text-gray-600">
              {feature.description.split(feature.highlight || "").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="text-blue-500 font-bold">{feature.highlight}</span>
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        ))}
      </div>
    );
  };
  

export default Features;