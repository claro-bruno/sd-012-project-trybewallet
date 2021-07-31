import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      button: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGetEmail = this.handleGetEmail.bind(this);
    this.validEntries = this.validEntries.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.validEntries());
  }

  validEntries() {
    const { email, password } = this.state;
    const minLength = 6;
    if (email.includes('@') && email.includes('.com') && password.length >= minLength) {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  }

  handleGetEmail() {
    // e.preventDefault();
    const { email } = this.state;
    const { getEmail } = this.props;
    getEmail(email);
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <div>
        <h1>Wallet</h1>
        <form>
          <label htmlFor="input-email">
            Email:
            <input
              value={ email }
              name="email"
              type="email"
              id="input-email"
              placeholder="Insira seu email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-password">
            Senha:
            <input
              value={ password }
              name="password"
              type="password"
              id="input-password"
              placeholder="Digite sua senha"
              data-testid="password-input"
              minLength="6"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              id="button"
              type="button"
              disabled={ button }
              onClick={ this.handleGetEmail }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (emailInput) => dispatch(loginAction(emailInput)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  getEmail: PropTypes.func,
}.isRequired;
