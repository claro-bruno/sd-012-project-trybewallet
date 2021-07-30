import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      valid: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validation());
  }

  /* Referencia da validação com regextest usada: https://cursos.alura.com.br/forum/topico-como-validar-email-e-senha-em-javascript-80469  */
  validation() {
    const { email, password } = this.state;
    const minLength = 5;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = !(Patt.test(email) && password.length > minLength);
    this.setState({ valid });
  }

  render() {
    const { email, password, valid } = this.state;

    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            placeholder="Seu Email aqui"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            data-testid="password-input"
            type="password"
            placeholder="Sua senha aqui"
            name="password"
            minLength="6"
            value={ password }
            onChange={ this.handleChange }
          />

          <button
            type="submit"
            id="butaoSubmit"
            disabled={ valid }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
