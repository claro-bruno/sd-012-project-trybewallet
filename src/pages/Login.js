import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import { submitLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isvalid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validInputs = this.validInputs.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validInputs());
  }

  validInputs() {
    const { email, password } = this.state;
    const lengthPassword = 6;
    const isvalid = !(/(.*)@(.*).com/.test(email) && password.length >= lengthPassword);
    this.setState({
      isvalid,
    });
  }

  saveData() {
    const { email } = this.state;
    const { saveLogin } = this.props;
    saveLogin(email);
  }

  render() {
    const { email, password, isvalid } = this.state;
    return (
      <div>
        <h2>TrybeWallet</h2>
        <form>
          <Input
            labelContent="Login"
            placeholder="E-mail"
            type="email"
            id="email-input"
            value={ email }
            name="email"
            change={ this.handleChange }
          />
          <Input
            labelContent="Senha"
            placeholder="Senha"
            type="password"
            id="password-input"
            value={ password }
            name="password"
            change={ this.handleChange }
          />
          <Link to="/carteira">
            <button type="button" onClick={ this.saveData } disabled={ isvalid }>
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(submitLogin(email)),
});

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
