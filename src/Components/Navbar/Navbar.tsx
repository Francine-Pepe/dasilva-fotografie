import { navLinks } from "../../data";
import Logo from "./Logo";
import NavbarProps from "./NavbarProps";

function NavbarHome() {
  return (
    <header className="navbar-container">
      <div className="logo-home-container">
        <Logo />
      </div>
      <div className="navbar-home">
        {navLinks.map((data, index) => {
          return (
            <>
              <NavbarProps name={data.name} link={data.link} />
            </>
          );
        })}
      </div>
    </header>
  );
}

export default NavbarHome;
