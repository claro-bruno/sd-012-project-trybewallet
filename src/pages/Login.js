import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { actionUserData } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
    this.sendUserData = this.sendUserData.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendUserData() {
    const { dispatchUserData } = this.props;
    dispatchUserData(this.state);
    this.setState({ email: '', password: '' });
  }

  validateLogin() {
    const { email, password } = this.state;
    const emailValidation = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/.test(email);
    // RegEx para verificação do email compartilhada pelo Rodrigo Merlone no slack da turma;
    // Método para comparar string com RegEx visto no link shorturl.at/fhkJX;
    const SIX = 6;
    return !(emailValidation && password.length >= SIX);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        Trybewallet
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
          value={ email }
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validateLogin() }
            onClick={ this.sendUserData }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserData: (state) => dispatch(actionUserData(state)),
});

Login.propTypes = {
  dispatchUserData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
