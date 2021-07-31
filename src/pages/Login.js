import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../components/Input';
import getEmail from '../reducers/user/actions/getEmail';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      emailInput: '',
      passwordInput: '',
      redirect: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  enableButton() {
    const { emailInput, passwordInput } = this.state;
    const minPassLength = 6;
    if (passwordInput.length >= minPassLength) {
      const validFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (validFormat.test(emailInput)) return true;
    }
    return false;
  }

  handleSubmit() {
    const { emailInput } = this.state;
    const { handleEmail } = this.props;
    handleEmail(emailInput);
    this.setState({ redirect: true });
  }

  render() {
    const { emailInput, passwordInput, redirect } = this.state;

    return (
      <div>
        {/* <img /> */}
        <section>
          <Input
            id="email-input"
            type="email"
            name="emailInput"
            value={ emailInput }
            handleChange={ (e) => { this.handleChange(e); } }
          >
            Email
          </Input>
          <Input
            id="password-input"
            type="password"
            name="passwordInput"
            value={ passwordInput }
            handleChange={ (e) => { this.handleChange(e); } }
          >
            Senha
          </Input>
        </section>
        <button
          type="button"
          onClick={ this.handleSubmit }
          disabled={ !this.enableButton() }
        >
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
      </div>
    );
  }
}

Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleEmail: (payload) => dispatch(getEmail(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
