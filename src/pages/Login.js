import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitEmail } from '../actions';
import logoPaturso from '../Img/logoPaturso.jpg';
import './LoginStyle.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validationLogin = this.validationLogin.bind(this);
    this.handleSaveLogin = this.handleSaveLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }), () => this.validationLogin());
  }

  validationLogin() {
    const { email, password } = this.state;
    const passwordMaxLength = 6;
    if (/(.*)@(.*).com/.test(email) && password.length >= passwordMaxLength) {
      this.setState({
        disabled: false,
      });
    }
  }

  handleSaveLogin() {
    const { email } = this.state;
    const { setEmailStore } = this.props;
    setEmailStore(email);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { email, password, disabled, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <main className="login-container">
        <section className="login-content">
          <div className="login-header">
            <img src={ logoPaturso } alt="Logo Paturso" />
            <h1>Trybe Wallet</h1>
          </div>
          <form className="login-form">
            <input
              data-testid="email-input"
              type="text"
              name="email"
              value={ email }
              placeholder="Email"
              onChange={ this.handleChange }
            />
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              placeholder="Password"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              onClick={ this.handleSaveLogin }
              disabled={ disabled }
            >
              ENTRAR
            </button>
          </form>
        </section>
      </main>
    );
  }
}

Login.propTypes = {
  setEmailStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setEmailStore: (email) => dispatch(submitEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
