import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" data-testid="email-input" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                data-testid="password-input"
              />
            </Form.Group>
            <Link to="/wallet">
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Link>
          </Form>
        </Col>
      </div>
    );
  }
}

export default LoginForm;
