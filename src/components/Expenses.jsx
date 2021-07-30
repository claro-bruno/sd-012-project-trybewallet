import React, { Component } from 'react';
import ExpensesLabel from './ExpensesLabel';
import SelectLabel from './SelectLabel';

const paymentMethods = [
  {
    value: 'cash',
    content: 'Dinheiro',
  },
  {
    value: 'creditCard',
    content: 'Cartão de crédito',
  },
  {
    value: 'debitCard',
    content: 'Cartão de débito',
  },
];

const tag = [
  {
    value: 'food',
    content: 'Alimentação',
  },
  {
    value: 'recreation',
    content: 'Lazer',
  },
  {
    value: 'work',
    content: 'Trabalho',
  },
  {
    value: 'transport',
    content: 'Transporte',
  },
  {
    value: 'health',
    content: 'Saúde',
  },
];

class Expenses extends Component {
  render() {
    return (
      <form>
        <ExpensesLabel
          html="expense"
          text="Valor"
          type="number"
        />
        <ExpensesLabel
          html="description"
          text="Descrição"
          type="text"
        />
        <SelectLabel
          html="currency"
          text="Moeda"
          option={ [{ content: 'URL', value: '5,17' }] }
        />
        <SelectLabel
          html="paymentMethod"
          text="Método de pagamento"
          option={ paymentMethods }
        />
        <SelectLabel
          html="expenses"
          text="Tag"
          option={ tag }
        />
      </form>
    );
  }
}

export default Expenses;
