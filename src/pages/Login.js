import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Connect } from 'react-redux';
// import { userlInfo } from '../redux/actions';
import { Input, Button } from '../components';
import logo from '../images/logo.png';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.loginWithUserInfo = this.loginWithUserInfo.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  loginWithUserInfo() {
    const { handleUserInfo } = this.props;
    handleUserInfo(this.state);
  }

  render() {
    const { email, password } = this.state;
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
          id="login-button"
          buttonText="Entrar"
          pathname="carteira"
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
