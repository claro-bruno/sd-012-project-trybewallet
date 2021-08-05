import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginValidator } from '../helper';
import sendUser from '../actions';
import InputCard from '../components/InputCard';

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
        <InputCard
          id="email"
          type="text"
          placeholder="email"
          testId="email-input"
          name="email"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }
          value={ email }
        />
        <InputCard
          id="password"
          type="password"
          placeholder="password"
          testId="password-input"
          name="password"
          onChange={ (e) => handleChange(e.target.name, e.target.value) }
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
