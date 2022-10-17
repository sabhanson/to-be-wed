import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import footer from "../images/footer.png";

function Footer() {
  return (
    <div>
      <footer>
        <img
          src={footer}
          alt="Jayben and Sabrina are getting married Sunday, August 13, 2023 in Portland Oregon"
          width="300px"
        ></img>
      </footer>
    </div>
  );
}

export default Footer;
