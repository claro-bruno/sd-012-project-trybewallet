import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Formulario';
import TabelaGastos from '../components/Tabela';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <Forms />
        <TabelaGastos />
      </div>
    );
  }
}

export default Wallet;
