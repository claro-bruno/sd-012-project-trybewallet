import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
        />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
