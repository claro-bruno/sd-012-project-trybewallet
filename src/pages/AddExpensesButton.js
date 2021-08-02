import React, { Component } from 'react';
import { func } from 'prop-types';

class AddExpensesButton extends Component {
  render() {
    const { onSubmitToExchangeRates } = this.props;
    return (
      <div>
        <button type="button" onClick={ onSubmitToExchangeRates }>
          Adicionar despesa
        </button>
      </div>
    );
  }
}

export default AddExpensesButton;

AddExpensesButton.propTypes = {
  onSubmitToExchangeRates: func.isRequired,
};
