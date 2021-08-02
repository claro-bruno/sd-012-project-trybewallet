import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/');
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={ email }
          dataTestid="email-input"
          onChange={ this.handleChange }
          required
        />
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={ senha }
          dataTestid="password-input"
          onChange={ this.handleChange }
          required
        />
        <Button
          name="Entrar"
          dataTestid="button-enter"
          onClick={ this.onSubmitForm }
        />
      </div>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
