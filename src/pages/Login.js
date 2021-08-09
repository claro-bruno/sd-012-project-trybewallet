import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkEmailAndPassword = this.checkEmailAndPassword.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  checkEmailAndPassword() {
    const { email, password } = this.state;

    const passwordMinLength = 6;

    if (password.length >= passwordMinLength) {
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (emailPattern.test(email)) return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <Input
          type="email"
          name="email"
          dataTestId="email-input"
          handleChange={ this.handleChange }
        />

        <Input
          type="text"
          name="password"
          dataTestId="password-input"
          handleChange={ this.handleChange }
        />

        <Button
          name="login-button"
          text="Entrar"
          disableButton={ !this.checkEmailAndPassword() }
        />
      </div>
    );
  }
}

export default Login;
