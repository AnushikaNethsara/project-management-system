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
      allProjects:[],
      skills:[""]
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

        response.data.forEach(project=>{
          console.log(project)
          if(project.skills.some((val) => this.state.skills.indexOf(val) > 0) ===true){
            // this.setState({
            //   values: project,
            // });
            this.state.values.push(project)
          }
          if(project.skills.some((val) => this.state.skills.indexOf(val) > 0) ===false){
            // this.setState({
            //   allProjects: project,
            // });
            this.setState({allProjects: this.state.allProjects.concat(project)});
          }
        }
        );

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getSkills() {
    Axios.get(constants.backend_url + "/project/getProjects/"+localStorage.getItem("auth-id"))
        .then((response) => {
          console.log(response.data)
          response.data.forEach(skill=>{
            this.setState({
              skills: skill.skills,
            });
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render() {
    return (
      <div style={{ marginTop: "3%" }}>
        <Container>
          <div>
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
