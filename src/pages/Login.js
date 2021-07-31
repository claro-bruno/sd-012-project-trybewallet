import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Connect } from 'react-redux';
// import { userlInfo } from '../actions';
import { Input, Button } from '../components';
import logo from '../images/logo.png';
import './Login.css';

const PASSWORD_MINLENGTH = 6;

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
    this.loginWithUserInfo = this.loginWithUserInfo.bind(this);

    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if ((email !== prevState.email) || (password !== prevState.password)) {
      this.verifyLogin();
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  verifyLogin() {
    const { email, password } = this.state;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if ((password.length >= PASSWORD_MINLENGTH) && (regex.test(email))) {
      this.setState({ isDisable: false });
    } else this.setState({ isDisable: true });
  }

  loginWithUserInfo() {
    const { handleUserInfo } = this.props;
    handleUserInfo(this.state);
  }

  render() {
    const { email, password, isDisable } = this.state;
    return (
      <div className="login-container">
        <img className="login-logo" src={ logo } alt="trybewallet" />
        <Input
          labelText=""
          type="email"
          className="login-input"
          id="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          labelText=""
          type="password"
          className="login-input"
          id="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          className="login-button"
          buttonText="Entrar"
          pathname="carteira"
          isDisable={ isDisable }
          onClick={ this.sendPersonalInfo }
        />
      </div>
    );
  }
}

/* const mapDispatchToProps = (dispatch) => ({
  handleUserInfo: (userInfo) => dispatch(loginWithUserInfo(userInfo)),
}); */

Login.propTypes = {
  handleUserInfo: PropTypes.func.isRequired,
};

export default Login;

// export default connect(null, mapDispatchToProps)(Login);
