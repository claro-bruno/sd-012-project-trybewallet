import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email:'',
    }
  }

  render() {
    const { email } = this.state;
    const { loginBtn } = this.props;
    return (
      <form>
        <h1>Login</h1>);
        <input
        data-testid="email-input"
        type="email"
        placeholder="e-mail"
        value={ email }
        name="email"
        />
        <input
        data-testid="password-input"
        type="password"
        placeholder="senha"
        name="password"
        minLength="6"
        />
        <button
        type="submit"
        onClick={ loginBtn }
        >
          Entrar
        </button>
      </form>
    )
  }
}

export default Login;
