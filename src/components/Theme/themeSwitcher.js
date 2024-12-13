import React, { useContext } from "react";
// import ThemeContext from "./ThemeContext";
import ThemeContext from "./themeContext";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeSwitcher;
