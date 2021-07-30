import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;
    return (
      <form>
        <input
          type="text"
          onChange={ (e) => this.setState({ email: e.target.value }) }
          placeholder="email"
          data-testid="email-input"
        />
        <input
          type="text"
          onChange={ (e) => this.setState({ email: e.target.value }) }
          placeholder="email"
          data-testid="password-input"
        />
        <button
          type="button"
        >
          Entrar
        </button>
        <Link to="/wallet" onClick={ () => login({ email, password }) } />
      </form>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
};
// Ler
const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);
