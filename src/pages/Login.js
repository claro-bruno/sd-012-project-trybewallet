import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <Input
          label="Email"
          datatestid="email-input"
          type="email"
          value={ email }
          name="email"
          onChange={ this.handleChange }
        />

        <Input
          label="Password"
          datatestid="password-input"
          type="password"
          value={ senha }
          name="password"
          onChange={ this.handleChange }
        />

        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
