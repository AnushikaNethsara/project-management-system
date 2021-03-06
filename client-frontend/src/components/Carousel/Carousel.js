import React from "react";
import { Carousel } from "react-bootstrap";
import caro from "../../img/caro.png";
import caro1 from "../../img/caro1.png";
import caro2 from "../../img/caro2.png";

export default function MyCarousel(props) {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ maxHeight: "50vh" }}
            className="d-block w-100"
            src={caro}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "50vh" }}
            className="d-block w-100"
            src={caro1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "50vh" }}
            className="d-block w-100"
            src={caro2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
