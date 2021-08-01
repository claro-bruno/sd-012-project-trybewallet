import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { userAction } from '../actions';
import Button from '../components/Button';

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
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { email } = this.state;
    const { userStateToRedux } = this.props;
    userStateToRedux(email);
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { email, password, shouldRedirect } = this.state;
    const pwLength = 6;
    const emailFirstValidation = !email.includes('@');
    const emailSecondValidation = !email.includes('.');
    const emailThirdValidation = !email.includes('com');

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
              disabled={ password.length < pwLength
                || emailFirstValidation || emailSecondValidation || emailThirdValidation }
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
  userStateToRedux: (objState) => dispatch(userAction(objState)),
});

Login.propTypes = {
  userStateToRedux: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
