// src/context/StoreContext.jsx
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext(); // context object

// Provider component
const StoreContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const url = "http://localhost:5000";

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  }, [token]);

  return (
    <StoreContext.Provider value={{ url, token, setToken }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
