import React from 'react';
import Input from '../components/Input';

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
    </div>
    );
  }
}

export default Login;
