import React, { Component } from "react";
import Input from "../components/Input";
import loginBack from "../img/1.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col" style={{ height: "100%" }}>
            <img src={loginBack} alt="img back" class="img-fluid"></img>
          </div>
          <div className="col">
            <div style={{ paddingTop: "10vh", width: "90%" }}>
              <h3 className="text-center" style={{ paddingBottom: "40px" }}>
                Log In
              </h3>
              <Input
                lable="Email"
                type="text"
                placeholder="Enter Your Email..."
              ></Input>
              <Input
                lable="Password"
                type="password"
                placeholder="Enter Your Password..."
              ></Input>
              <Button style={{ width: "100%" }} variant="primary" type="submit">
                Login
              </Button>
              <section className="text-center">
                <p className="mt-4 mb-2  copyright-text">
                  Don't have an account?&nbsp;
                  <Link to="/signup">Sign Up</Link>
                </p>
                <p className="mt-5 mb-3 text-muted copyright-text">
                  Copyright © 2021 All Rights Reserved by &nbsp;
                  <Link to="/">Company Name</Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
