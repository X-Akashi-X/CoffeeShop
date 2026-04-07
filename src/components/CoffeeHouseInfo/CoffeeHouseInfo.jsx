import "./CoffeeHouseInfo.css";
import Logo from "@assets/icons/logo_white.svg";
import Line from "@assets/icons/line_white.svg";
import { Link } from "react-router-dom";

const CoffeeHouseInfo = () => {
  return (
    <div className="set_bg_house cover">
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
        <Link to='/OurCoffee'>
          <button className="more_button">More</button>
        </Link>
      </div>
    </div>
  );
};

export default CoffeeHouseInfo;
