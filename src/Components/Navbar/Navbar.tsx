import { useEffect, useState } from "react";
import { navLinks } from "../../data";
import Logo from "./Logo";
import NavbarProps from "./NavbarProps";
import { useLocation } from "react-router-dom";

function NavbarHome() {
  const [navBg, setNavBg] = useState("light" || "dark");
  const location = useLocation();

  useEffect(() => {
    // if (location.pathname === "/home") {
    //   if (window.location.pathname === "/home") {
    //     setNavBg("transparent");
    //   }
    // }
    window.location.pathname === "/home" ? setNavBg("transparent") : setNavBg("light" || "dark") 
  }, [location.pathname]);

  return (
    <header className="navbar-container" style={{ backgroundColor: navBg }}>
      <div className="logo-home-container">
        <Logo />
      </div>
      <div className="navbar-home">
        {navLinks.map((data, index) => {
          return (
            <nav key={index}>
              <NavbarProps name={data.name} link={data.link} />
            </nav>
          );
        })}
      </div>
    </header>
  );
}

export default NavbarHome;

