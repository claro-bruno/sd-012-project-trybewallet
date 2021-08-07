import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      bttnDisable: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  validation() {
    const passwordMinlLength = 6;
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { password, email } = this.state;
    if (password.length >= passwordMinlLength && email.match(re)) {
      this.setState({
        bttnDisable: false,
      });
    } else {
      this.setState({
        bttnDisable: true,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validation());
  }

  render() {
    const { email, password, bttnDisable } = this.state;
    return (
      <form>
        <label htmlFor="E-mail">
          <input
            required
            type="email"
            data-testid="email-input"
            value={ email }
          />
        </label>
        <label htmlFor="Paassword">
          <input
            required
            type="password"
            data-testid="password-input"
            value={ password }
          />
        </label>
        <button disabled={ bttnDisable } type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
