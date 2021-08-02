import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

/*
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>



*/

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
          style={{ width: "100%", height: "400px" }}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button
            // className={"bi bi-heart"}
            variant="outline-light"
            onClick={(e) => {
              this.setState({
                fav: this.state.fav + 1,
              });
            }}
          >
            ❤️ {this.state.fav}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
