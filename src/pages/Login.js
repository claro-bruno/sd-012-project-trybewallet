import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {
      target: { value, name },
    } = event;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <Input
          type="text"
          name="email"
          value={ email }
          handleChange={ this.handleChange }
        >
          Email:
        </Input>
        <Input
          type="password"
          name="password"
          value={ password }
          handleChange={ this.handleChange }
        >
          Senha:
        </Input>
        <Button>Entrar</Button>
      </div>
    );
  }
}

export default Login;
