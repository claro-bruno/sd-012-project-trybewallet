import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { setLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  onSubmit() {
    const { history, dispatchSetLogin } = this.props;
    const { email, password } = this.state;
    dispatchSetLogin(email, password);
    history.push('/carteira');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value },
      () => this.setState({ btnDisabled: this.validate() }));
  }

  validate() {
    const { email, password } = this.state;
    const minPassSize = 6;
    const parseEmail = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/; // Thanks Rodrigo Merlone - Turma 12 for sharing this 'regex' on the Slack channel.
    if (!parseEmail.test(email) || (password.length < minPassSize)) return true;
    return false;
  }

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <Input
          type="email"
          name="email"
          id="id-email"
          label="Email: "
          onChange={ this.handleChange }
          value={ email }
          testId="email-input"
        />
        <Input
          type="password"
          name="password"
          id="id-password"
          label="Senha: "
          onChange={ this.handleChange }
          value={ password }
          testId="password-input"
        />
        <Button
          label="Entrar"
          onClick={ this.onSubmit }
          disabled={ btnDisabled }
        />
      </form>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSetLogin: PropTypes.func.isRequired,

};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetLogin: (email, pass) => (dispatch(setLogin(email, pass))),
});

export default connect(null, mapDispatchToProps)(Login);
