import React, { Component } from "react";
import { Button, Box } from "@material-ui/core";
import axios from "axios";
import Chip from "../components/Chip/Chip";
import PropTypes from "prop-types";
import constants from "../constants/constants";

class ProjectOverview extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      //state used to like create variable and store data. here is like initialising all the attributes with initial values, like (let username = ' ';)
      title: "",
      description: "",
      skills: [],
      price: "0",
    };
  }

  //getting current project details by id
  componentDidMount() {
    axios
      .get(
        "http://localhost:5008/project/get-details/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          title: res.data[0].title,
          description: res.data[0].description,
          price: res.data[0].price,
          skills: res.data[0].skills,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <div
            class="container-lg shadow p-3 mb-5 bg-body rounded text-dark "
            style={{ marginTop: "5%", backgroundColor: "white" }}
          >
            <h3 className="text-center">PROJECT OVERVIEW</h3>
            <br></br>
            <div class="container-sm   text-dark ">
              <h4>Project Title</h4>
              <p className="text-muted">{this.state.title}</p>

              <h4>Job Description</h4>
              <p>{this.state.description}</p>
              <h4>Required Skills</h4>
              {/* {this.state.skills.map((skill) => {
                return <p>{skill}</p>;
              })} */}
              {this.state.skills &&
                this.state.skills.map((item) => {
                  return <Chip skill={item} key={item._id} />;
                })}
              <h4>Job Rate</h4>
              <h1>${this.state.price}</h1>
              <div></div>
              <div style={{ width: "100%" }}>
                <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                  <Button variant="contained">Request Job</Button>
                </Box>
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default ProjectOverview;
