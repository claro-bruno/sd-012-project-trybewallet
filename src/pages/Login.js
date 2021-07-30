import React from 'react';
import { Link } from 'react-router-dom';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateEmailAndPassword());
  }

  validateEmailAndPassword() {
    const { email, password } = this.state;
    const re = /\w+@\w+.com/.test(email);
    const minimumPasswordLength = 6;
    const validPassword = password.length >= minimumPasswordLength;
    const logicValidation = re && validPassword;
    this.setState({
      disabled: !logicValidation,
    });
  }

  render() {
    const { disabled } = this.state;
    return (
      <main>
        <InputEmail
          handleInput={ this.handleInput }
        />
        <InputPassword
          handleInput={ this.handleInput }
        />
        <Link to="/carteira">
          <button type="submit" disabled={ disabled }>
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}

export default Login;
