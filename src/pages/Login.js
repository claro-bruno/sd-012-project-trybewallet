import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: false,
    };
    this.handleLoginInfoChange = this.handleLoginInfoChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChang = this.handlePassChang.bind(this);
    this.handleSaveEmail = this.handleSaveEmail.bind(this);
  }

  handleLoginInfoChange() {
    const regexMail = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const regexPassword = /[\w\D]{5}/g;
    const { email, password } = this.state;
    return (regexMail.test(email) && regexPassword.test(password));
  }

  handleEmailChange({ target: { value } }) {
    this.setState({ email: value, disable: this.handleLoginInfoChange() });
  }

  handlePassChang({ target: { value } }) {
    this.setState({ password: value, disable: this.handleLoginInfoChange() });
  }

  handleSaveEmail() {
    const { SetEmailStore } = this.props;
    const { email } = this.state;
    SetEmailStore(email);
  }

  render() {
    const { disable } = this.state;
    return (
      <div>
        <form>
          <img src="https://www.bootgum.com/wp-content/uploads/2018/07/Wallet_Cash_550px.gif" alt="oh no" />
          <input
            placeholder="Email"
            type="email"
            onChange={ this.handleEmailChange }
            data-testid="email-input"
          />
          <input
            placeholder="Password"
            type="password"
            onChange={ this.handlePassChang }
            data-testid="password-input"
          />
          <Link to="/carteira">
            <button type="button" disabled={ !disable } onClick={ this.handleSaveEmail }>
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  SetEmailStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  SetEmailStore: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
