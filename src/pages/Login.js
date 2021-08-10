import React from 'react';

export default class Login extends React.Component {
  renderLoginFields() {
    return (
      <form>
        <input data-testid="email-input" type="email" placeholder="e-mail" />
        <input data-testid="password-input" type="password" placeholder="password" />
        <button type="button">Entrar</button>
      </form>
    );
  }

  render() {
    return this.renderLoginFields();
  }
}
