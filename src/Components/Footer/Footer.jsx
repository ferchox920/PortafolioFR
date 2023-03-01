import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <p className="mb-0">Contact us: example@example.com</p>
          </Col>
          <Col md={4}>
            <p className="mb-0 text-center">Follow us: 
              <a href="#"><FaFacebook className="ms-2" /></a>
              <a href="#"><FaTwitter className="ms-2" /></a>
              <a href="#"><FaInstagram className="ms-2" /></a>
            </p>
          </Col>
          <Col md={4}>
            <p className="mb-0 text-end">&copy; 2023 Example Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;