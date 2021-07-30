import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { validateLogin } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validate: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    }, () => this.setState({ validate: !this.validateLogin() }));
  }

  validateLogin() {
    const { email, password } = this.state;
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passMin = 6;
    return regexEmail.test(email) && password.length >= passMin;
  }

  render() {
    const { validateButton } = this.props;
    const { email, validate } = this.state;
    return (

      <div className="App">
        <div className="">
          <label className="" htmlFor="email-input">
            Email
            <input
              className=""
              name="email"
              type="text"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div className="">
          <label className="" htmlFor="password-input">
            Senha
            <input
              className=""
              name="password"
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <Link to="/carteira">
          <button
            className="btn btn-primary"
            disabled={ validate }
            type="submit"
            onClick={ () => validateButton(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  validateButton: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  validateButton: (email) => dispatch(validateLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
