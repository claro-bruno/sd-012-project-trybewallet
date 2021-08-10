import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  inputValidation() {
    const { email, password } = this.state;
    const minPassword = 6;
    if (email || password >= minPassword) {
      return this.setState({
        disableButton: false,
      });
    }
  }

  render() {
    const { email, password, disableButton } = this.state;
    return (
      <div>
        <form>
          <h2>Login</h2>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              data-testId="email-input"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              data-testId="password-input"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <input
            type="button"
            name="Entrar"
            value="Entrar"
            disabled={ disableButton }
          />
        </form>
      </div>
    );
  }
}

export default Login;
