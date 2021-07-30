import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { history, changeState } = this.props;
    changeState(email);
    history.push('/carteira');
  }

  validation() {
    const passwordMinimalLen = 6;
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { password, email } = this.state;
    if (password.length >= passwordMinimalLen && email.match(re)) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validation());
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email-input">
          E-mail
          <input
            required
            name="email"
            value={ email }
            data-testid="email-input"
            type="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input
            required
            name="password"
            value={ password }
            data-testid="password-input"
            type="password"
            onChange={ this.handleChange }
          />
        </label>
        <button disabled={ buttonDisabled } type="submit">Entrar</button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  changeState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeState: (state) => dispatch(saveEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);
