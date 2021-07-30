import React from 'react';

class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      willredirect: false,
    }
  }
  render() {
    return (
      <div className="login">
        <section className="login-container">
          <label htmlFor="email">
            E-mail:
            <input
              type="text"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={}
            />
          </label> 

          <label htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              value={ password }
              onChange={ }
            />
          </label>
             
          <button
            type="button"
            className="login-button"
            onClick={}
          >
            Entrar
          </button>
        </section>
      </div>
    )
  }
}

export default Login;
