import React, { useState, useEffect, useContext } from "react";
import Input from "../components/Input";
import loginBack from "../img/1.jpg";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../src/context/userContext";
import constants from "../constants/constants";
import "../css/login.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setUserData } = useContext(UserContext);
  const [backendError, setBackendError] = useState();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    let email = values.email;
    let password = values.password;
    try {
      const loginRes = await Axios.post(
        constants.backend_url + "/users/login",
        { email, password }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      localStorage.setItem("auth-id", loginRes.data.user.id);
      history.push("/my-profile");
    } catch (err) {
      err.response.data.msg && setBackendError(err.response.data.msg);
    }
  };
  return (
    <div className="container">
      <div className="card" style={{ marginTop: "8%" }}>
        <div className="row">
          <div className="col" class="imageContainer"></div>
          <div className="col">
            <div style={{ paddingTop: "10vh", width: "90%" }}>
              <h3 className="text-center" style={{ paddingBottom: "40px" }}>
                Log In
              </h3>
              <div className="conatiner text-center">
                <p className="text-danger">{backendError}</p>
              </div>
              <Input
                name="email"
                onChange={(e) => handleChange(e)}
                lable="Email"
                type="text"
                placeholder="Enter Your Email..."
              ></Input>
              <Input
                name="password"
                onChange={(e) => handleChange(e)}
                lable="Password"
                type="password"
                placeholder="Enter Your Password..."
              ></Input>
              <Button
                onClick={onSubmit}
                style={{ width: "100%" }}
                variant="primary"
                type="submit"
              >
                Login
              </Button>
              <section className="text-center">
                <p className="mt-4 mb-2  copyright-text">
                  Don't have an account?&nbsp;
                  <Link to="/signup">Sign Up</Link>
                </p>
                <p className="mt-5 mb-3 text-muted copyright-text">
                  Copyright ?? 2021 All Rights Reserved by &nbsp;
                  <Link to="/">Company Name</Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
