import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userLogin } from '../actions';

class Button extends Component {
  render() {
    const { logIn,
      onClick: { emailInput, formErrors:
        { emailInput:
          emailError,
        passwordInput:
          passwordError,
        },
      typed: { emailInput: emailTyped, passwordInput: passwordTyped },
      },
    } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="button"
          disabled={ !emailTyped || !passwordTyped || emailError || passwordError }
          onClick={ () => logIn(emailInput) }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logIn: (email) => dispatch(userLogin(email)),
});

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}.isRequired;

export default connect(null, mapDispatchToProps)(Button);
