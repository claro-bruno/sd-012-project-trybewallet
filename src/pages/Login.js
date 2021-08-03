import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email-input">
          insira seu e-mail:
          <input
            data-testid="email-input"
            type="email"
            placeholder="e-mail"
          />
        </label>
        <label htmlFor="password-input">
          insira sua senha:
          <input
            data-testid="password-input"
            type="password"
            placeholder="pasword"
          />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
