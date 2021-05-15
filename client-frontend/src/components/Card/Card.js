import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function MyCard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
          <Card.Text className="text-center">{props.text}</Card.Text>
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
