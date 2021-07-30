import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import userEmail from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  /* https://stackoverflow.com/questions/201323
  /how-can-i-validate-an-email-address-using-a-regular-expression */
  render() {
    const { email, password, disabled } = this.state;
    const { dispatchMail } = this.props;
    const validation = /^\S+@\S+\.\S+$/;
    const minLength = 6;
    const validateEmail = validation.test(email);
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            name="email"
            placeholder="E-mail"
            data-testid="email-input"
            type="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            minLength="6"
            placeholder="Senha"
            data-testid="password-input"
            type="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            {validateEmail && password.length >= minLength && disabled
              ? (
                <button onClick={ () => dispatchMail(email) } type="submit">
                  Entrar
                </button>
              ) : (
                <button disabled type="submit">
                  Entrar
                </button>
              )}
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchMail: (value) => dispatch(userEmail(value)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchMail: PropTypes.func.isRequired,
};
