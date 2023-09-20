import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";

function NavbarProps(props: { name: string; link: string }) {
  return (
    <>
      {navLinks.map((data, index) => {
        return (
          <nav key={index}>
            <ul>
              <li>
                <NavLink to={data.link} >{data.name}</NavLink>
              </li>
            </ul>
          </nav>
        );
      })}
    </>
  );
}

export default NavbarProps;
