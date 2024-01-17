import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";

function NavbarProps(props: { name: string; link: string }) {
  const [selectedTab, setSelectedTab] = useState(props);

  return (
    <>
      {navLinks.map((data, index) => {
        return (
          <nav key={index}>
            <ul>
              <li
                className={data === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(data)}
              >
                <NavLink to={data.link}>{data.name}</NavLink>
                {data === selectedTab ? (
                  <m.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            </ul>
          </nav>
        );
      })}
      <main>
        <AnimatePresence>
          <m.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></m.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default NavbarProps;
