import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userData } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  }

  componentDidUpdate() {
    this.handleValidate();
  }

  handleValidate() {
    const { email, password, disabled } = this.state;
    const numbers = 6;
    const checkEmail = email.split('').includes('@')
    && email.split('.').includes('com');
    const checkPassword = password.length >= numbers;
    if (checkEmail && checkPassword && disabled) {
      this.setState({ disabled: false });
    } else if ((!checkEmail || !checkPassword) && !disabled) {
      this.setState({ disabled: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { dispatchEmail } = this.props;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="email@email.com"
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="Senha"
          />
        </label>

        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => dispatchEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (email) => dispatch(userData(email)),
});

Login.propTypes = {
  dispatchEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
