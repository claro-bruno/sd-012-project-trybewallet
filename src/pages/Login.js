import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { validatorLogin } from '../loginValidation';
import { userAction } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick(e) {
    e.preventDefault();
    const { email } = this.state;
    const { setEmailToGlobalState } = this.props;
    setEmailToGlobalState(email);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="text"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ !validatorLogin(this.state) }
          onClick={ this.handleClick }
        >
          Entrar

        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmailToGlobalState: (state) => dispatch(userAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = ({
  setEmailToGlobalState: func.isRequired,
});
