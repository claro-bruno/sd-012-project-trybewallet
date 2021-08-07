import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      blockSubmit: true,
      redirect: false,
    };

    this.validateInputs = this.validateInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validateInputs() {
    const { email, password } = this.state;
    const validEmail = /\S+@\S+\.\S+/;
    const validPassword = 6;
    if (validEmail.test(email) && password.length >= validPassword) {
      this.setState({ blockSubmit: false });
    } else {
      this.setState({ blockSubmit: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateInputs());
  }

  handleClick() {
    const { authentication } = this.props;
    const { email } = this.state;
    authentication(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, blockSubmit, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <main>
        <form>
          <input
            name="email"
            type="text"
            placeholder="EMAIL"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
          <input
            name="password"
            type="password"
            placeholder="SENHA"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ blockSubmit }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}
// export default Login;
const mapDispathToProps = (dispath) => ({
  authentication: (email) => dispath(loginUser(email)),
});

Login.propTypes = {
  authentication: propTypes.func.isRequired,
};

export default connect(null, mapDispathToProps)(Login);
