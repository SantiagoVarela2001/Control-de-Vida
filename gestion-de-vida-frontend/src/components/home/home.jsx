import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tarjeta from '../card/card';
import './home.css';

const Home = () => {
  return (
    <Container className="home">
      <Row className="justify-content-md-center">
        <Col md="12">
          <h1 className="home-title">GESTIÓN DE VIDA</h1>
        </Col>
      </Row>
      <Row className="card-row justify-content-md-center">
        {[
          { path: '/path1', titulo: 'GASTOS' },
          { path: '/path2', titulo: 'TAREAS' },
          { path: '/path3', titulo: 'NOTAS' },
          { path: '/path4', titulo: 'RECORDATORIOS' },
          { path: '/path5', titulo: 'ENTRENAMIENTO' },
        ].map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={2} key={index} className="card-col">
            <Tarjeta path={item.path} titulo={item.titulo} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
