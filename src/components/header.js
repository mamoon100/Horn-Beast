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
                  header: "Didn't we do this yesterday ? ",
                });
                e.target.style.color = "blue";
              } else if (this.state.count === 1) {
                this.setState({ count: 2 });
                this.setState({ header: "We Did it Before I'm Sure " });
                e.target.style.color = "yellow";
              } else if (this.state.count === 2) {
                this.setState({ count: 3 });
                this.setState({
                  header: "Yes i remember now you are my hero 🦸",
                });
                e.target.style.color = "red";
              } else if (this.state.count === 3) {
                this.setState({ count: 4 });
                this.props.change();
                this.setState({
                  header:
                    "The bad guy has run away and hid in another part of the page Find him by taking the next hint from the footer",
                });
                e.target.style.color = "white";
                e.target.style.fontSize = "26px";
              }
            }}
          >
            {this.state.header}
          </h1>
        </header>
        {/* <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>Welcome To The Beast Dungeon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This is A secret place and if you find it please Help me i wrote
            this message in hope that someone brave like you find me please let
            me free by pressing the footer 10 times all my hope in you "My Hero"
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                this.setState({ show: false });
              }}
            >
              I'm Your Hero ⚔️
            </Button>
          </Modal.Footer>
        </Modal> */}
      </>
    );
  }
}
