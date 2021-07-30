import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validation() {
    const { email, password } = this.state;
    const emailRegex = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    const minValue = 6;
    if (password.length >= minValue && emailRegex) {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <h2>Trybe</h2>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          name="email"
          onChange={ this.onChange }
        />
        <input
          type="text"
          data-testid="password-input"
          placeholder="password"
          name="password"
          onChange={ this.onChange }
        />
        <button
          disabled={ this.validation() }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
