import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { email } = this.state;
    const { login } = this.props;

    login({ email });
    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    }, () => this.isValid());
  }

  isValid() {
    const { email, password } = this.state;
    const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_CHARS = 6;

    const passwordValidation = password.length >= MIN_CHARS;
    const emailValidation = EMAIL_REGEX.test(email);

    this.setState({ isDisabled: !(emailValidation && passwordValidation) });
  }

  render() {
    const { email, password, isDisabled } = this.state;

    return (
      <main>
        <div className="card ml-auto mr-auto" style={ { width: '18rem' } }>
          <img
            src="https://img.freepik.com/free-vector/brown-leather-wallet-with-lots-money_68708-304.jpg?size=626&ext=jpg"
            className="card-img-top"
            alt="Wallet"
          />
          <div className="card-body">
            <form
              className="d-flex flex-column"
              onSubmit={ (event) => this.handleSubmit(event) }
            >
              <Input
                label="Email: "
                id="email-input"
                name="email"
                type="email"
                value={ email }
                handleChange={ this.handleChange }
                isValid={ this.isValid }
              />
              <Input
                label="Password: "
                id="password-input"
                name="password"
                type="text"
                value={ password }
                handleChange={ this.handleChange }
                isValid={ this.isValid }
              />
              <button
                className="btn btn-primary mt-3"
                type="submit"
                disabled={ isDisabled }
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (event) => dispatch(loginAction(event)),
});

export default connect(null, mapDispatchToProps)(Login);
