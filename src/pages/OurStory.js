import React, { useState } from "react";
import { ourStory } from "../data/Image.data";

const styles = {
  h1: {
    color: "var(--orange)",
  },
  p: {
    fontSize: "20px",
    position: "absolute",
    top: "25%",
    color: "black",
    backgroundColor: " rgba(255, 255, 255, 0.65)",
    padding: "0px 20px 0px 20px",
    margin: "0px 15% 0px 15%",
  },
  div: {
    backgroundImage: `url(${ourStory.src})`,
    backgroundSize: "cover",
    height: "100vh",
  },
};
function OurStory() {
  return (
    <>
      <div style={styles.div}>
        <p style={styles.p}>
          Jayben moved to Steamboat Springs, Colorado not long after graduating
          high school in 2013. He stayed for the sunsets, great skiing, and even
          better hash.
          <br />
          <br />
          Sabrina moved there on a whim in 2018 after driving through on a road
          trip. Sabrina first met Jayben, the hot hotel security guard, while
          working as a front desk agent.
          <br />
          <br />
          They fell in love in these beautiful hills where he taught her how to
          ski. After the pandemic started they moved to Vancouver, Washington
          where they currently live with their two dogs.
        </p>
        {/* <Image
          rounded
          className="col-11"
          src={ourStory.src}
          alt="Mount Werner behind a fence during sunset, the clouds are pink and hanging low over the sprawling hills"
        /> */}
      </div>
    </>
    // <div className="pb-5">
    //   <Container style={styles.container}>
    //     <div className="card col-6">
    //       <Image
    //         rounded
    //         className="col-12"
    //         src={ourStory.src}
    //         alt="Mount Werner behind a fence during sunset, the clouds are pink"
    //       />
    //       <p style={styles.p}>
    //         Jayben moved to Steamboat Springs, Colorado not long after
    //         graduating high school in 2013. He stayed for the sunsets, great
    //         skiing, and even better hash. Sabrina moved there on a whim in 2018
    //         after driving through on a road trip. She remembers meeting Jayben,
    //         <span style={{ fontStyle: "italic" }}>
    //           {" "}
    //           the hot hotel security guard
    //         </span>
    //         , while working as a front desk agent. They fell in love in a
    //         beautiful place. He taught her how to ski and she taught him how to
    //       </p>
    //     </div>
    //   </Container>
    // </div>
  );
}

export default OurStory;
