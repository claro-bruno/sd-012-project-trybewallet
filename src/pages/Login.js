import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      shouldRedirect: false,
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.verifyLogin(name, value);
  }

  submit() {
    const { email } = this.state;
    const { sEmail } = this.props;
    sEmail(email);
    this.setState({ shouldRedirect: true });
  }

  verifyLogin(name, value) {
    let { email, senha } = this.state;
    const regexEmail = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const cinco = 5;
    if (name === 'email') { email = value; }
    if (name === 'password') { senha = value; }
    if (regexEmail.test(email) && senha.length >= cinco) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, senha, shouldRedirect, disabled } = this.state;
    if (shouldRedirect) return <Redirect to="/carteira" />;
    return (
      <div className="login-screen">
        <div className="login-box">
          <p className="login-title">TRYBE WALLET</p>
          <form className="form">
            <input
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              className="login-input"
              data-testid="email-input"
            />
            <input
              type="password"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
              className="login-input"
              data-testid="password-input"
            />
            <button
              type="button"
              onClick={ this.submit }
              className="login-button"
              disabled={ disabled }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sEmail: (email) => dispatch(saveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  sEmail: PropTypes.func.isRequired,
};
