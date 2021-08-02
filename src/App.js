import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTheUserHero: false,
      text: "All Right Reserved © Mamoun Hussein 2021 LTUC/ASAC",
    };
  }

  change() {
    this.setState({
      isTheUserHero: true,
      text: "Lets Fight ⚔️",
    });
  }

  defeated() {
    this.setState({
      text: "You Win This Time But i will Revenge Next Time 👿 ",
    });
  }

  render() {
    return (
      <>
        <Header change={this.change.bind(this)} />
        <Main />
        <Footer
          hero={this.state.isTheUserHero}
          text={this.state.text}
          change={this.defeated.bind(this)}
        />
      </>
    );
  }
}
