import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userLogin from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  emailValidation(email) {
    const regex = /\S+@\S+\.\S+/;

    const validation = regex.test(email);
    return validation;
  }

  passwordValidation(password) {
    const minimumLength = 6;
    return password.length >= minimumLength;
  }

  loginValidation() {
    const { email, password } = this.state;
    const login = this.emailValidation(email) && this.passwordValidation(password);
    return login;
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const canDoLogin = this.loginValidation();
    const { email } = this.state;
    const { saveEmailInRedux } = this.props;

    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ this.handleInput }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          onChange={ this.handleInput }
        />
        <Link
          onClick={ () => saveEmailInRedux(email) }
          to="/carteira"
        >
          <button type="button" disabled={ !canDoLogin }>
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  saveEmailInRedux: PropTypes.func.isRequired,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  saveEmailInRedux: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
