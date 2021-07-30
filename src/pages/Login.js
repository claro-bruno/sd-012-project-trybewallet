import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      emailCheck: false,
      passwordCheck: false,
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const email = e.target.value;
    this.setState({ user: email });
    if (email.match(/^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/) != null) {
      this.setState({ emailCheck: true });
    } else {
      this.setState({ emailCheck: false });
    }
  }

  handlePassword(e) {
    const senha = e.target.value;
    const passwordMinLength = 6;
    if (senha.length >= passwordMinLength) {
      this.setState({ passwordCheck: true });
    } else {
      this.setState({ passwordCheck: false });
    }
  }

  checkButton() {
    const { emailCheck, passwordCheck } = this.state;
    return !(emailCheck && passwordCheck);
  }

  handleSubmit() {
    const { user } = this.state;
    const { getUserEmail } = this.props;
    this.setState({ redirect: true });
    getUserEmail(user);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div className="login">
        <form>
          <img src="https://course.betrybe.com/images/trybe-logo-e10dbaaa26462aa149b81a924b00df07.png?vsn=d" alt="" />
          <input
            className="form-control"
            data-testid="email-input"
            type="email"
            placeholder="EMAIL"
            onChange={ this.handleChange }
          />
          <input
            className="form-control"
            data-testid="password-input"
            type="password"
            placeholder="SENHA"
            onChange={ this.handlePassword }
          />
          <div className="btn-div">
            <button
              className="btn btn-success"
              type="submit"
              disabled={ this.checkButton() }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  getUserEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getUserEmail: (user) => dispatch(getUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
