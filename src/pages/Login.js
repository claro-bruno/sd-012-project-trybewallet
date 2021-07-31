import React from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmailAction } from '../actions';
import ButtonEntrar from '../components/LoginControlled/ButtonEntrar';
import InputEmail from '../components/LoginControlled/InputEmail';
import InputPassword from '../components/LoginControlled/InputPassword';

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
    const {
      state: { email },
      props: { emailDispatch },
    } = this;

    emailDispatch(email);
    this.setState((state) => ({ ...state, shouldRedirect: true }));
  }

  render() {
    const {
      state: { email, password, shouldRedirect },
      handleChange,
      handleClick,
    } = this;

    const VALID_CARACTERES = 6;
    const emailValidation = email.includes('@' && '.com');
    const passwordValidation = password.length >= VALID_CARACTERES;

    return (
      <section>
        { shouldRedirect && <Redirect to="/carteira" /> }
        <h1>Login</h1>
        <form>
          <InputEmail
            value={ email }
            handleChange={ handleChange }
          />
          <InputPassword
            value={ password }
            handleChange={ handleChange }
          />
          <ButtonEntrar
            disabled={ !(passwordValidation && emailValidation) }
            handleClick={ handleClick }
          />
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
