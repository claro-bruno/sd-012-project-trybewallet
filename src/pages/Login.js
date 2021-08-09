import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      btnSubmit: true,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeBtnPassword = this.handleChangeBtnPassword.bind(this);
  }

  handleChangeEmail(event) {
    const emailValid = event.target.value;
    console.log(emailValid);
    this.setState({ email: emailValid });
  }

  handleChangeBtnPassword(event) {
    const { email } = this.state;
    const validPass = 6;
    const password = event.target.value;
    const validEmail = /\S+@\S+\.\S+/;
    if (validEmail.test(email) && password.length >= validPass) {
      this.setState({ btnSubmit: false });
      const { emailDispatch } = this.props;
      emailDispatch(email);
    } else {
      this.setState({ btnSubmit: true });
    }
  }

  render() {
    const { btnSubmit } = this.state;
    const { history } = this.props;
    return (
      <form>
        <div>Login</div>
        <input
          type="email"
          placeholder="Insira seu e-mail"
          data-testid="email-input"
          onChange={ this.handleChangeEmail }
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          data-testid="password-input"
          onChange={ this.handleChangeBtnPassword }
        />
        <button
          type="button"
          disabled={ btnSubmit }
          onClick={ () => history.push('/carteira') }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
