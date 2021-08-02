import React from 'react';
import PropTypes from 'prop-types';
import { curName, valueCalc } from '../helpers';

class ExpenseItem extends React.Component {
  render() {
    const { expense } = this.props;
    const { id, value, description, currency, method, tag, exchangeRates } = expense;
    const roundStringNumber = (ask) => {
      const number = parseFloat(ask);
      const numRounded = Math.round(number * 100) / 100;
      const numbToFix = numRounded.toFixed(2);
      return numbToFix;
    };
    return (
      <tr id={ id }>
        <td name={ description }>{ description }</td>
        <td name={ tag }>{ tag }</td>
        <td name={ method }>{ method }</td>
        <td name={ value }>{ value }</td>
        <td
          name={ curName(currency, exchangeRates) }
        >
          { curName(currency, exchangeRates) }
        </td>
        <td
          name={ roundStringNumber(exchangeRates[currency].ask) }
        >
          { roundStringNumber(exchangeRates[currency].ask) }
        </td>
        <td name={ valueCalc(expense) }>{ valueCalc(expense) }</td>
        <td name="Real">Real</td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
  }).isRequired,
};

export default ExpenseItem;
