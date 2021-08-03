import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import SelectedBeast from "./components/selectedbeast";
import data from "./data/data.json";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTheUserHero: false,
      text: "All Right Reserved © Mamoun Hussein 2021 LTUC/ASAC",
      show: false,
      title: "",
      src: "",
      description: "",
      search: "",
    };
  }

  change = () => {
    this.setState({
      isTheUserHero: true,
      text: "Try To 'SEARCH' For a Sentence that Buzz Lightyear would say ",
    });
  };

  changeData = (title, src, description, fav) => {
    this.setState({
      title: title,
      src: src,
      description: description,
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <Header change={this.change} />
        <Main data={data} changeData={this.changeData} fav={this.state.fav} />
        <SelectedBeast
          show={this.state.show}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}
          hideModal={this.hideModal}
          fav={this.state.fav}
        />
        <Footer hero={this.state.isTheUserHero} text={this.state.text} />
      </>
    );
  }
}
