import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  actionUserEmail,
  actionUserPassword,
  actionEntrarButton,
} from '../actions/actionUser';

// regex fornecido pelo grande Merlone
const EMAIL_VALIDATOR = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

class Login extends React.Component {
  render() {
    const {
      authenticateEmailFunc,
      authenticatePasswordFunc,
      finalAuthentication,
      saveEmail,
    } = this.props;
    return (
      <div>
        <h3>Login</h3>
        <form>
          <label htmlFor="email-input">
            <span>Email: </span>
            <input
              id="email-input"
              type="email"
              data-testid="email-input"
              onChange={ authenticateEmailFunc }
            />
          </label>
          <label htmlFor="password-input">
            <span>Senha: </span>
            <input
              type="password"
              data-testid="password-input"
              onChange={ authenticatePasswordFunc }
            />
          </label>
          <Link to="/carteira">
            <button
              id="entrarButton"
              type="button"
              disabled={ finalAuthentication ? '' : 'disabled' }
              onClick={ saveEmail }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  saveEmail: PropTypes.func,
  authenticateEmailFunc: PropTypes.func,
  authenticatePasswordFunc: PropTypes.func,
  finalAuthentication: PropTypes.bool,
};

Login.defaultProps = {
  saveEmail: () => {},
  authenticateEmailFunc: () => {},
  authenticatePasswordFunc: () => {},
  finalAuthentication: false,
};

const mapStateToProps = ({
  user: { email, authenticateEmail, authenticatePassword },
}) => ({
  email,
  finalAuthentication: authenticateEmail && authenticatePassword,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateEmailFunc: ({ target: { value } }) => {
    const isValid = EMAIL_VALIDATOR.test(value);
    dispatch(actionUserEmail(isValid));
  },
  authenticatePasswordFunc: ({ target: { value } }) => {
    const passwordMinimumLength = 6;
    const passwordValidator = (value.length >= passwordMinimumLength);
    dispatch(actionUserPassword(passwordValidator));
  },
  saveEmail: () => {
    const email = document.getElementById('email-input');
    dispatch(actionEntrarButton(email.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
