import React from 'react';
import Input from '../components/Input';

const MININUM_SIZE_PASSWORD = 5;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validateEmail();
  }

  validateEmail() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= MININUM_SIZE_PASSWORD;
    const areUserInfosValid = isValidEmail && isValidPassword;

    if (areUserInfosValid) {
      this.setState({ isButtonDisabled: false });
    }
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;

    return (
      <>
        <Input
          name="email"
          label="Email: "
          type="email"
          testId="email-input"
          value={ email }
          onChange={ this.handleChange }
          required
        />
        <Input
          name="password"
          label="Senha: "
          type="password"
          testId="password-input"
          value={ password }
          onChange={ this.handleChange }
          required
        />
        <button type="button" disabled={ isButtonDisabled }>
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
