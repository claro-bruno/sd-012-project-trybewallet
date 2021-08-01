import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import { actionUserEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValid: false,
      passwordValid: false,
      loginValid: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  validateEmail() {
    this.setState((state) => {
      const { email } = state;
      // RegEx compartilhada pelo aluno Rodrigo Merlone no Slack
      if (email.match(/^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/)) {
        return ({
          emailValid: true,
        });
      }
      return ({
        emailValid: false,
      });
    });
  }

  validatePassword() {
    const minPasswordLength = 6;
    this.setState((state) => {
      const { password } = state;
      if (password.length >= minPasswordLength) {
        return ({
          passwordValid: true,
        });
      }
      return ({
        passwordValid: false,
      });
    });
  }

  validateLogin() {
    this.setState((state) => {
      const { emailValid, passwordValid } = state;
      if (emailValid && passwordValid) {
        return ({
          loginValid: true,
        });
      }
      return ({
        loginValid: false,
      });
    });
  }

  handleChange(event) {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value,
    });
    this.validateEmail();
    this.validatePassword();
    this.validateLogin();
  }

  render() {
    const { email, password, loginValid } = this.state;
    const { getUserEmail } = this.props;
    return (
      <div>
        <form>
          <Input
            type="text"
            name="email"
            value={ email }
            handleChange={ this.handleChange }
          >
            Email:
          </Input>
          <Input
            type="password"
            name="password"
            value={ password }
            handleChange={ this.handleChange }
          >
            Senha:
          </Input>
          <Link to="/carteira">
            <Button
              loginValid={ !loginValid }
              handleClick={ () => { getUserEmail(email); } }
            >
              Entrar
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserEmail: (email) => dispatch(actionUserEmail(email)),
});

Login.propTypes = {
  getUserEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
