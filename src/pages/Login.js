import React from 'react';
// Usando Material-UI
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.saveStateEmail = this.saveStateEmailStore.bind(this);
    this.validation = this.validation.bind(this);

    this.state = {
      email: '',
      password: '',
      button: true,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => { this.validation(); });
  }

  // referência em:
  // https://www.kindacode.com/article/live-email-validation-in-react-with-regex/
  // Verifica a validação do Email e Password
  validation() {
    const { email, password } = this.state;
    const emailValid = /\S+@\S+\.\S+/;
    const passwordValid = 6;
    if (emailValid.test(email) && passwordValid <= password.length) {
      this.setState({ button: false });
    }
    return true;
  }

  // Salva o email no Store que é chamada ao clicar no botão Entrar
  saveStateEmailStore() {
    const { stateSave } = this.props;
    const { email } = this.state;
    stateSave(email);
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <form>

        <div className="text-center">
          <h1>Login Trybe Wallet</h1>
        </div>
        <label htmlFor="input-email">
          E-mail:
          <input
            data-testid="email-input"
            id="input-email"
            label="Email"
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="input-password">
          Senha:
          <input
            data-testid="password-input"
            required
            id="input-password"
            label="Senha"
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="submit"
            onClick={ this.saveStateEmailStore() }
            disabled={ button }
          >
            Entrar
          </button>
        </Link>

      </form>

    );
  }
}
const mapDispatchToProps = (dispatch) => ({

  stateSave: (payload) => dispatch({ type: 'USER_STATE', payload }),
});

Login.propTypes = {
  stateSave: PropTypes.func,
}.isRequered;

export default connect(null, mapDispatchToProps)(Login);
// export default Login;
