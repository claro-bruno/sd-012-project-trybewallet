import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          E-mail
          <input
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
            name="password"
            value={ password }
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
