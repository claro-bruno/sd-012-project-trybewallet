import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const button = document.querySelector('button');
    button.disabled = true;
  }

  componentDidUpdate() {
    const { email, senha } = this.state;
    if (senha && email) {
      this.inputsValidation();
    }
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  inputsValidation() {
    const button = document.querySelector('button');
    const { email, senha } = this.state;
    const emailValidation = /(.*)@(.*).com/.test(email);
    // validação de email utilizada de acordo com sugestão da colega mikaela braga em thread no slack
    const charactersSenha = senha.length;
    const minimoSenha = 6;
    if (charactersSenha >= minimoSenha && emailValidation === true) {
      button.disabled = false;
    }
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <h2 data-testid="login-h2">
          Faça seu login:
        </h2>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={ email }
          dataTestid="email-input"
          onChange={ this.handleChange }
          required
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={ senha }
          dataTestid="password-input"
          onChange={ this.handleChange }
          required
        />
        <Button
          name="Entrar"
          dataTestid="button-enter"
          onClick={ this.onSubmitForm }
        />
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
