import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends Component {
  render() {
    return (
      <div>
        <Input
          dataTestid="email-input"
          name="login"
          placeholder="E-mail"
          value=""
          onChange={ () => {} }
        />
        <Input
          dataTestid="password-input"
          name="senha"
          placeholder="Senha"
          value=""
          onChange={ () => {} }
        />
        <Button name="entrar" onClick={ () => {} } />
      </div>
    );
  }
}

export default Login;
