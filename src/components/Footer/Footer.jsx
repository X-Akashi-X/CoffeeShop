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
            <a href="#start" className="nav_names_footer" onClick={() => this.props.changeData('set_bg_main', 'CoffeeHouse')}>Coffee house</a>
            <a href="#start" className="nav_names_footer" onClick={() => this.props.changeData('set_bg_our', 'OurCoffee')}>Our coffee</a>
            <a href="#start" className="nav_names_footer" onClick={() => this.props.changeData('set_bg_pleasure', 'Pleasure')}>For your pleasure</a>
          </div>
        </nav>
        <BlackLogo />
      </footer>
    );
  }
}

export default Footer;