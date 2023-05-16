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
            <li style={styles.ul}>- Little Conejo Tortas - Vancouver</li>
            <li style={styles.ul}>- NW 23rd Ave shopping - Portland</li>
            <li style={styles.ul}>- Pittock Mansion viewpoint - Portland</li>
            <li style={styles.ul}>- Short and Sweet Boba Tea - Vancouver</li>
            <li style={styles.ul}>- E-San Thai Food Cart - Vancouver</li>
            <li style={styles.ul}>- Forest Park Hiking - Portland</li>
            <li style={styles.ul}>- Frenchman's Bar Park - Vancouver</li>
            <li style={styles.ul}>- Walk around Main Street - downtown Vancouver</li>
            <li style={styles.ul}>- Visit Multnomah Falls - 35 min east of Vancouver</li>
            <li style={styles.ul}>- Tom McCall Waterfront Park - Portland</li>
            <li style={styles.ul}>- Walk around Downtown Portland - Portland </li>
            <li style={styles.ul}>- Lardo Sandwiches - Portland </li>
            <li style={styles.ul}>- Washington Park/International Rose Test Garden  - Portland </li>
            <li style={styles.ul}>- Rocky Butte Natural Area viewpoint  - Portland </li>
            <li style={styles.ul}>- Audobon Society  - Portland </li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default ThingsToDo;
