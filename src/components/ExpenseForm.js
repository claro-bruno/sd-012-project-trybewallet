import React from 'react';
import Input from './Input';
import Button from './Button';

class ExpenseForm extends React.Component {
  render() {
    return (
      <form>
        <Input
          label="Valor"
          type="text"
          name="valor"
          onChange={ () => {} }
          value=""
        />
      </form>
    );
  }
}

export default ExpenseForm;