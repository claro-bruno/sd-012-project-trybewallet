import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const isEnabled = email.length > 0 && password.length > 0;

    return (
      <form>
        <label
          htmlFor="input-email"
        >
          E-mail:
          <input
            type="email"
            name="email"
            id="input-email"
            pattern="/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/"
            value={ email }
            onChange={ this.handleChangeEmail }
            data-testid="email-input"
          />
        </label>
        <label
          htmlFor="input-senha"
        >
          Senha:
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChangePassword }
            id="input-senha"
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ !isEnabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// utilizei o pattern RegEx fornecido pelo Rodrigo Merlone no canal do Slack

export default Login;
