import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.inputValidation = this.inputValidation.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.inputValidation();
  }

  inputValidation() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const passwordRegex = /^[\S*]{5,}$/;
    const testEmail = emailRegex.test(email);
    const testPassword = passwordRegex.test(password);
    if ((testEmail) && (testPassword)) {
      this.setState({
        disabled: false,
      });
    }
  }

  submitForm() {
    const { history } = this.props;
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
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
          disabled={ disabled }
        />
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf('string').isRequired,
};

export default Login;
