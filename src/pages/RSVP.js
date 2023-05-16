import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--blue)",
  },
  p: {
    fontSize: "18px",
  },
};
function RSVP() {
  return (
    <Container>
      <h1 style={styles.h1}>RSVP</h1>
      <p style={styles.p} className="text-white">
        Please visit this  <a
          href="https://forms.gle/HACgRnjNUAM7rwt56"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Form
        </a> to RSVP <br/> (by June 30th).
      </p>
    </Container>
  );
}

export default RSVP;
