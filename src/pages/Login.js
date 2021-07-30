import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import setEmail from '../actions/index';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validation() {
    const { email, password } = this.state;
    const emailRegex = email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);
    const minValue = 6;
    if (password.length >= minValue && emailRegex) {
      return false;
    }

    return true;
  }

  render() {
    const { email } = this.state;
    const { handleClick } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          name="email"
          onChange={ this.onChange }
        />
        <input
          type="text"
          data-testid="password-input"
          placeholder="password"
          name="password"
          onChange={ this.onChange }
        />
        <Link to="/carteira">
          <button
            onClick={ () => { handleClick(email); } }
            disabled={ this.validation() }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (email) => dispatch(
    setEmail(email),
  ),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  handleClick: PropTypes.func,
}.isRequired;
