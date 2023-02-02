import React from "react";
import { thingsToDo } from "../data/Image.data.js";

const styles = {
  p: {
    fontSize: "18px",
    color: "black",
    margin: "20px",
    backgroundColor: " rgba(255, 255, 255, 0.45)",
    padding: "0px 20px 0px 20px",
  },
  div: {
    backgroundImage: `url(${thingsToDo.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  h1: {
    color: "var(--lime)",
    backgroundColor: "transparent",
  },
  ul: {
    backgroundColor: "transparent",
  },
};
function ThingsToDo() {
  return (
    <>
      <div style={styles.div}>
        <p className="rounded" style={styles.p}>
          <h1 style={styles.h1}>Things to Do</h1>
          <ul
            style={styles.ul}
            className=" d-flex justify-content-start list-group list-unstyled m-0"
          >
            <li style={styles.ul}>Smokin' Oak BBQ</li>
            <li style={styles.ul}>The Flight Lounge</li>
            <li style={styles.ul}>Little Conejo Tortas</li>
            <li style={styles.ul}>NW 23rd Ave shopping</li>
            <li style={styles.ul}>Pittock Mansion viewpoint</li>
            <li style={styles.ul}>Short and Sweet Boba Tea</li>
            <li style={styles.ul}>E-San Thai Food Cart</li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default ThingsToDo;
