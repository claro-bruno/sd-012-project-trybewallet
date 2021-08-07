import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

  // componentDidUpdate(prevProps, prevState) {
  //   const { email, password } = this.state;
  //   if (email !== prevState.email || password !== prevState.password) {
  //     this.validateEmail();
  //   }
  // }

  handleChange({ target }) {
    const { type, value } = target;
    this.setState({ [type]: value });
    if (this.validateEmail() === true && this.validatePass() === true) {
      this.setState({
        disable: false,
      });
    }
  }

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
          teste
          <input
            data-testid="email-input"
            type="email"
            placeholder="E-mail:"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          teste2
          <input
            data-testid="password-input"
            type="password"
            placeholder="Senha:"
            onChange={ this.handleChange }
          />
        </label>
        <button
          onClick={ this.handleSubmit }
          type="button"
          disabled={ disable }
        >
          Entrar
        </button>
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
