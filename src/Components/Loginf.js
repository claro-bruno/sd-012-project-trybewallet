import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeEmailLogin } from '../actions';
import { validateLogin } from '../uttils';

class Loginf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { setEmail } = this.props;

    this.setState((prevState) => {
      setEmail(prevState.email);
      return ({
        ...prevState,
        email: '',
        password: '',
        redirect: true,
      });
    });
  }

  render() {
    // TRECHO INSPIRADO PELO CÓDIGO DO COLEGA THALLES CARNEIRO
    // Fonte: https://github.com/tryber/sd-012-project-trybewallet/pull/51/commits/eca9ba660b15da38212d310b582f9b4be8a73fe1

    const { email, password, redirect } = this.state;
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <main>
        <form onSubmit={ this.handleSubmit }>
          <h1>TrybeWallet</h1>
          <label htmlFor="email-input">
            <input
              id="email-input"
              type="email"
              name="email"
              data-testid="email-input"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password-input">
            <input
              id="password-input"
              type="password"
              name="password"
              data-testid="password-input"
              placeholder="Senha"
              value={ password }
              onChange={ this.handleChange }
              required
            />
          </label>
          <button
            className="btn-login"
            type="submit"
            disabled={ !validateLogin({ email, password }) }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (value) => dispatch(changeEmailLogin(value)),
});

Loginf.propTypes = {
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Loginf);
