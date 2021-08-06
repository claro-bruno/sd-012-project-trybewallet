import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { addEmail } from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: '',
      disabledButton: true,
      redirect: false,
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }), () => this.checkValidation());
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email } = this.state;
    const { setEmailToState } = this.props;
    setEmailToState(email);

    this.setState((state) => ({
      ...state,
      email: '',
      password: '',
      redirect: true,
    }));
  }

  checkValidation() {
    const { email, password } = this.state;

    const regexEmail = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const minPasswordLength = 6;
    const validation = !(regexEmail.test(email) && password.length >= minPasswordLength);

    this.setState((state) => ({
      ...state,
      disabledButton: validation,
    }));
  }

  render() {
    const { email, password, disabledButton, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <form onSubmit={ this.handleSubmit }>
        <Input
          label="Email: "
          type="email"
          testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />

        <Input
          label="Senha: "
          type="password"
          testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />

        <button
          type="submit"
          disabled={ disabledButton }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  setEmailToState: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setEmailToState: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
