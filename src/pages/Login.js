import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input placeholder="E-mail" data-testid="email-input" type="email" />
          <input placeholder="Senha" data-testid="password-input" type="password" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
