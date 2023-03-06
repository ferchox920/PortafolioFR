import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WriteMachine.css";

const textos = [
  "Hola, quiero presentarles mis proyectos.",
  "Muchas gracias por su atención.",
  "Fernando Ramones",
];

const WriteMachine = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % textos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const elementos = textos.map((texto, i) => (
    <Row
      key={i}
      className={`transicion-item ${
        i === index ? "transicion-activo" : "transicion-inactivo"
      }`}
    >
      <Col>{texto}</Col>
    </Row>
  ));

  return <Container className="transiciones">{elementos}</Container>;
};

export default WriteMachine;
