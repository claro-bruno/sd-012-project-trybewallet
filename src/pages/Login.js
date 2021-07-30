import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" data-testid="email-input" placeholder="Seu Email" />
          <input type="text" data-testid="password-input" placeholder="Sua Senha" />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
