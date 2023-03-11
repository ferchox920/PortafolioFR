import React from "react";
import yo from "../../assets/ioAbout.jpg";
import styles from "./AboutInfo.module.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
} from "react-icons/fa";

const AboutInfo = () => {
  return (
    <div className={`container ${styles.containerAbout}`}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">Sobre mí</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 text-center">
                  <img
                    src={yo}
                    alt="profile-pic"
                    className={`img-fluid rounded-circle mb-3 ${styles.profilePic}`}
                  />
                </div>
                <div className="col-md-9">
                  <p className="lead">
                    ¡Hola! Soy un desarrollador full stack con experiencia en
                    tecnologías web como React, Node.js, TypeScript, Firebase y
                    muchas más.
                  </p>
                  <p className="lead">
                    También tengo conocimientos básicos en Java y Python, y he
                    trabajado con ORM como TypeORM y servicios de pago como
                    PayPal y MercadoPago.
                  </p>
                  <p className="lead">
                    He desarrollado aplicaciones web completas, incluyendo
                    sistemas de autenticación con Firebase, chat en vivo con
                    Socket.io y sistemas de pago con PayPal y MercadoPago.
                  </p>
                  <p className="lead">
                    Me considero un apasionado de la tecnología y estoy en
                    constante aprendizaje para mejorar mis habilidades. Si
                    tienes un proyecto o idea, no dudes en ponerte en contacto
                    conmigo.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-md-4">
                      <a
                        href="mailto:fernandoramones92@gmail.com"
                        className="btn btn-outline-primary w-100 mb-3"
                        target="_blank"
                      >
                        <FaEnvelope className="me-2" />
                        Email
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a
                        href="https://github.com/ferchox920"
                        className="btn btn-outline-secondary w-100 mb-3"
                        target="_blank"
                      >
                        <FaGithub className="me-2" />
                        GitHub
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a
                        href="https://www.linkedin.com/in/fernando-andres-ramones-ramones/"
                        className="btn btn-outline-primary w-100 mb-3"
                        target="_blank"
                      >
                        <FaLinkedin className="me-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div
                    className={`d-flex justify-content-center align-items-center ${styles.techStack}`}
                  >
                    <FaHtml5 className={`${styles.icon} ${styles.iconLg}`} />
                    <FaCss3Alt className={`${styles.icon} ${styles.iconLg}`} />
                    <FaJsSquare className={`${styles.icon} ${styles.iconLg}`} />
                    <FaReact className={`${styles.icon} ${styles.iconLg}`} />
                    <FaNodeJs className={`${styles.icon} ${styles.iconLg}`} />
                    <FaDatabase className={`${styles.icon} ${styles.iconLg}`} />
                    <FaGitAlt className={`${styles.icon} ${styles.iconLg}`} />
                    <FaJava className={`${styles.icon} ${styles.iconLg}`} />
                    <FaPython className={`${styles.icon} ${styles.iconLg}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
