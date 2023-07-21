import NavbarProps from "./NavbarProps";
import { navLinksSubMenu } from "../../data";
import { Key } from "react";

function NavbarVertical() {
  return (
    <>
      <header className="navbar-container-vertical">
        {navLinksSubMenu.map(
          (
            data: { link: string; name: string },
            index: Key | null | undefined
          ) => {
            return (
              <nav className="navbar-vertical" key={index}>
                <button>
                  <NavbarProps link={data.link} name={data.name} />
                </button>
              </nav>
            );
          }
        )}
      </header>
    </>
  );
}

export default NavbarVertical;
