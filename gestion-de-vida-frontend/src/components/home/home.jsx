import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../card/card';
import './home.css';

const Home = () => {
  return (
    <Container className="home-container home-background">
      <Row className="justify-content-md-center">
        <Col md="12">
          <h1 className="home-title">GESTIÓN DE VIDA</h1>
        </Col>
      </Row>
      <Row className="card-row">
        {[
          { path: '/path1', titulo: 'Control de Gastos' },
          { path: '/path2', titulo: 'Tareas Diarias' },
          { path: '/path3', titulo: 'Notas' },
          { path: '/path4', titulo: 'Recordatorios' },
          { path: '/path5', titulo: 'Entrenamiento' },
        ].map((item, index) => (
          <Col md="2" key={index} className="card-col">
            <Card path={item.path} titulo={item.titulo} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;