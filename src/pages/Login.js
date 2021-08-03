import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, senha } = this.state;

    return (
      <div>
        <input
          type="email"
          name="email"
          value={ email }
          handleChange={ this.handleChange }
          data-testid="email-input"
        />

        <input
          type="password"
          name="senha"
          value={ senha }
          handleChange={ this.handleChange }
          data-testid="password-input"
        />

        <button type="button">Entrar </button>
      </div>
    );
  }
}

export default Login;
