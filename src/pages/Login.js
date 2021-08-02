import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.emailState = this.emailState.bind(this);
    this.passwordState = this.passwordState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, type } = target;
    this.setState({
      [type]: value,
    });
    if (this.emailState() && this.passwordState() === true) {
      this.setState({
        disable: false,
      });
    }
  }

  emailState() {
    const { email } = this.state;
    // regex disponabilizada no slack da turma em uma Thread de duvida
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    return regex.test(email);
  }

  passwordState() {
    const { password } = this.state;
    const letters = 5;
    if (password.length >= letters) {
      return true;
    } return false;
  }

  render() {
    const { disable } = this.state;
    return (
      <div>
        <div>Login</div>
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            data-testid="email-input"
            type="email"
            placeholder="E-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            id="passwordInput"
            data-testid="password-input"
            type="password"
            placeholder="Password"
            onChange={ this.handleChange }
          />
        </label>
        <button id="loginButton" type="submit" disabled={ disable }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
