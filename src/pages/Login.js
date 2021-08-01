import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formCheck = this.formCheck.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.formCheck();
  }

  formCheck() {
    const { email, password } = this.state;
    const minLength = 5;
    const checkEmail = /(.*)@(.*).com/; // Regex tirado do slack e fornecido por Mikaela Braga - Turma 12
    if (checkEmail.test(email) && password.length >= minLength) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  saveEmail() {
    const { changeEmail } = this.props;
    const { email } = this.state;
    changeEmail(email);
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="login-container">
        <form>
          <h3>TrybeWallet</h3>
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
            placeholder="Senha"
          />
          <Link to="/carteira">
            <button
              onClick={ () => this.saveEmail() }
              disabled={ disabled }
              type="button"
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
  changeEmail: (value) => dispatch(saveEmail(value)),
});

Login.propTypes = {
  changeEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
