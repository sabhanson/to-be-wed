import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--red)",
  },
};

function Accommodations() {
  return (
    <Container>
      <h1 style={styles.h1}>Accommodations</h1>
      <p className="text-white">Check back later.</p>
    </Container>
  );
}

export default Accommodations;

//TODO: need to write copy for this page. provide accomodation information and advice
