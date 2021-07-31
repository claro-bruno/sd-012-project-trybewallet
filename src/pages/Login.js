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
    };
    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onSubmitForm() {
    const { dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);
  }

  emailHandleChange({ target }) {
    const { value } = target;
    this.setState({ email: value });
  }

  passwordHandleChange({ target }) {
    const { value } = target;
    this.setState({ password: value });
  }

  render() {
    const { email, password } = this.state;
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
                onChange={ this.emailHandleChange }
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
                onChange={ this.passwordHandleChange }
              />
            </div>
            <button
              type="submit"
              className="btn btn-danger col-12"
              onClick={ this.onSubmitForm }
              // disabled
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
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
