import React, { Component } from "react";

export default class Footer extends Component {
  changeFooter = () => {
    if (this.props.hero)
      this.setState({
        text: "",
      });
  };
  render() {
    return (
      <footer
        style={{
          cursor: this.props.hero ? "help" : "auto",
        }}
      >
        <p>{this.props.text}</p>
      </footer>
    );
  }
}
