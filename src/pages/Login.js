import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <form>
          <Input
            placeholder="E-mail"
            type="email"
            id="email-input"
            // value={ email }
            name="email"
            // change={ this.handleChange }
          />
          <Input
            placeholder="Senha"
            type="password"
            id="password-input"
            // value={ password }
            name="password"
            // change={ this.handleChange }
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
