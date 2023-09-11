import { useState, useEffect } from "react";
import DarkMode from "../Icons/DarkMode";
import LightMode from "../Icons/LightMode";
import "../Styles/styles.sass";

function DarkLightMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log("I was clicked");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`DarkLightMode ${theme}`}>
      <div className="button-darkmode" onClick={toggleTheme}>
        {theme === "dark" ? <DarkMode /> : <LightMode /> }
      </div>
    </div>
  );
}

export default DarkLightMode;
