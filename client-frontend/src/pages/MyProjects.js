import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import MyPagination from "../components/Pagination/Pagination";
import { Card, Row, Col, Image, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import mern from "../img/mern.jpg";

//creating Project functional component(not a class component)
const Project = (props) => (
  <Card>
    <Card.Header as="h5">{props.project.title}</Card.Header>
    <Card.Body>
      <Row>
        <Col sm={4}>
          <Link to={"/project-overview/" + props.project._id}>
            {/* <Image src={props.project.image} thumbnail /> */}
          </Link>
        </Col>
        <Col sm={8}>
          <Link to={"/project-overview/" + props.project._id}>
            <Card.Text>{props.project.description}</Card.Text>
            <Card.Text>{props.project.skills}</Card.Text>
            <Card.Text>{props.project.price}</Card.Text>
          </Link>
        </Col>
      </Row>
      <br></br>
      <Link
        className="btn btn-primary"
        to={"/project-overview/" + props.project._id}
      >
        Full Details
      </Link>
      &nbsp;
      <ButtonGroup>
        <Link
          className="btn btn-success"
          to={"/edit-project/" + props.project._id}
        >
          <i className="fa fa-edit" />
        </Link>
        <Button
          className="btn btn-danger"
          onClick={() => {
            props.deleteProject(props.project._id);
          }}
        >
          <i className="fa fa-trash" />
        </Button>
      </ButtonGroup>
    </Card.Body>
  </Card>
);

class MyProjects extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);
    this.state = { projects: [] };
  }

  //get the list of projects from database
  componentDidMount() {
    //getting all the projects and puting in the projects array we declared in the constructor
    axios
      .get("http://localhost:5008/project/")
      .then((res) => this.setState({ projects: res.data }))
      .catch((err) => {
        console.log(err);
      });
  }

  //delete project function for delete button
  deleteProject(id) {
    axios
      .delete("http://localhost:5008/project/delete/" + id) //deleting project in particular id using axios
      .then((res) => console.log(res.data));

    //updating exercises list after deleting the excersise
    this.setState({
      projects: this.state.projects.filter((el) => el._id !== id), //when every project id does not equal to the deleted project id, that exercises will pass into the project array
    });
  }

  projectList() {
    return this.state.projects.map((currentproject) => {
      return (
        <Project
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
          <h4 className="text-center">My Projects</h4>
          <Link className="btn btn-success" to="/new-project">
            <i className="fa fa-plus" /> Add New Project
          </Link>
          <br></br>
          {this.projectList()}
          <br></br>
          <MyPagination></MyPagination>
        </Container>
      </div>
    );
  }
}

export default MyProjects;
