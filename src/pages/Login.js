import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { addEmail } from '../actions/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  handleSaveInfo = () => {
    const { changeEmail } = this.props;
    const { email } = this.state;
    changeEmail(email);
  }

  render() {
    const { email, password } = this.state;
    console.log(this.props);
    return (
    <div>
      <Input
        label="Email"
        data-testid="email-input"
        type="email"
        id="email-label"
        name="email"
        value={ email }
        onChange= { this.handleChange }
      />
      <Input
        label="Senha"
        data-testid="password-input"
        type="password"
        id="password-label"
        name="password"
        value={ password }
        onChange= { this.handleChange }
      />
      <Button 
        name="button"
        type="button"
        onClick={ this.handleSaveInfo }
        label="Entrar"
      />
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (email) => dispatch(addEmail(email))
  }// esse "email" é o valor do email escrito
}

export default connect(null, mapDispatchToProps)(Login);
// conecta com oredux
