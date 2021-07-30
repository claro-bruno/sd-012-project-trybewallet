import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionSaveEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: true,
      validPassword: true,
      redirect: false,
      activeBtn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { email, password } = this.state;
    const emailValidate = /(.+)@(.+)\.(.+)/;
    const passwordValidate = /(.+){5,25}/;
    if (!emailValidate.test(email)) {
      this.setState({ validEmail: false, activeBtn: false });
      return false;
    }
    if (!passwordValidate.test(password)) {
      this.setState({ validPassword: false, activeBtn: false });
      return false;
    }
    this.setState({ activeBtn: true, validPassword: true, validEmail: true });
    return true;
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value, activeBtn: this.validate() });
  }

  handleClick(evt) {
    evt.preventDefault();
    const { saveEmail } = this.props;
    const { email } = this.state;
    if (this.validate()) {
      saveEmail(email);
      this.setState({ redirect: true });
    }
  }

  render() {
    const {
      email, password, redirect, activeBtn, validEmail, validPassword,
    } = this.state;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <section className="login-container">
        <h1>TrybeWallet</h1>
        <form action="#" className="login-form">
          <h2 className="login-title">Login</h2>
          <div className="login-inputs-container">
            <label htmlFor="email">
              Email
              <br />
              <input
                type="text"
                placeholder="email@exemplo.com"
                data-testid="email-input"
                className={ validEmail ? 'login-input' : 'invalid login-input' }
                name="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="password">
              Senha
              <br />
              <input
                type="password"
                data-testid="password-input"
                className={ validPassword ? 'login-input' : 'invalid login-input' }
                name="password"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="submit"
              className="login-btn"
              onClick={ this.handleClick }
              disabled={ !activeBtn }
            >
              Entrar
            </button>
          </div>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (payload) => dispatch(actionSaveEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
