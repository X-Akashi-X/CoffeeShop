import { Component } from "react";
import "./BestProductsCard.css";

class BestProductsCard extends Component {
  render() {
    return (
      <>
        {this.props.filteredItems
          .filter((product) => product.best === true)
          .map((product) => {
            return (
              <div
                onClick={() => this.props.handleTakeAboutIt(
                  product,
                  "set_bg_our",
                  "aboutIt",
                )}
                className="products_best_cards"
              >
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
