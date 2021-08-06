import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { emailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
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
      <div className="login-area">
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
          <button type="button" disabled={ this.validateSubmit() } >ENTRAR</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(emailAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);
