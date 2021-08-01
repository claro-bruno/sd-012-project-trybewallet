import React from 'react';
import { connect } from 'react-redux';
import { shape, arrayOf, string } from 'prop-types';
import ExpenseTableRow from './sub_components/ExpenseTableRow';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <tbody>
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
          {expenses ? expenses.map((expense) => (
            <ExpenseTableRow key={ expenses.id } expense={ expense } />
          )) : null}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: arrayOf(shape({
    description: string,
    tag: string,
    method: string,
    value: string,
    currency: string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
