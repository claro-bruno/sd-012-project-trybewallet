import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email
          <input data-testid="email-input" type="text" name="email" />
        </label>
        <label htmlFor="senha">
          Senha
          <input data-testid="password-input" type="text" name="senha" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
