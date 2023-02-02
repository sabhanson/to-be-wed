import React from "react";
import { Container, Image } from "react-bootstrap";
import { ourStory } from "../data/Image.data";

const styles = {
  h1: {
    color: "var(--orange)",
  },
};
function OurStory() {
  return (
    <Container>
      <h1 style={styles.h1}>Our Story</h1>
      <Image
        rounded
        className="col-12 col-lg-9"
        src={ourStory.src}
        alt="Mount Werner behind a fence during sunset, the clouds are pink"
      />
      <p>
        jayben moved to steamboat springs, colorado not long after graduating
        high school in 2013. he fell in love with the sunsets, great skiing, and
        even better hash. sabrina moved there on a whim in 2018 after driving
        through on a road trip. she remembers meeting jayben,
        <span style={{ fontStyle: "italic" }}> the hot security guard</span>,
        while working as a front desk agent at the "grand" hotel. they fell in
        love in a beautiful place
      </p>
    </Container>
  );
}

export default OurStory;
// TODO: need to write copy for this page
// TODO: include pics from times mentioned (jay in steamboat 2014, sab in steamboat 2018)
