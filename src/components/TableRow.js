import React from 'react';
import PropTypes from 'prop-types';

class TableRow extends React.Component {
  render() {
    const {
      currency,
      description,
      exchangeRates,
      id,
      method,
      tag,
      value,
      deleteExpense } = this.props;

    const valorConvertido = (value * exchangeRates[currency].ask).toFixed(2);
    const askRounded = Math.round(exchangeRates[currency].ask * 100) / 100;
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>
          {value}
        </td>
        {/* RegEx vista no link shorturl.at/vPS57 */}
        <td>{(exchangeRates[currency].name).match((/[^/]+/))}</td>
        <td>{}</td>
        <td>
          {valorConvertido}
        </td>
        <td>Real</td>
        <td><button type="button" data-testid="delete-btn" onClick={ () => deleteExpense(id, valorConvertido) }>D</button></td>
      </tr>
    );
  }
}

export default TableRow;
