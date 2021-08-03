import React from 'react';
import GenericButton from '../components/GenericButton';
import UserInputs from '../components/UserInputs';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.checkLogin);
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return re.test(email);
  }

  validatePassword() {
    const { password } = this.state;
    const minLength = 6;
    return password.length >= minLength;
  }

  checkLogin() {
    this.setState({
      disabled: !(this.validateEmail() && this.validatePassword()),
    });
  }

  render() {
    const { disabled } = this.state;

    const emailInputProps = {
      id: 'email-input',
      name: 'email',
      innerHtml: 'Email',
      type: 'text',
      onChange: this.handleChange,
    };

    const passwordInputProps = {
      id: 'password-input',
      name: 'password',
      innerHtml: 'Senha',
      type: 'password',
      onChange: this.handleChange,
    };

    const loginBtnProps = {
      value: 'Entrar',
      disabled,
    };

    return (
      <>
        <UserInputs { ...emailInputProps } />
        <UserInputs { ...passwordInputProps } />
        <GenericButton { ...loginBtnProps } />
      </>
    );
  }
}

export default Login;
