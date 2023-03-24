import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';

const Footer = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
      });

      timeline
        .add({
          targets: '.footer-row',
          translateY: [100, 0],
          opacity: [0, 1],
        })
        .add(
          {
            targets: '.footer-icons',
            opacity: [0, 1],
            delay: anime.stagger(100),
          },
          '-=700'
        );

      setIsAnimated(true);
    }
  }, [isAnimated]);

  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="align-items-center footer-row">
          <Col md={4}>
            <p className="mb-0">Contact me: fernandoramones92@gmail.com</p>
          </Col>
          <Col md={4} className="text-center">
            <p className="mb-0">Follow us:</p>
            <div className="footer-icons">
              <a href="https://www.facebook.com/fernando.ramones.56/">
                <FaFacebook className="ms-2" />
              </a>
              <a href="https://twitter.com/framonesb">
                <FaTwitter className="ms-2" />
              </a>
              <a href="https://www.instagram.com/framonesborges/">
                <FaInstagram className="ms-2" />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-end">
            <p className="mb-0">&copy; 2023 FernandoR Company</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
