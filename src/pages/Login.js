import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  validateEmail() {
    const { email, password } = this.state;
    const re = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

    const emailTest = re.test(String(email).toLowerCase());
    const number = 6;
    const passwordTest = password.length >= number;

    if (emailTest && passwordTest) {
      return false;
    }
    return true;
  }

  handleOnChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="form-login">
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          placeholder="Email"
          onChange={ this.handleOnChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          placeholder="Senha"
          onChange={ this.handleOnChange }
        />
        <button type="submit" disabled={ this.validateEmail() }>Entrar</button>
      </form>);
  }
}

export default Login;
