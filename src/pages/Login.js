import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loginChange } from '../actions/index';

const Login = ({ setLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setValidation] = useState(true);

  const validateEmail = (emailValue) => {
    const reg = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    setValidation(!reg.test(emailValue));
    setEmail(emailValue);
  };

  const passwordMaxLenght = 6;

  return (
    <form>
      <label htmlFor="email-input">
        E-mail:
        <input
          type="email"
          data-testid="email-input"
          id="email-input"
          value={ email }
          onChange={ ({ target }) => validateEmail(target.value) }
        />
      </label>
      <label htmlFor="password-input">
        Senha:
        <input
          type="password"
          data-testid="password-input"
          id="password-input"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>
      <Link to="/carteira">
        <button
          disabled={ disable || password.length < passwordMaxLenght }
          type="button"
          onClick={ () => setLogin(email) }
        >
          Entrar
        </button>
      </Link>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setLogin: (value) => dispatch(loginChange(value)),
});

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
