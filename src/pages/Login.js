import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getUserEmail } from '../redux/actions';
// import './Login.css'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEmail: '',
      inputPassword: '',
      disableBtn: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.btnStats = this.btnStats.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.btnStats);
  }

  btnStats() {
    const { inputEmail, inputPassword, disableBtn } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minPasswordL = 6;
    const disable = !(emailRegex.test(inputEmail)
    && inputPassword.length >= minPasswordL);
    if (disableBtn !== disable) this.setState({ disableBtn: disable });
  }

  btnClick() {
    const { emailInput } = this.state;
    getUserEmail(emailInput);
    return (<Redirect to="/carteira" />);
  }

  render() {
    const { handleChange, btnClick } = this;
    const { inputEmail, inputPassword, disableBtn } = this.state;
    return (
      <div>
        <h1>LOGIN</h1>
        <input
          type="text"
          name="inputEmail"
          value={ inputEmail }
          placeholder="E-MAIL DO USUÁRIO"
          data-testid="email-input"
          onChange={ handleChange }
        />
        <input
          type="text"
          name="inputPassword"
          value={ inputPassword }
          placeholder="SENHA"
          data-testid="password-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          disabled={ disableBtn }
          onClick={ btnClick }
        >
          ENTRAR
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUser: (user) => dispatch(getUserEmail(user)),
});

export default connect(null, mapDispatchToProps)(Login);
