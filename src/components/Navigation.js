import React from "react";
import "../styles/Navigation.css";
import { Container, Navbar, Nav } from "react-bootstrap";

import navigationData from "../data/Navigation.data";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Container>
      <Navbar bg="black" variant="dark">
        <Container className="justify-content-center">
          <Nav variant="pills" defaultActiveKey="#home">
            {navigationData.map((navItem) => (
              <Nav.Item>
                <Nav.Link
                  key={navItem.id}
                  className={navItem.class}
                  href={navItem.href}
                  onClick={() => handlePageChange(navItem.page)}
                >
                  {navItem.icon}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
