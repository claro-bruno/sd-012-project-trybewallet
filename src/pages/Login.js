import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
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
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="input-email">
          E-mail:
          <input
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
            type="email"
            id="input-email"
            value={ email }
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            name="password"
            onChange={ this.handleChange }
            type="password"
            id="input-password"
            value={ password }
          />
        </label>
        <button data-testid="password-input" type="submit" disabled>Entrar</button>
      </form>

    );
  }
}

export default Login;
