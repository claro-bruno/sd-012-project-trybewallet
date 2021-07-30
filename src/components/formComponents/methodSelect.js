import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleExpenseForm } from '../../actions';

const methodSelect = (props) => {
  const { method, handleExpenseFormInputs } = props;
  return (
    <label htmlFor="method">
      Método de pagamento:
      <select
        name="method"
        id="method"
        value={ method }
        data-testid="method-input"
        onChange={ handleExpenseFormInputs }
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
  );
};

const mapStateToProps = (state) => ({
  coins: state.wallet.coins,
  method: state.form.method,
});

const mapDispatchToProps = (dispatch) => ({
  handleExpenseFormInputs: ({ target }) => dispatch(handleExpenseForm(target)),
});

methodSelect.propTypes = {
  handleExpenseFormInputs: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(methodSelect);
