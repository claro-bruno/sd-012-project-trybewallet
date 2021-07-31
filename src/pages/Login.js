import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';
import trybeWalletLogo from '../images/logo-trybe-wallet.png';
import './login.css';

const EMAIL_REGEX = /^(\.|-|_|[a-z]|\d)+@([a-z]|\d)+\.[a-z]{2,3}(\.[a-z]{2})?$/;
const MIN_PASSWORD_LENGTH = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false,
      redirect: false,
    };

    this.isValid = this.isValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoginFields = this.renderLoginFields.bind(this);
  }

  isValid() {
    const { email, password } = this.state;
    const checkEmail = EMAIL_REGEX.test(email);
    const checkPassword = password.length >= MIN_PASSWORD_LENGTH;
    this.setState({ isValid: checkEmail && checkPassword });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { login } = this.props;
    login(email);
    this.setState({ redirect: true });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.isValid());
  }

  renderLoginFields() {
    const { email, password, isValid } = this.state;
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
              placeholder="Password"
            />
          </label>
          <button
            disabled={ !isValid }
            type="submit"
            onClick={ this.handleSubmit }
          >
            Entrar

          </button>
        </div>
      </fieldset>
    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div className="login-page">
        <form className="login-form" method="get">
          {this.renderLoginFields()}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
