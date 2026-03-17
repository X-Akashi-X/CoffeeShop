import { Component } from "react";
import products from "../../data.json";
import "./defaultProductsCard.css";

class DeffaultCards extends Component {
  render() {
    

    return (
      <>
        {products
          .filter((product) => product.best === false)
          .map((product) => {
            return (
              <div className="products_default_cards">
                <img className="products_img" src={product.img} alt="" />
                <p className="products_content">{product.title}</p>
                <p className="products_content">{product.country}</p>
                <p className="products_content">{`${product.price}$`}</p>
              </div>
            );
          })}
      </>
    );
  }
}

export default DeffaultCards;
