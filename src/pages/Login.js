import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isClickable: true,
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  checkUserData() {
    const { email, password } = this.state;
    const minPass = 6;

    if (email.includes('@') && email.includes('.com') && password.length >= minPass) {
      this.setState({
        isClickable: false,
      });
    }
  }

  handleUserInput({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    },
    () => this.checkUserData());
  }

  render() {
    const { isLogged, walletLogin } = this.props;
    const { email, isClickable } = this.state;

    return (
      <div>
        { isLogged && <Redirect to="/carteira" /> }
        <form>
          <h1>TrybeWallet</h1>
          <fieldset>
            <input
              type="email"
              id="email-input"
              name="email"
              data-testid="email-input"
              placeholder="E-mail"
              onChange={ this.handleUserInput }
            />
            <input
              type="password"
              id="password-input"
              name="password"
              data-testid="password-input"
              placeholder="Senha"
              onChange={ this.handleUserInput }
            />
            <button
              type="button"
              disabled={ isClickable }
              onClick={ () => walletLogin(email) }
            >
              Entrar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  walletLogin: (email) => dispatch(loginUser(email)),
});

Login.propTypes = {
  isLogged: PropTypes.bool,
  walletLogin: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
