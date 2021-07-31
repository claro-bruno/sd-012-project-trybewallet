import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import InputLogin from '../components/InputLogin';
import { verifyEmail, verifyPassword } from '../helper/helpers';
import { userAction } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { myUserAction } = this.props;
    myUserAction(name, value);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/carteira');
  }

  verifyUser(email, password) {
    if (verifyEmail(email) && verifyPassword(password)) {
      return false;
    }
    return true;
  }

  render() {
    const { myUserState } = this.props;
    const { email, password } = myUserState;
    const objEmail = {
      type: email,
      name: 'email',
      dataTestId: 'email-input',
      placeholder: 'Email',
      typeText: 'text',
    };
    const objPassword = {
      type: password,
      name: 'password',
      dataTestId: 'password-input',
      placeholder: 'Password',
      typeText: 'password',
    };
    return (
      <form>
        <InputLogin
          obj={ objEmail }
          handleChange={ this.handleChange }
        />
        <InputLogin
          obj={ objPassword }
          handleChange={ this.handleChange }
        />
        <Button
          disabled={ this.verifyUser(email, password) }
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

Login.defaultProps = {
  myUserState: {},
  password: '',
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  myUserAction: PropTypes.func.isRequired,
  myUserState: PropTypes.objectOf(PropTypes.string),
  password: PropTypes.string,
};

const mapStateToProps = (state) => ({
  myUserState: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  myUserAction: (type, value) => dispatch(userAction(type, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
