import React from "react";
import "../styles/FAQ.css";
import { Accordion } from "react-bootstrap";
import PortlandPic from "../images/portland.jpeg";

function FAQ({ currentPage, handlePageChange }) {
  return (
    <div>
      <Accordion>
        <h1 className="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion.Item eventKey="0">
          <Accordion.Header>WHAT SHOULD I WEAR?</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>NO T SHIRTS PLEASE</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>CAN MY KIDS COME?</Accordion.Header>
          <Accordion.Body>
            To allow all of our guests, including parents, to thoroughly enjoy
            themselves, we respectfully ask that no children attend the event.
            We understand that Portland is a distance to travel for many of you,
            and we would love to assist you in finding childcare, if necessary.
          </Accordion.Body>
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
