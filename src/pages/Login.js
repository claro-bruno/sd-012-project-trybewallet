import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  checkValidation() {
    const { email, password } = this.state;
    const regexEmail = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const minPasswordLength = 6;
    const isValid = regexEmail.test(email) && password.length >= minPasswordLength;
    this.setState({ isValid });
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }), () => this.checkValidation());
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <span>Password: </span>
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !isValid }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
