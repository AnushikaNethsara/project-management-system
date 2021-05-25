import React, { Component } from "react";
import { Card, Row, Col, Image, ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import constants from "../../constants/constants";


class MyProjectCard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="mt-3">
        <Card>
          <Card.Header as="h5">{this.props.project.title}</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={4}>
                <Link to={"/my-project-overview/" + this.props.project._id}>
                  <div style={{ height: "70%", width: "80%" }}>
                    <Image
                      src={
                        constants.backend_url +
                        `/project/photo/${this.props.project._id}`
                      }
                      thumbnail
                    />
                  </div>
                </Link>
              </Col>
              <Col sm={8}>
                <Card.Text>{this.props.project.description}</Card.Text>
                <Card.Text>{this.props.project.skills}</Card.Text>
                <Card.Text>{this.props.project.price}</Card.Text>
              </Col>
            </Row>
            <br></br>
            <Link to={"/my-project-overview/" + this.props.project._id}>
              Full Details
            </Link>
            &nbsp;
            <ButtonGroup>
              <Link
                className="btn btn-success"
                to={"/edit-project/" + this.props.project._id}
              >
                <i className="fa fa-edit" />
              </Link>
              <Button
                className="btn btn-danger"
                onClick={() => {
                  this.props.deleteProject(this.props.project._id);
                }}
              >
                <i className="fa fa-trash" />
              </Button>
              <Link
                className="btn btn-success"
                to={`/chat?name=${this.props.name}&room=${this.props.project.title}`}
              >
                <i className="fa fa-file" />
              </Link>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyProjectCard;
