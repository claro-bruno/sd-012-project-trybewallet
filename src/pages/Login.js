import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserEmail } from '../redux/actions';
// import './Login.css'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      disableBtn: true,
      redirect: false,
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
    const { emailInput, passwordInput, disableBtn } = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minPasswordLenght = 6;
    const disable = !(emailRegex.test(emailInput)
      && passwordInput.length >= minPasswordLenght);
    if (disableBtn !== disable) this.setState({ disableBtn: disable });
  }

  btnClick() {
    const { emailInput } = this.state;
    const { getUser } = this.props;
    getUser(emailInput);
    this.setState({ redirect: true });
  }

  render() {
    const { handleChange, btnClick } = this;
    const { emailInput, passwordInput, disableBtn, redirect } = this.state;
    console.log(this.props);
    return (
      <div>
        { redirect && <Redirect to="/carteira" />}
        <h1>LOGIN</h1>
        <input
          type="text"
          name="emailInput"
          value={ emailInput }
          placeholder="E-MAIL DO USUÁRIO"
          data-testid="email-input"
          onChange={ handleChange }
        />
        <input
          type="password"
          name="passwordInput"
          value={ passwordInput }
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

Login.propTypes = {
  getUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (email) => dispatch(getUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
