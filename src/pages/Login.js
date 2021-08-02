import React from 'react';
import '../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // inputEmail: '',
      // inputPassword: '',
    };
  }

  render() {
    return (
      <div className="container">
        <div className="login-container">
          <input className="login" type="text" data-testid="email-input" />
          <input className="login" type="text" data-testid="password-input" />
          <button className="btn" type="submit">Entrar</button>
        </div>
      </div>);
  }
}

export default Login;
