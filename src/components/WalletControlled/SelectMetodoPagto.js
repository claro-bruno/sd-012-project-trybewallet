import React from 'react';
import PropTypes from 'prop-types';
import Select from '../standart/Select';

class SelectMetodoPagto extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    const optionsArray = [
      { value: 'Cash', text: 'Dinheiro' },
      { value: 'Credit Card', text: 'Cartão de Crédito' },
      { value: 'Debit Card', text: 'Cartão de Débito' },
    ];

    return (
      <Select
        name="paymentMethod"
        labelText="Método de Pagamento:"
        value={ value }
        handleChange={ handleChange }
        options={ optionsArray }
      />
    );
  }
}

const { string, func } = PropTypes;
SelectMetodoPagto.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default SelectMetodoPagto;
