import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addEmail } from '../actions/userActions';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }), () => this.checkValidation());
  }

  handleSubmit(event) {
    event.preventDefault();
    // const { email } = this.state;
    // const { setEmailToStore } = this.props;
    // setEmailToStore(email);

    this.setState((state) => ({
      ...state,
      email: '',
      password: '',
      redirect: true,
    }));
  }

  checkValidation() {
    console.log('checkValidation');
    const { email, password } = this.state;
    const regexEmail = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const minPasswordLength = 6;
    const isValid = regexEmail.test(email) && password.length >= minPasswordLength;
    this.setState({ isValid });
  }

  render() {
    const { email, password, isValid, redirect } = this.state;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <form>
        <Input
          label="Email:"
          type="email"
          id="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          label="Password:"
          type="password"
          id="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ !isValid }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailToStore: (email) => dispatch(addEmail(email)),
});

Login.propTypes = {
  setEmailStore: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
