import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMail } from '../actions';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
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
    const { handleGetMail } = this.props;
    const { email } = this.state;
    handleGetMail(email);
    this.setState({ redirectSubmit: true });
  }

  render() {
    const { formValidation, redirectSubmit } = this.state;

    return (
      <section>
        { redirectSubmit && <Redirect to="/carteira" /> }
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

const mapDispatchToProps = (dispatch) => ({
  handleGetMail: (email) => dispatch(getMail(email)),
});

Login.propTypes = {
  handleGetMail: PropTypes.string.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
