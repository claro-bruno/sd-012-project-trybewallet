import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import submitEmail from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    // Não chame this.setState() aqui!
    this.handleChang = this.handleChang.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      redirect: false,
      emailText: '',
      passwordText: '',
    };
  }

  handleSubmit() {
    const { emailText } = this.state;
    const { getEmail } = this.props;
    this.setState({ redirect: true });
    getEmail(emailText);
  }

  handleChang({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  enableButton() {
    const { emailText, passwordText } = this.state;
    const passwordmin = 6;
    if (passwordText.length >= passwordmin) {
      const formatvalid = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
      if (formatvalid.test(emailText)) return true;
    }
    return false;
  }

  render() {
    const { redirect } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          name="emailText"
          onChange={ this.handleChang }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="senha"
          name="passwordText"
          onChange={ this.handleChang }
        />
        <button
          onClick={ this.handleSubmit }
          disabled={ !this.enableButton() }
          type="button"
        >
          Entrar
        </button>
        {redirect && <Redirect to="/carteira" /> }
      </div>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (payload) => dispatch(submitEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
