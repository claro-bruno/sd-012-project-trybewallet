import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        Login
        <label htmlFor="email" data-testid="email-input">
          <input type="email" name="email" placeholder="email" required />
        </label>
        <label htmlFor="senha" data-testid="password-input">
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            required
            minLength="8"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
