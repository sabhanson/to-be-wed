import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import FAQ from "../pages/FAQ";
import Travel from "../pages/Travel";
import RSVP from "../pages/RSVP";
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
    if (currentPage === "FAQ") {
      return (
        <FAQ currentPage={currentPage} handlePageChange={handlePageChange} />
      );
    }
    if (currentPage === "Travel") {
      return <Travel />;
    }
    if (currentPage === "RSVP") {
      return <RSVP />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <img
          src={headerImg}
          alt="'Jayben + Sabrina are getting married! Sunday, the 13th of August, 2023 in Portland, Oregon.' surrounded by rainbow colored flowers"
          onClick={() => handlePageChange("Home")}
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
