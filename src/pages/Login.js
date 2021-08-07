import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmailInput } from '../actions/index';

const MIN_LENGTH_PASSWORD = 6;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleClick() {
    const { setEmailInputStore } = this.props;
    const { email, password } = this.state;
    setEmailInputStore({ email, password });
  }

  // Requisito 2 - para validar o email usei regex da source: https://ui.dev/validate-email-address-javascript/
  loginVerification() {
    const { email, password } = this.state;
    const emailVerification = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    return (emailVerification.test(email)
    && password.length >= MIN_LENGTH_PASSWORD);
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        Login
        <form>
          <input
            value={ email }
            name="email"
            type="text"
            placeholder="Email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            value={ password }
            name="password"
            type="text"
            placeholder="Senha"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <Link to="/carteira">
            <button
              type="button"
              onClick={ this.handleClick }
              disabled={ !this.loginVerification() }
            >
              Entrar
            </button>
          </Link>

        </form>
      </>
    );
  }
}

Login.propTypes = {
  setEmailInputStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmailInputStore: (emailInput) => dispatch(addEmailInput(emailInput)),
});

export default connect(null, mapDispatchToProps)(Login);
