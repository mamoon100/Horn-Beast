import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "./style.css";
export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
