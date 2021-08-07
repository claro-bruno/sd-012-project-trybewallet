import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import '../styles/login.css';
import PropTypes from 'prop-types';
import paturso from '../images/Paturso.png';
import { userSubmit } from '../actions';

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
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidUpdate() {
    this.handleUpdate();
  }

  handleUpdate() {
    const lenNumber = 6;
    const { email, password, login } = this.state;
    const emailRegex = new RegExp(/[\w]+@[\w]+\.[\w]{3,}/g).test(email);
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
    const { EnviaEmail } = this.props;
    const { email } = this.state;
    EnviaEmail(this.state);
    localStorage.setItem('email', email);
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
  EnviaEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  EnviaEmail: (state) => dispatch(userSubmit(state)),
});

export default connect(null, mapDispatchToProps)(Login);
