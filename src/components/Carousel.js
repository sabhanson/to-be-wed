import React from "react";
import { Carousel, Row, Container, Image } from "react-bootstrap";
import { carouselData } from "../data/Image.data";

function CarouselFade() {
  return (
    <Container className="h-100 pb-5">
      <Row className="justify-content-center align-items-center">
        <Carousel
          className="col-12 col-lg-6"
          controls={false}
          fade
          indicators={false}
        >
          {/* controls and indicators false to hide them both */}
          {carouselData.map((item) => (
            <Carousel.Item key={item.id}>
              <Image rounded className="w-100" src={item.src} alt={item.alt} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export default CarouselFade;
