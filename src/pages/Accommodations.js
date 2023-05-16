import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--red)",
  },
  ul: {
    fontSize: "18px",
    color: 'white'
  },
};

function Accommodations() {
  return (
    <Container>
      <h1 style={styles.h1}>Accommodations</h1>
      <ul
            style={styles.ul}
            className=" d-flex justify-content-start list-group list-unstyled m-0"
          >
            <li style={styles.ul}><strong>We recommend any of the following hotels:</strong></li>
            <li style={styles.ul}>- The Heathman Lodge</li>
            <li style={styles.ul}>- The Hilton - Vancouver</li> 
            <li style={styles.ul}>- Residence Inn by Marriott - Vancouver</li> 
            <li style={styles.ul}>- Any Airbnb/VRBO near Vancouver Heights neighborhood</li> 
          </ul>
    </Container>
  );
}

export default Accommodations;
