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
      <table
        className="table table-striped table-bordered
        table-hover align-middle text-center"
      >
        <tbody>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
          {expenses ? expenses.map((expense) => (
            <ExpenseTableRow key={ expense.id } expense={ expense } />
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
