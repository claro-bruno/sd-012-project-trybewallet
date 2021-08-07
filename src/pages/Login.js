import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userInformation } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      buttonDisable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validarEmail = this.validarEmail.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { email, password } = this.state;
    if ((email !== prevState.email) || (password !== prevState.password)) {
      this.validarEmail();
    }
  }

  handleSubmit() {
    const { handleUserInformation } = this.props;
    const { email } = this.state;

    handleUserInformation(email);
  }

  // retirado de https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  validarEmail() {
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    const MINLENGTH = 6;
    if ((re.test(email)) && (password.length >= MINLENGTH)) {
      return this.setState({ buttonDisable: false });
    } return this.setState({ buttonDisable: true });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { buttonDisable, email, password } = this.state;
    return (
      <div>
        <label htmlFor="email-input">
          <input
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ buttonDisable }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </Link>

      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleUserInformation: (user) => dispatch(userInformation(user)),
});

Login.propTypes = {
  handleUserInformation: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
