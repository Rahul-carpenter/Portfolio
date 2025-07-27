import React, { createContext, useState } from "react";

export const MainContext = createContext();

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        theme,
        toggleTheme,
        loading,
        setLoading,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default AppContext;
