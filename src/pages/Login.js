import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmailUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.emailAndPasswordValidation = this.emailAndPasswordValidation.bind(this);
    this.handleChangeEmailAndPassword = this.handleChangeEmailAndPassword.bind(this);
  }

  handleChangeEmailAndPassword({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.emailAndPasswordValidation();
  }

  handleSubmitEmailToStore() {
    const { email } = this.state;
    const { setEmailAction } = this.props;
    setEmailAction(email);
  }

  emailAndPasswordValidation() {
    const { email, password } = this.state;
    const emailValidation = /(.*)@(.*).com/;
    const passwordValidationLenth = 5;

    if (emailValidation.test(email) && passwordValidationLenth <= password.length) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            <input
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Insira seu email"
              value={ email }
              onChange={ this.handleChangeEmailAndPassword }
            />
          </label>
          <label htmlFor="input-password">
            <input
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Insira sua senha"
              value={ password }
              onChange={ this.handleChangeEmailAndPassword }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ buttonDisabled }
              onClick={ this.handleSubmitEmailToStore() }
            >
              Entrar

            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailAction: (payload) => dispatch(setEmailUser(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  setEmailAction: PropTypes.func.isRequired,
};
