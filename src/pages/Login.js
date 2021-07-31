import React from 'react';
import Input from '../components/Input';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      emailInput: '',
      passwordInput: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { emailInput, passwordInput } = this.state;

    return (
      <div>
        {/* <img /> */}
        <section>
          <Input
            id="email-input"
            type="email"
            name="emailInput"
            value={ emailInput }
            handleChange={ (e) => { this.handleChange(e); } }
          >
            Email
          </Input>
          <Input
            id="password-input"
            type="password"
            name="passwordInput"
            value={ passwordInput }
            handleChange={ (e) => { this.handleChange(e); } }
          >
            Senha
          </Input>
        </section>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
