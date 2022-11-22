import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--lime)",
  },
};
function ThingsToDo() {
  return (
    <Container>
      <h1 style={styles.h1}>Things To Do</h1>
      <p className="text-white">Check back later.</p>
      {/* <p className="text-white">
        lots of cool things to do in Portland and Vancouver, here's a list of
        our favorites
      </p>
      <ul className="text-white list-unstyled">
        <li>Smokin' Oak BBQ</li>
        <li>The Flight Lounge</li>
        <li>Little Conejo Tortas</li>
        <li>NW 23rd Ave</li>
        <li>Pittock Mansion</li>
      </ul> */}
    </Container>
  );
}

export default ThingsToDo;
//TODO: make this look cuter
//TODO: array list map of things to do in the area with links
