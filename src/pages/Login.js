import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validation() {
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { password, email } = this.state;
    const minLength = 6;
    if (password.length >= minLength && email.match(re)) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      { [name]: value },
      () => this.validation(),
    );
  }

  render() {
    const { buttonDisabled, email } = this.state;
    const { dispatchLogin } = this.props;
    return (
      <div>
        <input
          name="email"
          data-testid="email-input"
          type="email"
          placeholder="Email"
          onChange={ this.handleChange }
        />

        <input
          name="password"
          data-testid="password-input"
          type="text"
          placeholder="Senha"
          onChange={ this.handleChange }
        />

        <Link to="/carteira">
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ () => dispatchLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (email) => dispatch(setLogin(email)),
});

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
