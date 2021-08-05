import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Referencia de como validar email com regex em https://ui.dev/validate-email-address-javascript/
  emailValidation(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  checkPassword(password) {
    const passwordLength = 6;
    return password.length >= passwordLength;
  }

  handleClick(event) {
    event.preventDefault();
    const { login, history } = this.props;
    const { email } = this.state;
    login(email);
    history.push('/carteira');
  }

  checkLogin() {
    const { email, password } = this.state;
    return (this.emailValidation(email)) && (this.checkPassword(password));
  }

  render() {
    const { email, password } = this.state;

    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            required="true"
            minLength="6"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />

          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="submit"
            onClick={ (event) => this.handleClick(event) }
            disabled={ !(this.checkLogin()) }
          >
            Entrar
          </button>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(userLogin(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
