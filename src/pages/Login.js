import React from 'react';
import Input from '../components/Input';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <section className="login-page">
        <h1>TRYBE WALLET</h1>
        <form className="login-section">
          <Input
            type="email"
            name="email"
            testID="email-input"
            placeHolder="E-mail"
            value={ email }
            onChange={ this.handleChange }
          />
          <Input
            type="password"
            name="password"
            testID="password-input"
            placeHolder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <button type="button">ENTRAR</button>
        </form>
      </section>
    );
  }
}

export default Login;
