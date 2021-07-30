import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleExpenseForm } from '../../actions';

const valueInput = (props) => {
  const { value, handleExpenseFormInputs } = props;
  return (
    <label htmlFor="value">
      Valor:
      <input
        type="number"
        name="value"
        value={ value }
        data-testid="value-input"
        onChange={ handleExpenseFormInputs }
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  value: state.form.value,
});

const mapDispatchToProps = (dispatch) => ({
  handleExpenseFormInputs: ({ target }) => dispatch(handleExpenseForm(target)),
});

valueInput.propTypes = {
  handleExpenseFormInputs: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(valueInput);
