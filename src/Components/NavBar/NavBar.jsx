import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/home">Fernando Ramones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Offcanvas placement="end" aria-labelledby="navbar-nav">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Dark offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Proyectos" id="navbar-dropdown">
                <NavDropdown.Item
                  href="https://psiconnect-dev.vercel.app/"
                  target="_blank"
                >
                  Psiconnect
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/ferchox920/countries-pi"  target="_blank"
                >Countries</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Repositore">
                  Ver todos mis proyectos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
