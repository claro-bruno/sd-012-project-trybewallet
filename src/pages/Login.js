import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Login.css';
import Input from '../components/Input';
import { userAction } from '../actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
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
  }

  render() {
    const { email, password } = this.state;
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
            <button type="button" onClick={ this.handleClick }>Entrar</button>
          </div>
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
