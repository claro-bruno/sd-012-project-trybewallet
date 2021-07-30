import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actionLogin from '../actions/actionLogin';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonStatus: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.changeButtonStatus = this.changeButtonStatus.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    this.changeButtonStatus();
  }

  changeButtonStatus() {
    // regex de validação adaptado de:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    const MINIMUM_OF_CHARACTERS = 5;
    const { email, password } = this.state;
    let checked = true;

    if (password.length >= MINIMUM_OF_CHARACTERS && emailRegex.test(email)) {
      checked = false;
    }

    // if (checked) {
    //   console.log('Não verificado');
    // } else {
    //   console.log('Verificado');
    // }

    this.setState({
      buttonStatus: checked,
    });
  }

  submitLogin() {
    const { setEmail } = this.props;
    const { email } = this.state;

    setEmail(email);

    this.setState({
      email: '',
      password: '',
    });
  }

  render() {
    const { email, password, buttonStatus } = this.state;

    return (
      <fieldset>
        <form>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            required
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            required
          />
          <Link to="/carteira">
            <button disabled={ buttonStatus } type="submit" onClick={ this.submitLogin }>
              Entrar
            </button>
          </Link>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(actionLogin(email)),
});

Login.propTypes = ({
  setEmail: PropTypes.func.isRequired,
});

export default connect(null, mapDispatchToProps)(Login);
