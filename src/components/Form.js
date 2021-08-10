import React, { Component } from 'react';
import ExpenseAmount from './expensesForm/ExpenseAmount';
import ExpenseDescription from './expensesForm/ExpenseDescription';
import SelectCurrency from './expensesForm/SelectCurrency';
import PaymentMethod from './expensesForm/PaymentMethod';
import SelectCategory from './expensesForm/SelectCategory';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <ExpenseAmount />
          <ExpenseDescription />
          <SelectCurrency />
          <PaymentMethod />
          <SelectCategory />
        </form>
      </div>
    );
  }
}

export default Form;
