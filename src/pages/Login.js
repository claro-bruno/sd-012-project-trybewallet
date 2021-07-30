import React from 'react';
import './login.css';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);

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
    // console.log(this.state);
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
        <form>
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
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
