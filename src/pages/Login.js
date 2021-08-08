import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { saveLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.saveLogin = this.saveLogin.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  saveLogin() {
    const { changeEmail } = this.props;
    const { email } = this.state;
    changeEmail(email);
  }

  validateEmail({ target: { value } }) {
    const characters = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (characters.test(value) === true) {
      this.setState({
        email: value,
      });
    }
  }

  validatePassword({ target: { value } }) {
    const minLength = 6;
    if (value.length >= minLength) {
      this.setState({
        password: value,
      });
    }
  }

  validateSubmit() {
    const { email, password } = this.state;
    if (email && password) return false;

    return true;
  }

  render() {
    return (
      <section className="login-section">
        <input
          type="text"
          placeholder="Insira seu e-mail aqui :)"
          data-testid="email-input"
          onChange={ (email) => this.validateEmail(email) }
        />
        <input
          type="password"
          placeholder="Insira sua senha aqui"
          data-testid="password-input"
          onChange={ (pass) => this.validatePassword(pass) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validateSubmit() }
            onClick={ () => this.saveLogin() }
          >
            ENTRAR
          </button>
        </Link>
      </section>
    );
  }
}

Login.propTypes = {
  changeEmail: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (payload) => dispatch(saveLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
