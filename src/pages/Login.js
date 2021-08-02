import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { actionUserLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };

    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderPasswordInput = this.renderPasswordInput.bind(this);
    this.renderEnterButton = this.renderEnterButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() { // Regex source: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const { email, password } = this.state;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const NUMBER_SIX = 6;

    if (email.match(regex) && password.length >= NUMBER_SIX) {
      return false;
    }

    return true;
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email } = this.state;
    const { userLogin } = this.props;

    userLogin(email);

    this.setState({
      shouldRedirect: true,
    });
  }

  renderEmailInput() {
    const { email } = this.state;

    return (
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="email"
          name="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderPasswordInput() {
    const { password } = this.state;

    return (
      <label htmlFor="password">
        Senha:
        <input
          id="password"
          type="password"
          name="password"
          data-testid="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderEnterButton() {
    const isDisabled = this.validateForm();

    return (
      <button
        type="submit"
        disabled={ isDisabled }
      >
        Entrar
      </button>
    );
  }

  render() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/carteira" />;

    return (
      <form onSubmit={ this.handleSubmit }>
        <h2>Login</h2>
        { this.renderEmailInput() }
        { this.renderPasswordInput() }
        { this.renderEnterButton() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(actionUserLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
