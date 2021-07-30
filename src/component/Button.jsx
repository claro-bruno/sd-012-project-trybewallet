import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toLog } from '../actions';

class Button extends React.Component {
  handleClick() {
    console.log('hello');
  }

  render() {
    const valid = /(.*)@(.*).com/;
    const { state: { user: { email, password } }, login } = this.props;
    return (
      <Link to="/carteira">
        <button
          type="button"
          disabled={
            password.length < '6'
            || password !== '123456'
            || !email.match(valid)
          }
          onClick={ () => login(email) }
        >
          Entrar
        </button>
      </Link>
    );
  }
}

Button.propTypes = {
  login: PropTypes.func.isRequired,
  state: PropTypes.shape({
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(toLog(email)),
});

export default connect(null, mapDispatchToProps)(Button);
