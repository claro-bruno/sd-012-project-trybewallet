import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <Input
          type="email"
          name="email"
          id="id-email"
          label="Email: "
          onChange={ this.handleChange }
          value={ email }
          testId="email-input"
        />
        <Input
          type="password"
          name="password"
          id="id-password"
          label="Senha: "
          onChange={ this.handleChange }
          value={ password }
          testId="password-input"
        />
        <Button
          label="Entrar"
        />
      </form>

    );
  }
}

export default Login;
