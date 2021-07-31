import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import walletImage from '../wallet.png';

class CardLogin extends Component {
  render() {
    const { email, password, isDisabled, handleChange, handleSubmit } = this.props;
    return (
      <main>
        <div
          className="card ml-auto mr-auto"
          style={ { maxWidth: '27rem' } }
        >
          <img
            src={ walletImage }
            className="card-img-top"
            alt="Wallet"
          />
          <div className="card-body">
            <form
              className="d-flex flex-column"
              onSubmit={ (event) => handleSubmit(event) }
            >
              <Input
                label="Email: "
                id="email-input"
                name="email"
                type="email"
                value={ email }
                handleChange={ handleChange }
              />
              <Input
                label="Password: "
                id="password-input"
                name="password"
                type="text"
                value={ password }
                handleChange={ handleChange }
              />
              <button
                className="btn btn-primary mt-3"
                type="submit"
                disabled={ isDisabled }
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

CardLogin.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CardLogin;
