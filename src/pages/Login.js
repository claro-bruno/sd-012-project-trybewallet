import React from 'react';
import '../App.css';

const ERRORS = {
  errorEmail: 'Email inválido',
  errorPassword: 'Password inválido',
};

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  render() {
    const {
      state: { email, password },
      handleChange,
    } = this;

    const { errorEmail, errorPassword } = ERRORS;

    return (
      <section>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ handleChange }
              placeholder="Digite o Email"
            />
            <span>{ errorEmail }</span>
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              value={ password }
              onChange={ handleChange }
              placeholder="digite a Senha"
            />
            <span>{ errorPassword }</span>
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
