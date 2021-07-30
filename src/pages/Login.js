import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.emailAndPasswordValidation = this.emailAndPasswordValidation.bind(this);
    this.handleChangeEmailAndPassword = this.handleChangeEmailAndPassword.bind(this);
  }

  handleChangeEmailAndPassword({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.emailAndPasswordValidation();
  }

  emailAndPasswordValidation() {
    const { email, password } = this.state;
    const emailValidation = /(.*)@(.*).com/;
    const passwordValidationLenth = 5;

    if (emailValidation.test(email) && passwordValidationLenth <= password.length) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            <input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Insira seu email"
              value={ email }
              onChange={ this.handleChangeEmailAndPassword }
            />
          </label>
          <label htmlFor="input-password">
            <input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Insira sua senha"
              value={ password }
              onChange={ this.handleChangeEmailAndPassword }
            />
          </label>
          <Link to="/carteira">
            <button type="button" disabled={ buttonDisabled }>Entrar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
