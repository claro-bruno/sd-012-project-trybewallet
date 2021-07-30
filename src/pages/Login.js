import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser, saveCurrencyThunk } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.loginValidation);
  }

  handleClick() {
    const { email } = this.state;
    const { addUserAction, getCurrency } = this.props;
    addUserAction(email);
    getCurrency();
  }

  loginValidation() {
    const { email, password } = this.state;
    // referencia do regexValidation: Mikaela Braga
    const regexValidation = /(.*)@(.*).com/;
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
            onClick={ this.handleClick }
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
  getCurrency: () => dispatch(saveCurrencyThunk()),
});

Login.propTypes = {
  addUserAction: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
