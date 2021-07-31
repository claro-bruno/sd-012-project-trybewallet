import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction } from '../actions/userAction';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  handleChangeSenha(e) {
    this.setState({
      senha: e.target.value,
    });
  }

  validateEmail(email, password) {
    const re = /\S+@\S+\.\S+/;
    const NUMBER_SIX = 6;
    if (re.test(email) && password.length >= NUMBER_SIX) {
      return true;
    }
    return false;
  }

  render() {
    const { emailDispatch } = this.props;
    const { email, senha } = this.state;

    return (
      <div>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleChangeEmail }
          />
          <input
            name="senha"
            type="senha"
            placeholder="senha"
            data-testid="password-input"
            onChange={ this.handleChangeSenha }
          />
          <Link to="/carteira">
            <button
              disabled={ !this.validateEmail(email, senha) }
              variant="primary"
              type="button"
              onClick={ () => emailDispatch(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(userAction(state)),
});

LoginForm.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);
