import AboutCoffeeHouse from "../components/AboutCoffeeHouse/AboutCoffeeHouse";
import BestProducts from "../components/BestProducts/BestProducts";
import CoffeeHouseInfo from "../components/CoffeeHouseInfo/CoffeeHouseInfo";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const CoffeeHousePage = () => {
  return (
    <main id="start">
      <Header />
      <CoffeeHouseInfo />
      <AboutCoffeeHouse />
      <BestProducts />
      <Footer />
    </main>
  );
};

export default CoffeeHousePage;
