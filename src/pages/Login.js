import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      formValidation: true,
      redirectSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value, formValidation: true },
      () => this.handleValidation());
  }

  handleValidation() {
    const length = 5;
    const { email, senha } = this.state;
    const emailPatterm = /^(.*)@(.*)[.](com)$/;
    let emailValidation = false;
    let senhaValidation = false;

    if (senha.length > length) {
      senhaValidation = true;
    }

    if (emailPatterm.test(email)) {
      emailValidation = true;
    }

    if (senhaValidation && emailValidation) {
      this.setState({ formValidation: false });
    }
    console.log('teste');
  }

  handleSubmit() {
    this.setState({ redirectSubmit: true });
  }

  render() {
    const { formValidation, redirectSubmit } = this.state;
    if (redirectSubmit) {
      return <Redirect to="/carteira" />;
    }
    return (
      <section>
        <form>
          <input
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
            type="text"
            placeholder="E-mail"
          />
          <input
            name="senha"
            onChange={ this.handleChange }
            data-testid="password-input"
            type="password"
            placeholder="Senha"
          />
          <button
            type="button"
            disabled={ formValidation }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
