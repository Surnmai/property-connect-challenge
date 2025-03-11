import React, { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);
  const [showNav, setShowNav] = useState(true);
  return (
    <AppContext.Provider value={{ menu, setMenu, showNav, setShowNav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
