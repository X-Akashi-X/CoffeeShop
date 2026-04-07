import AboutPleasureCoffee from "../components/AboutPleasureCoffee/AboutPleasureCoffee";
import DefaultProducts from "../components/DefaultProducts/DefaultProducts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PleasureInfo from "../components/PleasureInfo/PleasureInfo";

const PleasurePage = () => {
  return (
    <main id="start">
      <Header />
      <PleasureInfo />
      <AboutPleasureCoffee />
      <DefaultProducts />
      <Footer />
    </main>
  );
};

export default PleasurePage;
