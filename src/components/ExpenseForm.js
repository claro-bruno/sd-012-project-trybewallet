import React from 'react';
import Input from './Input';
import Button from './Button';
import Select from './Select';

const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          label="Valor"
          type="text"
          name="valor"
          onChange={ () => {} }
          value=""
        />
        <Select
          label="Moeda"
          name="moeda"
          options={[]}
        />
        <Select
          label="Método de pagamento"
          name="payment"
          options={ paymentMethods }
        />
        <Select
          label="Tag"
          name="tag"
          options={ category }
        />
        <Input
          label="Descrição"
          type="text"
          name="descricao"
          onChange={ () => {} }
          value=""
        />
        <Button
          text="Adicionar"
          name="add"
          onClick={() => {}}
        />
      </form>
    );
  }
}

export default ExpenseForm;