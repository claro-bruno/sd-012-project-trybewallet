import React, { Component } from 'react';
import { func } from 'prop-types';

class EditExpenseButton extends Component {
  render() {
    const { editExpenseFunc } = this.props;
    return (
      <button
        type="button"
        onClick={ editExpenseFunc }
      >
        Editar despesa
      </button>
    );
  }
}

EditExpenseButton.propTypes = {
  editExpenseFunc: func.isRequired,
};

export default EditExpenseButton;
