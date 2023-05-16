import React from "react";
import { travel } from "../data/Image.data";

const styles = {
  p: {
    fontSize: "18px",
    color: "black",
    margin: "20px",
    backgroundColor: " rgba(255, 255, 255, 0.65)",
    padding: "0px 20px 0px 20px",
  },
  div: {
    backgroundImage: `url(${travel.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
  h1: {
    color: "var(--lilac)",
    backgroundColor: "transparent",
  },
};

function Travel() {
  return (
    <>
      <div style={styles.div}>
        <p className="rounded" style={styles.p}>
          <h1 style={styles.h1}>Travel</h1>
          Fly to Portland, Oregon. <br /> The wedding will be held just across the Columbia River at Sabrina's
          grandparents' home in Vancouver, Washington.
        </p>
      </div>
    </>
  );
}

export default Travel;
