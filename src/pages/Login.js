import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Login</h1>
        ;
        <form>
          <input
            data-testid="email-input"
            value={ email }
            type="text"
            name="email"
          />
          <input
            data-testid="password-input"
            vaçue={ password }
            id="password"
            name="password"
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}
export default Login;
