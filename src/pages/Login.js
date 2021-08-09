import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { getUserInfosCreator } from '../actions/index';

const MININUM_SIZE_PASSWORD = 5;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.validateEmail();
  }

  validateEmail() {
    const { email, password } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= MININUM_SIZE_PASSWORD;
    const areUserInfosValid = isValidEmail && isValidPassword;

    if (areUserInfosValid) {
      this.setState({ isButtonDisabled: false });
    }
  }

  handleLogin() {
    const { history, getUserInfos } = this.props;
    const { email } = this.state;
    getUserInfos(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;

    return (
      <>
        <Input
          name="email"
          label="Email: "
          type="email"
          testId="email-input"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          name="password"
          label="Senha: "
          type="password"
          testId="password-input"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          disabled={ isButtonDisabled }
          label="Entrar"
          onClick={ this.handleLogin }
        />
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getUserInfos: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getUserInfos: (userInfos) => dispatch(getUserInfosCreator(userInfos)),
});

export default connect(null, mapDispatchToProps)(Login);
