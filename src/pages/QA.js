import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--yellow)",
  },
};
function QA() {
  return (
    <Container>
      <h1 style={styles.h1}>Q+A</h1>
      <p className="text-white">Check back later.</p>
    </Container>
  );
}

export default QA;

//TODO: need array to map through for questions and answers
