import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="email-input" placeholder="E-mail aqui :)" />
        <input type="text" data-testid="password-input" placeholder="Senha aqui :)" />
        <button type="button">ENTRAR</button>
      </div>);
  }
}

export default Login;
