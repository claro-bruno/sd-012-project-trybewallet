import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <article>
        <h2>Trybe Wallet</h2>
        <label htmlFor="email-input">
          E-mail:
          <input type="text" data-testid="email-input" />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input type="password" data-testid="password-input" />
        </label>
        <button>Entrar</button>
      </article>
    );
  }
}

export default LoginPage;
