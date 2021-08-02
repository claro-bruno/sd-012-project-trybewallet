import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>Login</div>
        <input data-testid="email-input" type="email" placeholder="'alguem@alguem.com'" />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha:"
          minLength="6"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
