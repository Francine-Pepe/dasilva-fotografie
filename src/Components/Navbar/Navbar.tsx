import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavbarProps from "./NavbarProps";
import { useLocation } from "react-router-dom";
import "../../Styles/styles.sass";
import MobileMenu from "./MobileMenu";
import DarkLightMode from "../DarkLightMode";

function NavbarHome(props: any) {
  const { name, link } = props;

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
        <MobileMenu />
        <Logo />
        <DarkLightMode />
      </div>
      <div className="navbar-home">
        <NavbarProps name={name} link={link} />
      </div>
    </header>
  );
}

export default NavbarHome;
