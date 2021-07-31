import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginValidator } from '../helper';
import { sendUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { userAction } = this.props;
    const {
      email,
      password,
    } = this.state;
    const userState = {
      email,
      password,
    };

    userAction(userState);
  }

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form>
        <input
          type="text"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }
          placeholder="email"
          data-testid="email-input"
          name="email"
          value={ email }
        />
        <input
          type="password"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }
          placeholder="password"
          data-testid="password-input"
          name="password"
          value={ password }
        />
        <Link
          to="/carteira"
        >
          <button
            type="button"
            disabled={ !loginValidator({ email, password }) }
            onClick={ handleSubmit }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}
Login.propTypes = {
  userAction: PropTypes.func.isRequired,
};
// Escrever
const mapDispatchToProps = (dispatch) => ({
  userAction: (state) => dispatch(sendUser(state)),
});

export default connect(null, mapDispatchToProps)(Login);
