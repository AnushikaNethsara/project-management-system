import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { Link } from "react-router-dom";
import axios from "axios";

import constants from "../constants/constants";
import MyProjectCard from "../components/MyProjectCard/MyProjectCard";

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = { projects: [], name: "" };
    this.getUserName = this.getUserName.bind(this);
  }

  //get the list of projects from database
  componentDidMount() {
    //getting all the projects and puting in the projects array we declared in the constructor
    axios
      .get(constants.backend_url + "/project/")
      .then((res) => this.setState({ projects: res.data }))
      .catch((err) => {
        console.log(err);
      });
    this.getUserName();
  }

  getUserName() {
    var userId = localStorage.getItem("auth-id");

    axios
      .get(constants.backend_url + "/users/get-user/" + userId)
      .then((response) => {
        this.setState({
          name: response.data[0].name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  projectList() {
    return this.state.projects.map((currentproject) => {
      return (
        <MyProjectCard
          name={this.state.name}
          project={currentproject}
          deleteProject={this.deleteProject}
          key={currentproject._id}
        />
      );
    });
  }

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Container>
          <h4 className="text-center">Explore Projects</h4>

          <br></br>
          {this.projectList()}
          <br></br>
        </Container>
      </div>
    );
  }
}

export default Explore;
