import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  submitForm() {
    const six = 6;
    const { email, password } = this.state;
    // const { history } = this.props;
    const emailRegex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const testEmail = emailRegex.test(email);
    if (testEmail && password.length >= six) {
      console.log('está valido');
      // history.push('/carteira');
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <Input
          type="text"
          name="email"
          label="Insira o seu e-mail: "
          testId="email-input"
          value={ email }
          onChange={ this.handleInput }
        />
        <Input
          type="text"
          name="password"
          label="Insira a sua senha: "
          value={ password }
          testId="password-input"
          onChange={ this.handleInput }
        />
        <Button
          itemName="Entrar"
          onClick={ this.submitForm }
        />
      </form>
    );
  }
}

export default Login;
