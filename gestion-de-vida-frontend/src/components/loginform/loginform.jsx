import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginInfo from '../logininfo/logininfo';
import './loginform.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className='login-background'>
      <Container>
        <Row className="justify-content-md-center align-items-center">
          <Col md="5" className="login-info-col no-padding">
            <LoginInfo />
          </Col>
          <Col md="5" className="login-form-col no-padding">
            <div className="login-form-container">
              <h1 className="textlogin">Login</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label className="form-label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label className="form-label">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                  />
                </Form.Group>

                <Link to="/home">
                  <Button variant="primary" type="submit" className="mt-3 btn-primary">
                    Iniciar sesión
                  </Button>
                </Link>
              </Form>
              <Link to="/register" className="register-link">Registrate ahora</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;

