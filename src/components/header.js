import React, { Component } from "react";
// import { Modal, Button } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Horn Beast",
      count: 0,
      show: false,
    };
  }

  render() {
    return (
      <>
        <header>
          <h1
            onClick={(e) => {
              if (this.state.count === 0) {
                this.setState({ count: 1 });
                this.setState({
                  header: "Don't you have something better to do? 🤔",
                });
                // @ts-ignore
                e.target.style.color = "blue";
              } else if (this.state.count === 1) {
                this.setState({ count: 2 });
                this.setState({
                  header: "Are You Going to Do this All Day? 😩",
                });
                // @ts-ignore
                e.target.style.color = "yellow";
              } else if (this.state.count === 2) {
                this.setState({ count: 3 });
                this.setState({
                  header:
                    "Nah Just Kidding 😂 You are welcome any time any day ❤️ ",
                });
                // @ts-ignore
                e.target.style.color = "red";
              } else if (this.state.count === 3) {
                this.setState({ count: 4 });
                this.props.change();
                this.setState({
                  header:
                    "You have reach this secret area which will give you an extra feature in the page that will be available only for A hero Like You ",
                });
                // @ts-ignore
                e.target.style.color = "white";
                // @ts-ignore
                e.target.style.fontSize = "26px";
                // @ts-ignore
                e.target.style.cursor = "auto ";
              }
            }}
          >
            {this.state.header}
          </h1>
        </header>
      </>
    );
  }
}
