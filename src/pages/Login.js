import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            placeholder="Digite um email"
          />
        </label>
        <label htmlFor="password">
          Digite uma senha:
          <input
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
