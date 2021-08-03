import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      password: '',
      email: '',
    };

    this.buttonDisable = this.buttonDisable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  buttonDisable() {
    const { password, email } = this.state;
    const lengthPass = 5;
    // Modelo base https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const regexEmail = /^[a-z0-9]+@[a-z0-9]+.com/;
    if (regexEmail.test(email) && password.length > lengthPass) return false;
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { user } = this.props;
    const { email } = this.state;
    user(email);
    return <Redirect to="/carteira" />;
  }

  render() {
    return (
      <div>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.onClick }
          disabled={ this.buttonDisable() }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({ user: (email) => dispatch(addEmail(email)) });

export default connect(null, mapDispatchToProps)(Login);
