import "./App.css";
import { Component } from "react";
import products from "./data.json";
import Header from "./components/Header/Header";
import MainBgInfo from "./components/MainBgInfo/MainBgInfo";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      activeClassBg: 'set_bg_main',
      activeTabNav: 'OurCoffee'
    }
  }

  handleChange = (classBg, tabNav) => {
    this.setState({activeClassBg: classBg})
    this.setState({activeTabNav: tabNav})
  }

  handleFilter = (value) => {
    products.filter(product => {
      product.country === value
    })
  }

  render() {
    return (
      <main id="start">
        <Header changeData={this.handleChange}/>
        <MainBgInfo activeClassBg={this.state.activeClassBg} activeTabNav={this.state.activeTabNav}/>
        <About activeTabNav={this.state.activeTabNav}/>
        <Products activeTabNav={this.state.activeTabNav}/>
        <Footer changeData={this.handleChange}/>
      </main>
    );
  }
}

export default App;
