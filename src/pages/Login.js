import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionEmail from '../actions';

const validEmail = /^[a-z0-9](\.|-|_|[a-z]|\d)+@([a-z]|\d)+\.[a-z]{2,3}(\.[a-z]{2})?$/;

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      Email: '',
      Password: '',
      login: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validator = this.validator.bind(this);
  }

  validator() {
    const { Email, Password } = this.state;
    const validPassword = 6;
    const testEmail = validEmail.test(Email);
    const testPassword = Password.length >= validPassword;
    if (testEmail && testPassword) {
      this.setState({
        login: true,
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.validator());
  }

  render() {
    const { Email, Password, login } = this.state;
    const { saveEmail } = this.props;
    return (
      <div className="container">
        <div className="login-container">
          <input
            onChange={ this.handleChange }
            value={ Email }
            name="Email"
            className="login"
            type="text"
            data-testid="email-input"
          />
          <input
            onChange={ this.handleChange }
            value={ Password }
            name="Password"
            className="login"
            type="text"
            data-testid="password-input"
          />
          <Link to="/carteira">
            <button
              text="Entrar"
              disabled={ !login }
              type="button"
              onClick={ () => saveEmail(Email) }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (state) => dispatch(actionEmail(state)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
