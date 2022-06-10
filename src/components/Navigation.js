import React from "react";
import "../styles/Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Navbar bg="black" variant="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
              HOME
            </Nav.Link>
            <Nav.Link
              href="#ourStory"
              onClick={() => handlePageChange("OurStory")}
            >
              OUR STORY
            </Nav.Link>
            <Nav.Link href="#qa" onClick={() => handlePageChange("QA")}>
              Q+A
            </Nav.Link>
            <Nav.Link href="#travel" onClick={() => handlePageChange("Travel")}>
              TRAVEL
            </Nav.Link>
            <Nav.Link
              href="#accommodations"
              onClick={() => handlePageChange("Accommodations")}
            >
              ACCOMMODATIONS
            </Nav.Link>
            <Nav.Link href="#rsvp" onClick={() => handlePageChange("RSVP")}>
              RSVP
            </Nav.Link>
            <Nav.Link
              href="#registry"
              onClick={() => handlePageChange("Registry")}
            >
              REGISTRY
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
