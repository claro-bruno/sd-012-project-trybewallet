import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <form className="login-section">
        <Input
          type="email"
          testID="email-input"
          placeHolder="E-mail"
        />
      </form>
    );
  }
}

export default Login;
