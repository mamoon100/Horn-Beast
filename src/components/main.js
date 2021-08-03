import React, { Component } from "react";
import HornedBeast from "./hornedbeast";
import {
  Row,
  Col,
  InputGroup,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import { GoSearch } from "react-icons/go";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchResults: this.props.data,
      lg: 4,
    };
  }

  getSearchArray = (word) => {
    let tempArray = [];
    for (let i = 0; i < this.props.data.length; i++) {
      if (
        this.props.data[i].description
          .toLowerCase()
          .indexOf(word.toLowerCase()) !== -1
      ) {
        tempArray.push(this.props.data[i]);
      }
    }
    if (word.toLowerCase() === "to the infinity and beyond") {
      tempArray = [
        {
          description:
            "👿: You thought you defeated me yesterday, I Can't Lose I'm Zurg the nemesis of Buzz Light Year...@ 🦸: Wait does that mean that the one in the prison is ......... @ 🦸: NOOOOOOOOOOOOO!  ",
          horns: 0,
          image_url:
            "https://static.wikia.nocookie.net/blosc/images/f/f4/Zurg.png",
          keyword: "Zurg",
          title: "Zurg",
        },
      ];
    }

    if (tempArray.length === 1) {
      this.setState({
        lg: 1,
      });
    } else {
      this.setState({
        lg: 4,
      });
    }
    this.setState({ searchResults: tempArray });
  };

  render() {
    return (
      <main>
        <Container fluid>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col>
              <InputGroup
                className="mb-3"
                onChange={(e) => {
                  this.setState({
                    // @ts-ignore
                    search: e.target.value.toLowerCase(),
                  });
                  // @ts-ignore
                  this.getSearchArray(e.target.value.toLowerCase());
                }}
              >
                <FormControl placeholder="Search" />
                <Button variant="outline-secondary" id="button-addon2">
                  <GoSearch />
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row className={"g-1"} md={3} sm={2} lg={this.state.lg} xs={1}>
            {this.state.searchResults.map((e, i) => {
              return (
                <Col>
                  <HornedBeast
                    fav={this.props.fav}
                    handle={this.props.changeData}
                    src={e.image_url}
                    title={e.title}
                    description={e.description}
                    key={e.keyword}
                    increment={this.props.increment}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    );
  }
}
