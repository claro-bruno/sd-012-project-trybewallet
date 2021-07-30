import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, type, value, checked } }) {
    function newValue() {
      switch (type) {
      case 'checkbox': return checked;
      case 'number': return +value;
      default: return value;
      }
    }
    this.setState((state) => ({ ...state, [name]: newValue() }));
  }

  render() {
    const { state: { email, password }, handleChange } = this;
    return (
      <section>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              data-testid="email-input"
              value={ email }
              onChange={ handleChange }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              value={ password }
              onChange={ handleChange }
            />
          </label>
          <button
            type="button"
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
