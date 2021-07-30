import React from 'react';
// import { connect } from 'react-redux';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  validation() {
    const { email, password } = this.state;
    const emailVerify = /\S+@\S+\.\S+/;
    const passwordFormat = 6;
    if (emailVerify.test(email) && password.length >= passwordFormat) {
      return false;
    }
    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(({ [name]: value }), () => ({
      disable: this.validation(),
    }));
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          type="email"
          message="email"
          value={ email }
          handleChange={ this.handleChange }
        />
        <Input
          type="password"
          value={ password }
          message="password"
          handleChange={ this.handleChange }
        />
        <button type="submit" disabled={ this.validation() }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
