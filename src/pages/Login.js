import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';
import trybeWallet from '../images/trybe-wallet.gif';
import trybeWalletBlank from '../images/trybe-wallet_blank.gif';
import FieldsetLogin from '../components/styledComponents/FieldsetLogin';
import FormLogin from '../components/styledComponents/FormLogin';
import DarkmodeButton from '../components/DarkmodeButton';
import './login.css';

const EMAIL_REGEX = /^[a-z0-9](\.|-|_|[a-z]|\d)+@([a-z]|\d)+\.[a-z]{2,3}(\.[a-z]{2})?$/;
const MIN_PASSWORD_LENGTH = 6;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isValid: false,
    };

    this.isValid = this.isValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoginFields = this.renderLoginFields.bind(this);
  }

  isValid() {
    const { email, password } = this.state;
    const checkEmail = EMAIL_REGEX.test(email);
    const checkPassword = password.length >= MIN_PASSWORD_LENGTH;
    this.setState({ isValid: checkEmail && checkPassword });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { login, history: { push } } = this.props;
    login(email);
    push('/carteira');
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.isValid());
  }

  renderLoginFields() {
    const { email, password, isValid } = this.state;
    const { darkmode } = this.props;
    return (
      <FieldsetLogin darkmode={ darkmode }>
        <img
          className="logo-login"
          src={ darkmode ? trybeWalletBlank : trybeWallet }
          alt="trybe-wallet-logo"
        />
        <div className="fields-content">
          <label htmlFor="login-email">
            <input
              data-testid="email-input"
              name="email"
              type="email"
              id="login-email"
              value={ email }
              onChange={ this.handleChange }
              placeholder="Email"
            />
          </label>
          <label htmlFor="login-password">
            <input
              data-testid="password-input"
              name="password"
              type="password"
              id="login-password"
              value={ password }
              onChange={ this.handleChange }
              placeholder="Senha"
            />
          </label>
          <button
            disabled={ !isValid }
            type="submit"
            onClick={ this.handleSubmit }
          >
            Entrar

          </button>
        </div>
      </FieldsetLogin>
    );
  }

  render() {
    const { darkmode } = this.props;
    return (
      <div className="login-page">
        <DarkmodeButton className="darkmode-login" />
        <FormLogin darkmode={ darkmode }>
          {this.renderLoginFields()}
        </FormLogin>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

const mapStateToProps = (state) => ({
  darkmode: state.user.darkmode,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  darkmode: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
