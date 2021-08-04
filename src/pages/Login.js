import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, number, string, objectOf, oneOfType, object } from 'prop-types';
import { newEmail } from '../actions';
import logo from '../assets/logo.png';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.isEligible = this.isEligible.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  setEmail({ target }) {
    const { value } = target;

    this.setState(() => ({
      email: value,
    }));
  }

  setPassword({ target }) {
    const { value } = target;

    this.setState(() => ({
      password: value,
    }));
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  isEligible(email, password) {
    const six = 6;
    const isPswEligible = password.length >= six;
    const isEmailEligible = this.validateEmail(email);
    if (isEmailEligible && isPswEligible) return true;
    return false;
  }

  submitLogin(history) {
    return history.push('/carteira');
  }

  render() {
    const { dispatchSubmitLogin, history } = this.props;
    const { email, password } = this.state;

    return (
      <div className="login">
        <form className="login__form">
          <img
            src={ logo }
            alt="logo trybe"
            className="login__img"
          />

          <h1>Wallet</h1>

          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            data-testid="email-input"
            value={ email }
            onChange={ this.setEmail }
          />

          <input
            type="password"
            id="password"
            placeholder="password"
            data-testid="password-input"
            onChange={ this.setPassword }
          />

          <button
            type="submit"
            disabled={ !this.isEligible(email, password) }
            className="login__button"
            onClick={ (e) => {
              e.preventDefault();
              dispatchSubmitLogin(email);
              this.submitLogin(history);
            } }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSubmitLogin: (email) => dispatch(newEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchSubmitLogin: func.isRequired,
  history: objectOf(oneOfType([func, string, number, object])).isRequired,
};
