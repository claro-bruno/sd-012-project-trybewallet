import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            // value={this.state.value}
            // onChange={this.handleChange}
            data-testid="email-input"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
          />

          <input
            type="text"
            // value={this.state.value}
            // onChange={this.handleChange}
            data-testid="password-input"
            id="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  }
}

export default Login;
