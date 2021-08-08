import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="Input-do-email">
          <input
            id="Input-do-email"
            data-testid="email-input"
            type="email"
          />
        </label>
        <label htmlFor="Input-de-senha">
          <input
            id="Input-de-senha"
            data-testid="password-input"
            type="password"
          />
        </label>
        <button id="enterButton" type="button">
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
