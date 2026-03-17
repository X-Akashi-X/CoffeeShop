import { Component } from "react";
import "./bestProductsCard.css";
import products from "../../data.json";

class BestProductsCard extends Component {
  render() {
    return (
      <>
        {products.filter(product => product.best === true).map((product) => {
          return (
            <div className="products_best_cards">
              <img className="products_img" src={product.img} alt="" />
              <p className="products_content">{product.title}</p>
              <p className="products_content">{`${product.price}$`}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export default BestProductsCard;
