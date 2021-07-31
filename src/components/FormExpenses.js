import React from 'react';
import Input from './Input';
import Select from './Select';
import { inputs, selects } from '../dataInputsSelects';

const FormExpenses = (props) => (
  <form>
    {inputs.map(({ labelContent, placeholder, type, name, id }) => (<Input
      labelContent={ labelContent }
      placeholder={ placeholder }
      type={ type }
      name={ name }
      key={ name }
      // change={ handleChange }
      id={ id }
    />))}
    <Select
      labelContent="Moeda"
      id="currency-input"
      name="currency"
      // value={ currency }
      // change={ handleChange }
      options={ [] }
    />
    {selects.map(({ labelContent, options, id, name }) => (<Select
      labelContent={ labelContent }
      id={ id }
      name={ name }
      value={ props[name] }
      // change={ handleChange }
      options={ options }
      key={ id }
    />))}
  </form>
);

export default FormExpenses;
