import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>Login</div>
        <input type="text" data-testid="email-input" placeholder="email" value="" />
        <input type="password" data-testid="password-input" placeholder="senha" />
        <button type="button" data-testId="">Entrar</button>
      </div>);
  }
}

export default Login;
