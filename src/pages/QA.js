import React from "react";
import { Container } from "react-bootstrap";
const styles = {
  h1: {
    color: "var(--yellow)",
  },
  ul: {
    fontSize: "20px",
  },
};
function QA() {
  return (
    <>
      <h1 style={styles.h1}>Q+A</h1>
      <Container>
        <ul style={styles.ul} className="text-white list-unstyled">
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            What time of the day?
            <br />
            The wedding will start around 5pm.
          </li>
          <br />
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            Are kids allowed?
            <br />
            Sorry, no!
          </li>
          <br />
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            What's the venue like? <br />
            There will be grass to walk on, so consider your shoes. The wedding
            will be held outside in the middle of August. Probably warm.
          </li>
          <br />
          <br />
          <li>
            <span role="img" aria-label="orange heart emoji">
              🧡
            </span>
            This list will be updated as the date gets nearer. Any other
            questions? Please call or text us.
          </li>
        </ul>
      </Container>
    </>
  );
}

export default QA;
