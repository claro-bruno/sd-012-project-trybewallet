import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login">
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="text"
            placeholder="Password"
            data-testid="password-input"
          />
          <button type="button">Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
