// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { Link } from 'react-router-dom';
// // // // // import logo from './images/logo.jpg';
// // // // // import b1 from './images/b1.jpg';

// // // // // const SignUpPage = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     fullName: '',
// // // // //     email: '',
// // // // //     password: '',
// // // // //     confirmPassword: '',
// // // // //     storeName: '',
// // // // //     storeAddress: '',
// // // // //     phoneNumber: '',
// // // // //     enableMFA: false,
// // // // //     agreeToTerms: false,
// // // // //   });

// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [storeId, setStoreId] = useState('');
// // // // //   const [showModal, setShowModal] = useState(false);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, type, checked } = e.target;
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);

// // // // //     const newErrors = {};
// // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // //     if (formData.password !== formData.confirmPassword) {
// // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // //     }
// // // // //     if (!formData.agreeToTerms) {
// // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // //     }

// // // // //     if (Object.keys(newErrors).length > 0) {
// // // // //       setErrors(newErrors);
// // // // //       setLoading(false);
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // // // //       setStoreId(response.data.storeId);
// // // // //       setShowModal(true);
// // // // //       setFormData({
// // // // //         fullName: '',
// // // // //         email: '',
// // // // //         password: '',
// // // // //         confirmPassword: '',
// // // // //         storeName: '',
// // // // //         storeAddress: '',
// // // // //         phoneNumber: '',
// // // // //         enableMFA: false,
// // // // //         agreeToTerms: false,
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       alert('Signup failed. Please try again.');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleTermsClick = () => {
// // // // //     window.open('/TermsAndConditions', '_blank');
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setShowModal(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="font-sans bg-gradient-to-r from-purple-600 to-blue-600 text-white">
// // // // //       <header className="flex justify-between items-center p-4 bg-gray-900">
// // // // //         <div className="flex items-center gap-4">
// // // // //           <Link to="/AboutPage">
// // // // //             <img src={logo} alt="Logo" className="w-12 h-12" />
// // // // //           </Link>
// // // // //           <nav className="flex gap-4">
// // // // //             <Link to="/" className="text-white hover:text-blue-300">Home</Link>
// // // // //             <Link to="/AboutPage" className="text-white hover:text-blue-300">About</Link>
// // // // //             <Link to="/ContactUs" className="text-white hover:text-blue-300">Contact</Link>
// // // // //           </nav>
// // // // //         </div>
// // // // //         <div className="flex gap-2">
// // // // //           <Link to="/LoginPage">
// // // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
// // // // //           </Link>
// // // // //           <Link to="/StoreReviews">
// // // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded">Leave a Review</button>
// // // // //           </Link>
// // // // //         </div>
// // // // //       </header>

// // // // //       <div className="flex justify-center items-center gap-12 p-12 min-h-screen flex-wrap">
// // // // //         <div className="flex-1 bg-black bg-opacity-60 shadow-lg rounded-lg p-8 text-center">
// // // // //           <h1 className="text-white text-4xl">Welcome to Your Business Journey</h1>
// // // // //           <p className="text-lg font-light my-4">
// // // // //             Simplify your freelance business setup. Register and start growing your business in no time.
// // // // //           </p>
// // // // //           <div className="mt-8">
// // // // //             <img src={b1} alt="Jonas Kim" className="w-96 h-96 rounded-full mx-auto" />
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
// // // // //           <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Account</h2>
// // // // //           <p className="text-gray-600 mb-6">Sign up and get started today</p>
// // // // //           <form onSubmit={handleSubmit}>
// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="fullName"
// // // // //                 name="fullName"
// // // // //                 value={formData.fullName}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your full name"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               />
// // // // //               {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
// // // // //             </div>

// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 id="email"
// // // // //                 name="email"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your email"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               />
// // // // //               {errors.email && <p className="text-red-500">{errors.email}</p>}
// // // // //             </div>

// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
// // // // //               <input
// // // // //                 type="password"
// // // // //                 id="password"
// // // // //                 name="password"
// // // // //                 value={formData.password}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your password"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               />
// // // // //               {errors.password && <p className="text-red-500">{errors.password}</p>}
// // // // //             </div>

// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
// // // // //               <input
// // // // //                 type="password"
// // // // //                 id="confirmPassword"
// // // // //                 name="confirmPassword"
// // // // //                 value={formData.confirmPassword}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Confirm your password"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               />
// // // // //               {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
// // // // //             </div>

// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="storeName" className="block text-gray-700 font-semibold mb-2">Store Name</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="storeName"
// // // // //                 name="storeName"
// // // // //                 value={formData.storeName}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your store name"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="storeAddress" className="block text-gray-700 font-semibold mb-2">Store Address (Optional)</label>
// // // // //               <textarea
// // // // //                 id="storeAddress"
// // // // //                 name="storeAddress"
// // // // //                 value={formData.storeAddress}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your store address"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               ></textarea>
// // // // //             </div>

// // // // //             <div className="mb-4">
// // // // //               <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 id="phoneNumber"
// // // // //                 name="phoneNumber"
// // // // //                 value={formData.phoneNumber}
// // // // //                 onChange={handleChange}
// // // // //                 placeholder="Enter your phone number"
// // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="mb-4 flex items-center">
// // // // //               <input
// // // // //                 type="checkbox"
// // // // //                 name="agreeToTerms"
// // // // //                 checked={formData.agreeToTerms}
// // // // //                 onChange={handleChange}
// // // // //                 className="mr-2"
// // // // //               />
// // // // //               <button type="button" onClick={handleTermsClick} className="text-blue-600 underline">Agree to Terms and Conditions</button>
// // // // //               {errors.agreeToTerms && <p className="text-red-500">{errors.agreeToTerms}</p>}
// // // // //             </div>

// // // // //             <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg w-full hover:bg-pink-600">
// // // // //               {loading ? 'Signing Up...' : 'Sign Up Now'}
// // // // //             </button>
// // // // //           </form>

// // // // //           <p className="mt-4 text-center">
// // // // //             Already have an account?{' '}
// // // // //             <Link to="/LoginPage" className="text-blue-600 underline">Login Here</Link>
// // // // //           </p>
// // // // //         </div>
// // // // //       </div>

// // // // //       {showModal && (
// // // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
// // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // // //             <h3 className="text-lg font-bold">Signup Successful!</h3>
// // // // //             <p>Your store has been created successfully. Your unique store ID is:</p>
// // // // //             <div className="font-bold text-xl text-gray-800 my-2">{storeId}</div>
// // // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={closeModal}>Close</button>
// // // // //             <Link to="/LoginPage2">
// // // // //               <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Back to Login</button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignUpPage;
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { Link } from 'react-router-dom';
// // // // import logo from './images/logo.jpg';
// // // // import b1 from './images/b1.jpg';

// // // // const SignUpPage = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     password: '',
// // // //     confirmPassword: '',
// // // //     storeName: '',
// // // //     storeAddress: '',
// // // //     phoneNumber: '',
// // // //     enableMFA: false,
// // // //     agreeToTerms: false,
// // // //   });

// // // //   const [errors, setErrors] = useState({});
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [storeId, setStoreId] = useState('');
// // // //   const [showModal, setShowModal] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: type === 'checkbox' ? checked : value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);

// // // //     const newErrors = {};
// // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // //     if (formData.password !== formData.confirmPassword) {
// // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // //     }
// // // //     if (!formData.agreeToTerms) {
// // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // //     }

// // // //     if (Object.keys(newErrors).length > 0) {
// // // //       setErrors(newErrors);
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // // //       setStoreId(response.data.storeId);
// // // //       setShowModal(true);
// // // //       setFormData({
// // // //         fullName: '',
// // // //         email: '',
// // // //         password: '',
// // // //         confirmPassword: '',
// // // //         storeName: '',
// // // //         storeAddress: '',
// // // //         phoneNumber: '',
// // // //         enableMFA: false,
// // // //         agreeToTerms: false,
// // // //       });
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert('Signup failed. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleTermsClick = () => {
// // // //     window.open('/TermsAndConditions', '_blank');
// // // //   };

// // // //   const closeModal = () => {
// // // //     setShowModal(false);
// // // //   };

// // // //   return (
// // // //     <div className="font-sans bg-gradient-to-r from-purple-600 to-blue-600 text-white">
// // // //       <header className="flex justify-between items-center p-4 bg-gray-900">
// // // //         <div className="flex items-center gap-4">
// // // //           <Link to="/AboutPage">
// // // //             <img src={logo} alt="Logo" className="w-12 h-12" />
// // // //           </Link>
// // // //           <nav className="flex gap-4">
// // // //             <Link to="/" className="text-white hover:text-blue-300">Home</Link>
// // // //             <Link to="/AboutPage" className="text-white hover:text-blue-300">About</Link>
// // // //             <Link to="/ContactUs" className="text-white hover:text-blue-300">Contact</Link>
// // // //           </nav>
// // // //         </div>
// // // //         <div className="flex gap-2">
// // // //           <Link to="/LoginPage">
// // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
// // // //           </Link>
// // // //           <Link to="/StoreReviews">
// // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded">Leave a Review</button>
// // // //           </Link>
// // // //         </div>
// // // //       </header>

// // // //       <div className="flex justify-center items-center gap-12 p-12 min-h-screen flex-wrap">
// // // //         <div className="flex-1 bg-black bg-opacity-60 shadow-lg rounded-lg p-8 text-center">
// // // //           <h1 className="text-white text-4xl">Welcome to Your Business Journey</h1>
// // // //           <p className="text-lg font-light my-4">
// // // //             Simplify your freelance business setup. Register and start growing your business in no time.
// // // //           </p>
// // // //           <div className="mt-8">
// // // //             <img src={b1} alt="Jonas Kim" className="w-96 h-96 rounded-full mx-auto" />
// // // //           </div>
// // // //         </div>

// // // //         <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
// // // //           <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Account</h2>
// // // //           <p className="text-gray-600 mb-6">Sign up and get started today</p>
// // // //           <form onSubmit={handleSubmit}>
// // // //             <div className="mb-4">
// // // //               <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="fullName"
// // // //                 name="fullName"
// // // //                 value={formData.fullName}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your full name"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               />
// // // //               {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 id="email"
// // // //                 name="email"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your email"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               />
// // // //               {errors.email && <p className="text-red-500">{errors.email}</p>}
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 id="password"
// // // //                 name="password"
// // // //                 value={formData.password}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your password"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               />
// // // //               {errors.password && <p className="text-red-500">{errors.password}</p>}
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
// // // //               <input
// // // //                 type="password"
// // // //                 id="confirmPassword"
// // // //                 name="confirmPassword"
// // // //                 value={formData.confirmPassword}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Confirm your password"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               />
// // // //               {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label htmlFor="storeName" className="block text-gray-700 font-semibold mb-2">Store Name</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="storeName"
// // // //                 name="storeName"
// // // //                 value={formData.storeName}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your store name"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               />
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label htmlFor="storeAddress" className="block text-gray-700 font-semibold mb-2">Store Address (Optional)</label>
// // // //               <textarea
// // // //                 id="storeAddress"
// // // //                 name="storeAddress"
// // // //                 value={formData.storeAddress}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your store address"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               ></textarea>
// // // //             </div>

// // // //             <div className="mb-4">
// // // //               <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
// // // //               <input
// // // //                 type="text"
// // // //                 id="phoneNumber"
// // // //                 name="phoneNumber"
// // // //                 value={formData.phoneNumber}
// // // //                 onChange={handleChange}
// // // //                 placeholder="Enter your phone number"
// // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 text-gray-800"
// // // //               />
// // // //             </div>

// // // //             <div className="mb-4 flex items-center">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 name="agreeToTerms"
// // // //                 checked={formData.agreeToTerms}
// // // //                 onChange={handleChange}
// // // //                 className="mr-2"
// // // //               />
// // // //               <button type="button" onClick={handleTermsClick} className="text-blue-600 underline">Agree to Terms and Conditions</button>
// // // //               {errors.agreeToTerms && <p className="text-red-500 ml-2">{errors.agreeToTerms}</p>}
// // // //             </div>

// // // //             <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg w-full hover:bg-pink-600">
// // // //               {loading ? 'Signing Up...' : 'Sign Up Now'}
// // // //             </button>
// // // //           </form>

// // // //           <p className="mt-4 text-center text-gray-800">
// // // //             Already have an account?{' '}
// // // //             <Link to="/LoginPage" className="text-blue-600 underline">Login Here</Link>
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       {showModal && (
// // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
// // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
// // // //             <h3 className="text-lg font-bold text-gray-800">Signup Successful!</h3>
// // // //             <p className="text-gray-800">Your store has been created successfully. Your unique store ID is:</p>
// // // //             <div className="font-bold text-xl text-gray-800 my-2">{storeId}</div>
// // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2" onClick={closeModal}>Close</button>
// // // //             <Link to="/LoginPage2">
// // // //               <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 ml-2">Back to Login</button>
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignUpPage;
// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { Link } from 'react-router-dom';
// // // // import logo from './images/logo.jpg';
// // // // import b1 from './images/b1.jpg';

// // // // const SignUpPage = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     password: '',
// // // //     confirmPassword: '',
// // // //     storeName: '',
// // // //     storeAddress: '',
// // // //     phoneNumber: '',
// // // //     enableMFA: false,
// // // //     agreeToTerms: false,
// // // //   });

// // // //   const [errors, setErrors] = useState({});
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [storeId, setStoreId] = useState('');
// // // //   const [showModal, setShowModal] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: type === 'checkbox' ? checked : value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);

// // // //     const newErrors = {};
// // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // //     if (formData.password !== formData.confirmPassword) {
// // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // //     }
// // // //     if (!formData.agreeToTerms) {
// // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // //     }

// // // //     if (Object.keys(newErrors).length > 0) {
// // // //       setErrors(newErrors);
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // // //       setStoreId(response.data.storeId);
// // // //       setShowModal(true);
// // // //       setFormData({
// // // //         fullName: '',
// // // //         email: '',
// // // //         password: '',
// // // //         confirmPassword: '',
// // // //         storeName: '',
// // // //         storeAddress: '',
// // // //         phoneNumber: '',
// // // //         enableMFA: false,
// // // //         agreeToTerms: false,
// // // //       });
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert('Signup failed. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleTermsClick = () => {
// // // //     window.open('/TermsAndConditions', '_blank');
// // // //   };

// // // //   const closeModal = () => {
// // // //     setShowModal(false);
// // // //   };

// // // //   return (
// // // //     <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
// // // //       {/* Header */}
// // // //       <header className="flex justify-between items-center p-4 bg-white shadow-sm">
// // // //         <div className="flex items-center gap-6">
// // // //           <Link to="/AboutPage" className="flex items-center">
// // // //             <img src={logo} alt="Logo" className="w-10 h-10 rounded" />
// // // //             <span className="ml-2 font-semibold text-gray-800 text-lg">Business Portal</span>
// // // //           </Link>
// // // //           <nav className="flex gap-6">
// // // //             <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
// // // //             <Link to="/AboutPage" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
// // // //             <Link to="/ContactUs" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
// // // //           </nav>
// // // //         </div>
// // // //         <div className="flex gap-3">
// // // //           <Link to="/LoginPage">
// // // //             <button className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium">Login</button>
// // // //           </Link>
// // // //           <Link to="/StoreReviews">
// // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">Reviews</button>
// // // //           </Link>
// // // //         </div>
// // // //       </header>

// // // //       {/* Main Content */}
// // // //       <div className="max-w-6xl mx-auto p-6 mt-10 mb-16">
// // // //         <div className="flex flex-wrap md:flex-nowrap gap-10 bg-white rounded-xl shadow-lg overflow-hidden">
// // // //           {/* Left Side - Info */}
// // // //           <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white flex flex-col justify-between">
// // // //             <div className="space-y-6">
// // // //               <h1 className="text-3xl font-bold leading-tight">Start Your Business Journey Today</h1>
// // // //               <p className="text-blue-100">
// // // //                 Create your account and gain access to our comprehensive business management platform designed for freelancers and small business owners.
// // // //               </p>
              
// // // //               <div className="pt-4">
// // // //                 <h3 className="font-semibold text-xl mb-2">Why join us?</h3>
// // // //                 <ul className="space-y-2">
// // // //                   <li className="flex items-center">
// // // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // // //                     </svg>
// // // //                     Easy client management
// // // //                   </li>
// // // //                   <li className="flex items-center">
// // // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // // //                     </svg>
// // // //                     Simplified invoicing
// // // //                   </li>
// // // //                   <li className="flex items-center">
// // // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // // //                     </svg>
// // // //                     Business growth tools
// // // //                   </li>
// // // //                 </ul>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="mt-8 flex justify-center">
// // // //               <img src={b1} alt="Business Owner" className="w-40 h-40 rounded-full object-cover border-4 border-white/30" />
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Right Side - Form */}
// // // //           <div className="w-full md:w-3/5 p-8">
// // // //             <h2 className="text-2xl font-bold text-gray-800 mb-1">Create Your Account</h2>
// // // //             <p className="text-gray-500 mb-6 text-sm">Fill out the form below to get started</p>
            
// // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                 <div>
// // // //                   <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
// // // //                   <input
// // // //                     type="text"
// // // //                     id="fullName"
// // // //                     name="fullName"
// // // //                     value={formData.fullName}
// // // //                     onChange={handleChange}
// // // //                     placeholder="John Doe"
// // // //                     className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                   />
// // // //                   {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
// // // //                 </div>

// // // //                 <div>
// // // //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
// // // //                   <input
// // // //                     type="email"
// // // //                     id="email"
// // // //                     name="email"
// // // //                     value={formData.email}
// // // //                     onChange={handleChange}
// // // //                     placeholder="your@email.com"
// // // //                     className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                   />
// // // //                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
// // // //                 </div>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                 <div>
// // // //                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
// // // //                   <input
// // // //                     type="password"
// // // //                     id="password"
// // // //                     name="password"
// // // //                     value={formData.password}
// // // //                     onChange={handleChange}
// // // //                     placeholder="••••••••"
// // // //                     className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                   />
// // // //                   {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
// // // //                 </div>

// // // //                 <div>
// // // //                   <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password*</label>
// // // //                   <input
// // // //                     type="password"
// // // //                     id="confirmPassword"
// // // //                     name="confirmPassword"
// // // //                     value={formData.confirmPassword}
// // // //                     onChange={handleChange}
// // // //                     placeholder="••••••••"
// // // //                     className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                   />
// // // //                   {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
// // // //                 </div>
// // // //               </div>

// // // //               <div>
// // // //                 <label htmlFor="storeName" className="block text-sm font-medium text-gray-700 mb-1">Business/Store Name*</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="storeName"
// // // //                   name="storeName"
// // // //                   value={formData.storeName}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Your Business Name"
// // // //                   className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                 />
// // // //               </div>

// // // //               <div>
// // // //                 <label htmlFor="storeAddress" className="block text-sm font-medium text-gray-700 mb-1">Business Address (Optional)</label>
// // // //                 <textarea
// // // //                   id="storeAddress"
// // // //                   name="storeAddress"
// // // //                   value={formData.storeAddress}
// // // //                   onChange={handleChange}
// // // //                   placeholder="123 Business St, City, State, Zip"
// // // //                   rows="2"
// // // //                   className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                 ></textarea>
// // // //               </div>

// // // //               <div>
// // // //                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="phoneNumber"
// // // //                   name="phoneNumber"
// // // //                   value={formData.phoneNumber}
// // // //                   onChange={handleChange}
// // // //                   placeholder="(123) 456-7890"
// // // //                   className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 text-sm"
// // // //                 />
// // // //               </div>

// // // //               <div className="flex items-center mb-1">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   id="enableMFA"
// // // //                   name="enableMFA"
// // // //                   checked={formData.enableMFA}
// // // //                   onChange={handleChange}
// // // //                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// // // //                 />
// // // //                 <label htmlFor="enableMFA" className="ml-2 text-sm text-gray-600">
// // // //                   Enable two-factor authentication for added security
// // // //                 </label>
// // // //               </div>

// // // //               <div className="flex items-center">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   id="agreeToTerms"
// // // //                   name="agreeToTerms"
// // // //                   checked={formData.agreeToTerms}
// // // //                   onChange={handleChange}
// // // //                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// // // //                 />
// // // //                 <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
// // // //                   I agree to the <button type="button" onClick={handleTermsClick} className="text-blue-600 underline">Terms and Conditions</button>
// // // //                 </label>
// // // //                 {errors.agreeToTerms && <p className="text-red-500 text-xs ml-2">{errors.agreeToTerms}</p>}
// // // //               </div>

// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
// // // //               >
// // // //                 {loading ? (
// // // //                   <span className="flex items-center justify-center">
// // // //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // //                     </svg>
// // // //                     Creating Account...
// // // //                   </span>
// // // //                 ) : (
// // // //                   'Create Account'
// // // //                 )}
// // // //               </button>
// // // //             </form>

// // // //             <div className="mt-6 text-center">
// // // //               <p className="text-sm text-gray-600">
// // // //                 Already have an account?{' '}
// // // //                 <Link to="/LoginPage" className="text-blue-600 hover:underline font-medium">Sign in</Link>
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Success Modal */}
// // // //       {showModal && (
// // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
// // // //           <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
// // // //             <div className="text-center">
// // // //               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
// // // //                 <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
// // // //                 </svg>
// // // //               </div>
// // // //               <h3 className="text-lg font-medium text-gray-900 mb-2">Registration Successful!</h3>
// // // //               <p className="text-sm text-gray-600 mb-4">Your business account has been created. Here's your unique store ID:</p>
// // // //               <div className="bg-gray-100 font-mono text-sm py-2 px-4 rounded-md mb-4">{storeId}</div>
// // // //               <p className="text-xs text-gray-500 mb-4">Keep this ID safe. You'll need it for future reference.</p>
// // // //               <div className="flex justify-center space-x-3">
// // // //                 <button
// // // //                   className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
// // // //                   onClick={closeModal}
// // // //                 >
// // // //                   Close
// // // //                 </button>
// // // //                 <Link to="/LoginPage2">
// // // //                   <button
// // // //                     className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
// // // //                   >
// // // //                     Go to Login
// // // //                   </button>
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignUpPage;

// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { Link } from 'react-router-dom';
// // // // import logo from './images/logo.jpg';
// // // // import b1 from './images/b1.jpg';

// // // // const SignUpPage = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     password: '',
// // // //     confirmPassword: '',
// // // //     storeName: '',
// // // //     storeAddress: '',
// // // //     phoneNumber: '',
// // // //     enableMFA: false,
// // // //     agreeToTerms: false,
// // // //   });

// // // //   const [errors, setErrors] = useState({});
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [storeId, setStoreId] = useState('');
// // // //   const [showModal, setShowModal] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: type === 'checkbox' ? checked : value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);

// // // //     const newErrors = {};
// // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // //     if (formData.password !== formData.confirmPassword) {
// // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // //     }
// // // //     if (!formData.agreeToTerms) {
// // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // //     }

// // // //     if (Object.keys(newErrors).length > 0) {
// // // //       setErrors(newErrors);
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // // //       setStoreId(response.data.storeId);
// // // //       setShowModal(true);
// // // //       setFormData({
// // // //         fullName: '',
// // // //         email: '',
// // // //         password: '',
// // // //         confirmPassword: '',
// // // //         storeName: '',
// // // //         storeAddress: '',
// // // //         phoneNumber: '',
// // // //         enableMFA: false,
// // // //         agreeToTerms: false,
// // // //       });
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert('Signup failed. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleTermsClick = () => {
// // // //     window.open('/TermsAndConditions', '_blank');
// // // //   };

// // // //   const closeModal = () => {
// // // //     setShowModal(false);
// // // //   };

// // // //   return (
// // // //     <div className="font-sans bg-gradient-to-r from-purple-100 to-blue-100 text-gray-800 min-h-screen">
// // // //       <header className="flex justify-between items-center p-4 bg-white shadow-md">
// // // //         <div className="flex items-center gap-4">
// // // //           <Link to="/AboutPage">
// // // //             <img src={logo} alt="Logo" className="w-12 h-12 rounded-md shadow border border-gray-200" />
// // // //           </Link>
// // // //           <nav className="flex gap-6">
// // // //             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
// // // //             <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
// // // //             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
// // // //           </nav>
// // // //         </div>
// // // //         <div className="flex gap-3">
// // // //           <Link to="/LoginPage">
// // // //             <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors">Login</button>
// // // //           </Link>
// // // //           <Link to="/StoreReviews">
// // // //             <button className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition-colors">Leave a Review</button>
// // // //           </Link>
// // // //         </div>
// // // //       </header>

// // // //       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
// // // //         <div className="flex flex-col md:flex-row gap-8 items-start">
// // // //           {/* Left Column - Info */}
// // // //           <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl shadow-lg overflow-hidden text-white">
// // // //             <div className="p-8">
// // // //               <h1 className="text-4xl font-bold mb-4">Welcome to Your Business Journey</h1>
// // // //               <div className="h-1 w-24 bg-white mb-6"></div>
// // // //               <p className="text-lg font-light mb-8">
// // // //                 Simplify your freelance business setup. Register and start growing your business in no time.
// // // //               </p>
              
// // // //               <div className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8">
// // // //                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
// // // //                 <ul className="space-y-3">
// // // //                   <li className="flex items-center gap-3">
// // // //                     <div className="bg-white text-purple-600 rounded-full p-1">
// // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                       </svg>
// // // //                     </div>
// // // //                     Easy business management
// // // //                   </li>
// // // //                   <li className="flex items-center gap-3">
// // // //                     <div className="bg-white text-purple-600 rounded-full p-1">
// // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                       </svg>
// // // //                     </div>
// // // //                     Customer management tools
// // // //                   </li>
// // // //                   <li className="flex items-center gap-3">
// // // //                     <div className="bg-white text-purple-600 rounded-full p-1">
// // // //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                       </svg>
// // // //                     </div>
// // // //                     Grow your business faster
// // // //                   </li>
// // // //                 </ul>
// // // //               </div>
// // // //             </div>
            
// // // //             <div className="flex justify-center pb-8">
// // // //               <img 
// // // //                 src={b1} 
// // // //                 alt="Jonas Kim" 
// // // //                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
// // // //               />
// // // //             </div>
// // // //           </div>
          
// // // //           {/* Right Column - Form */}
// // // //           <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8">
// // // //             <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
// // // //             <p className="text-gray-500 mb-8">Sign up and get started today</p>
            
// // // //             <form onSubmit={handleSubmit} className="space-y-5">
// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // // //                 <div>
// // // //                   <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
// // // //                   <input
// // // //                     type="text"
// // // //                     id="fullName"
// // // //                     name="fullName"
// // // //                     value={formData.fullName}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Enter your full name"
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                   />
// // // //                   {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// // // //                 </div>

// // // //                 <div>
// // // //                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
// // // //                   <input
// // // //                     type="email"
// // // //                     id="email"
// // // //                     name="email"
// // // //                     value={formData.email}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Enter your email"
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                   />
// // // //                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// // // //                 </div>
// // // //               </div>

// // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // // //                 <div>
// // // //                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
// // // //                   <input
// // // //                     type="password"
// // // //                     id="password"
// // // //                     name="password"
// // // //                     value={formData.password}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Enter your password"
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                   />
// // // //                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// // // //                 </div>

// // // //                 <div>
// // // //                   <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
// // // //                   <input
// // // //                     type="password"
// // // //                     id="confirmPassword"
// // // //                     name="confirmPassword"
// // // //                     value={formData.confirmPassword}
// // // //                     onChange={handleChange}
// // // //                     placeholder="Confirm your password"
// // // //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                   />
// // // //                   {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
// // // //                 </div>
// // // //               </div>

// // // //               <div>
// // // //                 <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="storeName"
// // // //                   name="storeName"
// // // //                   value={formData.storeName}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Enter your store name"
// // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                 />
// // // //               </div>

// // // //               <div>
// // // //                 <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
// // // //                 <textarea
// // // //                   id="storeAddress"
// // // //                   name="storeAddress"
// // // //                   value={formData.storeAddress}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Enter your store address"
// // // //                   rows="2"
// // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                 ></textarea>
// // // //               </div>

// // // //               <div>
// // // //                 <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
// // // //                 <input
// // // //                   type="text"
// // // //                   id="phoneNumber"
// // // //                   name="phoneNumber"
// // // //                   value={formData.phoneNumber}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Enter your phone number"
// // // //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // // //                 />
// // // //               </div>

// // // //               <div className="flex items-center">
// // // //                 <input
// // // //                   type="checkbox"
// // // //                   id="agreeToTerms"
// // // //                   name="agreeToTerms"
// // // //                   checked={formData.agreeToTerms}
// // // //                   onChange={handleChange}
// // // //                   className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
// // // //                 />
// // // //                 <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
// // // //                   I agree to the 
// // // //                   <button 
// // // //                     type="button" 
// // // //                     onClick={handleTermsClick} 
// // // //                     className="text-blue-600 hover:text-blue-800 underline ml-1"
// // // //                   >
// // // //                     Terms and Conditions
// // // //                   </button>
// // // //                 </label>
// // // //                 {errors.agreeToTerms && <p className="text-red-500 ml-2 text-sm">{errors.agreeToTerms}</p>}
// // // //               </div>

// // // //               <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
// // // //                 {loading ? 'Signing Up...' : 'Sign Up Now'}
// // // //               </button>
// // // //             </form>

// // // //             <p className="mt-6 text-center text-gray-700">
// // // //               Already have an account?{' '}
// // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Login Here</Link>
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Success Modal */}
// // // //       {showModal && (
// // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
// // // //           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
// // // //             <div className="text-center">
// // // //               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // // //                 </svg>
// // // //               </div>
// // // //               <h3 className="text-xl font-bold text-gray-800 mb-2">Signup Successful!</h3>
// // // //               <p className="text-gray-600 mb-4">Your store has been created successfully. Your unique store ID is:</p>
// // // //               <div className="bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 font-mono text-lg text-gray-800 mb-4">{storeId}</div>
// // // //               <p className="text-gray-500 text-sm mb-6">Please save this ID for your records.</p>
// // // //               <div className="flex gap-3 justify-center">
// // // //                 <button 
// // // //                   className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition-colors" 
// // // //                   onClick={closeModal}
// // // //                 >
// // // //                   Close
// // // //                 </button>
// // // //                 <Link to="/LoginPage2">
// // // //                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors">
// // // //                     Back to Login
// // // //                   </button>
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignUpPage;
// // // // // import React, { useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { Link } from 'react-router-dom';
// // // // // import logo from './images/logo.jpg';
// // // // // import b1 from './images/b1.jpg';

// // // // // const SignUpPage = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     fullName: '',
// // // // //     email: '',
// // // // //     password: '',
// // // // //     confirmPassword: '',
// // // // //     storeName: '',
// // // // //     storeAddress: '',
// // // // //     phoneNumber: '',
// // // // //     enableMFA: false,
// // // // //     agreeToTerms: false,
// // // // //   });

// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [storeId, setStoreId] = useState('');
// // // // //   const [showModal, setShowModal] = useState(false);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, type, checked } = e.target;
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);

// // // // //     const newErrors = {};
// // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // //     if (formData.password !== formData.confirmPassword) {
// // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // //     }
// // // // //     if (!formData.agreeToTerms) {
// // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // //     }

// // // // //     if (Object.keys(newErrors).length > 0) {
// // // // //       setErrors(newErrors);
// // // // //       setLoading(false);
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // // // //       setStoreId(response.data.storeId);
// // // // //       setShowModal(true);
// // // // //       setFormData({
// // // // //         fullName: '',
// // // // //         email: '',
// // // // //         password: '',
// // // // //         confirmPassword: '',
// // // // //         storeName: '',
// // // // //         storeAddress: '',
// // // // //         phoneNumber: '',
// // // // //         enableMFA: false,
// // // // //         agreeToTerms: false,
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       alert('Signup failed. Please try again.');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleTermsClick = () => {
// // // // //     window.open('/TermsAndConditions', '_blank');
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setShowModal(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
// // // // //       <header className="bg-white shadow-sm py-4 px-6">
// // // // //         <div className="container mx-auto flex justify-between items-center">
// // // // //           <div className="flex items-center gap-6">
// // // // //             <Link to="/AboutPage" className="flex items-center">
// // // // //               <img src={logo} alt="Logo" className="w-10 h-10 rounded" />
// // // // //               <span className="ml-2 text-xl font-medium text-blue-600">BusinessHub</span>
// // // // //             </Link>
// // // // //             <nav className="hidden md:flex gap-6">
// // // // //               <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
// // // // //               <Link to="/AboutPage" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
// // // // //               <Link to="/ContactUs" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
// // // // //             </nav>
// // // // //           </div>
// // // // //           <div className="flex gap-3">
// // // // //             <Link to="/LoginPage">
// // // // //               <button className="text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg font-medium">Login</button>
// // // // //             </Link>
// // // // //             <Link to="/StoreReviews">
// // // // //               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">Reviews</button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       <div className="container mx-auto px-4 py-12">
// // // // //         <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
// // // // //           <div className="w-full md:w-5/12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
// // // // //             <h1 className="text-3xl font-bold mb-4">Build Your Business</h1>
// // // // //             <p className="text-lg opacity-90 mb-6">
// // // // //               Join thousands of entrepreneurs who've simplified their business management with our platform.
// // // // //             </p>
// // // // //             <div className="space-y-4 mb-8">
// // // // //               <div className="flex items-start">
// // // // //                 <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // // //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                 </div>
// // // // //                 <p>Easy setup in minutes</p>
// // // // //               </div>
// // // // //               <div className="flex items-start">
// // // // //                 <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // // //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                 </div>
// // // // //                 <p>Integrated payment solutions</p>
// // // // //               </div>
// // // // //               <div className="flex items-start">
// // // // //                 <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // // //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                 </div>
// // // // //                 <p>24/7 customer support</p>
// // // // //               </div>
// // // // //             </div>
// // // // //             <div className="mt-auto">
// // // // //               <img src={b1} alt="Business Success" className="w-32 h-32 rounded-full mx-auto border-4 border-white border-opacity-30" />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="w-full md:w-7/12 bg-white rounded-xl shadow-lg p-8">
// // // // //             <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Account</h2>
// // // // //             <p className="text-gray-500 mb-6">Fill in your details to get started</p>
            
// // // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //                 <div>
// // // // //                   <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">Full Name*</label>
// // // // //                   <input
// // // // //                     type="text"
// // // // //                     id="fullName"
// // // // //                     name="fullName"
// // // // //                     value={formData.fullName}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="John Doe"
// // // // //                     className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                   />
// // // // //                   {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
// // // // //                 </div>
                
// // // // //                 <div>
// // // // //                   <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address*</label>
// // // // //                   <input
// // // // //                     type="email"
// // // // //                     id="email"
// // // // //                     name="email"
// // // // //                     value={formData.email}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="your@email.com"
// // // // //                     className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                   />
// // // // //                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //                 <div>
// // // // //                   <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password*</label>
// // // // //                   <input
// // // // //                     type="password"
// // // // //                     id="password"
// // // // //                     name="password"
// // // // //                     value={formData.password}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="••••••••"
// // // // //                     className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                   />
// // // // //                   {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
// // // // //                 </div>
                
// // // // //                 <div>
// // // // //                   <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1">Confirm Password*</label>
// // // // //                   <input
// // // // //                     type="password"
// // // // //                     id="confirmPassword"
// // // // //                     name="confirmPassword"
// // // // //                     value={formData.confirmPassword}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="••••••••"
// // // // //                     className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                   />
// // // // //                   {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
// // // // //                 </div>
// // // // //               </div>
              
// // // // //               <div>
// // // // //                 <label htmlFor="storeName" className="block text-gray-700 text-sm font-medium mb-1">Business/Store Name*</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="storeName"
// // // // //                   name="storeName"
// // // // //                   value={formData.storeName}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="Your Business Name"
// // // // //                   className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                 />
// // // // //               </div>
              
// // // // //               <div>
// // // // //                 <label htmlFor="storeAddress" className="block text-gray-700 text-sm font-medium mb-1">Business Address (Optional)</label>
// // // // //                 <textarea
// // // // //                   id="storeAddress"
// // // // //                   name="storeAddress"
// // // // //                   value={formData.storeAddress}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="123 Business Street, City, State, ZIP"
// // // // //                   rows="2"
// // // // //                   className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                 ></textarea>
// // // // //               </div>
              
// // // // //               <div>
// // // // //                 <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   id="phoneNumber"
// // // // //                   name="phoneNumber"
// // // // //                   value={formData.phoneNumber}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="(123) 456-7890"
// // // // //                   className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // //                 />
// // // // //               </div>
              
// // // // //               <div className="flex items-center">
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   id="enableMFA"
// // // // //                   name="enableMFA"
// // // // //                   checked={formData.enableMFA}
// // // // //                   onChange={handleChange}
// // // // //                   className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
// // // // //                 />
// // // // //                 <label htmlFor="enableMFA" className="ml-2 text-sm text-gray-700">Enable two-factor authentication (recommended)</label>
// // // // //               </div>
              
// // // // //               <div className="flex items-center">
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   id="agreeToTerms"
// // // // //                   name="agreeToTerms"
// // // // //                   checked={formData.agreeToTerms}
// // // // //                   onChange={handleChange}
// // // // //                   className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
// // // // //                 />
// // // // //                 <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
// // // // //                   I agree to the <button type="button" onClick={handleTermsClick} className="text-blue-600 underline">Terms and Conditions</button>
// // // // //                 </label>
// // // // //               </div>
// // // // //               {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms}</p>}
              
// // // // //               <button 
// // // // //                 type="submit" 
// // // // //                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
// // // // //                 disabled={loading}
// // // // //               >
// // // // //                 {loading ? (
// // // // //                   <>
// // // // //                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                     </svg>
// // // // //                     Creating Your Account...
// // // // //                   </>
// // // // //                 ) : 'Create Account'}
// // // // //               </button>
              
// // // // //               <p className="text-center text-gray-600 text-sm mt-4">
// // // // //                 Already have an account?{' '}
// // // // //                 <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Log in</Link>
// // // // //               </p>
// // // // //             </form>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {showModal && (
// // // // //         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
// // // // //           <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full mx-4">
// // // // //             <div className="text-center">
// // // // //               <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
// // // // //                 <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // // // //                 </svg>
// // // // //               </div>
// // // // //               <h3 className="text-lg font-medium text-gray-900 mb-2">Account Created Successfully!</h3>
// // // // //               <p className="text-gray-600 mb-4">Your business account has been created. Here's your unique store ID:</p>
// // // // //               <div className="bg-gray-100 rounded-lg py-3 px-4 text-xl font-mono font-medium text-gray-800 mb-4">{storeId}</div>
// // // // //               <p className="text-sm text-gray-500 mb-4">Please save this ID for your records. You'll need it to access your business dashboard.</p>
// // // // //               <div className="flex space-x-3 justify-center">
// // // // //                 <button 
// // // // //                   onClick={closeModal} 
// // // // //                   className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
// // // // //                 >
// // // // //                   Close
// // // // //                 </button>
// // // // //                 <Link to="/LoginPage2">
// // // // //                   <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
// // // // //                     Proceed to Login
// // // // //                   </button>
// // // // //                 </Link>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignUpPage;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import logo from './images/logo.jpg';
// // // // // // // import b1 from './images/b1.jpg';

// // // // // // // const SignUpPage = () => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     fullName: '',
// // // // // // //     email: '',
// // // // // // //     password: '',
// // // // // // //     confirmPassword: '',
// // // // // // //     storeName: '',
// // // // // // //     storeAddress: '',
// // // // // // //     phoneNumber: '',
// // // // // // //     enableMFA: false,
// // // // // // //     agreeToTerms: false,
// // // // // // //   });

// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [storeId, setStoreId] = useState('');
// // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value, type, checked } = e.target;
// // // // // // //     setFormData((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setLoading(true);

// // // // // // //     const newErrors = {};
// // // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // // //     }
// // // // // // //     if (!formData.agreeToTerms) {
// // // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // // //     }

// // // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // // //       setErrors(newErrors);
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify(formData),
// // // // // // //       });
// // // // // // //       const data = await response.json();
// // // // // // //       setStoreId(data.storeId);
// // // // // // //       setShowModal(true);
// // // // // // //       setFormData({
// // // // // // //         fullName: '',
// // // // // // //         email: '',
// // // // // // //         password: '',
// // // // // // //         confirmPassword: '',
// // // // // // //         storeName: '',
// // // // // // //         storeAddress: '',
// // // // // // //         phoneNumber: '',
// // // // // // //         enableMFA: false,
// // // // // // //         agreeToTerms: false,
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       alert('Signup failed. Please try again.');
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="font-sans min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white animate-fadeIn">
// // // // // // //       <header className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md animate-fadeIn">
// // // // // // //         <div className="flex items-center gap-5">
// // // // // // //           <div className="w-12 h-12 transform hover:scale-105 transition-transform">
// // // // // // //             <Link to="/AboutPage">
// // // // // // //               <img src={logo} alt="Logo" className="w-full h-full" />
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //           <nav className="flex gap-4">
// // // // // // //             <Link to="/" className="text-blue-600 text-base no-underline hover:text-blue-800 transition-colors">Home</Link>
// // // // // // //             <Link to="/AboutPage" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">About</Link>
// // // // // // //             <Link to="/ContactUs" className="text-gray-700 text-base no-underline hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // //           </nav>
// // // // // // //         </div>
// // // // // // //         <div className="flex gap-3">
// // // // // // //           {['SignUp', 'Login', 'Leave a Review'].map((text, index) => (
// // // // // // //             <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // //               <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm 
// // // // // // //                 hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // // //                 shadow-md hover:shadow-lg">
// // // // // // //                 {text}
// // // // // // //               </button>
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </header>

// // // // // // //       <div className="flex justify-center items-center gap-12 p-12 min-h-screen flex-wrap">
// // // // // // //         <div className="flex-1 bg-black bg-opacity-60 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300 animate-slideInLeft">
// // // // // // //           <h1 className="text-white text-4xl animate-fadeIn">Welcome to Your Business Journey</h1>
// // // // // // //           <p className="text-lg font-light my-4 animate-fadeIn delay-200">
// // // // // // //             Simplify your freelance business setup. Register and start growing your business in no time.
// // // // // // //           </p>
// // // // // // //           <div className="mt-8 transform hover:rotate-2 transition-transform duration-300">
// // // // // // //             <img src={b1} alt="Jonas Kim" className="w-96 h-96 rounded-full mx-auto animate-pulse" />
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="flex-1 bg-white rounded-lg shadow-lg p-8 transform hover:shadow-2xl transition-all duration-300 animate-slideInRight">
// // // // // // //           <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Account</h2>
// // // // // // //           <p className="text-gray-600 mb-6">Sign up and get started today</p>
// // // // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //             {/* Form fields with hover animations */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 name="fullName"
// // // // // // //                 value={formData.fullName}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-200"
// // // // // // //                 placeholder="Enter your full name"
// // // // // // //               />
// // // // // // //               {errors.fullName && <p className="text-red-500 animate-shake">{errors.fullName}</p>}
// // // // // // //             </div>

// // // // // // //             {/* Similar styling for other form fields */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Email</label>
// // // // // // //               <input
// // // // // // //                 type="email"
// // // // // // //                 name="email"
// // // // // // //                 value={formData.email}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 transition-all duration-200"
// // // // // // //                 placeholder="Enter your email"
// // // // // // //               />
// // // // // // //               {errors.email && <p className="text-red-500 animate-shake">{errors.email}</p>}
// // // // // // //             </div>

// // // // // // //             <button
// // // // // // //               type="submit"
// // // // // // //               className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg
// // // // // // //                 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
// // // // // // //               disabled={loading}
// // // // // // //             >
// // // // // // //               {loading ? (
// // // // // // //                 <span className="animate-pulse">Signing Up...</span>
// // // // // // //               ) : (
// // // // // // //                 'Sign Up Now'
// // // // // // //               )}
// // // // // // //             </button>
// // // // // // //           </form>

// // // // // // //           <p className="mt-4 text-center">
// // // // // // //             Already have an account?{' '}
// // // // // // //             <Link to="/LoginPage" className="text-blue-600 underline hover:text-blue-800 transition-colors">
// // // // // // //               Login Here
// // // // // // //             </Link>
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Modal with animation */}
// // // // // // //       {showModal && (
// // // // // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 animate-fadeIn">
// // // // // // //           <div className="bg-white p-6 rounded-lg shadow-lg text-center transform animate-scaleIn">
// // // // // // //             <h3 className="text-lg font-bold">Signup Successful!</h3>
// // // // // // //             <p>Your store has been created successfully. Your unique store ID is:</p>
// // // // // // //             <div className="font-bold text-xl text-gray-800 my-2">{storeId}</div>
// // // // // // //             <div className="flex gap-2 justify-center">
// // // // // // //               <button
// // // // // // //                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
// // // // // // //                 onClick={() => setShowModal(false)}
// // // // // // //               >
// // // // // // //                 Close
// // // // // // //               </button>
// // // // // // //               <Link to="/LoginPage2">
// // // // // // //                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
// // // // // // //                   Back to Login
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SignUpPage;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import logo from './images/logo.jpg';
// // // // // // // import b1 from './images/b1.jpg';

// // // // // // // const SignUpPage = () => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     fullName: '',
// // // // // // //     email: '',
// // // // // // //     password: '',
// // // // // // //     confirmPassword: '',
// // // // // // //     storeName: '',
// // // // // // //     storeAddress: '',
// // // // // // //     phoneNumber: '',
// // // // // // //     enableMFA: false,
// // // // // // //     agreeToTerms: false,
// // // // // // //   });

// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [storeId, setStoreId] = useState('');
// // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value, type, checked } = e.target;
// // // // // // //     setFormData((prev) => ({
// // // // // // //       ...prev,
// // // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setLoading(true);

// // // // // // //     const newErrors = {};
// // // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // // //     }
// // // // // // //     if (!formData.agreeToTerms) {
// // // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // // //     }

// // // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // // //       setErrors(newErrors);
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify(formData),
// // // // // // //       });
// // // // // // //       const data = await response.json();
// // // // // // //       setStoreId(data.storeId);
// // // // // // //       setShowModal(true);
// // // // // // //       setFormData({
// // // // // // //         fullName: '',
// // // // // // //         email: '',
// // // // // // //         password: '',
// // // // // // //         confirmPassword: '',
// // // // // // //         storeName: '',
// // // // // // //         storeAddress: '',
// // // // // // //         phoneNumber: '',
// // // // // // //         enableMFA: false,
// // // // // // //         agreeToTerms: false,
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       alert('Signup failed. Please try again.');
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="font-sans min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white">
// // // // // // //       {/* Fixed Header */}
// // // // // // //       <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg animate-slideDown">
// // // // // // //         <div className="max-w-7xl mx-auto">
// // // // // // //           <div className="flex justify-between items-center h-16 px-4">
// // // // // // //             <div className="flex items-center gap-5">
// // // // // // //               <div className="w-12 h-12 transform hover:scale-110 transition-all duration-300 hover:rotate-6">
// // // // // // //                 <Link to="/AboutPage">
// // // // // // //                   <img src={logo} alt="Logo" className="w-full h-full rounded-lg shadow-md" />
// // // // // // //                 </Link>
// // // // // // //               </div>
// // // // // // //               <nav className="flex gap-6">
// // // // // // //                 <Link to="/" className="text-blue-600 font-medium hover:text-blue-800 transition-all duration-300 hover:scale-105 relative group">
// // // // // // //                   Home
// // // // // // //                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
// // // // // // //                 </Link>
// // // // // // //                 <Link to="/AboutPage" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
// // // // // // //                   About
// // // // // // //                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
// // // // // // //                 </Link>
// // // // // // //                 <Link to="/ContactUs" className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
// // // // // // //                   Contact
// // // // // // //                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
// // // // // // //                 </Link>
// // // // // // //               </nav>
// // // // // // //             </div>
// // // // // // //             <div className="flex gap-3">
// // // // // // //               {['SignUp', 'Login', 'Leave a Review'].map((text, index) => (
// // // // // // //                 <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // //                   <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm 
// // // // // // //                     hover:bg-blue-600 transform hover:-translate-y-1 hover:shadow-lg 
// // // // // // //                     transition-all duration-300 relative overflow-hidden group">
// // // // // // //                     <span className="relative z-10">{text}</span>
// // // // // // //                     <div className="absolute inset-0 h-full w-0 bg-blue-700 transition-all duration-300 group-hover:w-full"></div>
// // // // // // //                   </button>
// // // // // // //                 </Link>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </header>

// // // // // // //       {/* Main Content with padding for fixed header */}
// // // // // // //       <div className="pt-16 flex justify-center items-center gap-12 p-12 min-h-screen flex-wrap">
// // // // // // //         {/* Welcome Section */}
// // // // // // //         <div className="flex-1 bg-black bg-opacity-60 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300 animate-slideInLeft">
// // // // // // //           <h1 className="text-white text-4xl animate-fadeIn">Welcome to Your Business Journey</h1>
// // // // // // //           <p className="text-lg font-light my-4 animate-fadeIn delay-200">
// // // // // // //             Simplify your freelance business setup. Register and start growing your business in no time.
// // // // // // //           </p>
// // // // // // //           <div className="mt-8 relative group">
// // // // // // //             <img 
// // // // // // //               src={b1} 
// // // // // // //               alt="Jonas Kim" 
// // // // // // //               className="w-96 h-96 rounded-full mx-auto transform group-hover:rotate-3 transition-all duration-500"
// // // // // // //             />
// // // // // // //             <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-full"></div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Signup Form */}
// // // // // // //         <div className="flex-1 bg-white rounded-lg shadow-lg p-8 transform hover:shadow-2xl transition-all duration-300 animate-slideInRight">
// // // // // // //           <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Your Account</h2>
// // // // // // //           <p className="text-gray-600 mb-6">Sign up and get started today</p>
// // // // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // // // //             {/* Full Name */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 name="fullName"
// // // // // // //                 value={formData.fullName}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Enter your full name"
// // // // // // //               />
// // // // // // //               {errors.fullName && <p className="text-red-500 animate-shake">{errors.fullName}</p>}
// // // // // // //             </div>

// // // // // // //             {/* Email */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Email</label>
// // // // // // //               <input
// // // // // // //                 type="email"
// // // // // // //                 name="email"
// // // // // // //                 value={formData.email}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Enter your email"
// // // // // // //               />
// // // // // // //               {errors.email && <p className="text-red-500 animate-shake">{errors.email}</p>}
// // // // // // //             </div>

// // // // // // //             {/* Password */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Password</label>
// // // // // // //               <input
// // // // // // //                 type="password"
// // // // // // //                 name="password"
// // // // // // //                 value={formData.password}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Enter your password"
// // // // // // //               />
// // // // // // //               {errors.password && <p className="text-red-500 animate-shake">{errors.password}</p>}
// // // // // // //             </div>

// // // // // // //             {/* Confirm Password */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
// // // // // // //               <input
// // // // // // //                 type="password"
// // // // // // //                 name="confirmPassword"
// // // // // // //                 value={formData.confirmPassword}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Confirm your password"
// // // // // // //               />
// // // // // // //               {errors.confirmPassword && <p className="text-red-500 animate-shake">{errors.confirmPassword}</p>}
// // // // // // //             </div>

// // // // // // //             {/* Store Name */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Store Name</label>
// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 name="storeName"
// // // // // // //                 value={formData.storeName}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Enter store name"
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             {/* Store Address */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Store Address</label>
// // // // // // //               <textarea
// // // // // // //                 name="storeAddress"
// // // // // // //                 value={formData.storeAddress}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Enter store address"
// // // // // // //               ></textarea>
// // // // // // //             </div>

// // // // // // //             {/* Phone Number */}
// // // // // // //             <div className="transform hover:scale-102 transition-all duration-200">
// // // // // // //               <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
// // // // // // //               <input
// // // // // // //                 type="tel"
// // // // // // //                 name="phoneNumber"
// // // // // // //                 value={formData.phoneNumber}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-full p-3 border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-all duration-300 rounded-t-lg"
// // // // // // //                 placeholder="Enter phone number"
// // // // // // //               />
// // // // // // //             </div>

// // // // // // //             {/* Terms and Conditions */}
// // // // // // //             <div className="flex items-center gap-2">
// // // // // // //               <input
// // // // // // //                 type="checkbox"
// // // // // // //                 name="agreeToTerms"
// // // // // // //                 checked={formData.agreeToTerms}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 className="w-4 h-4 text-blue-600 transition duration-150 ease-in-out"
// // // // // // //               />
// // // // // // //               <label className="text-gray-700">I agree to the Terms and Conditions</label>
// // // // // // //               {errors.agreeToTerms && <p className="text-red-500 animate-shake">{errors.agreeToTerms}</p>}
// // // // // // //             </div>

// // // // // // //             {/* Submit Button */}
// // // // // // //             <button
// // // // // // //               type="submit"
// // // // // // //               className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg
// // // // // // //                 transform hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300
// // // // // // //                 relative overflow-hidden group"
// // // // // // //               disabled={loading}
// // // // // // //             >
// // // // // // //               <span className="relative z-10">
// // // // // // //                 {loading ? <span className="animate-pulse">Signing Up...</span> : 'Sign Up Now'}
// // // // // // //               </span>
// // // // // // //               <div className="absolute inset-0 h-full w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
// // // // // // //             </button>
// // // // // // //           </form>

// // // // // // //           <p className="mt-6 text-center text-gray-600">
// // // // // // //             Already have an account?{' '}
// // // // // // //             <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
// // // // // // //               Login Here
// // // // // // //             </Link>
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Success Modal */}
// // // // // // //       {showModal && (
// // // // // // //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 animate-fadeIn">
// // // // // // //           <div className="bg-white p-8 rounded-xl shadow-2xl text-center transform animate-scaleIn max-w-md w-full mx-4">
// // // // // // //             <h3 className="text-2xl font-bold text-gray-800 mb-4">Signup Successful! 🎉</h3>
// // // // // // //             <p className="text-gray-600 mb-4">Your store has been created successfully. Your unique store ID is:</p>
// // // // // // //             <div className="font-bold text-2xl text-blue-600 my-4 p-3 bg-blue-50 rounded-lg">{storeId}</div>
// // // // // // //             <div className="flex gap-4 justify-center mt-6">
// // // // // // //               <button
// // // // // // //                 onClick={() => setShowModal(false)}
// // // // // // //                 className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-300"
// // // // // // //               >
// // // // // // //                 Close
// // // // // // //               </button>
// // // // // // //               <Link to="/LoginPage2">
// // // // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300">
// // // // // // //                   Go to Login
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SignUpPage;


// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import logo from './images/logo.jpg';
// // // // // // // import b1 from './images/b1.jpg';

// // // // // // // // Header Component
// // // // // // // const Header = () => {
// // // // // // //   return (
// // // // // // //     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg">
// // // // // // //       <div className="max-w-7xl mx-auto px-4">
// // // // // // //         <div className="flex justify-between items-center h-16">
// // // // // // //           <div className="flex items-center gap-5">
// // // // // // //             <div className="w-12 h-12 transform hover:scale-105 transition-all duration-300">
// // // // // // //               <Link to="/AboutPage">
// // // // // // //                 <img src={logo} alt="Logo" className="w-full h-full rounded-lg shadow-sm" />
// // // // // // //               </Link>
// // // // // // //             </div>
// // // // // // //             <nav className="hidden md:flex gap-6">
// // // // // // //               {['Home', 'About', 'Contact'].map((item, index) => (
// // // // // // //                 <Link
// // // // // // //                   key={index}
// // // // // // //                   to={item === 'Home' ? '/' : `/${item}Page`}
// // // // // // //                   className={`${
// // // // // // //                     item === 'Home' ? 'text-blue-600' : 'text-gray-700'
// // // // // // //                   } font-medium hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300`}
// // // // // // //                 >
// // // // // // //                   {item}
// // // // // // //                 </Link>
// // // // // // //               ))}
// // // // // // //             </nav>
// // // // // // //           </div>
// // // // // // //           <div className="flex gap-3">
// // // // // // //             {['SignUp', 'Login', 'Leave a Review'].map((text, index) => (
// // // // // // //               <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // // //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm 
// // // // // // //                   hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // // //                   shadow-md hover:shadow-lg relative overflow-hidden group">
// // // // // // //                   <span className="relative z-10">{text}</span>
// // // // // // //                   <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SignUpPage = () => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     fullName: '',
// // // // // // //     email: '',
// // // // // // //     password: '',
// // // // // // //     confirmPassword: '',
// // // // // // //     storeName: '',
// // // // // // //     storeAddress: '',
// // // // // // //     phoneNumber: '',
// // // // // // //     agreeToTerms: false,
// // // // // // //   });

// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [storeId, setStoreId] = useState('');
// // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value, type, checked } = e.target;
// // // // // // //     setFormData(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setLoading(true);

// // // // // // //     const newErrors = {};
// // // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // // //     }
// // // // // // //     if (!formData.agreeToTerms) {
// // // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // // //     }

// // // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // // //       setErrors(newErrors);
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify(formData),
// // // // // // //       });
// // // // // // //       const data = await response.json();
// // // // // // //       setStoreId(data.storeId);
// // // // // // //       setShowModal(true);
// // // // // // //       setFormData({
// // // // // // //         fullName: '',
// // // // // // //         email: '',
// // // // // // //         password: '',
// // // // // // //         confirmPassword: '',
// // // // // // //         storeName: '',
// // // // // // //         storeAddress: '',
// // // // // // //         phoneNumber: '',
// // // // // // //         agreeToTerms: false,
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       alert('Signup failed. Please try again.');
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const InputField = ({ label, name, type = 'text', placeholder }) => (
// // // // // // //     <div className="space-y-1">
// // // // // // //       <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // // //       <input
// // // // // // //         type={type}
// // // // // // //         name={name}
// // // // // // //         value={formData[name]}
// // // // // // //         onChange={handleChange}
// // // // // // //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // // //         placeholder={placeholder}
// // // // // // //       />
// // // // // // //       {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // // // // // //       <Header />
      
// // // // // // //       <main className="pt-20 px-4 max-w-7xl mx-auto">
// // // // // // //         <div className="grid md:grid-cols-2 gap-8 items-center py-12">
// // // // // // //           {/* Welcome Section */}
// // // // // // //           <div className="space-y-6 text-center md:text-left">
// // // // // // //             <h1 className="text-4xl font-bold text-gray-900 animate-slideLeft">
// // // // // // //               Start Your Business Journey
// // // // // // //             </h1>
// // // // // // //             <p className="text-lg text-gray-600 animate-slideLeft delay-100">
// // // // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // // // //             </p>
// // // // // // //             <div className="relative group animate-slideLeft delay-200">
// // // // // // //               <img
// // // // // // //                 src={b1}
// // // // // // //                 alt="Business"
// // // // // // //                 className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform transition-transform group-hover:scale-105"
// // // // // // //               />
// // // // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Signup Form */}
// // // // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideRight">
// // // // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Your Account</h2>
// // // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // // //               <div className="space-y-4">
// // // // // // //                 <textarea
// // // // // // //                   name="storeAddress"
// // // // // // //                   value={formData.storeAddress}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   placeholder="Store Address"
// // // // // // //                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // // //                   rows="3"
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               <div className="flex items-center gap-2">
// // // // // // //                 <input
// // // // // // //                   type="checkbox"
// // // // // // //                   name="agreeToTerms"
// // // // // // //                   checked={formData.agreeToTerms}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // // // //                 />
// // // // // // //                 <label className="text-sm text-gray-600">
// // // // // // //                   I agree to the Terms and Conditions
// // // // // // //                 </label>
// // // // // // //               </div>

// // // // // // //               <button
// // // // // // //                 type="submit"
// // // // // // //                 disabled={loading}
// // // // // // //                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
// // // // // // //                   hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300
// // // // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // //               >
// // // // // // //                 {loading ? (
// // // // // // //                   <span className="flex items-center justify-center gap-2">
// // // // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // // //                     </svg>
// // // // // // //                     Processing...
// // // // // // //                   </span>
// // // // // // //                 ) : (
// // // // // // //                   'Create Account'
// // // // // // //                 )}
// // // // // // //               </button>
// // // // // // //             </form>

// // // // // // //             <p className="mt-6 text-center text-gray-600">
// // // // // // //               Already have an account?{' '}
// // // // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // // // //                 Sign in
// // // // // // //               </Link>
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </main>

// // // // // // //       {/* Success Modal */}
// // // // // // //       {showModal && (
// // // // // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // // //           <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
// // // // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard! 🎉</h3>
// // // // // // //             <p className="text-gray-600">Your store has been created successfully. Your store ID is:</p>
// // // // // // //             <div className="my-4 p-4 bg-blue-50 rounded-lg text-blue-600 font-mono text-center">
// // // // // // //               {storeId}
// // // // // // //             </div>
// // // // // // //             <div className="flex gap-4 justify-end mt-6">
// // // // // // //               <button
// // // // // // //                 onClick={() => setShowModal(false)}
// // // // // // //                 className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
// // // // // // //               >
// // // // // // //                 Close
// // // // // // //               </button>
// // // // // // //               <Link to="/LoginPage2">
// // // // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // // // //                   Continue to Login
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SignUpPage;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import logo from './images/logo.jpg';
// // // // // // // import b1 from './images/b1.jpg';

// // // // // // // // Custom animation keyframes
// // // // // // // const AnimatedStyle = () => (
// // // // // // //   <style>
// // // // // // //     {`
// // // // // // //       @keyframes float {
// // // // // // //         0% { transform: translateY(0px); }
// // // // // // //         50% { transform: translateY(-10px); }
// // // // // // //         100% { transform: translateY(0px); }
// // // // // // //       }

// // // // // // //       @keyframes glow {
// // // // // // //         0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
// // // // // // //         50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
// // // // // // //         100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
// // // // // // //       }

// // // // // // //       @keyframes shimmer {
// // // // // // //         0% { background-position: -1000px 0; }
// // // // // // //         100% { background-position: 1000px 0; }
// // // // // // //       }

// // // // // // //       @keyframes pulse {
// // // // // // //         0% { transform: scale(1); }
// // // // // // //         50% { transform: scale(1.05); }
// // // // // // //         100% { transform: scale(1); }
// // // // // // //       }

// // // // // // //       @keyframes rotateIn {
// // // // // // //         from { transform: rotate(-180deg) scale(0); opacity: 0; }
// // // // // // //         to { transform: rotate(0) scale(1); opacity: 1; }
// // // // // // //       }

// // // // // // //       @keyframes bounceIn {
// // // // // // //         0% { transform: scale(0.3); opacity: 0; }
// // // // // // //         50% { transform: scale(1.05); opacity: 0.8; }
// // // // // // //         70% { transform: scale(0.9); opacity: 0.9; }
// // // // // // //         100% { transform: scale(1); opacity: 1; }
// // // // // // //       }

// // // // // // //       .animate-float { animation: float 3s ease-in-out infinite; }
// // // // // // //       .animate-glow { animation: glow 2s ease-in-out infinite; }
// // // // // // //       .animate-shimmer {
// // // // // // //         background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
// // // // // // //         background-size: 1000px 100%;
// // // // // // //         animation: shimmer 2s infinite linear;
// // // // // // //       }
// // // // // // //       .animate-pulse-custom { animation: pulse 2s ease-in-out infinite; }
// // // // // // //       .animate-rotate-in { animation: rotateIn 0.8s ease-out forwards; }
// // // // // // //       .animate-bounce-in { animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; }
// // // // // // //     `}
// // // // // // //   </style>
// // // // // // // );

// // // // // // // const Header = () => {
// // // // // // //   const [scrolled, setScrolled] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       setScrolled(window.scrollY > 20);
// // // // // // //     };
// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// // // // // // //       scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
// // // // // // //     }`}>
// // // // // // //       <div className="max-w-7xl mx-auto px-4">
// // // // // // //         <div className="flex justify-between items-center h-20">
// // // // // // //           {/* Left section */}
// // // // // // //           <div className="flex-1">
// // // // // // //             <Link to="/AboutPage" className="inline-block">
// // // // // // //               <img 
// // // // // // //                 src={logo} 
// // // // // // //                 alt="Logo" 
// // // // // // //                 className="w-12 h-12 rounded-full animate-rotate-in hover:animate-pulse-custom transition-all duration-300" 
// // // // // // //               />
// // // // // // //             </Link>
// // // // // // //           </div>

// // // // // // //           {/* Center section */}
// // // // // // //           <nav className="flex-1 flex justify-center gap-8">
// // // // // // //             {['Home', 'About', 'Contact'].map((item, index) => (
// // // // // // //               <Link
// // // // // // //                 key={index}
// // // // // // //                 to={item === 'Home' ? '/' : `/${item}Page`}
// // // // // // //                 className={`relative overflow-hidden px-4 py-2 ${
// // // // // // //                   scrolled ? 'text-gray-800' : 'text-white'
// // // // // // //                 } hover:text-blue-600 transition-colors duration-300`}
// // // // // // //               >
// // // // // // //                 <span className="relative z-10">{item}</span>
// // // // // // //                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 hover:scale-x-100" />
// // // // // // //               </Link>
// // // // // // //             ))}
// // // // // // //           </nav>

// // // // // // //           {/* Right section */}
// // // // // // //           <div className="flex-1 flex justify-end gap-3">
// // // // // // //             {['SignUp', 'Login', 'Review'].map((text, index) => (
// // // // // // //               <Link key={index} to={`/${text}`}>
// // // // // // //                 <button className={`
// // // // // // //                   px-4 py-2 rounded-lg text-sm font-medium
// // // // // // //                   transform hover:-translate-y-0.5 transition-all duration-300
// // // // // // //                   ${index === 0 ? 
// // // // // // //                     'bg-blue-600 text-white hover:bg-blue-700 animate-bounce-in' : 
// // // // // // //                     'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
// // // // // // //                   }
// // // // // // //                 `}>
// // // // // // //                   {text}
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SignUpPage = () => {
// // // // // // //   // ... [Previous state management code remains the same]
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     fullName: '',
// // // // // // //     email: '',
// // // // // // //     password: '',
// // // // // // //     confirmPassword: '',
// // // // // // //     storeName: '',
// // // // // // //     storeAddress: '',
// // // // // // //     phoneNumber: '',
// // // // // // //     agreeToTerms: false,
// // // // // // //   });

// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [storeId, setStoreId] = useState('');
// // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value, type, checked } = e.target;
// // // // // // //     setFormData(prev => ({
// // // // // // //       ...prev,
// // // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // // //     }));
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setLoading(true);

// // // // // // //     const newErrors = {};
// // // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // // //     }
// // // // // // //     if (!formData.agreeToTerms) {
// // // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // // //     }

// // // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // // //       setErrors(newErrors);
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // // //         body: JSON.stringify(formData),
// // // // // // //       });
// // // // // // //       const data = await response.json();
// // // // // // //       setStoreId(data.storeId);
// // // // // // //       setShowModal(true);
// // // // // // //       setFormData({
// // // // // // //         fullName: '',
// // // // // // //         email: '',
// // // // // // //         password: '',
// // // // // // //         confirmPassword: '',
// // // // // // //         storeName: '',
// // // // // // //         storeAddress: '',
// // // // // // //         phoneNumber: '',
// // // // // // //         agreeToTerms: false,
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //       alert('Signup failed. Please try again.');
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };
// // // // // // //   const InputField = ({ label, name, type = 'text', placeholder }) => (
// // // // // // //     <div className="transform hover:scale-102 transition-all duration-300 opacity-0 animate-bounce-in" 
// // // // // // //          style={{ animationDelay: `${Math.random() * 0.5}s` }}>
// // // // // // //       <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
// // // // // // //       <input
// // // // // // //         type={type}
// // // // // // //         name={name}
// // // // // // //         value={formData[name]}
// // // // // // //         onChange={handleChange}
// // // // // // //         className="w-full px-4 py-3 rounded-lg border border-gray-300 
// // // // // // //           focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
// // // // // // //           transition-all duration-300 hover:shadow-md"
// // // // // // //         placeholder={placeholder}
// // // // // // //       />
// // // // // // //       {errors[name] && (
// // // // // // //         <p className="text-red-500 text-sm mt-1 animate-shake">{errors[name]}</p>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-purple-800">
// // // // // // //       <AnimatedStyle />
// // // // // // //       <Header />
      
// // // // // // //       <main className="pt-24 px-4 max-w-7xl mx-auto">
// // // // // // //         <div className="grid md:grid-cols-2 gap-12 items-center py-12">
// // // // // // //           {/* Welcome Section */}
// // // // // // //           <div className="space-y-8 text-white">
// // // // // // //             <h1 className="text-5xl font-bold animate-float">
// // // // // // //               Begin Your Journey
// // // // // // //             </h1>
// // // // // // //             <p className="text-xl text-blue-100 animate-shimmer">
// // // // // // //               Join our community of successful entrepreneurs
// // // // // // //             </p>
// // // // // // //             <div className="relative group animate-pulse-custom">
// // // // // // //               <img
// // // // // // //                 src={b1}
// // // // // // //                 alt="Business"
// // // // // // //                 className="w-full rounded-2xl shadow-2xl transform transition-all duration-500 
// // // // // // //                   group-hover:scale-105 group-hover:rotate-2"
// // // // // // //               />
// // // // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent 
// // // // // // //                 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* Signup Form */}
// // // // // // //           <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 animate-glow">
// // // // // // //             <h2 className="text-3xl font-bold text-gray-900 mb-8 animate-bounce-in">
// // // // // // //               Create Your Account
// // // // // // //             </h2>
// // // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // // //               <div className="animate-bounce-in" style={{ animationDelay: "0.6s" }}>
// // // // // // //                 <textarea
// // // // // // //                   name="storeAddress"
// // // // // // //                   value={formData.storeAddress}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   placeholder="Store Address"
// // // // // // //                   className="w-full px-4 py-3 rounded-lg border border-gray-300 
// // // // // // //                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
// // // // // // //                     transition-all duration-300 hover:shadow-md"
// // // // // // //                   rows="3"
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               <div className="flex items-center gap-2 animate-bounce-in" style={{ animationDelay: "0.7s" }}>
// // // // // // //                 <input
// // // // // // //                   type="checkbox"
// // // // // // //                   name="agreeToTerms"
// // // // // // //                   checked={formData.agreeToTerms}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   className="h-5 w-5 text-blue-600 rounded border-gray-300 
// // // // // // //                     focus:ring-blue-500 transition-colors duration-200"
// // // // // // //                 />
// // // // // // //                 <label className="text-sm text-gray-600">
// // // // // // //                   I agree to the Terms and Conditions
// // // // // // //                 </label>
// // // // // // //               </div>

// // // // // // //               <button
// // // // // // //                 type="submit"
// // // // // // //                 disabled={loading}
// // // // // // //                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white 
// // // // // // //                   py-3 rounded-lg font-medium transform hover:-translate-y-0.5 
// // // // // // //                   transition-all duration-300 animate-bounce-in hover:shadow-lg
// // // // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // // //                 style={{ animationDelay: "0.8s" }}
// // // // // // //               >
// // // // // // //                 {loading ? (
// // // // // // //                   <div className="flex items-center justify-center gap-2">
// // // // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // // //                     </svg>
// // // // // // //                     Creating Account...
// // // // // // //                   </div>
// // // // // // //                 ) : (
// // // // // // //                   'Get Started'
// // // // // // //                 )}
// // // // // // //               </button>
// // // // // // //             </form>

// // // // // // //             <p className="mt-6 text-center text-gray-600 animate-bounce-in" style={{ animationDelay: "0.9s" }}>
// // // // // // //               Already have an account?{' '}
// // // // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // // // //                 Sign in
// // // // // // //               </Link>
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </main>

// // // // // // //       {/* Success Modal [Previous modal code remains the same] */}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SignUpPage;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { Link } from 'react-router-dom';
// // // // // // // import { AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
// // // // // // // import logo from './images/logo.jpg';
// // // // // // // import b1 from './images/b1.jpg';

// // // // // // // const Header = () => {
// // // // // // //   const [scrolled, setScrolled] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => setScrolled(window.scrollY > 20);
// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
// // // // // // //       scrolled ? 'bg-white shadow-md' : 'bg-transparent'
// // // // // // //     }`}>
// // // // // // //       <div className="container mx-auto px-4">
// // // // // // //         <div className="h-16 flex items-center justify-between">
// // // // // // //           {/* Logo */}
// // // // // // //           <Link to="/" className="shrink-0">
// // // // // // //             <img src={logo} alt="Logo" className="w-10 h-10 rounded" />
// // // // // // //           </Link>
// // // // // // //           <nav className="hidden md:flex items-center gap-6">
// // // // // // //               <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
// // // // // // //               <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
// // // // // // //               <Link to="/ContactPage" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
// // // // // // //             </nav>

// // // // // // //           {/* Navigation - Right Aligned */}
// // // // // // //           <div className="flex items-center gap-8">
            
            
// // // // // // //             <div className="flex items-center gap-3">
// // // // // // //               <Link to="/LoginPage">
// // // // // // //                 <button className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors">
// // // // // // //                   Login
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //               {/* <Link to="/ignup">
// // // // // // //                 <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // // // //                   Sign Up
// // // // // // //                 </button>
// // // // // // //               </Link> */}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </header>
// // // // // // //   );
// // // // // // // };

// // // // // // // const SignUpPage = () => {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     fullName: '',
// // // // // // //     email: '',
// // // // // // //     password: '',
// // // // // // //     confirmPassword: '',
// // // // // // //     storeName: '',
// // // // // // //     storeAddress: '',
// // // // // // //     phoneNumber: '',
// // // // // // //     agreeToTerms: false,
// // // // // // //   });

// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [success, setSuccess] = useState(false);

// // // // // // //   const validate = (values) => {
// // // // // // //     const errors = {};
// // // // // // //     if (!values.fullName) errors.fullName = 'Required';
// // // // // // //     if (!values.email) {
// // // // // // //       errors.email = 'Required';
// // // // // // //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
// // // // // // //       errors.email = 'Invalid email address';
// // // // // // //     }
// // // // // // //     if (!values.password) {
// // // // // // //       errors.password = 'Required';
// // // // // // //     } else if (values.password.length < 8) {
// // // // // // //       errors.password = 'Password must be at least 8 characters';
// // // // // // //     }
// // // // // // //     if (values.password !== values.confirmPassword) {
// // // // // // //       errors.confirmPassword = 'Passwords must match';
// // // // // // //     }
// // // // // // //     if (!values.agreeToTerms) {
// // // // // // //       errors.agreeToTerms = 'You must agree to the terms';
// // // // // // //     }
// // // // // // //     return errors;
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     const validationErrors = validate(formData);
    
// // // // // // //     if (Object.keys(validationErrors).length > 0) {
// // // // // // //       setErrors(validationErrors);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     setLoading(true);
// // // // // // //     try {
// // // // // // //       // Simulated API call
// // // // // // //       await new Promise(resolve => setTimeout(resolve, 1500));
// // // // // // //       setSuccess(true);
// // // // // // //       setFormData({
// // // // // // //         fullName: '',
// // // // // // //         email: '',
// // // // // // //         password: '',
// // // // // // //         confirmPassword: '',
// // // // // // //         storeName: '',
// // // // // // //         storeAddress: '',
// // // // // // //         phoneNumber: '',
// // // // // // //         agreeToTerms: false,
// // // // // // //       });
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const Input = ({ label, name, type = 'text', placeholder }) => (
// // // // // // //     <div className="space-y-1">
// // // // // // //       <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // // //       <input
// // // // // // //         type={type}
// // // // // // //         name={name}
// // // // // // //         value={formData[name]}
// // // // // // //         onChange={e => setFormData(prev => ({ ...prev, [name]: e.target.value }))}
// // // // // // //         className={`w-full px-4 py-2 rounded-lg border ${
// // // // // // //           errors[name] ? 'border-red-500' : 'border-gray-300'
// // // // // // //         } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
// // // // // // //         placeholder={placeholder}
// // // // // // //       />
// // // // // // //       {errors[name] && (
// // // // // // //         <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
// // // // // // //           <AlertCircle className="w-4 h-4" />
// // // // // // //           <span>{errors[name]}</span>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );

// // // // // // //   return (
// // // // // // //     <div className="min-h-screen bg-gray-50">
// // // // // // //       <Header />

// // // // // // //       <main className="container mx-auto px-4 pt-20">
// // // // // // //         <div className="max-w-6xl mx-auto py-12 grid md:grid-cols-2 gap-12 items-center">
// // // // // // //           {/* Welcome Section */}
// // // // // // //           <div className="space-y-6">
// // // // // // //             <h1 className="text-4xl font-bold text-gray-900">
// // // // // // //               Start Your Business Journey
// // // // // // //             </h1>
// // // // // // //             <p className="text-lg text-gray-600">
// // // // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // // // //             </p>
// // // // // // //             <img
// // // // // // //               src={b1}
// // // // // // //               alt="Business"
// // // // // // //               className="rounded-2xl shadow-lg transform transition-transform hover:scale-105"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           {/* Form Section */}
// // // // // // //           <div className="bg-white rounded-2xl shadow-lg p-8">
// // // // // // //             <div className="space-y-6">
// // // // // // //               <div className="space-y-2">
// // // // // // //                 <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
// // // // // // //                 <p className="text-gray-600">Fill in your details to get started</p>
// // // // // // //               </div>

// // // // // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // // // // //                 <Input label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // // //                 <Input label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // // //                 <Input label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // // //                 <Input label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // // //                 <Input label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // // //                 <Input label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // // //                 <div>
// // // // // // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Store Address</label>
// // // // // // //                   <textarea
// // // // // // //                     name="storeAddress"
// // // // // // //                     value={formData.storeAddress}
// // // // // // //                     onChange={e => setFormData(prev => ({ ...prev, storeAddress: e.target.value }))}
// // // // // // //                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // // // // // //                     rows="3"
// // // // // // //                     placeholder="Enter your store address"
// // // // // // //                   />
// // // // // // //                 </div>

// // // // // // //                 <div className="flex items-center gap-2">
// // // // // // //                   <input
// // // // // // //                     type="checkbox"
// // // // // // //                     id="terms"
// // // // // // //                     name="agreeToTerms"
// // // // // // //                     checked={formData.agreeToTerms}
// // // // // // //                     onChange={e => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
// // // // // // //                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // // // //                   />
// // // // // // //                   <label htmlFor="terms" className="text-sm text-gray-600">
// // // // // // //                     I agree to the Terms and Conditions
// // // // // // //                   </label>
// // // // // // //                 </div>
// // // // // // //                 {errors.agreeToTerms && (
// // // // // // //                   <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
// // // // // // //                 )}

// // // // // // //                 <button
// // // // // // //                   type="submit"
// // // // // // //                   disabled={loading}
// // // // // // //                   className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg
// // // // // // //                     font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
// // // // // // //                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
// // // // // // //                 >
// // // // // // //                   {loading ? (
// // // // // // //                     <>
// // // // // // //                       <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // // //                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // // //                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // // //                       </svg>
// // // // // // //                       <span>Creating Account...</span>
// // // // // // //                     </>
// // // // // // //                   ) : (
// // // // // // //                     <>
// // // // // // //                       <span>Create Account</span>
// // // // // // //                       <ChevronRight className="w-5 h-5" />
// // // // // // //                     </>
// // // // // // //                   )}
// // // // // // //                 </button>
// // // // // // //               </form>

// // // // // // //               {success && (
// // // // // // //                 <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
// // // // // // //                   <CheckCircle2 className="w-5 h-5" />
// // // // // // //                   <span>Account created successfully!</span>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               <p className="text-center text-gray-600">
// // // // // // //                 Already have an account?{' '}
// // // // // // //                 <Link to="/LoginPage" className="text-blue-600 hover:text-blue-700 font-medium">
// // // // // // //                   Sign in
// // // // // // //                 </Link>
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </main>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SignUpPage;




// // // // // // import React, { useState } from 'react';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import logo from './images/logo.jpg';
// // // // // // import b1 from './images/b1.jpg';

// // // // // // // Header Component
// // // // // // const Header = () => {
// // // // // //   return (
// // // // // //     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg">
// // // // // //       <div className="max-w-7xl mx-auto px-4">
// // // // // //         <div className="flex justify-between items-center h-16">
// // // // // //           <div className="flex items-center gap-5">
// // // // // //             <div className="w-12 h-12 transform hover:scale-105 transition-all duration-300">
// // // // // //               <Link to="/AboutPage">
// // // // // //                 <img src={logo} alt="Logo" className="w-full h-full rounded-lg shadow-sm" />
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //             <nav className="hidden md:flex gap-6">
// // // // // //               {['Home', 'About', 'Contact'].map((item, index) => (
// // // // // //                 <Link
// // // // // //                   key={index}
// // // // // //                   to={item === 'Home' ? '/' : `/${item}Page`}
// // // // // //                   className={`${
// // // // // //                     item === 'Home' ? 'text-blue-600' : 'text-gray-700'
// // // // // //                   } font-medium hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300`}
// // // // // //                 >
// // // // // //                   {item}
// // // // // //                 </Link>
// // // // // //               ))}
// // // // // //             </nav>
// // // // // //           </div>
// // // // // //           <div className="flex gap-3">
// // // // // //             {['SignUp', 'Login', 'Leave a Review'].map((text, index) => (
// // // // // //               <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // // //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm 
// // // // // //                   hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // // //                   shadow-md hover:shadow-lg relative overflow-hidden group">
// // // // // //                   <span className="relative z-10">{text}</span>
// // // // // //                   <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </header>
// // // // // //   );
// // // // // // };

// // // // // // const SignUpPage = () => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     fullName: '',
// // // // // //     email: '',
// // // // // //     password: '',
// // // // // //     confirmPassword: '',
// // // // // //     storeName: '',
// // // // // //     storeAddress: '',
// // // // // //     phoneNumber: '',
// // // // // //     agreeToTerms: false,
// // // // // //   });

// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [storeId, setStoreId] = useState('');
// // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, type, checked } = e.target;
// // // // // //     setFormData(prev => ({
// // // // // //       ...prev,
// // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);

// // // // // //     const newErrors = {};
// // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // //     }
// // // // // //     if (!formData.agreeToTerms) {
// // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // //     }

// // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // //       setErrors(newErrors);
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(formData),
// // // // // //       });
// // // // // //       const data = await response.json();
// // // // // //       setStoreId(data.storeId);
// // // // // //       setShowModal(true);
// // // // // //       setFormData({
// // // // // //         fullName: '',
// // // // // //         email: '',
// // // // // //         password: '',
// // // // // //         confirmPassword: '',
// // // // // //         storeName: '',
// // // // // //         storeAddress: '',
// // // // // //         phoneNumber: '',
// // // // // //         agreeToTerms: false,
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //       alert('Signup failed. Please try again.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const InputField = ({ label, name, type = 'text', placeholder }) => (
// // // // // //     <div className="space-y-1">
// // // // // //       <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // //       <input
// // // // // //         type={type}
// // // // // //         name={name}
// // // // // //         value={formData[name] || ''}  // Ensuring the input value is correctly linked to state
// // // // // //         onChange={handleChange}  // Ensuring onChange correctly updates the state
// // // // // //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //         placeholder={placeholder}
// // // // // //       />
// // // // // //       {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // // // // //       <Header />
      
// // // // // //       <main className="pt-20 px-4 max-w-7xl mx-auto">
// // // // // //         <div className="grid md:grid-cols-2 gap-8 items-center py-12">
// // // // // //           {/* Welcome Section */}
// // // // // //           <div className="space-y-6 text-center md:text-left">
// // // // // //             <h1 className="text-4xl font-bold text-gray-900 animate-slideLeft">
// // // // // //               Start Your Business Journey
// // // // // //             </h1>
// // // // // //             <p className="text-lg text-gray-600 animate-slideLeft delay-100">
// // // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // // //             </p>
// // // // // //             <div className="relative group animate-slideLeft delay-200">
// // // // // //               <img
// // // // // //                 src={b1}
// // // // // //                 alt="Business"
// // // // // //                 className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform transition-transform group-hover:scale-105"
// // // // // //               />
// // // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Signup Form */}
// // // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideRight">
// // // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Your Account</h2>
// // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // //               <div className="space-y-4">
// // // // // //                 <textarea
// // // // // //                   name="storeAddress"
// // // // // //                   value={formData.storeAddress}
// // // // // //                   onChange={handleChange}
// // // // // //                   placeholder="Store Address"
// // // // // //                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //                   rows="3"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <input
// // // // // //                   type="checkbox"
// // // // // //                   name="agreeToTerms"
// // // // // //                   checked={formData.agreeToTerms}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // // //                 />
// // // // // //                 <label className="text-sm text-gray-600">
// // // // // //                   I agree to the Terms and Conditions
// // // // // //                 </label>
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 disabled={loading}
// // // // // //                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
// // // // // //                   hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300
// // // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // //               >
// // // // // //                 {loading ? (
// // // // // //                   <span className="flex items-center justify-center gap-2">
// // // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // //                     </svg>
// // // // // //                     Processing...
// // // // // //                   </span>
// // // // // //                 ) : (
// // // // // //                   'Create Account'
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </form>

// // // // // //             <p className="mt-6 text-center text-gray-600">
// // // // // //               Already have an account?{' '}
// // // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // // //                 Sign in
// // // // // //               </Link>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </main>

// // // // // //       {/* Success Modal */}
// // // // // //       {showModal && (
// // // // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // //           <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
// // // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard! 🎉</h3>
// // // // // //             <p className="text-gray-600">Your store has been created successfully. Your store ID is:</p>
// // // // // //             <div className="my-4 p-4 bg-blue-50 rounded-lg text-blue-600 font-mono text-center">
// // // // // //               {storeId}
// // // // // //             </div>
// // // // // //             <div className="flex gap-4 justify-end mt-6">
// // // // // //               <button
// // // // // //                 onClick={() => setShowModal(false)}
// // // // // //                 className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
// // // // // //               >
// // // // // //                 Close
// // // // // //               </button>
// // // // // //               <Link to="/LoginPage2">
// // // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // // //                   Continue to Login
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignUpPage;
// // // // // import React, { useState } from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import logo from './images/logo.jpg';
// // // // // import b1 from './images/b1.jpg';

// // // // // // Header Component
// // // // // const Header = () => {
// // // // //   return (
// // // // //     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg">
// // // // //       <div className="max-w-7xl mx-auto px-4">
// // // // //         <div className="flex justify-between items-center h-16">
// // // // //           <div className="flex items-center gap-5">
// // // // //             <div className="w-12 h-12 transform hover:scale-105 transition-all duration-300">
// // // // //               <Link to="/AboutPage">
// // // // //                 <img src={logo} alt="Logo" className="w-full h-full rounded-lg shadow-sm" />
// // // // //               </Link>
// // // // //             </div>
// // // // //             <nav className="hidden md:flex gap-6">
// // // // //               {['Home', 'About', 'Contact'].map((item, index) => (
// // // // //                 <Link
// // // // //                   key={index}
// // // // //                   to={item === 'Home' ? '/' : `/${item}Page`}
// // // // //                   className={`${
// // // // //                     item === 'Home' ? 'text-blue-600' : 'text-gray-700'
// // // // //                   } font-medium hover:text-blue-600 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300`}
// // // // //                 >
// // // // //                   {item}
// // // // //                 </Link>
// // // // //               ))}
// // // // //             </nav>
// // // // //           </div>
// // // // //           <div className="flex gap-3">
// // // // //             {['SignUp', 'Login', 'Leave a Review'].map((text, index) => (
// // // // //               <Link key={index} to={`/${text.replace(/\s+/g, '')}`}>
// // // // //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm 
// // // // //                   hover:bg-blue-600 transform hover:-translate-y-0.5 transition-all duration-300 
// // // // //                   shadow-md hover:shadow-lg relative overflow-hidden group">
// // // // //                   <span className="relative z-10">{text}</span>
// // // // //                   <div className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 group-hover:w-full" />
// // // // //                 </button>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </header>
// // // // //   );
// // // // // };

// // // // // // const SignUpPage = () => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     fullName: '',
// // // // // //     email: '',
// // // // // //     password: '',
// // // // // //     confirmPassword: '',
// // // // // //     storeName: '',
// // // // // //     storeAddress: '',
// // // // // //     phoneNumber: '',
// // // // // //     agreeToTerms: false,
// // // // // //   });

// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [storeId, setStoreId] = useState('');
// // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, type, checked } = e.target;
// // // // // //     setFormData(prev => ({
// // // // // //       ...prev,
// // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);

// // // // // //     const newErrors = {};
// // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // //     }
// // // // // //     if (!formData.agreeToTerms) {
// // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // //     }

// // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // //       setErrors(newErrors);
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     // Debugging log to track formData before sending
// // // // // //     console.log('Form Data to send:', formData);

// // // // // //     try {
// // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(formData),
// // // // // //       });

// // // // // //       // Check response and process data
// // // // // //       const data = await response.json();

// // // // // //       // Debugging log to track response
// // // // // //       console.log('Response from API:', data);

// // // // // //       if (data.success) {
// // // // // //         setStoreId(data.storeId);
// // // // // //         setShowModal(true);
// // // // // //       } else {
// // // // // //         // Handle error case
// // // // // //         console.error('Signup error:', data.error);
// // // // // //         alert('Error during signup. Please try again.');
// // // // // //       }

// // // // // //       setFormData({
// // // // // //         fullName: '',
// // // // // //         email: '',
// // // // // //         password: '',
// // // // // //         confirmPassword: '',
// // // // // //         storeName: '',
// // // // // //         storeAddress: '',
// // // // // //         phoneNumber: '',
// // // // // //         agreeToTerms: false,
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       console.error('Network error:', error);
// // // // // //       alert('Signup failed. Please try again.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // const InputField = ({ label, name, type = 'text', placeholder }) => (
// // // // // //   //   <div className="space-y-1">
// // // // // //   //     <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // //   //     <input
// // // // // //   //       type={type}
// // // // // //   //       name={name}
// // // // // //   //       value={formData[name] || ''}  // Ensuring the input value is correctly linked to state
// // // // // //   //       onChange={handleChange}  // Ensuring onChange correctly updates the state
// // // // // //   //       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //   //       placeholder={placeholder}
// // // // // //   //     />
// // // // // //   //     {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // // //   //   </div>
// // // // // //   // );

// // // // // //   const InputField = ({ label, name, type = 'text', placeholder }) => (
// // // // // //     <div className="space-y-1">
// // // // // //       <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // //       <input
// // // // // //         type={type}
// // // // // //         name={name}
// // // // // //         value={formData[name]}  // Directly use formData[name] without fallback to empty string
// // // // // //         onChange={handleChange}  // Ensure onChange correctly updates the state
// // // // // //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //         placeholder={placeholder}
// // // // // //       />
// // // // // //       {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // // // // //       <Header />
      
// // // // // //       <main className="pt-20 px-4 max-w-7xl mx-auto">
// // // // // //         <div className="grid md:grid-cols-2 gap-8 items-center py-12">
// // // // // //           {/* Welcome Section */}
// // // // // //           <div className="space-y-6 text-center md:text-left">
// // // // // //             <h1 className="text-4xl font-bold text-gray-900 animate-slideLeft">
// // // // // //               Start Your Business Journey
// // // // // //             </h1>
// // // // // //             <p className="text-lg text-gray-600 animate-slideLeft delay-100">
// // // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // // //             </p>
// // // // // //             <div className="relative group animate-slideLeft delay-200">
// // // // // //               <img
// // // // // //                 src={b1}
// // // // // //                 alt="Business"
// // // // // //                 className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform transition-transform group-hover:scale-105"
// // // // // //               />
// // // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Signup Form */}
// // // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideRight">
// // // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Your Account</h2>
// // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // //               <div className="space-y-4">
// // // // // //                 <textarea
// // // // // //                   name="storeAddress"
// // // // // //                   value={formData.storeAddress}
// // // // // //                   onChange={handleChange}
// // // // // //                   placeholder="Store Address"
// // // // // //                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //                   rows="3"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <input
// // // // // //                   type="checkbox"
// // // // // //                   name="agreeToTerms"
// // // // // //                   checked={formData.agreeToTerms}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // // //                 />
// // // // // //                 <label className="text-sm text-gray-600">
// // // // // //                   I agree to the Terms and Conditions
// // // // // //                 </label>
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 disabled={loading}
// // // // // //                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
// // // // // //                   hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300
// // // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // //               >
// // // // // //                 {loading ? (
// // // // // //                   <span className="flex items-center justify-center gap-2">
// // // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // //                     </svg>
// // // // // //                     Processing...
// // // // // //                   </span>
// // // // // //                 ) : (
// // // // // //                   'Create Account'
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </form>

// // // // // //             <p className="mt-6 text-center text-gray-600">
// // // // // //               Already have an account?{' '}
// // // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // // //                 Sign in
// // // // // //               </Link>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </main>

// // // // // //       {/* Success Modal */}
// // // // // //       {showModal && (
// // // // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // //           <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
// // // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard! 🎉</h3>
// // // // // //             <p className="text-gray-600">Your store has been created successfully. Your store ID is:</p>
// // // // // //             <div className="my-4 p-4 bg-blue-50 rounded-lg text-blue-600 font-mono text-center">
// // // // // //               {storeId}
// // // // // //             </div>
// // // // // //             <div className="flex gap-4 justify-end mt-6">
// // // // // //               <button
// // // // // //                 onClick={() => setShowModal(false)}
// // // // // //                 className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
// // // // // //               >
// // // // // //                 Close
// // // // // //               </button>
// // // // // //               <Link to="/LoginPage2">
// // // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // // //                   Continue to Login
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignUpPage;
// // // // // // const SignUpPage = () => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     fullName: '',
// // // // // //     email: '',
// // // // // //     password: '',
// // // // // //     confirmPassword: '',
// // // // // //     storeName: '',
// // // // // //     storeAddress: '',
// // // // // //     phoneNumber: '',
// // // // // //     agreeToTerms: false,
// // // // // //   });

// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [storeId, setStoreId] = useState('');
// // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, type, checked } = e.target;
// // // // // //     setFormData(prev => ({
// // // // // //       ...prev,
// // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);

// // // // // //     const newErrors = {};
// // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // //     }
// // // // // //     if (!formData.agreeToTerms) {
// // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // //     }

// // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // //       setErrors(newErrors);
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     // Debugging log to track formData before sending
// // // // // //     console.log('Form Data to send:', formData);

// // // // // //     try {
// // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(formData),
// // // // // //       });

// // // // // //       // Check response and process data
// // // // // //       const data = await response.json();

// // // // // //       // Debugging log to track response
// // // // // //       console.log('Response from API:', data);

// // // // // //       if (data.success) {
// // // // // //         setStoreId(data.storeId);
// // // // // //         setShowModal(true);
// // // // // //       } else {
// // // // // //         // Handle error case
// // // // // //         console.error('Signup error:', data.error);
// // // // // //         alert('Error during signup. Please try again.');
// // // // // //       }

// // // // // //       setFormData({
// // // // // //         fullName: '',
// // // // // //         email: '',
// // // // // //         password: '',
// // // // // //         confirmPassword: '',
// // // // // //         storeName: '',
// // // // // //         storeAddress: '',
// // // // // //         phoneNumber: '',
// // // // // //         agreeToTerms: false,
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       console.error('Network error:', error);
// // // // // //       alert('Signup failed. Please try again.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   const InputField = ({ label, name, type = 'text', placeholder }) => (
// // // // // //     <div className="space-y-1">
// // // // // //       <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // //       <input
// // // // // //         type={type}
// // // // // //         name={name}
// // // // // //         value={formData[name]}  // Directly use formData[name] without fallback to empty string
// // // // // //         onChange={handleChange}  // Ensure onChange correctly updates the state
// // // // // //         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //         placeholder={placeholder}
// // // // // //       />
// // // // // //       {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // // //     </div>
// // // // // //   );

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // // // // //       <Header />
      
// // // // // //       <main className="pt-20 px-4 max-w-7xl mx-auto">
// // // // // //         <div className="grid md:grid-cols-2 gap-8 items-center py-12">
// // // // // //           {/* Welcome Section */}
// // // // // //           <div className="space-y-6 text-center md:text-left">
// // // // // //             <h1 className="text-4xl font-bold text-gray-900 animate-slideLeft">
// // // // // //               Start Your Business Journey
// // // // // //             </h1>
// // // // // //             <p className="text-lg text-gray-600 animate-slideLeft delay-100">
// // // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // // //             </p>
// // // // // //             <div className="relative group animate-slideLeft delay-200">
// // // // // //               <img
// // // // // //                 src={b1}
// // // // // //                 alt="Business"
// // // // // //                 className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform transition-transform group-hover:scale-105"
// // // // // //               />
// // // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Signup Form */}
// // // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideRight">
// // // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Your Account</h2>
// // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // //               <div className="space-y-4">
// // // // // //                 <textarea
// // // // // //                   name="storeAddress"
// // // // // //                   value={formData.storeAddress}
// // // // // //                   onChange={handleChange}
// // // // // //                   placeholder="Store Address"
// // // // // //                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //                   rows="3"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <input
// // // // // //                   type="checkbox"
// // // // // //                   name="agreeToTerms"
// // // // // //                   checked={formData.agreeToTerms}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // // //                 />
// // // // // //                 <label className="text-sm text-gray-600">
// // // // // //                   I agree to the Terms and Conditions
// // // // // //                 </label>
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 disabled={loading}
// // // // // //                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
// // // // // //                   hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300
// // // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // //               >
// // // // // //                 {loading ? (
// // // // // //                   <span className="flex items-center justify-center gap-2">
// // // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // //                     </svg>
// // // // // //                     Processing...
// // // // // //                   </span>
// // // // // //                 ) : (
// // // // // //                   'Create Account'
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </form>

// // // // // //             <p className="mt-6 text-center text-gray-600">
// // // // // //               Already have an account?{' '}
// // // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // // //                 Sign in
// // // // // //               </Link>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </main>

// // // // // //       {/* Success Modal */}
// // // // // //       {showModal && (
// // // // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // //           <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
// // // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard! 🎉</h3>
// // // // // //             <p className="text-gray-600">Your store has been created successfully. Your store ID is:</p>
// // // // // //             <div className="my-4 p-4 bg-blue-50 rounded-lg text-blue-600 font-mono text-center">
// // // // // //               {storeId}
// // // // // //             </div>
// // // // // //             <div className="flex gap-4 justify-end mt-6">
// // // // // //               <button
// // // // // //                 onClick={() => setShowModal(false)}
// // // // // //                 className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
// // // // // //               >
// // // // // //                 Close
// // // // // //               </button>
// // // // // //               <Link to="/LoginPage2">
// // // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // // //                   Continue to Login
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignUpPage;
// // // // // // const SignUpPage = () => {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     fullName: '',
// // // // // //     email: '',
// // // // // //     password: '',
// // // // // //     confirmPassword: '',
// // // // // //     storeName: '',
// // // // // //     storeAddress: '',
// // // // // //     phoneNumber: '',
// // // // // //     agreeToTerms: false,
// // // // // //   });

// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [storeId, setStoreId] = useState('');
// // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, type, checked } = e.target;
// // // // // //     setFormData((prev) => ({
// // // // // //       ...prev,
// // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setLoading(true);

// // // // // //     const newErrors = {};
// // // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // // //     if (formData.password !== formData.confirmPassword) {
// // // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // // //     }
// // // // // //     if (!formData.agreeToTerms) {
// // // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // // //     }

// // // // // //     if (Object.keys(newErrors).length > 0) {
// // // // // //       setErrors(newErrors);
// // // // // //       setLoading(false);
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // // //         method: 'POST',
// // // // // //         headers: { 'Content-Type': 'application/json' },
// // // // // //         body: JSON.stringify(formData),
// // // // // //       });

// // // // // //       const data = await response.json();

// // // // // //       if (data.success) {
// // // // // //         setStoreId(data.storeId);
// // // // // //         setShowModal(true);
// // // // // //       } else {
// // // // // //         console.error('Signup error:', data.error);
// // // // // //         alert('Error during signup. Please try again.');
// // // // // //       }

// // // // // //       setFormData({
// // // // // //         fullName: '',
// // // // // //         email: '',
// // // // // //         password: '',
// // // // // //         confirmPassword: '',
// // // // // //         storeName: '',
// // // // // //         storeAddress: '',
// // // // // //         phoneNumber: '',
// // // // // //         agreeToTerms: false,
// // // // // //       });
// // // // // //     } catch (error) {
// // // // // //       console.error('Network error:', error);
// // // // // //       alert('Signup failed. Please try again.');
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // InputField Component (moved outside the render to avoid recreation)
// // // // // //   const InputField = React.memo(({ label, name, type = 'text', placeholder }) => {
// // // // // //     return (
// // // // // //       <div className="space-y-1">
// // // // // //         <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // // //         <input
// // // // // //           type={type}
// // // // // //           name={name}
// // // // // //           value={formData[name]}
// // // // // //           onChange={handleChange}
// // // // // //           className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //           placeholder={placeholder}
// // // // // //         />
// // // // // //         {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // // //       </div>
// // // // // //     );
// // // // // //   });

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // // // // //       <Header />

// // // // // //       <main className="pt-20 px-4 max-w-7xl mx-auto">
// // // // // //         <div className="grid md:grid-cols-2 gap-8 items-center py-12">
// // // // // //           {/* Welcome Section */}
// // // // // //           <div className="space-y-6 text-center md:text-left">
// // // // // //             <h1 className="text-4xl font-bold text-gray-900 animate-slideLeft">
// // // // // //               Start Your Business Journey
// // // // // //             </h1>
// // // // // //             <p className="text-lg text-gray-600 animate-slideLeft delay-100">
// // // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // // //             </p>
// // // // // //             <div className="relative group animate-slideLeft delay-200">
// // // // // //               <img
// // // // // //                 src={b1}
// // // // // //                 alt="Business"
// // // // // //                 className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform transition-transform group-hover:scale-105"
// // // // // //               />
// // // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Signup Form */}
// // // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideRight">
// // // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Your Account</h2>
// // // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // // //               <div className="space-y-4">
// // // // // //                 <textarea
// // // // // //                   name="storeAddress"
// // // // // //                   value={formData.storeAddress}
// // // // // //                   onChange={handleChange}
// // // // // //                   placeholder="Store Address"
// // // // // //                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // // //                   rows="3"
// // // // // //                 />
// // // // // //               </div>

// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <input
// // // // // //                   type="checkbox"
// // // // // //                   name="agreeToTerms"
// // // // // //                   checked={formData.agreeToTerms}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // // //                 />
// // // // // //                 <label className="text-sm text-gray-600">
// // // // // //                   I agree to the Terms and Conditions
// // // // // //                 </label>
// // // // // //               </div>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 disabled={loading}
// // // // // //                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
// // // // // //                   hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300
// // // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // // //               >
// // // // // //                 {loading ? (
// // // // // //                   <span className="flex items-center justify-center gap-2">
// // // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // // //                     </svg>
// // // // // //                     Processing...
// // // // // //                   </span>
// // // // // //                 ) : (
// // // // // //                   'Create Account'
// // // // // //                 )}
// // // // // //               </button>
// // // // // //             </form>

// // // // // //             <p className="mt-6 text-center text-gray-600">
// // // // // //               Already have an account?{' '}
// // // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // // //                 Sign in
// // // // // //               </Link>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </main>

// // // // // //       {/* Success Modal */}
// // // // // //       {showModal && (
// // // // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // // //           <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
// // // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard! 🎉</h3>
// // // // // //             <p className="text-gray-600">Your store has been created successfully. Your store ID is:</p>
// // // // // //             <div className="my-4 p-4 bg-blue-50 rounded-lg text-blue-600 font-mono text-center">
// // // // // //               {storeId}
// // // // // //             </div>
// // // // // //             <div className="flex gap-4 justify-end mt-6">
// // // // // //               <button
// // // // // //                 onClick={() => setShowModal(false)}
// // // // // //                 className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
// // // // // //               >
// // // // // //                 Close
// // // // // //               </button>
// // // // // //               <Link to="/LoginPage2">
// // // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // // //                   Continue to Login
// // // // // //                 </button>
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignUpPage;


// // // // // const SignUpPage = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     fullName: '',
// // // // //     email: '',
// // // // //     password: '',
// // // // //     confirmPassword: '',
// // // // //     storeName: '',
// // // // //     storeAddress: '',
// // // // //     phoneNumber: '',
// // // // //     agreeToTerms: false,
// // // // //   });

// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [storeId, setStoreId] = useState('');
// // // // //   const [showModal, setShowModal] = useState(false);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, type, checked } = e.target;
// // // // //     setFormData((prev) => ({
// // // // //       ...prev,
// // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setLoading(true);

// // // // //     const newErrors = {};
// // // // //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // // //     if (!formData.email) newErrors.email = 'Email is required';
// // // // //     if (!formData.password) newErrors.password = 'Password is required';
// // // // //     if (formData.password !== formData.confirmPassword) {
// // // // //       newErrors.confirmPassword = 'Passwords do not match';
// // // // //     }
// // // // //     if (!formData.agreeToTerms) {
// // // // //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // // // //     }

// // // // //     if (Object.keys(newErrors).length > 0) {
// // // // //       setErrors(newErrors);
// // // // //       setLoading(false);
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const response = await fetch('http://127.0.0.1:5003/signup', {
// // // // //         method: 'POST',
// // // // //         headers: { 'Content-Type': 'application/json' },
// // // // //         body: JSON.stringify(formData),
// // // // //       });

// // // // //       const data = await response.json();

// // // // //       if (data.success) {
// // // // //         setStoreId(data.storeId);
// // // // //         setShowModal(true);
// // // // //       } else {
// // // // //         console.error('Signup error:', data.error);
// // // // //         alert('Error during signup. Please try again.');
// // // // //       }

// // // // //       setFormData({
// // // // //         fullName: '',
// // // // //         email: '',
// // // // //         password: '',
// // // // //         confirmPassword: '',
// // // // //         storeName: '',
// // // // //         storeAddress: '',
// // // // //         phoneNumber: '',
// // // // //         agreeToTerms: false,
// // // // //       });
// // // // //     } catch (error) {
// // // // //       console.error('Network error:', error);
// // // // //       alert('Signup failed. Please try again.');
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // InputField Component (moved outside the render to avoid recreation)
// // // // //   const InputField = React.memo(({ label, name, type = 'text', placeholder }) => {
// // // // //     return (
// // // // //       <div className="space-y-1">
// // // // //         <label className="block text-sm font-medium text-gray-700">{label}</label>
// // // // //         <input
// // // // //           type={type}
// // // // //           name={name}
// // // // //           value={formData[name]}
// // // // //           onChange={handleChange}
// // // // //           className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // //           placeholder={placeholder}
// // // // //         />
// // // // //         {errors[name] && <p className="text-red-500 text-sm animate-shake">{errors[name]}</p>}
// // // // //       </div>
// // // // //     );
// // // // //   });

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // // // //       <Header />

// // // // //       <main className="pt-20 px-4 max-w-7xl mx-auto">
// // // // //         <div className="grid md:grid-cols-2 gap-8 items-center py-12">
// // // // //           {/* Welcome Section */}
// // // // //           <div className="space-y-6 text-center md:text-left">
// // // // //             <h1 className="text-4xl font-bold text-gray-900 animate-slideLeft">
// // // // //               Start Your Business Journey
// // // // //             </h1>
// // // // //             <p className="text-lg text-gray-600 animate-slideLeft delay-100">
// // // // //               Join thousands of successful entrepreneurs who have already taken the first step.
// // // // //             </p>
// // // // //             <div className="relative group animate-slideLeft delay-200">
// // // // //               <img
// // // // //                 src={b1}
// // // // //                 alt="Business"
// // // // //                 className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform transition-transform group-hover:scale-105"
// // // // //               />
// // // // //               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Signup Form */}
// // // // //           <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideRight">
// // // // //             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Your Account</h2>
// // // // //             <form onSubmit={handleSubmit} className="space-y-6">
// // // // //               <InputField label="Full Name" name="fullName" placeholder="John Doe" />
// // // // //               <InputField label="Email" name="email" type="email" placeholder="john@example.com" />
// // // // //               <InputField label="Password" name="password" type="password" placeholder="••••••••" />
// // // // //               <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />
// // // // //               <InputField label="Store Name" name="storeName" placeholder="Your Store Name" />
// // // // //               <InputField label="Phone Number" name="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />

// // // // //               <div className="space-y-4">
// // // // //                 <textarea
// // // // //                   name="storeAddress"
// // // // //                   value={formData.storeAddress}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="Store Address"
// // // // //                   className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
// // // // //                   rows="3"
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="flex items-center gap-2">
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   name="agreeToTerms"
// // // // //                   checked={formData.agreeToTerms}
// // // // //                   onChange={handleChange}
// // // // //                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
// // // // //                 />
// // // // //                 <label className="text-sm text-gray-600">
// // // // //                   I agree to the Terms and Conditions
// // // // //                 </label>
// // // // //               </div>

// // // // //               <button
// // // // //                 type="submit"
// // // // //                 disabled={loading}
// // // // //                 className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium
// // // // //                   hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-300
// // // // //                   disabled:opacity-50 disabled:cursor-not-allowed"
// // // // //               >
// // // // //                 {loading ? (
// // // // //                   <span className="flex items-center justify-center gap-2">
// // // // //                     <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
// // // // //                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
// // // // //                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
// // // // //                     </svg>
// // // // //                     Processing...
// // // // //                   </span>
// // // // //                 ) : (
// // // // //                   'Create Account'
// // // // //                 )}
// // // // //               </button>
// // // // //             </form>

// // // // //             <p className="mt-6 text-center text-gray-600">
// // // // //               Already have an account?{' '}
// // // // //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // //                 Sign in
// // // // //               </Link>
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </main>

// // // // //       {/* Success Modal */}
// // // // //       {showModal && (
// // // // //         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
// // // // //           <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-fadeIn">
// // // // //             <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome Aboard! 🎉</h3>
// // // // //             <p className="text-gray-600">Your store has been created successfully. Your store ID is:</p>
// // // // //             <div className="my-4 p-4 bg-blue-50 rounded-lg text-blue-600 font-mono text-center">
// // // // //               {storeId}
// // // // //             </div>
// // // // //             <div className="flex gap-4 justify-end mt-6">
// // // // //               <button
// // // // //                 onClick={() => setShowModal(false)}
// // // // //                 className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
// // // // //               >
// // // // //                 Close
// // // // //               </button>
// // // // //               <Link to="/LoginPage2">
// // // // //                 <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // // // //                   Continue to Login
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignUpPage;




// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import { Link } from 'react-router-dom';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import logo from './images/logo.jpg';
// // // // import b1 from './images/b1.jpg';

// // // // // Import animation CSS
// // // // import './animations.css';

// // // // const SignUpPage = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     password: '',
// // // //     confirmPassword: '',
// // // //     storeName: '',
// // // //     storeAddress: '',
// // // //     phoneNumber: '',
// // // //     enableMFA: false,
// // // //     agreeToTerms: false,
// // // //   });

// // // //   const [errors, setErrors] = useState({});
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [storeId, setStoreId] = useState('');
// // // //   const [showModal, setShowModal] = useState(false);
// // // //   const [activeSection, setActiveSection] = useState(1);
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   // Animation effect when component mounts
// // // //   useEffect(() => {
// // // //     setIsVisible(true);
    
// // // //     // Simulate staggered appearance of elements
// // // //     const timer = setTimeout(() => {
// // // //       document.querySelectorAll('.stagger-item').forEach((el, index) => {
// // // //         setTimeout(() => {
// // // //           el.classList.add('appear');
// // // //         }, 100 * index);
// // // //       });
// // // //     }, 300);
    
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: type === 'checkbox' ? checked : value,
// // // //     }));
    
// // // //     // Clear error when user starts typing
// // // //     if (errors[name]) {
// // // //       setErrors(prev => ({
// // // //         ...prev,
// // // //         [name]: null
// // // //       }));
// // // //     }
// // // //   };

// // // //   const validateSection = (section) => {
// // // //     const newErrors = {};
    
// // // //     if (section === 1) {
// // // //       if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // // //       if (!formData.email) newErrors.email = 'Email is required';
// // // //       if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
// // // //         newErrors.email = 'Please enter a valid email address';
// // // //       }
// // // //     } else if (section === 2) {
// // // //       if (!formData.password) newErrors.password = 'Password is required';
// // // //       if (formData.password && formData.password.length < 8) {
// // // //         newErrors.password = 'Password must be at least 8 characters';
// // // //       }
// // // //       if (formData.password !== formData.confirmPassword) {
// // // //         newErrors.confirmPassword = 'Passwords do not match';
// // // //       }
// // // //       if (!formData.storeName) newErrors.storeName = 'Store name is required';
// // // //     }
    
// // // //     setErrors(newErrors);
// // // //     return Object.keys(newErrors).length === 0;
// // // //   };

// // // //   const nextSection = () => {
// // // //     if (validateSection(activeSection)) {
// // // //       setActiveSection(prev => prev + 1);
      
// // // //       // Smooth scroll to top of form
// // // //       document.querySelector('.form-container').scrollIntoView({ 
// // // //         behavior: 'smooth',
// // // //         block: 'start'
// // // //       });
// // // //     }
// // // //   };

// // // //   const prevSection = () => {
// // // //     setActiveSection(prev => prev - 1);
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     if (!validateSection(activeSection)) {
// // // //       return;
// // // //     }
    
// // // //     if (!formData.agreeToTerms) {
// // // //       setErrors(prev => ({
// // // //         ...prev,
// // // //         agreeToTerms: 'You must agree to terms and conditions'
// // // //       }));
// // // //       return;
// // // //     }

// // // //     setLoading(true);

// // // //     try {
// // // //       // Add a slight delay to show the loading animation
// // // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // // //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // // //       setStoreId(response.data.storeId);
// // // //       setShowModal(true);
// // // //       setFormData({
// // // //         fullName: '',
// // // //         email: '',
// // // //         password: '',
// // // //         confirmPassword: '',
// // // //         storeName: '',
// // // //         storeAddress: '',
// // // //         phoneNumber: '',
// // // //         enableMFA: false,
// // // //         agreeToTerms: false,
// // // //       });
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert('Signup failed. Please try again.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleTermsClick = () => {
// // // //     window.open('/TermsAndConditions', '_blank');
// // // //   };

// // // //   const closeModal = () => {
// // // //     setShowModal(false);
// // // //   };

// // // //   // Progress calculation
// // // //   const progress = ((activeSection - 1) / 2) * 100;

// // // //   return (
// // // //     <div className="font-sans bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 min-h-screen">
// // // //       {/* Floating particles background */}
// // // //       <div className="particles-container">
// // // //         <div className="particle particle-1"></div>
// // // //         <div className="particle particle-2"></div>
// // // //         <div className="particle particle-3"></div>
// // // //         <div className="particle particle-4"></div>
// // // //         <div className="particle particle-5"></div>
// // // //       </div>

// // // //       <header className="backdrop-blur-sm bg-white/80 shadow-sm py-4 px-6 sticky top-0 z-10 transition-all duration-300">
// // // //         <div className="container mx-auto flex justify-between items-center">
// // // //           <div className="flex items-center gap-6">
// // // //             <Link to="/AboutPage" className="flex items-center group">
// // // //               <img src={logo} alt="Logo" className="w-10 h-10 rounded shadow-sm transition-transform duration-300 group-hover:scale-110" />
// // // //               <span className="ml-2 text-xl font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">BusinessHub</span>
// // // //             </Link>
// // // //             <nav className="hidden md:flex gap-6">
// // // //               <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium hover:scale-105 transition-transform relative nav-link">Home</Link>
// // // //               <Link to="/AboutPage" className="text-gray-600 hover:text-blue-600 font-medium hover:scale-105 transition-transform relative nav-link">About</Link>
// // // //               <Link to="/ContactUs" className="text-gray-600 hover:text-blue-600 font-medium hover:scale-105 transition-transform relative nav-link">Contact</Link>
// // // //             </nav>
// // // //           </div>
// // // //           <div className="flex gap-3">
// // // //             <Link to="/LoginPage">
// // // //               <button className="text-blue-600 hover:text-blue-700 border border-blue-600 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md hover:border-blue-700">Login</button>
// // // //             </Link>
// // // //             <Link to="/StoreReviews">
// // // //               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg">Reviews</button>
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       <div className="container mx-auto px-4 py-12">
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
// // // //           transition={{ duration: 0.5 }}
// // // //           className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto"
// // // //         >
// // // //           {/* Left panel */}
// // // //           <motion.div 
// // // //             initial={{ x: -50, opacity: 0 }}
// // // //             animate={{ x: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.7, delay: 0.2 }}
// // // //             className="w-full md:w-5/12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden"
// // // //           >
// // // //             {/* Animated gradient overlay */}
// // // //             <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 animate-gradient-slow"></div>
            
// // // //             <div className="relative z-10">
// // // //               <h1 className="text-3xl font-bold mb-4 stagger-item">Build Your Business</h1>
// // // //               <p className="text-lg opacity-90 mb-8 stagger-item">
// // // //                 Join thousands of entrepreneurs who've simplified their business management with our platform.
// // // //               </p>
              
// // // //               <div className="space-y-6 mb-10">
// // // //                 <motion.div 
// // // //                   className="flex items-start stagger-item"
// // // //                   whileHover={{ x: 5 }}
// // // //                   transition={{ type: "spring", stiffness: 300 }}
// // // //                 >
// // // //                   <div className="bg-white/20 p-2 rounded-full mr-3 flex-shrink-0 pulse-animation">
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // //                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // //                     </svg>
// // // //                   </div>
// // // //                   <div>
// // // //                     <h3 className="font-medium">Easy setup in minutes</h3>
// // // //                     <p className="text-sm opacity-80">Get your business online in just a few clicks</p>
// // // //                   </div>
// // // //                 </motion.div>
                
// // // //                 <motion.div 
// // // //                   className="flex items-start stagger-item"
// // // //                   whileHover={{ x: 5 }}
// // // //                   transition={{ type: "spring", stiffness: 300 }}
// // // //                 >
// // // //                   <div className="bg-white/20 p-2 rounded-full mr-3 flex-shrink-0 pulse-animation" style={{ animationDelay: "0.3s" }}>
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // //                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // //                     </svg>
// // // //                   </div>
// // // //                   <div>
// // // //                     <h3 className="font-medium">Integrated payment solutions</h3>
// // // //                     <p className="text-sm opacity-80">Accept payments effortlessly from customers</p>
// // // //                   </div>
// // // //                 </motion.div>
                
// // // //                 <motion.div 
// // // //                   className="flex items-start stagger-item"
// // // //                   whileHover={{ x: 5 }}
// // // //                   transition={{ type: "spring", stiffness: 300 }}
// // // //                 >
// // // //                   <div className="bg-white/20 p-2 rounded-full mr-3 flex-shrink-0 pulse-animation" style={{ animationDelay: "0.6s" }}>
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // //                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // // //                     </svg>
// // // //                   </div>
// // // //                   <div>
// // // //                     <h3 className="font-medium">24/7 customer support</h3>
// // // //                     <p className="text-sm opacity-80">Help is always available when you need it</p>
// // // //                   </div>
// // // //                 </motion.div>
// // // //               </div>
              
// // // //               <div className="mt-auto relative stagger-item">
// // // //                 <motion.div 
// // // //                   animate={{ 
// // // //                     y: [0, -10, 0],
// // // //                     rotate: [0, 5, 0]
// // // //                   }}
// // // //                   transition={{
// // // //                     duration: 6,
// // // //                     repeat: Infinity,
// // // //                     repeatType: "reverse"
// // // //                   }}
// // // //                   className="absolute bottom-4 right-4 w-28 h-28"
// // // //                 >
// // // //                   <img 
// // // //                     src={b1} 
// // // //                     alt="Business Success" 
// // // //                     className="w-28 h-28 rounded-full mx-auto border-4 border-white border-opacity-30 object-cover shadow-lg" 
// // // //                   />
// // // //                   <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full w-8 h-8 flex items-center justify-center shadow-md">
// // // //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// // // //                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // // //                     </svg>
// // // //                   </div>
// // // //                 </motion.div>
                
// // // //                 <div className="testimonial-quote relative pl-8 mt-16 ml-4 stagger-item">
// // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-0 top-0 text-white/40" fill="currentColor" viewBox="0 0 24 24">
// // // //                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
// // // //                   </svg>
// // // //                   <p className="text-sm italic">BusinessHub transformed my freelance career into a thriving business in just weeks!</p>
// // // //                   <p className="text-sm font-semibold mt-2">— Sarah J, Graphic Designer</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </motion.div>

// // // //           {/* Right panel - Form */}
// // // //           <motion.div 
// // // //             initial={{ x: 50, opacity: 0 }}
// // // //             animate={{ x: 0, opacity: 1 }}
// // // //             transition={{ duration: 0.7, delay: 0.4 }}
// // // //             className="w-full md:w-7/12 bg-white rounded-2xl shadow-xl p-8 form-container relative"
// // // //           >
// // // //             <div className="absolute top-0 right-0 left-0 h-1 bg-gray-100 rounded-t-2xl overflow-hidden">
// // // //               <motion.div 
// // // //                 className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
// // // //                 initial={{ width: "0%" }}
// // // //                 animate={{ width: `${progress}%` }}
// // // //                 transition={{ duration: 0.5 }}
// // // //               ></motion.div>
// // // //             </div>
            
// // // //             <h2 className="text-2xl font-bold text-gray-800 mb-2 relative stagger-item">
// // // //               {activeSection === 1 && "Create Your Account"}
// // // //               {activeSection === 2 && "Business Details"}
// // // //               {activeSection === 3 && "Almost Done"}
// // // //               <span className="absolute -top-2 -right-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Step {activeSection} of 3</span>
// // // //             </h2>
// // // //             <p className="text-gray-500 mb-6 stagger-item">
// // // //               {activeSection === 1 && "Let's get started with your information"}
// // // //               {activeSection === 2 && "Tell us about your business"}
// // // //               {activeSection === 3 && "Review and complete your registration"}
// // // //             </p>
            
// // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // //               <AnimatePresence mode="wait">
// // // //                 {activeSection === 1 && (
// // // //                   <motion.div
// // // //                     key="section1"
// // // //                     initial={{ opacity: 0, x: 20 }}
// // // //                     animate={{ opacity: 1, x: 0 }}
// // // //                     exit={{ opacity: 0, x: -20 }}
// // // //                     transition={{ duration: 0.3 }}
// // // //                   >
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                       <div className="input-wrapper">
// // // //                         <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-1">
// // // //                           Full Name*
// // // //                         </label>
// // // //                         <input
// // // //                           type="text"
// // // //                           id="fullName"
// // // //                           name="fullName"
// // // //                           value={formData.fullName}
// // // //                           onChange={handleChange}
// // // //                           placeholder="John Doe"
// // // //                           className={`w-full p-2.5 text-gray-800 border ${errors.fullName ? 'border-red-500 shake-animation' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
// // // //                         />
// // // //                         <AnimatePresence>
// // // //                           {errors.fullName && (
// // // //                             <motion.p 
// // // //                               initial={{ opacity: 0, y: -10 }} 
// // // //                               animate={{ opacity: 1, y: 0 }} 
// // // //                               exit={{ opacity: 0 }}
// // // //                               className="text-red-500 text-xs mt-1 flex items-center"
// // // //                             >
// // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // //                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // //                               </svg>
// // // //                               {errors.fullName}
// // // //                             </motion.p>
// // // //                           )}
// // // //                         </AnimatePresence>
// // // //                       </div>
                      
// // // //                       <div className="input-wrapper">
// // // //                         <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
// // // //                           Email Address*
// // // //                         </label>
// // // //                         <input
// // // //                           type="email"
// // // //                           id="email"
// // // //                           name="email"
// // // //                           value={formData.email}
// // // //                           onChange={handleChange}
// // // //                           placeholder="your@email.com"
// // // //                           className={`w-full p-2.5 text-gray-800 border ${errors.email ? 'border-red-500 shake-animation' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
// // // //                         />
// // // //                         <AnimatePresence>
// // // //                           {errors.email && (
// // // //                             <motion.p 
// // // //                               initial={{ opacity: 0, y: -10 }} 
// // // //                               animate={{ opacity: 1, y: 0 }} 
// // // //                               exit={{ opacity: 0 }}
// // // //                               className="text-red-500 text-xs mt-1 flex items-center"
// // // //                             >
// // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // //                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // //                               </svg>
// // // //                               {errors.email}
// // // //                             </motion.p>
// // // //                           )}
// // // //                         </AnimatePresence>
// // // //                       </div>
// // // //                     </div>
                    
// // // //                     <div className="mt-8 flex justify-end">
// // // //                       <motion.button
// // // //                         type="button"
// // // //                         onClick={nextSection}
// // // //                         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center"
// // // //                         whileHover={{ scale: 1.05 }}
// // // //                         whileTap={{ scale: 0.95 }}
// // // //                       >
// // // //                         Continue
// // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
// // // //                           <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
// // // //                         </svg>
// // // //                       </motion.button>
// // // //                     </div>
// // // //                   </motion.div>
// // // //                 )}

// // // //                 {activeSection === 2 && (
// // // //                   <motion.div
// // // //                     key="section2"
// // // //                     initial={{ opacity: 0, x: 20 }}
// // // //                     animate={{ opacity: 1, x: 0 }}
// // // //                     exit={{ opacity: 0, x: -20 }}
// // // //                     transition={{ duration: 0.3 }}
// // // //                   >
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                       <div className="input-wrapper">
// // // //                         <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
// // // //                           Password*
// // // //                         </label>
// // // //                         <div className="relative">
// // // //                           <input
// // // //                             type="password"
// // // //                             id="password"
// // // //                             name="password"
// // // //                             value={formData.password}
// // // //                             onChange={handleChange}
// // // //                             placeholder="••••••••"
// // // //                             className={`w-full p-2.5 text-gray-800 border ${errors.password ? 'border-red-500 shake-animation' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
// // // //                           />
// // // //                           <div className="absolute inset-y-0 right-0 flex items-center pr-3">
// // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
// // // //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
// // // //                             </svg>
// // // //                           </div>
// // // //                         </div>
// // // //                         <AnimatePresence>
// // // //                           {errors.password && (
// // // //                             <motion.p 
// // // //                               initial={{ opacity: 0, y: -10 }} 
// // // //                               animate={{ opacity: 1, y: 0 }} 
// // // //                               exit={{ opacity: 0 }}
// // // //                               className="text-red-500 text-xs mt-1 flex items-center"
// // // //                             >
// // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // //                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // //                               </svg>
// // // //                               {errors.password}
// // // //                             </motion.p>
// // // //                           )}
// // // //                         </AnimatePresence>
// // // //                       </div>
                      
// // // //                       <div className="input-wrapper">
// // // //                         <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-1">
// // // //                           Confirm Password*
// // // //                         </label>
// // // //                         <input
// // // //                           type="password"
// // // //                           id="confirmPassword"
// // // //                           name="confirmPassword"
// // // //                           value={formData.confirmPassword}
// // // //                           onChange={handleChange}
// // // //                           placeholder="••••••••"
// // // //                           className={`w-full p-2.5 text-gray-800 border ${errors.confirmPassword ? 'border-red-500 shake-animation' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
// // // //                         />
// // // //                         <AnimatePresence>
// // // //                           {errors.confirmPassword && (
// // // //                             <motion.p 
// // // //                               initial={{ opacity: 0, y: -10 }} 
// // // //                               animate={{ opacity: 1, y: 0 }} 
// // // // //                               exit={{ opacity: 0 }}
// // // // //                               className="text-red-500 text-xs mt-1 flex items-center"
// // // // //                             >
// // // // //                               <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // // //                               </svg>
// // // // //                               {errors.confirmPassword}
// // // // //                             </motion.p>
// // // // //                           )}
// // // // //                         </AnimatePresence>
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <div className="mt-4">
// // // // //                       <label htmlFor="storeName" className="block text-gray-700 text-sm font-medium mb-1">
// // // // //                         Business/Store Name*
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         id="storeName"
// // // // //                         name="storeName"
// // // // //                         value={formData.storeName}
// // // // //                         onChange={handleChange}
// // // // //                         placeholder="Your Business Name"
// // // // //                         className={`w-full p-2.5 text-gray-800 border ${errors.storeName ? 'border-red-500 shake-animation' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
// // // // //                       />
// // // // //                       <AnimatePresence>
// // // // //                         {errors.storeName && (
// // // // //                           <motion.p 
// // // // //                             initial={{ opacity: 0, y: -10 }} 
// // // // //                             animate={{ opacity: 1, y: 0 }} 
// // // // //                             exit={{ opacity: 0 }}
// // // // //                             className="text-red-500 text-xs mt-1 flex items-center"
// // // // //                           >
// // // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                               <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // // //                             </svg>
// // // // //                             {errors.storeName}
// // // // //                           </motion.p>
// // // // //                         )}
// // // // //                       </AnimatePresence>
// // // // //                     </div>
                    
// // // // //                     <div className="mt-8 flex justify-between">
// // // // //                       <motion.button
// // // // //                         type="button"
// // // // //                         onClick={prevSection}
// // // // //                         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-
// // // // //                         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center"
// // // // //                         whileHover={{ scale: 1.05 }}
// // // // //                         whileTap={{ scale: 0.95 }}
// // // // //                       >
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                           <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// // // // //                         </svg>
// // // // //                         Back
// // // // //                       </motion.button>
                      
// // // // //                       <motion.button
// // // // //                         type="button"
// // // // //                         onClick={nextSection}
// // // // //                         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center"
// // // // //                         whileHover={{ scale: 1.05 }}
// // // // //                         whileTap={{ scale: 0.95 }}
// // // // //                       >
// // // // //                         Continue
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                           <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
// // // // //                         </svg>
// // // // //                       </motion.button>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 )}

// // // // //                 {activeSection === 3 && (
// // // // //                   <motion.div
// // // // //                     key="section3"
// // // // //                     initial={{ opacity: 0, x: 20 }}
// // // // //                     animate={{ opacity: 1, x: 0 }}
// // // // //                     exit={{ opacity: 0, x: -20 }}
// // // // //                     transition={{ duration: 0.3 }}
// // // // //                   >
// // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // //                       <div className="input-wrapper">
// // // // //                         <label htmlFor="storeAddress" className="block text-gray-700 text-sm font-medium mb-1">
// // // // //                           Business Address (Optional)
// // // // //                         </label>
// // // // //                         <textarea
// // // // //                           id="storeAddress"
// // // // //                           name="storeAddress"
// // // // //                           value={formData.storeAddress}
// // // // //                           onChange={handleChange}
// // // // //                           placeholder="123 Business St, City, State, ZIP"
// // // // //                           rows="3"
// // // // //                           className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                         ></textarea>
// // // // //                       </div>
                      
// // // // //                       <div className="input-wrapper">
// // // // //                         <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-medium mb-1">
// // // // //                           Phone Number (Optional)
// // // // //                         </label>
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           id="phoneNumber"
// // // // //                           name="phoneNumber"
// // // // //                           value={formData.phoneNumber}
// // // // //                           onChange={handleChange}
// // // // //                           placeholder="(123) 456-7890"
// // // // //                           className="w-full p-2.5 text-gray-800 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
// // // // //                         />
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <div className="mt-4">
// // // // //                       <div className="flex items-center my-4">
// // // // //                         <input
// // // // //                           type="checkbox"
// // // // //                           id="enableMFA"
// // // // //                           name="enableMFA"
// // // // //                           checked={formData.enableMFA}
// // // // //                           onChange={handleChange}
// // // // //                           className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
// // // // //                         />
// // // // //                         <label htmlFor="enableMFA" className="ml-2 text-sm text-gray-700">
// // // // //                           Enable two-factor authentication for enhanced security
// // // // //                         </label>
// // // // //                       </div>
                      
// // // // //                       <div className="flex items-start mb-4">
// // // // //                         <div className="flex items-center h-5">
// // // // //                           <input
// // // // //                             type="checkbox"
// // // // //                             id="agreeToTerms"
// // // // //                             name="agreeToTerms"
// // // // //                             checked={formData.agreeToTerms}
// // // // //                             onChange={handleChange}
// // // // //                             className={`w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300 ${errors.agreeToTerms ? 'shake-animation' : ''}`}
// // // // //                           />
// // // // //                         </div>
// // // // //                         <div className="ml-2 text-sm">
// // // // //                           <label htmlFor="agreeToTerms" className="text-gray-700">
// // // // //                             I agree to the{' '}
// // // // //                             <button 
// // // // //                               type="button" 
// // // // //                               onClick={handleTermsClick} 
// // // // //                               className="text-blue-600 hover:underline focus:outline-none"
// // // // //                             >
// // // // //                               Terms and Conditions
// // // // //                             </button>
// // // // //                           </label>
// // // // //                           <AnimatePresence>
// // // // //                             {errors.agreeToTerms && (
// // // // //                               <motion.p 
// // // // //                                 initial={{ opacity: 0, y: -10 }} 
// // // // //                                 animate={{ opacity: 1, y: 0 }} 
// // // // //                                 exit={{ opacity: 0 }}
// // // // //                                 className="text-red-500 text-xs mt-1 flex items-center"
// // // // //                               >
// // // // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                                   <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // // // //                                 </svg>
// // // // //                                 {errors.agreeToTerms}
// // // // //                               </motion.p>
// // // // //                             )}
// // // // //                           </AnimatePresence>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
                    
// // // // //                     <div className="mt-8 flex justify-between">
// // // // //                       <motion.button
// // // // //                         type="button"
// // // // //                         onClick={prevSection}
// // // // //                         className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center"
// // // // //                         whileHover={{ scale: 1.05 }}
// // // // //                         whileTap={{ scale: 0.95 }}
// // // // //                       >
// // // // //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                           <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
// // // // //                         </svg>
// // // // //                         Back
// // // // //                       </motion.button>
                      
// // // // //                       <motion.button
// // // // //                         type="submit"
// // // // //                         className={`px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 flex items-center ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-indigo-700'}`}
// // // // //                         disabled={loading}
// // // // //                         whileHover={{ scale: loading ? 1 : 1.05 }}
// // // // //                         whileTap={{ scale: loading ? 1 : 0.95 }}
// // // // //                       >
// // // // //                         {loading ? (
// // // // //                           <>
// // // // //                             <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // // // //                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // // // //                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // // // //                             </svg>
// // // // //                             Creating Account...
// // // // //                           </>
// // // // //                         ) : (
// // // // //                           <>
// // // // //                             Create Account
// // // // //                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
// // // // //                               <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
// // // // //                             </svg>
// // // // //                           </>
// // // // //                         )}
// // // // //                       </motion.button>
// // // // //                     </div>
// // // // //                   </motion.div>
// // // // //                 )}
// // // // //               </AnimatePresence>
// // // // //             </form>
            
// // // // //             <div className="mt-6 text-center text-gray-500 text-sm stagger-item">
// // // // //               <p>
// // // // //                 Already have an account?{' '}
// // // // //                 <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">
// // // // //                   Sign in
// // // // //                 </Link>
// // // // //               </p>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       </div>

// // // // //       {/* Success Modal */}
// // // // //       <AnimatePresence>
// // // // //         {showModal && (
// // // // //           <motion.div 
// // // // //             initial={{ opacity: 0 }}
// // // // //             animate={{ opacity: 1 }}
// // // // //             exit={{ opacity: 0 }}
// // // // //             className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 backdrop-blur-sm"
// // // // //           >
// // // // //             <motion.div 
// // // // //               initial={{ scale: 0.9, y: 20, opacity: 0 }}
// // // // //               animate={{ scale: 1, y: 0, opacity: 1 }}
// // // // //               exit={{ scale: 0.9, y: 20, opacity: 0 }}
// // // // //               transition={{ type: "spring", duration: 0.5 }}
// // // // //               className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
// // // // //             >
// // // // //               {/* Confetti effect */}
// // // // //               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-30"></div>
// // // // //               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full opacity-30"></div>
              
// // // // //               <div className="relative z-10">
// // // // //                 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // // // //                   </svg>
// // // // //                 </div>
// // // // //                 <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">Registration Successful!</h3>
// // // // //                 <p className="text-gray-600 text-center mb-6">
// // // // //                   Your business account has been created. Here's your unique store ID:
// // // // //                 </p>
                
// // // // //                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
// // // // //                   <p className="font-mono text-center text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
// // // // //                     {storeId}
// // // // //                   </p>
// // // // //                   <p className="text-gray-500 text-xs text-center mt-1">
// // // // //                     Keep this ID safe - you'll need it for important account operations
// // // // //                   </p>
// // // // //                 </div>
                
// // // // //                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
// // // // //                   <motion.button 
// // // // //                     className="order-2 sm:order-1 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
// // // // //                     onClick={closeModal}
// // // // //                     whileHover={{ scale: 1.03 }}
// // // // //                     whileTap={{ scale: 0.97 }}
// // // // //                   >
// // // // //                     Close
// // // // //                   </motion.button>
// // // // //                   <Link to="/LoginPage" className="order-1 sm:order-2">
// // // // //                     <motion.button 
// // // // //                       className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium"
// // // // //                       whileHover={{ scale: 1.03 }}
// // // // //                       whileTap={{ scale: 0.97 }}
// // // // //                     >
// // // // //                       Go to Login
// // // // //                     </motion.button>
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           </motion.div>
// // // // //         )}
// // // // //       </AnimatePresence>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignUpPage;
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';
// // // import logo from './images/logo.jpg';
// // // import b1 from './images/b1.jpg';

// // // const SignUpPage = () => {
// // //     const [formData, setFormData] = useState({
// // //         fullName: '',
// // //         email: '',
// // //         password: '',
// // //         confirmPassword: '',
// // //         storeName: '',
// // //         storeAddress: '',
// // //         phoneNumber: '',
// // //         agreeToTerms: false,
// // //     });

// // //     const [errors, setErrors] = useState({});
// // //     const [loading, setLoading] = useState(false);
// // //     const [storeId, setStoreId] = useState('');
// // //     const [showModal, setShowModal] = useState(false);

// // //     const handleChange = (e) => {
// // //         const { name, value, type, checked } = e.target;
// // //         setFormData((prev) => ({
// // //             ...prev,
// // //             [name]: type === 'checkbox' ? checked : value,
// // //         }));
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         setLoading(true);

// // //         const newErrors = {};
// // //         if (!formData.fullName) newErrors.fullName = 'Full name is required';
// // //         if (!formData.email) newErrors.email = 'Email is required';
// // //         if (!formData.password) newErrors.password = 'Password is required';
// // //         if (formData.password !== formData.confirmPassword) {
// // //             newErrors.confirmPassword = 'Passwords do not match';
// // //         }
// // //         if (!formData.agreeToTerms) {
// // //             newErrors.agreeToTerms = 'You must agree to terms and conditions';
// // //         }

// // //         if (Object.keys(newErrors).length > 0) {
// // //             setErrors(newErrors);
// // //             setLoading(false);
// // //             return;
// // //         }

// // //         try {
// // //             const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// // //             setStoreId(response.data.storeId);
// // //             setShowModal(true);
// // //             setFormData({
// // //                 fullName: '',
// // //                 email: '',
// // //                 password: '',
// // //                 confirmPassword: '',
// // //                 storeName: '',
// // //                 storeAddress: '',
// // //                 phoneNumber: '',
// // //                 agreeToTerms: false,
// // //             });
// // //         } catch (error) {
// // //             console.error(error);
// // //             alert('Signup failed. Please try again.');
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const handleTermsClick = () => {
// // //         window.open('/TermsAndConditions', '_blank');
// // //     };

// // //     const closeModal = () => {
// // //         setShowModal(false);
// // //     };

// // //     return (
// // //         <div className="font-sans bg-gradient-to-r from-purple-100 to-blue-100 text-gray-800 min-h-screen">
// // //             <header className="flex justify-between items-center p-4 bg-white shadow-md">
// // //                 <div className="flex items-center gap-4">
// // //                     <Link to="/AboutPage">
// // //                         <img src={logo} alt="Logo" className="w-12 h-12 rounded-md shadow border border-gray-200" />
// // //                     </Link>
// // //                     <nav className="flex gap-6">
// // //                         <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
// // //                         <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
// // //                         <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
// // //                     </nav>
// // //                 </div>
// // //                 <div className="flex gap-3">
// // //                     <Link to="/LoginPage">
// // //                         <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors">Login</button>
// // //                     </Link>
// // //                     <Link to="/StoreReviews">
// // //                         <button className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition-colors">Leave a Review</button>
// // //                     </Link>
// // //                 </div>
// // //             </header>

// // //             <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
// // //                 <div className="flex flex-col md:flex-row gap-8 items-start">
// // //                     {/* Left Column - Info */}
// // //                     <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl shadow-lg overflow-hidden text-white">
// // //                         <div className="p-8">
// // //                             <h1 className="text-4xl font-bold mb-4">Welcome to Your Business Journey</h1>
// // //                             <div className="h-1 w-24 bg-white mb-6"></div>
// // //                             <p className="text-lg font-light mb-8">
// // //                                 Simplify your business setup. Register and start growing your business in no time.
// // //                             </p>

// // //                             <div className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8">
// // //                                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
// // //                                 <ul className="space-y-3">
// // //                                     <li className="flex items-center gap-3">
// // //                                         <div className="bg-white text-purple-600 rounded-full p-1">
// // //                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         Easy business management
// // //                                     </li>
// // //                                     <li className="flex items-center gap-3">
// // //                                         <div className="bg-white text-purple-600 rounded-full p-1">
// // //                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         Customer management tools
// // //                                     </li>
// // //                                     <li className="flex items-center gap-3">
// // //                                         <div className="bg-white text-purple-600 rounded-full p-1">
// // //                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                                             </svg>
// // //                                         </div>
// // //                                         Grow your business faster
// // //                                     </li>
// // //                                 </ul>
// // //                             </div>
// // //                         </div>

// // //                         <div className="flex justify-center pb-8">
// // //                             <img
// // //                                 src={b1}
// // //                                 alt="Person"
// // //                                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
// // //                             />
// // //                         </div>
// // //                     </div>

// // //                     {/* Right Column - Form */}
// // //                     <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8">
// // //                         <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
// // //                         <p className="text-gray-500 mb-8">Sign up and get started today</p>

// // //                         <form onSubmit={handleSubmit} className="space-y-5">
// // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // //                                 <div>
// // //                                     <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">FullName</label>
// // //                                     <input
// // //                                         type="text"
// // //                                         id="fullName"
// // //                                         name="fullName"
// // //                                         value={formData.fullName}
// // //                                         onChange={handleChange}
// // //                                         placeholder="Enter your full name"
// // //                                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                     />
// // //                                     {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// // //                                 </div>

// // //                                 <div>
// // //                                     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
// // //                                     <input
// // //                                         type="email"
// // //                                         id="email"
// // //                                         name="email"
// // //                                         value={formData.email}
// // //                                         onChange={handleChange}
// // //                                         placeholder="Enter your email"
// // //                                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                     />
// // //                                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// // //                                 </div>
// // //                             </div>

// // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// // //                                 <div>
// // //                                     <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
// // //                                     <input
// // //                                         type="password"
// // //                                         id="password"
// // //                                         name="password"
// // //                                         value={formData.password}
// // //                                         onChange={handleChange}
// // //                                         placeholder="Enter your password"
// // //                                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                     />
// // //                                     {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// // //                                 </div>

// // //                                 <div>
// // //                                     <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
// // //                                     <input
// // //                                         type="password"
// // //                                         id="confirmPassword"
// // //                                         name="confirmPassword"
// // //                                         value={formData.confirmPassword}
// // //                                         onChange={handleChange}
// // //                                         placeholder="Confirm your password"
// // //                                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                     />
// // //                                     {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
// // //                                 </div>
// // //                             </div>

// // //                             <div>
// // //                                 <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     id="storeName"
// // //                                     name="storeName"
// // //                                     value={formData.storeName}
// // //                                     onChange={handleChange}
// // //                                     placeholder="Enter your store name"
// // //                                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                 />
// // //                             </div>

// // //                             <div>
// // //                                 <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
// // //                                 <textarea
// // //                                     id="storeAddress"
// // //                                     name="storeAddress"
// // //                                     value={formData.storeAddress}
// // //                                     onChange={handleChange}
// // //                                     placeholder="Enter your store address"
// // //                                     rows="2"
// // //                                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                 ></textarea>
// // //                             </div>

// // //                             <div>
// // //                                 <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
// // //                                 <input
// // //                                     type="text"
// // //                                     id="phoneNumber"
// // //                                     name="phoneNumber"
// // //                                     value={formData.phoneNumber}
// // //                                     onChange={handleChange}
// // //                                     placeholder="Enter your phone number"
// // //                                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// // //                                 />
// // //                             </div>

// // //                             <div className="flex items-center">
// // //                                 <input
// // //                                     type="checkbox"
// // //                                     id="agreeToTerms"
// // //                                     name="agreeToTerms"
// // //                                     checked={formData.agreeToTerms}
// // //                                     onChange={handleChange}
// // //                                     className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
// // //                                 />
// // //                                 <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
// // //                                     I agree to the
// // //                                     <button
// // //                                         type="button"
// // //                                         onClick={handleTermsClick}
// // //                                         className="text-blue-600 hover:text-blue-800 underline ml-1"
// // //                                     >
// // //                                         Terms and Conditions
// // //                                     </button>
// // //                                 </label>
// // //                                 {errors.agreeToTerms && <p className="text-red-500 ml-2 text-sm">{errors.agreeToTerms}</p>}
// // //                             </div>

// // //                             <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
// // //                                 {loading ? 'Signing Up...' : 'Sign Up Now'}
// // //                             </button>
// // //                         </form>

// // //                         <p className="mt-6 text-center text-gray-700">
// // //                             Already have an account?{' '}
// // //                             <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Login Here</Link>
// // //                         </p>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Success Modal */}
// // //             {showModal && (
// // //                 <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
// // //                     <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
// // //                         <div className="text-center">
// // //                             <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
// // //                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// // //                                 </svg>
// // //                             </div>
// // //                             <h3 className="text-xl font-bold text-gray-800 mb-2">Signup Successful!</h3>
// // //                             <p className="text-gray-600 mb-4">Your store has been created successfully. Your unique store ID is:</p>
// // //                             <div className="bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 font-mono text-lg text-gray-800 mb-4">{storeId}</div>
// // //                             <p className="text-gray-500 text-sm mb-6">Please save this ID for your records.</p><div className="flex gap-3 justify-center">
// // //                                 <button
// // //                                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition-colors"
// // //                                     onClick={closeModal}
// // //                                 >
// // //                                     Close
// // //                                 </button>
// // //                                 <Link to="/LoginPage2">
// // //                                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors">
// // //                                         Back to Login
// // //                                     </button>
// // //                                 </Link>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default SignUpPage;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import logo from './images/logo.jpg';
// // import b1 from './images/b1.jpg';

// // const SignUpPage = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     storeName: '',
// //     storeAddress: '',
// //     phoneNumber: '',
// //     enableMFA: false,
// //     agreeToTerms: false,
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const [storeId, setStoreId] = useState('');
// //   const [showModal, setShowModal] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const newErrors = {};
// //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// //     if (!formData.email) newErrors.email = 'Email is required';
// //     if (!formData.password) newErrors.password = 'Password is required';
// //     if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }
// //     if (!formData.agreeToTerms) {
// //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// //     }

// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors);
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// //       setStoreId(response.data.storeId);
// //       setShowModal(true);
// //       setFormData({
// //         fullName: '',
// //         email: '',
// //         password: '',
// //         confirmPassword: '',
// //         storeName: '',
// //         storeAddress: '',
// //         phoneNumber: '',
// //         enableMFA: false,
// //         agreeToTerms: false,
// //       });
// //     } catch (error) {
// //       console.error(error);
// //       alert('Signup failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleTermsClick = () => {
// //     window.open('/TermsAndConditions', '_blank');
// //   };

// //   const closeModal = () => {
// //     setShowModal(false);
// //   };

// //   return (
// //     <div className="font-sans bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 min-h-screen">
// //       <header className="flex justify-between items-center p-4 bg-white shadow-md">
// //         <div className="flex items-center gap-4">
// //           <Link to="/AboutPage">
// //             <img src={logo} alt="Logo" className="w-12 h-12 rounded-md shadow border border-gray-200" />
// //           </Link>
// //           <nav className="flex gap-6">
// //             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
// //             <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
// //             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
// //           </nav>
// //         </div>
// //         <div className="flex gap-3">
// //           <Link to="/LoginPage">
// //             <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors">Login</button>
// //           </Link>
// //           <Link to="/StoreReviews">
// //             <button className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition-colors">Leave a Review</button>
// //           </Link>
// //         </div>
// //       </header>

// //       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
// //         <div className="flex flex-col md:flex-row gap-8 items-start">
// //           {/* Left Column - Info */}
// //           <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white">
// //             <div className="p-8">
// //               <h1 className="text-4xl font-bold mb-4">Welcome to Your Business Journey</h1>
// //               <div className="h-1 w-24 bg-white mb-6"></div>
// //               <p className="text-lg font-light mb-8">
// //                 Simplify your freelance business setup. Register and start growing your business in no time.
// //               </p>
              
// //               <div className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8">
// //                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
// //                 <ul className="space-y-3">
// //                   <li className="flex items-center gap-3">
// //                     <div className="bg-white text-purple-600 rounded-full p-1">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     Easy business management
// //                   </li>
// //                   <li className="flex items-center gap-3">
// //                     <div className="bg-white text-purple-600 rounded-full p-1">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     Customer management tools
// //                   </li>
// //                   <li className="flex items-center gap-3">
// //                     <div className="bg-white text-purple-600 rounded-full p-1">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     Grow your business faster
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
            
// //             <div className="flex justify-center pb-8">
// //               <img 
// //                 src={b1} 
// //                 alt="Jonas Kim" 
// //                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
// //               />
// //             </div>
// //           </div>
          
// //           {/* Right Column - Form */}
// //           <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
// //             <p className="text-gray-500 mb-8">Sign up and get started today</p>
            
// //             <form onSubmit={handleSubmit} className="space-y-5">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div>
// //                   <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     name="fullName"
// //                     value={formData.fullName}
// //                     onChange={handleChange}
// //                     placeholder="Enter your full name"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// //                 </div>

// //                 <div>
// //                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder="Enter your email"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div>
// //                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     name="password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                     placeholder="Enter your password"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //                 </div>

// //                 <div>
// //                   <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
// //                   <input
// //                     type="password"
// //                     id="confirmPassword"
// //                     name="confirmPassword"
// //                     value={formData.confirmPassword}
// //                     onChange={handleChange}
// //                     placeholder="Confirm your password"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name</label>
// //                 <input
// //                   type="text"
// //                   id="storeName"
// //                   name="storeName"
// //                   value={formData.storeName}
// //                   onChange={handleChange}
// //                   placeholder="Enter your store name"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
// //                 <textarea
// //                   id="storeAddress"
// //                   name="storeAddress"
// //                   value={formData.storeAddress}
// //                   onChange={handleChange}
// //                   placeholder="Enter your store address"
// //                   rows="2"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                 ></textarea>
// //               </div>

// //               <div>
// //                 <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
// //                 <input
// //                   type="text"
// //                   id="phoneNumber"
// //                   name="phoneNumber"
// //                   value={formData.phoneNumber}
// //                   onChange={handleChange}
// //                   placeholder="Enter your phone number"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                 />
// //               </div>

// //               <div className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   id="agreeToTerms"
// //                   name="agreeToTerms"
// //                   checked={formData.agreeToTerms}
// //                   onChange={handleChange}
// //                   className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
// //                 />
// //                 <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
// //                   I agree to the 
// //                   <button 
// //                     type="button" 
// //                     onClick={handleTermsClick} 
// //                     className="text-blue-600 hover:text-blue-800 underline ml-1"
// //                   >
// //                     Terms and Conditions
// //                   </button>
// //                 </label>
// //                 {errors.agreeToTerms && <p className="text-red-500 ml-2 text-sm">{errors.agreeToTerms}</p>}
// //               </div>

// //               <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
// //                 {loading ? 'Signing Up...' : 'Sign Up Now'}
// //               </button>
// //             </form>

// //             <p className="mt-6 text-center text-gray-700">
// //               Already have an account?{' '}
// //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Login Here</Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Success Modal */}
// //       {showModal && (
// //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
// //           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
// //             <div className="text-center">
// //               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                 </svg>
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-800 mb-2">Signup Successful!</h3>
// //               <p className="text-gray-600 mb-4">Your store has been created successfully. Your unique store ID is:</p>
// //               <div className="bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 font-mono text-lg text-gray-800 mb-4">{storeId}</div>
// //               <p className="text-gray-500 text-sm mb-6">Please save this ID for your records.</p>
// //               <div className="flex gap-3 justify-center">
// //                 <button 
// //                   className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition-colors" 
// //                   onClick={closeModal}
// //                 >
// //                   Close
// //                 </button>
// //                 <Link to="/LoginPage2">
// //                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors">
// //                     Back to Login
// //                   </button>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SignUpPage;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import logo from './images/logo.jpg';
// // import b1 from './images/b1.jpg';

// // const SignUpPage = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     storeName: '',
// //     storeAddress: '',
// //     phoneNumber: '',
// //     enableMFA: false,
// //     agreeToTerms: false,
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [loading, setLoading] = useState(false);
// //   const [storeId, setStoreId] = useState('');
// //   const [showOTPModal, setShowOTPModal] = useState(false);
// //   const [otp, setOtp] = useState('');
// //   const [email, setEmail] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const newErrors = {};
// //     if (!formData.fullName) newErrors.fullName = 'Full name is required';
// //     if (!formData.email) newErrors.email = 'Email is required';
// //     if (!formData.password) newErrors.password = 'Password is required';
// //     if (formData.password !== formData.confirmPassword) {
// //       newErrors.confirmPassword = 'Passwords do not match';
// //     }
// //     if (!formData.agreeToTerms) {
// //       newErrors.agreeToTerms = 'You must agree to terms and conditions';
// //     }

// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors);
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('http://127.0.0.1:5003/signup', formData);
// //       setEmail(formData.email);
// //       setShowOTPModal(true);
// //     } catch (error) {
// //       console.error(error);
// //       alert('Signup failed. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleOTPSubmit = async () => {
// //     try {
// //       const response = await axios.post('http://127.0.0.1:5003/verify-otp', {
// //         email: email,
// //         otp: otp,
// //       });
// //       setStoreId(response.data.storeId);
// //       setShowOTPModal(false);
// //       alert('Signup successful!');
// //     } catch (error) {
// //       console.error(error);
// //       alert('Invalid OTP. Please try again.');
// //     }
// //   };

// //   const handleTermsClick = () => {
// //     window.open('/TermsAndConditions', '_blank');
// //   };

// //   return (
// //     <div className="font-sans bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 min-h-screen">
// //       <header className="flex justify-between items-center p-4 bg-white shadow-md">
// //         <div className="flex items-center gap-4">
// //           <Link to="/AboutPage">
// //             <img src={logo} alt="Logo" className="w-12 h-12 rounded-md shadow border border-gray-200" />
// //           </Link>
// //           <nav className="flex gap-6">
// //             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
// //             <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
// //             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
// //           </nav>
// //         </div>
// //         <div className="flex gap-3">
// //           <Link to="/LoginPage">
// //             <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors">Login</button>
// //           </Link>
// //           <Link to="/StoreReviews">
// //             <button className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition-colors">Leave a Review</button>
// //           </Link>
// //         </div>
// //       </header>

// //       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
// //         <div className="flex flex-col md:flex-row gap-8 items-start">
// //           {/* Left Column - Info */}
// //           <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white">
// //             <div className="p-8">
// //               <h1 className="text-4xl font-bold mb-4">Welcome to Your Business Journey</h1>
// //               <div className="h-1 w-24 bg-white mb-6"></div>
// //               <p className="text-lg font-light mb-8">
// //                 Simplify your freelance business setup. Register and start growing your business in no time.
// //               </p>
              
// //               <div className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8">
// //                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
// //                 <ul className="space-y-3">
// //                   <li className="flex items-center gap-3">
// //                     <div className="bg-white text-purple-600 rounded-full p-1">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     Easy business management
// //                   </li>
// //                   <li className="flex items-center gap-3">
// //                     <div className="bg-white text-purple-600 rounded-full p-1">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     Customer management tools
// //                   </li>
// //                   <li className="flex items-center gap-3">
// //                     <div className="bg-white text-purple-600 rounded-full p-1">
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
// //                       </svg>
// //                     </div>
// //                     Grow your business faster
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
            
// //             <div className="flex justify-center pb-8">
// //               <img 
// //                 src={b1} 
// //                 alt="Jonas Kim" 
// //                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
// //               />
// //             </div>
// //           </div>
          
// //           {/* Right Column - Form */}
// //           <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8">
// //             <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
// //             <p className="text-gray-500 mb-8">Sign up and get started today</p>
            
// //             <form onSubmit={handleSubmit} className="space-y-5">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div>
// //                   <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
// //                   <input
// //                     type="text"
// //                     id="fullName"
// //                     name="fullName"
// //                     value={formData.fullName}
// //                     onChange={handleChange}
// //                     placeholder="Enter your full name"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// //                 </div>

// //                 <div>
// //                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder="Enter your email"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //                 </div>
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div>
// //                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
// //                   <input
// //                     type="password"
// //                     id="password"
// //                     name="password"
// //                     value={formData.password}
// //                     onChange={handleChange}
// //                     placeholder="Enter your password"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //                 </div>

// //                 <div>
// //                   <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
// //                   <input
// //                     type="password"
// //                     id="confirmPassword"
// //                     name="confirmPassword"
// //                     value={formData.confirmPassword}
// //                     onChange={handleChange}
// //                     placeholder="Confirm your password"
// //                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                   />
// //                   {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name</label>
// //                 <input
// //                   type="text"
// //                   id="storeName"
// //                   name="storeName"
// //                   value={formData.storeName}
// //                   onChange={handleChange}
// //                   placeholder="Enter your store name"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
// //                 <textarea
// //                   id="storeAddress"
// //                   name="storeAddress"
// //                   value={formData.storeAddress}
// //                   onChange={handleChange}
// //                   placeholder="Enter your store address"
// //                   rows="2"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                 ></textarea>
// //               </div>

// //               <div>
// //                 <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
// //                 <input
// //                   type="text"
// //                   id="phoneNumber"
// //                   name="phoneNumber"
// //                   value={formData.phoneNumber}
// //                   onChange={handleChange}
// //                   placeholder="Enter your phone number"
// //                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
// //                 />
// //               </div>

// //               <div className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   id="agreeToTerms"
// //                   name="agreeToTerms"
// //                   checked={formData.agreeToTerms}
// //                   onChange={handleChange}
// //                   className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
// //                 />
// //                 <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
// //                   I agree to the 
// //                   <button 
// //                     type="button" 
// //                     onClick={handleTermsClick} 
// //                     className="text-blue-600 hover:text-blue-800 underline ml-1"
// //                   >
// //                     Terms and Conditions
// //                   </button>
// //                 </label>
// //                 {errors.agreeToTerms && <p className="text-red-500 ml-2 text-sm">{errors.agreeToTerms}</p>}
// //               </div>

// //               <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
// //                 {loading ? 'Signing Up...' : 'Sign Up Now'}
// //               </button>
// //             </form>

// //             <p className="mt-6 text-center text-gray-700">
// //               Already have an account?{' '}
// //               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Login Here</Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* OTP Verification Modal */}
// //       {showOTPModal && (
// //         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
// //           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
// //             <h3 className="text-xl font-bold text-gray-800 mb-4">Verify Your Email</h3>
// //             <p className="text-gray-600 mb-4">Enter the OTP sent to your email.</p>
// //             <input
// //               type="text"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //               placeholder="Enter OTP"
// //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 mb-4"
// //             />
// //             <button
// //               onClick={handleOTPSubmit}
// //               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors w-full"
// //             >
// //               Verify OTP
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default SignUpPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import logo from './images/logo.jpg';
// import b1 from './images/b1.jpg';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     storeName: '',
//     storeAddress: '',
//     phoneNumber: '',
//     enableMFA: false,
//     agreeToTerms: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [storeId, setStoreId] = useState('');
//   const [showOTPModal, setShowOTPModal] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [email, setEmail] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const newErrors = {};
//     if (!formData.fullName) newErrors.fullName = 'Full name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to terms and conditions';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);
//       setEmail(formData.email);
//       setShowOTPModal(true);
//     } catch (error) {
//       console.error(error);
//       alert('Signup failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOTPSubmit = async () => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify-otp`, {
//         email: email,
//         otp: otp,
//       });
//       setStoreId(response.data.storeId);
//       setShowOTPModal(false);
//       alert('Signup successful!');
//     } catch (error) {
//       console.error(error);
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   const handleTermsClick = () => {
//     window.open('/TermsAndConditions', '_blank');
//   };

//   return (
//     <div className="font-sans bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 min-h-screen">
//       <header className="flex justify-between items-center p-4 bg-white shadow-md">
//         <div className="flex items-center gap-4">
//           <Link to="/AboutPage">
//             <img src={logo} alt="Logo" className="w-12 h-12 rounded-md shadow border border-gray-200" />
//           </Link>
//           <nav className="flex gap-6">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
//             <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
//             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
//           </nav>
//         </div>
//         <div className="flex gap-3">
//           <Link to="/LoginPage">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors">Login</button>
//           </Link>
//           <Link to="/StoreReviews">
//             <button className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition-colors">Leave a Review</button>
//           </Link>
//         </div>
//       </header>

//       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Left Column - Info */}
//           <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white">
//             <div className="p-8">
//               <h1 className="text-4xl font-bold mb-4">Welcome to Your Business Journey</h1>
//               <div className="h-1 w-24 bg-white mb-6"></div>
//               <p className="text-lg font-light mb-8">
//                 Simplify your freelance business setup. Register and start growing your business in no time.
//               </p>
              
//               <div className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8">
//                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-center gap-3">
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Easy business management
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Customer management tools
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Grow your business faster
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="flex justify-center pb-8">
//               <img 
//                 src={b1} 
//                 alt="Jonas Kim" 
//                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
//               />
//             </div>
//           </div>
          
//           {/* Right Column - Form */}
//           <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
//             <p className="text-gray-500 mb-8">Sign up and get started today</p>
            
//             <form onSubmit={handleSubmit} className="space-y-5">
              // <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              //   <div>
              //     <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
              //     <input
              //       type="text"
              //       id="fullName"
              //       name="fullName"
              //       value={formData.fullName}
              //       onChange={handleChange}
              //       placeholder="Enter your full name"
              //       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //     />
              //     {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              //   </div>

              //   <div>
              //     <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              //     <input
              //       type="email"
              //       id="email"
              //       name="email"
              //       value={formData.email}
              //       onChange={handleChange}
              //       placeholder="Enter your email"
              //       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //     />
              //     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              //   </div>
              // </div>

              // <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              //   <div>
              //     <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              //     <input
              //       type="password"
              //       id="password"
              //       name="password"
              //       value={formData.password}
              //       onChange={handleChange}
              //       placeholder="Enter your password"
              //       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //     />
              //     {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              //   </div>

              //   <div>
              //     <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              //     <input
              //       type="password"
              //       id="confirmPassword"
              //       name="confirmPassword"
              //       value={formData.confirmPassword}
              //       onChange={handleChange}
              //       placeholder="Confirm your password"
              //       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //     />
              //     {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
              //   </div>
              // </div>

              // <div>
              //   <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name</label>
              //   <input
              //     type="text"
              //     id="storeName"
              //     name="storeName"
              //     value={formData.storeName}
              //     onChange={handleChange}
              //     placeholder="Enter your store name"
              //     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //   />
              // </div>

              // <div>
              //   <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
              //   <textarea
              //     id="storeAddress"
              //     name="storeAddress"
              //     value={formData.storeAddress}
              //     onChange={handleChange}
              //     placeholder="Enter your store address"
              //     rows="2"
              //     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //   ></textarea>
              // </div>

              // <div>
              //   <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              //   <input
              //     type="text"
              //     id="phoneNumber"
              //     name="phoneNumber"
              //     value={formData.phoneNumber}
              //     onChange={handleChange}
              //     placeholder="Enter your phone number"
              //     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
              //   />
              // </div>

              // <div className="flex items-center">
              //   <input
              //     type="checkbox"
              //     id="agreeToTerms"
              //     name="agreeToTerms"
              //     checked={formData.agreeToTerms}
              //     onChange={handleChange}
              //     className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              //   />
              //   <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
              //     I agree to the 
              //     <button 
              //       type="button" 
              //       onClick={handleTermsClick} 
              //       className="text-blue-600 hover:text-blue-800 underline ml-1"
              //     >
              //       Terms and Conditions
              //     </button>
              //   </label>
              //   {errors.agreeToTerms && <p className="text-red-500 ml-2 text-sm">{errors.agreeToTerms}</p>}
              // </div>

//               <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
//                 {loading ? 'Signing Up...' : 'Sign Up Now'}
//               </button>
//             </form>

//             <p className="mt-6 text-center text-gray-700">
//               Already have an account?{' '}
//               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Login Here</Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* OTP Verification Modal */}
//       {showOTPModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
//           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Verify Your Email</h3>
//             <p className="text-gray-600 mb-4">Enter the OTP sent to your email.</p>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter OTP"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 mb-4"
//             />
//             <button
//               onClick={handleOTPSubmit}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors w-full"
//             >
//               Verify OTP
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import logo from './images/logo.jpg';
// import b1 from './images/b1.jpg';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     storeName: '',
//     storeAddress: '',
//     phoneNumber: '',
//     enableMFA: false,
//     agreeToTerms: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [storeId, setStoreId] = useState('');
//   const [showOTPModal, setShowOTPModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [email, setEmail] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const newErrors = {};
//     if (!formData.fullName) newErrors.fullName = 'Full name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.password) newErrors.password = 'Password is required';
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to terms and conditions';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);
//       setEmail(formData.email);
//       setShowOTPModal(true);
//     } catch (error) {
//       console.error(error);
//       alert('Signup failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOTPSubmit = async () => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify-otp`, {
//         email: email,
//         otp: otp,
//       });
//       setStoreId(response.data.storeId);
//       setShowOTPModal(false);
//       setShowSuccessModal(true); // Show success modal
//     } catch (error) {
//       console.error(error);
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   const handleTermsClick = () => {
//     window.open('/TermsAndConditions', '_blank');
//   };

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   return (
//     <div className="font-sans bg-gradient-to-r from-purple-50 to-blue-50 text-gray-800 min-h-screen">
//       <header className="flex justify-between items-center p-4 bg-white shadow-md">
//         <div className="flex items-center gap-4">
//           <Link to="/AboutPage">
//             <img src={logo} alt="Logo" className="w-12 h-12 rounded-md shadow border border-gray-200" />
//           </Link>
//           <nav className="flex gap-6">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
//             <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
//             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
//           </nav>
//         </div>
//         <div className="flex gap-3">
//           <Link to="/LoginPage">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700 transition-colors">Login</button>
//           </Link>
//           <Link to="/StoreReviews">
//             <button className="bg-purple-600 text-white px-4 py-2 rounded shadow-md hover:bg-purple-700 transition-colors">Leave a Review</button>
//           </Link>
//         </div>
//       </header>

//       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Left Column - Info */}
//           <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white">
//             <div className="p-8">
//               <h1 className="text-4xl font-bold mb-4">Welcome to Your Business Journey</h1>
//               <div className="h-1 w-24 bg-white mb-6"></div>
//               <p className="text-lg font-light mb-8">
//                 Simplify your freelance business setup. Register and start growing your business in no time.
//               </p>
              
//               <div className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8">
//                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
//                 <ul className="space-y-3">
//                   <li className="flex items-center gap-3">
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Easy business management
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Customer management tools
//                   </li>
//                   <li className="flex items-center gap-3">
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Grow your business faster
//                   </li>
//                 </ul>
//               </div>
//             </div>
            
//             <div className="flex justify-center pb-8">
//               <img 
//                 src={b1} 
//                 alt="Jonas Kim" 
//                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
//               />
//             </div>
//           </div>
          
//           {/* Right Column - Form */}
//           <div className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h2>
//             <p className="text-gray-500 mb-8">Sign up and get started today</p>
            
//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Form fields remain the same as before */}
//               {/* ... */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                   />
//                   {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                   />
//                   {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                 </div>

//                 <div>
//                   <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     placeholder="Confirm your password"
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                   />
//                   {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name</label>
//                 <input
//                   type="text"
//                   id="storeName"
//                   name="storeName"
//                   value={formData.storeName}
//                   onChange={handleChange}
//                   placeholder="Enter your store name"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
//                 <textarea
//                   id="storeAddress"
//                   name="storeAddress"
//                   value={formData.storeAddress}
//                   onChange={handleChange}
//                   placeholder="Enter your store address"
//                   rows="2"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                 ></textarea>
//               </div>

//               <div>
//                 <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number</label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800"
//                 />
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="agreeToTerms"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleChange}
//                   className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                 />
//                 <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
//                   I agree to the 
//                   <button 
//                     type="button" 
//                     onClick={handleTermsClick} 
//                     className="text-blue-600 hover:text-blue-800 underline ml-1"
//                   >
//                     Terms and Conditions
//                   </button>
//                 </label>
//                 {errors.agreeToTerms && <p className="text-red-500 ml-2 text-sm">{errors.agreeToTerms}</p>}
//               </div>
//               <button type="submit" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
//                 {loading ? 'Signing Up...' : 'Sign Up Now'}
//               </button>
//             </form>

//             <p className="mt-6 text-center text-gray-700">
//               Already have an account?{' '}
//               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium">Login Here</Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* OTP Verification Modal */}
//       {showOTPModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
//           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Verify Your Email</h3>
//             <p className="text-gray-600 mb-4">Enter the OTP sent to your email.</p>
//             <input
//               type="text"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               placeholder="Enter OTP"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 mb-4"
//             />
//             <button
//               onClick={handleOTPSubmit}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors w-full"
//             >
//               Verify OTP
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
//           <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Signup Successful!</h3>
//               <p className="text-gray-600 mb-4">Your store has been created successfully. Your unique store ID is:</p>
//               <div className="bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 font-mono text-lg text-gray-800 mb-4">{storeId}</div>
//               <p className="text-gray-500 text-sm mb-6">Please save this ID for your records.</p>
//               <div className="flex gap-3 justify-center">
//                 <button 
//                   className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition-colors" 
//                   onClick={closeSuccessModal}
//                 >
//                   Close
//                 </button>
//                 <Link to="/LoginPage">
//                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors">
//                     Back to Login
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignUpPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from './images/logo.jpg';
// import b1 from './images/b1.jpg';
// import { motion, AnimatePresence } from 'framer-motion';

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     storeName: '',
//     storeAddress: '',
//     phoneNumber: '',
//     enableMFA: false,
//     agreeToTerms: false,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [storeId, setStoreId] = useState('');
//   const [showOTPModal, setShowOTPModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [email, setEmail] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   // Reset form after successful signup
//   useEffect(() => {
//     if (formSubmitted && !showOTPModal && !showSuccessModal) {
//       resetForm();
//     }
//   }, [formSubmitted, showOTPModal, showSuccessModal]);

//   const resetForm = () => {
//     setFormData({
//       fullName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       storeName: '',
//       storeAddress: '',
//       phoneNumber: '',
//       enableMFA: false,
//       agreeToTerms: false,
//     });
//     setErrors({});
//     setFormSubmitted(false);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
    
//     // Clear error for this field when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
//     // Email validation
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     // Password validation
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!formData.storeName.trim()) {
//       newErrors.storeName = 'Store name is required';
//     }
    
//     if (!formData.phoneNumber.trim()) {
//       newErrors.phoneNumber = 'Phone number is required';
//     }
    
//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to terms and conditions';
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
      
//       // Highlight first error field with smooth scroll
//       const firstErrorField = Object.keys(newErrors)[0];
//       const element = document.getElementById(firstErrorField);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         element.focus();
//       }
//       return;
//     }
    
//     setLoading(true);

//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);
//       setEmail(formData.email);
//       setFormSubmitted(true);
//       setShowOTPModal(true);
//     } catch (error) {
//       console.error(error);
      
//       // Handle specific error messages from backend
//       if (error.response && error.response.data && error.response.data.message) {
//         alert(`Signup failed: ${error.response.data.message}`);
//       } else {
//         alert('Signup failed. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOTPSubmit = async () => {
//     if (!otp.trim()) {
//       alert('Please enter the OTP sent to your email.');
//       return;
//     }
    
//     setLoading(true);
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify-otp`, {
//         email: email,
//         otp: otp,
//       });
//       setStoreId(response.data.storeId);
//       setShowOTPModal(false);
//       setShowSuccessModal(true);
//     } catch (error) {
//       console.error(error);
      
//       // Handle specific error messages
//       if (error.response && error.response.data && error.response.data.message) {
//         alert(`Verification failed: ${error.response.data.message}`);
//       } else {
//         alert('Invalid OTP. Please try again.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTermsClick = () => {
//     window.open('/TermsAndConditions', '_blank');
//   };

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//     resetForm();
//   };

//   const redirectToLogin = () => {
//     setShowSuccessModal(false);
//     navigate('/LoginPage');
//   };

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const modalVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
//     exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
//   };

//   const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800";
//   const errorInputClasses = "w-full p-3 border border-red-300 bg-red-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-gray-800";

//   return (
//     <div className="font-sans bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 text-gray-800 min-h-screen">
//       {/* Header with subtle animation */}
//       <motion.header 
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="flex justify-between items-center p-4 bg-white shadow-md backdrop-blur-sm bg-white/90 sticky top-0 z-10"
//       >
//         <div className="flex items-center gap-4">
//           <Link to="/AboutPage">
//             <motion.img 
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               src={logo} 
//               alt="Logo" 
//               className="w-12 h-12 rounded-md shadow border border-gray-200" 
//             />
//           </Link>
//           <nav className="flex gap-6">
//             <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//             <Link to="/AboutPage" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//             <Link to="/ContactUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//             </Link>
//           </nav>
//         </div>
//         <div className="flex gap-3">
//           <Link to="/LoginPage">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
//             >
//               Login
//             </motion.button>
//           </Link>
//           <Link to="/StoreReviews">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
//             >
//               Leave a Review
//             </motion.button>
//           </Link>
//         </div>
//       </motion.header>

//       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Left Column - Info */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white"
//           >
//             <div className="p-8">
//               <motion.h1 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//                 className="text-4xl font-bold mb-4"
//               >
//                 Welcome to Your Business Journey
//               </motion.h1>
              
//               <motion.div 
//                 initial={{ width: 0 }}
//                 animate={{ width: "6rem" }}
//                 transition={{ delay: 0.5, duration: 0.5 }}
//                 className="h-1 bg-white mb-6"
//               ></motion.div>
              
//               <motion.p 
//                 variants={fadeIn}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ delay: 0.7 }}
//                 className="text-lg font-light mb-8"
//               >
//                 Simplify your freelance business setup. Register and start growing your business in no time.
//               </motion.p>
              
//               <motion.div 
//                 variants={fadeIn}
//                 initial="hidden"
//                 animate="visible"
//                 transition={{ delay: 0.9 }}
//                 className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8 transform transition-all hover:scale-105"
//               >
//                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
//                 <ul className="space-y-3">
//                   <motion.li 
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1.1 }}
//                     className="flex items-center gap-3"
//                   >
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Easy business management
//                   </motion.li>
//                   <motion.li 
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1.2 }}
//                     className="flex items-center gap-3"
//                   >
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Customer management tools
//                   </motion.li>
//                   <motion.li 
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 1.3 }}
//                     className="flex items-center gap-3"
//                   >
//                     <div className="bg-white text-purple-600 rounded-full p-1">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     </div>
//                     Grow your business faster
//                   </motion.li>
//                 </ul>
//               </motion.div>
//             </div>
            
//             <div className="flex justify-center pb-8">
//               <motion.img 
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.5, duration: 0.7 }}
//                 whileHover={{ scale: 1.05, rotate: 2 }}
//                 src={b1} 
//                 alt="Business Owner" 
//                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
//               />
//             </div>
//           </motion.div>
          
//           {/* Right Column - Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full md:w-3/5 bg-white rounded-xl shadow-lg p-8"
//           >
//             <motion.h2 
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               className="text-3xl font-bold text-gray-800 mb-2"
//             >
//               Create Your Account
//             </motion.h2>
//             <motion.p
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               transition={{ delay: 0.2 }}
//               className="text-gray-500 mb-8"
//             >
//               Sign up and get started today
//             </motion.p>
            
//             <motion.form 
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               transition={{ delay: 0.3 }}
//               onSubmit={handleSubmit} 
//               className="space-y-5"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name *</label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className={errors.fullName ? errorInputClasses : inputClasses}
//                   />
//                   {errors.fullName && (
//                     <motion.p 
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="text-red-500 text-sm mt-1 flex items-center"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       {errors.fullName}
//                     </motion.p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className={errors.email ? errorInputClasses : inputClasses}
//                   />
//                   {errors.email && (
//                     <motion.p 
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="text-red-500 text-sm mt-1 flex items-center"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       {errors.email}
//                     </motion.p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div>
//                   <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password *</label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Enter your password"
//                     className={errors.password ? errorInputClasses : inputClasses}
//                   />
//                   {errors.password && (
//                     <motion.p 
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="text-red-500 text-sm mt-1 flex items-center"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       {errors.password}
//                     </motion.p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password *</label>
//                   <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     placeholder="Confirm your password"
//                     className={errors.confirmPassword ? errorInputClasses : inputClasses}
//                   />
//                   {errors.confirmPassword && (
//                     <motion.p 
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       className="text-red-500 text-sm mt-1 flex items-center"
//                     >
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                       {errors.confirmPassword}
//                     </motion.p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="storeName" className="block text-gray-700 font-medium mb-2">Store Name *</label>
//                 <input
//                   type="text"
//                   id="storeName"
//                   name="storeName"
//                   value={formData.storeName}
//                   onChange={handleChange}
//                   placeholder="Enter your store name"
//                   className={errors.storeName ? errorInputClasses : inputClasses}
//                 />
//                 {errors.storeName && (
//                   <motion.p 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-red-500 text-sm mt-1 flex items-center"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     {errors.storeName}
//                   </motion.p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="storeAddress" className="block text-gray-700 font-medium mb-2">Store Address (Optional)</label>
//                 <textarea
//                   id="storeAddress"
//                   name="storeAddress"
//                   value={formData.storeAddress}
//                   onChange={handleChange}
//                   placeholder="Enter your store address"
//                   rows="2"
//                   className={inputClasses}
//                 ></textarea>
//               </div>

//               <div>
//                 <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className={errors.phoneNumber ? errorInputClasses : inputClasses}
//                 />
//                 {errors.phoneNumber && (
//                   <motion.p 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-red-500 text-sm mt-1 flex items-center"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     {errors.phoneNumber}
//                   </motion.p>
//                 )}
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="agreeToTerms"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleChange}
//                   className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                 />
//                 <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
//                   I agree to the 
//                   <button 
//                     type="button" 
//                     onClick={handleTermsClick} 
//                     className="text-blue-600 hover:text-blue-800 underline ml-1"
//                   >
//                     Terms and Conditions
//                   </button>
//                 </label>
//                 {errors.agreeToTerms && (
//                   <motion.p 
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-red-500 ml-2 text-sm flex items-center"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     {errors.agreeToTerms}
//                   </motion.p>
//                 )}
//               </div>
//               <motion.button 
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit" 
//                 disabled={loading}
//                 className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-6 rounded-lg w-full shadow-md transition-colors transform focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 relative overflow-hidden group"
//               >
//                 <span className="relative z-10">
//                   {loading ? 'Signing Up...' : 'Sign Up Now'}
//                 </span>
//                 <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
//               </motion.button>
//             </motion.form>

//             <motion.p 
//               variants={fadeIn}
//               initial="hidden"
//               animate="visible"
//               transition={{ delay: 0.5 }}
//               className="mt-6 text-center text-gray-700"
//             >
//               Already have an account?{' '}
//               <Link to="/LoginPage" className="text-blue-600 hover:text-blue-800 font-medium relative group">
//                 Login Here
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
//               </Link>
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>

//       {/* OTP Verification Modal */}
//       <AnimatePresence>
//         {showOTPModal && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
//           >
//             <motion.div 
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200"
//             >
//               <h3 className="text-xl font-bold text-gray-800 mb-4">Verify Your Email</h3>
//               <p className="text-gray-600 mb-4">We've sent a verification code to <span className="font-semibold">{email}</span>. Please enter it below.</p>
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 mb-4 font-mono text-center text-lg tracking-wider"
//                   maxLength="6"
//                 />
//                 <div className="absolute bottom-4 right-3 text-gray-400 text-sm">6-digit code</div>
//               </div>              <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleOTPSubmit}
//                 disabled={loading}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors w-full relative overflow-hidden group"
//               >
//                 <span className="relative z-10">
//                   {loading ? 'Verifying...' : 'Verify OTP'}
//                 </span>
//                 <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
//               </motion.button>
//               <p className="text-gray-500 text-sm mt-3">
//                 Didn't receive the code?{' '}
//                 <button
//                   type="button"
//                   onClick={() => alert('Resend OTP functionality to be implemented')}
//                   className="text-blue-600 hover:text-blue-800 underline"
//                 >
//                   Resend OTP
//                 </button>
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Success Modal */}
//       <AnimatePresence>
//         {showSuccessModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-200"
//             >
//               <div className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2 }}
//                   className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">Signup Successful!</h3>
//                 <p className="text-gray-600 mb-4">Your store has been created successfully. Your unique store ID is:</p>
//                 <div className="bg-gray-100 border border-gray-200 rounded-lg py-3 px-4 font-mono text-lg text-gray-800 mb-4">
//                   {storeId}
//                 </div>
//                 <p className="text-gray-500 text-sm mb-6">Please save this ID for your records.</p>
//                 <div className="flex gap-3 justify-center">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={closeSuccessModal}
//                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition-colors"
//                   >
//                     Close
//                   </motion.button>
//                   <Link to="/LoginPage">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors"
//                     >
//                       Back to Login
//                     </motion.button>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SignUpPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sun, Moon } from 'lucide-react';
// import logo from './images/logo.jpg';
// import b1 from './images/b1.jpg';

// // Reusable Header Component (same as ContactUs)
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

// const SignUpPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     storeName: '',
//     storeAddress: '',
//     phoneNumber: '',
//     enableMFA: false,
//     agreeToTerms: false,
//   });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [storeId, setStoreId] = useState('');
//   const [showOTPModal, setShowOTPModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [email, setEmail] = useState('');
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);

//   const themes = {
//     light: {
//       background: 'bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50',
//       text: 'text-gray-800',
//       secondaryText: 'text-gray-600',
//       accent: 'text-purple-600',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
//       card: 'bg-white',
//       border: 'border-gray-300',
//       header: 'bg-white/90 backdrop-blur-md shadow-lg',
//       headerTransparent: 'bg-transparent',
//       highlight: 'text-purple-500',
//       glow: 'shadow-md hover:shadow-lg',
//       input: 'bg-white',
//       errorInput: 'bg-red-50 border-red-300 focus:ring-red-500 focus:border-red-500',
//       modalBg: 'bg-white',
//       modalBorder: 'border-gray-200',
//       successBg: 'bg-green-100',
//       successText: 'text-green-600',
//     },
//     dark: {
//       background: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
//       text: 'text-gray-100',
//       secondaryText: 'text-gray-400',
//       accent: 'text-purple-400',
//       button: 'bg-purple-600 hover:bg-purple-700 text-white',
//       secondaryButton: 'bg-gray-800 text-purple-400 border-2 border-purple-400 hover:bg-gray-700',
//       card: 'bg-gray-800',
//       border: 'border-gray-700',
//       header: 'bg-gray-900/90 backdrop-blur-lg shadow-lg',
//       headerTransparent: 'bg-transparent',
//       highlight: 'text-purple-300',
//       glow: 'shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_20px_rgba(129,140,248,0.6)]',
//       input: 'bg-gray-700',
//       errorInput: 'bg-red-900 border-red-700 focus:ring-red-400 focus:border-red-400',
//       modalBg: 'bg-gray-800',
//       modalBorder: 'border-gray-700',
//       successBg: 'bg-green-900',
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
//     if (formSubmitted && !showOTPModal && !showSuccessModal) {
//       resetForm();
//     }
//   }, [formSubmitted, showOTPModal, showSuccessModal]);

//   const resetForm = () => {
//     setFormData({
//       fullName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       storeName: '',
//       storeAddress: '',
//       phoneNumber: '',
//       enableMFA: false,
//       agreeToTerms: false,
//     });
//     setErrors({});
//     setFormSubmitted(false);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
//     if (!formData.password) newErrors.password = 'Password is required';
//     else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
//     if (!formData.storeName.trim()) newErrors.storeName = 'Store name is required';
//     if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       const firstErrorField = Object.keys(newErrors)[0];
//       const element = document.getElementById(firstErrorField);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         element.focus();
//       }
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);
//       setEmail(formData.email);
//       setFormSubmitted(true);
//       setShowOTPModal(true);
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || 'Signup failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOTPSubmit = async () => {
//     if (!otp.trim()) {
//       alert('Please enter the OTP sent to your email.');
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify-otp`, { email, otp });
//       setStoreId(response.data.storeId);
//       setShowOTPModal(false);
//       setShowSuccessModal(true);
//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || 'Invalid OTP. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTermsClick = () => {
//     window.open('/TermsAndConditions', '_blank');
//   };

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//     resetForm();
//   };

//   const redirectToLogin = () => {
//     setShowSuccessModal(false);
//     navigate('/LoginPage');
//   };

//   const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
//   const modalVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }, exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } } };
//   const inputClasses = `w-full p-3 border ${currentTheme.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${currentTheme.input} ${currentTheme.text}`;
//   const errorInputClasses = `w-full p-3 border rounded-lg focus:outline-none transition-all ${currentTheme.errorInput} ${currentTheme.text}`;

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

//       <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-24">
//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Left Column - Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white"
//           >
//             <div className="p-8">
//               <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-4xl font-bold mb-4">
//                 Welcome to Your Business Journey
//               </motion.h1>
//               <motion.div initial={{ width: 0 }} animate={{ width: "6rem" }} transition={{ delay: 0.5, duration: 0.5 }} className="h-1 bg-white mb-6"></motion.div>
//               <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.7 }} className="text-lg font-light mb-8">
//                 Simplify your freelance business setup. Register and start growing your business in no time.
//               </motion.p>
//               <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.9 }} className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8 transform transition-all hover:scale-105">
//                 <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
//                 <ul className="space-y-3">
//                   {["Easy business management", "Customer management tools", "Grow your business faster"].map((item, idx) => (
//                     <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + idx * 0.1 }} className="flex items-center gap-3">
//                       <div className="bg-white text-purple-600 rounded-full p-1">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       {item}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </div>
//             <div className="flex justify-center pb-8">
//               <motion.img initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} whileHover={{ scale: 1.05, rotate: 2 }} src={b1} alt="Business Owner" className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl" />
//             </div>
//           </motion.div>

//           {/* Right Column - Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className={`w-full md:w-3/5 ${currentTheme.card} rounded-xl shadow-lg p-8`}
//           >
//             <motion.h2 variants={fadeIn} initial="hidden" animate="visible" className="text-3xl font-bold mb-2">Create Your Account</motion.h2>
//             <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className={`mb-8 ${currentTheme.secondaryText}`}>Sign up and get started today</motion.p>
//             <motion.form variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {[
//                   { label: "Full Name *", id: "fullName", type: "text", placeholder: "Enter your full name" },
//                   { label: "Email *", id: "email", type: "email", placeholder: "Enter your email" },
//                   { label: "Password *", id: "password", type: "password", placeholder: "Enter your password" },
//                   { label: "Confirm Password *", id: "confirmPassword", type: "password", placeholder: "Confirm your password" },
//                 ].map(({ label, id, type, placeholder }) => (
//                   <div key={id}>
//                     <label htmlFor={id} className="block font-medium mb-2">{label}</label>
//                     <input
//                       type={type}
//                       id={id}
//                       name={id}
//                       value={formData[id]}
//                       onChange={handleChange}
//                       placeholder={placeholder}
//                       className={errors[id] ? errorInputClasses : inputClasses}
//                     />
//                     {errors[id] && (
//                       <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 flex items-center">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                         </svg>
//                         {errors[id]}
//                       </motion.p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <label htmlFor="storeName" className="block font-medium mb-2">Store Name *</label>
//                 <input
//                   type="text"
//                   id="storeName"
//                   name="storeName"
//                   value={formData.storeName}
//                   onChange={handleChange}
//                   placeholder="Enter your store name"
//                   className={errors.storeName ? errorInputClasses : inputClasses}
//                 />
//                 {errors.storeName && (
//                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     {errors.storeName}
//                   </motion.p>
//                 )}
//               </div>
//               <div>
//                 <label htmlFor="storeAddress" className="block font-medium mb-2">Store Address (Optional)</label>
//                 <textarea
//                   id="storeAddress"
//                   name="storeAddress"
//                   value={formData.storeAddress}
//                   onChange={handleChange}
//                   placeholder="Enter your store address"
//                   rows="2"
//                   className={inputClasses}
//                 ></textarea>
//               </div>
//               <div>
//                 <label htmlFor="phoneNumber" className="block font-medium mb-2">Phone Number *</label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className={errors.phoneNumber ? errorInputClasses : inputClasses}
//                 />
//                 {errors.phoneNumber && (
//                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     {errors.phoneNumber}
//                   </motion.p>
//                 )}
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="agreeToTerms"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleChange}
//                   className={`h-5 w-5 ${currentTheme.accent} rounded ${currentTheme.border} focus:ring-blue-500`}
//                 />
//                 <label htmlFor="agreeToTerms" className="ml-2">
//                   I agree to the
//                   <button type="button" onClick={handleTermsClick} className={`${currentTheme.accent} hover:${currentTheme.highlight} underline ml-1`}>
//                     Terms and Conditions
//                   </button>
//                 </label>
//                 {errors.agreeToTerms && (
//                   <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 ml-2 text-sm flex items-center">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                     </svg>
//                     {errors.agreeToTerms}
//                   </motion.p>
//                 )}
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={loading}
//                 className={`${currentTheme.button} py-3 px-6 rounded-lg w-full ${currentTheme.glow} transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 relative overflow-hidden group`}
//               >
//                 <span className="relative z-10">{loading ? 'Signing Up...' : 'Sign Up Now'}</span>
//                 <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
//               </motion.button>
//             </motion.form>
//             <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="mt-6 text-center">
//               Already have an account?{' '}
//               <Link to="/LoginPage" className={`${currentTheme.accent} hover:${currentTheme.highlight} font-medium relative group`}>
//                 Login Here
//                 <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${currentTheme.accent} group-hover:w-full transition-all duration-300`}></span>
//               </Link>
//             </motion.p>
//           </motion.div>
//         </div>
//       </div>

//       {/* OTP Verification Modal */}
//       <AnimatePresence>
//         {showOTPModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className={`${currentTheme.modalBg} rounded-xl shadow-xl p-8 max-w-md w-full ${currentTheme.modalBorder}`}
//             >
//               <h3 className="text-xl font-bold mb-4">Verify Your Email</h3>
//               <p className={`${currentTheme.secondaryText} mb-4`}>We've sent a verification code to <span className="font-semibold">{email}</span>. Please enter it below.</p>
//               <div className="relative">
//                 <input
//                   type="text"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   placeholder="Enter OTP"
//                   className={`w-full p-3 border ${currentTheme.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${currentTheme.input} ${currentTheme.text} mb-4 font-mono text-center text-lg tracking-wider`}
//                   maxLength="6"
//                 />
//                 <div className={`absolute bottom-4 right-3 ${currentTheme.secondaryText} text-sm`}>6-digit code</div>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleOTPSubmit}
//                 disabled={loading}
//                 className={`${currentTheme.button} px-5 py-2 rounded-lg transition-colors w-full relative overflow-hidden group`}
//               >
//                 <span className="relative z-10">{loading ? 'Verifying...' : 'Verify OTP'}</span>
//                 <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
//               </motion.button>
//               <p className={`${currentTheme.secondaryText} text-sm mt-3`}>
//                 Didn't receive the code?{' '}
//                 <button type="button" onClick={() => alert('Resend OTP functionality to be implemented')} className={`${currentTheme.accent} hover:${currentTheme.highlight} underline`}>
//                   Resend OTP
//                 </button>
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Success Modal */}
//       <AnimatePresence>
//         {showSuccessModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
//           >
//             <motion.div
//               variants={modalVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className={`${currentTheme.modalBg} rounded-xl shadow-xl p-8 max-w-md w-full ${currentTheme.modalBorder}`}
//             >
//               <div className="text-center">
//                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className={`${currentTheme.successBg} ${currentTheme.successText} rounded-full flex items-center justify-center mx-auto mb-4 w-16 h-16`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </motion.div>
//                 <h3 className="text-xl font-bold mb-2">Signup Successful!</h3>
//                 <p className={`${currentTheme.secondaryText} mb-4`}>Your store has been created successfully. Your unique store ID is:</p>
//                 <div className={`bg-gray-100 dark:bg-gray-700 border ${currentTheme.border} rounded-lg py-3 px-4 font-mono text-lg mb-4`}>
//                   {storeId}
//                 </div>
//                 <p className={`${currentTheme.secondaryText} text-sm mb-6`}>Please save this ID for your records.</p>
//                 <div className="flex gap-3 justify-center">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={closeSuccessModal}
//                     className={`bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 ${currentTheme.text} px-5 py-2 rounded-lg transition-colors`}
//                   >
//                     Close
//                   </motion.button>
//                   <Link to="/LoginPage">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`${currentTheme.button} px-5 py-2 rounded-lg transition-colors`}
//                     >
//                       Back to Login
//                     </motion.button>
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SignUpPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import logo from './images/logo.jpg';
import b1 from './images/b1.jpg';

// Reusable Header Component
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

const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    storeName: '',
    storeAddress: '',
    phoneNumber: '',
    enableMFA: false,
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [storeId, setStoreId] = useState('');
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches);

  const themes = {
    light: {
      background: 'bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50',
      text: 'text-gray-800',
      secondaryText: 'text-gray-600',
      accent: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      secondaryButton: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50',
      card: 'bg-white',
      border: 'border-gray-300',
      header: 'bg-white/90 backdrop-blur-md shadow-lg',
      headerTransparent: 'bg-transparent',
      highlight: 'text-purple-500',
      glow: 'shadow-md hover:shadow-lg',
      input: 'bg-white',
      errorInput: 'bg-red-50 border-red-300 focus:ring-red-500 focus:border-red-500',
      modalBg: 'bg-white',
      modalBorder: 'border-gray-200',
      successBg: 'bg-green-100',
      successText: 'text-green-600',
    },
    dark: {
      background: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700',
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
      input: 'bg-gray-700',
      errorInput: 'bg-red-900 border-red-700 focus:ring-red-400 focus:border-red-400',
      modalBg: 'bg-gray-800',
      modalBorder: 'border-gray-700',
      successBg: 'bg-green-900',
      successText: 'text-green-300',
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
    if (formSubmitted && !showOTPModal && !showSuccessModal) {
      resetForm();
    }
  }, [formSubmitted, showOTPModal, showSuccessModal]);

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      storeName: '',
      storeAddress: '',
      phoneNumber: '',
      enableMFA: false,
      agreeToTerms: false,
    });
    setErrors({});
    setFormSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.storeName.trim()) newErrors.storeName = 'Store name is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, formData);
      setEmail(formData.email);
      setFormSubmitted(true);
      setShowOTPModal(true);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleOTPSubmit = async () => {
    if (!otp.trim()) {
      alert('Please enter the OTP sent to your email.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/verify-otp`, { email, otp });
      setStoreId(response.data.storeId);
      setShowOTPModal(false);
      setShowSuccessModal(true);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleTermsClick = () => {
    window.open('/TermsAndConditions', '_blank');
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    resetForm();
  };

  const redirectToLogin = () => {
    setShowSuccessModal(false);
    navigate('/LoginPage');
  };

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  const modalVariants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }, exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } } };
  const inputClasses = `w-full p-3 border ${currentTheme.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${currentTheme.input} ${currentTheme.text}`;
  const errorInputClasses = `w-full p-3 border rounded-lg focus:outline-none transition-all ${currentTheme.errorInput} ${currentTheme.text}`;

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

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-lg overflow-hidden text-white"
          >
            <div className="p-8">
              <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="text-4xl font-bold mb-4">
                Welcome to Your Business Journey
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "6rem" }} transition={{ delay: 0.5, duration: 0.5 }} className="h-1 bg-white mb-6"></motion.div>
              <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.7 }} className="text-lg font-light mb-8">
                Simplify your freelance business setup. Register and start growing your business in no time.
              </motion.p>
              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.9 }} className="bg-white/20 rounded-lg p-5 backdrop-blur-sm mb-8 transform transition-all hover:scale-105">
                <h3 className="font-semibold text-xl mb-4">Why join us?</h3>
                <ul className="space-y-3">
                  {["Easy business management", "Customer management tools", "Grow your business faster"].map((item, idx) => (
                    <motion.li key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 + idx * 0.1 }} className="flex items-center gap-3">
                      <div className="bg-white text-purple-600 rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="flex justify-center pb-8">
              <motion.img initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.7 }} whileHover={{ scale: 1.05, rotate: 2 }} src={b1} alt="Business Owner" className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl" />
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`w-full md:w-3/5 ${currentTheme.card} rounded-xl shadow-lg p-8`}
          >
            <motion.h2 variants={fadeIn} initial="hidden" animate="visible" className="text-3xl font-bold mb-2">Create Your Account</motion.h2>
            <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className={`mb-8 ${currentTheme.secondaryText}`}>Sign up and get started today</motion.p>
            <motion.form variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "Full Name *", id: "fullName", type: "text", placeholder: "Enter your full name" },
                  { label: "Email *", id: "email", type: "email", placeholder: "Enter your email" },
                  { label: "Password *", id: "password", type: "password", placeholder: "Enter your password" },
                  { label: "Confirm Password *", id: "confirmPassword", type: "password", placeholder: "Confirm your password" },
                ].map(({ label, id, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block font-medium mb-2">{label}</label>
                    <input
                      type={type}
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className={errors[id] ? errorInputClasses : inputClasses}
                    />
                    {errors[id] && (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        {errors[id]}
                      </motion.p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="storeName" className="block font-medium mb-2">Store Name *</label>
                <input
                  type="text"
                  id="storeName"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  placeholder="Enter your store name"
                  className={errors.storeName ? errorInputClasses : inputClasses}
                />
                {errors.storeName && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {errors.storeName}
                  </motion.p>
                )}
              </div>
              <div>
                <label htmlFor="storeAddress" className="block font-medium mb-2">Store Address (Optional)</label>
                <textarea
                  id="storeAddress"
                  name="storeAddress"
                  value={formData.storeAddress}
                  onChange={handleChange}
                  placeholder="Enter your store address"
                  rows="2"
                  className={inputClasses}
                ></textarea>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block font-medium mb-2">Phone Number *</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={errors.phoneNumber ? errorInputClasses : inputClasses}
                />
                {errors.phoneNumber && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm mt-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {errors.phoneNumber}
                  </motion.p>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className={`h-5 w-5 ${currentTheme.accent} rounded ${currentTheme.border} focus:ring-blue-500`}
                />
                <label htmlFor="agreeToTerms" className="ml-2">
                  I agree to the
                  <button type="button" onClick={handleTermsClick} className={`${currentTheme.accent} hover:${currentTheme.highlight} underline ml-1`}>
                    Terms and Conditions
                  </button>
                </label>
                {errors.agreeToTerms && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 ml-2 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {errors.agreeToTerms}
                  </motion.p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`${currentTheme.button} py-3 px-6 rounded-lg w-full ${currentTheme.glow} transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 relative overflow-hidden group`}
              >
                <span className="relative z-10">{loading ? 'Signing Up...' : 'Sign Up Now'}</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
              </motion.button>
            </motion.form>
            <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="mt-6 text-center">
              Already have an account?{' '}
              <Link to="/LoginPage" className={`${currentTheme.accent} hover:${currentTheme.highlight} font-medium relative group`}>
                Login Here
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${currentTheme.accent} group-hover:w-full transition-all duration-300`}></span>
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      <AnimatePresence>
        {showOTPModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${currentTheme.modalBg} rounded-xl shadow-xl p-8 max-w-md w-full ${currentTheme.modalBorder}`}
            >
              <h3 className="text-xl font-bold mb-4">Verify Your Email</h3>
              <p className={`${currentTheme.secondaryText} mb-4`}>We've sent a verification code to <span className="font-semibold">{email}</span>. Please enter it below.</p>
              <div className="relative">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className={`w-full p-3 border ${currentTheme.border} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all ${currentTheme.input} ${currentTheme.text} mb-4 font-mono text-center text-lg tracking-wider`}
                  maxLength="6"
                />
                <div className={`absolute bottom-4 right-3 ${currentTheme.secondaryText} text-sm`}>6-digit code</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOTPSubmit}
                disabled={loading}
                className={`${currentTheme.button} px-5 py-2 rounded-lg transition-colors w-full relative overflow-hidden group`}
              >
                <span className="relative z-10">{loading ? 'Verifying...' : 'Verify OTP'}</span>
                <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500 ease-in-out z-0"></span>
              </motion.button>
              <p className={`${currentTheme.secondaryText} text-sm mt-3`}>
                Didn't receive the code?{' '}
                <button type="button" onClick={() => alert('Resend OTP functionality to be implemented')} className={`${currentTheme.accent} hover:${currentTheme.highlight} underline`}>
                  Resend OTP
                </button>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`${currentTheme.modalBg} rounded-xl shadow-xl p-8 max-w-md w-full ${currentTheme.modalBorder}`}
            >
              <div className="text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className={`${currentTheme.successBg} ${currentTheme.successText} rounded-full flex items-center justify-center mx-auto mb-4 w-16 h-16`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold mb-2">Signup Successful!</h3>
                <p className={`${currentTheme.secondaryText} mb-4`}>Your store has been created successfully. Your unique store ID is:</p>
                <div className={`bg-gray-100 dark:bg-gray-700 border ${currentTheme.border} rounded-lg py-3 px-4 font-mono text-lg mb-4`}>
                  {storeId}
                </div>
                <p className={`${currentTheme.secondaryText} text-sm mb-6`}>Please save this ID for your records.</p>
                <div className="flex gap-3 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeSuccessModal}
                    className={`bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 ${currentTheme.text} px-5 py-2 rounded-lg transition-colors`}
                  >
                    Close
                  </motion.button>
                  <Link to="/LoginPage">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${currentTheme.button} px-5 py-2 rounded-lg transition-colors`}
                    >
                      Back to Login
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SignUpPage;  