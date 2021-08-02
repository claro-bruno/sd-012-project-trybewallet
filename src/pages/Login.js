import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.data = this.data.bind(this);
  }

  handleSubmit() {
    const { user } = this.props;
    const { email } = this.state;
    user(email);
  }

  data({ target: { type, value } }) {
    this.setState({
      [type]: value,
    });
  }

  render() {
    const regEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i;
    const { email, password } = this.state;
    const passwordSize = 5;
    return (
      <form>
        <div>Login</div>
        <input
          type="email"
          placeholder="Email"
          data-testid="email-input"
          onChange={ this.data }
          value={ email }
        />
        <input
          type="password"
          placeholder="Senha"
          data-testid="password-input"
          onChange={ this.data }
          value={ password }
        />
        <Link to="/carteira">
          <button
            disabled={ !(regEmail.test(email) && password.length > passwordSize) }
            type="button"
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  user: (value) => dispatch(getUser(value)),
});

Login.propTypes = { user: PropTypes.func.isRequired };

export default connect(null, mapDispatch)(Login);
