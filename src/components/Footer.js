import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import footer from "../images/footer.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <img
        className="col-6 col-md-4 col-lg-3"
        src={footer}
        alt="website created by Sabrina 'almost' Martin 2022 copyright"
      />
    </>
  );
}

export default Footer;
