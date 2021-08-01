import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
/**
 * Consultei o repositório do Henrique Brito Elias para resolver essa parte.
 * Link: https://github.com/tryber/sd-09-project-trybewallet/pull/3/commits/702598b7aa02d12398b116c94eb325d340100b39
 */

const PASSWORD_MINIMUM_LENGTH = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailInput: '',
      passwordInput: '',
      formErrors: {
        emailInput: '',
        passwordInput: '',
      },
      typed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      ...state,
      [name]: value,
      formErrors: {
        ...state.formErrors,
        [name]: this.validateField(name, value),
      },
      typed: true,
    }));
  }

  validateField(fieldName, value) {
    const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    switch (fieldName) {
    case 'emailInput':
      return isValid ? '' : 'Email is invalid';
    case 'passwordInput':
      return value.length >= PASSWORD_MINIMUM_LENGTH ? '' : 'Password is too short';
    default:
      break;
    }
    return '';
  }

  render() {
    const {
      emailInput,
      passwordInput,
    } = this.state;
    return (
      <fieldset>
        <form>
          <Input
            labelText="E-mail"
            id="email-input"
            name="emailInput"
            value={ emailInput }
            onChange={ this.handleChange }
            placeholder="digite o seu e-mail"
          />
          <Input
            labelText="Senha"
            id="password-input"
            name="passwordInput"
            value={ passwordInput }
            onChange={ this.handleChange }
            placeholder="digite a sua senha"
          />
          <Button
            onClick={ this.state }
          >
            Entrar
          </Button>
        </form>
      </fieldset>
    );
  }
}

export default Login;
