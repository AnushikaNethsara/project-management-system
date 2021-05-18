import React, { Component } from "react";
import { Button, Box } from "@material-ui/core";

class ProjectOverview extends Component {
  state = {};
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
              <p className="text-muted">
                Mern Stack Project for Student Management System
              </p>

              <h4>Job Description</h4>
              <p>
                Cam voluptatem placeat odit similique. Quis qui nam praesentium
                corrupti voluptatum voluptatem sed deserunt. Sequi veritatis sit
                consequatur minus optio. Soluta quia ullam quam illo et aut
                repellat. Cam voluptatem placeat odit similique. Quis qui nam
                praesentium corrupti voluptatum voluptatem sed deserunt. Sequi
                veritatis sit consequatur minus optio. Soluta quia ullam quam
                illo et aut repellat.Cam voluptatem placeat odit similique. Quis
                qui nam praesentium corrupti voluptatum voluptatem sed deserunt.
                Sequi veritatis sit consequatur minus optio. Soluta quia ullam
                quam illo et aut repellat.
              </p>
              <h4>Required Skills</h4>
              <p className="text-muted">MongoDB</p>
              <p className="text-muted">Express</p>
              <p className="text-muted">ReactJs</p>
              <p className="text-muted">Node</p>
              <h4>Job Rate</h4>
              <h1>$50.99</h1>
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
