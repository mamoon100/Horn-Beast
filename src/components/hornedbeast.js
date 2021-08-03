import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class HornedBeast extends Component {
  constructor() {
    super();
    this.state = {
      fav: 0,
    };
  }
  render() {
    return (
      <Card
        // className={"m-2"}
        bg="secondary"
        text="light"
        border="dark"
        style={{ width: "100%", height: "600px", padding: "10px" }}
      >
        <Card.Img
          variant="top"
          src={this.props.src}
          alt={this.props.description}
          title={this.props.title}
          style={{ width: "auto", height: "400px" }}
          onClick={(e) => {
            this.props.handle(
              this.props.title,
              this.props.src,
              this.props.description
            );
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description.split("@").map((x) => {
              return (
                <p>
                  {x} <br />
                </p>
              );
            })}
          </Card.Text>
          <Button
            variant="outline-light"
            onClick={(e) => {
              this.setState({ fav: this.state.fav + 1 });
              if (this.props.title === "Zurg" && this.state.fav === 3) {
                this.props.handle(
                  "Zurg",
                  "https://static.wikia.nocookie.net/pixar/images/7/76/Toy_Story_2_-_Zurg.jpg",
                  "You Win this battle, but lose the War @ i will be back better next time"
                );
              }
            }}
          >
            {this.props.title !== "Zurg"
              ? `❤️ ${this.state.fav}`
              : `⚔️ ${this.state.fav}`}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
