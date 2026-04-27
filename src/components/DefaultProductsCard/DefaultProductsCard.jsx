import { useContext } from "react";
import "./defaultProductsCard.css";
import { Context } from "@context/FilteredItemsContext";
import { Link } from "react-router-dom";

const DeffaultCards = () => {
  const { filteredItems } = useContext(Context);
  return (
    <>
      {filteredItems
        .filter((product) => product.best === false)
        .map((product) => {
          return (
            <Link to={'/OurCoffee/product/' + product.id}>
              <div className="products_default_cards fade">
                <img className="products_img" src={product.img} alt="" />
                <p className="products_content">{product.title}</p>
                <p className="products_content">{product.country}</p>
                <p className="products_content">{`${product.price}$`}</p>
              </div>
            </Link>
          );
        })}
    </>
  );
};

export default DeffaultCards;
