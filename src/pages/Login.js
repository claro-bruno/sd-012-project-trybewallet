import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email-input">
          <input
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>

      </div>);
  }
}

export default Login;
