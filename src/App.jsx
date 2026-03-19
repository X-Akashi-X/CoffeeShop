import "./App.css";
import { Component } from "react";
import products from "./data.json";
import Header from "./components/Header/Header";
import MainBgInfo from "./components/MainBgInfo/MainBgInfo";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClassBg: "set_bg_main",
      activeTabNav: "OurCoffee",
      filteredItems: products,
      activeFilter: null,
      searchTerm: "",
    };
  }

  handleChange = (classBg, tabNav) => {
    this.setState({ activeClassBg: classBg });
    this.setState({ activeTabNav: tabNav });
  };

  handleFilter = (type) => {
    if (type === "all" || this.state.activeFilter === type) {
      this.setState({ filteredItems: products, activeFilter: null });
    } else {
      const filtered = products.filter((product) => product.country === type);
      this.setState({ filteredItems: filtered, activeFilter: type });
    }
  };

  handleSearch = (e) => {
    const value = e.target.value;
    const filtered = products.filter((product) =>
      product.country.toLowerCase().includes(value.toLowerCase()),
    );
    this.setState({ searchTerm: value, filteredItems: filtered });
  };

  handleTakeAboutIt = (product, classBg, tabNav) => {
    const filtered = products.filter((item) => item.id === product.id);
    this.setState({ filteredItems: filtered });
    this.handleChange(classBg, tabNav);
  };

  render() {
    return (
      <main id="start">
        <Header changeData={this.handleChange} />
        <MainBgInfo
          activeClassBg={this.state.activeClassBg}
          activeTabNav={this.state.activeTabNav}
        />
        <About
          activeTabNav={this.state.activeTabNav}
          filteredItems={this.state.filteredItems}
        />
        <Products
          activeTabNav={this.state.activeTabNav}
          filteredItems={this.state.filteredItems}
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          handleTakeAboutIt={this.handleTakeAboutIt}
        />
        <Footer changeData={this.handleChange} />
      </main>
    );
  }
}

export default App;
