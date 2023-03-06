import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="countainer">

    <div class="container-fluid p-0">
    <div class="row">
      <div class="col-md-12">
        <div class="jumbotron jumbotron-fluid text-center bg-transparent">
          <div class="container">
            <h1 class="display-4">¡Bienvenido a mi portafolio!</h1>
            <p class="lead">Aquí encontrarás información sobre mis habilidades y proyectos realizados.</p>
            <hr class="my-4"/>
            <a class="btn btn-lg btn-primary" href="#about-me" role="button">Sobre mi</a>
            <a class="btn btn-lg btn-secondary" href="#my-work" role="button">Mis proyectos</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Hero;