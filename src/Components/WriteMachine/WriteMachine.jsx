import './WriteMachine.css'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const WriteMachine = () => {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const text = "Todos los proyecto son hecho con toda la dedicacion y el amor posible.";
  const speed = 50; 
  const delay = 1000; 

  useEffect(() => {
    // Cambiar el estado de espera después de 3 segundos
    setTimeout(() => setWaiting(false), 7000);
  }, []);

  useEffect(() => {
    const typeWriter = () => {
      // Solo comenzar a escribir si no está en modo de espera
      if (!waiting && index < text.length) {
        setIndex((prevState) => prevState + 1);
        setTimeout(typeWriter, speed);
      } else {
        setComplete(true);
      }
    };

    setTimeout(typeWriter, delay);

    setIndex(0);
    setComplete(false);
  }, [text, waiting]);

  const lines = text.split('\n');
  const jsxLines = lines.map((line, i) => <span key={i}>{line}<br/></span>);

  return (
    <Container className="typewriter-container">
      <Row>
        <Col md={100}>
          <p>{complete ? jsxLines : jsxLines.slice(0, index)}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WriteMachine;
