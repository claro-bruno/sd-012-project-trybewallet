import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          label="Email"
          data-testid="email-input"
        />
        <input
          label="Password"
          type="password"
          data-testid="password-input"
        />
        <button
          type="button"
          // disabled={ disabled }
          // onClick={ () => submitEmail(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
