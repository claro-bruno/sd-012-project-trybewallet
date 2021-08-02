import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInfo = this.handleUserInfo.bind(this);

    this.state = {
      email: '',
      senha: '',
    };
  }

  componentDidMount() {
    const botaoEntrar = document.querySelector('button');
    botaoEntrar.disabled = true;
  }

  componentDidUpdate() {
    const { email, senha } = this.state;
    if (senha && email) {
      this.handleValidation();
    }
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSubmit({ target }) {
    target.preventDefault();
  }

  handleUserInfo(email, senha) {
    const { dispatchUserInfo } = this.props;
    dispatchUserInfo(email, senha);
  }

  handleValidation() {
    const botaoEntrar = document.querySelector('button');
    botaoEntrar.disabled = true;
    const number = 6;
    const { email, senha } = this.state;
    const passLenght = senha.length;
    const emailValidation = /\S+@\S+\.\S+/.test(email);
    if (passLenght >= number && emailValidation === true) {
      botaoEntrar.disabled = false;
    }
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <h2>Login</h2>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              id="email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              data-testid="password-input"
              id="senha"
              type="password"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              onClick={
                () => this.handleUserInfo(email, senha)
              }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserInfo: (email, senha) => dispatch(userLogin(email, senha)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchUserInfo: propTypes.func.isRequired,
};
