import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { paymentMethods, tags } from '../data';

class ExpenseForm extends Component {
  render() {
    const { currencies } = this.props;

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
          options={ currencies }
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

        <Button
          name="login-button"
          text="Adicionar despesa"
          handleClick={ () => console.log('adicionar despesa') }
        />
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isrequired;

export default ExpenseForm;
