import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveUserAction } from '../actions';

// import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
      isLogged: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler({ target }) {
    const regex = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    const passLen = 6;
    const { name, value } = target;
    let { email, password } = this.state;
    if (name === 'email') { email = value; }
    if (name === 'password') { password = value; }
    this.setState({ [name]: value });
    if (password.length >= passLen && email.match(regex)) {
      this.setState({
        isBtnDisabled: false,
      });
    } else {
      this.setState({
        isBtnDisabled: true,
      });
    }
  }

  onClickHandler(e) {
    e.preventDefault();
    const { email } = this.state;
    this.setState({
      isLogged: true,
    });
    const { dispatchSaveUserAction } = this.props;
    dispatchSaveUserAction(email);
  }

  render() {
    const { email, password, isLogged, isBtnDisabled } = this.state;
    if (isLogged) { return <Redirect to="/carteira" />; }
    return (
      <form action="#">
        <p>Login</p>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ this.onChangeHandler }
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            value={ password }
            onChange={ this.onChangeHandler }
          />
        </label>
        <button
          type="submit"
          onClick={ this.onClickHandler }
          disabled={ isBtnDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    dispatchSaveUserAction: (payload) => dispatch(saveUserAction(payload)),
  }
);
const mapStateToProps = (state) => (
  {
    STOREINFO: state.reducer,
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  dispatchSaveUserAction: PropTypes.func.isRequired,
};
