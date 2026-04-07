import { useContext } from "react";
import "./AboutIt.css";
import { Context } from "@context/FilteredItemsContext";
import { useParams } from "react-router-dom";
import BlackLogo from "../BlackLogo/BlackLogo";

const AboutIt = () => {
  const { filteredItems } = useContext(Context);
  const { id } = useParams();

  const product = filteredItems.find((item) => item.id === Number(id));

  return (
    <div className="about_container max_width_about_it flex gap_about_it about_beans_pleasure_pd">
      <div className="about_it_img_container">
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
              <span style={{ fontSize: "14px" }}>{`${product.price}$`}</span>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIt;
