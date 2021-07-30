import React from 'react';
import paturso from '../Images/Paturso.png';
import '../Styles/login.css';

class Login extends React.Component {
  render() {
    return (
      <form>
        <img src={ paturso } alt="paturso logo" />
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Password"
          data-testid="password-input"
        />
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
