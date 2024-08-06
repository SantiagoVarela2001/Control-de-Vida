import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tarjeta from '../card/card';
import './home.css';
import notes from '../../../public/notes.svg';
import reminders from '../../../public/reminders.svg';
import tasks from '../../../public/tasks.svg';
import training from '../../../public/training.svg';
import expenses from '../../../public/expenses.svg';

const Home = () => {
  return (
    <Container className="home">
      <Row className="justify-content-md-center">
        <Col md="12">
          <h1 className="home-title">CONTROL DE VIDA</h1>
        </Col>
      </Row>
      <Row className="card-row justify-content-md-center">
        {[
          { path: '/expenses', titulo: 'GASTOS', image: expenses },
          { path: '/path2', titulo: 'TAREAS', image: tasks },
          { path: '/path3', titulo: 'NOTAS', image: notes },
          { path: '/path4', titulo: 'RECORDATORIOS', image: reminders },
          { path: '/path5', titulo: 'ENTRENAMIENTO', image: training },
        ].map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={2} key={index} className="card-col">
            <Tarjeta path={item.path} titulo={item.titulo} image={item.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
