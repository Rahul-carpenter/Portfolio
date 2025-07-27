import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Sync dark mode class with HTML root element
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

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
