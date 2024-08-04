import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Logo from '../../../public/icon.png';
import './logininfo.css';

const LoginInfo = () => {
  return (
    <Card className="login-info-card">
      <Card.Body>
        <Image src={Logo} alt="Logo" className="login-info-logo" />
        <Card.Title className="login-info-title">Control de Vida</Card.Title>
        <Card.Text className="login-info-text">
          Nos encargamos de ofrecerte un mejor control de su vida, podras ponerle fin al desorden y al caos en tus rutinas.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LoginInfo;
