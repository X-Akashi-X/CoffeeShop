import { Outlet, useParams } from "react-router-dom";
import AboutOurCoffee from "../components/AboutOurCoffee/AboutOurCoffee";
import DefaultProducts from "../components/DefaultProducts/DefaultProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBlock from "../components/SearchBlock/SearchBlock";
import OurCoffeeInfo from "../OurCoffeeInfo/OurCoffeeInfo";

const OurCoffePage = () => {
  const { id } = useParams();

  return (
    <main id="start">
      <Header />
      <OurCoffeeInfo />
      {!id ? (
        <>
          <AboutOurCoffee />
          <SearchBlock />
          <DefaultProducts />
        </>
      ) : (
        <Outlet />
      )}
      <Footer />
    </main>
  );
};

export default OurCoffePage;
