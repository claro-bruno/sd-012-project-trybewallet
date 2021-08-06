import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { emailAction } from '../actions';

class Login extends React.Component {
  render() {
    return (
      <div className="login-area">
        <input
          type="text"
          placeholder="Insira seu e-mail aqui :)"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Insira sua senha aqui"
          data-testid="password-input"
        />
        <Link to="/wallet">
          <button type="button">ENTRAR</button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(emailAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);
