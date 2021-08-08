import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { actionSaveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validFields: false,
      redirect: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.checkFields = this.checkFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
    this.checkFields();
  }

  checkFields() {
    const { email, password } = this.state;
    // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
    const validationEmail = /\S+@\S+\.\S+/;
    const checkEmail = validationEmail.test(email);
    const minPassword = 5;
    const checkPassword = password.length >= minPassword;
    if (checkEmail && checkPassword) {
      this.setState({
        validFields: true,
      });
    }
  }

  handleSubmit(event) {
    const { email } = this.state;
    const { saveEmail } = this.props;
    event.preventDefault();
    saveEmail({
      email,
    });
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { validFields, redirect } = this.state;
    if (redirect) {
      return (<Redirect to="/carteira" />);
    }
    return (
      <form>
        <input
          name="email"
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ this.handleChange }
        />
        <input
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleSubmit }
          disabled={ !validFields }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = ({
  saveEmail: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispath) => ({
  saveEmail: (email) => dispath(actionSaveEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
