import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // handleSubmit() {
  //   const { loginChange } = this.props;
  //   const { email, password } = this.state;
  //   loginChange(email, password);
  //   this.setState({ shouldRedirect: true });
  // }

  render() {
    const { shouldRedirect, email, password } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/registeredclients" />;
    }
    return (
      <div>
        <h3>Login</h3>
        <label htmlFor="email">
          E-mail
          <input
            name="email"
            id="email"
            data-testid="email-input"
            type="text"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            id="password"
            data-testid="password-input"
            type="text"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
