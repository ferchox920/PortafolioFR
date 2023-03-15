  import React from "react";
  import "./Hero.css";
  import certificado from "../../assets/certificado.png";
  import io from "../../assets/io.jpg";
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
              <Button variant="primary" size="lg"
              href="mailto:fernandoramones92@gmail.com"
              >
                Contáctame
              </Button>
            </Col>
            <Col md={6}>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={io}
                    alt="First slide"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={certificado}
                    alt="Second slide"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={ia2}
                    alt="Third slide"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={ia3}
                    alt="Fourth slide"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={ia4}
                    alt="Fifth slide"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={ia}
                    alt="Six slide"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  export default Hero;
