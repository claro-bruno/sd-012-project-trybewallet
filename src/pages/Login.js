import React from 'react';
import Input from '../components/Input';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disable: true,
      buttonCSS: 'button-disable',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      disable: true,
      buttonCSS: 'button-disable',
    }, () => this.formValidation());
  }

  formValidation() {
    const { email, password } = this.state;
    // Para pegar essa expressão regular eu recorri ao slack da turma 12 na thread do Rodrigo Merlone chamada [Projeto TrybeWallet][Regex] - sugestão da Mikaela Braga!
    const emailFormat = /(.*)@(.*).com/;
    const passwordMin = 6;
    let emailValidation = false;
    let passwordValidation = false;

    if (email.match(emailFormat)) {
      emailValidation = true;
    }

    if (password.length >= passwordMin) {
      passwordValidation = true;
    }

    if (emailValidation && passwordValidation) {
      this.setState({ disable: false, buttonCSS: 'button-enable' });
    }
  }

  render() {
    const { email, password, disable, buttonCSS } = this.state;
    return (
      <section className="login-page">
        <h1>TRYBE WALLET</h1>
        <form className="login-section">
          <Input
            type="email"
            name="email"
            testID="email-input"
            placeHolder="E-mail"
            value={ email }
            onChange={ this.handleChange }
          />
          <Input
            type="password"
            name="password"
            testID="password-input"
            placeHolder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            className={ buttonCSS }
            disabled={ disable }
            type="button"
          >
            ENTRAR
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
