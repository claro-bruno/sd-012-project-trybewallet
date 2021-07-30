import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-email">
            <input
              type="text"
              data-testid="email-input"
              placeholder="Insira seu email"
            />
          </label>
          <label htmlFor="input-password">
            <input
              type="password"
              data-testid="password-input"
              placeholder="Insira sua senha"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
