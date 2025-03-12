import React, { useState, useContext, createContext } from "react";

// import data
import { properties } from "./data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);
  const [items, setItems] = useState(properties);

  const closeNavMenu = () => {
    setMenu(false);
  };
  return (
    <AppContext.Provider
      value={{ menu, setMenu, closeNavMenu, items, setItems, properties }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
