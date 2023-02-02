import React from "react";
import { travel } from "../data/Image.data";

const styles = {
  p: {
    fontSize: "20px",
    position: "absolute",
    top: "50%",
    color: "black",
    backgroundColor: " rgba(255, 255, 255, 0.65)",
    padding: "0px 20px 0px 20px",
    margin: "0px 15% 0px 15%",
  },
  div: {
    backgroundImage: `url(${travel.src})`,
    backgroundSize: "cover",
    height: "100vh",
  },
  h1: {
    color: "var(--lilac)",
  },
};

function Travel() {
  return (
    <>
      <h1 style={styles.h1}>Travel</h1>
      <div style={styles.div}>
        <p style={styles.p}>
          Fly to Portland, Oregon! <br /> The wedding will be held at Sabrina's
          grandparents' home in Vancouver, Washington.
        </p>
      </div>
    </>
  );
}

export default Travel;
