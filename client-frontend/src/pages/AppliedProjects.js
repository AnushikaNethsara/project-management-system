import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import constants from "../constants/constants";
import MyProjectCard from "../components/MyProjectCard/MyProjectCard";

class AppliedProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], name: "" };
    this.getMyProjects = this.getMyProjects.bind(this);
  }
  componentDidMount() {
    this.getMyProjects();
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
  getMyProjects() {
    axios
      .get(
        constants.backend_url +
          "/project/get-applied-projects/" +
          localStorage.getItem("auth-id")
      )
      .then((res) => this.setState({ projects: res.data }))
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Container>
          <h4 className="text-center">Requested Projects</h4>

          <br></br>
          {this.state.projects &&
            this.state.projects.map((item) => {
              return (
                <MyProjectCard
                  name={this.state.name}
                  type={"requested-projects"}
                  project={item}
                  //deleteProject={this.deleteProject}
                  key={item._id}
                />
              );
            })}
          <br></br>
        </Container>
      </div>
    );
  }
}

export default AppliedProjects;
