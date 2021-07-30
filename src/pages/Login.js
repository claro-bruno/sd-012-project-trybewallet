import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => { this.validateField(name, value); });
  }

  // consultei o site https://learnetto.com/blog/react-form-validation para validar os inputs
  validateField(fieldName, value) {
    const { formErrors } = this.state;
    const fieldValidationErrors = formErrors;
    let { emailValid } = this.state;
    let { passwordValid } = this.state;
    const minLength = 6;

    switch (fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= minLength;
      fieldValidationErrors.password = passwordValid ? '' : ' is too short';
      break;
    default:
      break;
    }

    this.setState({ formErrors: fieldValidationErrors,
      emailValid,
      passwordValid,
    }, this.validateForm);
  }

  validateForm() {
    const { emailValid, passwordValid } = this.state;
    this.setState({ formValid: emailValid && passwordValid });
  }

  handleSubmit(event) {
    const { history } = this.props;
    console.log(this.state);
    event.preventDefault();
    history.push('/carteira');
  }

  render() {
    const { email, password, formValid } = this.state;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <input
              type="text"
              value={ email }
              onChange={ this.handleChange }
              data-testid="email-input"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={ password }
              onChange={ this.handleChange }
              data-testid="password-input"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <div>
            <input type="submit" disabled={ !formValid } value="Entrar" />
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired }).isRequired,
};

export default Login;
