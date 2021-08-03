import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: true,

    };
    this.handleChange = this.handleChange.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin() {
    const { email, password } = this.state;
    const emailRegex = email.match(/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/);
    const lenPassword = 5;
    // console.log(emailRegex);
    if (password.length >= lenPassword && emailRegex) {
      // console.log('condicao correta');
      this.setState({
        login: false,
      });
      // return false;
    } else {
      this.setState({ login: true });
    }
    // console.log('com erro');
    // return true;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.checkLogin();
  }

  render() {
    const { includeEmail } = this.props;
    const { email, password, login } = this.state;
    // console.log(email);

    // if (login) return <Redirect to="/carteira" />;
    // console.log(login);
    return (
      <div>
        <label htmlFor="inputEmail">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="email-input"
            value={ email }
            placeholder="E-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="inputPassword">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            value={ password }
            placeholder="Senha"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ login }
            onClick={ () => includeEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </div>);
  }
}

Login.propTypes = {
  includeEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  includeEmail: (email) => dispatch(addMail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
