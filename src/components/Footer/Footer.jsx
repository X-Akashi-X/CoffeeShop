import { Component } from "react";
import Logo from "../../assets/logo_nav_black.svg";
import "./footer.css";
import BlackLogo from "../BlackLogo/BlackLogo";

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <img src={Logo} className="logo_nav" alt="" />
          <div className="names_container">
            <p className="nav_names_footer">Coffee house</p>
            <p className="nav_names_footer">Our coffee</p>
            <p className="nav_names_footer">For your pleasure</p>
          </div>
        </nav>
        <BlackLogo />
      </footer>
    );
  }
}

export default Footer;