import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLog } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.verifyInputs());
  }

  /* Logica usada de refencia do website https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469 */

  verifyInputs() {
    const { email, password } = this.state;
    const number = 5;
    const Regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const disabled = !(Regex.test(email) && password.length > number);
    this.setState({ disabled });
  }

  render() {
    const { email, password, disabled } = this.state;
    const { userEmail } = this.props;
    return (
      <div>
        <form>
          <h2>Faça seu login abaixo:</h2>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Seu Email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Sua Senha"
            name="password"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira" onClick={ () => userEmail({ email }) }>
            <button
              type="button"
              disabled={ disabled }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (e) => dispatch(actionLog(e)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};
