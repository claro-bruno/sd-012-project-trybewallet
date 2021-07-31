import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpense } from '../actions';
import Button from './Button';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.renderTableTitles = this.renderTableTitles.bind(this);
  }

  handleClickDelete(index) {
    const { deleteExpense } = this.props;
    deleteExpense(index);
  }

  renderTableTitles() {
    return (
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
    );
  }

  renderTable() {
    const { expenses } = this.props;
    return (
      <tbody>
        { this.renderTableTitles() }
        { expenses.map((expense) => {
          const {
            id,
            description,
            tag,
            method,
            value,
            currency,
            exchangeRates,
          } = expense;
          const { ask, name } = exchangeRates[currency];
          const regex = /(.+)\/(\w+)/.exec(name);
          return (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ regex ? regex[1] : name }</td>
              <td>{ Number(ask).toFixed(2) }</td>
              <td>{ Number(ask * value).toFixed(2) }</td>
              <td>{ regex ? regex[2] : 'Real' }</td>
              <td>
                <button type="button">Teste</button>
                /
                <Button
                  text="Deletar"
                  testeId="delete-btn"
                  onClick={ () => this.handleClickDelete(id) }
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }

  render() {
    const { expenses } = this.props;
    if (expenses.length > 0) {
      return (
        <table>
          { this.renderTable() }
        </table>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpense(id)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
