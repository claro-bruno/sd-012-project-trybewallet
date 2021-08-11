import React from 'react';
import { Link } from 'react-router-dom';

const MIN_LENGTH_PASSWORD = 6;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  emailIsValid() {
    const { email } = this.state;
    // https://ui.dev/validate-email-address-javascript/
    return /\S+@\S+\.\S+/.test(email);
  }

  checkPassword() {
    const { password } = this.state;
    return password.length >= MIN_LENGTH_PASSWORD;
  }

  checkDataLogin() {
    return this.emailIsValid() && this.checkPassword();
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email-email">
          <input
            type="email"
            value={ email }
            data-testid="email-input"
            placeholder="Digite seu email"
            name="email"
            id="email-email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email-password">
          <input
            type="password"
            value={ password }
            data-testid="password-input"
            placeholder="Digite sua senha"
            name="password"
            id="email-password"
            onChange={ this.handleChange }
          />
        </label>
        <Link exact to="/carteira">
          <button
            type="button"
            disabled={ !this.checkDataLogin() }
          >
            Entrar
          </button>
        </Link>

      </form>
    );
  }
}

export default Login;
