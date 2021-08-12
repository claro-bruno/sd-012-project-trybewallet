import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.setState = {
      email: '',
      senha: '',
    };
  }

  render() {
    return (
      <form>
        <label
          htmlFor="input-email"
        >
          E-mail:
          <input
            type="email"
            name="email"
            id="input-email"
            data-testid="email-input"
          />
        </label>
        <label
          htmlFor="input-senha"
        >
          Senha:
          <input
            type="password"
            name="senha"
            id="input-senha"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
