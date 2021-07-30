import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';
import { deleteWallet } from '../actions';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  constructor() {
    super();

    this.getInfo = this.getInfo.bind(this);
  }
  handleDelete(id) {
    const { deleteItem } = this.props;
    deleteItem(id);
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
      "Real Brasileiro",
      <button onClick={ () => this.handleDelete(id) } data-testid="delete-btn">Excluir</button>,
    ];

    return info;
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
          { expenses.length > 0 && 
            expenses.map((item, index) => {
              return <TableRow key={ index } content={ getInfo(item) } />
            }
            )
          }
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
  expenses: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
