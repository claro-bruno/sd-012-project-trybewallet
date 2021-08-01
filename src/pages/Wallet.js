import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <header>
          <div className="logo">
            TrybeWallet
          </div>
          <div className="user-info">
            <p data-testid="email-field" className="user-email">
              {`Email: ${email}`}
            </p>
            <p data-testid="total-field">
              Despesa Total: 0,00
            </p>
            <span data-testid="header-currency-field">BRL</span>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
