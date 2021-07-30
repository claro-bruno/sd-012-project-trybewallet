import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      valid: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { email } = this.state;
    const { submitEmail } = this.props;
    submitEmail(email);
  }

  /* Referencia da validação com regextest usada: https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469  */
  validation() {
    const { email, password } = this.state;
    const minLength = 5;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = !(Patt.test(email) && password.length > minLength);
    this.setState({ valid });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validation());
  }

  render() {
    const { email, password, valid } = this.state;

    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            placeholder="Seu Email aqui"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            data-testid="password-input"
            type="password"
            placeholder="Sua senha aqui"
            name="password"
            minLength="6"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              id="butaoSubmit"
              disabled={ valid }
              onClick={ this.onSubmit }
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
  submitEmail: (email) => dispatch(actionEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  submitEmail: PropTypes.func,
}.isRequired;
