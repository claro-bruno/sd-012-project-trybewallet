import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.validateEmaileSenha = this.validateEmaileSenha.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // logica de validação de email por regex retirada de; https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmaileSenha(email, senha) {
    const re = /\S+@\S+\.\S+/;
    const senhatamanho = 6;
    if (senha.length >= senhatamanho && re.test(email)) {
      return false;
    }
    return true;
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="senha"
          min="6"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ this.validateEmaileSenha(email, senha) }
          onClick={ this.onSubmitForm }
        >
          ENTRAR
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (value) => dispatch(loginAction(value)),
}
);

export default connect(null, mapDispatchToProps)(Login);
