import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../src/pages/SignUp";
import Login from "../src/pages/Login";
import Search from "../src/pages/Search";
import ProjectOverView from "../src/pages/ProjectOverview";
import PostProject from "../src/pages/PostProject";
import PaymentPage from "../src/pages/PaymentPage";
import NewProject from "../src/pages/NewProject";
import MyProjects from "../src/pages/MyProjects";
import Home from "../src/pages/Home";
import EditProject from "../src/pages/EditProject";
import ChatPage from "../src/pages/ChatPage";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "../src/components/Nav/Navbar";
import UserContext from "./context/userContext";
import constants from "./constants/constants";
import Axios from "axios";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        constants.backend_url + "/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(constants.backend_url + "/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/search" component={Search} />
        <Route path="/project-overview" component={ProjectOverView} />
        <Route path="/post-project" component={PostProject} />
        <Route path="/payment-page" component={PaymentPage} />
        <Route path="/new-project" component={NewProject} />
        <Route path="/my-projects" component={MyProjects} />
        <Route path="/edit-project" component={EditProject} />
        <Route path="/chat-page" component={ChatPage} />
        {/* <Redirect to={"/"} /> */}
      </UserContext.Provider>
    </Router>
  );
};

export default App;
