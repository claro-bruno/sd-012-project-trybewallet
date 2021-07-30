import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionGetEmail } from '../actions/index';

const EMAIL_REGEX = /^(\.|-|_|[a-z]|\d)+?@([a-z]|\d)+\.[a-z]{2,3}(\.[a-z]{2})?$/;
const MIN_PASSWORD_LENGTH = 6;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      idValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.isValid());
  }

  handleSubmit() {
    console.log(this.state);
    const { history, getEmailStore } = this.props;
    const { email } = this.state;
    getEmailStore(email);
    this.setState({
      email: '',
    });
    history.push('/carteira');
  }

  // consultei o Pull Request do Mestre do Regex, Diogo Sant`anna, para resolver essa parte
  // https://github.com/tryber/sd-012-project-trybewallet/pull/46
  isValid() {
    const { email, password } = this.state;
    const checkEmail = EMAIL_REGEX.test(email);
    const checkPassword = password.length >= MIN_PASSWORD_LENGTH;

    if (checkEmail && checkPassword) {
      return (
        this.setState({
          isValid: true,
        })
      );
    }
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <fieldset>
        <label htmlFor="input-login">
          <input
            type="email"
            id="input-login"
            name="email"
            value={ email }
            placeholder="Insira seu e-mail"
            data-testid="email-input"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="input-password">
          <input
            type="password"
            id="input-password"
            name="password"
            value={ password }
            placeholder="Insira sua senha"
            data-testid="password-input"
            onChange={ this.handleChange }
            required
          />
        </label>
        <button
          type="submit"
          onClick={ this.handleSubmit }
          disabled={ !isValid }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  getEmailStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmailStore: (email) => dispatch(actionGetEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
