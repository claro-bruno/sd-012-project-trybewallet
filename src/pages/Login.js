import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateEntry = this.validateEntry.bind(this);

    this.state = {
      password: false,
      email: false,
    };
  }

  componentDidUpdate() {
    this.activeButton();
    this.makeProps();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  makeProps() {
    const { emailValue } = this.props;
    const { email } = this.state;

    emailValue(email);
  }

  activeButton() {
    const { email, password } = this.state;
    const button = document.querySelector('button');

    if (email && password === true) {
      button.disabled = false;
    } else if (email === false || password === false) {
      button.disabled = true;
    }
  }

  validateEmail(enteredEmail) {
    if (/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/.test(enteredEmail)
    && enteredEmail.endsWith('com')) {
      this.setState({
        email: enteredEmail,
      });
    } else {
      this.setState({
        email: '',
      });
    }
  }

  validatePassword(enteredPassword) {
    const minPasswordLenght = 6;
    if (enteredPassword.length >= minPasswordLenght) {
      this.setState({
        password: true,
      });
    } else {
      this.setState({
        password: false,
      });
    }
  }

  validateEntry({ target }) {
    const { type, value } = target;

    if (type === 'text') {
      this.validateEmail(value);
    } else if (type === 'password') {
      this.validatePassword(value);
    }
  }

  render() {
    return (
      <div>
        <input
          id="email"
          type="text"
          data-testid="email-input"
          placeholder="E-mail aqui :)"
          onChange={ (enteredEmail) => this.validateEntry(enteredEmail) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha aqui :)"
          onChange={ (enteredPassword) => this.validateEntry(enteredPassword) }
        />

        <button disabled type="button">
          <Link to="/carteira">ENTRAR</Link>
        </button>
        { /* { email && password
          ? (
            <button type="button">
              <Link to="/carteira">ENTRAR</Link>
            </button>)
          : <button type="button" disabled>ENTRAR</button> } */ }
      </div>);
  }
}

Login.propTypes = {
  emailValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailValue: (value) => dispatch(emailAction(value)),
});

export default connect(null, mapDispatchToProps)(Login);
