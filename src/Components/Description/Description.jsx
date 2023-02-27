import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Humano
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Como persona, me considero un apasionado del aprendizaje y siempre
            estoy buscando nuevas oportunidades para expandir mis conocimientos.
            <br />
            <br />
     
            Me encanta aprender sobre una amplia variedad de temas, desde la
            poesía y la filosofía hasta las matemáticas y la física. Además, me
            siento muy cómodo con la tecnología, ya que siempre estoy buscando
            formas de innovar y mejorar. 
            <br />
            <br />
            Como estudiante de música, toco varios
            instrumentos y disfruto de una amplia variedad de géneros musicales,
            desde la música clásica hasta el folk-rock indie y el heavy metal.
            También me encanta la cumbia argentina y otros géneros populares de
            la región. 
            <br />
            <br />
            Siendo un emigrante venezolano, me siento muy agradecido
            por la oportunidad de vivir en Argentina, un país que he aprendido a
            amar profundamente. Por esta razón, me esfuerzo por ser un ciudadano
            responsable y participativo, y siempre busco maneras de contribuir a
            la sociedad. 
            <br />
            <br />
            En cuanto a mis habilidades, creo que una de mis
            fortalezas más importantes es mi capacidad para comunicarme
            efectivamente con los demás. Esta habilidad me permite trabajar de
            manera efectiva en equipo y colaborar en proyectos exitosos. Además,
            me considero una persona ambiciosa y comprometida en ser parte de
            los cambios en lugar de simplemente disfrutar de ellos.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Desarrollador
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Como desarrollador Full Stack, tengo amplia experiencia en
            tecnologías como React.Js, JavaScript, Express.Js, Node.Js, SQL,
            Sequelize y Redux. Me gradué con éxito de SoyHenry y tengo
            habilidades sólidas tanto en el front-end como en el back-end,
            aunque me siento más cómodo en el área del back-end. También tengo
            habilidades para establecer y organizar sprints en el trabajo en
            equipo.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Psicologo
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Como licenciado en psicología graduado de la Universidad Yacambu, la
            conducta humana es una de mis mayores pasiones. Actualmente trabajo
            en consultas online y también tengo experiencia en reclutamiento y
            recursos humanos. Además, estoy haciendo una capacitación en
            logoterapia para seguir expandiendo mis conocimientos. Las
            herramientas adquiridas y desarrolladas en esta carrera me han
            brindado habilidades comunicativas efectivas y me permiten trabajar
            de manera efectiva con personas de diversas culturas y orígenes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
