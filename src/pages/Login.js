import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <div>
        <Input
          labelText="Email:"
          name="email"
          testId="email-input"
          inputType="email"
          inputPlaceholder="Digite aqui o seu email"
          onChange={ console.log }
        />
        <Input
          labelText="Senha:"
          name="password"
          testId="password-input"
          inputType="password"
          inputPlaceholder="Digite aqui a sua senha"
          onChange={ console.log }
        />
        <Button
          buttonText="Entrar"
          onClick={ console.log }
        />
      </div>
    );
  }
}

export default Login;
