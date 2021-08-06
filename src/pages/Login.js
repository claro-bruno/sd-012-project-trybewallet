import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.loginValidation = this.loginValidation.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  loginValidation() {
    const { email, password } = this.state;
    const number = 6;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email) && (password.length >= number)) {
      return false;
    }
    return true;
  }

  handleEmail({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { stateEmail } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          E-mail
          <input
            id="email"
            type="text"
            data-testid="email-input"
            name="email"
            required
            onChange={ this.handleEmail }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleEmail }
            value={ password }
            required
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => stateEmail(email) }
            disabled={ this.loginValidation() }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  stateEmail: (payload) => dispatch(userLogin(payload)),
});

Login.propTypes = ({
  stateEmail: PropTypes.func,
}).isRequired;

export default connect(null, mapDispatchToProps)(Login);
