import React from "react";
import "../styles/Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Navbar bg="black" expand="md">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" />{" "}
          Click here for more info
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
                HOME
              </Nav.Link>
              <Nav.Link
                href="#ourStory"
                onClick={() => handlePageChange("OurStory")}
              >
                OUR STORY
              </Nav.Link>
              <Nav.Link href="#faq" onClick={() => handlePageChange("FAQ")}>
                FAQ
              </Nav.Link>
              <Nav.Link
                href="#travel"
                onClick={() => handlePageChange("Travel")}
              >
                TRAVEL
              </Nav.Link>
              <Nav.Link href="#rsvp" onClick={() => handlePageChange("RSVP")}>
                RSVP
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
