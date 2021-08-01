import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  checkEmail() {
    const { email, password } = this.state;

    const VALID_EMAIL = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const PASSWORD = password.length;
    const min = 6;

    if (VALID_EMAIL.test(email) && PASSWORD >= min) {
      return this.setState({
        disabled: false,
      });
    }

    return this.setState({
      disabled: true,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.checkEmail();
    });
  }

  handleClick() {
    const { Logar, history } = this.props;
    const { email } = this.state;
    Logar(email);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
    return (
      <>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          name="password"
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          onClick={ this.handleClick }
          disabled={ disabled }
        >
          Entrar
        </button>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  Logar: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  Logar: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
