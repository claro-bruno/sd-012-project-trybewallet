import React from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      minLengthPassword: 6,
    };
  }

  validadeEmail() {
    const { email } = this.state;
    if (email) {
      const validEmail = /\S+@\S+\.\S+/;
      return validEmail.test(email);
    }
    return false;
  }

  validatePassword() {
    const { password, minLengthPassword } = this.state;
    if (password.length >= minLengthPassword) return true;
    return false;
  }

  render() {
    const { email, password } = this.state;
    const { saveEmail } = this.props;
    // if (!this.validadeEmail() && !this.validatePassword()) return <div>Email ou Passowd Inválidos</div>
    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          value={ email }
          onChange={ (event) => this.setState({ email: event.target.value }) }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (event) => this.setState({ password: event.target.value }) }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !this.validadeEmail() || !this.validatePassword() }
            onClick={ () => saveEmail(email) }
          >
            Entrar
          </button>
        </Link>

      </div>);
  }
}
const mapDispatchToProps = (dispath) => ({
  saveEmail: (valor) => dispath(addUser(valor)),
});

Login.propTypes = {
  saveEmail: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
