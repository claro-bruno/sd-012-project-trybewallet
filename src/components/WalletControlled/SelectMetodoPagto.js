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
      { value: 'Dinheiro', text: 'Dinheiro' },
      { value: 'Cartão de Crédito', text: 'Cartão de Crédito' },
      { value: 'Cartão de Débito', text: 'Cartão de Débito' },
    ];

    return (
      <Select
        name="method"
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
