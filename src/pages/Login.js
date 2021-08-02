import React from 'react';
import history from '../history';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
      },
    };

    this.saveUser = this.saveUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      user: {
        email: e.target.value,
      },
    });
  }

  saveUser(e) {
    e.preventDefault();
    history.push('/carteira');
  }

  render() {
    const { user: { email } } = this.state;
    return (
      <div>
        <h2>Trybe Wallet</h2>
        <h3>Login de Usuário</h3>
        <label htmlFor="input-email">
          Insira seu e-mail:
          <input
            id="input-email"
            type="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Insira sua senha:
          <input
            id="input-password"
            type="password"
            data-testid="password-input"
            minLength="6"
          />
        </label>
        <button
          type="submit"
          onClick={ this.saveUser }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
