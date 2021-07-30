import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { actionOnChange } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { actionChange } = this.props;
    const { name, value } = target;
    actionChange(name, value);
  }

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
        onChange={ this.handleChange }
        testId="email-input"
      />
      <Input
        label="Senha"
        type="text"
        value={ senha }
        name="senha"
        onChange={ this.handleChange }
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

const mapDispatchToProps = (dispatch) => ({
  actionChange: ( ...info ) => dispatch(actionOnChange(...info))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
