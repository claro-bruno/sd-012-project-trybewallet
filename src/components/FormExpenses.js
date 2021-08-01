import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { inputs, selects } from '../dataInputsSelects';

const FormExpenses = (props) => {
  const { coins, submit, currency, handleChange } = props;

  return (
    <form>
      {inputs.map(({ labelContent, placeholder, type, name, id }) => (<Input
        labelContent={ labelContent }
        placeholder={ placeholder }
        type={ type }
        name={ name }
        key={ name }
        change={ handleChange }
        id={ id }
      />))}
      <Select
        labelContent="Moeda"
        id="currency-input"
        name="currency"
        value={ currency }
        change={ handleChange }
        options={ coins }
      />
      {selects.map(({ labelContent, options, id, name }) => (<Select
        labelContent={ labelContent }
        id={ id }
        name={ name }
        value={ props[name] }
        change={ handleChange }
        options={ options }
        key={ id }
      />))}
      <button type="button" onClick={ submit }>Adicionar despesa</button>
    </form>
  );
};

FormExpenses.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string).isRequired,
  submit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

export default FormExpenses;
