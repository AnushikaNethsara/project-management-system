import React, { Component } from "react";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

class AppliedProjects extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <Container>
          <h4 className="text-center">Projects Applied</h4>
        </Container>
      </div>
    );
  }
}

export default AppliedProjects;
