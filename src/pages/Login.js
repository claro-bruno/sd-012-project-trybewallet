import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePass = this.validatePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { type, value } = target;
    this.setState({ [type]: value });
    if (this.validateEmail() === true && this.validatePass() === true) {
      this.setState({
        disable: false,
      });
    }
  }

  // expressao obtida em:https://regexr.com/3e48o
  validateEmail() {
    const { email } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  }

  validatePass() {
    const minPass = 5;
    const { password } = this.state;
    if (password.length >= minPass) {
      return true;
    }
    return false;
  }

  handleSubmit() {
    const { emailClick } = this.props;
    const { email } = this.state;
    emailClick(email);
  }

  render() {
    const { disable } = this.state;
    return (
      <div>
        <div>Login</div>
        <label htmlFor="email-input">
          E-mail:
          <input
            data-testid="email-input"
            type="email"
            placeholder="E-mail:"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha:"
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

const mapDispatchToProps = (dispatch) => ({
  emailClick: (email) => dispatch(userEmail(email)),
});

Login.propTypes = {
  emailClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
