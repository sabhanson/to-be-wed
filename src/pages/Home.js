import React from "react";
import { Carousel } from "react-bootstrap";
import usPic from "../images/we-met.jpg";
import skiingPic from "../images/skiing.jpg";
import angelsRest from "../images/angels-rest.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={usPic}
          alt="Jayben + Sabrina on Fish Creek Falls hike in Steamboat Springs, Colorado"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={skiingPic}
          alt="Jayben + Sabrina skiing at Winter Park Resort, Colorado"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={angelsRest}
          alt="Jayben + Sabrina on Angel's Rest hike in Bridal Veil, Oregon"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
