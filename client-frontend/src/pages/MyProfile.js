import React, { Component } from "react";
import pic5 from "../img/back.jpg";
import bg2 from "../img/bg2.jpg";
import { Box, Grid, Paper, Typography, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Feedback from "../components/Feedback/Feedback";
import {
  Nav,
  form,
  Image,
  Col,
  Row,
  Container,
  Card,
  Modal,
} from "react-bootstrap";
import bio from "../img/bio.png";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import Profilepic from "../components/ProfileCircle/ProfileCircle";
import Chip from "../components/Chip/Chip";
import PropTypes from "prop-types";
import constants from "../constants/constants";
import Axios from "axios";
import { Link } from "react-router-dom";

export class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor() {
    super();
    this.state = {
      values: [],
      show: false,
    };
    this.getAccountDeatils = this.getAccountDeatils.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("auth-token") == "") {
      this.props.history.push("/");
    } else {
      this.getAccountDeatils();
    }
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }
  getAccountDeatils() {
    var userId = localStorage.getItem("auth-id");

    Axios.get(constants.backend_url + "/users/get-user/" + userId)
      .then((response) => {
        this.setState({
          values: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteProfile() {
    var userId = localStorage.getItem("auth-id");
    Axios.delete(constants.backend_url + "/users/delete/" + userId)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          localStorage.setItem("auth-token", "");
          localStorage.setItem("auth-id", "");
          this.props.history.push("/");
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div
        class="container-lg  shadow p-3 mb-5 bg-body rounded bg-light text-dark  "
        style={{ marginTop: "30px", position: "relative" }}
      >
        <img
          src={bg2}
          style={{ width: "97.2%", height: "20%", position: "absolute" }}
        ></img>
        {this.state.values.length > 0 &&
          this.state.values.map((item) => {
            return (
              <div
                class="coloumn container-lg  shadow p-3 mb-5"
                style={{ backgroundColor: "white" }}
              >
                <div class="row">
                  <p
                    class=" w-100 p-3 text-white"
                    style={{ textAlign: "center", position: "absolute" }}
                  ></p>
                </div>
                <div class="row">
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
                <div class="row">
                  <div
                    class="container-sm  shadow p-3 mb-5 bg-body rounded bg-light text-dark "
                    style={{
                      marginTop: "30px",
                      width: "530px"
                    }}
                  ></div>
                </div>
                <div class="row">
                  <div class="mx-auto" style={{ width: "370px" }}>
                    <Profilepic id={item._id}/>
                  </div>
                </div>
                <h1 className="text-center" style={{ marginTop: "-35px" }}>
                  {item.name}
                </h1>
                <h5 className="text-center text-muted">{item.email}</h5>
                <div className="text-center my-3">
                  <Link to="edit-profile">
                    <Box display="flex" justifyContent="center">
                      <Button variant="contained">Edit Profile</Button>
                    </Box>
                  </Link>

                  {/* ***model*** */}
                  <div className="text-center my-3">
                    <Box display="flex" justifyContent="center">
                      <Button
                        variant="contained"
                        onClick={() => {
                          this.handleModal();
                        }}
                      >
                        Delete Profile
                      </Button>
                      <Modal
                        id="one"
                        show={this.state.show}
                        onHide={() => this.handleModal()}
                      >
                        <Modal.Header>Message</Modal.Header>
                        <Modal.Body>
                          <h6>Are you sure want to cancel your account?</h6>
                        </Modal.Body>
                        <Modal.Footer>
                          <button
                            onClick={() => {
                              this.deleteProfile();
                            }}
                            class="btn btn-primary"
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => {
                              this.handleModal();
                            }}
                          >
                            No
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </Box>
                  </div>
                  {/* ***end model*** */}
                </div>

                <br></br>

                <div class="row">
                  <div class="mx-auto" style={{ width: "80px" }}>
                    <img
                      src={bio}
                      class="rounded-circle "
                      alt="..."
                      style={{
                        width: "50px",
                        height: "50px",
                        marginLeft: "ml-6",
                        marginTop: "10px",
                        position: "absolute",
                      }}
                    ></img>
                  </div>
                </div>

                <div class="row">
                  <div
                    class="container shadow-sm p-3 mb-3 bg-body rounded bg-light text-dark text-center"
                    style={{ width: "600px", marginTop: "35PX" }}
                  >
                    <br></br>
                    {item.description}
                  </div>
                  <div>,</div>
                </div>
                <div className="text-center my-3">
                  <Link to="my-projects">
                    <Box display="flex" justifyContent="center">
                      <Button variant="contained">My Projects</Button>
                    </Box>
                  </Link>
                </div>
                <div className="text-center my-3">
                  <Link to="new-project">
                    <Box display="flex" justifyContent="center">
                      <Button variant="contained">Create New Projects</Button>
                    </Box>
                  </Link>
                </div>
                <div className="row text-center">
                  <div
                    className="container shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark "
                    style={{ width: "600px", marginTop: "5PX",margin:'auto' }}
                  >
                    <h3>Skills</h3>
                    <br></br>
                    <div className="row">
                      {item.skills &&
                        item.skills.map((item) => {
                          return <Chip skill={item} key={item._id} />;
                        })}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="container shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark"
                    style={{ width: "1000px", marginTop: "5PX" }}
                  >
                    <br></br>
                    <h4 className="text-center">Feedbacks & Ratings</h4>
                    <br></br>
                    <div>
                      <Feedback />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Profile;
