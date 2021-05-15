import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import MyCard from "../components/Card/Card";
import MyPagination from "../components/Pagination/Pagination";
import mern from "../img/mern.jpg";

export default function Search(props) {
  return (
    <div style={{ marginTop: "40px" }}>
      <Container>
        <h3 className="text-center">Search Results For "Mern Stack"</h3>
        <br></br>
        <Row>
          <Col>
            <MyCard
              image={mern}
              title="Project Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="50"
            ></MyCard>
          </Col>
          <Col>
            <MyCard
              image={mern}
              title="Project Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="50"
            ></MyCard>
          </Col>
          <Col>
            <MyCard
              image={mern}
              title="Project Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="50"
            ></MyCard>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <MyCard
              image={mern}
              title="Project Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="50"
            ></MyCard>
          </Col>
          <Col>
            <MyCard
              image={mern}
              title="Project Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="50"
            ></MyCard>
          </Col>
          <Col>
            <MyCard
              image={mern}
              title="Project Title"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              price="50"
            ></MyCard>
          </Col>
        </Row>
        <br></br>
        <MyPagination></MyPagination>
      </Container>
    </div>
  );
}
