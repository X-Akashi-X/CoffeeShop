import { Component } from "react";
import "./About.css";
import BlackLogo from "../BlackLogo/BlackLogo";
import Beans from "@assets/images/beans_img.jpg";
import Pleasure from "@assets/images/pleasure_img.jpg";
import Line from "@assets/icons/line_long_black.svg";

class About extends Component {
  render() {
    return (
      <div className="about_main_container">
        {this.props.activeTabNav === "CoffeeHouse" && (
          <div className="about_container max_width_about_house about_house_pd">
            <p className="about_title">About Us</p>
            <BlackLogo />
            <p className="about_paragraph_1_mr about_content">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.
            </p>
            <p className="about_content">
              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </p>
          </div>
        )}
        {(this.props.activeTabNav === "OurCoffee" ||
          this.props.activeTabNav === "Pleasure") && (
          <>
            <div className="about_container max_width_about_beans flex gap_beans_goods about_beans_pd">
              <div className="beans_img_container">
                {this.props.activeTabNav === "OurCoffee" ? (
                  <img className="beans_img" src={Beans} alt="" />
                ) : (
                  <img className="pleasure_img" src={Pleasure} alt="" />
                )}
              </div>
              <div>
                <p className="about_title">About our beans</p>
                <BlackLogo />
                <p className="about_content">
                  Extremity sweetness difficult behaviour he of. On disposal of
                  as landlord horrible.
                </p>
                <p className="about_content">
                  Afraid at highly months do things on at. Situation recommend
                  objection do intention<br></br>so questions.<br></br>As
                  greatly removed calling pleased improve an.<br></br>Last ask
                  him cold feel <br></br>met spot shy want. Children me laughing
                  we prospect answered followed. At it went<br></br>
                  is song that held help face.
                </p>
              </div>
            </div>
            <img src={Line} className="long_line" alt="" />
          </>
        )}
        {this.props.activeTabNav === "aboutIt" && (
          <>
            {this.props.filteredItems.map((product) => (
              <div className="about_container max_width_about_it flex gap_about_it about_beans_pd">
                <div className="about_img_container">
                  <img className="about_it_img" src={product.imgAbout} alt="" />
                </div>
                <div>
                  <p className="about_title">About it</p>
                  <BlackLogo />
                  <div className="about_it_content_container">
                    <p className="about_content">
                      <strong>Country:</strong> {product.country}
                    </p>
                    <p className="about_content">
                      <strong>Description:</strong> {product.description}
                    </p>
                    <p className="about_content">
                      <strong>
                        Price:
                        <span
                          style={{ fontSize: "14px" }}
                        >{` ${product.price}$`}</span>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default About;
