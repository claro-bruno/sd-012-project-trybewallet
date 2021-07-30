import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { deleteWallet } from '../actions';

class ExpensesTable extends React.Component {
  constructor() {
    super();

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(item) {
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = item;

    const {
      name,
      high,
    } = exchangeRates[currency];

    const info = [
      description,
      tag,
      method,
      `${currency} ${value}`,
      name,
      parseFloat(high).toFixed(2),
      (high * value).toFixed(2),
      'Real Brasileiro',
      <button
        onClick={ () => this.handleDelete(id) }
        data-testid="delete-btn"
        type="button"
        key={ id }
      >
        Excluir
      </button>,
    ];

    return info;
  }

  handleDelete(id) {
    const { deleteItem } = this.props;
    deleteItem(id);
  }

  render() {
    const header = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];

    const { expenses } = this.props;
    const { getInfo } = this;
    return (
      <table>
        <thead>
          <TableRow content={ header } />
        </thead>
        <tbody>
          { expenses.length > 0
            && expenses.map((item, index) => (<TableRow
              key={ index }
              content={ getInfo(item) }
            />))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (value) => dispatch(deleteWallet(value)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
