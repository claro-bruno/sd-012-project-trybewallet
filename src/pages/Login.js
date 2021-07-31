import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  isValid() {
    const { email, password } = this.state;
    const patternEmail = /(.*)@(.*).com/;
    const SEIS = 6;
    if (patternEmail.test(email) && password.length >= SEIS) {
      return true;
    }
    return false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          disabled={ !this.isValid() }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
