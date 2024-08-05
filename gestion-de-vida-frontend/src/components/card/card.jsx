import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './card.css';

const Tarjeta = ({ path, titulo, image }) => {
  return (
    <Link to={path} className="card-link">
      <Card className="home-card">
        <Card.Body>
          <Image src={image} alt={titulo} className="card-image" />
          <Card.Title className="card-title">{titulo}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Tarjeta;
