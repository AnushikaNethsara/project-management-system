import React, { Component } from "react";
import MyCarousel from "../components/Carousel/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../components/Card/Card";
import mern from "../img/mern.jpg";
import PropTypes from "prop-types";
import constants from "../constants/constants";
import Axios from "axios";

class Home extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor() {
    super();
    this.state = {
      values: [],
    };
    this.getAccountDeatils = this.getAccountDeatils.bind(this);
  }

  componentDidMount() {
    this.getAccountDeatils();
  }

  getAccountDeatils() {
    Axios.get(constants.backend_url + "/project/")
      .then((response) => {
        this.setState({
          values: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div style={{ marginTop: "3%" }}>
        <Container>
          <h4>Home:</h4>
          <Row>
            {this.state.values &&
              this.state.values.map((item) => {
                return <MyCard data={item} />;
              })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
