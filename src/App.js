import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <span>Password: </span>
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default App;
