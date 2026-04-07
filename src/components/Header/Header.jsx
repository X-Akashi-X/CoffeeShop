import Logo from "@assets/icons/logo_nav_white.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} className="logo_nav" alt="" />
        <div className="names_container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav_names_header active_link" : "nav_names_header"
            }
          >
            Coffee house
          </NavLink>
          <NavLink
            to="/OurCoffee"
            className={({ isActive }) =>
              isActive ? "nav_names_header active_link" : "nav_names_header"
            }
          >
            Our coffee
          </NavLink>
          <NavLink
            to="/Pleasure"
            className={({ isActive }) =>
              isActive ? "nav_names_header active_link" : "nav_names_header"
            }
          >
            For your pleasure
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
