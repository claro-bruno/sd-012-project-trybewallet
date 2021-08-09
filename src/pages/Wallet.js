import React from 'react';
import FormDespesas from '../components/FormDespesas';
import HeaderWallet from '../components/HeaderWallet';
import TabelaDeGastos from '../components/TabelaDeGastos';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <HeaderWallet />
        <FormDespesas />
        <TabelaDeGastos />
      </main>
    );
  }
}

export default Wallet;
