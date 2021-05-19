import React, { Component } from "react";
import pic5 from "../img/back.jpg";
import bg2 from "../img/bg2.jpg";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Feedback from "../components/Feedback/Feedback";
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
import bio from "../img/bio.png";
import { alignPropType } from "react-bootstrap/esm/DropdownMenu";
import Profilepic from "../components/ProfileCircle/ProfileCircle";
import Chip from "../components/Chip/Chip";

export class Profile extends Component {
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
              style={{ marginTop: "30px", width: "530px", marginTop: "100PX" }}
            ></div>
          </div>
          <div class="row">
            <div class="mx-auto" style={{ width: "370px" }}>
              <Profilepic />
            </div>
          </div>
          <h1 className="text-center" style={{ marginTop: "-35px" }}>
            Margie Aufderhar
          </h1>
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
              class="container shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark"
              style={{ width: "600px", marginTop: "35PX" }}
            >
              <br></br>Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div>,</div>
          </div>

          <div class="row">
            <div
              class="container shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark"
              style={{ width: "600px", marginTop: "5PX" }}
            >
              <h3>Skills</h3>
              <br></br>
              <Chip></Chip>
            </div>
          </div>

          <div class="row">
            <div
              class="container shadow-sm p-3 mb-5 bg-body rounded bg-light text-dark"
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
      </div>
    );
  }
}

export default Profile;
