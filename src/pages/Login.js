import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input
          type="email"
          name="email"
          data-testid="email-input"
        />

        <Input
          type="text"
          name="password"
          data-testid="password-input"
        />
      </div>
    );
  }
}

export default Login;
