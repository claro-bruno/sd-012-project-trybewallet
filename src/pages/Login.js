import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  isValid() {
    const { email, senha } = this.state;
    const senhaLength = 6;
    const validEmail = (/^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/i).test(email);
    return !(validEmail && senha.length >= senhaLength);
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <Input
          dataTestid="email-input"
          name="email"
          type="text"
          placeholder="E-mail"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          dataTestid="password-input"
          name="senha"
          type="password"
          placeholder="Senha"
          value={ senha }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <Button name="entrar" disabled={ this.isValid() } />
        </Link>
      </div>
    );
  }
}

export default Login;
