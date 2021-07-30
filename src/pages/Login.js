import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { emailInput } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((state) => ({
      ...state,
      email: '',
      password: '',
      disable: true,
    }));
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        Login
        <form>
          <input
            value={ email }
            name="email"
            type="text"
            placeholder="Email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
          <input
            value={ password }
            name="password"
            type="text"
            placeholder="Senha"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Entrar
          </button>

        </form>
      </>
    );
  }
}

export default Login;
