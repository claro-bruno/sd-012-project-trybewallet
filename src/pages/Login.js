import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.FormValidate = this.FormValidate.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.FormValidate();
  }

  FormValidate() {
    const { email, senha } = this.state;
    const lengthMin = 5;
    const validEmail = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/; // Regex criada por Rodrigo Merlone e disponibilizada no slack;
    if (validEmail.test(email) && senha.length >= lengthMin) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  render() {
    const { email, senha, disable } = this.state;
    return (
      <div>
        TrybeWallet
        <form>
          <label htmlFor="email">
            email:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              value={ email }
              placeholder="Digite seu email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="senha">
            senha:
            <input
              data-testid="password-input"
              type="password"
              id="senha"
              name="senha"
              value={ senha }
              placeholder="Digite sua senha"
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <Link to="/carteira">
          <button type="button" disabled={ disable }>Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Login;
