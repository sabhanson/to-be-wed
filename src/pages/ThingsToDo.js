import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  p: {
    fontSize: "20px",
  },
  h1: {
    color: "var(--lime)",
  },
};
function ThingsToDo() {
  return (
    <>
      <h1 style={styles.h1}>Things To Do</h1>
      <Container>
        <p className="text-white">
          Here's a list of some of our favorites places to go in Vancouver and
          Portland
        </p>
        <ul className="text-white d-flex justify-content-start list-group list-unstyled m-0">
          <li className="list-item">
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            Smokin' Oak BBQ
          </li>
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            The Flight Lounge
          </li>
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            Little Conejo Tortas
          </li>
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            NW 23rd Ave shopping
          </li>
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            Pittock Mansion viewpoint
          </li>
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            Short and Sweet Boba Tea
          </li>
          <li>
            <span role="img" aria-label="star emoji">
              ⭐
            </span>
            E-San Thai Food Cart
          </li>
        </ul>
      </Container>
    </>
  );
}

export default ThingsToDo;
