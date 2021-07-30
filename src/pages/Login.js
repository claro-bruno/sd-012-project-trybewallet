import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction, validLogin } from '../actions';
import Input from '../components/Input';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);
  }

  verifyLogin() {
    const { email, password } = this.state;
    const { validation } = this.props;
    const emailRegex = /^[a-z0-9_.]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const passRegex = /^[\S*]{5,}$/;
    validation(emailRegex.test(email) && passRegex.test(password));
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
    this.verifyLogin();
  }

  render() {
    const { email } = this.state;
    const { login, canLogin } = this.props;
    return (
      <form>
        <Input name="Email" callback={ this.handleChange } />
        <Input name="Password" callback={ this.handleChange } />
        <Link to="/carteira">
          <button
            disabled={ !canLogin }
            type="submit"
            onClick={ () => login(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
  validation: (data) => dispatch(validLogin(data)),
});

const mapStateToProps = ({ user }) => ({
  canLogin: user.validLogin,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
  canLogin: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
