import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          E-mail
          <input id="email" type="email" name="email" data-testid="email-input" />
        </label>
        <label htmlFor="pass">
          Senha
          <input id="pass" type="password" name="pass" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
