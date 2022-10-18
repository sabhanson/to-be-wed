import React, { useState } from "react";
import {
  Home,
  OurStory,
  QA,
  Travel,
  ThingsToDo,
  Accommodations,
  RSVP,
  Registry,
} from "../pages/index";
import Navigation from "./Navigation";
import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    // TODO: switch case
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
