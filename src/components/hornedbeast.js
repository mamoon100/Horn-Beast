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
        style={{ width: "auto", height: "600px", padding: "10px" }}
      >
        <Card.Img
          variant="top"
          src={this.props.src}
          alt={this.props.description}
          title={this.props.title}
          style={{ width: "100%", height: "350px" }}
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
                  "Shocking Moment",
                  "https://64.media.tumblr.com/1778ddfd902e6dff74a7a450b8a96e5f/tumblr_p6c6af7AmS1txtch1o3_400.gifv",
                  "🤯🤯🤯🤯🤯🤯 @ Don't Listen To him and Continue The Fight "
                );
              } else if (this.props.title === "Zurg" && this.state.fav === 6) {
                this.props.handle(
                  "You Did it",
                  "https://64.media.tumblr.com/358e25d245ffa8a4280493a9d7a8aae7/eb9916ef2f0b814f-5a/s540x810/a35d1b4709c1eb4037f8f310e24584545167f4cf.gifv",
                  "You Did it @ You Are The Hero We Needed"
                );
                this.props.handleZurgIsDead();
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
