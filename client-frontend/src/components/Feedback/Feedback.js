import React, { Component } from 'react';
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

class Feedback extends Component {
    state = {  }
    render() { 
        return (
          <div className="row">
            <Container>
              <Row>
                <Col sm={16}>
                  <div
                    class="container-lg  shadow p-3 mb-5  text-dark   "
                    style={{
                      // marginTop: "2%",
                      backgroundColor: "white",
                      // marginLeft: "25%",
                    }}
                  >
                    <br></br>
                    <div>
                      <Container>
                        <Row>
                          <Col xs={6}>
                            <Container>
                              <Row>
                                <span>
                                  <label>
                                    <b>Ingredia Nutrisha</b>
                                  </label>
                                </span>
                              </Row>
                            </Container>
                          </Col>

                          <Col xs={6}>
                            <span class="align-middle">
                              <div style={{ marginLeft: "70%" }}>05 Min</div>
                            </span>
                          </Col>
                        </Row>
                      </Container>
                    </div>

                    <br></br>
                    <div
                      class="container-lg    text-dark  "
                      style={{
                        marginTop: "2%",
                        backgroundColor: "white",
                      }}
                    >
                      <b>Feedback : </b>
                      <p class="text-muted">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <br></br>
                      <div>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Typography component="legend">Rating</Typography>
                          <Rating
                            name="simple-controlled"
                            // value={value}
                            onChange={(event, newValue) => {
                              // setValue(newValue);
                            }}
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
    }
}
 
export default Feedback;