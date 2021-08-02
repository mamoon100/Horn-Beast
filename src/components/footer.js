import React, { Component } from "react";

export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  changeFooter() {
    if (this.props.hero)
      this.setState({
        text: "Lets Fight ⚔️",
      });
  }
  render() {
    return (
      <footer
        style={{
          cursor: this.props.hero
            ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='32' height='32' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚔️</text></svg>\") 16 0, auto"
            : "auto",
        }}
        onClick={() => {
          if (this.props.hero) {
            this.setState({ count: this.state.count + 1 });
          }
          if (this.state.count >= 10) {
            this.props.change();
          }
        }}
      >
        <p>{this.props.text}</p>
      </footer>
    );
  }
}
