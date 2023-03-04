import './WriteMachine.css'
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const WriteMachine = () => {
  const [index, setIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const text = "Todos los proyecto son hecho con toda la dedicacion y el amor posible.";
  const speed = 50; 
  const delay = 1000; 

  useEffect(() => {

    const typeWriter = () => {
      if (index < text.length) {
        setIndex((prevState) => prevState + 1);
        setTimeout(typeWriter, speed);
      } else {
        setComplete(true);
      }
    };


    setTimeout(typeWriter, delay);

    setIndex(0);
    setComplete(false);
  }, [text]);

  
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
