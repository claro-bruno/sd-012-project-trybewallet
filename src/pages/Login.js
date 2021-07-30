import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
