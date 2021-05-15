import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import MyPagination from "../components/Pagination/Pagination";
import mern from "../img/mern.jpg";

class MyProjects extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Container>
          <h4 className="text-center">My Projects</h4>
          <br></br>
          <ProjectCard
            title="Project Title"
            image={mern}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></ProjectCard>
          <br></br>
          <ProjectCard
            title="Project Title"
            image={mern}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></ProjectCard>
          <br></br>
          <ProjectCard
            title="Project Title"
            image={mern}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ></ProjectCard>
          <br></br>
          <MyPagination></MyPagination>
        </Container>
      </div>
    );
  }
}

export default MyProjects;
