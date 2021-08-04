import React, { Component } from "react";
import HornedBeast from "./hornedbeast";
import {
  Row,
  Col,
  InputGroup,
  // Button,
  FormControl,
  Container,
  Dropdown,
} from "react-bootstrap";
// import { GoSearch } from "react-icons/go";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: " ",
      searchResults: this.props.data,
      lg: 4,
      horn: 0,
      dropdown: [...new Set(this.props.data.map((e) => e.horns))],
      dropText: "Filter by No. Horns",
      zurgIsDead: false,
    };
  }

  handleTyping = (word) => {
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
            "Stop searching for things in the past you are hero and hero regret nothing in the past",
          horns: 2,
          image_url:
            "https://i.pinimg.com/originals/b3/17/1b/b3171ba2fd79fa3c27823af92fbee0ae.jpg",
          keyword: "Zurg",
          title: "Master Oogway",
        },
      ];
    }

    return tempArray;
  };

  handleHorn = (arr, horn) => {
    this.setState({
      horn: horn,
    });
    return horn === 0 ? arr : arr.filter((e) => e.horns === horn);
  };

  handleShow = (word, horn) => {
    let arr = this.handleTyping(word);
    arr = this.handleHorn(arr, horn);
    if (horn === "Hero 🦸") {
      arr = [
        {
          description: "You Found ME 👿 Let's Fight",
          horns: 2,
          image_url: "https://i.ytimg.com/vi/wRxY7KzkoGg/maxresdefault.jpg",
          keyword: "unicorn",
          title: "Zurg",
        },
      ];
    }
    if (word === "dead") {
      arr = [
        {
          description:
            "You Did it ........... 🥳🥳🥳🥳 @ Now Take a reset for Tomorrow",
          horns: 0,
          image_url: "https://i.gifer.com/1gj8.gif",
          keyword: "Celebration",
          title: "Celebration",
        },
      ];
    }

    this.setState({
      searchResults: arr,
      search: word,
      horn: horn,
      dropText: horn === 0 ? "All" : horn,
      lg: arr.length === 1 ? 1 : 4,
    });
  };

  handleZurgIsDead = () => {
    this.setState({
      zurgIsDead: true,
    });
    this.handleShow("dead", 0);
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
                  this.handleShow(
                    // @ts-ignore
                    e.target.value.toLowerCase(),
                    this.state.horn
                  );
                }}
              >
                <FormControl placeholder="Search" />
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="dropdown-basic"
                  >
                    {this.state.dropText}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#"
                      value={0}
                      onClick={() => {
                        this.handleShow(this.state.search, 0);
                      }}
                    >
                      All
                    </Dropdown.Item>
                    {this.state.dropdown.map((item, i) => (
                      <Dropdown.Item
                        key={i}
                        href={`#${item}`}
                        value={item}
                        onClick={() => {
                          this.handleShow(this.state.search, item);
                        }}
                      >
                        {item}
                      </Dropdown.Item>
                    ))}

                    {this.props.hero && (
                      <Dropdown.Item
                        onClick={() => {
                          this.handleShow(this.state.search, "Hero 🦸");
                        }}
                      >
                        Hero 🦸
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
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
                    handleZurgIsDead={this.handleZurgIsDead}
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
