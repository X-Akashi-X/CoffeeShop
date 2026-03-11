import "./App.css";
import { Component } from "react";
import products from "./data.json";
import Header from "./components/Header/Header";
import MainBgInfo from "./components/MainBgInfo/MainBgInfo";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <MainBgInfo />
        <About />
      </main>
    );
  }
}

export default App;
