import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLoginName } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      activateLogin: true,
      passwordIsValid: false,
      emailIsValid: false,
      shouldRedirectToCarteira: false,

    };
    this.handleChangeInLogin = this.handleChangeInLogin.bind(this);
    this.initStart = this.initStart.bind(this);
    this.activateBtnLogin = this.activateBtnLogin.bind(this);
  }

  // manipulando input login
  handleChangeInLogin({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.activateBtnLogin();
  }

  initStart() {
    const { importLogin } = this.props;
    const { email } = this.state;
    importLogin(email);
    this.setState({
      shouldRedirectToCarteira: true,
    });
  }

  activateBtnLogin() {
    const { email, password } = this.state;
    const minimumPw = 5;
    const checkEmail = /.+@.+\.[A-Za-z]+$/;
    if (password.length >= minimumPw && checkEmail.test(email)) {
      this.setState({
        passwordIsValid: true,
        emailIsValid: true,
        activateLogin: false,
      });
    } else {
      this.setState({
        passwordIsValid: false,
        emailIsValid: false,
        activateLogin: true,
      });
    }
  }

  render() {
    const { email, password, activateLogin, emailIsValid,
      passwordIsValid, shouldRedirectToCarteira } = this.state;

    const tamanho = password.length;

    if (shouldRedirectToCarteira) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>
        <label htmlFor="email">
          E-mail:
          <input
            data-testid="email-input"
            value={ email }
            type="text"
            name="email"
            onChange={ this.handleChangeInLogin }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            value={ password }
            id="password"
            name="password"
            onChange={ this.handleChangeInLogin }
          />
        </label>
        <button
          type="button"
          disabled={ activateLogin }
          onClick={ this.initStart }
        >
          Entrar
        </button>
        <p>{activateLogin ? 'botão inativo' : 'pode logar'}</p>
        <p>{passwordIsValid ? 'pw ok' : 'pw errado'}</p>
        <p>{emailIsValid ? 'email ok' : 'email errado'}</p>
        <p>{password}</p>
        <p>{tamanho}</p>
        <p>{shouldRedirectToCarteira ? 'vai' : 'Fica'}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  importLogin: (state) => dispatch(saveLoginName(state)),
});

Login.propTypes = {
  importLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
