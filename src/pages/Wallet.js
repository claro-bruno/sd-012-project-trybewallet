import React from 'react';
import Header from '../components/Header';
import CostsForm from '../components/CostsForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CostsForm />
      </div>
    );
  }
}

export default Wallet;
