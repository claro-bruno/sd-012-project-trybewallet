import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: '',
    });

    this.handleChange = this.handleChange.bind(this);
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
      <>
        <Input
          label="E-mail :"
          name="email"
          type="email"
          testid="email-input"
          id="email-input"
          value={ email }
          onChange={ this.handleChange }
        />

        <Input
          label="Password: "
          name="password"
          type="password"
          testid="password-input"
          id="password-input"
          value={ password }
          onChange={ this.handleChange }
        />

        <button type="submit">Entrar</button>

      </>
    );
  }
}

export default Login;
