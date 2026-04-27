import { useContext } from "react";
import "./bestProductsCard.css";
import { Context } from "@context/FilteredItemsContext";
import { Link } from "react-router-dom";

const BestProductsCard = () => {
  const { filteredItems } = useContext(Context);
  return (
    <>
      {filteredItems
        .filter((product) => product.best === true)
        .map((product) => {
          return (
            <Link to={"/OurCoffee/product/" + product.id}>
              <div className="products_best_cards">
                <img className="products_img" src={product.img} alt="" />
                <p className="products_content">{product.title}</p>
                <p className="products_content">{`${product.price}$`}</p>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default BestProductsCard;
