import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { TAGS, PAYMENT } from '../data';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Header />
          <Input type="text" name="valor" text="Valor" />
          <Select name="coin" text="Moeda" />
          <Select name="payment" text="Método de Pagamento" content={ PAYMENT } />
          <Input type="text" name="description" text="Descrição" />
          <Select name="tag" text="Tag:" content={ TAGS } />
        </form>
      </div>
    );
  }
}

export default Wallet;
