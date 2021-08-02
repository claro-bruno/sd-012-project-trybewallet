import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enable: false,
    };
  }

  render() {
    const { email, password, enable } = this.state;
    return (
      <main>
        <section>
          <input
            data-testid="email-input"
            type="text"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            value={ password }
            placeholder="Password"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.handleSaveLogin }
            disabled={ enable }
          >
            ENTRAR
          </button>
        </section>
      </main>
    );
  }
}

export default Login;
