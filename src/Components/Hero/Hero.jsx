import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Bienvenido a mi sitio web</h1>
            <p>
              En este sitio encontrarás información sobre mí y mis habilidades en el desarrollo web.
            </p>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="John Doe"
              />
              <div className="card-body">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">
                  Desarrollador Full Stack con experiencia en tecnologías como React, Node.js, y MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;