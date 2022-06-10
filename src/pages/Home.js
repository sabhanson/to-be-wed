import React from "react";
import usPic from "../images/we-met.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <img
        className="us-pic"
        src={usPic}
        alt="Jayben and Sabrina on a hike with their dogs"
      />
    </div>
  );
}

export default Home;
