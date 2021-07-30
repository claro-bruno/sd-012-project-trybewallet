import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleExpenseForm } from '../../actions';

const currencySelect = (props) => {
  const { coins, currency, handleExpenseFormInputs } = props;

  return (
    <label htmlFor="currency">
      Moeda:
      <select
        name="currency"
        id="currency"
        value={ currency }
        data-testid="currency-input"
        onChange={ handleExpenseFormInputs }
      >
        { coins && coins.map((coin) => (
          <option key={ coin }>{ coin }</option>)) }
      </select>
    </label>
  );
};

const mapStateToProps = (state) => ({
  coins: state.wallet.currencies,
  currency: state.form.currency,
});

const mapDispatchToProps = (dispatch) => ({
  handleExpenseFormInputs: ({ target }) => dispatch(handleExpenseForm(target)),
});

currencySelect.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.string),
  handleExpenseFormInputs: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
};

currencySelect.defaultProps = {
  coins: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(currencySelect);
