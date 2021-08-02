import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email-input">
          E-Mail
          <input type="text" data-testid="email-input" />
        </label>
        <label htmlFor="password-input">
          Senha
          <input type="password" data-testid="password-input" />
        </label>
        <button type="button">
          Entrar
        </button>
      </div>);
  }
}

export default Login;
