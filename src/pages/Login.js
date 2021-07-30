import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <fieldset>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="name"
            value={ email }
            type="text"
            onChange={ this.onChange }
            id="email"
            placeholder="Email"
          />
        </label>

        <label htmlFor="password">
          <input
            data-testid="password-input"
            name="name"
            value={ password }
            type="text"
            onChange={ this.onChange }
            id="password"
            placeholder="passoword"
          />
        </label>
        <button type="button">Entrar</button>
      </fieldset>
    );
  }
}

export default Login;
