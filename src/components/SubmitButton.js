import PropTypes from 'prop-types';
import React from 'react';

function SubmitButton(props) {
  const { OnbuttonSubmitExpense } = props;
  return (
    <button
      type="button"
      onClick={ OnbuttonSubmitExpense }
    >
      Adicionar despesa
    </button>
  );
}

SubmitButton.propTypes = {
  OnbuttonSubmitExpense: PropTypes.func,
}.isRequired;

export default SubmitButton;
