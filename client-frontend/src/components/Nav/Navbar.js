import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./navbar.css";

export default function MyNavbar(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        variant="dark"
        style={{ zIndex: "1" }}
        className="NavStyle"
      >
        <Container fluid>
          <Link className="navbar-brand" to="/">
            <img
              alt="logo"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            &nbsp; &nbsp; Project Management System
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              {/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </Form> */}
              <li className="nav-item">
                <NavLink to="/search" className="nav-link">
                  <i className="fa fa-search" />
                  &nbsp; Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/explore" className="nav-link">
                  <i className="fa fa-globe" />
                  &nbsp; Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  <i className="fa fa-sign-in"></i>&nbsp; Log In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signup" className="nav-link">
                  <i className="fa fa-user-plus"></i>&nbsp; Sign Up
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
