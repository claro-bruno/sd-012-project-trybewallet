import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { loginAction, getCurrencyAPI } from '../actions';
import Button from '../components/SubmitButton';

const passwordLength = 6;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkCredentials = this.checkCredentials.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { email } = this.state;
    const { userStateToRedux, currencyStateToProps } = this.props;
    userStateToRedux(email);
    currencyStateToProps();
    this.setState({
      shouldRedirect: true,
    });
  }

  // source: https://ui.dev/validate-email-address-javascript/
  emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  passwordIsValid(password) {
    return password.length >= passwordLength;
  }

  checkCredentials() {
    const { email, password } = this.state;
    return this.emailIsValid(email) && this.passwordIsValid(password);
  }

  render() {
    const { email, password, shouldRedirect } = this.state;

    return (
      <main id="mainSection">
        <form id="loginForm">
          <Input
            type="email"
            placeholder="Digite seu email"
            testId="email-input"
            id="emailInput"
            labelTxt="Login"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            testId="password-input"
            id="passwordInput"
            labelTxt="Senha"
            value={ password }
            name="password"
            onChange={ this.handleChange }
          />
          <div>
            <Button
              onClick={ this.handleClick }
              disabled={ !this.checkCredentials() }
              buttonTxt="Entrar"
            />
          </div>
          { shouldRedirect ? <Redirect to="/carteira" /> : null }
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userStateToRedux: (objState) => dispatch(loginAction(objState)),
  currencyStateToProps: () => dispatch(getCurrencyAPI()),
});

Login.propTypes = {
  userStateToRedux: PropTypes.func.isRequired,
  currencyStateToProps: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
