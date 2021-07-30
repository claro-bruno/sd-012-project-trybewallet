import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const valid = /(.*)@(.*).com/;
    const { state: { user: { email, password } } } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="button"
          disabled={
            password.length < '6'
            || password !== '123456'
            || !email.match(valid)
          }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  state: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Button;
