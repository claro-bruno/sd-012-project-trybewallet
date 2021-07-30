import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
    };
  }

  // abração ao saulo kirchmaier da turma 9 que me deu varios insights de como fazer o botão ficar desativado

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => { this.buttonHandler(); });
  }

  buttonHandler() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const passwordRegex = /[\w\D]{4}/g;
    if (email.match(emailRegex) && password.match(passwordRegex)) {
      this.setState({
        buttonDisable: false,
      });
    }
  }

  render() {
    const { email, password, buttonDisable } = this.state;
    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="input-email">
          E-mail:
          <input
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
            type="email"
            id="input-email"
            value={ email }
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            name="password"
            onChange={ this.handleChange }
            type="password"
            id="input-password"
            value={ password }
          />
        </label>
        <button
          data-testid="password-input"
          type="submit"
          disabled={ buttonDisable }
        >
          Entrar
        </button>
      </form>

    );
  }
}

export default Login;
