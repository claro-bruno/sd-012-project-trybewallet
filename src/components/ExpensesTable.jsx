import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenseAction, selectExpense } from '../actions';

const heads = [
  'Descrição', 'Tag', 'Método de pagamento',
  'Valor', 'Moeda', 'Câmbio utilizado',
  'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
];

class ExpensesTable extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.formatCurrency = this.formatCurrency.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  handleClick(target, payload) {
    const { removeExpense, selectExpenseAct } = this.props;
    if (target.name === 'delete') {
      removeExpense(payload);
    }
    if (target.name === 'edit') {
      selectExpenseAct(payload);
    }
  }

  formatCurrency(value, currency) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: `${currency}`,
    });

    return formatter.format(value);
  }

  renderButtons(expense, id) {
    return (
      <td className="table-buttons">
        <button
          type="button"
          data-testid="edit-btn"
          name="edit"
          onClick={ ({ target }) => this.handleClick(target, expense) }
          className="btn btn-warning"
        >
          <span className="far fa-edit" />
        </button>
        <button
          type="button"
          name="delete"
          data-testid="delete-btn"
          onClick={ ({ target }) => this.handleClick(target, id) }
          className="btn btn-danger"
        >
          <span className="fas fa-backspace" />
        </button>
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="wallet-table">
        <table>
          <thead>
            <tr>
              {heads.map((head) => <th key={ head } className={ head }>{head}</th>)}
            </tr>
          </thead>
          <tbody>

            {expenses.map((expense) => {
              const { id, currency, description,
                tag, method, value, exchangeRates } = expense;
              return (
                <tr key={ id }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>
                    {this.formatCurrency(value, currency)}
                  </td>
                  <td>{(exchangeRates[currency].name).split('/')[0]}</td>
                  <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                  <td>
                    {this.formatCurrency(
                      Number(exchangeRates[currency].ask * value), 'BRL',
                    )}
                  </td>
                  <td>Real</td>
                  {this.renderButtons(expense, id)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  selectExpenseAct: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  expenses: wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
  selectExpenseAct: (expense) => dispatch(selectExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
