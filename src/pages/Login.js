import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.verifyInputs = this.verifyInputs.bind(this);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  onSubmitForm() {
    const { history } = this.props;
    history.push('/carteira');
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
    return (
      <div>
        <form>
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
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.onSubmitForm }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  history: PropTypes.func.isRequired,
};
