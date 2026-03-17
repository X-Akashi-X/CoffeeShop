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
            <a className="nav_names_header" onClick={() => this.props.changeData('set_bg_main', 'CoffeeHouse')}>Coffee house</a>
            <a className="nav_names_header" onClick={() => this.props.changeData('set_bg_our', 'OurCoffee')}>Our coffee</a>
            <a className="nav_names_header" onClick={() => this.props.changeData('set_bg_pleasure', 'Pleasure')}>For your pleasure</a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
