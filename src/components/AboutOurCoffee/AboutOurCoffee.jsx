import "./AboutOurCoffee.css";
import BlackLogo from "../BlackLogo/BlackLogo";
import Beans from "@assets/images/beans_img.jpg";
import Line from "@assets/icons/line_long_black.svg";

const AboutOurCoffee = () => {
  return (
    <>
      <div className="about_container max_width_about_beans_pleasure flex gap_beans_goods about_beans_pleasure_pd">
        <div className="about_img_container">
          <img className="beans_img" src={Beans} alt="" />
        </div>
        <div>
          <p className="about_title">About our beans</p>
          <BlackLogo />
          <p className="about_content">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </p>
          <p className="about_content">
            Afraid at highly months do things on at. Situation recommend
            objection do intention<br></br>so questions.<br></br>As greatly
            removed calling pleased improve an.<br></br>Last ask him cold feel{" "}
            <br></br>met spot shy want. Children me laughing we prospect
            answered followed. At it went<br></br>
            is song that held help face.
          </p>
        </div>
      </div>
      <img src={Line} className="long_line" alt="" />
    </>
  );
};

export default AboutOurCoffee;
