import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addLogin } from '../actions/index';
import Button from '../components/Button';
import Inputs from '../components/Inputs';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveTask = this.handleSaveTask.bind(this);
    this.emailIsValid = this.emailIsValid.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleSaveTask() {
    const { setLogin } = this.props;
    const { email } = this.state;
    setLogin(email);
  }

  emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  render() {
    const { email, password } = this.state;
    const passwLenght = 6;

    const buttonSubmit = {
      type: 'submit',
      onClick: this.handleSaveTask,
      disabled: !(this.emailIsValid(email) && password.length >= passwLenght),
      buttonText: 'Entrar',
      testId: '',
    };

    const inputEmail = {
      id: 'email-input',
      labelText: 'E-mail',
      type: 'text',
      name: 'email',
      value: email,
      onChange: this.handleChange,
      testId: 'email-input',
    };

    const inputPassword = {
      id: 'password-input',
      labelText: 'Senha',
      type: 'password',
      name: 'password',
      value: password,
      onChange: this.handleChange,
      testId: 'password-input',
    };

    return (
      <div>
        Login
        <form>
          <Inputs { ...inputEmail } />
          <Inputs { ...inputPassword } />
          <Link to="/carteira">
            <Button { ...buttonSubmit } />
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLogin: (login) => dispatch(addLogin(login)),
});

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
