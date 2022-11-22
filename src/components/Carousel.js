import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import carouselData from "../data/Carousel.data";

function CarouselFade() {
  return (
    <Container className="h-100 pb-5">
      <Row className="justify-content-center align-items-center">
        <Carousel
          className="col-sm-12 col-md-6"
          controls={false}
          fade
          indicators={false}
        >
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
