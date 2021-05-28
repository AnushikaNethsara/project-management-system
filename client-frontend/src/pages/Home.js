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
      allProjects: [],
      skills: [""],
    };
    this.getAccountDeatils = this.getAccountDeatils.bind(this);
    this.getSkills = this.getSkills.bind(this);
  }

  componentDidMount() {
    console.log(localStorage.getItem("auth-id"));
    this.getSkills();
    this.getAccountDeatils();
  }

  getAccountDeatils() {
    Axios.get(constants.backend_url + "/project/")
      .then((response) => {
        response.data.forEach((project) => {
          console.log(this.state.skills);
          if (
            project.skills.some((val) => this.state.skills.indexOf(val) > 0) ===
            true
          ) {
            console.log(true);
            this.setState({ values: this.state.values.concat(project) });
          }
          if (
            project.skills.some((val) => this.state.skills.indexOf(val) > 0) ===
            false
          ) {
            console.log(false);

            this.setState({
              allProjects: this.state.allProjects.concat(project),
            });
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getSkills() {
    Axios.get(
      constants.backend_url +
        "/project/getProjects/" +
        localStorage.getItem("auth-id")
    )
      .then((response) => {
        console.log(response.data);
        response.data.forEach((skill) => {
          this.setState({ skills: this.state.skills.concat(skill.skills) });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <MyCarousel></MyCarousel>
        <Container>
          <div style={{ marginTop: "3%" }}>
            <h4>Recommended for you:</h4>
            <Row>
              {this.state.values &&
                this.state.values.map((item) => {
                  return <MyCard data={item} />;
                })}
            </Row>
          </div>
          <div>
            <h4>You may try:</h4>
            <Row>
              {this.state.allProjects &&
                this.state.allProjects.map((item) => {
                  return <MyCard data={item} />;
                })}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
