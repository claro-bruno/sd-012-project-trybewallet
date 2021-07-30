import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>Login</div>
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            data-testid="email-input"
            type="email"
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="passwordInput">
          <input
            id="passwordInput"
            data-testid="password-input"
            type="password"
            placeholder="Password"
          />
        </label>
        <button id="loginButton" type="submit">
          Login
        </button>
      </div>
    );
  }
}

export default Login;
