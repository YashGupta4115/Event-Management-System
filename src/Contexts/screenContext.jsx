import { createContext, useEffect, useState } from "react";

export const screenContext = createContext();

export const ScreenContextProvider = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [isNavOpen, setIsNavBarOpen] = useState(false);

  const toggleNav = () => {
    setIsNavBarOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleReszie = () => {
      setWidth(window.innerWidth);
      console.log(width);
    };

    window.addEventListener("resize", handleReszie);

    return () => {
      window.removeEventListener("resize", handleReszie);
    };
  }, []);

  const value = {
    width,
    toggleNav,
    isNavOpen,
  };

  return (
    <screenContext.Provider value={value}>{children}</screenContext.Provider>
  );
};
