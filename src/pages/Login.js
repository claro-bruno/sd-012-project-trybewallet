import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addUserToState from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = ({
      userEmail: '',
      userPassword: '',
      shouldRedirect: false,
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.userVerify = this.userVerify.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  userVerify() {
    const { userEmail, userPassword } = this.state;
    return (userEmail !== 'alguem@email.com' || userPassword !== '123456');
  }

  handleSubmit() {
    const { userEmail } = this.state;
    const { addUser } = this.props;
    addUser(userEmail);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { userEmail, userPassword, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/carteira" />;

    return (
      <div>
        <h2>
          Login
        </h2>
        <label htmlFor="userEmail">
          Email:
          <input
            onChange={ this.handleInputChange }
            name="userEmail"
            value={ userEmail }
            data-testid="email-input"
            type="text"
            id="userEmail"
          />
        </label>
        <label htmlFor="userPassword">
          Senha:
          <input
            onChange={ this.handleInputChange }
            name="userPassword"
            value={ userPassword }
            data-testid="password-input"
            type="text"
            id="userPassword"
          />
        </label>
        <button
          onClick={ this.handleSubmit }
          disabled={ this.userVerify() }
          type="button"
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (email) => dispatch(addUserToState(email)),
});

export default connect(null, mapDispatchToProps)(Login);
