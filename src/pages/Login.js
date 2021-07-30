import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="email-input" type="text" />
        <input data-testid="password-input" type="text" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
