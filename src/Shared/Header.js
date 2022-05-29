import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inventory</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
