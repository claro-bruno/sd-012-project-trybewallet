import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../Styles/login.css';
import PropTypes from 'prop-types';
import paturso from '../Images/Paturso.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    // fonte https://regexr.com/3bfsi
    const lenNumber = 6;
    const { email, password, login } = this.state;
    const emailRegex = new RegExp(/[\w]+\\@[a-z]+\.[a-z]+[\\.]?[a-z]+/g).test(email);
    const passwordRegex = password.length >= lenNumber;
    if (login) {
      return (emailRegex && passwordRegex) ? this.setState({ login: false }) : login;
    }
    if (login === false) {
      return (!(emailRegex && passwordRegex)) ? this.setState({ login: true }) : login;
    }
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userSubmit } = this.props;
    userSubmit(this.state);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, login, redirect } = this.state;

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <form
        onSubmit={ (e) => this.handleSubmit(e) }
      >
        <img src={ paturso } alt="paturso logo" />
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ ({ target }) => this.handleChange(target.name, target.value) }
        />
        <input
          type="password"
          minLength="6"
          placeholder="Password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ ({ target }) => this.handleChange(target.name, target.value) }
        />
        <button
          type="submit"
          disabled={ login }
        >
          Entrar
        </button>

      </form>
    );
  }
}
Login.propTypes = {
  userSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = { userSubmit };

export default connect(null, mapDispatchToProps)(Login);
