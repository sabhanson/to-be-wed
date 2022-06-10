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
import headerImg from "../images/header.png";

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
          src={headerImg}
          alt="Header that says: 'Jayben + Sabrina are getting married! Sunday, the 13th of August, 2023 in Portland, Oregon.' surrounded by rainbow colored flowers"
        />
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
