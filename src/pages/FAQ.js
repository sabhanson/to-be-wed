import React from "react";
import "../styles/FAQ.css";
import { Accordion } from "react-bootstrap";
import PortlandPic from "../images/portland.jpeg";

function FAQ({ currentPage, handlePageChange }) {
  return (
    <div>
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>SO, LIKE, WHAT'S THE DRESS CODE?</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>NO T SHIRTS PLEASE</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            CAN MY SNOTTY, UGLY, GOOD-FOR-LITTLE KIDS COME?
          </Accordion.Header>
          <Accordion.Body>NO, LOL.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>WHO'S IN THE BRIDAL PARTY?</Accordion.Header>
          <Accordion.Body>
            NO ONE. WE'RE CHOOSING TO FORGO A BRIDAL PARTY. WE WANT EVERYONE TO
            KNOW THEY'RE EQUALLY SPECIAL TO US AND DON'T NEED TO BUY MATCHING
            OUTFITS TO PROVE IT.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>WHERE IS PORTLAND, OREGON?</Accordion.Header>
          <Accordion.Body>
            RIGHT HERE.
            <img src={PortlandPic} alt="Portland, OR" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>WHAT TIME IS THIS SHINDIG?</Accordion.Header>
          <Accordion.Body>5PM-11PM</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>WHERE SHOULD I STAY?</Accordion.Header>
          <Accordion.Body>
            FOR HOTEL INFO, PLEASE VISIT{" "}
            <a href="#travel" onClick={() => handlePageChange("Travel")}>
              THIS LINK
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FAQ;
