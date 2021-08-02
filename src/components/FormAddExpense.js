import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class FormAddExpense extends React.Component {
  render() {
    const { currencies } = this.props;
    const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <form>
        <Input
          labelText="Valor"
          id="valor"
        />
        <Input
          labelText="Descrição"
          id="description"
        />
        <Select
          labelText="Moeda"
          id="currency"
          options={ currencies }
        />
        <Select
          labelText="Método de pagamento"
          id="payment-method"
          options={ paymentOptions }
        />
        <Select
          labelText="Tag"
          id="tag"
          options={ tagOptions }
        />
      </form>
    );
  }
}

FormAddExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FormAddExpense;
