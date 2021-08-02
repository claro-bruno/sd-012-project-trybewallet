import React from 'react';
import PropTypes from 'prop-types';

class TableExpensesLine extends React.Component {
  render() {
    const { expense } = this.props;
    const {
      // id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = expense;
    const rightCurrency = Object.values(exchangeRates)
      .filter((currencyObject) => currencyObject.code === currency);
    const convertor = Number(rightCurrency[0].ask).toFixed(2);
    const convertedValue = (
      Number(value) * Number(rightCurrency[0].ask)
    ).toFixed(2);
    return (
      <tbody>
        <tr>
          <td>{ description }</td>
          <td>{ tag }</td>
          <td>{ method }</td>
          <td>{ value }</td>
          <td>{ rightCurrency[0].name }</td>
          <td>{ convertor }</td>
          <td>{ convertedValue }</td>
          <td>Real</td>
          <td>Botões</td>
        </tr>
      </tbody>
    );
  }
}

TableExpensesLine.propTypes = {
  expense: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.array,
    ]),
  ),
};

TableExpensesLine.defaultProps = {
  expense: {
    0: 'abc def',
    1: 5678,
    2: {},
    3: [],
  },
};

export default TableExpensesLine;
