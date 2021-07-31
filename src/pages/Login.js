import React from 'react';

class Login extends React.Component {
  

  render() {
    return (
      <form className="form-login">
        <input data-testid="email-input" type="email" placeholder="Email" />
        <input data-testid="password-input" type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>);
  }
}

export default Login;
