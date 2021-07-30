import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      required: 'alguem@alguem.com',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      const { email, senha } = this.state;
      this.validation(email, senha);
    });
  }

  validation(email, senha) {
    const minValue = 6;
    this.setState({ disabled: true });
    if (email.split('@').length === 2
      && email.includes('.com') === true
      && senha.length >= minValue
    ) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { disabled, email, senha, required } = this.state;
    return (
      <form>
        Login
        <label htmlFor="email">
          <input
            data-testid="email-input"
            value={ email }
            type="email"
            name="email"
            placeholder="email"
            required={ required }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="senha">
          <input
            data-testid="password-input"
            value={ senha }
            name="senha"
            type="password"
            placeholder="Senha"
            required
            minLength="6"
            onChange={ this.handleChange }
          />
        </label>
        <button type="submit" disabled={ disabled }>Entrar</button>
      </form>
    );
  }
}

export default Login;
