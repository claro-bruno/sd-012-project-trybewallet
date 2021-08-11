import React from 'react';
import Header from '../components/Header';
import CostForm from '../components/CostForm';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CostForm />
        <Tabela />
      </div>);
  }
}

export default Wallet;
