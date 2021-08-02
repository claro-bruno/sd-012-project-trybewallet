import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email
          <input
            data-testid="email-input"
            type="email"
            id="email"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            data-testid="password-input"
            type="password"
            id="senha"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

export default Login;
