import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionSaveEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }

  render() {
    const { email } = this.state;
    const { saveEmail } = this.props;
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          value={ email }
          onChange={ this.changeEmail }
        />
        <input
          type="password"
          minLength="6"
          data-testid="password-input"
        />
        <button
          type="button"
          onClick={ () => saveEmail(email) }
        >
          Entrar
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveEmail: (email) => dispatch(actionSaveEmail(email)),
  };
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
