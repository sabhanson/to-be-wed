import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--red)",
  },
  p: {
    fontSize: "20px",
  },
};

function Accommodations() {
  return (
    <Container>
      <h1 style={styles.h1}>Accommodations</h1>
      <p style={styles.p} className="text-white">
        Check back later :~)
      </p>
    </Container>
  );
}

export default Accommodations;
