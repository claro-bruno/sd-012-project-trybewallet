import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    const { email, senha, isValid } = this.props;
    return (
    <div>
      <img src="" alt="" />
      <Input
        label="Email"
        type="text"
        value={ email }
        name="email"
        onChange=""
        testId="email-input"
      />
      <Input
        label="Senha"
        type="text"
        value={ senha }
        name="senha"
        onChange=""
        testId="password-input"
      />
      <Button
        text="Entrar"
        name="login"
        onClick=""
        isValid={ isValid }
      />
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  senha: state.user.senha,
  isValid: state.user.isValid
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
