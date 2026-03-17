import { Component } from "react";
import "./products.css";
import BestProductsCard from "../BestProductsCard/BestProductsCard";
import SearchBlock from "../SearchBlock/SearhBlock";
import DeffaultCards from "../DefaultProductsCard/DefaultProductsCard";

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
        {(this.props.activeTabNav === "OurCoffee" ||
          this.props.activeTabNav === "Pleasure") && (
          <>
            {this.props.activeTabNav === "OurCoffee" ? <SearchBlock /> : null}
            <div className="products_default_container">
              <DeffaultCards />
            </div>
          </>
        )}
      </>
    );
  }
}

export default Products;
