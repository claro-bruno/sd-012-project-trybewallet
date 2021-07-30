import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionSaveEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyEmailAndPassword = this.verifyEmailAndPassword.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.verifyEmailAndPassword();
  }

  verifyEmailAndPassword() {
    const minLength = 6;
    this.setState((state) => {
      if (state.password.length >= minLength
        && state.email.includes('@')
        && state.email.includes('.')
        && state.email[state.email.length - 1] !== '.') {
        return {
          disabled: false,
        };
      }
      return {
        disabled: true,
      };
    });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { saveEmail } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          name="email"
          onInput={ this.handleChange }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          name="password"
          onInput={ this.handleChange }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ () => saveEmail(email) }
          disabled={ disabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveEmail: (email) => dispatch(actionSaveEmail(email)),
  };
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
