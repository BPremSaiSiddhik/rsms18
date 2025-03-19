// // // // import logo from './logo.svg';
// // // import './App.css';
// // // // import Hello from './Hello';
// // // // import ProductDashboard from './ProductManagement';
// // // import AboutPage from './AboutPage';
// // // import ContactUs from './ContactUs';
// // // import RetailStorePage from './c1';
// // // import FeatureCardsPage from './c3';
// // // import TestimonialsPage from './c4';

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       {/* <ProductDashboard/> */}
// // //       <AboutPage/>
// // //       <ContactUs/>
// // //       <RetailStorePage/>
// // //       <FeatureCardsPage/>
// // //       <TestimonialsPage/> 
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React from 'react';
// // // import ProductDashboard from './ProductManagement';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Home from './Home'; // Your Home component
// // import Login from './LoginPage'; // Login component
// //  import Inter from './Inter'; // Inter component with a sidebar
// // import AboutPage from './AboutPage';
// // import ContactUs from './ContactUs';
// // import StoreReview from './StoreReview';
// // import SignUpPage from './SignUp';
// //  import { StoreProvider } from "./StoreContext"; // StoreProvider import
// // import ChangePasswordPage from './ChangePassword';
// // import RequestPasswordResetPage from './RequestPasswordResetPage';
// // import ResetPasswordPage from './RequestPasswordPage';
// // // import TermsAndConditions from './TermsAndConditions';

// // function App() {
// //   return (
// //     <StoreProvider>  {/* StoreProvider wraps your application to provide the store context */}
// //       <Router>
// //         <Routes>
// //           {/* Define routes */}
// //           <Route path="/" element={<Home />} />
// //           <Route path="/LoginPage" element={<Login />} />
// //           <Route path="/SignUp" element={<SignUpPage />} />
// //            <Route path="/Inter/*" element={<Inter />} /> 
// //           <Route path="/AboutPage" element={<AboutPage />} />
// //           <Route path="/ContactUs" element={<ContactUs />} />
// //           <Route path="/StoreReview" element={<StoreReview />} />
// //           <Route path="/ChangePassword" element={<ChangePasswordPage/>} />
// //           <Route path="/RequestPasswordResetPage" element={<RequestPasswordResetPage />} />
// // <Route path="/ResetPassword" element={<ResetPasswordPage />} />
// //           {/* <Route path="/Dropdown" element={<Inter />} /> Example route */}
// //           {/* <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/> */}
// //         </Routes>
// //       </Router> 
// //     </StoreProvider>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import Login from './LoginPage';
// import Inter from './Inter';
// import AboutPage from './AboutPage';
// import ContactUs from './ContactUs';
// import StoreReview from './StoreReview';
// import SignUpPage from './SignUp';
// import { StoreProvider } from "./StoreContext";
// import ChangePasswordPage from './ChangePassword';
// import RequestPasswordResetPage from './RequestPasswordResetPage';
// import ResetPasswordPage from './RequestPassword';
// import AdminDashboard from './AdminDashboard';
// import ManagerDashboard from './ManagerDashboard';
// import CashierDashboard from './CashierDashboard';
// import UserProfile from './UserProfile';
// import ProductDashboard from './ProductManagement';
// import StaffReplies from './StaffReplies';

// function App() {
//   return (
//     <StoreProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/LoginPage" element={<Login />} />
//           <Route path="/SignUp" element={<SignUpPage />} />
//           <Route path="/Inter/*" element={<Inter />} />
//           <Route path="/AboutPage" element={<AboutPage />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//           <Route path="/StoreReview" element={<StoreReview />} />
//           <Route path="/ChangePassword" element={<ChangePasswordPage />} />
//           <Route path="/RequestPasswordResetPage" element={<RequestPasswordResetPage />} />
//           <Route path="/reset_password" element={<ResetPasswordPage />} />
//           <Route path="/AdminDashboard" element={<AdminDashboard />} />
//           <Route path="/ManagerDashboard" element={<ManagerDashboard/>} />
//           <Route path="/CashierDashboard" element={<CashierDashboard />} />
//           <Route path="/ProductManagement" element={<ProductDashboard/>}/>
//     <Route path='/UserProfile' element={<UserProfile/>}/>
//     <Route path='/StaffReplies' element={<StaffReplies/>}/>

//         </Routes>
//       </Router>
//     </StoreProvider>
//   );
// }

// export default App;

import React from 'react';
import './input.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './LoginPage';
import Inter from './Inter';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';
import StoreReview from './StoreReview';
import SignUpPage from './SignUp';
import { StoreProvider } from "./StoreContext";
import ChangePasswordPage from './ChangePassword';
import RequestPasswordResetPage from './RequestPasswordResetPage';
import ResetPasswordPage from './RequestPassword';
import AdminDashboard from './AdminDashboard';
import ManagerDashboard from './ManagerDashboard';
import CashierDashboard from './CashierDashboard';
import UserProfile from './UserProfile';
import ProductDashboard from './ProductManagement';
import StaffReplies from './StaffReplies';

function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<Login />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Inter/*" element={<Inter />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/StoreReview" element={<StoreReview />} />
          <Route path="/ChangePassword" element={<ChangePasswordPage />} />
          <Route path="/RequestPasswordResetPage" element={<RequestPasswordResetPage />} />
          <Route path="/reset_password" element={<ResetPasswordPage />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
          <Route path="/CashierDashboard" element={<CashierDashboard />} />
          <Route path="/ProductManagement" element={<ProductDashboard />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/StaffReplies" element={<StaffReplies />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;