import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addUser } from '../actions';
import './Login.css';

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
      <main className="container">
        <form>
          <h2>Login</h2>
          <label htmlFor="email">
            <div className="input-fild">
              <input
                type="text"
                id="email"
                data-testid="email-input"
                name="email"
                onChange={ this.handleChange }
                placeholder="Enter your e-mail"
              />
              <div className="underline" />
            </div>
          </label>
          <label htmlFor="password">
            <div className="input-fild">
              <input
                type="password"
                id="password"
                data-testid="password-input"
                name="password"
                onChange={ this.handleChange }
                placeholder="Enter your password"
              />
              <div className="underline" />
            </div>
          </label>
          <Link to="/carteira">
            <input
              className="enter-button"
              type="button"
              name="Entrar"
              value="Entrar"
              onClick={ this.handleClick }
              disabled={ disableBtn }
            />
          </Link>
        </form>
      </main>
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
