import React, { Component } from 'react';
import { func } from 'prop-types';

class AddExpenseButton extends Component {
  render() {
    const { storeDataFunc } = this.props;
    return (
      <button
        type="button"
        onClick={ storeDataFunc }
      >
        Adicionar Despesa
      </button>
    );
  }
}

AddExpenseButton.propTypes = {
  storeDataFunc: func.isRequired,
};

export default AddExpenseButton;
