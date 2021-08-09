import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { saveUser } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disable: true,
    };

    this.HandleChange = this.HandleChange.bind(this);
    this.FormValidate = this.FormValidate.bind(this);
    this.SendUser = this.SendUser.bind(this);
  }

  HandleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.FormValidate());
  }

  SendUser() {
    const { email } = this.state;
    const { SetUserStore } = this.props;
    SetUserStore(email);
  }

  FormValidate() {
    const { email, password } = this.state;
    const lengthMin = 6;
    const validEmail = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/; // Regex criada por Rodrigo Merlone e disponibilizada no slack;
    if (validEmail.test(email) && password.length >= lengthMin) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <div>
        TrybeLogin
        <form>
          <label htmlFor="email">
            email:
            <input
              data-testid="email-input"
              type="email"
              id="email"
              name="email"
              value={ email }
              placeholder="Digite seu email"
              onChange={ this.HandleChange }
            />
          </label>
          <label htmlFor="password-id">
            senha:
            <input
              data-testid="password-input"
              type="password"
              id="password-id"
              name="password"
              value={ password }
              placeholder="Digite sua senha"
              onChange={ this.HandleChange }
            />
          </label>
        </form>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disable }
            onClick={ this.SendUser }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  SetUserStore: (user) => dispatch(saveUser(user)),
});

Login.propTypes = {
  SetUserStore: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
