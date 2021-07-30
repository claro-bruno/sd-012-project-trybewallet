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
      <section>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              value={ email }
              placeholder="Email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="password">
            <input
              type="text"
              name="password"
              id="password"
              value={ password }
              placeholder="Password"
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
