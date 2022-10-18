import React, { useState } from "react";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import OurStory from "../pages/OurStory";
import QA from "../pages/QA";
import Travel from "../pages/Travel";
import ThingsToDo from "../pages/ThingsToDo";
import Accommodations from "../pages/Accommodations";
import RSVP from "../pages/RSVP";
import Registry from "../pages/Registry";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
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
    if (currentPage === "ThingsToDo") {
      return <ThingsToDo />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1>
          SABRINA<span style={{ color: "white" }}> + </span>
          JAYBEN<span style={{ color: "white" }}> = </span>
          <span style={{ color: "var(--red)" }}>
            <FaHeart />
          </span>
        </h1>
        <p>so we're making it official in 2023</p>
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
