import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderWallet extends Component {
  render() {
    const { email, total, moeda } = this.props;

    return (
      <header className="bg-dark text-light pt-3 pb-4">
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
        >
          <h1>Logo</h1>
          <div className="d-flex flex-column">
            {
              email
                ? <span data-testid="email-field">{email}</span>
                : <Link to="/">Entrar</Link>
            }
            <div>
              <span data-testid="total-field">
                {Math.round(total * 100) / 100}
              </span>
              {' '}
              <span data-testid="header-currency-field">{moeda}</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  moeda: PropTypes.string.isRequired,
};

export default HeaderWallet;
