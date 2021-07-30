import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputText: '',
      passwordInputText: '',
      emailIsValid: false,
      passwordIsValid: false,
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkEnableSubmit = this.checkEnableSubmit.bind(this);
  }

  checkEnableSubmit() {
    const { emailIsValid, passwordIsValid } = this.state;
    this.setState({
      enableSubmit: emailIsValid && passwordIsValid,
    });
  }

  handleChangeEmail(event) {
    const emailPattern = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    this.setState({
      emailInputText: event.target.value,
      emailIsValid: emailPattern.test(String(event.target.value)),
    }, () => (this.checkEnableSubmit()));
  }

  handleChangePassword(event) {
    const passwordMinLength = 6;
    this.setState({
      passwordInputText: event.target.value,
      passwordIsValid: (event.target.value.length >= passwordMinLength),
    }, () => (this.checkEnableSubmit()));
  }

  render() {
    const {
      emailInputText,
      passwordInputText,
      enableSubmit,
    } = this.state;
    return (
      <div>
        <form onSubmit={ this.submitLogin }>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              id="email-input"
              data-testid="email-input"
              value={ emailInputText }
              onChange={ this.handleChangeEmail }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              id="password-input"
              data-testid="password-input"
              value={ passwordInputText }
              onChange={ this.handleChangePassword }
            />
          </label>
          <button
            type="submit"
            disabled={ !enableSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
