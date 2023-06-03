import React, { useEffect, useRef } from "react";
import "./Hero.css";
import certificado from "../../assets/certificado.png";
import io from "../../assets/io.jpg";
import ia from "../../assets/ia1.png";
import ia2 from "../../assets/ia2.png";
import ia3 from "../../assets/ia3.png";
import ia4 from "../../assets/ia4.png";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import anime from "animejs/lib/anime.es.js";

const Hero = () => {
  const heroRef = useRef(null);
  
  function downloadFile() {
    const link = document.createElement("a");
    link.href = "/../src/assets/CvFernandoRamones.pdf";
    link.download = "CvFernandoRamones.pdf";
    link.click();
  }

  useEffect(() => {
    anime
      .timeline({ easing: "easeOutExpo" })
      .add({
        targets: heroRef.current.querySelector(".mb-4"),
        translateY: ["-50", "0"],
        opacity: [0, 1],
        duration: 1200,
      })
      .add({
        targets: heroRef.current.querySelector(".lead"),
        translateY: ["-50", "0"],
        opacity: [0, 1],
        duration: 1200,
      })
      .add({
        targets: heroRef.current.querySelector(".button-container"),
        translateY: ["-50", "0"],
        opacity: [0, 1],
        duration: 1200,
      })
      .add({
        targets: heroRef.current.querySelector(".carousel"),
        translateY: ["50", "0"],
        opacity: [0, 1],
        duration: 1200,
      });
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="mb-4">¡Hola, soy un desarrollador web!</h1>
            <div className="button-container">
              <Button
              className="btn1"
                variant="primary"
                size="lg"
                href="mailto:fernandoramones92@gmail.com"
                style={{ marginRight: "10px" }} 
              >
                Contáctame
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={() => downloadFile()}
              >
                Descargar mi currículum
              </Button>
            </div>
            <p className="lead mb-4">
              Me encanta desarrollar sitios web y aplicaciones que hagan la vida
              de las personas más fácil.
            </p>
          </Col>

          <Col md={6}>
            <Carousel className="carousel">
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={ia}
                  alt="Zero slide"
                  style={{ height: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
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
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Hero;
