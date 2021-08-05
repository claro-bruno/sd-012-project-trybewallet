import React from 'react';
import { Link } from 'react-router-dom';

const INITIAL_STATE = {
  email: '',
  password: 0,
  isDisable: true,
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateInput());
  }

  validateInput() {
    const { password, email } = this.state;
    const validateEmail = /(.*)@(.*).com/;
    const minLength = 6;

    if (validateEmail.test(email) && password.length >= minLength) {
      this.setState({
        isDisable: false,
      });
      return true;
    }
  }

  render() {
    const { email, password, isDisable } = this.state;
    return (
      <div>
        <form>
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ isDisable }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
