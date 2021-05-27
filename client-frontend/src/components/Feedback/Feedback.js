import React, { Component } from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import {
  Nav,
  form,
  Image,
  Col,
  Row,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import Rating from "@material-ui/lab/Rating";
import Axios from "axios";
import constants from "../../constants/constants";

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      values: [],
    };
    this.getAccountDeatils = this.getAccountDeatils.bind(this);
  }
  componentDidMount() {
    this.getAccountDeatils();
  }
  getAccountDeatils() {
    var worker_id = this.props.id;

    Axios.get(constants.backend_url + "/rating/review/" + worker_id)
      .then((response) => {
        this.setState({
          values: response.data,
        });
        var date = new Date(response.data[0]).toISOString().split("T")[0];
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.values &&
          this.state.values.map((item, index) => {
            return (
              <div style={{ width: "100%" }} className="row" key={index}>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col sm={12}>
                      <div
                        class="shadow p-3 mb-5  text-dark"
                        style={{
                          backgroundColor: "white",
                          width: "75vw",
                        }}
                      >
                        <br></br>
                        <div class="container-lg text-dark">
                          <Row>
                            <Col xs={10}>
                              <Row>
                                <span>
                                  <label>
                                    <b>{item.owner_id.name} </b>
                                  </label>
                                </span>
                              </Row>
                            </Col>
                            <Col xs={2}>
                              <span class="align-middle">
                                <div>{item.date.split("T")[0]}</div>
                              </span>
                            </Col>
                          </Row>
                        </div>

                        <br></br>
                        <div
                          class="text-dark"
                          style={{
                            marginTop: "2%",
                            backgroundColor: "white",
                          }}
                        >
                          <b>Feedback : </b>
                          <p class="text-muted">{item.review}</p>
                          <br></br>
                          <div>
                            <Box
                              component="fieldset"
                              mb={3}
                              borderColor="transparent"
                            >
                              <Typography component="legend">Rating</Typography>
                              <Rating
                                name="view-rate"
                                value={item.rating}
                                readOnly
                              />
                            </Box>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div class="ml-3"></div>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Feedback;
