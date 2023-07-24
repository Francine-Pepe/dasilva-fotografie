import React from "react";
import "../Styles/styles.sass";
import { useLocation } from "react-router-dom";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const { pathname } = useLocation();
  if (pathname === "/home") return null;
  return (
    <footer>
      <section>
        <small>&copy; Copyright {getCurrentYear()} - Da Silva Fotografie</small>
      </section>
    </footer>
  );
}

export default Footer;
