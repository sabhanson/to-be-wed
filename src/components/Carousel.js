import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

import fishCreekFalls from "../images/STMB.png";
import SF from "../images/SF.png";
import nagsHead from "../images/NagsHead.png";
import winterPark from "../images/WinterPark.png";

function CarouselFade() {
  return (
    <Container className="h-30">
      <Row className="justify-content-center">
        <Carousel controls="false" fade>
          <Carousel.Item>
            <img
              className=" w-50"
              src={fishCreekFalls}
              alt="Sabrina, Jayben, and their two dogs standing in front of a waterfall"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" w-50"
              src={SF}
              alt="Sabrina's hand with engagement ring on with Jayben standing in front of the Golden Gate bridge "
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-50"
              src={nagsHead}
              alt="Sabrina's hand with engagement ring on with Jayben standing in front of the Golden Gate bridge "
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-50"
              src={winterPark}
              alt="Sabrina's hand with engagement ring on with Jayben standing in front of the Golden Gate bridge "
            />
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default CarouselFade;
