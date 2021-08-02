import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkInfos = this.checkInfos.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }), this.checkInfos);
  }

  handleClick() {
    const { history } = this.props;
    history.push('/carteira');
    const { login } = this.props;
    const { email } = this.state;
    login(email);
  }

  checkInfos() {
    const { email, password } = this.state;
    const minLength = 6;
    const isValidEmail = email.includes('@') && email.includes('.com')
      && email.split('@').length === 2 && email.indexOf('@') < email.indexOf('.com');
    const isValidPassword = password.length >= minLength;

    if (isValidEmail && isValidPassword) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <form>
        <Input
          labelText="Email:"
          name="email"
          testId="email-input"
          inputType="email"
          inputPlaceholder="Digite aqui o seu email"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          labelText="Senha:"
          name="password"
          testId="password-input"
          inputType="password"
          inputPlaceholder="Digite aqui a sua senha"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          buttonText="Entrar"
          onClick={ this.handleClick }
          disabled={ disabled }
        />
      </form>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
