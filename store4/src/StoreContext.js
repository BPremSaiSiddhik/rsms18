
// import React, { createContext, useState, useEffect, useContext } from "react";

// export const StoreContext = createContext();

// export const useStore = () => {
//   const context = useContext(StoreContext);
//   if (!context) {
//     throw new Error('useStore must be used within a StoreProvider');
//   }
//   return context;
// };

// export const StoreProvider = ({ children }) => {
//   const [storeName, setStoreName] = useState(null);
//   const [storeId, setStoreId] = useState(null);  
//   const [userId, setUserId] = useState(null); 

//   useEffect(() => {
//     const storedStoreName = localStorage.getItem("storeName");
//     const storedStoreId = localStorage.getItem("storeId");  
//     const storedUserId = localStorage.getItem("userId"); 
//     if (storedStoreName) {
//       setStoreName(storedStoreName);
//     }
//     if (storedStoreId) {
//       setStoreId(storedStoreId); 
//     }
//     if (storedUserId) {
//       setUserId(storedUserId); 
//     }
//   }, []);

//   return (
//     <StoreContext.Provider value={{ storeName, setStoreName, storeId, setStoreId, userId, setUserId }}>
//       {children}
//     </StoreContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect, useContext } from "react";

export const StoreContext = createContext();

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export const StoreProvider = ({ children }) => {
  // Existing state for store and user
  const [storeName, setStoreName] = useState(null);
  const [storeId, setStoreId] = useState(null);
  const [userId, setUserId] = useState(null);

  // New state for user details
  const [userDetails, setUserDetails] = useState(null);

  // Initialize state from localStorage on component mount
  useEffect(() => {
    const storedStoreName = localStorage.getItem("storeName");
    const storedStoreId = localStorage.getItem("storeId");
    const storedUserId = localStorage.getItem("userId");
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails")); // Parse user details

    if (storedStoreName) {
      setStoreName(storedStoreName);
    }
    if (storedStoreId) {
      setStoreId(storedStoreId);
    }
    if (storedUserId) {
      setUserId(storedUserId);
    }
    if (storedUserDetails) {
      setUserDetails(storedUserDetails); // Set user details from localStorage
    }
  }, []);

  return (
    <StoreContext.Provider
      value={{
        storeName,
        setStoreName,
        storeId,
        setStoreId,
        userId,
        setUserId,
        userDetails, // Provide user details
        setUserDetails, // Function to update user details
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};