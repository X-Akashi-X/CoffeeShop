import Logo from "@assets/icons/logo_nav_black.svg";
import "./footer.css";
import BlackLogo from "../BlackLogo/BlackLogo";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <img src={Logo} className="logo_nav" alt="" />
        <div className="names_container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav_names_footer active_link" : "nav_names_footer"
            }
          >
            Coffee house
          </NavLink>
          <NavLink
            to="/OurCoffee"
            className={({ isActive }) =>
              isActive ? "nav_names_footer active_link" : "nav_names_footer"
            }
          >
            Our coffee
          </NavLink>
          <NavLink
            to="/Pleasure"
            className={({ isActive }) =>
              isActive ? "nav_names_footer active_link" : "nav_names_footer"
            }
          >
            For your pleasure
          </NavLink>
        </div>
      </nav>
      <BlackLogo />
    </footer>
  );
};

export default Footer;
