import "./App.css";
import CoffeeHousePage from "./pages/CoffeeHousePage";
import OurCoffeePage from "./pages/OurCoffeePage";
import PleasurePage from "./pages/PleasurePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutIt from "./components/AboutIt/AboutIt";
import { Provider } from "./context/FilteredItemsContext";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoffeeHousePage />} />
          <Route path="/OurCoffee" element={<OurCoffeePage />}>
            <Route path="product/:id" element={<AboutIt />} />
          </Route>
          <Route path="/Pleasure" element={<PleasurePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
