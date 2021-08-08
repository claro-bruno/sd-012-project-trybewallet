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
      bttnDisable: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    const { history, changeState } = this.props;
    changeState(email);
    history.push('/carteira');
  }

  validation() {
    const passwordMinlLength = 6;
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const { password, email } = this.state;
    if (password.length >= passwordMinlLength && email.match(re)) {
      this.setState({
        bttnDisable: false,
      });
    } else {
      this.setState({
        bttnDisable: true,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validation());
  }

  render() {
    const { email, password, bttnDisable } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="E-mail">
          <input
            required
            name="email"
            type="email"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="Paassword">
          <input
            required
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button disabled={ bttnDisable } type="submit">Entrar</button>
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
