import { NavLink } from "react-router-dom";
import LogoDaSilva from "../../Assets/dasilva_logo.png";

function Logo() {
  return (
    <div className="logo-component">
      <NavLink to={"/home"}>
        <img src={LogoDaSilva} alt="DaSilva-logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
