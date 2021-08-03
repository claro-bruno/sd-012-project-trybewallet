import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userEmail, userPwd } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.emailIsValid = this.emailIsValid.bind(this);
  }

  // https://ui.dev/validate-email-address-javascript/ fonte retirada.
  emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  validateForm() {
    const { email, password } = this.state;
    const minPassword = 5;
    if (this.emailIsValid(email) === true && password.length >= minPassword) {
      return this.setState({ disable: false });
    }

    return this.setState({ disable: true });
  }

  handleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
    this.validateForm();
  }

  handleSubmitUser() {
    const { submitEmail, submitPwd } = this.props;
    const { email, password } = this.state;
    submitEmail(email);
    submitPwd(password);
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <form>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
        </div>
        <div>
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ disable }
              onClick={ this.handleSubmitUser }
            >
              Entrar
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    submitEmail: (email) => dispatch(userEmail(email)),
    submitPwd: (pwd) => dispatch(userPwd(pwd)),
  });

Login.propTypes = {
  submitEmail: PropTypes.func.isRequired,
  submitPwd: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
