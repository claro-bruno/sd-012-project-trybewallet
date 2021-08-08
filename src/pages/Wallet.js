import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

import FormWallet from '../components/FormWallet';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expensesTotal: 0,
      currencyTip: 'BRL',
    };
  }

  render() {
    const { email } = this.props;
    const { expensesTotal, currencyTip } = this.state;
    return (
      <section className="wallet-section">
        <header>
          <span data-testid="email-field">
            E-mail:
            { email }
          </span>
          <span data-testid="total-field">
            Despesa total:
            { expensesTotal }
          </span>
          <span data-testid="header-currency-field">
            Moedal atual:
            { currencyTip }
          </span>
          <FormWallet />
        </header>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
