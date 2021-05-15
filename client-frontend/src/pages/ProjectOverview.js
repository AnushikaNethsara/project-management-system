import React, { Component } from "react";
import bg from "../images/bg.jpg";

class ProjectOverview extends Component {
  state = {};
  render() {
    return (
      <div
        class="  p-3 mb-2  text-white "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div>
          <div
            class="container-lg shadow p-3 mb-5 bg-body rounded text-dark "
            style={{ marginTop: "5%", backgroundColor: "white" }}
          >
            <h3 className="text-center">PAYMENT</h3>
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
                repellat.
                Cam voluptatem placeat odit similique. Quis qui nam praesentium
                corrupti voluptatum voluptatem sed deserunt. Sequi veritatis sit
                consequatur minus optio. Soluta quia ullam quam illo et aut
                repellat.Cam voluptatem placeat odit similique. Quis qui nam praesentium
                corrupti voluptatum voluptatem sed deserunt. Sequi veritatis sit
                consequatur minus optio. Soluta quia ullam quam illo et aut
                repellat.
              </p>
              <h4>Required Skills</h4>
              <p className="text-muted">MongoDB</p>
              <p className="text-muted">Express</p>
              <p className="text-muted">ReactJs</p>
              <p className="text-muted">Node</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <h4>Project Title</h4>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    <h4>Required Skills</h4>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    <h4>Project Description</h4>
                  </label>
                  <div class="mb-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <h4>Attachments</h4>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                  />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary ">
                  Post Project
                </button>
              </form>
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
