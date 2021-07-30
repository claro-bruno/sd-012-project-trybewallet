import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      correctInput: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { history, sendToStore } = this.props;
    const { email } = this.state;
    sendToStore(email);
    history.push('/carteira');
  }

  checkInput() {
    const { email, password } = this.state;

    const minLength = 6;
    if (password.length < minLength) return null;

    const emailRegex = /^[^\s@]+@[^\s@]+.com/;
    if (emailRegex.test(email)) this.setState({ correctInput: true });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
      correctInput: false,
    }, () => this.checkInput());
  }

  render() {
    const { correctInput } = this.state;
    return (
      <form>
        <label htmlFor="email">
          e-mail:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ this.onSubmitForm }
          disabled={ !correctInput }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  sendToStore: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sendToStore: (payload) => dispatch(addEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
