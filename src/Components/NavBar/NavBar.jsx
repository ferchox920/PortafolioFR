import React, { useRef, useEffect } from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import anime from 'animejs/lib/anime.es.js';

function NavBar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    anime({
      targets: navbarRef.current,
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1500,
      delay: 500,
    });
  }, []);

  return (
    <Navbar
      ref={navbarRef}
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/home">Fernando Ramones</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Offcanvas placement="end" aria-labelledby="navbar-nav">
          
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/About">About</Nav.Link>
              <NavDropdown title="Proyectos" id="navbar-dropdown">
                <NavDropdown.Item
                  href="https://psiconnect.vercel.app/"
                  target="_blank"
                >
                  Psiconnect
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/ferchox920/countries-pi"
                  target="_blank"
                >
                  Countries
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://github.com/ferchox920/to-do"
                  target="_blank"
                >
                  To-Do-List
                </NavDropdown.Item>
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
