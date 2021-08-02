import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      check: true,
    };

    this.onChange = this.onChange.bind(this);
    this.handlerCheck = this.handlerCheck.bind(this);
    this.handlerSubmite = this.handlerSubmite.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.handlerCheck());
  }

  handlerCheck() {
    const { email, password } = this.state;
    const caracterMin = 6;
    const regexEmail = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const checkEmail = regexEmail.test(email);
    if (checkEmail && password.length >= caracterMin) {
      this.setState({ check: false });
    } else {
      this.setState({ check: true });
    }
  }

  handlerSubmite() {
    const { email } = this.state;
    const { saveEmail } = this.props;
    saveEmail(email);
  }

  render() {
    const { email, password, check } = this.state;
    return (
      <fieldset>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            value={ email }
            type="text"
            onChange={ this.onChange }
            id="email"
            placeholder="Email"
          />
        </label>

        <label htmlFor="password">
          <input
            data-testid="password-input"
            name="password"
            value={ password }
            type="text"
            onChange={ this.onChange }
            id="password"
            placeholder="passoword"
          />
        </label>
        <Link to="/carteira">
          <button type="button" disabled={ check } onClick={ this.handlerSubmite }>
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  saveEmail: (email) => dispatch((inputEmail(email))),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapStateToProps)(Login);
