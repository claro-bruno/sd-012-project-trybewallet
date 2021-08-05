import React from 'react';
import WalletHead from '../components/WalletHead';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies: [],
      expenses: [],
    };
  }

  render() {
    return (
      <div>
        <WalletHead />
      </div>
    );
  }
}

export default Wallet;
