import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <h2>Trybe Wallet</h2>
        <h3>Login de Usuário</h3>
        <label htmlFor="input-email">
          Insira seu e-mail:
          <input
            id="input-email"
            type="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="input-password">
          Insira sua senha:
          <input
            id="input-password"
            type="password"
            data-testid="password-input"
            minLength="6"
          />
        </label>
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
