import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--blue)",
  },
  p: {
    fontSize: "20px",
  },
};
function RSVP() {
  return (
    <Container>
      <h1 style={styles.h1}>RSVP</h1>
      <p style={styles.p} className="text-white">
        Check back later :~)
        {/* please visit this Google Form to RSVP.  */}
        {/* <a
          href="https://forms.gle/HACgRnjNUAM7rwt56"
          className="disabled"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Form
        </a> */}
      </p>
    </Container>
  );
}

export default RSVP;
