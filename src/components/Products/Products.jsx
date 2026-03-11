import { Component } from "react";
import './products.css'
import BestProductsCard from "../BestProductsCard/BestProductsCard";

class Products extends Component {
    render() {
        return(
            <div className="products_best_main_conainer">
                <div className="products_best_main__container">
                    <p className="products_title">Our best</p>
                    <div className="products_cards_container">
                        <BestProductsCard />
                    </div>
                </div>
            </div>
        )
    }
}

export default Products