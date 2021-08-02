import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import newUser from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    const INITIAL_STATE = {
      email: '',
      senha: '',
      disabled: true,
      redirect: false,
    };

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { email } = this.state;
    const { changeUser } = this.props;
    changeUser(email);
    this.setState({
      redirect: true,
    });
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
    const { disabled, email, senha, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        Login
        <label htmlFor="email">
          <input
            data-testid="email-input"
            value={ email }
            type="email"
            name="email"
            placeholder="Email"
            required
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
        <button
          type="submit"
          disabled={ disabled }
          onClick={ this.onClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeUser: (value) => dispatch(newUser(value)),
});

Login.propTypes = {
  changeUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
