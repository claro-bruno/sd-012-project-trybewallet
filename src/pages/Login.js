import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  checkLogin() {
    const { email, password } = this.state;
    const emailRegex = email.match(/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/);
    const lenPassword = 6;
    if (password.length >= lenPassword && emailRegex) {
      console.log('condicao correta');

      return false;
    }
    console.log('com erro');
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="inputEmail" data-testid="email-input">
          E-mail
          <input
            type="email"
            name="email"
            // value={ textLogin }
            placeholder="E-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="inputPassword" data-testid="password-input">
          Senha
          <input
            type="password"
            name="password"
            // value={ passwordLogin }
            placeholder="Senha"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ this.checkLogin() }>Entrar</button>
      </div>);
  }
}

export default Login;
