import { useEffect, useState } from "react";
import { navLinks } from "../../data";
import Logo from "./Logo";
import NavbarProps from "./NavbarProps";
import { useLocation } from "react-router-dom";
import "../../Styles/styles.sass";

function NavbarHome() {
  const [navBg, setNavBg] = useState("transparent");
  const location = useLocation();

  const path = useLocation().pathname;

  useEffect(() => {
    window.location.pathname === "/home"
      ? setNavBg("transparent")
      : setNavBg("light" || "dark");
  }, [location, path]);

  return (
    <header
      className="navbar-container"
      style={{ background: navBg }}
      id={"header " + location}
    >
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
