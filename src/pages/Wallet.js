import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addExpense, fetchCurrencies, deleteExpense,
} from '../actions/index';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalValue: 0,
      selectedCurrency: 'BRL',
      value: 0,
      currency: 'USD',
      tag: 'Lazer',
      description: '',
      method: 'Dinheiro',
    };
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  async handleDeleteExpense(expenseId) {
    const { deleteThisExpense } = this.props;
    await deleteThisExpense(expenseId);
    const { expenseList } = this.props;
    this.setState({
      totalValue: expenseList.map(
        (expense) => Math.round(expense.value
        * expense.exchangeRates[expense.currency].ask * 100) / 100,
      )
        .reduce((a, b) => (parseFloat(a) + parseFloat(b)), 0),
    });
  }

  async handleAddExpense() {
    const { value, currency, tag, description, method } = this.state;
    const { getCurrencies, addNewExpense } = this.props;
    await getCurrencies();
    addNewExpense({ value, currency, tag, description, method });
    const { expenseList } = this.props;
    this.setState({
      totalValue: expenseList.map(
        (expense) => Math.round(expense.value
        * expense.exchangeRates[expense.currency].ask * 100) / 100,
      )
        .reduce((a, b) => (parseFloat(a) + parseFloat(b))),
    });
  }

  handleChange(event, element) {
    this.setState({
      [element]: event.target.value,
    });
  }

  renderValueInput() {
    const { value } = this.state;
    return (
      <label htmlFor="value-input">
        Valor
        <input
          type="number"
          id="value-input"
          value={ value }
          onChange={ (event) => this.handleChange(event, 'value') }
        />
      </label>
    );
  }

  renderCurrencySelect() {
    const { currency } = this.state;
    const { currencies } = this.props;
    const currencyList = Object.keys(currencies).map((cur) => cur);
    return (
      <label htmlFor="currency-select" id="currency-label">
        Moeda
        <select
          aria-labelledby="currency-label"
          id="currency-select"
          value={ currency }
          onChange={ (event) => this.handleChange(event, 'currency') }
        >
          {currencyList.map((cur) => (cur !== /USDT/i
            ? <option key={ cur } value={ cur }>{ cur }</option> : null
          ))}
        </select>
      </label>
    );
  }

  renderPaymentMethodSelect() {
    const { method } = this.state;
    return (
      <label htmlFor="payment-method-select" id="payment-method-label">
        Método de pagamento
        <select
          aria-labelledby="payment-method-label"
          id="payment-method-select"
          value={ method }
          onChange={ (event) => this.handleChange(event, 'method') }
        >
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
      </label>
    );
  }

  renderTagSelect() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag-select" id="tag-label">
        Tag
        <select
          aria-labelledby="tag-label"
          id="tag-select"
          value={ tag }
          onChange={ (event) => this.handleChange(event, 'tag') }
        >
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </label>
    );
  }

  renderDescriptionInput() {
    const { description } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição
        <input
          type="text"
          id="description-input"
          value={ description }
          onChange={ (event) => this.handleChange(event, 'description') }
        />
      </label>
    );
  }

  renderAddExpenseButton() {
    return (
      <button type="button" onClick={ this.handleAddExpense }>
        Adicionar despesa
      </button>
    );
  }

  renderTotalValue() {
    const { totalValue } = this.state;
    return (totalValue);
  }

  render() {
    const { userEmail } = this.props;
    const { selectedCurrency, totalValue } = this.state;
    return (
      <main>
        <header>
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">{ totalValue }</p>
          <p>
            Moeda:
            <span data-testid="header-currency-field">{ selectedCurrency }</span>
          </p>
        </header>
        <div>
          <form>
            { this.renderValueInput() }
            { this.renderCurrencySelect() }
            { this.renderPaymentMethodSelect() }
            { this.renderTagSelect() }
            { this.renderDescriptionInput() }
            { this.renderAddExpenseButton() }
            <ExpensesTable handleDeleteExpense={ this.handleDeleteExpense } />
          </form>
        </div>
      </main>
    );
  }
}

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  addNewExpense: PropTypes.func.isRequired,
  currencies: PropTypes.shape(PropTypes.shape).isRequired,
  // totalExpended: PropTypes.number.isRequired,
  // setTotalExpenses: PropTypes.func.isRequired,
  expenseList: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteThisExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  currencies: state.wallet.currencies,
  expenseList: state.wallet.expenses,
  totalExpended: state.wallet.totalExpended,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  addNewExpense: (expenseData) => dispatch(addExpense(expenseData)),
  deleteThisExpense: (expenseId) => dispatch(deleteExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
