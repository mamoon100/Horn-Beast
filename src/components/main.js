import React, { Component } from "react";
import HornedBeast from "./hornedbeast";
import { Row, Col } from "react-bootstrap";
import data from "../data/data.json";

export default class Main extends Component {
  render() {
    return (
      <main>
        <Row xs={1} lg={4} className={"g-1"} md={3} sm={2}>
          {data.map((e, i) => {
            return (
              <Col className={"g-4"}>
                <HornedBeast
                  src={e.image_url}
                  title={e.title}
                  description={e.description}
                  key={e.keyword}
                />
              </Col>
            );
          })}
        </Row>
      </main>
    );
  }
}
