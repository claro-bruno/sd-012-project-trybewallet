import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disableBtn: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputValidation = this.inputValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputValidation() {
    const { email, password } = this.state;
    const minPassword = 6;
    const validationEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    /* Validação de email com regex vista no link:
    https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail */
    if (validationEmail.test(email) && password.length >= minPassword) {
      this.setState({
        disableBtn: false,
      });
    } else {
      this.setState({
        disableBtn: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.inputValidation);
  }

  handleClick() {
    const { add } = this.props;
    const { email } = this.state;
    add(email);
  }

  render() {
    const { disableBtn } = this.state;
    return (
      <div>
        <form>
          <h2>Login</h2>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              data-testId="email-input"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              data-testId="password-input"
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <input
              type="button"
              name="Entrar"
              value="Entrar"
              onClick={ this.handleClick }
              disabled={ disableBtn }
            />
          </Link>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  add: (user) => dispatch(addUser(user)),
});

Login.propTypes = {
  add: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
