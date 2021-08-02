import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userAccess } from '../actions/index';

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
    this.form = this.form.bind(this);
  }

  getInputValue(e) {
    switch (e.target.name) {
    case 'email': this.setState({
      email: e.target.value,
      buttonOn: false,
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
    const valid = /[a-zA-Z]+[@][a-z]+[.]+[a-z]/;
    // método pesquisado no stackoverflow!
    const result = valid.test(email);

    if (password.length >= required && result) {
      this.setState({
        buttonOn: true,
      });
    }
  }

  submitStore() {
    const { submit } = this.props;
    const { email } = this.state;
    submit({
      email,
    });
  }

  form(e) {
    e.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { buttonOn, email, password } = this.state;
    return (
      <div>
        <form onSubmit={ this.form }>
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
            value={ password }
            data-testid="password-input"
            onChange={ this.getInputValue }
            required
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ !buttonOn }
              onClick={ this.submitStore }
            >
              Entrar
            </button>
          </Link>
        </form>
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
