import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <main>
        <form>
          <input type="text" placeholder="EMAIL" data-testid="email-input" />
          <input type="password" placeholder="SENHA" data-testid="password-input" />
          <Link to="/carteira">Entrar</Link>
        </form>
      </main>
    );
  }
}

export default Login;
