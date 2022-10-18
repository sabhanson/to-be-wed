import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import footer from "../images/footer.png";

function Footer() {
  return (
    <div>
      <footer>
        <img
          src={footer}
          alt="Website created by Sabrina 'Almost' Martin"
          width="50%"
        ></img>
      </footer>
    </div>
  );
}

export default Footer;
