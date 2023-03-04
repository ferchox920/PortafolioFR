import './WriteMachine.css'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const WriteMachine = () => {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const text = "Todos los proyecto son hecho con toda la dedicacion y el amor posible.";
  const speed = 50; // Velocidad de escritura en milisegundos
  const delay = 1000; // Retardo antes de comenzar la escritura en milisegundos

  useEffect(() => {
    // Función para simular la escritura
    const typeWriter = () => {
      if (index < text.length) {
        setIndex((prevState) => prevState + 1);
        setTimeout(typeWriter, speed);
      } else {
        setComplete(true);
      }
    };

    // Retardo antes de comenzar la escritura
    setTimeout(typeWriter, delay);

    // Resetear el índice cuando el texto cambie
    setIndex(0);
    setComplete(false);
  }, [text]);

  // Dividir el texto en un array de líneas y unirlo con saltos de línea
  const lines = text.split('\n');
  const jsxLines = lines.map((line, i) => <span key={i}>{line}<br/></span>);

  return (
    <Container className="typewriter-container">
      <Row>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x500" fluid />
        </Col>
        <Col md={6}>
          <p>{complete ? jsxLines : jsxLines.slice(0, index)}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WriteMachine;
