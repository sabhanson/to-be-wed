import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

import fishCreekFalls from "../images/STMB.png";
import SF from "../images/SF.png";
import nagsHead from "../images/NagsHead.png";
import winterPark from "../images/WinterPark.png";

const carouselData = [
  {
    id: 1,
    src: fishCreekFalls,
    alt:
      "Sabrina, Jayben, and their two dogs standing in front of a Fish Creek falls waterfall in Steamboat Springs, CO.",
  },
  {
    id: 2,
    src: SF,
    alt:
      "Sabrina's hand with engagement ring on with Jayben standing in front of the Golden Gate bridge in San Francisco, CA.",
  },
  {
    id: 3,
    src: nagsHead,
    alt:
      "Sabrina, Jayben, and their two dogs standing on the beach in front of the sunrise in Nags Head, NC.",
  },
  {
    id: 4,
    src: winterPark,
    alt:
      "Sabrina and Jayben standing in their skis at Winter Park resort in Colorado.",
  },
];

function CarouselFade() {
  return (
    <Container className="h-30">
      <Row className="justify-content-center">
        <Carousel controls={false} fade indicators={false}>
          {/* controls and indicators false to hide them both */}
          {carouselData.map((item) => (
            <Carousel.Item>
              <img
                key={item.id}
                className="w-100"
                src={item.src}
                alt={item.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export default CarouselFade;
