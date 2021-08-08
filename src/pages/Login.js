import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import storeEmail from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      shouldRedirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Referencia validação regex do email:https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  emailChecker(value) {
    const emailRegex = new RegExp([
      '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
      '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])',
      '?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'].join(''));
    const emailIsValid = emailRegex.test(value);
    return emailIsValid;
  }

  passwordChecker(value) {
    const minChars = 6;
    const passIsValid = value.length >= minChars;
    return passIsValid;
  }

  handleChange({ target }) {
    const { name, value } = target;
    const valid = (name === 'email')
      ? this.emailChecker(value) : this.passwordChecker(value);
    this.setState({
      [name]: value,
      [`${name}IsValid`]: valid,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { saveEmail } = this.props;
    saveEmail(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, emailIsValid, passwordIsValid, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/carteira" />;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          name="email"
          type="email"
          placeholder="Email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !(emailIsValid && passwordIsValid) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(storeEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
