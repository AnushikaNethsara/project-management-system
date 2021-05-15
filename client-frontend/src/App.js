import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "../src/pages/SignUp";
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

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/project-overview" component={ProjectOverView} />
          <Route path="/post-project" component={PostProject} />
          <Route path="/payment-page" component={PaymentPage} />
          <Route path="/new-project" component={NewProject} />
          <Route path="/my-projects" component={MyProjects} />
          <Route path="/edit-project" component={EditProject} />
          <Route path="/chat-page" component={ChatPage} />
          <Redirect to={"/"} />
        </div>
      </Router>
    );
  }
}

export default App;
