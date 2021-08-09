import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const {
      expense: {
        description,
        tag,
        method,
        value,
        currency,
        exchangeRates,
      },
    } = this.props;
    const exchange = exchangeRates[currency];
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{exchange.name.split('/')[0]}</td>
        <td>{Number(exchange.ask).toFixed(2)}</td>
        <td>{Number(exchange.ask * value).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  }
}

Table.propTypes = ({
  expense: PropTypes.objectOf({
    description: PropTypes.string,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.number,
    currency: PropTypes.string,
    exchangeRates: PropTypes.objectOf({
      ask: PropTypes.number,
    }),
  }),
}).isRequired;

export default Table;
