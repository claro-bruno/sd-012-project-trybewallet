import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="text"
              name="email"
              value={ email }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              type="password"
              name="senha"
              value={ senha }
            />
          </label>
        </form>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
