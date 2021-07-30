import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseUpdate } from '../../actions';

const EditingExpensesBtn = (props) => {
  const { form, updateExpenseInfo } = props;
  return (
    <button
      type="button"
      onClick={ () => updateExpenseInfo(form) }
    >
      Editar despesa
    </button>
  );
};

const mapStateToProps = (state) => ({
  form: state.form,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpenseInfo: (update) => dispatch(expenseUpdate(update)),
});

EditingExpensesBtn.propTypes = {
  updateExpenseInfo: PropTypes.func.isRequired,
  form: PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditingExpensesBtn);
