import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { saveUserEmail } from '../actions';
import InputEmail from '../components/InputEmail';
import InputPassword from '../components/InputPassword';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateEmailAndPassword());
  }

  validateEmailAndPassword() {
    const { email, password } = this.state;
    const re = /\w+@\w+.com/.test(email);
    const minimumPasswordLength = 6;
    const validPassword = password.length >= minimumPasswordLength;
    const logicValidation = re && validPassword;
    this.setState({
      disabled: !logicValidation,
    });
  }

  render() {
    const { disabled, email } = this.state;
    const { storeUserEmail } = this.props;
    return (
      <main>
        <InputEmail
          handleInput={ this.handleInput }
        />
        <InputPassword
          handleInput={ this.handleInput }
        />
        <Link to="/carteira">
          <button
            type="submit"
            disabled={ disabled }
            onClick={ () => storeUserEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}

Login.propTypes = {
  storeUserEmail: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storeUserEmail: (state) => dispatch(saveUserEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
