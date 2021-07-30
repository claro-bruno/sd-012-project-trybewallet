import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  submitLogin(e) {
    e.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <fieldset>
        <form
          onSubmit={ this.submitLogin }
        >
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <button type="submit">Entrar</button>
        </form>
      </fieldset>
    );
  }
}

export default Login;
