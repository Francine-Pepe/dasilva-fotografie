import React from "react";
import "../Styles/styles.sass";
import { useLocation } from "react-router-dom";
import { footerData } from "./../data";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const { pathname } = useLocation();
  if (pathname === "/home") return null;
  return (
    <footer className="footer">
      {footerData.map((data, index) => {
        return (
          <section key={index}>
            <small>
              &copy; Copyright {getCurrentYear()} - {data.ownerName}
            </small>
            <a href={data.link}>
              <p className="developed-by">{data.developedBy}</p>
            </a>
          </section>
        );
      })}
    </footer>
  );
}

export default Footer;
