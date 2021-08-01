import React, { Component } from "react";

export default class HornedBeast extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h2>{this.props.title}</h2>
        <img
          src={this.props.src}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </>
    );
  }
}
