import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInputText: '',
      passwordInputText: '',
    };
  }

  render() {
    const { emailInputText, passwordInputText } = this.state;
    return (
      <div>
        <form onSubmit={ this.submitLogin }>
          <label htmlFor="email-input">
            Email:
            <input
              type="text"
              id="email-input"
              data-testid="email-input"
              value={ emailInputText }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              type="text"
              id="password-input"
              data-testid="password-input"
              value={ passwordInputText }
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
