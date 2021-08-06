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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          label="Email: "
          type="email"
          testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />

        <Input
          label="Senha: "
          type="password"
          testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />

        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
