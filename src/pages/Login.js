import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <LoginForm />
        </Row>
      </div>
    );
  }
}

export default Login;
