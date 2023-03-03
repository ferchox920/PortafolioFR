import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Offcanvas } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">Fernando Ramones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Offcanvas placement="end" aria-labelledby="navbar-nav">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Dark offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#" active>Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="navbar-dropdown">
                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;