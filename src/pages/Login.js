import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      blockSubmit: true,
      redirect: false,
    };

    this.validateInputs = this.validateInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateInputs() {
    const { email, password } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    const validPassword = 6;
    if (validEmail.test(email) && password.length >= validPassword) {
      this.setState({ blockSubmit: false });
    } else {
      this.setState({ blockSubmit: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  handleClick() {
    const { auth } = this.props;
    const { email } = this.state;
    auth(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, blockSubmit, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <main>
        <h1>TrybeWallet</h1>
        <form>
          <img src="https://media.giphy.com/media/67ThRZlYBvibtdF9JH/giphy.gif" alt="gif pernalonga contando dinheiro" />
          <h3>Login</h3>
          <input
            name="email"
            type="text"
            placeholder="EMAIL"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            placeholder="SENHA"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            onKeyUp={ (event) => event.key === 'Enter' && this.handleClick() }
          />
          <button
            type="button"
            disabled={ blockSubmit }
            onClick={ this.handleClick }
            className={ blockSubmit ? 'disabled-btn' : 'login-btn' }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  auth: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  auth: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
