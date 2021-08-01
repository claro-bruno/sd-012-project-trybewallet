import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Select from '../components/Select';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>Wallet</div>
        <form>
          <Input
            type="text"
            label="Valor"
            name="Valor"
            id="Valor"
          />
          <Input
            type="text"
            label="Descrição"
            name="Descrição"
            id="Descrição"
          />
          <Select
            label="Moeda"
            name="Moeda"
            id="Moeda"
            defaultOption=""
            defaultValue=""
            options={ ['op1', 'op2', 'op3'] }
          />
          <Select
            label="Método de pagamento"
            name="Método de pagamento"
            id="Método de pagamento"
            defaultOption="Dinheiro"
            defaultValue="Dinheiro"
            options={ ['Cartão de crédito', 'Cartão de débito'] }
          />
          <Select
            label="Tag"
            name="Tag"
            id="Tag"
            defaultOption="Alimentação"
            defaultValue="Alimentação"
            options={ ['Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
        </form>
      </div>
    );
  }
}

export default Wallet;
