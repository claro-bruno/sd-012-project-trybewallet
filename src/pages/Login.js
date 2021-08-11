import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setUserEmail, setInitialWalletState } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputText: '',
      passwordInputText: '',
      emailIsValid: false,
      passwordIsValid: false,
      enableSubmit: false,
      canRedirect: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.checkEnableSubmit = this.checkEnableSubmit.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  checkEnableSubmit() {
    const { emailIsValid, passwordIsValid } = this.state;
    this.setState({
      enableSubmit: emailIsValid && passwordIsValid,
    });
  }

  handleChangeEmail(event) {
    // Regex dica do colega Rodrigo Merlone via Slack:
    const emailPattern = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    this.setState({
      emailInputText: event.target.value,
      emailIsValid: emailPattern.test(event.target.value),
    }, () => (this.checkEnableSubmit()));
  }

  handleChangePassword(event) {
    const passwordMinLength = 6;
    this.setState({
      passwordInputText: event.target.value,
      passwordIsValid: (event.target.value.length >= passwordMinLength),
    }, () => (this.checkEnableSubmit()));
  }

  submitLogin() {
    const { setEmail, initializeWallet } = this.props;
    const { emailInputText } = this.state;
    setEmail(emailInputText);
    initializeWallet();
    this.setState({
      canRedirect: true,
    });
  }

  render() {
    const {
      emailInputText,
      passwordInputText,
      enableSubmit,
      canRedirect,
    } = this.state;
    if (canRedirect) {
      return (
        <Redirect to="/carteira" />
      );
    }
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              type="email"
              id="email-input"
              data-testid="email-input"
              value={ emailInputText }
              onChange={ this.handleChangeEmail }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              id="password-input"
              data-testid="password-input"
              value={ passwordInputText }
              onChange={ this.handleChangePassword }
            />
          </label>
          <button
            type="button"
            disabled={ !enableSubmit }
            onClick={ this.submitLogin }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
  initializeWallet: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setUserEmail(email)),
  initializeWallet: () => dispatch(setInitialWalletState()),
});

export default connect(null, mapDispatchToProps)(Login);
