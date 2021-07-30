import React from 'react';

class Home extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.handleButton(),
    );
  }

  handleButton() {
    const { email, password } = this.state;
    const jonas = 6;
    if (email.includes('@') && email.includes('.com') && password.length >= jonas) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    // console.log(this.state);
    return (
      <form>
        <label htmlFor="email">
          Email:
          {' '}
          <input
            value={ email }
            name="email"
            id="email"
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
            required
          />
        </label>
        <br />
        <br />
        <label htmlFor="password">
          Senha:
          {' '}
          <input
            value={ password }
            name="password"
            id="password"
            data-testid="password-input"
            type="password"
            required
            minLength="6"
            onChange={ this.handleChange }
          />
        </label>
        <button
          disabled={ disabled }
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Home;
