import React, { Component } from "react";
import Input from "../components/Input";
import { Form, Button } from "react-bootstrap";
import loginBack from "../img/1.jpg";
import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col" style={{ height: "100%" }}>
            <img src={loginBack} alt="img back" class="img-fluid"></img>
          </div>
          <div className="col">
            <div
              style={{
                paddingTop: "10vh",
                width: "90%",
              }}
            >
              <h3 className="text-center" style={{ paddingBottom: "40px" }}>
                Sign Up
              </h3>
              <Input
                lable="Name"
                type="text"
                placeholder="Enter Your Name..."
              ></Input>
              <Input
                lable="Email"
                type="text"
                placeholder="Enter Your Email..."
              ></Input>
              <Input
                lable="Skills"
                as="textarea"
                rows="3"
                placeholder="Enter Your Skills..."
              ></Input>

              <Form>
                <Form.Group>
                  <Form.File
                    id="exampleFormControlFile1"
                    label="Profile Picture"
                  />
                </Form.Group>
              </Form>
              <section>{/* selected Image preview here */}</section>
              <Input
                lable="Password"
                type="password"
                placeholder="Enter Your Password..."
              ></Input>
              <Input
                lable="Re-Enter Password"
                type="password"
                placeholder="Re-Enter Your Password..."
              ></Input>
              <Button style={{ width: "100%" }} variant="primary" type="submit">
                Sign Up
              </Button>
              <section className="text-center">
                <p className="mt-4 mb-2  copyright-text">
                  Already have an account?&nbsp;
                  <Link to="/login">Log In</Link>
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

export default SignUp;
