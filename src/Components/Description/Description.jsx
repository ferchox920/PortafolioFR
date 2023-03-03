import Accordion from "react-bootstrap/Accordion";
import "./Description.css";

function Description() {
  return (
    <Accordion defaultActiveKey="0" flush
    className="countainer">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sobre mi</Accordion.Header>
        <Accordion.Body className="accordion-body">
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
          Como estudiante de música, toco varios instrumentos y disfruto de una
          amplia variedad de géneros musicales, desde la música clásica hasta el
          folk-rock indie y el heavy metal. También me encanta la cumbia
          argentina y otros géneros populares de la región.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Como Desarrollador</Accordion.Header>
        <Accordion.Body className="accordion-body">
          Como desarrollador Full Stack, tengo amplia experiencia en tecnologías
          como React.Js, JavaScript, Express.Js, Node.Js, SQL, Sequelize y
          Redux. Me gradué con éxito de SoyHenry y tengo habilidades sólidas
          tanto en el front-end como en el back-end, aunque me siento más cómodo
          en el área del back-end. También tengo habilidades para establecer y
          organizar sprints en el trabajo en equipo.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Como Psicólogo</Accordion.Header>
        <Accordion.Body className="accordion-body">
          Como licenciado en psicología graduado de la Universidad Yacambu, la
          conducta humana es una de mis mayores pasiones. Actualmente trabajo en
          consultas online y también tengo experiencia en reclutamiento y
          recursos humanos. Además, estoy haciendo una capacitación en
          logoterapia para seguir expandiendo mis conocimientos. Las
          herramientas adquiridas y desarrolladas en esta carrera me han
          brindado habilidades comunicativas efectivas y me permiten trabajar de
          manera efectiva con personas de diversas culturas y orígenes.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Description;