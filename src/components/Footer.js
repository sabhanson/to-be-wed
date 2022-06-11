import React from "react";
import { Navbar } from "react-bootstrap";
import "../styles/Footer.css";
import footerImg from "../images/footer.png";

function Footer() {
  return (
    <Navbar className="footer">
      <img
        src={footerImg}
        alt="'website created by Sabrina 'almost' Martin, copyright 2022'"
      />
    </Navbar>
  );
}

export default Footer;
