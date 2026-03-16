import { Component } from "react";
import "./products.css";
import BestProductsCard from "../BestProductsCard/BestProductsCard";
import SearchBlock from "../SearchBlock/SearhBlock";

class Products extends Component {
  render() {
    return (
      <>
        {this.props.activeTabNav === "CoffeeHouse" && (
          <div className="products_best_main_container">
            <div className="products_best_container">
              <p className="products_best_title">Our best</p>
              <div className="products_best_cards_container">
                <BestProductsCard />
              </div>
            </div>
          </div>
        )}
        {this.props.activeTabNav === "OurCoffee" && (
          <>
            <SearchBlock />
            <div className="products_default_container">
              
            </div>
          </>
        )}
      </>
    );
  }
}

export default Products;
