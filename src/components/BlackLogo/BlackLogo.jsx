import { Component } from "react";
import Line from "@assets/icons/line_black.svg";
import Logo from "@assets/icons/logo_black.svg";

class BlackLogo extends Component {
  render() {
    return (
      <div className="logo_container">
        <img className="bean_line" src={Line} alt="" />
        <img className="bean_logo" src={Logo} alt="" />
        <img className="bean_line" src={Line} alt="" />
      </div>
    );
  }
}

export default BlackLogo;
