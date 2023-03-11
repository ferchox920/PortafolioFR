import React from "react";
import cerebrito from "../../assets/Cerebrito_alegre.svg";
import earth from "../../assets/earth.png";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Card.css"

function GridExample() {
  return (
    <div style={{marginTop: "5rem"}}>
      <Row xs={1} md={2} className="box1">
        <Col>
            <Card className="psiconecct" style={{height: "100%"}}>
          <a href="https://psiconnect-dev.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={cerebrito} className="img-fluid" style={{maxWidth: "200px"}} />
          </a>
              <Card.Body className="text-center">
                <Card.Title>Psiconnect</Card.Title>
                <Card.Text>
                  Este es un texto de ejemplo para la primera tarjeta.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card className="earth" style={{height: "100%"}}>
          <a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={earth} className="img-fluid" style={{maxWidth: "200px"}} />
          </a>
              <Card.Body className="text-center">
                <Card.Title>Countries</Card.Title>
                <Card.Text>
                  Este es un texto de ejemplo para la segunda tarjeta.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
