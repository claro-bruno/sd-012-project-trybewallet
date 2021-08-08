import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // Referencia validação regex do email:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  emailChecker(value) {
    const emailRegex = new RegExp([
      '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
      '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])',
      '?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'].join(''));
    const emailIsValid = emailRegex.test(value);
    return emailIsValid;
  }

  passwordChecker(value) {
    const minChars = 6;
    const passIsValid = value.length >= minChars;
    return passIsValid;
  }

  handleChange({ target }) {
    const { name, value } = target;
    const valid = (name === 'email')
      ? this.emailChecker(value) : this.passwordChecker(value);
    this.setState({
      [name]: value,
      [`${name}IsValid`]: valid,
    });
  }

  render() {
    const { email, password, emailIsValid, passwordIsValid } = this.state;
    return (
      <form>
        <input
          name="email"
          type="email"
          placeholder="Email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !(emailIsValid && passwordIsValid) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
