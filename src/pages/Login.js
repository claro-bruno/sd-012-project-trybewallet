import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionGetEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      button: true,

    };

    this.handleChange = this.handleChange.bind(this);
    this.validEntries = this.validEntries.bind(this);
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.validEntries());
  }

  // Essa parte do código retirei do repositória da colega Cristina Pineda

  validEntries() {
    const { email, password } = this.state;
    const minLength = 6;
    if (email.includes('@') && email.includes('.com') && password.length >= minLength) {
      this.setState({
        button: false,
      });
    } else {
      this.setState({
        button: true,
      });
    }
  }

  handleSubmitEmail() {
    const { setEmailStore } = this.props;
    const { email } = this.state;
    setEmailStore(email);
  }

  render() {
    const { email, password, button } = this.state;
    return (
      <section>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={ email }
              placeholder="Email"
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="text"
              name="password"
              id="password"
              value={ password }
              placeholder="Password"
              data-testid="password-input"
              minLength="6"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              id="button"
              type="button"
              disabled={ button }
              onClick={ this.handleSubmitEmail }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  setEmailStore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setEmailStore: (email) => dispatch(actionGetEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
