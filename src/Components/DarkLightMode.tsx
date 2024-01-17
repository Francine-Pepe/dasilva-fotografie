import { useState, useEffect } from "react";
import DarkMode from "../Icons/DarkMode";
import LightMode from "../Icons/LightMode";
import "../Styles/styles.sass";
import { motion as m } from "framer-motion";

function DarkLightMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
      <m.div
        className={`DarkLightMode ${theme}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <div className="button-darkmode" onClick={toggleTheme}>
          {theme === "dark" ? <DarkMode /> : <LightMode />}
        </div>
      </m.div>
  );
}

export default DarkLightMode;
