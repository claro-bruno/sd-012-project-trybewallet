import React from 'react';
import PropTypes from 'prop-types';
import Select from '../standart/Select';

class SelectCategoria extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    const optionsArray = [
      { value: 'Food', text: 'Alimentação' },
      { value: 'Leisure', text: 'Lazer' },
      { value: 'Work', text: 'Trabalho' },
      { value: 'Transport', text: 'Transporte' },
      { value: 'Health', text: 'Saúde' },
    ];

    return (
      <Select
        name="category"
        labelText="Categoria(tag):"
        value={ value }
        handleChange={ handleChange }
        options={ optionsArray }
      />
    );
  }
}

const { string, func } = PropTypes;
SelectCategoria.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default SelectCategoria;
