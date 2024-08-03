import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Logo from '../../../public/Logo.svg';
import './logininfo.css';

const LoginInfo = () => {
  return (
    <Card className="login-info-card">
      <Card.Body>
        <Image src={Logo} alt="Logo" className="login-info-logo" />
        <Card.Title className="login-info-title">Bienvenido a Gestión de Vida</Card.Title>
        <Card.Text className="login-info-text">
          Una plataforma para gestionar tus gastos, tareas diarias y notas de manera eficiente.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LoginInfo;
