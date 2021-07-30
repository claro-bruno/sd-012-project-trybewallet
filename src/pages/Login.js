import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  validation() {
    const passwordMinimalLen = 6;
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { password, email } = this.state;
    if (password.length >= passwordMinimalLen && email.match(re)) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validation());
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          E-mail
          <input
            required
            name="email"
            value={ email }
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input
            required
            name="password"
            value={ password }
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button disabled={ buttonDisabled } type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
