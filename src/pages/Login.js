import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheck() {
    const { email, password } = this.state;
    const parseEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minLenghtPassword = 6;
    const checkEmail = parseEmail.test(email);
    if (checkEmail && password.length >= minLenghtPassword) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { submitEmail } = this.props;
    return (
      <form>
        <input
          type="email"
          label="Email"
          onChange={ this.handleChange }
          placeholder="Digite o Email"
          name="email"
          value={ email }
          onKeyUp={ this.handleCheck }
          data-testid="email-input"
        />
        <input
          label="Password"
          onChange={ this.handleChange }
          placeholder="Senha"
          name="password"
          type="password"
          value={ password }
          onKeyUp={ this.handleCheck }
          data-testid="password-input"
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
            onClick={ () => submitEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  submitEmail: (email) => dispatch((loginAction(email))),
});

export default connect(null, mapStateToProps)(Login);

Login.propTypes = {
  submitEmail: PropTypes.func.isRequired,
};
