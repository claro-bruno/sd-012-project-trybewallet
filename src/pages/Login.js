import React from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmailAction } from '../actions';

const ERRORS = {
  errorEmail: 'Email inválido',
  errorPassword: 'Password inválido',
};

const VALID_CARACTERES = 6;

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  handleClick() {
    const { state: { email }, props: { emailDispatch } } = this;
    emailDispatch(email);
    this.setState((state) => ({ ...state, shouldRedirect: true }));
  }

  render() {
    const { handleChange, handleClick } = this;
    const { email, password, shouldRedirect } = this.state;
    const { errorEmail, errorPassword } = ERRORS;
    const emailValidation = email.includes('@' && '.com');
    const passwordValidation = password.length >= VALID_CARACTERES;

    return (
      <section>
        { shouldRedirect && <Redirect to="/carteira" /> }
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ handleChange }
              placeholder="Digite o Email"
            />
            { !emailValidation && <span>{ errorEmail }</span> }
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              value={ password }
              onChange={ handleChange }
              placeholder="digite a Senha"
            />
            { !passwordValidation && <span>{ errorPassword }</span> }
          </label>
          <button
            type="button"
            disabled={ !(passwordValidation && emailValidation) }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(addEmailAction(email)),
});

const { func } = PropTypes;
Login.propTypes = {
  emailDispatch: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
