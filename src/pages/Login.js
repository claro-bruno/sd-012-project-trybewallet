import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     email: '',
  //     password: '',
  //   };
  // }

  render() {
    return (
      <div>
        <Input
          type="email"
          name="email"
          dataTestId="email-input"
        />

        <Input
          type="text"
          name="password"
          dataTestId="password-input"
        />

        <Button
          name="login-button"
          text="Entrar"
        />
      </div>
    );
  }
}

export default Login;
