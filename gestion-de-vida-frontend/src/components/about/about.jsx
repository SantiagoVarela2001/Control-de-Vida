import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

const About = () => {
  return (
    <Container className="sobrenosotros">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="sobrenosotros-title">¿DE QUE SE TRATA CONTROL DE VIDA?</h1>
          <div className='text-container'>
          <p className="sobrenosotros-text">
            Gestión de Vida es una plataforma dedicada a ayudarte a organizar y gestionar tus actividades diarias de manera eficiente. Desde el control de gastos hasta la planificación de tareas y notas, nuestro objetivo es simplificar tu vida y permitirte enfocarte en lo que realmente importa.
          </p>
          <p className="sobrenosotros-text">
            Nuestra misión es proporcionar herramientas intuitivas y efectivas para que puedas mantenerte organizado y productivo. Creemos que una buena gestión del tiempo y de las tareas es clave para alcanzar el éxito personal y profesional.
          </p>
          <p className="sobrenosotros-text">
            Gracias por confiar en Gestión de Vida. Estamos aquí para ayudarte a alcanzar tus metas y mejorar tu calidad de vida.
          </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
