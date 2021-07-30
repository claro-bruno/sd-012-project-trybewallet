import React from 'react';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';

class Login extends React.Component {
  render() {
    return (
      <main>
        <InputEmail />
        <InputPassword />
        <button type="submit">Entrar</button>
      </main>
    );
  }
}

export default Login;
