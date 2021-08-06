import React from 'react';
import PropTypes from 'prop-types';

class ExpensesButton extends React.Component {
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

ExpensesButton.propTypes = {
  storeDataFunc: PropTypes.func,
}.isRequired;

export default ExpensesButton;
