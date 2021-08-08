import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      email: '',
      password: '',
      redirect: true,
    }));
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <form onSubmit={ this.handleSubmit }>
        <h1>TrybeWallet</h1>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            minLength="6"
            onChange={ this.handleChange }
            required
          />
        </label>
        <button
          className="btn-login"
          type="submit"
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
