import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, disabled } = this.state;

    const validation = /^\S+@\S+\.\S+$/;
    const minLength = 6;
    const validateEmail = validation.test(email);
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            name="email"
            placeholder="E-mail"
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            name="password"
            minLength="6"
            placeholder="Senha"
            data-testid="password-input"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
          <Link to="/carteira">
            {validateEmail && password.length >= minLength && disabled
              ? (
                <button
                  type="submit"
                >
                  Entrar
                </button>
              ) : (
                <button
                  disabled
                  type="submit"
                >
                  Entrar
                </button>
              )}
          </Link>
        </form>
      </div>
    );
  }
}
