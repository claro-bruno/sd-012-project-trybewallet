import React from 'react';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <form>
          <h3>TrybeWallet</h3>
          <input type="text" name="email" data-testid="email-input" />
          <input type="password" name="password" data-testid="password-input" />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
