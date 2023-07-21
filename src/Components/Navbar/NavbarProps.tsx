import React from "react";
import { NavLink } from "react-router-dom";

function NavbarProps(props: { name: string; link: string }) {
  const { name, link } = props;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={link}>{name}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarProps;
