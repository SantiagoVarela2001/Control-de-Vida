import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './card.css';

const Tarjeta = ({ path, titulo }) => {
  return (
    <Link to={path} className="card-link">
      <Card className="home-card">
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Tarjeta;