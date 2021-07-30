import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateUser() {
    const { email, password } = this.state;
    let disabled = true;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minLength = 6;
    const validEmail = re.test(email);
    const validPass = password.length >= minLength;
    if (validEmail && validPass) {
      disabled = false;
    }
    return disabled;
  }

  handleSubmit() {
    const { history, dispatchUser } = this.props;
    const { email } = this.state;
    dispatchUser(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    return (
      <section>
        <input
          type="email"
          name="email"
          value={ email }
          data-testid="email-input"
          onChange={ this.handleChange }
          placeholder="Digite seu e-mail"
        />
        <input
          type="password"
          name="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.handleChange }
          placeholder="Digite sua senha"
        />
        <button
          type="button"
          disabled={ this.validateUser() }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchUser: (state) => dispatch(saveUser(state)),
  };
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
