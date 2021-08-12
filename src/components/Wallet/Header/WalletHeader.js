import React, { Component } from 'react';
import EmailDisplay from './EmailDisplay';
import TotalValueDisplay from './TotalValueDisplay';
import TotalValueCurrencyDisplay from './TotalValueCurrencyDisplay';

class WalletHeader extends Component {
  render() {
    return (
      <header>
        <EmailDisplay />
        <TotalValueDisplay />
        <TotalValueCurrencyDisplay />
      </header>
    );
  }
}

export default WalletHeader;
