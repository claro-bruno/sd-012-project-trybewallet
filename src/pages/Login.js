import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.loginValidation);
  }

  loginValidation() {
    const { email, password } = this.state;
    // referencia do regexValidation: https://regexr.com/3e48o
    const regexValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = regexValidation.test(email);
    const requiredLength = 6;

    if (isValid && password.length >= requiredLength) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { addUserAction } = this.props;
    return (
      <section>
        <input
          type="text"
          name="email"
          value={ email }
          onChange={ this.handleChange }
          data-testid="email-input"
          placeholder="e-mail"
        />
        <input
          type="text"
          name="password"
          value={ password }
          onChange={ this.handleChange }
          data-testid="password-input"
          placeholder="senha"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isDisabled }
            onClick={ () => addUserAction(email) }
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserAction: (payload) => dispatch(addUser(payload)),
});

Login.propTypes = {
  addUserAction: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
