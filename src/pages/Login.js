import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logIn } from '../actions';

const minPasswordLength = 6;
const regExpForEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { logInDispatch } = this.props;
    const { email } = this.state;
    logInDispatch(email);
  }

  render() {
    const { email, password } = this.state;
    const { isLoggedIn } = this.props;
    return (
      isLoggedIn
        ? <Redirect to="/carteira" />
        : (
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor="email">
              Email
              <input
                id="email"
                type="email"
                value={ email }
                onChange={ this.handleChange }
                data-testid="email-input"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                value={ password }
                onChange={ this.handleChange }
                minLength={ minPasswordLength }
                data-testid="password-input"
              />
            </label>
            <button
              type="submit"
              disabled={ password.length < minPasswordLength
                || !regExpForEmail.test(email) }
            >
              Entrar
            </button>
          </form>
        )
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logInDispatch: (email) => dispatch(logIn(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logInDispatch: PropTypes.func.isRequired,
};
