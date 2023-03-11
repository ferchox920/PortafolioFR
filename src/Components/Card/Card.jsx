import React from "react";
import cerebrito from "../../assets/Cerebrito_alegre.svg";
import earth from "../../assets/earth.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Card.css";

function GridExample() {
  return (
    <div style={{ marginTop: "5rem" }}>
      <Row xs={1} md={2} className="box1">
        <Col>
          <Card className="psiconecct">
            <a
              href="https://psiconnect-dev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src={cerebrito}
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </a>
            <Card.Body className="text-center">
              <Card.Title>Psiconnect🧠💬</Card.Title>
              <Card.Text>
                Psiconnect es una aplicación web desarrollada como proyecto
                final del programa de formación en desarrollo web Full Stack de
                SoyHenry. La aplicación tiene como objetivo principal brindar a
                los usuarios un servicio de asesoramiento y terapia psicológica
                en línea.
                <br />
                <a href="https://github.com/Psiconnect/Psiconnect">Ir al Readme</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="earth">
            <a
              href="https://ejemplo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img
                variant="top"
                src={earth}
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </a>
            <Card.Body className="text-center">
              <Card.Title>Countries🌍</Card.Title>
              <Card.Text>
                La API de países permite acceder a información detallada de
                todos los países del mundo, incluyendo datos demográficos,
                geográficos, económicos y culturales. Además, permite realizar
                búsquedas y filtrados para obtener información específica. Es
                una herramienta muy útil para desarrollar aplicaciones
                relacionadas con viajes, comercio internacional, educación y
                mucho más.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
