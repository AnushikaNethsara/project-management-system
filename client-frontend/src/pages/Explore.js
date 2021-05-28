import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { Link } from "react-router-dom";
import axios from "axios";

import constants from "../constants/constants";
import MyProjectCard from "../components/MyProjectCard/MyProjectCard";
import BeatLoader from "react-spinners/BeatLoader";
import MyCard from "../components/Card/Card";

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = { projects: [], name: "", loading: false };
  }

  componentDidMount() {
    axios
      .get(constants.backend_url + "/project/")
      .then((res) => {
        this.setState({ projects: res.data });
        this.setState({
          loading: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Container>
          <h1 className="text-center text-uppercase mt-5">Explore Projects</h1>
          {this.state.loading ? (
            <Row className="justify-content-md-center">
              {this.state.projects &&
                this.state.projects.map((item) => {
                  return <MyCard data={item} />;
                })}
            </Row>
          ) : (
            <div className="text-center" style={{ marginTop: "10%" }}>
              <BeatLoader color={"#0052d4"} loading={true} size={100} />
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default Explore;
