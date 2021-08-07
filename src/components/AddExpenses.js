import React from 'react';
import PropTypes from 'prop-types';

class AddExpenses extends React.Component {
  render() {
    const { storeState } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ storeState }
        >
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

AddExpenses.propTypes = {
  storeState: PropTypes.func.isRequired,
};

export default AddExpenses;
