import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import QA from "../pages/QA";
import Travel from "../pages/Travel";
import Accommodations from "../pages/Accommodations";
import RSVP from "../pages/RSVP";
import Registry from "../pages/Registry";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import header from "../images/header.png";

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "OurStory") {
      return <OurStory />;
    }
    if (currentPage === "QA") {
      return <QA />;
    }
    if (currentPage === "Travel") {
      return <Travel />;
    }
    if (currentPage === "Accommodations") {
      return <Accommodations />;
    }
    if (currentPage === "RSVP") {
      return <RSVP />;
    }
    if (currentPage === "Registry") {
      return <Registry />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <img
          src={header}
          alt="Jayben and Sabrina are getting married Sunday, August 13, 2023 in Portland Oregon"
          width="700px"
        ></img>
      </header>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default Header;

/* <h1>JAYBEN + SABRINA</h1>
<p>
  ARE GETTING MARRIED!
  <br />
  <i class="bi bi-flower3 dark-green"></i>
  <i class="bi bi-flower3 yellow"></i>
  <i class="bi bi-flower3 orange"></i>
  <i class="bi bi-flower3 lilac"></i>
  <br />
  SUNDAY, the 13TH of AUGUST, 2023
  <br />
  <i class="bi bi-flower3 red"></i>
  <i class="bi bi-flower3 purple"></i>
  <i class="bi bi-flower3 blue"></i>
  <i class="bi bi-flower3 lime"></i>
  <br />
  in PORTLAND, OREGON
</p> */
