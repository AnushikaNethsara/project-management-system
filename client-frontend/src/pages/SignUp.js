import React, { Component } from "react";
import Input from "../components/Input";
import { Form, Button } from "react-bootstrap";
import loginBack from "../img/1.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import constants from "../constants/constants";
import PropTypes from "prop-types";

class SignUp extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      conPassword: "",
      skills: [],
      profilePic: "",
      description:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();
    //console.log("des: " + this.state.description);
    let userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordCheck: this.state.conPassword,
      profilePic: this.state.profilePic,
      skills: this.state.skills,
      description: this.state.description,
    };
    try {
      const loginRes = await Axios.post(
        constants.backend_url + "/users/register",
        userData
      );
      this.props.history.push("/login");
    } catch (err) {
      err.response.data.msg && console.log(err.response.data.msg);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="card" style={{ marginTop: "8%" }}>
          <div className="row">
            <div className="col" style={{ height: "100%" }}>
              <img src={loginBack} alt="img back" class="img-fluid"></img>
            </div>
            <div className="col">
              <div
                style={{
                  paddingTop: "3%",
                  width: "90%",
                }}
              >
                <h3 className="text-center" style={{ paddingBottom: "20px" }}>
                  Sign Up
                </h3>
                <Input
                  name="name"
                  onChange={(e) => this.handleChange(e)}
                  lable="Name"
                  type="text"
                  placeholder="Enter Your Name..."
                />
                <Input
                  name="email"
                  onChange={(e) => this.handleChange(e)}
                  lable="Email"
                  type="text"
                  placeholder="Enter Your Email..."
                ></Input>
                <Input
                  lable="Description"
                  name="description"
                  as="textarea"
                  rows="3"
                  placeholder="Enter Description..."
                  onChange={(e) => this.handleChange(e)}
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
                  name="password"
                  onChange={(e) => this.handleChange(e)}
                  lable="Password"
                  type="password"
                  placeholder="Enter Your Password..."
                ></Input>
                <Input
                  name="conPassword"
                  onChange={(e) => this.handleChange(e)}
                  lable="Re-Enter Password"
                  type="password"
                  placeholder="Re-Enter Your Password..."
                ></Input>
                <Button
                  onClick={this.onSubmit}
                  style={{ width: "100%" }}
                  variant="primary"
                  type="submit"
                >
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
      </div>
    );
  }
}

export default SignUp;
