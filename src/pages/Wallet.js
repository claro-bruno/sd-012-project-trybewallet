import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
class Wallet extends React.Component {
  render() {
    return (
    <div>
      <Header />
      <form>
        <Input labelName="Valor" type="number" />
        <Input labelName="Descrição" />
        <Select labelName="Moeda" />
        <Select labelName="Método de pagamento" />
        <Select labelName="Tag" />
      </form>
    </div>
    );
  }
}

export default Wallet;
