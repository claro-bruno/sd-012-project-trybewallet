import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      emailCheck: false,
      senha: '',
      senhaCheck: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    // implementa validação //
    const r = /^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
    if (name === 'email') {
      if (r.test(value)) {
        this.setState({
          emailCheck: true,
        });
      } else {
        this.setState({
          emailCheck: false,
        });
      }
    }
    const maxLength = 5;
    if (name === 'senha') {
      if (value.length > maxLength) {
        this.setState({
          senhaCheck: true,
        });
      } else {
        this.setState({
          senhaCheck: false,
        });
      }
    }
  }

  handleClick() {
    const { emailDispatch, history } = this.props;
    const { email } = this.state;
    emailDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { senhaCheck, emailCheck, email, senha } = this.state;
    const check = !(senhaCheck === true && emailCheck === true);
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
              required
            />
          </label>
          <button
            type="button"
            disabled={ check }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(login(email)),
});

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
