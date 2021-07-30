import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>
          Login
        </h2>
        <label htmlFor="userEmail">
          Email:
          <input data-testid="email-input" type="text" id="userEmail" />
        </label>
        <label htmlFor="userPassword">
          Senha:
          <input data-testid="password-input" type="text" id="userPassword" />
        </label>
        <button type="button">
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
