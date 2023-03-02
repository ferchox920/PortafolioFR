import React from "react";
import "./Hero.css";
import ia from "../../assets/ia1.png";
import ia2 from "../../assets/ia2.png";
import ia3 from "../../assets/ia3.png";
import ia4 from "../../assets/ia4.png";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="mb-4">¡Hola, soy un desarrollador web!</h1>
            <p className="lead mb-4">
              Me encanta desarrollar sitios web y aplicaciones que hagan la vida
              de las personas más fácil.
            </p>
            <Button variant="primary" size="lg">
              Contáctame
            </Button>
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={ia} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ia2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ia3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ia4} alt="Fourth slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
