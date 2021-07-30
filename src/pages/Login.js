import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input type="email" data-testid="email-input" name="email" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" data-testid="password-input" name="email" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
