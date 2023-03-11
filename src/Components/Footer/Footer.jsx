import React from 'react';
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <p className="mb-0">Contact me: fernandoramones92@gmail.com</p>
          </Col>
          <Col md={4}>
            <p className="mb-0 text-center">Follow us: 
              <a href="https://www.facebook.com/fernando.ramones.56/"><FaFacebook className="ms-2" /></a>
              <a href="https://twitter.com/framonesb"><FaTwitter className="ms-2" /></a>
              <a href="https://www.instagram.com/framonesborges/"><FaInstagram className="ms-2" /></a>
            </p>
          </Col>
          <Col md={4}>
            <p className="mb-0 text-end">&copy; 2023 FernandoR Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;