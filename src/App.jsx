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
      activeClass: 'set_bg_main'
    }
  }

  handleChangeBg = (newClass) => {
    this.setState({activeClass: newClass})
  }

  render() {
    return (
      <main className={this.state.activeClass}>
        <Header changeBg={this.handleChangeBg}/>
        <MainBgInfo />
        <About />
        <Products />
        <Footer />
      </main>
    );
  }
}

export default App;
