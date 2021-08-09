import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h2>Login</h2>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              data-testId="email-input"
              name="email"
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              data-testId="password-input"
              name="password"
            />
          </label>
          <input
            type="button"
            name="Entrar"
            value="Entrar"
          />
        </form>
      </div>
    );
  }
}

export default Login;
