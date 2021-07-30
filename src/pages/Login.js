import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" type="text" placeholder="Seu Usario aqui" />
        <input data-testid="password-input" type="password" placeholder="Sua senha aqui" />
        <button type="submit">Entrar</button>
      </form>
    ); 
  }
}

export default Login;
