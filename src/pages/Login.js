import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { login } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitForm() {
    const { history, userEmail } = this.props;
    const { email } = this.state;
    userEmail(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  inputsValidation() {
    const { email, senha } = this.state;
    const emailValidation = /(.*)@(.*).com/.test(email);
    // validação de email utilizada de acordo com sugestão da colega mikaela braga em thread no slack
    const charactersSenha = senha.length;
    const minimoSenha = 6;
    if (charactersSenha >= minimoSenha && emailValidation === true) {
      return false;
    }
    return true;
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <h2 data-testid="login-h2">
          Faça seu login:
        </h2>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={ email }
          dataTestid="email-input"
          onChange={ this.handleChange }
          required
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={ senha }
          dataTestid="password-input"
          onChange={ this.handleChange }
          required
        />
        <Link to="/carteira">
          <button
            type="button"
            name="Entrar"
            dataTestid="button-enter"
            onClick={ this.onSubmitForm }
            disabled={ this.inputsValidation() }
          >
            Entrar
          </button>

        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(login(email)),
});

const mapStateToProps = (state) => ({
  emailText: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
