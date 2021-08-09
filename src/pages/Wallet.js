import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addExpense, fetchCurrencies, deleteExpense, editExpense,
} from '../actions/index';
import ExpensesTable from '../components/ExpensesTable';

const addText = 'Adicionar despesa';
const editText = 'Editar despesa';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: addText,
      selectedCurrency: 'BRL',
      value: 0,
      currency: 'USD',
      tag: 'Lazer',
      description: '',
      method: 'Dinheiro',
      id: 0,
    };
    this.handleAddExpense = this.handleAddExpense.bind(this);
    this.handleDeleteExpense = this.handleDeleteExpense.bind(this);
    this.handleEditExpense = this.handleEditExpense.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleDeleteExpense(expenseId) {
    const { deleteThisExpense } = this.props;
    deleteThisExpense(expenseId);
  }

  handleEditExpense(id) {
    const { expenseList } = this.props;
    const editedExpense = expenseList.find((exp) => exp.id === id);
    this.setState({
      mode: editText,
      value: editedExpense.value,
      currency: editedExpense.currency,
      tag: editedExpense.tag,
      description: editedExpense.description,
      method: editedExpense.method,
      id,
    });
  }

  handleAddExpense(mode) {
    const { value, currency, tag, description, method, id } = this.state;
    const { getCurrencies, addNewExpense, editThisExpense } = this.props;
    if (mode === addText) {
      getCurrencies();
      addNewExpense({ value, currency, tag, description, method });
    } else {
      editThisExpense({ value, currency, tag, description, method, id });
    }
    this.setState({ mode: addText });
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
          data-testid="value-input"
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
    return (
      <label htmlFor="currency-select" id="currency-label">
        Moeda
        <select
          aria-labelledby="currency-label"
          data-testid="currency-input"
          id="currency-select"
          value={ currency }
          onChange={ (event) => this.handleChange(event, 'currency') }
        >
          {currencies.map((cur) => (cur !== /USDT/i
            ? (
              <option
                key={ cur }
                data-testid={ cur }
                value={ cur }
              >
                { cur }
              </option>) : null)) }
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
          data-testid="method-input"
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
          data-testid="tag-input"
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
          data-testid="description-input"
          id="description-input"
          value={ description }
          onChange={ (event) => this.handleChange(event, 'description') }
        />
      </label>
    );
  }

  renderAddExpenseButton(mode) {
    return (
      <button type="button" onClick={ () => this.handleAddExpense(mode) }>
        { mode }
      </button>
    );
  }

  render() {
    const { userEmail, totalExpended } = this.props;
    const { selectedCurrency, mode } = this.state;
    return (
      <main>
        <header>
          <p data-testid="email-field">{ userEmail }</p>
          <p data-testid="total-field">{ totalExpended || 0 }</p>
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
            { this.renderAddExpenseButton(mode) }
            <ExpensesTable
              handleDeleteExpense={ this.handleDeleteExpense }
              handleEditExpense={ this.handleEditExpense }
            />
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
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteThisExpense: PropTypes.func.isRequired,
  totalExpended: PropTypes.number.isRequired,
  expenseList: PropTypes.arrayOf(PropTypes.shape).isRequired,
  editThisExpense: PropTypes.func.isRequired,
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
  editThisExpense: (expenseData) => dispatch(editExpense(expenseData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
