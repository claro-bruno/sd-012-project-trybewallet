import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <div>
          <label htmlFor="email" data-testid="email-input">
            Email:
            <input
              type="text"
              id="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password" data-testid="password-input">
            Senha:
            <input
              type="password"
              id="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <button type="submit">Entrar</button>
      </section>
    );
  }
}

export default Login;
