import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { user, password } = this.state;
    return (
      <section>
        <div>Login</div>
        <input
          type="text"
          value={ user }
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          value={ password }
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <button type="button"> Entrar </button>
      </section>
    );
  }
}

export default Login;
