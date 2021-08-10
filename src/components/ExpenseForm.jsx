import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import { paymentMethods, tags } from '../data';

class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <Input
          id="value"
          type="number"
          name="value"
          labelText="Valor"
        />

        <Select
          id="curreny"
          name="currency"
          labelText="Moeda"
          options={ { options: ['BRL'] } }
        />

        <Select
          id="paymentMethod"
          name="paymentMethod"
          labelText="Método de pagamento"
          options={ paymentMethods }
        />

        <Select
          id="tag"
          name="tag"
          labelText="Tag"
          options={ tags }
        />

        <Input
          id="description"
          type="text"
          name="description"
          labelText="Descrição"
        />
      </form>
    );
  }
}

export default ExpenseForm;
