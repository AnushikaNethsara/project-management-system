import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";
import constants from "../../constants/constants";

export default function MyCard({ data }) {
  return (
    <Link to={"/project-overview/" + data._id}>
      <div className="p-3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={constants.backend_url + `/project/photo/${data._id}`}
          />

          <Card.Body>
            <Card.Title className="text-center">{data.title}</Card.Title>
            <Card.Text className="text-center">{data.description}</Card.Text>
            <Card.Footer>
              <Row>
                <Col>
                  <i className="fa fa-heart" />
                </Col>
                <Col>Price: $ {data.price}</Col>
              </Row>
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}
