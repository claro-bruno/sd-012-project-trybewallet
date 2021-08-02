import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalExpense: 0,
      currency: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpense, currency } = this.state;
    return (
      <header className="wallet-header">
        <h4 data-testid="email-field">
          Email:
          { email }
        </h4>
        <div className="expenses-container">
          <h4 data-testid="total-field" className="totalExpense">
            Despesa Total:
            { totalExpense }
          </h4>
          <h4 data-testid="header-currency-field">
            { currency }
          </h4>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
