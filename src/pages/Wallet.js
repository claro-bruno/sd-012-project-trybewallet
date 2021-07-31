import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      moeda: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { total, moeda } = this.state;

    return (
      <header className="bg-dark text-light">
        <div className="container d-flex justify-content-between">
          <h1>Logo</h1>
          <div className="d-flex flex-column">
            {
              email
                ? <span data-testid="email-field">{email}</span>
                : <span>Não loggado</span>
            }
            <span data-testid="total-field">
              {total}
              {' '}
              <span data-testid="header-currency-field">{moeda}</span>
            </span>
          </div>
        </div>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
