import React, { Component } from "react";
import Input from "../components/Input";
import { Form, Button } from "react-bootstrap";
import loginBack from "../img/1.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";
import constants from "../constants/constants";
import PropTypes from "prop-types";

import SkillSet from "../constants/skills";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
      fixedOptions: [SkillSet[2]],
      profilePic: null,
      description: "",
      backendError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.hadleUpload = this.hadleUpload.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  hadleUpload(e) {
    this.setState({
      profilePic: e.target.files[0],
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.conPassword === "" ||
      this.state.skills === "" ||
      this.state.skills === ""
    ) {
      return this.setState({
        backendError: "Not all fields have been entered.",
      });
    }

    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("passwordCheck", this.state.conPassword);
    formData.append("skills", this.state.skills);
    formData.append("description", this.state.description);
    formData.append("photo", this.state.profilePic);
    console.log("da: " + formData);
    try {
      const signUpRes = Axios.post(
        constants.backend_url + "/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      ).then((res) => {
        if (res.data.msg === "Successfully Registered") {
          this.props.history.push("/login");
        }else{
          this.setState({
            backendError: "Something went wrong",
          });
        }
      });
    } catch (err) {
      err.response.data.msg &&
        this.setState({ backendError: "Something went wrong" });
    }
  }

  render() {
    return (
      <div className="container" style={{ marginBottom: "20%" }}>
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
                <div className="conatiner text-center">
                  <p className="text-danger">{this.state.backendError}</p>
                </div>
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

                {/* Set Skills */}
                <label>Skills</label>
                <Autocomplete
                  multiple
                  id="fixed-tags-demo"
                  value={this.state.skills}
                  onChange={(event, newValue) => {
                    this.setState({
                      skills: [
                        ...newValue.filter(
                          (option) =>
                            this.state.fixedOptions.indexOf(option) === -1
                        ),
                      ],
                    });
                  }}
                  options={SkillSet}
                  getOptionLabel={(option) => option}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                      <Chip label={option} {...getTagProps({ index })} />
                    ))
                  }
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label=""
                      variant="outlined"
                      placeholder="My Skills"
                    />
                  )}
                />
                {/* End Set Skills */}
                <Input
                  lable="Description"
                  name="description"
                  as="textarea"
                  rows="3"
                  placeholder="Enter Description..."
                  onChange={(e) => this.handleChange(e)}
                ></Input>

                <Form>
                  <label>Profile Picture</label>
                  <Form.Group>
                    <Form.Control
                      type="file"
                      name="photo"
                      label="Profile Picture"
                      onChange={this.hadleUpload}
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
