import React from 'react';
import TableRow from './TableRow';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpensesTable extends React.Component {
  getInfo(item) {
    const {
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates
    } = item;

    const {
      name,
      high
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

ExpensesTable.propTypes = {
  expenses: PropTypes.array,
};

export default connect(mapStateToProps)(ExpensesTable);
