import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.clickToDelete = this.clickToDelete.bind(this);
  }

  clickToDelete(id) {
    const { eraseExpense } = this.props;
    eraseExpense(id);
  }

  render() {
    const {
      expense: {
        id,
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
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => this.clickToDelete(id) }
          >
            Excluir
          </button>
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

const mapDispatchToProps = (dispatch) => ({
  eraseExpense: (id) => dispatch(deleteExpense(id)),
});

export default connect(null, mapDispatchToProps)(Table);
