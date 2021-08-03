import React, { Component } from "react";
import { Modal, Image, Button } from "react-bootstrap";

export default class SelectedBeast extends Component {
  render() {
    return (
      <Modal
        onHide={() => this.props.hideModal()}
        show={this.props.show}
        fullscreen={true}
        style={{
          backgroundColor: "#6c757d",
          color: "white",
        }}
      >
        <Modal.Header
          closeButton={true}
          style={{
            backgroundColor: "#6c757d",
            color: "white",
          }}
        >
          <Modal.Title>
            <h3>{this.props.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#6c757d",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={this.props.src}
            alt={this.props.description}
            title={this.props.title}
            style={{ width: "auto", height: "80%" }}
          />
          <p className="m-2">
            {this.props.description.split("@").map((x) => {
              return (
                <>
                  {x}
                  <br />
                </>
              );
            })}
          </p>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "#6c757d",
            color: "white",
          }}
        >
          <Button variant="danger" onClick={() => this.props.hideModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
