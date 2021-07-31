import React from 'react';
import { connect } from 'react-redux';
import { actGetEmail } from '../actions/index';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.loginBtn = this.loginBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.disableBtn = this.disableBtn.bind(this);
    this.state = {
      email:'',
      password:'',
      shouldRedirect: false,
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  disableBtn = () => {
    const { email, password } = this.state;
    const patemail = /(.*)@(.*).com/
    const patpassword = 6
    if (patemail.test(email) && password.length >= patpassword) {
      return false
    }
    return true
  }

  loginBtn = () => {
    const { getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    this.setState({
      shouldRedirect: true,
    })
  }

  render() {
    const { email, password, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />
    }
    return (
      <form>
        <h1>Login</h1>
        <input
        data-testid="email-input"
        type="email"
        placeholder="e-mail"
        value={ email }
        name="email"
        onChange={ this.handleChange }
        required
        />
        <input
        data-testid="password-input"
        type="password"
        placeholder="senha"
        name="password"
        minLength="6"
        value={ password }
        onChange={ this.handleChange }
        required
        />
        <button
        disabled={ this.disableBtn() }
        type="submit"
        onClick={ this.loginBtn }
        >
          Entrar
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getEmail: (email) => dispatch(actGetEmail(email))}
}

export default connect(null, mapDispatchToProps)(Login)
