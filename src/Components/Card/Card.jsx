import React from "react";
import "./Card.css";
import cerebrito from "../../assets/Cerebrito_alegre.svg";
import earth from "../../assets/earth.png";

const Card = () => {
  return (
    <div class="card-group">
      <div class="card psiconecct">
        <img
          src={cerebrito}
          class="card-img-top img-fluid"
          alt="Cerebrito Alegre"
          style={{ width: "200px", height: "200px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card earth">
        <img
          src={earth}
          class="card-img-top img-fluid"
          alt="Earth"
          style={{ width: "200px", height: "200px" }}
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;