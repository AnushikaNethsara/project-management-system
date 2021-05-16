import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";

export default function MyCard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to="/project-overview">
          <Card.Img variant="top" src={props.image} />
        </Link>

        <Card.Body>
          <Link to="/project-overview">
            <Card.Title className="text-center">{props.title}</Card.Title>
            <Card.Text className="text-center">{props.text}</Card.Text>
          </Link>
          <Card.Footer>
            <Row>
              <Col>
                <i className="fa fa-heart" />
              </Col>
              <Col>Price: &euro;{props.price}</Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}
