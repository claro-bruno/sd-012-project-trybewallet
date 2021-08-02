import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CardLogin from '../components/CardLogin';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email } = this.state;
    const { login } = this.props;

    login({ email });
    this.setState({ redirect: true });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }, () => this.isValid());
  }

  isValid() {
    const { email, password } = this.state;
    const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_CHARS = 6;

    const passwordValidation = password.length >= MIN_CHARS;
    const emailValidation = EMAIL_REGEX.test(email);

    this.setState({ isDisabled: !(emailValidation && passwordValidation) });
  }

  render() {
    const { email, password, isDisabled, redirect } = this.state;

    return (
      <main className="pt-4 pb-5 container">
        <CardLogin
          email={ email }
          password={ password }
          isDisabled={ isDisabled }
          redirect={ redirect }
          handleChange={ this.handleChange }
          handleSubmit={ this.handleSubmit }
        />
        {redirect ? <Redirect to="/carteira" /> : ''}
      </main>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(loginAction(event)),
});

export default connect(null, mapDispatchToProps)(Login);
