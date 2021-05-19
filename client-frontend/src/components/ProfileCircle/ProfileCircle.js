import React, { Component } from "react";
import "../ProfileCircle/ProfileCircle.css";
import pic5 from "../../img/Profilecircle/ico.png";
import pro1 from "../../img/pro1.jpg";
import { Nav, form, Image, Col, Row, Button } from "react-bootstrap";

export class Profilecircle extends Component {
  render() {
    return (
      <div class="v6_0" style={{ marginTop: "-20%" }}>
        <div class="v1_2">
          <Image
            class="mx-auto"
            src={pro1}
            style={{
              width: "190px",
              height: "190px",
              marginLeft: "10px",
              marginTop: "10px",
            }}
            roundedCircle
          />
        </div>
      </div>
    );
  }
}

export default Profilecircle;
