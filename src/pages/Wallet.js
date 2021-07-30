import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';
import { fetchAll } from '../services/api';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      currenciesTag: [], 
    };
    this.currenciesToState = this.currenciesToState.bind(this);
  }

  currenciesToState(obj) {
    const currencies = Object.keys(obj);
    currencies.splice(currencies.indexOf('USDT'), 1);
    this.setState({ currenciesTag: currencies });
  };

  async componentDidMount() {
    const response = await fetchAll();
    this.currenciesToState(response);
  }
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
