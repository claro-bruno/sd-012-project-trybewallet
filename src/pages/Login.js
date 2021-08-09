import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getEmail } from '../actions';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkEmailAndPassword = this.checkEmailAndPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  checkEmailAndPassword() {
    const { email, password } = this.state;

    const passwordMinLength = 6;

    if (password.length >= passwordMinLength) {
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (emailPattern.test(email)) return true;
    }
    return false;
  }

  handleClick() {
    const { email } = this.state;
    const { setEmail } = this.props;

    setEmail(email);

    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    return (
      <div>
        <Input
          type="email"
          name="email"
          dataTestId="email-input"
          handleChange={ this.handleChange }
        />

        <Input
          type="text"
          name="password"
          dataTestId="password-input"
          handleChange={ this.handleChange }
        />

        <Button
          name="login-button"
          text="Entrar"
          disableButton={ !this.checkEmailAndPassword() }
          handleClick={ this.handleClick }
        />

        { redirect && <Redirect to="/carteira" />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (value) => dispatch(getEmail(value)),
});

Login.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
