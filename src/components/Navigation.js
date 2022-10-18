import React from "react";
import "../styles/Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import {
  BiBookHeart,
  BiHome,
  BiHelpCircle,
  BiHotel,
  BiPaperPlane,
  BiGift,
  BiEnvelope,
  BiMap,
} from "react-icons/bi";

import { IoAirplaneOutline } from "react-icons/io5";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Navbar bg="black" variant="dark">
        <Container className="justify-content-center">
          <Nav variant="pills" defaultActiveKey="#home">
            {/* HOME */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#home"
                onClick={() => handlePageChange("Home")}
                style={{ color: "var(--dark-green)" }}
              >
                <BiHome />
              </Nav.Link>
            </Nav.Item>
            {/* OUR STORY */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#ourStory"
                onClick={() => handlePageChange("OurStory")}
                style={{ color: "var(--orange)" }}
              >
                <BiBookHeart />
              </Nav.Link>
            </Nav.Item>
            {/* RSVP */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#rsvp"
                onClick={() => handlePageChange("RSVP")}
                style={{ color: "var(--blue)" }}
              >
                <BiPaperPlane />
              </Nav.Link>
            </Nav.Item>
            {/* TRAVEL */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#travel"
                onClick={() => handlePageChange("Travel")}
                style={{ color: "var(--lilac)" }}
              >
                <IoAirplaneOutline />
              </Nav.Link>
            </Nav.Item>
            {/* ACCOMODATIONS */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#accomodations"
                onClick={() => handlePageChange("Accomodations")}
                style={{ color: "var(--red)" }}
              >
                <BiHotel />
              </Nav.Link>
            </Nav.Item>
            {/* THINGS TO DO */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#thingsToDo"
                onClick={() => handlePageChange("ThingsToDo")}
                style={{ color: "var(--lime)" }}
              >
                <BiMap />
              </Nav.Link>
            </Nav.Item>
            {/* REGISTRY */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#registry"
                onClick={() => handlePageChange("Registry")}
                style={{ color: "var(--purple)" }}
              >
                <BiGift />
              </Nav.Link>
            </Nav.Item>
            {/* Q+A */}
            <Nav.Item>
              <Nav.Link
                className="navLink"
                href="#qa"
                onClick={() => handlePageChange("QA")}
                style={{ color: "var(--yellow)" }}
              >
                <BiHelpCircle />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
