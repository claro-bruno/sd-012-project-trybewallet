import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
    <div>
      <img src="" alt="" />
      <Input
        label="Email"
        type="text"
        value={}
        name="email"
        onChange={}
        testId="email-input"
      />
      <Input
        label="Senha"
        type="text"
        value={}
        name="senha"
        onChange={}
        testId="password-input"
      />
      <Button
        text="Entrar"
        name="login"
        onClick={}
      />
    </div>
    );
  }
}

export default Login;
