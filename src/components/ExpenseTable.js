import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteExpense, actionEditForm } from '../actions';
import Button from './Button';

class ExpenseTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.renderTableTitles = this.renderTableTitles.bind(this);
  }

  handleClickDelete(index) {
    const { deleteExpense } = this.props;
    deleteExpense(index);
  }

  handleClickEdit(id) {
    const { editForm } = this.props;
    editForm(id);
  }

  renderTableTitles() {
    return (
      <tr className="table-headers">
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
                <Button
                  text="Editar"
                  testeId="edit-btn"
                  onClick={ () => this.handleClickEdit(id) }
                  bclass="edit-button"
                />
                /
                <Button
                  text="Deletar"
                  testeId="delete-btn"
                  onClick={ () => this.handleClickDelete(id) }
                  bclass="delete-button"
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
    return (
      <table>
        <tbody>
          { this.renderTableTitles() }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpense(id)),
  editForm: (id) => dispatch(actionEditForm(id)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  editForm: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
