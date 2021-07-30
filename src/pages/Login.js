import React from 'react';
import { validatorLogin } from '../loginValidation';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          Senha:
          <input
            type="text"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ !validatorLogin(this.state) }>Entrar</button>
      </div>
    );
  }
}

export default Login;
