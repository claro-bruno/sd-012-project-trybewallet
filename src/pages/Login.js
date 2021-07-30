import React from 'react';
import './login.css';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2>Login</h2>
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              id="email"
              type="text"
              name="email"
              value={ email }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              data-testid="password-input"
              id="senha"
              type="password"
              name="senha"
              value={ senha }
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
