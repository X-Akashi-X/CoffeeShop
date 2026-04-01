import { Component } from "react";
import "./Products.css";
import BestProductsCard from "../BestProductsCard/BestProductsCard";
import SearchBlock from "../SearchBlock/SearchBlock";
import DeffaultProductsCard from "../DefaultProductsCard/DefaultProductsCard";

class Products extends Component {
  render() {
    return (
      <>
        {this.props.activeTabNav === "CoffeeHouse" && (
          <div className="products_best_main_container">
            <div className="products_best_container">
              <p className="products_best_title">Our best</p>
              <div className="products_best_cards_container">
                <BestProductsCard
                  handleTakeAboutIt={this.props.handleTakeAboutIt}
                  filteredItems={this.props.filteredItems}
                />
              </div>
            </div>
          </div>
        )}
        {(this.props.activeTabNav === "OurCoffee" ||
          this.props.activeTabNav === "Pleasure") && (
          <>
            {this.props.activeTabNav === "OurCoffee" ? (
              <SearchBlock
                handleFilter={this.props.handleFilter}
                handleSearch={this.props.handleSearch}
                searchTerm={this.props.searchTerm}
              />
            ) : null}
            <div className="products_default_container">
              <DeffaultProductsCard
                filteredItems={this.props.filteredItems}
                handleChange={this.props.handleChange}
                handleTakeAboutIt={this.props.handleTakeAboutIt}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

export default Products;
