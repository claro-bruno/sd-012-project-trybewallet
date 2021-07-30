import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Wallet</h1>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              placeholder="Insira seu email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="email"
              placeholder="Digite sua senha"
              data-testid="password-input"
              disabled
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
