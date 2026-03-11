import { Component } from "react";
import Logo from "../../assets/logo_nav_white.svg";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={Logo} className="logo_nav" alt="" />
          <div className="names_container">
            <p className="nav_names_header">Coffee house</p>
            <p className="nav_names_header" onClick={() => this.props.changeBg('set_bg_our')}>Our coffee</p>
            <p className="nav_names_header">For your pleasure</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
