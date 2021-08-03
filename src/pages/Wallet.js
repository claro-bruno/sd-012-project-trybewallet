import React from 'react';
import Header from '../components/Header';
import Expenditures from '../components/Expenditures';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Expenditures />
      </div>
    );
  }
}

export default Wallet;
