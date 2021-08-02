import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { func } from 'prop-types';
import { addUser } from '../actions';
import './style/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisable: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkValid = this.checkValid.bind(this);
  }

  checkValid() {
    const { email, password } = this.state;
    const passwordMinLength = 6;
    const regEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i; // source regExp: https://mailtrap.io/blog/react-native-email-validation/
    if (regEx.test(email) && password.length >= passwordMinLength) {
      this.setState({ btnDisable: false });
    } else {
      this.setState({ btnDisable: true });
    }
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value }, this.checkValid);
  }

  handleClick(e) {
    e.preventDefault();
    const { add } = this.props;
    const { email } = this.state;
    add(email);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect, btnDisable } = this.state;
    return (
      <>
        {redirect && <Redirect to="/carteira" />}
        <form className="login-form">
          <label htmlFor="email-input" className="form-label">
            Email:
            <input
              id="email-input"
              name="email"
              data-testid="email-input"
              type="email"
              className="form-control"
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="pass-input">
            Password:
            <input
              id="pass-input"
              name="password"
              data-testid="password-input"
              type="password"
              className="form-control"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ btnDisable }
            className="btn btn-primary"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (user) => dispatch(addUser(user)),
});

Login.propTypes = {
  add: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
