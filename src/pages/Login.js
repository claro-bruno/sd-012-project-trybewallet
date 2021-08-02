import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Proptypes from 'ṕrop-types';
import storeEmail from '../actions';

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: '',
        emailIsValid: false,
        passwordIsValid: false,
        shouldRedirect: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  emailChecker(value) {
    const emailRegex = new RegExp([
      '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
      '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])',
      '?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'].join(''));
      const emailIsValid = emailRegex.test(value);
      return emailIsValid;
  }

  passChecker(value) {
    const minChars = 6;
    const passIsValid = value.lenght >= minChars;
    return passIsValid;
  }

  handleChange({target}) {
    const { name, value } = target;
    const valid = (name === 'email') ? this. emailChecker(value) : this.passChecker(value);
    this.setState({
      [name]: value,
      [`${name}Isvalid`]: valid,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { saveEmail } = this.props;
    saveEmail(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, emailIsValid, passwordIsValid, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to = "/carteira" />
    
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="Email"
          value={ email }
          onChange={ this.handleChange }
        />

        <input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          disabled={ !(emailIsValid && passwordIsValid)}
        >
          Enter
        </button>
      </form>
    );
  };
};


Login.PropTypes = {
  saveEmail: Proptypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(storeEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
