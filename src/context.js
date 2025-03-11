import React, { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);

  const closeNavMenu = () => {
    setMenu(false);
  };
  return (
    <AppContext.Provider value={{ menu, setMenu, closeNavMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
