import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableExpensesLine from './TableExpensesLine';

class TableExpenses extends React.Component {
  constructor(props) {
    super(props);

    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    const { expenses } = this.props;
    // console.log(expenses);
    return expenses.map((expense) => (
      <TableExpensesLine
        key={ expense.id }
        expense={ expense }
      />
    ));
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        { this.getItems() }
      </table>
    );
  }
}

TableExpenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // PropTypes.string,
      PropTypes.object,
      // PropTypes.number,
      // PropTypes.array,
    ]),
  ),
};

TableExpenses.defaultProps = {
  expenses: [
    {},
    {},
  ],
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(TableExpenses);
