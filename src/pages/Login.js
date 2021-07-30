import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userAccess from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonOn: false,
    };

    this.submitStore = this.submitStore.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  getInputValue(e) {
    switch (e.target.name) {
    case 'email': this.setState({
      email: e.target.value,
    });
      break;
    case 'password': this.setState({
      password: e.target.value,
    });
      break;
    default:
    }
    const { password, email } = this.state;
    const required = 5;
    if (password.length >= required && email) {
      this.setState({
        buttonOn: true,
      });
    }
    console.log(password);
  }

  submitStore() {
    const { submit } = this.props;
    const { email, password } = this.state;
    const convert = password;
    const number = +convert;
    submit({
      email,
      password: number,
    });
  }

  render() {
    const { buttonOn, email } = this.state;
    return (
      <div>
        <fieldset>
          <h1>Trybe</h1>
          <input
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.getInputValue }
            required
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.getInputValue }
            required
          />
          <button
            type="submit"
            onClick={ this.submitStore }
            disabled={ !buttonOn }
          >
            Entrar
          </button>
        </fieldset>
      </div>
    );
  }
}

const mapDispatchToProps = (dispathc) => ({
  submit: (state) => dispathc(userAccess(state)),
});

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
