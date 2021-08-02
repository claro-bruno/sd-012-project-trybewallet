import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableRow from './TableRow';
import { deleteWallet, editWallet } from '../actions';

class ExpensesTable extends React.Component {
  constructor() {
    super();

    this.getInfo = this.getInfo.bind(this);
  }

  getInfo(item) {
    const { handleEdit } = this.props;
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
      ask,
    } = exchangeRates[currency];

    const info = [
      description,
      tag,
      method,
      (Math.round(value * 100)/100),
      name,
      (Math.round(ask * 100) / 100).toFixed(2),
      (Math.round((ask * value) * 100) / 100).toFixed(2),
      'Real',
      <button
        onClick={ () => this.handleDelete(id) }
        data-testid="delete-btn"
        type="button"
        key={ id }
      >
        Excluir
      </button>,
      <button
        onClick={ () => handleEdit(id) }
        data-testid="edit-btn"
        type="button"
        key={ id }
      >
        Editar
      </button>
    ];

    return info;
  }

  handleDelete(id) {
    const { deleteItem } = this.props;
    deleteItem(id);
  }

  handleEdit(id) {
    const { editItem } = this.props;
    editItem(id);
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
          <TableRow isHeader content={ header } />
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
  editItem: (value) => dispatch(editWallet(value)),
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
