import React from 'react';
import '../App.css';

const validEmail = /^[a-z0-9](\.|-|_|[a-z]|\d)+@([a-z]|\d)+\.[a-z]{2,3}(\.[a-z]{2})?$/;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
      login: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validator = this.validator.bind(this);
  }

  validator() {
    const { Email, Password } = this.state;
    const validPassword = 6;
    const testEmail = validEmail.test(Email);
    const testPassword = Password.length >= validPassword;
    if (testEmail && testPassword) {
      this.setState({
        login: true,
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.validator());
  }

  handleSubmit(event) {
    event.preventDefault();
    const { login } = this.state;
    if (login) {
      console.log('funcionou');
    }
  }

  render() {
    const { Email, Password, login } = this.state;
    return (
      <div className="container">
        <div className="login-container">
          <input
            onChange={ this.handleChange }
            value={ Email }
            name="Email"
            className="login"
            type="text"
            data-testid="email-input"
          />
          <input
            onChange={ this.handleChange }
            value={ Password }
            name="Password"
            className="login"
            type="text"
            data-testid="password-input"
          />
          <button
            text="Entrar"
            disabled={ !login }
            className="btn"
            type="submit"
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </div>
      </div>);
  }
}

export default Login;
