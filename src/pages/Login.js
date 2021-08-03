import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <div>Login</div>
        <label htmlFor="email-input">
          Insira seu e-mail:
          <input
            data-testid="email-input"
            type="email"
            id="umail-id"
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password-input">
          Insira sua senha:
          <input
            data-testid="password-input"
            type="password"
            id="password-id"
            placeholder="Password"
          />
        </label>
        <button type="submit" id="button-submit">Entrar</button>
      </section>
    );
  }
}

export default Login;
