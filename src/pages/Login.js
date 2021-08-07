import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authAction, loginAction } from '../actions';
import wallet from '../images/wallet.png';
// - A rota para esta página deve ser "/"
// - Existe um local para que o usuário insira seu email e senha
// - Existe um botão com o texto "Entrar"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.authenticator = this.authenticator.bind(this);
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
    const { email, password } = this.state;
    const { canAuthenticate, loginDispatch } = this.props;
    return (
      <div className="login">
        <div className="logo-div">
          <img src={ wallet } alt="wallet" />
        </div>
        <form className="forms-div">
          <label htmlFor="email-input">
            Email
            <input
              data-testid="email-input"
              type="email"
              name="email"
              id="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              data-testid="password-input"
              type="password"
              name="password"
              id="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              onClick={ () => loginDispatch(email) }
              disabled={ !canAuthenticate }
            >
              ENTRAR
            </button>
          </Link>
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
