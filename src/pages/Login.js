import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validFields: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
    this.checkFields();
  }

  checkFields() {
    const { email, password } = this.state;
    const validationEmail = /\S+@\S+\.\S+/;
    const checkEmail = validationEmail.test(email);
    const minPassword = 5;
    const checkPassword = password.length >= minPassword;
    if (checkEmail && checkPassword) {
      this.setState({
        validFields: true,
      });
    }
  }

  render() {
    const { validFields } = this.state;
    return (
      <form>
        <input
          name="email"
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !validFields }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
