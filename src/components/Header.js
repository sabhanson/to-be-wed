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
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "OurStory":
        return <OurStory />;
      case "QA":
        return <QA />;
      case "Travel":
        return <Travel />;
      case "Accommodations":
        return <Accommodations />;
      case "RSVP":
        return <RSVP />;
      case "Registry":
        return <Registry />;
      case "ThingsToDo":
        return <ThingsToDo />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // const days = 21;
  var countDownDate = new Date("Aug 12, 2023 16:30:00").getTime();
  var now = new Date().getTime();
  var timeleft = countDownDate - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

  console.log(days)

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
        <p>so we're making it official in {days} days</p>
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
