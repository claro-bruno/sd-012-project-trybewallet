import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Trybe</h2>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
        />
        <input
          type="text"
          data-testid="password-input"
          placeholder="password"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
