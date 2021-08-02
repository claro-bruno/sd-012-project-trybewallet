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
    this.handleChange = this.handleChange.bind(this);
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
          name="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderEnterButton() {
    return (
      <button
        type="submit"
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
