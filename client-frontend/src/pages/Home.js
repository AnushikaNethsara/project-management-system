import React, { Component } from "react";
import MyCarousel from "../components/Carousel/Carousel";

class Home extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <MyCarousel></MyCarousel>
      </div>
    );
  }
}

export default Home;
