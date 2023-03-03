import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import cerebrito from "../../assets/Cerebrito_alegre.svg";
import earth from "../../assets/earth.png";
import "./Card.css";

const CardComponent = () => {
  return (
    <CardGroup className="d-flex flex-wrap justify-content-center align-items-center">
      <Card className="psiconecct">
        <Card.Img variant="top" src={cerebrito} className="fixed-size" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="earth">
        <Card.Img variant="top" src={earth} className="fixed-size" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default CardComponent;