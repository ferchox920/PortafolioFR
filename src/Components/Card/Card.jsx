import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./Card.css";
import cerebrito from "../../assets/Cerebrito_alegre.svg";
import earth from "../../assets/earth.png";

const cards = [
  {
    image: cerebrito,
    alt: "Psiconnect",
    title: "Psiconnect🧠💬",
    description:
      "Psiconnect es una aplicación web desarrollada como proyecto final del programa de formación en desarrollo web Full Stack de SoyHenry. La aplicación tiene como objetivo principal brindar a los usuarios un servicio de asesoramiento y terapia psicológica en línea.",
    link: "https://github.com/Psiconnect/Psiconnect",
    bgClass: "bg-blue",
  },
  {
    image: earth,
    alt: "Countries",
    title: "Countries🌍",
    description:
      "La API de países permite acceder a información detallada de todos los países del mundo, incluyendo datos demográficos, geográficos, económicos y culturales. Además, permite realizar búsquedas y filtrados para obtener información específica. Es una herramienta muy útil para desarrollar aplicaciones relacionadas con viajes, comercio internacional, educación y mucho más.",
    link: "https://ejemplo.com",
    bgClass: "bg-green",
  },
];

function CarouselExample() {
  const renderCards = () => {
    return cards.map((card) => (
      <Carousel.Item key={card.title}>
        <Card className={`card ${card.bgClass}`}>
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <Card.Img
              variant="top"
              src={card.image}
              className="img-fluid"
              alt={card.alt}
            />
          </a>
          <Card.Body className="text-center">
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      </Carousel.Item>
    ));
  };

  return (
    <div className="carousel-container">
      <Carousel fade>{renderCards()}</Carousel>
    </div>
  );
}

export default CarouselExample;
