import React from 'react';
import Header from '../components/Header';
import CostForm from '../components/CostForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CostForm />
      </div>);
  }
}

export default Wallet;
