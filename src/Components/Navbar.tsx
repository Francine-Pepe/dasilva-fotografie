import { NavLink } from "react-router-dom";
import Logo from "../Assets/dasilva_logo.png";
import { navLinks } from "../data";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <NavLink to={"/home"}>
          <img src={Logo} alt="DaSilva-logo" />
        </NavLink>
      </div>
      <nav className="navbar-home">
        {navLinks.map((data, index) => {
          return (
            <ul key={index}>
              <li>
                <NavLink to={data.link}>{data.name}</NavLink>
              </li>
            </ul>
          );
        })}
      </nav>
    </div>
  );
}

export default Navbar;
