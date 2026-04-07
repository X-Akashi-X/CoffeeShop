import "./BestProducts.css";
import BestProductsCard from "../BestProductsCard/BestProductsCard";

const BestProducts = () => {
  return (
    <div className="products_best_main_container">
      <div className="products_best_container">
        <p className="products_best_title">Our best</p>
        <div className="products_best_cards_container">
          <BestProductsCard />
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
