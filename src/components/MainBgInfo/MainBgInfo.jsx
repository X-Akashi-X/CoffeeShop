import { Component } from "react";
import "./mainBgInfo.css";
import Logo from "../../assets/logo_white.svg";
import Line from "../../assets/line_white.svg";

class MainBgInfo extends Component {
  render() {
    return (
      <>
        {this.props.activeTabNav === "CoffeeHouse" && (
          <div className={`${this.props.activeClassBg} cover`}>
            <div className="main_bg_info_container main_pd_house">
              <p className="main_bg_title">Everything You Love About Coffee</p>
              <div className="logo_container">
                <img className="bean_line" src={Line} alt="" />
                <img className="bean_logo" src={Logo} alt="" />
                <img className="bean_line" src={Line} alt="" />
              </div>
              <p className="main_bg_content">
                We makes every day full of energy and taste
              </p>
              <p className="main_bg_content">Want to try our beans?</p>
              <button className="more_button">More</button>
            </div>
          </div>
        )}
        {(this.props.activeTabNav === "OurCoffee" ||
          this.props.activeTabNav === "Pleasure") && (
          <div className={`${this.props.activeClassBg} cover`}>
            <div className="main_bg_info_container main_pd_our_pleasure">
              {this.props.activeTabNav === "OurCoffee" ? (
                <p className="main_bg_title">Our Coffee</p>
              ) : (
                <p className="main_bg_title">For your pleasure</p>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default MainBgInfo;
