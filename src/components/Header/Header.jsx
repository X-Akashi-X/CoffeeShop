import { Component } from "react";
import Logo from "../../assets/logo_nav.svg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={Logo} className="logo_nav" alt="" />
          <div className="names_container">
            <p className="nav_names">Coffee house</p>
            <p className="nav_names">Our coffee</p>
            <p className="nav_names">For your pleasure</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
