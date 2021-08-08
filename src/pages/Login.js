import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authAction, loginAction } from '../actions';
import trybe from '../images/trybe-logo.png';
// - A rota para esta página deve ser "/"
// - Existe um local para que o usuário insira seu email e senha
// - Existe um botão com o texto "Entrar"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.authenticator = this.authenticator.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { email } = this.state;
    const { loginDispatch } = this.props;
    loginDispatch(email);
    this.setState({
      redirect: true,
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.authenticator());
  }

  async authenticator() {
    const { email, password } = this.state;
    const { authDispatch } = this.props;
    const emailReg = /^[a-z0-9_.]+@[a-z0-9]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const MIN_LEN = 6;
    await authDispatch(emailReg.test(email) && password.length >= MIN_LEN);
  }

  render() {
    const { email, password, redirect } = this.state;
    const { canAuthenticate } = this.props;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div className="login">
        <div className="logo-div">
          <div className="logo">
            <img src={ trybe } alt="trybe logo" className="trybe" />
            <h1 className="wallet">wallet</h1>
          </div>
        </div>
        <form className="forms-div">
          <h2>Login</h2>
          <label htmlFor="email-input" className="form-label">
            Email
            <input
              data-testid="email-input"
              type="email"
              name="email"
              className="form-control"
              id="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input" className="form-label">
            Senha
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password-input"
              className="form-control"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            className="btn btn-success"
            onClick={ this.handleClick }
            disabled={ !canAuthenticate }
          >
            ENTRAR
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  canAuthenticate: user.canAuthenticate,
});

const mapDispatchToProps = (dispatch) => ({
  authDispatch: (isAuth) => dispatch(authAction(isAuth)),
  loginDispatch: (email) => dispatch(loginAction(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  canAuthenticate: PropTypes.bool.isRequired,
  authDispatch: PropTypes.func.isRequired,
  loginDispatch: PropTypes.func.isRequired,
};
