import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';
import '../CSS/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validEmail() {
    const { email } = this.state;
    const splittedEmail = email.split('@');
    if (splittedEmail[0] && splittedEmail[1] && splittedEmail.length === 2) {
      const lastPart = splittedEmail[1].split('.');
      if (lastPart[0] && lastPart[1] && lastPart.length === 2) {
        return lastPart[1] === 'com';
      }
    }
    return false;
  }

  handleChecked() {
    const { password } = this.state;
    const passwordLength = 6;
    return this.validEmail() && password.length >= passwordLength;
  }

  handleSubmit() {
    const { loginChange } = this.props;
    const { email } = this.state;
    loginChange(email);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, email, password } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form className="login-form">
        <h2>Login</h2>
        <label className="login-label" htmlFor="email">
          E-mail
          <input
            name="email"
            className="login-input"
            id="email"
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label className="login-label" htmlFor="password">
          Senha
          <input
            name="password"
            id="password"
            className="login-input"
            data-testid="password-input"
            type="text"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          className="login-button"
          type="button"
          disabled={ !this.handleChecked() }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>);
  }
}

Login.propTypes = {
  loginChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginChange: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
