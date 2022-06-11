import React from "react";
import "../styles/Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar className="justify-content-center" bg="black" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" />{" "}
        <Navbar.Collapse id="basic-navbar-nav">
          {" "}
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
            <Nav.Link href="#travel" onClick={() => handlePageChange("Travel")}>
              TRAVEL
            </Nav.Link>
            <Nav.Link href="#rsvp" onClick={() => handlePageChange("RSVP")}>
              RSVP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

// TODO: figure out how to get navbar to collapse once a nav link is clicked
