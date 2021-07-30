import React from 'react';
import trybeWalletLogo from '../images/logo-trybe-wallet.png';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoginFields = this.renderLoginFields.bind(this);
  }

  handleSubmit() {
    // será implementada logica para login
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderLoginFields() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <img
          className="logo-login"
          src={ trybeWalletLogo }
          alt="trybe-wallet-logo"
        />
        <div className="fields-content">
          <label htmlFor="login-email">
            <input
              data-testid="email-input"
              name="email"
              type="email"
              id="login-email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Email"
            />
          </label>
          <label htmlFor="login-password">
            <input
              data-testid="password-input"
              name="password"
              type="password"
              id="login-password"
              value={ password }
              onChange={ this.handleChange }
              placeholder="password"
            />
          </label>
          <button
            type="submit"
            onClick={ () => {} }
          >
            Entrar

          </button>
        </div>
      </fieldset>
    );
  }

  render() {
    return (
      <div className="login-page">
        <form className="login-form" action="get">
          {this.renderLoginFields()}
        </form>
      </div>
    );
  }
}

export default Login;
