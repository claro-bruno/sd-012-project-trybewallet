import React from 'react';
import PropTypes from 'prop-types';
import Input from '../standart/Input';

class InputValor extends React.Component {
  render() {
    const {
      props: {
        value,
        handleChange,
      },
    } = this;

    return (
      <Input
        name="expenseAmount"
        labelText="Valor:"
        type="number"
        value={ value }
        handleChange={ handleChange }
        placeholder="Digite o Valor"
      />
    );
  }
}

const { string, func } = PropTypes;
InputValor.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default InputValor;
