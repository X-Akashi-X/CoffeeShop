import { Component } from "react";
import "./about.css";
import BlackLogo from "../BlackLogo/BlackLogo";
import products from "../../data.json";
import Beans from "../../assets/beans_img.jpg"

class About extends Component {
  render() {
    return (
      <div className="about_main_container">
          {this.props.activeTabNav === "CoffeeHouse" && (
            <div className="about_container">
              <p className="about_title">About Us</p>
              <BlackLogo />
              <p className="about_paragraph_1_mr about_content">
                Extremity sweetness difficult behaviour he of. On disposal of as
                landlord horrible. Afraid at highly months do things on at.
                Situation recommend objection do intention so questions. As
                greatly removed calling pleased improve an. Last ask him cold
                feel met spot shy want. Children me laughing we prospect
                answered followed. At it went is song that held help face.
              </p>
              <p className="about_content">
                Now residence dashwoods she excellent you. Shade being under his
                bed her, Much read on as draw. Blessing for ignorant exercise
                any yourself unpacked. Pleasant horrible but confined day end
                marriage. Eagerness furniture set preserved far recommend. Did
                even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>
          )}
          {this.props.activeTabNav === "OurCoffee" && (
            <div className="about_container flex gap_beans_goods">
              <div className="beans_img_container"><img className='beans_img' src={Beans} alt="" /></div>
              <div>
                <p className="about_title">About our beans</p>
                <div>
                  <img src="" alt="" srcset="" />
                  <img src="" alt="" srcset="" />
                  <img src="" alt="" srcset="" />
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default About;
