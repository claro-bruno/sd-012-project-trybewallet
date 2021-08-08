import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Forms';
import listaDeGastos from '../components/listaDeGastos';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <Forms />
        <listaDeGastos />
      </div>
    );
  }
}

export default Wallet;
