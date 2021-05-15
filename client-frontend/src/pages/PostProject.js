import React, { Component } from "react";
import bg from "../images/bg.jpg";
import { Button, ButtonGroup } from "@material-ui/core";

class PostProject extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div
            class="container-lg shadow p-3 mb-5 bg-body rounded text-dark "
            style={{ marginTop: "5%", backgroundColor: "white" }}
          >
            <div style={{ marginTop: "2.5%" }}>
              <h3>POST PROJECTS</h3>
            </div>
            <br></br>
            <div style={{ marginTop: "2.5%" }}>
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Post Date</th>
                    <th scope="col">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>MERN Stack Project</td>
                    <td>Sun jan 16 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button>Update</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mobile App</td>
                    <td>Fri Feby 14 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button>Update</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>C++</td>
                    <td>Sun May 16 2021</td>
                    <td>
                      <ButtonGroup
                        size="small"
                        aria-label="small outlined button group"
                      >
                        <Button>Update</Button>
                        <Button>Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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

export default PostProject;
