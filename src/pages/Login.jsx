import React from 'react';
import { connect } from 'react-redux';
import actionSaveEmail from '../actions';

class Login extends React.Component {
  render() {
    return (
      <section className="login-container">
        <form action="#" className="login-form">
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="email@exemplo.com"
              data-testid="email-input"
              className="login-input"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              data-testid="password-input"
              className="login-input"
            />
          </label>
          <button type="submit" className="login-btn">Entrar</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(actionSaveEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
