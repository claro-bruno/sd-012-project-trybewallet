import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userSet } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.buttonDisabled();
  }

  buttonDisabled() {
    const { email, password } = this.state;
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const five = 5;
    if ((emailRegex.test(email)) && password.length >= five) {
      this.setState({
        disabled: false,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <div className="align-self-center ml-auto mr-auto col-4 mt-5 pt-5">
        <div className="form-container mr-5">
          <h1>Trybe Wallet</h1>
          <form>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={ email }
                className="form-control mt-3"
                id="email-input"
                placeholder="Email"
                data-testid="email-input"
                onChange={ this.handleChange }
              />
              <input
                type="password"
                name="password"
                value={ password }
                className="form-control mt-3"
                id="password-input"
                aria-describedby="emailHelp"
                placeholder="Senha"
                data-testid="password-input"
                onChange={ this.handleChange }
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger col-12"
              onClick={ this.onSubmitForm }
              disabled={ disabled }
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(userSet(email)),
});

const mapStateToProps = (state) => ({
  email: state.user.user.email,
  password: state.user.user.password,
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
