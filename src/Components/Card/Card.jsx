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
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="psiconecct" style={{height: "100%"}}>
            <Card.Img variant="top" src={cerebrito} className="img-fluid" style={{maxWidth: "200px"}} />
            <Card.Body className="text-center">
              <Card.Title>Cerebrito Alegre</Card.Title>
              <Card.Text>
                Este es un texto de ejemplo para la primera tarjeta.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="earth" style={{height: "100%"}}>
            <Card.Img variant="top" src={earth} className="img-fluid" style={{maxWidth: "200px"}} />
            <Card.Body className="text-center">
              <Card.Title>Tierra</Card.Title>
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
