import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderPasswordInput = this.renderPasswordInput.bind(this);
    this.renderEnterButton = this.renderEnterButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    const { email, password } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const NUMBER_SIX = 6;

    if (email.match(regex) && password.length >= NUMBER_SIX) {
      return false;
    }

    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  renderEmailInput() {
    const { email } = this.state;

    return (
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderPasswordInput() {
    const { password } = this.state;

    return (
      <label htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          name="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderEnterButton() {
    const isDisabled = this.validateForm();

    return (
      <button
        type="submit"
        disabled={ isDisabled }
      >
        Entrar
      </button>
    );
  }

  render() {
    return (
      <form>
        <h2>Login</h2>
        { this.renderEmailInput() }
        { this.renderPasswordInput() }
        { this.renderEnterButton() }
      </form>
    );
  }
}

export default Login;
