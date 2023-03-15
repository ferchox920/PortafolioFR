import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './LandingPage.css';

function LandingPage() {
  AOS.init();
  
  return (
    <div className="landing-page">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h1 className="landing-title" data-aos="fade-up">FERNANDO RAMONES</h1>
            <p className="landing-subtitle" data-aos="fade-up" data-aos-delay="100">Desarrollador Web Full-Stack</p>
            <Button variant="primary" size="lg" href="/home" data-aos="fade-up" data-aos-delay="200">Entrar al sitio</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
