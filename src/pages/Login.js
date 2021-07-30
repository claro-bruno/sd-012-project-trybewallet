import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email-input">
          E-mail:
          <input
            name="email-input"
            type="email"
            data-testid="email-input"
            placeholder="Exemplo: nome@email.com"
          />
        </label>
        <br />
        <label htmlFor="password-input">
          Senha:
          <input
            name="password-input"
            type="email"
            data-testid="password-input"
            placeholder="Exemplo: 123456"
          />
        </label>
        <br />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
