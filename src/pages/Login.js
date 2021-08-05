import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifiEmail = this.verifiEmail.bind(this);
    this.verifiSenha = this.verifiSenha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { type, value } = target;
    this.setState({
      [type]: value,
    });
    if (this.verifiEmail() === true && this.verifiSenha() === true) {
      this.setState({
        disable: false,
      });
    }
  }

  verifiEmail() {
    const { email } = this.state;
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  }

  verifiSenha() {
    const { password } = this.state;
    if (password.length >= '5') {
      return true;
    } return false;
  }

  handleSubmit() {
    const { submitEmail } = this.props;
    const { email } = this.state;
    submitEmail(email);
  }

  render() {
    const { disable } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          insira seu e-mail:
          <input
            data-testid="email-input"
            type="email"
            placeholder="e-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          insira sua senha:
          <input
            data-testid="password-input"
            type="password"
            placeholder="pasword"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            onClick={ this.handleSubmit }
            type="button"
            disabled={ disable }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    submitEmail: (email) => dispatch(addUser(email)),
  });

Login.propTypes = {
  submitEmail: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
