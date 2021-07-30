import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogIn } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      blockSubmit: true,
    };

    this.checkEmailAndPassword = this.checkEmailAndPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkEmailAndPassword() {
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
    this.setState({
      [name]: value,
    },
    () => this.checkEmailAndPassword());
  }

  handleSubmit() {
    const { history, dispatchSetValue } = this.props;
    const { email } = this.state;
    dispatchSetValue(email);

    history.push('/carteira');
  }

  // requisito 2 feito baseado no código do colega Kevin Oliveira: https://github.com/tryber/sd-012-project-trybewallet/pull/6/commits/cd5c2016477fadf5dc3942979aa2cb1857eed21b

  render() {
    const { email, password, blockSubmit } = this.state;
    return (
      <fieldset>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          placeholder="email"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          placeholder="senha"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ blockSubmit }
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (email) => dispatch(userLogIn(email)),
});

export default connect(null, mapDispatchToProps)(Login);
